'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, BookOpen, Star, ChevronRight } from 'lucide-react';

const FeaturedCourses = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => console.error('Failed to fetch courses:', err));
  }, []);

  if (loading) return (
    <div className="py-24 text-center">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
    </div>
  );

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-6 px-6 sm:px-0">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-heading font-bold">Featured <span className="text-primary italic">Courses</span></h2>
            <p className="text-text/60 text-sm sm:text-base">
              Master the languages of the future in your mother tongue.
              Everything explained slowly, clearly, and practically.
            </p>
          </div>
          <Link href="/courses" className="text-primary font-bold flex items-center gap-2 group text-sm sm:text-base">
            View All Courses
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: any, idx: number) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group perspective-1000"
            >
              <div className="preserve-3d tilt-3d rounded-3xl overflow-hidden glass shadow-sm hover:shadow-2xl transition-all duration-500 bg-white border border-black/5 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden bg-slate-50">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold bg-white/60">
                    {course.type?.toUpperCase()}
                  </div>
                  {course.discount && (
                    <div className="absolute top-4 right-4 bg-cta text-white px-3 py-1 rounded-full text-xs font-bold">
                      {course.discount}
                    </div>
                  )}
                </div>

                <div className="p-8 flex-grow">
                  <h3 className="text-xl mb-4 group-hover:text-primary transition-colors font-heading leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-text/50 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {course.modules.length} Modules
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-text">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-sm text-text/40 line-through">{course.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-orange-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-bold">4.5</span>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full btn-primary flex items-center justify-center gap-2 shadow-sm"
                  >
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
