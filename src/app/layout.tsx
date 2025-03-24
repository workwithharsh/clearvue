import { Footer, Navbar } from "@/components/layout";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clearvue",
  description: "See beyond the ordinary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
