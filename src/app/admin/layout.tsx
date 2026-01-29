import { ReactNode } from 'react';
import Sidebar from '@/features/layout/components/Sidebar';
import { Box } from '@mui/material';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />
      <Box component="main" flexGrow={1} p={3}>
        {children}
      </Box>
    </Box>
  );
}
