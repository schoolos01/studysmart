import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Study Smart
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering the next generation with future-ready skills in Coding, AI, and Robotics. 
              Modern education for modern minds.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Online Courses</Link></li>
              <li><Link href="/services/schools" className="hover:text-primary transition-colors">For Schools</Link></li>
              <li><Link href="/software" className="hover:text-primary transition-colors">SaaS Software</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@studysmart.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 91234 56789</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Kolkata, West Bengal, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with latest skills and tools.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white rounded-r-lg px-4 py-2 hover:bg-secondary transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Study Smart Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
