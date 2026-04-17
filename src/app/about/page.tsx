import Image from 'next/image';
import { Target, Eye, Award, Users } from 'lucide-react';

export const metadata = {
  title: "About Us | Study Smart Innovations",
  description: "Learn about our mission to revolutionize education through tech and innovation.",
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-40 sm:pt-56 pb-20 sm:pb-32 bg-background overflow-hidden relative">
        <div className="section-container relative z-10 px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 sm:mb-8 font-heading font-bold">
                Our <span className="text-primary italic">Story</span>
              </h1>
              <p className="text-text/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Study Smart Innovations was born out of a simple vision: to bridge the gap between
                traditional education and the rapidly evolving technological landscape.
              </p>
              <p className="text-text/70 text-base sm:text-lg leading-relaxed">
                Founded by <span className="font-bold text-text">H. Goswami</span>, we have grown from a small training center
                to a comprehensive EdTech ecosystem serving thousands of students and several partner schools.
              </p>
            </div>
            <div className="relative aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white/40 bg-white group max-w-md mx-auto">
              <Image
                src="/SSIC_redesigned_logo.png"
                alt="Study Smart Innovations Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-700 p-8 sm:p-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-primary/5 border border-primary/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm mb-6 sm:mb-8">
                <Target className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 sm:mb-6 text-primary font-bold">Our Mission</h2>
              <p className="text-text/70 text-base sm:text-lg leading-relaxed">
                To equip every student with the technical literacy and logical thinking required
                to excel in the 21st century through affordable, high-quality, and hands-on learning.
              </p>
            </div>
            <div className="p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-cta/5 border border-cta/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center text-cta shadow-sm mb-6 sm:mb-8">
                <Eye className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 sm:mb-6 text-cta font-bold">Our Vision</h2>
              <p className="text-text/70 text-base sm:text-lg leading-relaxed">
                To become India's leading EdTech partner for schools, fostering a culture of
                innovation and curiosity in every classroom across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Achievements */}
      <section className="py-16 sm:py-24 bg-text text-white">
        <div className="section-container px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-heading font-bold text-primary mb-2">5+</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-widest">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-heading font-bold text-primary mb-2">10k+</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-widest">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-heading font-bold text-primary mb-2">50+</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-widest">Partner Schools</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-heading font-bold text-primary mb-2">100+</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-widest">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container px-6 sm:px-8">
          <h2 className="text-3xl lg:text-4xl text-center mb-12 sm:mb-16 font-heading font-bold">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8">
              <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-6"><Award className="h-6 w-6 text-primary" /></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quality First</h3>
              <p className="text-text/60 text-sm sm:text-base">We never compromise on the quality of our curriculum or hardware setups.</p>
            </div>
            <div className="text-center p-6 sm:p-8">
              <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-6"><Users className="h-6 w-6 text-primary" /></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Student Centric</h3>
              <p className="text-text/60 text-sm sm:text-base">Every decision we make is guided by the ultimate impact on the student's learning journey.</p>
            </div>
            <div className="text-center p-6 sm:p-8">
              <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-6"><Target className="h-6 w-6 text-primary" /></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Innovation Driven</h3>
              <p className="text-text/60 text-sm sm:text-base">We stay ahead of the curve, constantly updating our tools to match global standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
