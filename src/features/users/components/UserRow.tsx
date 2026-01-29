'use client';

import { TableRow, TableCell, Stack, Button, Chip } from '@mui/material';
import { User } from '@/features/users/services/mockApi';

interface UserRowProps {
  user: User;
  isAdmin: boolean;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserRow({ user, isAdmin, onEdit, onDelete }: UserRowProps) {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        <Chip
          label={user.status}
          color={user.status === 'active' ? 'success' : 'default'}
          size="small"
        />
      </TableCell>
      {isAdmin && (
        <TableCell align="right">
          <Stack direction="row" spacing={1}>
            <Button size="small" onClick={() => onEdit(user)}>Edit</Button>
            <Button size="small" color="error" onClick={() => onDelete(user.id)}>Delete</Button>
          </Stack>
        </TableCell>
      )}
    </TableRow>
  );
}
