'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, Users, CreditCard, BarChart3, ChevronRight } from 'lucide-react';

const features = [
  { icon: <Users className="h-5 w-5" />, title: "Student Management" },
  { icon: <LayoutDashboard className="h-5 w-5" />, title: "Live Attendance" },
  { icon: <CreditCard className="h-5 w-5" />, title: "Fees Management" },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Smart Analytics" },
];

const SaaSPreview = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center px-6 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <div className="relative">
              {/* Main Dashboard Preview */}
              <div className="relative z-10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] perspective-1000">
                <div className="preserve-3d tilt-3d">
                  <Image
                    src="https://techcrunch.com/wp-content/uploads/2022/02/schoolytics-1.jpg"
                    alt="SaaS Dashboard Analytics"
                    width={800}
                    height={600}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cta/10 rounded-full blur-3xl opacity-50 sm:opacity-100" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50 sm:opacity-100" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-bold mb-4 sm:mb-6">
              SaaS Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 leading-tight font-heading font-bold">
              School Management <br />
              <span className="text-cta italic">Simplified.</span>
            </h2>
            <p className="text-text/70 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
              Our all-in-one software allows schools to automate administrative tasks,
              track student progress in real-time, and manage finances effortlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-black/5 hover:border-cta/20 hover:shadow-lg transition-all cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-cta shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-sm">{feature.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/join" className="btn-cta text-center">
                Get Started for Free
              </Link>
              <Link href="/join" className="px-6 py-3 rounded-full font-bold border border-text/10 hover:border-text/20 transition-all flex items-center justify-center gap-2 group text-center">
                Book a Demo
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPreview;
