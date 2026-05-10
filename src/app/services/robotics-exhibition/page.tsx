import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { Settings, Users, BookOpen, Presentation, CheckCircle2, Award } from 'lucide-react';

export const metadata = {
  title: "Robotics Exhibition Package for Schools | Study Smart Innovations",
  description: "Transform your school's science exhibition with our comprehensive 4-session Robotics Workshop package.",
};

const deliverables = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "10 Teams (50 Students)",
    desc: "We train 50 students divided into 10 teams, ensuring personalized attention and collaborative learning."
  },
  {
    icon: <Settings className="h-6 w-6 text-primary" />,
    title: "All Hardware Provided",
    desc: "We supply all necessary robotics kits, sensors, microcontrollers, and chassis required to build the projects."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Comprehensive Manuals",
    desc: "Every team receives detailed, easy-to-follow manuals and circuit diagrams to build their specific robot."
  },
  {
    icon: <Presentation className="h-6 w-6 text-primary" />,
    title: "4 Expert-Led Sessions",
    desc: "Our expert mentors will visit your school for 4 dedicated sessions to guide the students from scratch."
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Teacher Empowerment",
    desc: "Teachers learn alongside the students, empowering them to guide future batches in robotics."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: "Exhibition Ready",
    desc: "At the end of the workshop, 10 working projects will be ready with explanation charts for your school's exhibition."
  }
];

export default function RoboticsExhibitionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-text text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] rounded-full translate-x-1/2"></div>
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-light font-bold text-sm mb-6 border border-primary/30">
                Special Package for Schools
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Robotics <span className="text-primary italic">Exhibition</span><br />
                Workshop Package
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Elevate your school's science exhibition. We provide a complete end-to-end robotics workshop—training 50 students to build 10 functioning robotics projects from scratch over 4 guided sessions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="btn-primary text-lg px-8 py-4 bg-white text-text hover:bg-gray-100 shadow-xl shadow-white/10">
                  Request a Quote
                </a>
                <a href="#details" className="px-8 py-4 text-lg font-bold border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                  View Details
                </a>
              </div>
            </div>

            {/* Hero Image Collage */}
            <div className="relative h-[400px] sm:h-[500px]">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
                <Image src="/exhibition-2.jpg" alt="Robotics Workshop" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                <Image src="/exhibition-4.jpg" alt="Student Building Robot" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Deliverables */}
      <section id="details" className="py-16 sm:py-24 bg-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">What's Included in the Package?</h2>
            <p className="text-text/60 text-lg">
              We bring the lab to your school. From supplying the hardware to mentoring the students, we handle everything required to make your exhibition a massive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, i) => (
              <div key={i} className="glass p-8 rounded-[2rem] border border-black/5 hover:border-primary/20 hover:shadow-xl transition-all group bg-white">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text/60 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Real Projects Built by Students</h2>
            <p className="text-text/60 text-lg">
              By the end of the 4 sessions, your students will have built functioning robots like these, complete with display charts ready for parents and guests to admire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-lg">
              <Image src="/exhibition-1.jpg" alt="Line Follower Robot" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white font-bold text-xl">Line Follower Robot</h3>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-auto md:row-span-2 rounded-[2rem] overflow-hidden group shadow-lg">
              <Image src="/exhibition-5.jpg" alt="Ultrasonic Obstacle Avoider" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white font-bold text-xl">Ultrasonic Obstacle Avoider</h3>
              </div>
            </div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-lg">
              <Image src="/exhibition-3.jpg" alt="Bluetooth Controlled Bot" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white font-bold text-xl">Bluetooth Controlled Bot</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-16 sm:py-24 bg-background relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Ready to Inspire Your Students?</h2>
              <p className="text-text/60 text-lg">
                Fill out the form below. We will analyze your requirements and send you a customized proposal and pricing for your school.
              </p>
            </div>
            
            <QuoteForm 
              type="quote_request"
              source="robotics_exhibition_package"
              title=""
              subtitle=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
