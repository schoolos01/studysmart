'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, User, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Force a page refresh to update server-side auth state
        window.location.reload();
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-background flex items-center justify-center">
        <div className="section-container max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-10 rounded-[3rem] shadow-2xl border border-white/40"
          >
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-heading mb-2">Admin Login</h1>
              <p className="text-text/60">Enter credentials to access dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text/40 ml-4">Username</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-text/40" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white/50 border border-black/5 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-text placeholder:text-text/20"
                    placeholder="hgadmin"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text/40 ml-4">Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-text/40" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/50 border border-black/5 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-text placeholder:text-text/20"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-red-50 text-red-500 text-sm flex gap-3 items-center font-medium border border-red-100"
                >
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-4 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Sign In to SSIC
                    <ShieldCheck className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
