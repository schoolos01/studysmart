import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SEORelatedLinks from '@/components/SEORelatedLinks';
import { Sparkles, BrainCircuit, Code, Terminal, Rocket, CheckCircle2, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Best Innovative Coaching Center in Burdwan | Coding & Robotics Classes',
  description: 'Looking for the best innovative coaching center in Burdwan? We offer premier coding classes, robotics classes, and Computer Science tuition with hands-on projects.',
  keywords: 'Best Innovative Coaching Center in Burdwan, Coding classes in Burdwan, Robotics classes in Burdwan, AI Coaching Burdwan, Computer Science Tuition Burdwan, Tech education Burdwan',
};

export default function InnovativeCoachingPage() {
  return (
    <main className="min-h-screen bg-background text-text overflow-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative bg-gradient-to-b from-background to-white">
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-xl shadow-primary/10 text-primary font-bold text-sm mb-8 border border-primary/10">
                <Sparkles className="w-4 h-4" /> The Top-Rated Coaching Institute
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-8">
                The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cta">Innovative Coaching Center</span> in Burdwan
              </h1>
              <p className="text-xl text-text/70 mb-10 leading-relaxed">
                We are not just another tuition center. We are the premier technology hub offering the best <strong className="text-text">coding classes</strong> and <strong className="text-text">robotics classes in Burdwan</strong>. Watch your child build real-world AI and computer science projects.
              </p>
              
              <Link href="#join" className="btn-primary py-4 px-10 text-lg font-bold shadow-xl shadow-primary/30 inline-block">
                Enroll Your Child Today
              </Link>
            </div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group bg-primary/5">
              <Image 
                src="/lab-setup.jpg" 
                alt="Student learning coding and robotics at the best coaching center in Burdwan" 
                width={800}
                height={600}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Subjects */}
      <section className="py-20 bg-text text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="section-container px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Our Specialized Tech Classes</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Discover why parents rate us as the best innovative coaching center in Burdwan for tech education.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BrainCircuit, title: "AI & Machine Learning", desc: "Advanced AI classes where students learn Python, data analysis, and how to build smart applications from scratch." },
              { icon: Rocket, title: "Robotics Classes", desc: "The best robotics classes in Burdwan. Students build autonomous robots, work with IoT sensors, and learn electronics." },
              { icon: Code, title: "Coding & Computer Science", desc: "Comprehensive coding classes covering C, C++, Java, web development, and ICSE/CBSE board exam preparation." }
            ].map((course, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <course.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-white/60 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-white">
        <div className="section-container px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-4">Hands-On Learning in Action</h2>
            <p className="text-text/70 text-lg">See our students building the future through practical coding and robotics classes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-[200px] md:h-[300px] rounded-3xl overflow-hidden group bg-slate-100">
              <Image src="/exhibition-1.jpg" alt="Students taking robotics classes in Burdwan" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-[200px] md:h-[300px] rounded-3xl overflow-hidden group lg:col-span-2 bg-slate-100">
              <Image src="/robotics-workshop.jpg" alt="Best innovative coaching center in burdwan coding lab" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Map & Methodology */}
      <section className="py-20 bg-background border-y border-black/5">
        <div className="section-container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Terminal className="w-16 h-16 text-cta mb-6 opacity-20" />
              <h2 className="text-4xl font-heading font-bold mb-6">Our Teaching Methodology</h2>
              <p className="text-lg text-text/70 mb-8">
                As the best innovative coaching center in Burdwan, our coding and robotics classes focus heavily on practical implementation rather than rote learning.
              </p>
              <div className="space-y-6">
                {[
                  "Project-Based Learning: No rote memorization.",
                  "Small Batch Sizes: Personalized attention for every student.",
                  "Practical First: 80% practical lab work, 20% theory.",
                  "Board Exam Ready: We align tech skills with academic success."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-lg font-medium text-text/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Google Map Embed */}
            <div>
              <div className="inline-flex items-center gap-2 font-bold mb-4 text-text/80">
                <MapPin className="w-5 h-5 text-primary" /> Visit Our Coaching Center in Burdwan
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[300px] md:h-[400px] bg-slate-100 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3694385603203!2d87.86946737445416!3d23.229639708570883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8498f231db0f1%3A0x414cce7325f8da91!2sSTUDY%20SMART%20COACHING!5e0!3m2!1sen!2sin!4v1779364463609!5m2!1sen!2sin" 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Study Smart Coaching - Best Innovative Coaching Center in Burdwan Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="join" className="py-20 bg-white">
        <div className="section-container px-6 lg:px-8 max-w-3xl">
          <LeadForm type="course" title="Join the Innovation Hub" courseName="General Inquiry (AI/CS/Robotics)" />
        </div>
      </section>

      <SEORelatedLinks />
      <Footer />
    </main>
  );
}
