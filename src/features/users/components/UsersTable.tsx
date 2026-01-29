'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import { useAuthStore } from '@/store/authStore';

const mockUsers = [
  {
    id: '1',
    name: 'Sara Ahmed',
    email: 'sara@opsvision.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: '2',
    name: 'Omar Khaled',
    email: 'omar@opsvision.com',
    role: 'viewer',
    status: 'inactive',
  },
];

export default function UsersTable() {
  const role = useAuthStore((state) => state.role);
  const isAdmin = role === 'admin';

  return (
    <>
      {isAdmin && (
        <Button variant="contained" sx={{ mb: 2 }}>
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
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
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
                    <Button size="small">Edit</Button>
                    <Button size="small" color="error">
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
