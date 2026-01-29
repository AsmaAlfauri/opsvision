'use client';

import { useEffect, useState } from 'react';
import { getDashboardData, DashboardData } from '../services/mockApi';
import { Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getDashboardData();
        setData(result);
      } catch {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!data) return <Typography>No data available</Typography>;

  return (
    <Grid container spacing={2}>
      {/* KPI Cards */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">{data.totalUsers}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Active Users</Typography>
          <Typography variant="h4">{data.activeUsers}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">New Users This Month</Typography>
          <Typography variant="h4">{data.newUsersThisMonth}</Typography>
        </Paper>
      </Grid>

      {/* User Growth Chart */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, height: 300 }}>
          <Typography variant="h6" gutterBottom>
            User Growth
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.userGrowth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#1976d2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
