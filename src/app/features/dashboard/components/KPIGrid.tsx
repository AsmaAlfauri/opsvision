'use client';

import { Grid, Paper, Typography } from '@mui/material';
import { KPI } from '@/app/data/dashboard';

interface KPIGridProps {
  kpis: KPI[];
}

export default function KPIGrid({ kpis }: KPIGridProps) {
  if (!kpis || kpis.length === 0) {
    return <Typography>No KPIs available</Typography>;
  }

  return (
    <Grid container spacing={2} mb={4}>
      {kpis.map((kpi) => (
        <Grid item xs={12} sm={6} md={3} key={kpi.label}>
          <Paper
            elevation={1}
            sx={{
              p: 2,
              height: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" color="text.secondary" gutterBottom>
              {kpi.label}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : kpi.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
