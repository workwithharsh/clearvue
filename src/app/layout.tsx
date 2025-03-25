import { Footer, Navbar } from "@/components/layout";
import { usePathname } from "next/navigation";

import type { Metadata } from "next";
import "./globals.css";

/**
 * Metadata for the application
 */
export const metadata: Metadata = {
  title: "Clearvue",
  description: "See beyond the ordinary.",
};

/**
 * Root layout component that wraps the entire application.
 * 
 * @param {React.ReactNode} props.children - The content of the page.
 * @returns {JSX.Element} - The root layout structure.
 */
function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  // Check if the current route is an admin route
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        {!isAdminRoute && <Navbar />} {/* Hide Navbar on '/admin' routes */}
        {children}
        {!isAdminRoute && <Footer />} {/* Hide Footer on '/admin' routes */}
      </body>
    </html>
  );
}

export default RootLayout;
