'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import { mockUsers, User } from '@/lib/mock/users';
import UserDialog from './UserDialog';
import UserRow from './UserRow';

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleDelete = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const handleEdit = (user: User) => setEditingUser(user);

  const handleSave = (user: User) => {
    setUsers(prev => prev.map(u => u.id === user.id ? user : u));
    setEditingUser(null);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Button variant="contained" sx={{ mb: 2 }} onClick={() => setEditingUser({id: Date.now().toString(), name:'',email:'',role:'viewer'})}>
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
      {editingUser && <UserDialog user={editingUser} onSave={handleSave} onClose={() => setEditingUser(null)} />}
    </Paper>
  );
}
