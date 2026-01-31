'use client';

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import UserDialog from './UserDialog';
import UserRow from './UserRow';
import useUsers from '../hooks/useUsers';
import UsersSkeleton from './UsersTableSkeleton';
import { User } from '@/app/types';
import Empty from '@/app/components/States/Empty';
import Error from '@/app/components/States/Error';

export default function UsersTable() {
  const { users, addUser, updateUser, deleteUser, loading } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEdit = (user: User) => setEditingUser(user);

  const handleSave = (user: User) => {
    try {
      if (users.some(u => u.id === user.id)) updateUser(user);
      else addUser(user);
      setEditingUser(null);
    } catch (err) {
      setError('Failed to save user');
    }
  };

  const handleDelete = (id: string) => {
    try {
      deleteUser(id);
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  if (loading) return <UsersSkeleton />;
  if (error) return <Error message={error} />;
  if (!users.length) return <Empty message="No users available." />;

  return (
    <Paper sx={{ p: 2 }}>
      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => setEditingUser({ id: Date.now().toString(), name: '', email: '', role: 'viewer' })}
      >
        Add User
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(u => (
            <UserRow key={u.id} user={u} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </TableBody>
      </Table>

      {editingUser && (
        <UserDialog user={editingUser} onSave={handleSave} onClose={() => setEditingUser(null)} />
      )}
    </Paper>
  );
}
