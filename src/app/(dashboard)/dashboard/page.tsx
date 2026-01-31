'use client';

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/app/store/authStore';
import { adminDashboardData, viewerDashboardData } from '@/app/data/dashboard';
import DashboardSkeleton from '@/app/features/dashboard/components/DashboardSkeleton';
import KPIGrid from '@/app/features/dashboard/components/KPIGrid';
import ChartsSection from '@/app/features/dashboard/components/ChartsSection';
import Empty from '@/app/components/States/Empty';
import Error from '@/app/components/States/Error';

export default function DashboardPage() {
  const role = useAuthStore((s) => s.role);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(adminDashboardData);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      try {
        if (role === 'admin') setData(adminDashboardData);
        else if (role === 'viewer') setData(viewerDashboardData);
        else setData({ kpis: [], chart: [] }); // guest or unknown
      } catch (err) {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [role]);

  if (!role) return null;
  if (error) return <Error message={error} />;
  if (!data.kpis.length && !data.chart.length) return <Empty message="No dashboard data available." />;

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
