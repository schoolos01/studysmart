import ContactForm from '@/components/ContactForm';
import { GraduationCap, Rocket, BookOpen, Users, Star, Zap } from 'lucide-react';

export const metadata = {
  title: "Join Study Smart Innovations",
  description: "Welcome to Study Smart Innovations. Start your learning journey today.",
};

const perks = [
  { icon: <BookOpen className="h-5 w-5" />, text: "Expert-crafted courses in Python, Java & C" },
  { icon: <Users className="h-5 w-5" />, text: "Community of 10,000+ learners" },
  { icon: <Star className="h-5 w-5" />, text: "Taught in Benglish — easy to understand" },
  { icon: <Zap className="h-5 w-5" />, text: "Lifetime access to recordings & notes" },
  { icon: <Rocket className="h-5 w-5" />, text: "Industry-ready projects from day one" },
  { icon: <GraduationCap className="h-5 w-5" />, text: "Certificate upon course completion" },
];

export default function JoinPage() {
  return (
    <div className="pb-24">
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left: Welcome copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Welcome to Study Smart Innovations
              </div>

              <h1 className="text-5xl lg:text-6xl font-heading leading-tight mb-6">
                Start Your <span className="text-primary italic">Learning</span><br />
                Journey Today
              </h1>

              <p className="text-text/60 text-lg leading-relaxed mb-10">
                We're a Bengali-founded EdTech company on a mission to make world-class coding 
                education accessible to every student — in a language that feels like home.
              </p>

              <div className="space-y-4 mb-12">
                {perks.map((p, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {p.icon}
                    </div>
                    <span className="font-medium text-text/80">{p.text}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial / trust badge */}
              <div className="glass p-6 rounded-[2rem] border border-primary/10">
                <div className="flex items-center gap-1 text-orange-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="text-sm font-bold text-text/60 ml-2">4.9 / 5 from 1,200+ students</span>
                </div>
                <p className="text-text/70 italic text-sm leading-relaxed">
                  "Study Smart made C programming feel so easy. The Benglish explanation style 
                  is exactly what I needed. Best investment I've made."
                </p>
                <div className="mt-3 text-xs font-bold text-text/40">— Rahul D., C Programming Student</div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm 
                type="contact" 
                title="Get in Touch"
                subtitle="Drop us a message and we'll get back to you within 24 hours."
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
