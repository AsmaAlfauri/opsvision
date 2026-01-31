'use client';

import { Box, List, ListItem, ListItemButton, ListItemText, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Users', href: '/users' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const role = useAuthStore((s) => s.role);
  const setRole = useAuthStore((s) => s.setRole);

  const filteredItems = navItems.filter(item => !(role !== 'admin' && item.label === 'Users'));

  return (
    <Box sx={{ width: 240, backgroundColor: '#fff', borderRight: '1px solid #e0e0e0', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>OpsVision</Typography>
      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mb: 2 }}>
        Role: {role}
      </Typography>
      <List>
        {filteredItems.map(item => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton component={Link} href={item.href} selected={pathname === item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" size="small" fullWidth sx={{ mt: 2 }} onClick={() => setRole(role === 'admin' ? 'viewer' : 'admin')}>
        Switch to {role === 'admin' ? 'Viewer' : 'Admin'}
      </Button>
    </Box>
  );
}
