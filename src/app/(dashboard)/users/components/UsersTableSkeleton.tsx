'use client';

import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Skeleton } from '@mui/material';

export default function UsersSkeleton() {
  return (
    <Paper sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Skeleton width="80%" /></TableCell>
            <TableCell><Skeleton width="80%" /></TableCell>
            <TableCell><Skeleton width="60%" /></TableCell>
            <TableCell><Skeleton width="40%" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(5)].map((_, idx) => (
            <TableRow key={idx}>
              <TableCell><Skeleton /></TableCell>
              <TableCell><Skeleton /></TableCell>
              <TableCell><Skeleton /></TableCell>
              <TableCell>
                <Skeleton width={60} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
