import type { Metadata } from "next";
import "./globals.css";
import MuiRegistry from '@/lib/mui/MuiRegistry';


export const metadata: Metadata = {
  title: 'OpsVision',
  description: 'Internal Analytics Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <html lang="en">
      <body>
        <MuiRegistry>{children}</MuiRegistry>
      </body>
    </html>
  );
}
