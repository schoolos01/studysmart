import type { Metadata } from "next";
import "./globals.css";
import TrackingProvider from "@/components/TrackingProvider";

export const metadata: Metadata = {
  title: "Study Smart Innovations | Next Gen EdTech Platform",
  description: "Learn Future Skills: Coding, AI, Robotics. B2C online courses and B2B school management solutions.",
};

import Navbar from '@/components/Navbar';
import GlobalShell from '@/components/GlobalShell';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-primary/30 selection:text-primary">
        <TrackingProvider>
          <GlobalShell>
            {children}
          </GlobalShell>
        </TrackingProvider>
      </body>
    </html>
  );
}
