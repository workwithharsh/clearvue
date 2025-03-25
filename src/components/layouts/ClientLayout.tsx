"use client";

import { Footer, Navbar } from "@/components/layouts";
import { usePathname } from "next/navigation";

/**
 * Client-side layout component responsible for rendering
 * the Navbar and Footer conditionally based on the route.
 *
 * - This is separated from the main `layout.tsx` to allow the use
 * of `usePathname()`, which is only available in client components.
 *
 * @param {React.ReactNode} props.children - The main content of the page.
 * @returns {JSX.Element} The client layout structure.
 */
function ClientLayout({ children, }: { children: React.ReactNode; }) {
    const pathname = usePathname();
    const isAdminRoute = pathname.startsWith("/admin");

    return (
        <>
            {!isAdminRoute && <Navbar />} {/* Hide Navbar on '/admin' routes */}
            {children}
            {!isAdminRoute && <Footer />} {/* Hide Footer on '/admin' routes */}
        </>
    );
}

export default ClientLayout