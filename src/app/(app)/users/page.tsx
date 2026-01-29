'use client';

import { Typography } from '@mui/material';
import UsersTable from '@/features/users/components/UsersTable';

export default function UsersPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <UsersTable />
    </>
  );
}
