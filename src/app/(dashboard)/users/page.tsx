'use client';

import UsersTable from '@/app/features/users/components/UsersTable';
import { useAuthStore } from '@/app/store/authStore';
import Error from '@/app/components/States/Error';

export default function UsersPage() {
  const role = useAuthStore((s) => s.role);

  if (!role || role !== 'admin') {
    return <Error message="Unauthorized: You do not have access to this page." />;
  }

  return <UsersTable />;
}
