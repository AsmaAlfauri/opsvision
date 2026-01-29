'use client';

import { Typography } from '@mui/material';
import Dashboard from '@/features/dashboard/components/Dashboard';

export default function DashboardPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Dashboard />
    </>
  );
}
