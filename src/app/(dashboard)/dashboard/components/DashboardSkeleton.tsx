'use client';

import { Grid, Paper, Skeleton } from '@mui/material';

export default function DashboardSkeleton() {
  return (
    <Grid container spacing={2} mb={4}>
      {/* KPI Skeletons */}
      {[...Array(4)].map((_, idx) => (
        <Grid item xs={12} sm={6} md={3} key={`kpi-${idx}`}>
          <Paper elevation={1} sx={{ p: 2, height: 100 }}>
            <Skeleton width="60%" height={20} />
            <Skeleton width="80%" height={32} sx={{ mt: 1 }} />
          </Paper>
        </Grid>
      ))}

      {/* Chart Skeleton */}
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 2, height: 300 }}>
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Paper>
      </Grid>
    </Grid>
  );
}
