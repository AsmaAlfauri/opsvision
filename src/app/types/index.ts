// src/app/types/index.ts

// ========= Roles =========
export type Role = 'admin' | 'viewer' | 'guest';

// ========= User =========
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

// ========= Current User =========
export interface CurrentUser extends User {}

// ========= Dashboard =========
export interface KPI {
  id: string;           // unique id for rendering in list
  label: string;
  value: number | string;
  change?: number;      // percentage change (optional)
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface DashboardData {
  kpis: KPI[];
  chart: ChartPoint[];
}

// ========= API Response Types =========
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
