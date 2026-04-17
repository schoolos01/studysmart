import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { jwtVerify } from 'jose';
import Link from 'next/link';
import { LayoutDashboard, BookOpen, Users, LogOut, Settings, BarChart3, Rocket } from 'lucide-react';
import AdminLogin from '@/components/AdminLogin';

import AdminSidebar from '@/components/AdminSidebar';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'ssic_default_secret');

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get('admin_token')?.value;
  let isAuthenticated = false;

  if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      isAuthenticated = true;
    } catch (err) {
      console.error('Invalid token:', err);
    }
  }

  // If not authenticated, show the login gate on any admin route
  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <AdminSidebar />
      <main className="flex-grow ml-72 p-10">
        {children}
      </main>
    </div>
  );
}
