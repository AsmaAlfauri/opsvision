'use client';

import { Box, Typography } from '@mui/material';

interface EmptyProps {
  message?: string;
}

export default function Empty({ message = 'No data available.' }: EmptyProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      textAlign="center"
      p={2}
    >
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}
