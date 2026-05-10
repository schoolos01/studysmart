'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Loader2, AlertCircle, Building2, Users } from 'lucide-react';

interface QuoteFormProps {
  type?: string;
  source?: string;
  title?: string;
  subtitle?: string;
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  const cleaned = phone.replace(/\s+/g, '');
  return /^[+]?[0-9]{7,15}$/.test(cleaned);
}

const QuoteForm = ({ type = 'quote_request', source = 'website', title = 'Request a Quote', subtitle = 'Fill out the form below and we will get back to you with a customized proposal.' }: QuoteFormProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', schoolName: '', email: '', phone: '', studentCount: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (field: string, value: string) => {
    if (field === 'name' && !value.trim()) return 'Full name is required';
    if (field === 'schoolName' && !value.trim()) return 'School name is required';
    if (field === 'email') {
      if (!value.trim()) return 'Email is required';
      if (!validateEmail(value)) return 'Enter a valid email address';
    }
    if (field === 'phone') {
      if (!value.trim()) return 'Phone number is required';
      if (!validatePhone(value)) return 'Enter a valid phone number (7–15 digits)';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
    if (touched[id]) {
      setErrors(prev => ({ ...prev, [id]: validate(id, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    setErrors(prev => ({ ...prev, [id]: validate(id, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Touch all required fields to show errors
    const allTouched = { name: true, schoolName: true, email: true, phone: true };
    setTouched(allTouched);
    const newErrors = {
      name: validate('name', form.name),
      schoolName: validate('schoolName', form.schoolName),
      email: validate('email', form.email),
      phone: validate('phone', form.phone),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `School: ${form.schoolName}\nExpected Students: ${form.studentCount}\nMessage: ${form.message}`,
          type,
          source,
          createdAt: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', schoolName: '', email: '', phone: '', studentCount: '', message: '' });
        setTouched({});
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-14 rounded-[2.5rem] text-center border border-emerald-200 bg-emerald-50/50"
      >
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, delay: 0.1 }}
          className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-200"
        >
          <CheckCircle2 className="h-10 w-10 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-3">Request Received! 🎉</h3>
        <p className="text-text/60 mb-8 max-w-sm mx-auto">
          Thank you for requesting a quote. Our team will get back to you with a customized proposal within 24 hours.
        </p>
        <button onClick={() => setStatus('idle')} className="text-primary font-bold hover:underline text-sm">
          Submit another request →
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: string) =>
    `w-full bg-white/60 border rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:ring-4 transition-all font-medium placeholder:text-text/30 ${
      errors[field] && touched[field]
        ? 'border-red-300 focus:border-red-400 focus:ring-red-50 bg-red-50/30'
        : 'border-black/5 focus:border-primary/40 focus:ring-primary/5'
    }`;

  return (
    <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white/50 backdrop-blur-2xl relative z-10">
      {title && <h3 className="text-3xl mb-2 font-heading font-bold">{title}</h3>}
      {subtitle && <p className="text-text/60 mb-8">{subtitle}</p>}
      {!subtitle && <div className="mb-8" />}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Name */}
          <div className="space-y-1">
            <label htmlFor="schoolName" className="text-sm font-bold text-text/50 ml-1">School Name</label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text/30" />
              <input
                type="text" id="schoolName"
                value={form.schoolName} onChange={handleChange} onBlur={handleBlur}
                className={inputClass('schoolName')} placeholder="e.g. Delhi Public School"
              />
            </div>
            <AnimatePresence>
              {errors.schoolName && touched.schoolName && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                  className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                  <AlertCircle size={11} /> {errors.schoolName}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Person */}
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-bold text-text/50 ml-1">Contact Person Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text/30" />
              <input
                type="text" id="name"
                value={form.name} onChange={handleChange} onBlur={handleBlur}
                className={inputClass('name')} placeholder="John Doe"
              />
            </div>
            <AnimatePresence>
              {errors.name && touched.name && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                  className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                  <AlertCircle size={11} /> {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-bold text-text/50 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text/30" />
              <input
                type="email" id="email"
                value={form.email} onChange={handleChange} onBlur={handleBlur}
                className={inputClass('email')} placeholder="john@example.com"
              />
            </div>
            <AnimatePresence>
              {errors.email && touched.email && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                  className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                  <AlertCircle size={11} /> {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-bold text-text/50 ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text/30" />
              <input
                type="tel" id="phone"
                value={form.phone} onChange={handleChange} onBlur={handleBlur}
                className={inputClass('phone')} placeholder="+91 99999 00000"
              />
            </div>
            <AnimatePresence>
              {errors.phone && touched.phone && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                  className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                  <AlertCircle size={11} /> {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Expected Students */}
        <div className="space-y-1">
          <label htmlFor="studentCount" className="text-sm font-bold text-text/50 ml-1">Estimated Participants</label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text/30" />
            <select
              id="studentCount"
              value={form.studentCount} onChange={handleChange} onBlur={handleBlur}
              className={`w-full bg-white/60 border rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:ring-4 transition-all font-medium border-black/5 focus:border-primary/40 focus:ring-primary/5 appearance-none ${!form.studentCount ? 'text-text/30' : 'text-text'}`}
            >
              <option value="" disabled>Select expected number of participants</option>
              <option value="Less than 20">Less than 20 students</option>
              <option value="20-50">20 - 50 students (Recommended: 10 Teams)</option>
              <option value="50-100">50 - 100 students</option>
              <option value="100+">100+ students</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-bold text-text/50 ml-1">Additional Requirements (Optional)</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-text/30" />
            <textarea
              id="message" rows={3}
              value={form.message} onChange={handleChange}
              className="w-full bg-white/60 border border-black/5 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all resize-none font-medium placeholder:text-text/30"
              placeholder="Any specific requests for the workshop or exhibition?"
            />
          </div>
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center font-medium flex items-center justify-center gap-2">
            <AlertCircle size={16} /> Something went wrong. Please try again.
          </p>
        )}

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full btn-primary py-4 flex items-center justify-center gap-2 group disabled:opacity-70 text-lg"
        >
          {status === 'loading' ? (
            <><Loader2 className="h-5 w-5 animate-spin" /> Submitting Request...</>
          ) : (
            <><Send className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Request Proposal & Pricing</>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default QuoteForm;
