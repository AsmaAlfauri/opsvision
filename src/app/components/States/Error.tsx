'use client';

import { Box, Typography, Button } from '@mui/material';

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export default function Error({ message = 'Something went wrong.', onRetry }: ErrorProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      textAlign="center"
      p={2}
    >
      <Typography variant="body1" color="error" mb={2}>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="contained" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
}
