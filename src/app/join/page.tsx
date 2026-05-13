'use client';

import ContactForm from '@/components/ContactForm';
import { BookOpen, Users, Star, Zap, School, GraduationCap, ArrowRight, ShieldCheck, Rocket } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const JoinPage = () => {
  const scrollToForm = (persona: 'student' | 'school') => {
    const formElement = document.getElementById('join-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      // We can't easily pass state back to the child component here without a ref or lifting state,
      // but the user can toggle it manually on the form anyway. 
      // For now, simple smooth scroll is a great UX.
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cta/10 rounded-full blur-[120px]" />
        </div>

        <div className="section-container relative z-10 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-8 leading-[1.1]"
          >
            Join the <span className="text-primary italic">Future</span> of <br className="hidden md:block" />
            Modern Education
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Whether you're a student looking to master new skills or a school leader aiming to 
            revolutionize your campus, we have the tools and expertise to help you succeed.
          </motion.p>
        </div>
      </section>

      {/* Persona Selection Section */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text">Choose Your Path</h2>
            <p className="text-text/50">Select the option that best describes you to get started.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Student Card */}
            <motion.div
              whileHover={{ y: -10 }}
              onClick={() => scrollToForm('student')}
              className="group cursor-pointer relative rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-black/5 p-8 md:p-12 transition-all hover:shadow-primary/20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">I'm a Student / Parent</h3>
                <p className="text-text/60 mb-8 leading-relaxed">
                  Learn Python, Java, AI, and Robotics with expert mentors. Get certified and build a strong portfolio.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium text-text/80">
                    <ShieldCheck className="text-emerald-500 h-5 w-5" /> 100% Practical Learning
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-text/80">
                    <ShieldCheck className="text-emerald-500 h-5 w-5" /> Industry Recognized Certificates
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-text/80">
                    <ShieldCheck className="text-emerald-500 h-5 w-5" /> Career Guidance & Support
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Start Learning <ArrowRight size={20} />
                </div>
              </div>

              <div className="mt-8 h-72 w-full relative">
                <Image 
                  src="/student_learning_concept_1778697950485.png" 
                  alt="Student Learning" 
                  fill 
                  className="object-cover rounded-[2rem]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* School Card */}
            <motion.div
              whileHover={{ y: -10 }}
              onClick={() => scrollToForm('school')}
              className="group cursor-pointer relative rounded-[3rem] overflow-hidden bg-text shadow-2xl border border-white/5 p-8 md:p-12 transition-all hover:shadow-cta/20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cta/5 rounded-full blur-3xl group-hover:bg-cta/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cta/20 text-cta flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <School size={32} />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-white">I'm a School Leader</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Implement STEM labs, automate admin tasks, and empower your teachers with our modern EdTech solutions.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <Rocket className="text-cta h-5 w-5" /> Robotics Lab Infrastructure
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <Rocket className="text-cta h-5 w-5" /> School Management Software
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <Rocket className="text-cta h-5 w-5" /> Certified Teacher Training
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-cta font-bold group-hover:gap-4 transition-all">
                  Partner with Us <ArrowRight size={20} />
                </div>
              </div>

              <div className="mt-8 h-72 w-full relative">
                <Image 
                  src="/school_admin_concept_1778697972272.png" 
                  alt="School Solutions" 
                  fill 
                  className="object-cover rounded-[2rem]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              type="join"
              title="Let's Start a Conversation"
              subtitle="Fill out the form below and our team will get in touch to discuss the best path forward for you."
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default JoinPage;
