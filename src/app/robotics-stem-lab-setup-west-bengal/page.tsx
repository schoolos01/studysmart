import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SEORelatedLinks from '@/components/SEORelatedLinks';
import { Cpu, ShieldCheck, Target, ArrowRight, Settings } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Robotics & STEM Lab Setup in West Bengal | Study Smart Innovations',
  description: 'Looking to set up a state-of-the-art Robotics and STEM lab in your school? Study Smart Innovations provides end-to-end lab setup solutions across West Bengal.',
  keywords: 'Robotics Lab Setup, STEM Lab West Bengal, School Robotics Lab, Atal Tinkering Lab setup, AI Lab for schools',
};

export default function STEMLabSetupPage() {
  return (
    <main className="min-h-screen bg-background text-text overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-text text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 border border-primary/20">
              <Settings className="w-4 h-4" /> End-to-End Solutions
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-6">
              Premier <span className="text-primary">Robotics & STEM Lab</span> Setup in West Bengal
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Equip your institution with the future of learning. We provide comprehensive infrastructure, curriculum, and teacher training to establish world-class innovation labs in schools across West Bengal.
            </p>
            <Link href="#contact" className="btn-primary py-4 px-10 text-lg font-bold">
              Consult With Our Experts <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-background">
        <div className="section-container px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Complete Lab Ecosystem</h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">More than just equipment. We deliver a fully functional learning environment tailored to NEP 2020 guidelines.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: "Hardware & Kits", desc: "Arduino, Raspberry Pi, 3D Printers, and modular robotics kits suitable for classes 4 to 12." },
              { icon: Target, title: "Structured Curriculum", desc: "Grade-wise mapped curriculum covering Coding, IoT, Robotics, and Artificial Intelligence." },
              { icon: ShieldCheck, title: "Teacher Training", desc: "Comprehensive capacity-building programs to empower your existing teaching staff." },
              { icon: Settings, title: "Maintenance & Support", desc: "Year-round technical support and hardware maintenance for uninterrupted learning." }
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border-black/5 hover:bg-white transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Contact */}
      <section id="contact" className="py-20 bg-white border-t border-black/5">
        <div className="section-container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Transform Your School Today</h2>
              <p className="text-lg text-text/70 mb-8 leading-relaxed">
                Provide your students with the competitive edge they need. Fill out the form, and our STEM education experts will reach out to discuss your institution's specific needs and budget.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-lg">Initial Consultation</h4>
                    <p className="text-text/60">We assess your space, budget, and student demographics.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-lg">Customized Proposal</h4>
                    <p className="text-text/60">A detailed blueprint of equipment and curriculum.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-lg">Deployment & Training</h4>
                    <p className="text-text/60">Swift installation followed by rigorous staff training.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <LeadForm type="demo" title="Request a Free Lab Consultation" />
            </div>
          </div>
        </div>
      </section>

      <SEORelatedLinks />
      <Footer />
    </main>
  );
}
