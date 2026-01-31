// src/app/(dashboard)/layout.tsx
import ProtectedRoute from '@/components/guards/ProtectedRoute';
import Sidebar from '@/components/layout/Sidebar';
import Box from '@mui/material/Box';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </ProtectedRoute>
  );
}
