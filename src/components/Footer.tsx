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
              <Link href="https://www.instagram.com/ssic_barddhaman/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://wa.me/917908178513" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
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
                <span>admin@onlinestudysmart.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 79081 78513</span>
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
