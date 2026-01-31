'use client';

import { TableCell, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from '@/lib/mock/users';

interface Props {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserRow({ user, onEdit, onDelete }: Props) {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        <IconButton onClick={() => onEdit(user)}><EditIcon /></IconButton>
        <IconButton onClick={() => onDelete(user.id)}><DeleteIcon /></IconButton>
      </TableCell>
    </TableRow>
  );
}
