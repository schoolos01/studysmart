'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Loader2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  type?: 'contact' | 'demo' | 'course' | 'schools';
  courseName?: string;
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

const ContactForm = ({ type = 'contact', courseName, title = 'Get in Touch', subtitle }: ContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (field: string, value: string) => {
    if (field === 'name' && !value.trim()) return 'Full name is required';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
    if (touched[id]) {
      setErrors(prev => ({ ...prev, [id]: validate(id, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    setErrors(prev => ({ ...prev, [id]: validate(id, value) }));
  };

  const isValid = () => {
    return (
      form.name.trim() &&
      validateEmail(form.email) &&
      validatePhone(form.phone)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Touch all fields to show errors
    const allTouched = { name: true, email: true, phone: true };
    setTouched(allTouched);
    const newErrors = {
      name: validate('name', form.name),
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
          ...form,
          type,
          courseName: courseName || null,
          source: 'contact_form',
          createdAt: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
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
        <h3 className="text-2xl font-bold mb-3">Message Sent! 🎉</h3>
        <p className="text-text/60 mb-8 max-w-sm mx-auto">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button onClick={() => setStatus('idle')} className="text-primary font-bold hover:underline text-sm">
          Send another message →
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
    <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white/50 backdrop-blur-2xl">
      {title && <h3 className="text-3xl mb-2 font-heading">{title}</h3>}
      {subtitle && <p className="text-text/60 mb-8">{subtitle}</p>}
      {!subtitle && <div className="mb-8" />}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-bold text-text/50 ml-1">Full Name</label>
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

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-bold text-text/50 ml-1">Your Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-text/30" />
            <textarea
              id="message" rows={4}
              value={form.message} onChange={handleChange}
              className="w-full bg-white/60 border border-black/5 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all resize-none font-medium placeholder:text-text/30"
              placeholder="Tell us what you are looking for..."
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
          className="w-full btn-primary py-4 flex items-center justify-center gap-2 group disabled:opacity-70"
        >
          {status === 'loading' ? (
            <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
          ) : (
            <><Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Send Message</>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
