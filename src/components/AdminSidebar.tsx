'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  LogOut, 
  Image as ImageIcon,
  Cpu
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { href: '/admin/courses', icon: <BookOpen size={20} />, label: 'Manage Courses' },
    { href: '/admin/software', icon: <Cpu size={20} />, label: 'Manage Products' },
    { href: '/admin/settings/images', icon: <ImageIcon size={20} />, label: 'Global Media' },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col fixed h-full z-50">
      <div className="p-8 border-b border-slate-100 mb-8">
        <Link href="/admin" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">SSIC Admin</span>
        </Link>
      </div>

      <nav className="flex-grow px-4 space-y-2">
        {navItems.map((item) => {
          // Check if exactly matched (for Dashboard) or starts with for subroutes
          const isActive = item.href === '/admin' 
            ? pathname === '/admin' 
            : pathname.startsWith(item.href);

          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                isActive 
                  ? 'bg-primary/5 text-primary' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-100">
        <Link 
          href="/api/admin/logout" 
          className="flex items-center gap-3 px-6 py-4 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all"
        >
          <LogOut size={20} />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}

function ShieldCheck({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
