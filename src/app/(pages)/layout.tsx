// src/app/(pages)/layout.tsx
import React from "react";
import Navbar from "@/src/components/layout/navbar/NavBar";
import "@/src/styles/globals.css";
import { Footer } from "@/src/components/layout/footer/Footer";
import { Header } from "@/src/components/layout/header/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* <Navbar /> */}
        <Header />
        <main className="flex-grow p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
