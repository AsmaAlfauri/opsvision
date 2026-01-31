'use client';

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import UsersTable from './components/UsersTable';
import UsersSkeleton from './components/UsersTableSkeleton';

export default function UsersPage() {
  const role = useAuthStore(s => s.role);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (role !== 'admin') return <p>Unauthorized</p>;

  return (
    <>
      {loading ? <UsersSkeleton /> : <UsersTable />}
    </>
  );
}
