import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SEORelatedLinks from '@/components/SEORelatedLinks';
import { Award, Compass, Lightbulb, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Best Robotics Lab in Burdwan | Study Smart Innovations',
  description: 'Discover the best Robotics Lab in Burdwan. A dedicated space for students to learn coding, build robots, and master Artificial Intelligence with hands-on practice.',
  keywords: 'Best Robotics Lab Burdwan, Burdwan Robotics Center, AI Learning Center Burdwan, Coding lab for kids Burdwan',
};

export default function BestRoboticsLabPage() {
  return (
    <main className="min-h-screen bg-background text-text overflow-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="section-container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta font-bold text-sm mb-6">
                <MapPin className="w-4 h-4" /> Located in the Heart of Burdwan
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cta">Best Robotics Lab</span> in Burdwan
              </h1>
              <p className="text-xl text-text/70 mb-8 leading-relaxed font-medium">
                Step into a world of innovation. Our cutting-edge laboratory is specifically designed to transform young tech enthusiasts into creators, engineers, and problem solvers using real industrial hardware.
              </p>
              
              <Link href="#visit" className="btn-primary py-4 px-8 text-lg font-bold shadow-xl shadow-primary/30">
                Schedule a Free Lab Visit
              </Link>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group bg-primary/5">
              <Image 
                src="/lab-setup.jpg" 
                alt="State-of-the-art Robotics Lab in Burdwan" 
                width={800}
                height={600}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="glass p-4 md:p-6 rounded-2xl text-white backdrop-blur-xl border-white/20">
                  <div className="flex items-center gap-4">
                    <Award className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-xl">State-of-the-art Infrastructure</div>
                      <div className="text-sm text-white/80">Equipped with 3D printers, IoT kits, and modern robotics modules.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Gallery / Features Showcase */}
      <section className="py-24 bg-text text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-4">Inside Our Innovation Center</h2>
            <p className="text-white/70 text-lg">We provide an unmatched ecosystem for technological learning. See our students in action.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-[200px] md:h-[300px] rounded-3xl overflow-hidden group border border-white/10 bg-black/20">
              <Image src="/exhibition-2.jpg" alt="Students working on robotics projects" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:p-6 opacity-90">
                <span className="font-bold text-lg md:text-xl">Hands-on Assembly</span>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[300px] rounded-3xl overflow-hidden group border border-white/10 lg:col-span-2 bg-black/20">
              <Image src="/robotics-workshop.jpg" alt="Advanced AI and Robotics Hardware" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:p-6 opacity-90">
                <span className="font-bold text-lg md:text-xl">Advanced Tech & Hardware</span>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[300px] rounded-3xl overflow-hidden group border border-white/10 lg:col-span-2 bg-black/20">
              <Image src="/exhibition-4.jpg" alt="Students presenting robotics models" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:p-6 opacity-90">
                <span className="font-bold text-lg md:text-xl">Project Showcases</span>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[300px] rounded-3xl overflow-hidden group border border-white/10 bg-black/20">
              <Image src="/exhibition-1.jpg" alt="Coding and Logic Building" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:p-6 opacity-90">
                <span className="font-bold text-lg md:text-xl">Live Coding Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-24 bg-white">
        <div className="section-container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Find the Best Robotics Center in Burdwan</h2>
              <p className="text-lg text-text/70 mb-8 leading-relaxed">
                Located conveniently in Burdwan, our coaching center provides a safe, highly-equipped, and inspiring environment for students to learn after school. Drop by to see the lab yourself!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-black/5">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Study Smart Coaching</h4>
                    <p className="text-text/70">Near Boronilpur, Burdwan, West Bengal</p>
                  </div>
                </div>
                
                <ul className="space-y-3 pl-2">
                  <li className="flex items-center gap-3 font-medium text-text/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Air-conditioned & Safe Environment
                  </li>
                  <li className="flex items-center gap-3 font-medium text-text/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> High-Speed Internet for Research
                  </li>
                  <li className="flex items-center gap-3 font-medium text-text/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> 1:1 Device to Student Ratio
                  </li>
                </ul>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[300px] md:h-[450px] bg-slate-100 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3694385603203!2d87.86946737445416!3d23.229639708570883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8498f231db0f1%3A0x414cce7325f8da91!2sSTUDY%20SMART%20COACHING!5e0!3m2!1sen!2sin!4v1779364463609!5m2!1sen!2sin" 
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Study Smart Coaching - Best Robotics Lab in Burdwan Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="visit" className="py-20 bg-background relative">
        <div className="section-container px-6 lg:px-8 max-w-4xl">
          <div className="bg-primary text-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Experience it Yourself</h2>
              <p className="text-white/80 text-lg">Book a free tour of our lab in Burdwan for you and your child.</p>
            </div>
            
            <div className="bg-white text-text rounded-3xl p-2 shadow-inner">
              <LeadForm type="contact" title="Book a Lab Tour" courseName="Lab Visit Request" />
            </div>
          </div>
        </div>
      </section>

      <SEORelatedLinks />
      <Footer />
    </main>
  );
}
