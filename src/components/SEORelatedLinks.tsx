import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const seoLinks = [
  { title: "Robotics Workshop in Burdwan", url: "/robotics-workshop-burdwan" },
  { title: "Robotics & STEM Lab Setup in West Bengal", url: "/robotics-stem-lab-setup-west-bengal" },
  { title: "Best Robotics Lab in Burdwan", url: "/best-robotics-lab-burdwan" },
  { title: "Innovative AI & CS Coaching in Burdwan", url: "/best-innovative-coaching-center-burdwan" },
  { title: "Robotics Summer Camp 2026", url: "/robotics-summer-camp-workshop-burdwan" },
  { title: "AI & Robotics Classes for Kids", url: "/ai-and-robotics-classes-for-kids-burdwan" },
  { title: "Top Coding & CS Institute in Burdwan", url: "/coding-and-computer-science-institute-burdwan" },
];

export default function SEORelatedLinks() {
  return (
    <section className="py-12 bg-background border-t border-black/5">
      <div className="section-container px-6 sm:px-8">
        <h3 className="text-xl font-heading font-bold mb-6 text-text/80">Explore More Specialized Programs</h3>
        <div className="flex flex-wrap gap-3">
          {seoLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.url}
              className="inline-flex items-center gap-2 text-sm text-primary/80 bg-primary/5 hover:bg-primary/10 border border-primary/10 px-4 py-2 rounded-full transition-all hover:scale-105"
            >
              {link.title} <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
