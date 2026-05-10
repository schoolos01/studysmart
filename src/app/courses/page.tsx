import FeaturedCourses from '@/components/FeaturedCourses';

export const metadata = {
  title: "Online Courses | Study Smart Innovations",
  description: "Browse our future-ready courses in Python, Java, and C programming.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-background overflow-hidden relative">
        <div className="section-container relative z-10 text-center px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 font-heading font-bold">
            Future-Ready <span className="text-primary italic">Courses</span>
          </h1>
          <p className="text-text/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Master the languages of the future. Our curriculum is designed by industry experts 
            to take you from basics to professional projects.
          </p>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full" />
      </section>

      <FeaturedCourses />

      {/* Why Learn With Us */}
      <section className="py-16 sm:py-24 bg-text text-white">
        <div className="section-container px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div className="glass p-6 sm:p-8 rounded-[2rem] border-white/10">
              <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4 italic font-heading font-bold">01</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Hands-on Projects</h3>
              <p className="text-white/60 text-sm leading-relaxed">Don't just learn theory. Build real-world applications that solve actual problems.</p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-[2rem] border-white/10">
              <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4 italic font-heading font-bold">02</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Expert Mentorship</h3>
              <p className="text-white/60 text-sm leading-relaxed">Get guidance from professionals who have worked in top tech companies across the globe.</p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-[2rem] border-white/10">
              <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4 italic font-heading font-bold">03</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Career Support</h3>
              <p className="text-white/60 text-sm leading-relaxed">Resume building, interview prep, and industry networking to jumpstart your career.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
