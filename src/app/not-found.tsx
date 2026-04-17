import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-background flex items-center justify-center text-center">
        <div className="section-container">
          <h1 className="text-9xl font-heading font-bold text-primary mb-8 opacity-20">404</h1>
          <h2 className="text-4xl font-heading mb-6 italic">Page Not Found</h2>
          <p className="text-text/70 text-lg mb-10 max-w-md mx-auto">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
