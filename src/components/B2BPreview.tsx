'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, Rocket, ShieldCheck, ChevronRight } from 'lucide-react';

const icons: Record<string, any> = {
  Cpu,
  ShieldCheck,
  Rocket
};

const B2BPreview = () => {
  const [solutions, setSolutions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/solutions')
      .then(res => res.json())
      .then(data => {
        setSolutions(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group perspective-1000">
              <div className="preserve-3d tilt-3d rounded-[2rem] overflow-hidden shadow-2xl border border-white/40">
                <Image 
                  src="/b2b_bengali.png" 
                  alt="Bengali Students in Robotics Lab" 
                  width={800} 
                  height={600}
                  className="w-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 font-heading font-bold">
              Solutions for <span className="text-primary italic">Schools</span>
            </h2>
            <p className="text-text/70 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
              We partner with educational institutions to provide world-class infrastructure and training, making students future-ready.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {loading ? (
                [1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 sm:gap-6 items-center animate-pulse">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-2xl" />
                    <div className="flex-grow space-y-2">
                       <div className="h-4 bg-slate-100 rounded w-1/3" />
                       <div className="h-3 bg-slate-100 rounded w-full" />
                    </div>
                  </div>
                ))
              ) : (
                solutions.map((service: any, idx: number) => {
                  const Icon = icons[service.icon] || Cpu;
                  return (
                    <div key={idx} className="flex gap-4 sm:gap-6 items-start group">
                      <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${service.color} ${service.text} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl mb-1 sm:mb-2 font-heading font-bold">{service.title}</h3>
                        <p className="text-text/70 leading-relaxed font-medium text-sm sm:text-base">{service.desc}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <Link href="/join" className="btn-primary w-full sm:w-auto text-center">
                Book a Free School Demo
              </Link>
              <Link href="/join" className="text-sm font-bold flex items-center gap-2 group">
                Request Proposal
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2BPreview;
