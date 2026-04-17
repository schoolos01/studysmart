'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid tracking in admin pages for cleaner stats if desired
    if (pathname.startsWith('/admin')) return;

    const trackVisit = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: pathname,
            referrer: document.referrer,
          }),
        });
      } catch (err) {
        console.error('Visit tracking failed:', err);
      }
    };

    trackVisit();
  }, [pathname]);

  return <>{children}</>;
}
