import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import B2BPreview from '@/components/B2BPreview';
import SaaSPreview from '@/components/SaaSPreview';

export default function Home() {
  return (
    <>
      <Hero />
      
      <FeaturedCourses />
      
      <B2BPreview />
      
      <SaaSPreview />
      
      {/* Social Proof / Trust Section */}
      <section className="py-24 bg-text text-white overflow-hidden">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-5xl mb-16 italic font-heading">
            "The best way to predict the future is to create it."
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* These would be school logos */}
            <div className="font-heading font-black text-2xl uppercase tracking-widest">School One</div>
            <div className="font-heading font-black text-2xl uppercase tracking-widest">Global Academy</div>
            <div className="font-heading font-black text-2xl uppercase tracking-widest">Tech High</div>
            <div className="font-heading font-black text-2xl uppercase tracking-widest">Future Prep</div>
          </div>
        </div>
      </section>
    </>
  );
}
