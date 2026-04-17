'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import JoinCTA from './JoinCTA';
import FloatingSocials from './FloatingSocials';

export default function GlobalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Routes where we don't want the global shell (Admin Dashboard)
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <JoinCTA />
      <Footer />
      <FloatingSocials />
    </>
  );
}
