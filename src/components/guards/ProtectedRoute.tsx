'use client';

import { ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const role = useAuthStore((s) => s.role);
  const router = useRouter();

  useEffect(() => {
    if (!role) {
      router.push('/login');
    }
  }, [role, router]);

  if (!role) return null;

  return <>{children}</>;
}
