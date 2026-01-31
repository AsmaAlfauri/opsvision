// src/app/(dashboard)/unauthorized/page.tsx
'use client';

import { Box, Typography } from '@mui/material';

export default function UnauthorizedPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      px={2}
    >
      <Typography variant="h6" color="error">
        You are not authorized to access this page.
      </Typography>
    </Box>
  );
}
