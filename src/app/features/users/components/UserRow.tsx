'use client';

import { TableCell, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from '@/app/data/users';

interface UserRowProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserRow({ user, onEdit, onDelete }: UserRowProps) {
  return (
    <TableRow hover>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        <IconButton aria-label="edit user" onClick={() => onEdit(user)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete user" onClick={() => onDelete(user.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
