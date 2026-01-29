'use client';

import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: '#f5f6f8',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
