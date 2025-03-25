"use client";

import { SessionProvider } from "next-auth/react";

/**
 * Admin layout component that wraps all admin pages.
 * Provides authentication to the admin section using NextAuth's SessionProvider.
 * 
 * @param {React.ReactNode} props.children - The content of the admin pages.
 * @returns {JSX.Element} - The admin layout with session management.
 */
function AdminLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AdminLayout