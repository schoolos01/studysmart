'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const JoinCTA = () => {
  const pathname = usePathname();

  // Don't show on the /join page itself or admin pages
  if (pathname === '/join' || pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="section-container relative z-10 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-8 font-heading leading-tight font-bold">
            Ready to <span className="text-primary italic">Transform</span> Your Learning Journey?
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto text-text/70">
            Whether you're a student, a parent, or a school administrator, we have the right 
            tools and training for you. Join the Study Smart family today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/join" 
              className="btn-primary text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-300"
            >
              Join Now — Get Specialized Consultation
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-cta/5 skew-x-12 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default JoinCTA;
