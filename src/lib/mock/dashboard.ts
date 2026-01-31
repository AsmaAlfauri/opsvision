export type KPI = {
  id: string;
  label: string;
  value: number;
};

export type ChartPoint = {
  label: string;
  value: number;
};

export type DashboardData = {
  kpis: KPI[];
  chart: ChartPoint[];
};

const adminDashboardData: DashboardData = {
  kpis: [
    { id: 'totalUsers', label: 'Total Users', value: 1280 },
    { id: 'activeUsers', label: 'Active Users', value: 940 },
    { id: 'errors', label: 'Errors (24h)', value: 12 },
    { id: 'requests', label: 'Requests / day', value: 43120 },
  ],
  chart: [
    { label: 'Mon', value: 120 },
    { label: 'Tue', value: 210 },
    { label: 'Wed', value: 180 },
    { label: 'Thu', value: 260 },
    { label: 'Fri', value: 300 },
    { label: 'Sat', value: 190 },
    { label: 'Sun', value: 230 },
  ],
};

const viewerDashboardData: DashboardData = {
  kpis: [
    { id: 'activeUsers', label: 'Active Users', value: 940 },
    { id: 'requests', label: 'Requests / day', value: 43120 },
  ],
  chart: [
    { label: 'Mon', value: 80 },
    { label: 'Tue', value: 120 },
    { label: 'Wed', value: 100 },
    { label: 'Thu', value: 140 },
    { label: 'Fri', value: 160 },
    { label: 'Sat', value: 90 },
    { label: 'Sun', value: 110 },
  ],
};

const guestDashboardData: DashboardData = {
  kpis: [{ id: 'requests', label: 'Requests / day', value: 43120 }],
  chart: [
    { label: 'Mon', value: 40 },
    { label: 'Tue', value: 60 },
    { label: 'Wed', value: 50 },
    { label: 'Thu', value: 70 },
    { label: 'Fri', value: 80 },
    { label: 'Sat', value: 55 },
    { label: 'Sun', value: 65 },
  ],
};

export function getDashboardMockData(role: 'admin' | 'viewer' | 'guest'): DashboardData {
  if (role === 'admin') return adminDashboardData;
  if (role === 'viewer') return viewerDashboardData;
  return guestDashboardData;
}
