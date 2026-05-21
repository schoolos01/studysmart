import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SEORelatedLinks from '@/components/SEORelatedLinks';
import FeaturedCourses from '@/components/FeaturedCourses';
import { MonitorPlay, Database, Code2, Cpu, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Coding & Computer Science Institute in Burdwan | Study Smart',
  description: 'Master Computer Science with the best coding institute in Burdwan. We offer expert tuition for ICSE/CBSE/WB boards, C, C++, Java, Python, and Web Development classes.',
  keywords: 'Coding institute Burdwan, Computer Science tuition Burdwan, ICSE computer teacher Burdwan, Java coaching Burdwan, Learn Python Burdwan, best programming classes in Burdwan',
};

export default function CodingInstitutePage() {
  return (
    <main className="min-h-screen bg-background text-text overflow-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative bg-text text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 font-bold text-sm mb-8">
              <Code2 className="w-5 h-5 text-cta" /> Best Programming Classes in Burdwan
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-8">
              The Top <span className="text-cta">Coding & Computer Science</span> Institute in Burdwan
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
              From ICSE/CBSE school curriculum to advanced web development, we provide the most comprehensive computer science tuition in the city. Become a confident programmer and secure your future in tech.
            </p>
            <Link href="#contact" className="btn-primary bg-cta hover:bg-cta/90 py-4 px-10 text-lg font-bold shadow-xl shadow-cta/20">
              Join the Next Batch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Component */}
      <FeaturedCourses />

      {/* Core Tracks */}
      <section className="py-20 bg-background border-t border-black/5">
        <div className="section-container px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">Our Specialized Tracks</h2>
            <p className="text-text/70 text-lg">Whether you are a school student looking for computer science tuition in Burdwan, or a college student wanting to learn Python, Java, or C++, our coding institute has you covered.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border-black/5 hover:border-cta/30 transition-all hover:shadow-xl group">
              <MonitorPlay className="w-12 h-12 text-cta mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Academic CS (Boards)</h3>
              <p className="text-text/70 mb-6">Expert coaching for ICSE, CBSE, and State Board Computer Applications / Science (Class 8 to 12).</p>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> BlueJ / Java Mastery</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> Python for CBSE</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> Board Question Bank Practice</li>
              </ul>
            </div>
            
            <div className="glass p-8 rounded-3xl border-black/5 hover:border-cta/30 transition-all hover:shadow-xl group">
              <Database className="w-12 h-12 text-cta mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Foundational Coding</h3>
              <p className="text-text/70 mb-6">Perfect for BCA/BTech beginners looking to build a strong base in programming logic and data structures.</p>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> C & C++ Programming</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> Object Oriented Principles</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> Logic Building Sessions</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border-black/5 hover:border-cta/30 transition-all hover:shadow-xl group md:col-span-2 lg:col-span-1">
              <Cpu className="w-12 h-12 text-cta mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Modern Web Dev</h3>
              <p className="text-text/70 mb-6">Learn to build real websites and applications using industry-standard technologies to get job ready.</p>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> HTML, CSS & JavaScript</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> React / Next.js Basics</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-500"/> Project Portfolio Building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-black/5">
        <div className="section-container px-6 lg:px-8 max-w-4xl">
          <div className="glass p-10 lg:p-14 rounded-[3rem] shadow-xl border border-black/5 bg-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Start Coding With Us</h2>
              <p className="text-text/70 text-lg">Send us a message below, and our faculty will get back to you with batch timings and fees for our computer science tuition.</p>
            </div>
            <LeadForm type="contact" title="Admissions Inquiry" courseName="Computer Science & Coding" />
          </div>
        </div>
      </section>

      <SEORelatedLinks />
      <Footer />
    </main>
  );
}
