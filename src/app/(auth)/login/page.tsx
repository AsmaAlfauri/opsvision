'use client';

import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/authStore';

export default function LoginPage() {
  const router = useRouter();
  const { loginAsAdmin, loginAsViewer, loginAsGuest } = useAuthStore();

  const handleLogin = (fn: () => void) => {
    fn();
    router.push('/dashboard');
  };

  return (
    <Stack spacing={2} width={300} mx="auto" mt={10}>
      <Typography variant="h5" textAlign="center">Login</Typography>

      <Button variant="contained" onClick={() => handleLogin(loginAsAdmin)}>
        Login as Admin
      </Button>
      <Button variant="contained" onClick={() => handleLogin(loginAsViewer)}>
        Login as Viewer
      </Button>
      <Button variant="outlined" onClick={() => handleLogin(loginAsGuest)}>
        Continue as Guest
      </Button>
    </Stack>
  );
}
