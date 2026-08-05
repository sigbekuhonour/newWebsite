import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { libreBarcode, lexendTera } from "./fonts";

export const metadata: Metadata = {
  title: "Honour's Portfolio",
  description: "Welcome to my porfolio!!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendTera.className} ${libreBarcode.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
