'use client';

import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

const menuItems = [
  { label: 'Dashboard', path: '/admin/dashboard' },
  { label: 'Users', path: '/admin/users' },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const role = useAuthStore((state) => state.role);

  // Example: viewer can't access Users
  const filteredItems = menuItems.filter((item) => !(role === 'viewer' && item.label === 'Users'));

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {filteredItems.map((item) => (
          <ListItemButton
            key={item.path}
            selected={pathname === item.path}
            onClick={() => router.push(item.path)}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
