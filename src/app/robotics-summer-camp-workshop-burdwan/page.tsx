import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnrollModal from '@/components/EnrollModal';
import SEORelatedLinks from '@/components/SEORelatedLinks';
import { Calendar, Clock, MapPin, CheckCircle2, Rocket, Award } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Robotics Summer Camp Workshop in Burdwan 2026 | Coding & Robotics Classes',
  description: 'Join the best Robotics Summer Camp in Burdwan. Build real robots, learn AI, and experience the top coding classes for kids. Take home what you build! Register now.',
  keywords: 'Robotics Summer Camp Burdwan, Best Robotics Classes in Burdwan, Coding classes for kids Burdwan, AI bootcamp Burdwan, Robotics workshop for students, Tech camp West Bengal',
};

export default function SummerCampPage() {
  return (
    <main className="min-h-screen bg-background text-text overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-text text-white">
        <div className="absolute inset-0 bg-[url('/lab-setup.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-cta/80 mix-blend-multiply z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cta/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm mb-6 uppercase tracking-wider">
              Classes 6–10 (Any Board)
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6">
              The Best Robotics & AI <br /> Summer Boot-camp 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-medium">
              Join the #1 <strong className="text-white">robotics classes in Burdwan</strong>. Build Real Robots. Explore AI. Create Future Skills.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base font-bold bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cta" /> May 29-30, 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Study Smart, Burdwan
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" /> Certificate & Take-home Kit
              </div>
            </div>

            <EnrollModal
              courseName="Robotics & AI Summer Boot-camp 2026"
              courseSlug="summer-camp-2026"
              paymentUrl="https://pages.razorpay.com/robotics-summer-camp-burdwan"
            />
            <p className="mt-4 text-white/60 text-sm font-medium">Pay just ₹1000 to reserve your seat (Total: ₹2300)</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="section-container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Experience the Best Coding & Robotics Classes</h2>
              <p className="text-lg text-text/70 mb-8 leading-relaxed">
                This is not just a theory class. As the <strong className="text-text">best innovative coaching center in Burdwan</strong>, we ensure students learn by building real robotics projects with their own hands. Our <strong className="text-text">coding classes</strong> are designed to spark curiosity, innovation, and confidence.
              </p>

              <ul className="space-y-4">
                {[
                  "Build a real robot using advanced robotics kits",
                  "Learn robotics fundamentals & IoT sensors",
                  "Explore exciting AI and Machine Learning concepts",
                  "Learn beginner-friendly yet powerful coding logic",
                  "Develop creativity & problem-solving skills",
                  "Take home the exact robot they build!"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="font-medium text-text/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white relative bg-slate-100 group">
                <Image
                  src="/robotics-workshop.jpg"
                  alt="Students attending the best robotics classes in Burdwan"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl transform rotate-3 hidden md:block">
                  <div className="font-black text-xl text-cta">TAKE HOME</div>
                  <div className="text-sm font-bold text-text/60">WHAT YOU BUILD!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background border-y border-black/5">
        <div className="section-container px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-4">Hands-On Learning in Action</h2>
            <p className="text-text/70 text-lg">See our students building the future through practical coding and robotics classes in Burdwan.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-[200px] md:h-[250px] rounded-3xl overflow-hidden group bg-slate-200">
              <Image src="/exhibition-1.jpg" alt="Students taking robotics classes in Burdwan" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-[200px] md:h-[250px] rounded-3xl overflow-hidden group bg-slate-200">
              <Image src="/exhibition-2.jpg" alt="Hardware assembly in Burdwan" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-[200px] md:h-[250px] rounded-3xl overflow-hidden group bg-slate-200 lg:col-span-2">
              <Image src="/exhibition-4.jpg" alt="Robotics camp presentation in West Bengal" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Details, Schedule & Map */}
      <section className="py-24 bg-white">
        <div className="section-container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Boot-Camp Schedule</h2>
              <p className="text-text/70 text-lg mb-10">Two days of intensive, fun, and hands-on learning at the best tech center in Burdwan.</p>

              <div className="space-y-6">
                <div className="glass p-8 rounded-3xl border-primary/20 bg-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full" />
                  <h3 className="text-2xl font-bold mb-2">Day 1: Fundamentals</h3>
                  <p className="text-primary font-bold mb-6">Friday, 29th May 2026</p>
                  <div className="flex items-center gap-3 text-text/70 mb-4">
                    <Clock className="w-5 h-5 text-primary" /> 6:00 PM – 8:30 PM
                  </div>
                  <p className="text-sm text-text/60">Introduction to components, logic building, and assembling the chassis.</p>
                </div>

                <div className="glass p-8 rounded-3xl border-cta/20 bg-cta/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cta/10 rounded-bl-full" />
                  <h3 className="text-2xl font-bold mb-2">Day 2: AI & Completion</h3>
                  <p className="text-cta font-bold mb-6">Saturday, 30th May 2026</p>
                  <div className="flex items-center gap-3 text-text/70 mb-4">
                    <Clock className="w-5 h-5 text-cta" /> 10:00 AM – 1:00 PM
                  </div>
                  <p className="text-sm text-text/60">Programming the brain, AI concepts, testing, and certificate distribution.</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Camp Location</h2>
              <p className="text-text/70 text-lg mb-10">Our robotics workshop will be held at our main innovation lab in Burdwan.</p>
              
              <div className="inline-flex items-center gap-2 font-bold mb-4 text-text/80">
                <MapPin className="w-5 h-5 text-primary" /> Study Smart Coaching, Burdwan
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[300px] md:h-[450px] bg-slate-100 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3694385603203!2d87.86946737445416!3d23.229639708570883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8498f231db0f1%3A0x414cce7325f8da91!2sSTUDY%20SMART%20COACHING!5e0!3m2!1sen!2sin!4v1779364463609!5m2!1sen!2sin" 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Study Smart Coaching - Best Robotics Classes in Burdwan Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Enrollment CTA */}
      <section className="py-24 bg-background text-center border-t border-black/5">
        <div className="section-container px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6">Secure Your Child's Seat Today</h2>
          <p className="text-lg text-text/70 mb-10">
            Seats are strictly limited to maintain quality hands-on learning. No prior coding or robotics experience is required.
          </p>

          <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl border-black/5 bg-gradient-to-b from-white to-background mb-10">
            <div className="text-sm font-bold text-text/40 uppercase tracking-widest mb-2">Total Fees</div>
            <div className="text-5xl font-black mb-4">₹2300</div>
            <p className="text-text/60 mb-8">(Includes 2 Robotics Classes + Full Take-Home Robotics Kit)</p>

            <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-8 font-medium">
              Step 1: Pay registration installment of ₹1000 now via Razorpay.<br />
              Step 2: Pay remaining ₹1300 on 29th May at the center.
            </div>

            <div className="flex justify-center">
              <EnrollModal
                courseName="Robotics & AI Summer Boot-camp 2026"
                courseSlug="summer-camp-2026"
                paymentUrl="https://pages.razorpay.com/robotics-summer-camp-burdwan"
              />
            </div>
          </div>
        </div>
      </section>

      <SEORelatedLinks />
      <Footer />
    </main>
  );
}
