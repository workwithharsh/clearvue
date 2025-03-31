"use client";

import { Footer, Navbar } from "@/components/layouts";
import { usePathname } from "next/navigation";

/**
 * Client-side layout component for conditional rendering of Navbar and Footer.
 *
 * - This is separated from the main `layout.tsx` to allow the use
 * of `usePathname()`, which is only available in client components.
 *
 * @param {React.ReactNode} - The main content of the page.
 * @returns {JSX.Element}
 */
export function ClientLayout({ children, }: { children: React.ReactNode; }) {
    const pathname = usePathname();
    const isAdminRoute = pathname.startsWith("/admin");

    return (
        <>
            {!isAdminRoute && <Navbar />} {/* Hide Navbar on `/admin` routes */}
            {children}
            {!isAdminRoute && <Footer />} {/* Hide Footer on `/admin` routes */}
        </>
    );
}