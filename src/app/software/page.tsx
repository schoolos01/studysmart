import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, Users, CreditCard, BarChart3, Bell, Smartphone, Shield, Zap } from 'lucide-react';

export const metadata = {
  title: "School Management Software | Study Smart Innovations",
  description: "Automate your school administration with our all-in-one SaaS solution.",
};

const features = [
  { icon: <Users className="h-6 w-6" />, title: "Student Management", desc: "Detailed profiles, grades, and records." },
  { icon: <LayoutDashboard className="h-6 w-6" />, title: "Live Attendance", desc: "Automatic tracking with mobile alerts." },
  { icon: <CreditCard className="h-6 w-6" />, title: "Fees Management", desc: "Online payments and auto-receipts." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Smart Analytics", desc: "Insightful reports on performance." },
  { icon: <Bell className="h-6 w-6" />, title: "Notifications", desc: "SMS and Email alerts for parents." },
  { icon: <Smartphone className="h-6 w-6" />, title: "Mobile App", desc: "Access data on the go for admins." },
  { icon: <Shield className="h-6 w-6" />, title: "Secure Cloud", desc: "Encrypted data storage on AWS." },
  { icon: <Zap className="h-6 w-6" />, title: "Fast Integration", desc: "Setup within 48 hours for any school." },
];

export default function SoftwarePage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-background overflow-hidden relative">
        <div className="section-container relative z-10 text-center px-6 sm:px-8">
          <div className="inline-block px-4 py-2 rounded-full bg-cta/10 text-cta text-xs sm:text-sm font-bold mb-6">
            Everything You Need to Manage a School
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 font-heading leading-tight font-bold">
            The Operating System <br />
            <span className="text-cta italic">For Modern Schools</span>
          </h1>
          <p className="text-text/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10">
            Ditch the paperwork. Automate your administration, engage parents, 
            and focus on what matters most—delivering quality education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="btn-cta w-full sm:w-auto text-center">Request a Demo</Link>
            <Link href="/join" className="w-full sm:w-auto px-6 py-3 rounded-full font-bold border border-text/10 hover:border-text/20 transition-all text-center">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 sm:mb-16 font-heading font-bold">Complete Feature Set</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
            {features.map((feature, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-[2rem] bg-background border border-black/5 hover:border-cta/20 hover:shadow-xl transition-all group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center text-cta shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 sm:py-24 bg-text text-white overflow-hidden">
        <div className="section-container px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-center">
            <div className="flex-1 text-left">
              <h2 className="text-3xl sm:text-4xl font-heading mb-6 sm:mb-8 font-bold">Data-Driven Administration</h2>
              <p className="text-white/60 mb-8 text-base sm:text-lg leading-relaxed">
                Get a bird's eye view of your entire school operations. From student performance trends 
                to financial health, everything is available in a single unified dashboard.
              </p>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-cta" /></div>
                  <span>Real-time data synchronization</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-cta" /></div>
                  <span>Role-based access control</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-cta" /></div>
                  <span>Automated report generation</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-white/5 p-3 sm:p-4 rounded-[2rem] sm:rounded-3xl border border-white/10 shadow-3xl">
              <div className="rounded-2xl overflow-hidden glass shadow-2xl">
                <Image 
                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Dashboard Data" 
                  width={800} 
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Check({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
