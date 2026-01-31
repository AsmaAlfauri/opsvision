'use client';

import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Sidebar from '@/components/Layout/Sidebar';
import ProtectedRoute from '@/components/guards/ProtectedRoute';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <ProtectedRoute>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </ProtectedRoute>
  );
}
