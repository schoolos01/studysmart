'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Rocket, GraduationCap, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background 3D Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-48 h-48 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-56 h-56 sm:w-96 sm:h-96 bg-cta/10 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Next-Gen EdTech Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] font-heading font-bold">
              Learn <span className="text-primary italic">Future</span> Skills: <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Coding, AI, Robotics
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text/70 mb-10 max-w-xl leading-relaxed">
              Equipping schools and students with the tools of tomorrow.
              Join our interactive courses or implement our world-class SaaS solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/join" className="btn-primary flex items-center justify-center gap-2 group">
                Join Now
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services/schools" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold border border-text/10 hover:border-text/20 transition-all">
                For Schools
                <GraduationCap className="h-5 w-5" />
              </Link>
            </div>

          </motion.div>

          {/* 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="preserve-3d tilt-3d">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/30 transform-gpu rotate-[-2deg]">
                <Image
                  src="/hero_bengali.png"
                  alt="Bengali Child Learning Coding"
                  width={800}
                  height={600}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Cards for 3D depth */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-5 rounded-2xl shadow-xl z-20 border-white/50 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cta/20 rounded-lg flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-cta" />
                  </div>
                  <div>
                    <div className="text-xs text-text/60">Career Track</div>
                    <div className="text-sm font-bold">Python Mastery</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass p-5 rounded-2xl shadow-xl z-20 border-white/50 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-text/60">School Tech</div>
                    <div className="text-sm font-bold">SaaS Integrated</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
