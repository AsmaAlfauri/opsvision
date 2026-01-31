// src/app/data/dashboard.ts
import type { DashboardData } from '../types';


export const adminDashboardData: DashboardData = {
  kpis: [
    { id: 'kpi1', label: 'Total Users', value: 1200, change: 5 },
    { id: 'kpi2', label: 'Active Users', value: 875, change: -2 },
    { id: 'kpi3', label: 'New Signups', value: 45, change: 10 },
  ],
  chart: [
    { label: 'Jan', value: 30 },
    { label: 'Feb', value: 50 },
    { label: 'Mar', value: 40 },
    { label: 'Apr', value: 70 },
  ],
};

export const viewerDashboardData: DashboardData = {
  kpis: [
    { id: 'kpi4', label: 'Active Projects', value: 8 },
    { id: 'kpi5', label: 'Pending Tasks', value: 24 },
  ],
  chart: [
    { label: 'Week 1', value: 10 },
    { label: 'Week 2', value: 15 },
    { label: 'Week 3', value: 12 },
  ],
};

export function getDashboardMockData(role: 'admin' | 'viewer' | 'guest'): DashboardData {
  if (role === 'admin') return adminDashboardData;
  if (role === 'viewer') return viewerDashboardData;
  return { kpis: [], chart: [] };
}
