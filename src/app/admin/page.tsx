"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Admin Dashboard component.
 * 
 * - This page is accessible only to authenticated admin users.
 * - It uses NextAuth's `useSession` hook to check authentication status.
 * - Unauthenticated users are redirected to the login page.
 * 
 * @returns {JSX.Element}
 */
export default function AdminDashboard() {
  // Get authentication session and status
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login"); // Redirect unauthenticated users to login
    }
  }, [status, router]);

  // Show a loading state while authentication is being checked
  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome, {session?.user?.name}</h1>
      <p className="text-gray-600">This is the admin dashboard.</p>
    </div>
  );
}
