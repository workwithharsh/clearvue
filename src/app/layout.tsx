import { ClientLayout } from "@/components/layouts";

import type { Metadata } from "next";
import "./globals.css";

// Metadata for the application
export const metadata: Metadata = {
  title: "Clearvue",
  description: "See beyond the ordinary.",
};

// Root layout component
function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
       <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

export default RootLayout