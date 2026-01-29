export interface DashboardData {
  totalUsers: number;
  activeUsers: number;
  newUsersThisMonth: number;
  userGrowth: { month: string; count: number }[];
}

// Mock API function
export const getDashboardData = async (): Promise<DashboardData> => {
  await new Promise((res) => setTimeout(res, 300)); // simulate network latency
  return {
    totalUsers: 120,
    activeUsers: 95,
    newUsersThisMonth: 15,
    userGrowth: [
      { month: 'Jan', count: 10 },
      { month: 'Feb', count: 15 },
      { month: 'Mar', count: 20 },
      { month: 'Apr', count: 25 },
      { month: 'May', count: 30 },
      { month: 'Jun', count: 20 },
    ],
  };
};
