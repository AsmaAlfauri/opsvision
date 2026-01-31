'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const role = useAuthStore((s) => s.role);
  const router = useRouter();

  useEffect(() => {

    if (!role || role === 'guest') {
      router.replace('/login');
    }
  }, [role, router]);


  if (!role || role === 'guest') return null;

  return <>{children}</>;
}
