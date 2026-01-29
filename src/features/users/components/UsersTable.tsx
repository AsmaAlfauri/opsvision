'use client';

import { Table, TableHead, TableRow, TableCell, TableBody, Button, CircularProgress, Typography } from '@mui/material';
import { useAuthStore } from '@/store/authStore';
import { useEffect, useState } from 'react';
import { getUsers, deleteUser, createUser, updateUser, User } from '@/features/users/services/mockApi';
import UserRow from './UserRow';
import UserDialog from './UserDialog';

export default function UsersTable() {
  const role = useAuthStore((state) => state.role);
  const isAdmin = role === 'admin';

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Optimistic Delete
  const handleDelete = async (id: string) => {
    if (!isAdmin) return;
    const oldUsers = [...users];
    setUsers(users.filter((u) => u.id !== id));
    try {
      await deleteUser(id);
    } catch {
      setUsers(oldUsers);
    }
  };

  // Open dialog
  const handleOpenDialog = (user?: User) => {
    setEditingUser(user || null);
    setOpenDialog(true);
  };

  // Optimistic Add/Edit
  const handleSave = async (form: Omit<User, 'id'>) => {
    if (!isAdmin) return;

    if (editingUser) {
      const oldUsers = [...users];
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...form } : u)));
      try {
        await updateUser(editingUser.id, form);
      } catch {
        setUsers(oldUsers);
      }
    } else {
      const newUser: User = { ...form, id: (users.length + 1).toString() };
      setUsers((prev) => [...prev, newUser]);
      try {
        await createUser(form);
      } catch {
        setUsers((prev) => prev.filter((u) => u.id !== newUser.id));
      }
    }

    setOpenDialog(false);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (users.length === 0) return <Typography>No users found.</Typography>;

  return (
    <>
      {isAdmin && (
        <Button variant="contained" sx={{ mb: 2 }} onClick={() => handleOpenDialog()}>
          Add User
        </Button>
      )}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            {isAdmin && <TableCell align="right">Actions</TableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              isAdmin={isAdmin}
              onEdit={handleOpenDialog}
              onDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>

      <UserDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={handleSave}
        editingUser={editingUser}
      />
    </>
  );
}
