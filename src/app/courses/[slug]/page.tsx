'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { coursesData } from '@/lib/courses-data';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Check,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Rocket,
  HelpCircle,
  GraduationCap,
  Gift,
  Calendar,
  Briefcase,
  PlayCircle,
  Star
} from 'lucide-react';
import EnrollModal from '@/components/EnrollModal';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/courses/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) notFound();
        setCourse(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        notFound();
      });
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!course) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-background overflow-hidden relative">
        <div className="section-container relative z-10 px-6 sm:px-8">
          <Link href="/courses" className="inline-flex items-center gap-2 text-primary font-bold mb-6 sm:mb-8 hover:-translate-x-1 transition-transform text-sm sm:text-base">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold mb-4">
                {course.type?.toUpperCase()} COURSE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6 font-heading leading-tight font-bold">
                {course.title}
              </h1>
              <p className="text-text/70 text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed italic">
                {course.subtitle}
              </p>
              <p className="text-text/60 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-medium">
                {course.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-2xl">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-[10px] text-text/40 font-bold uppercase tracking-wider">Duration</div>
                    <div className="text-sm font-bold">{course.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-2xl">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-[10px] text-text/40 font-bold uppercase tracking-wider">Mentor</div>
                    <div className="text-sm font-bold">{course.mentor.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-2xl">
                  <Tag className="h-5 w-5 text-cta" />
                  <div>
                    <div className="text-[10px] text-text/40 font-bold uppercase tracking-wider">Fees</div>
                    <div className="text-sm font-bold text-cta">{course.price}</div>
                  </div>
                </div>
                {course.startingDate && (
                  <div className="flex items-center gap-3 glass px-4 py-3 rounded-2xl">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-[10px] text-text/40 font-bold uppercase tracking-wider">Starting</div>
                      <div className="text-sm font-bold">{course.startingDate}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {course.paymentUrl ? (
                  <EnrollModal 
                    courseName={course.title} 
                    courseSlug={course.slug}
                    paymentUrl={course.paymentUrl}
                  />
                ) : (
                  <Link href="#enroll" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center">
                    Join the Squad Now <Rocket className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>

            <div className="space-y-8 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/40 ${slug === 'c-programming' ? 'aspect-[16/10]' : 'aspect-video'}`}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover w-full"
                />
              </motion.div>

              {/* What you'll learn snippet */}
              <div className="glass p-6 sm:p-8 rounded-[2rem] text-left">
                <h3 className="font-heading font-bold mb-4 flex items-center gap-2 text-lg sm:text-xl">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  What You'll Learn
                </h3>
                <ul className="space-y-3">
                  {course.whatYouWillLearn.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm text-text/70 leading-snug">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Live Info */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16">
            <div className="lg:col-span-2 text-left">
              <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 font-heading font-bold">Course <span className="text-primary italic">Roadmap</span></h2>
              <div className="space-y-4 sm:space-y-6">
                {course.modules.map((module: any, i: number) => (
                  <div key={i} className="glass p-5 sm:p-6 rounded-2xl border border-black/5 hover:border-primary/20 transition-all flex gap-4 sm:gap-6 items-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 leading-snug">{module.title}</h3>
                      <p className="text-text/60 text-sm sm:text-base leading-relaxed">{module.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 text-left">
              {/* Live Info card */}
              <div className="bg-primary text-white p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-primary/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Live Support
                  </h3>
                  <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed">
                    {course.liveClassInfo}
                  </p>
                  <p className="font-bold border-t border-white/20 pt-4 italic text-sm sm:text-base">
                    "Aar kono confusion thakbe na."
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
              </div>

              {/* Bonus card */}
              <div className="glass p-6 sm:p-8 rounded-[2rem] border-cta/20 bg-cta/5">
                <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2 text-cta leading-snug">
                  <Gift className="h-5 w-5 sm:h-6 sm:w-6" />
                  BONUS Features (Free)
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {course.bonus.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm font-medium leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0">
                        <Check className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="py-16 sm:py-24 bg-text text-white overflow-hidden relative">
        <div className="section-container relative z-10 px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 font-heading font-bold">Placement & <span className="text-primary italic">Project</span> Guidance</h2>
              <p className="text-white/60 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
                This is NOT just a course — it's a full learning + career growth journey.
                Our team provides end-to-end guidance to make you industry-ready.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {course.placementGuidance.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-sm sm:text-base">
                    <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border-white/10 bg-white/5 text-center w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Who is this for?</h3>
              <div className="space-y-3 sm:space-y-4 text-left">
                {course.whoIsThisFor.map((item: string, i: number) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl sm:rounded-2xl bg-black/20 text-xs sm:text-sm leading-relaxed">
                    <User className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-center mb-12 sm:mb-16 font-heading font-bold">Your <span className="text-primary italic">Mentor</span></h2>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center bg-background p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-black/5">
              <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden flex-shrink-0 shadow-2xl">
                <Image
                  src={course.mentor.image}
                  alt={course.mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow text-left">
                <h3 className="text-2xl sm:text-3xl font-heading mb-2 font-bold">{course.mentor.name}</h3>
                <div className="text-primary font-bold mb-6 text-xs sm:text-sm tracking-widest uppercase">
                  {course.mentor.role}
                </div>
                <div className="space-y-3 sm:space-y-4 mb-0">
                  {course.mentor.bio.map((item: string, i: number) => (
                    <p key={i} className="text-text/70 flex gap-3 text-base sm:text-lg leading-snug">
                      <span className="text-primary text-xl sm:text-2xl">•</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl sm:text-2xl mb-10 sm:mb-12 font-heading font-bold">Why Learn From Me?</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {course.mentor.whyLearnFromMe.map((item: string, i: number) => (
                  <div key={i} className="p-4 sm:p-6 rounded-2xl glass border-primary/10 hover:bg-white transition-all group text-center h-full flex flex-col items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white mx-auto flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-text/80 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Enrollment Section */}
      <section id="enroll" className="py-16 sm:py-24 bg-background relative overflow-hidden">
        <div className="section-container relative z-10 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] sm:text-sm font-bold mb-6 italic leading-relaxed px-6">
              "Ei course e {course.title.includes('Python') ? 'Python' : course.title.includes('Java') ? 'Java' : 'C'} tomar favourite subject hoye jabe."
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-heading font-bold">Join the <span className="text-primary italic">Journey</span></h2>
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8 font-heading">
              <span className="text-3xl sm:text-4xl font-bold font-heading">{course.price}</span>
              {course.originalPrice && (
                <span className="text-lg sm:text-xl text-text/40 line-through font-heading">{course.originalPrice}</span>
              )}
              {course.discount && (
                <span className="bg-cta text-white px-3 py-1 rounded-lg text-xs sm:text-sm font-bold">{course.discount}</span>
              )}
            </div>
            <p className="text-text/60 text-base sm:text-lg mb-0 text-center">
              (No hidden charges, lifetime access to all videos and handwritten notes)
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex justify-center">
            {course.paymentUrl ? (
              <div className="text-center space-y-4 w-full">
                <p className="text-text/60 text-base sm:text-lg mb-6 sm:mb-8">One step away from your learning journey</p>
                <div className="flex justify-center">
                  <EnrollModal 
                    courseName={course.title} 
                    courseSlug={course.slug}
                    paymentUrl={course.paymentUrl}
                  />
                </div>
                <p className="text-text/40 text-[10px] sm:text-xs mt-4">Your info is safe. Redirects to secure Razorpay payment.</p>
              </div>
            ) : (
              <LeadForm type="course" courseName={course.title} title="Secure Your Spot" />
            )}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-cta/5 skew-x-12 -translate-x-1/3" />
      </section>
    </div>
  );
}
