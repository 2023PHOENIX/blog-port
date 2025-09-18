// src/app/(pages)/layout.tsx
import React from "react";
import Navbar from "../../components/layouts/NavBar";
import "@/src/styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
