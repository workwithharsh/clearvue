"use client";

import { Footer, Navbar } from "@/components/layouts";
import { usePathname } from "next/navigation";

// Client layout
function ClientLayout({ children, }: { children: React.ReactNode; }) {
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

export default ClientLayout