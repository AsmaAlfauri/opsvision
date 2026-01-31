'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';
import { ChartPoint } from '@/lib/mock/dashboard';

interface Props {
  data: ChartPoint[];
}

export default function ChartsSection({ data }: Props) {
  if (!data.length) return <Typography>No chart data available</Typography>;

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="subtitle1" gutterBottom>Weekly Activity</Typography>
      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
