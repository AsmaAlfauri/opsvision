'use client';

import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Skeleton } from '@mui/material';

interface UsersSkeletonProps {
  rows?: number;
}

export default function UsersSkeleton({ rows = 5 }: UsersSkeletonProps) {
  return (
    <Paper sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Skeleton width="80%" animation="wave" /></TableCell>
            <TableCell><Skeleton width="80%" animation="wave" /></TableCell>
            <TableCell><Skeleton width="60%" animation="wave" /></TableCell>
            <TableCell><Skeleton width="40%" animation="wave" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(rows)].map((_, idx) => (
            <TableRow key={idx}>
              <TableCell><Skeleton animation="wave" /></TableCell>
              <TableCell><Skeleton animation="wave" /></TableCell>
              <TableCell><Skeleton animation="wave" /></TableCell>
              <TableCell><Skeleton width={60} animation="wave" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
