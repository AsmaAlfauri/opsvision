'use client';

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { getDashboardMockData } from '@/lib/mock/dashboard';
import KPIGrid from './components/KPIGrid';
import ChartsSection from './components/ChartsSection';
import DashboardSkeleton from './components/DashboardSkeleton';

export default function DashboardPage() {
  const role = useAuthStore((s) => s.role);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(getDashboardMockData(role));

  useEffect(() => {
    // Simulate loading for 1s
    const timer = setTimeout(() => {
      setData(getDashboardMockData(role));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [role]);

  if (!role) return null;

  return (
    <>
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <KPIGrid kpis={data.kpis} />
          <ChartsSection data={data.chart} />
        </>
      )}
    </>
  );
}
