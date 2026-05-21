import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SEORelatedLinks from '@/components/SEORelatedLinks';
import { Cpu, Users, Zap, CheckCircle2, Star, Trophy, Lightbulb, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Robotics Workshop in Burdwan | Study Smart Innovations',
  description: 'Join the most interactive and hands-on Robotics Workshop in Burdwan. Learn to build real robots, understand AI, and develop future-ready STEM skills today!',
  keywords: 'Robotics Workshop, Burdwan, STEM, AI Workshop, Kids Robotics, School Workshop',
};

export default function RoboticsWorkshopPage() {
  return (
    <main className="min-h-screen bg-background text-text overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cta/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 shadow-sm border border-primary/20">
                <Star className="w-4 h-4 fill-primary" /> Rated #1 STEM Program in Burdwan
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-6">
                Ignite Innovation with our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cta">
                  Robotics Workshop
                </span>
              </h1>
              <p className="text-xl text-text/70 mb-8 leading-relaxed font-medium max-w-lg">
                Move beyond the textbook. Our hands-on robotics workshops are carefully engineered to teach students real-world technical skills—from assembling hardware circuits to programming autonomous robots that solve real problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary py-4 px-8 text-lg font-bold shadow-xl shadow-primary/30">
                  Book a Workshop for Your School
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                      <Image src={`/exhibition-${i}.jpg`} alt={`Student ${i}`} fill className="object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold text-xs z-10 relative">
                    +5k
                  </div>
                </div>
                <div className="text-sm font-bold text-text/60">
                  Join 5,000+ students <br/>who have experienced our labs!
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 group bg-primary/5">
              <Image 
                src="/robotics-workshop.jpg" 
                alt="Robotics Workshop in Action" 
                width={800}
                height={800}
                priority
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                <div className="glass p-4 md:p-6 rounded-2xl text-white backdrop-blur-xl border-white/20">
                  <div className="flex items-center gap-4">
                    <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-lg md:text-xl leading-tight mb-1">Award-Winning Curriculum</div>
                      <div className="text-xs md:text-sm text-white/80">Recognized for excellence in practical STEM education.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-text text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">See The Innovators In Action</h2>
            <p className="text-lg text-white/70">A glimpse into our dynamic workshops where theoretical physics and mathematics turn into moving, breathing machines.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
            <div className="relative rounded-3xl overflow-hidden md:col-span-2 md:row-span-2 group">
              <Image src="/exhibition-1.jpg" alt="Students building a robot" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="font-bold text-lg">Hands-on Assembly</span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <Image src="/exhibition-2.jpg" alt="Robotics Exhibition" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <Image src="/exhibition-3.jpg" alt="Coding the brain" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden md:col-span-2 group">
              <Image src="/exhibition-4.jpg" alt="Showcasing final projects" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="font-bold text-lg">Exhibitions & Competitions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="details" className="py-24 bg-white">
        <div className="section-container px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-text/70">We don't just teach theory; we build creators. Here is what makes our workshops the most sought-after in Burdwan and West Bengal.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Zap, title: "Industry-Grade Kits", desc: "Students work with real microcontroller boards (Arduino/ESP32), an array of sensors (Ultrasonic, IR), and actuators. No plastic toys." },
              { icon: Users, title: "Expert Mentorship", desc: "Guided by professional software engineers and hardware experts with years of experience in AI, IoT, and Robotics." },
              { icon: Lightbulb, title: "Future-Ready Skills", desc: "Develops critical thinking, computational logic, and problem-solving abilities that give students a massive head start." },
              { icon: Award, title: "Certification", desc: "Every participant receives a verifiable certificate of completion, boosting their academic portfolio." },
              { icon: Cpu, title: "100% Practical", desc: "We believe in 'learning by doing'. Our 80/20 rule ensures 80% of the workshop time is spent building and coding." },
              { icon: CheckCircle2, title: "Customizable", desc: "We tailor the difficulty, duration, and curriculum based on the age group (Class 4 to Class 12)." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-background border border-black/5 hover:border-primary/30 hover:bg-primary/5 transition-all group shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-black/5">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-text/70 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8 leading-tight">Organize a Workshop at Your Institution</h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Whether you are a school principal looking to introduce STEM, or a parent organizing a private tech-camp, we bring the entire lab experience directly to you. Let's build the future together.
              </p>
              
              <div className="glass p-8 rounded-3xl bg-white/10 border-white/20 mb-8">
                <h3 className="font-bold text-xl mb-4">What we bring to your campus:</h3>
                <ul className="space-y-4">
                  {[
                    "Complete curriculum and instruction manuals",
                    "All required robotic hardware, motors, and batteries",
                    "Expert teaching staff and technical assistants",
                    "Post-workshop project competition frameworks"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-medium text-lg">
                      <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-text relative z-20">
              <LeadForm type="contact" title="Request a Call Back" courseName="Robotics Workshop Inquiry" />
            </div>
          </div>
        </div>
      </section>

      <SEORelatedLinks />
      <Footer />
    </main>
  );
}
