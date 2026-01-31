'use client';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/authStore';


const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Users', href: '/users' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const role = useAuthStore((state) => state.role);
  const setRole = useAuthStore((state) => state.setRole);

  // example: viewers can't see Users page
  const filteredItems = navItems.filter(
    (item) => !(role !== 'admin' && item.label === 'Users')
  );

  return (
    <Box
      component="nav"
      sx={{
        width: 240,
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e0e0e0',
        paddingTop: 2,
      }}
    >
      <Typography variant="h6" sx={{ px: 2, mb: 2 }}>
        OpsVision
      </Typography>
      <Typography
        variant="caption"
        sx={{ px: 2, mb: 2, display: 'block', color: 'text.secondary' }}
      >
        Role: {role}
      </Typography>

      <List>
        {filteredItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                selected={isActive}
                onClick={() => router.push(item.href)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ px: 2, mt: 2 }}>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          onClick={() => setRole(role === 'admin' ? 'viewer' : 'admin')}
        >
          Switch to {role === 'admin' ? 'Viewer' : 'Admin'}
        </Button>
      </Box>
    </Box>
  );
}
