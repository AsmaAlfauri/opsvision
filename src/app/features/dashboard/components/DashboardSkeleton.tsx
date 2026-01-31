'use client';

import { Grid, Paper, Skeleton, Box } from '@mui/material';

interface DashboardSkeletonProps {
  kpiCount?: number;
  chartHeight?: number;
}

export default function DashboardSkeleton({
  kpiCount = 4,
  chartHeight = 300,
}: DashboardSkeletonProps) {
  return (
    <Grid container spacing={2} mb={4}>
      {/* KPI Skeletons */}
      {[...Array(kpiCount)].map((_, idx) => (
        <Grid item xs={12} sm={6} md={3} key={`kpi-${idx}`}>
          <Paper
            elevation={1}
            sx={{
              p: 3,
              height: 140,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Label */}
            <Skeleton variant="text" width="40%" height={20} />
            
            {/* Value */}
            <Skeleton variant="text" width="60%" height={36} sx={{ mt: 1 }} />
            
            {/* Change / extra info */}
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Skeleton variant="rectangular" width={40} height={20} />
              <Skeleton variant="rectangular" width={40} height={20} />
            </Box>
          </Paper>
        </Grid>
      ))}

      {/* Chart Skeleton */}
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 2, height: chartHeight }}>
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Paper>
      </Grid>
    </Grid>
  );
}
