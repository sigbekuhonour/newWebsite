import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { libreBarcode, lexendTera } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Honour Sigbeku | Software Developer Portfolio",
    template: "%s | Honour Sigbeku",
  },
  description:
    "Welcome to the official portfolio of Honour Sigbeku - Software Developer Intern, CS & Math student.",
  openGraph: {
    title: "Honour Sigbeku | Software Developer Portfolio",
    description:
      "Explore projects, experience, tech stack, and schedule a call with Honour Sigbeku.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honour Sigbeku | Software Developer Portfolio",
    description:
      "Explore projects, experience, tech stack, and schedule a call with Honour Sigbeku.",
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-bold focus:rounded-lg focus:shadow-lg"
        >
          Skip to content
        </a>
        <div id="main-content">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
