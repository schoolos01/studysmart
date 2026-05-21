import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SEORelatedLinks from '@/components/SEORelatedLinks';
import { Gamepad2, Puzzle, Bot, GraduationCap, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'AI & Robotics Classes for Kids in Burdwan | Study Smart',
  description: 'Engaging and fun AI & Robotics classes for kids in Burdwan. Help your child build logic, creativity, and future skills with our specialized coding and tech courses.',
  keywords: 'Kids Robotics Burdwan, Coding for kids in Burdwan, AI classes for children, STEM education Burdwan, Tech camp for kids, Best coding classes in Burdwan',
};

export default function KidsRoboticsPage() {
  return (
    <main className="min-h-screen bg-background text-text overflow-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative bg-white overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cta/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm mb-8 border border-emerald-200">
                <Gamepad2 className="w-5 h-5" /> Learning Made Fun & Interactive
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-6">
                Make Screen Time <br /> <span className="text-primary">Productive Time</span>
              </h1>
              <p className="text-xl text-text/70 mb-10 leading-relaxed font-medium">
                Discover the best <strong className="text-text">AI and Robotics classes for kids in Burdwan</strong>. We turn your child's curiosity into highly valuable STEM skills through our interactive coding classes and hands-on robotics workshops. Give them the ultimate head start in technology.
              </p>
              <Link href="#contact" className="btn-primary py-4 px-10 text-lg font-bold shadow-xl shadow-primary/30 rounded-full inline-block">
                Book a Free Trial Class
              </Link>
            </div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-slate-100 group">
              <Image 
                src="/exhibition-2.jpg" 
                alt="Kids learning robotics and coding in Burdwan" 
                width={800}
                height={600}
                priority
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background border-y border-black/5">
        <div className="section-container px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">Why Kids Love Our Tech Classes</h2>
            <p className="text-lg text-text/70">
              Unlike traditional coaching, our <strong className="text-text">coding classes for kids in Burdwan</strong> focus on interactive, game-based learning and physical robot assembly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bot, color: "text-blue-500", bg: "bg-blue-100", title: "Build Real Robots", desc: "Kids assemble and program their own hardware, bringing their digital ideas into the physical world." },
              { icon: Gamepad2, color: "text-purple-500", bg: "bg-purple-100", title: "Game Creation", desc: "Learn essential coding logic by creating fun games, animations, and interactive digital stories." },
              { icon: Puzzle, color: "text-orange-500", bg: "bg-orange-100", title: "Problem Solving", desc: "Develop critical thinking, math fundamentals, and spatial reasoning skills naturally through building." },
              { icon: GraduationCap, color: "text-emerald-500", bg: "bg-emerald-100", title: "Future Ready", desc: "Early exposure to AI and Machine Learning concepts gives them a massive academic advantage." }
            ].map((feat, i) => (
              <div key={i} className="glass p-8 rounded-3xl text-center border-white/50 shadow-lg hover:-translate-y-2 transition-all">
                <div className={`w-16 h-16 mx-auto ${feat.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <feat.icon className={`w-8 h-8 ${feat.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="section-container px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-4">Inside Our Innovation Lab</h2>
            <p className="text-text/70 text-lg">Glimpses of young innovators participating in our <strong className="text-text">robotics workshop in Burdwan</strong>.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] lg:auto-rows-[250px]">
            <div className="relative rounded-3xl overflow-hidden group bg-slate-200 lg:col-span-2 md:row-span-2">
              <Image src="/exhibition-2.jpg" alt="Children learning coding and robotics in Burdwan" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden group bg-slate-200">
              <Image src="/exhibition-1.jpg" alt="Hardware assembly in Burdwan robotics classes" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden group bg-slate-200">
              <Image src="/exhibition-4.jpg" alt="Kids robotics camp presentation in West Bengal" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-20 bg-background border-t border-black/5">
        <div className="section-container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="glass p-10 lg:p-12 rounded-[3rem] border border-black/5 bg-gradient-to-br from-primary/5 to-cta/5 shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Invest in Their Future</h2>
              <p className="text-lg text-text/70 mb-8">
                Suitable for students from Class 4 onwards. Fill out the form, and our educational counselor will help you choose the right batch for your child's <strong className="text-text">coding classes</strong>.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 font-medium text-lg"><ArrowRight className="w-5 h-5 text-primary"/> Weekend Batches Available</div>
                <div className="flex items-center gap-3 font-medium text-lg"><ArrowRight className="w-5 h-5 text-primary"/> Small Group Sizes (Max 10)</div>
                <div className="flex items-center gap-3 font-medium text-lg"><ArrowRight className="w-5 h-5 text-primary"/> All Robotic Hardware Provided</div>
              </div>
              <LeadForm type="contact" title="Request Course Details" courseName="Kids Robotics & AI" />
            </div>

            {/* Google Map Embed */}
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Visit Our Lab</h2>
              <p className="text-text/70 text-lg mb-8">Drop by our center in Burdwan to see our advanced lab infrastructure and discuss your child's tech education journey.</p>
              
              <div className="inline-flex items-center gap-2 font-bold mb-4 text-text/80">
                <MapPin className="w-5 h-5 text-primary" /> Study Smart, Burdwan
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[300px] md:h-[450px] bg-slate-100 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3694385603203!2d87.86946737445416!3d23.229639708570883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8498f231db0f1%3A0x414cce7325f8da91!2sSTUDY%20SMART%20COACHING!5e0!3m2!1sen!2sin!4v1779364463609!5m2!1sen!2sin" 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Study Smart Coaching - Best Robotics Classes for Kids in Burdwan Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center py-6 border-t border-black/10 mt-12">
            <p className="text-sm font-medium text-text/50">
              © {new Date().getFullYear()} Study Smart Innovations - All Rights Reserved. The best AI, Coding, and Robotics Classes for Kids in Burdwan.
            </p>
          </div>
        </div>
      </section>

      <SEORelatedLinks />
      <Footer />
    </main>
  );
}
