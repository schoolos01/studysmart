'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Mail, Phone, Loader2, CheckCircle2, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

function validateEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function validatePhone(phone: string) { return /^[+]?[0-9]{7,15}$/.test(phone.replace(/\s+/g, '')); }

interface EnrollModalProps {
  courseName: string;
  courseSlug: string;
  paymentUrl: string;
}

export default function EnrollModal({ courseName, courseSlug, paymentUrl }: EnrollModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (v: string) => {
    setEmail(v);
    if (v && !validateEmail(v)) setEmailError('Enter a valid email address');
    else setEmailError('');
  };

  const handlePhoneChange = (v: string) => {
    setPhone(v);
    if (v && !validatePhone(v)) setPhoneError('Enter a valid phone number');
    else setPhoneError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Final validation check
    const eErr = !validateEmail(email) ? 'Enter a valid email address' : '';
    const pErr = !validatePhone(phone) ? 'Enter a valid phone number' : '';
    setEmailError(eErr); setPhoneError(pErr);
    if (eErr || pErr) return;
    setLoading(true);
    setError('');

    try {
      // Save lead to MongoDB
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          phone,
          courseName,
          courseSlug,
          source: 'enroll_modal',
          createdAt: new Date().toISOString(),
        }),
      });

      setDone(true);
      // Short delay for the success animation, then redirect
      setTimeout(() => {
        window.open(paymentUrl, '_blank');
        setOpen(false);
        setDone(false);
        setEmail('');
        setPhone('');
      }, 1200);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Animated Big Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="relative group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-xl overflow-hidden shadow-2xl shadow-primary/40"
        style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)' }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #06B6D4 100%)' }}
        />
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ boxShadow: ['0 0 0 0px rgba(99,102,241,0.5)', '0 0 0 18px rgba(99,102,241,0)'] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <Rocket size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
        <span className="relative z-10">Enroll Now</span>
        <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={e => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.3)]"
            >
              {/* Top gradient banner */}
              <div className="h-3 w-full" style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)' }} />

              <div className="p-10">
                <button onClick={() => setOpen(false)} className="absolute top-6 right-6 p-2 rounded-xl hover:bg-slate-100 transition-all">
                  <X size={20} className="text-slate-400" />
                </button>

                {/* Icon + Heading */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                  >
                    <Rocket size={28} />
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-1">Almost There! 🎉</h2>
                  <p className="text-slate-500 text-sm">Enter your details to secure your spot in</p>
                  <p className="font-bold text-primary mt-1">{courseName}</p>
                </div>

                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle2 size={36} className="text-emerald-500" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-emerald-600 mb-2">You're in!</h3>
                      <p className="text-slate-500 text-sm">Redirecting you to the payment page...</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <input
                            type="email" required value={email}
                            onChange={e => handleEmailChange(e.target.value)}
                            placeholder="you@example.com"
                            className={`w-full bg-slate-50 border rounded-full py-4 pl-14 pr-5 font-medium focus:outline-none focus:ring-2 transition-all ${emailError ? 'border-red-300 focus:ring-red-100 bg-red-50/30' : 'border-slate-200 focus:ring-primary/20 focus:border-primary/30'}`}
                          />
                        </div>
                        {emailError && <p className="text-red-500 text-xs ml-3 flex items-center gap-1"><AlertCircle size={11}/>{emailError}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <input
                            type="tel" required value={phone}
                            onChange={e => handlePhoneChange(e.target.value)}
                            placeholder="+91 98765 43210"
                            className={`w-full bg-slate-50 border rounded-full py-4 pl-14 pr-5 font-medium focus:outline-none focus:ring-2 transition-all ${phoneError ? 'border-red-300 focus:ring-red-100 bg-red-50/30' : 'border-slate-200 focus:ring-primary/20 focus:border-primary/30'}`}
                          />
                        </div>
                        {phoneError && <p className="text-red-500 text-xs ml-3 flex items-center gap-1"><AlertCircle size={11}/>{phoneError}</p>}
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm text-center font-medium">{error}</p>
                      )}

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 rounded-full text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                        style={{ background: loading ? '#94a3b8' : 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
                      >
                        {loading ? (
                          <><Loader2 size={20} className="animate-spin" /> Saving...</>
                        ) : (
                          <><ShieldCheck size={20} /> Secure My Spot</>
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                        <ShieldCheck size={12} />
                        We'll never share your info. Redirects to secure Razorpay page.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
