'use client';

import { Grid, Paper, Typography } from '@mui/material';
import { KPI } from '@/lib/mock/dashboard';

interface Props {
  kpis: KPI[];
}

export default function KPIGrid({ kpis }: Props) {
  if (!kpis.length) return <Typography>No KPIs available</Typography>;

  return (
    <Grid container spacing={2} mb={4}>
      {kpis.map(kpi => (
        <Grid item xs={12} sm={6} md={3} key={kpi.id}>
          <Paper elevation={1} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="caption" color="text.secondary" gutterBottom>{kpi.label}</Typography>
            <Typography variant="h5" fontWeight="bold">{kpi.value.toLocaleString()}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
