import Link from 'next/link';
import Image from 'next/image';
import { Cpu, ShieldCheck, Rocket, Zap, Users, BarChart } from 'lucide-react';

export const metadata = {
  title: "School Solutions | Study Smart Innovations",
  description: "Robotics labs, AI workshops, and STEM education for modern schools.",
};

const solutions = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Robotics & AI Workshops",
    problem: "Outdated technology curriculum in schools.",
    solution: "Interactive, hands-on workshops using real robots and AI kits.",
    outcome: "Students building their own prototypes and thinking logically.",
    image: "/robotics-workshop.jpg"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "STEM Lab Setup",
    problem: "Lack of infrastructure for practical learning.",
    solution: "Full end-to-end setup of modern STEM labs with hardware & software.",
    outcome: "Permanent hub of innovation within the school premises.",
    image: "/lab-setup.jpg"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Teacher Training",
    problem: "Teachers feeling overwhelmed by new technology.",
    solution: "Certifed training programs to empower educators with tech-pedagogy.",
    outcome: "Educators confidently leading future-ready classrooms.",
    image: "/teacher-training.jpg"
  }
];

export default function SchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-background overflow-hidden relative">
        <div className="section-container relative z-10 text-center px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 font-heading font-bold">
            Partnering for <span className="text-primary italic">Innovation</span>
          </h1>
          <p className="text-text/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We provide Indian schools with the technology and training needed to 
            transform traditional education into path-breaking STEM experiences.
          </p>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link href="/join" className="btn-primary w-full sm:w-auto px-10 py-4 text-base sm:text-lg text-center">
              Book a Free School Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Special Package Highlights */}
      <section className="py-12 bg-text text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10 px-6 sm:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold mb-4 border border-white/20 uppercase tracking-widest">
            Special Package
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
            Robotics Exhibition Package
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Get 50 students trained to build 10 functional robotics projects over 4 sessions, complete with manuals and hardware. Perfect for your upcoming science exhibition!
          </p>
          <Link href="/services/robotics-exhibition" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-text transition-colors">
            View Package Details →
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container px-6 sm:px-8">
          <div className="space-y-16 sm:space-y-24">
            {solutions.map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 sm:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-left w-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 sm:mb-8">
                    {item.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading mb-6 sm:mb-8 font-bold">{item.title}</h2>
                  
                  <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0"><Zap className="h-5 w-5 text-red-500" /></div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-text/40 mb-1">The Problem</div>
                        <p className="text-text/70">{item.problem}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0"><ShieldCheck className="h-5 w-5 text-emerald-500" /></div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-text/40 mb-1">The Solution</div>
                        <p className="text-text/70">{item.solution}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0"><Rocket className="h-5 w-5 text-primary" /></div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-text/40 mb-1">The Outcome</div>
                        <p className="text-text/70">{item.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full aspect-[3/2] rounded-[2rem] sm:rounded-3xl bg-slate-100 overflow-hidden shadow-xl sm:shadow-2xl relative">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
