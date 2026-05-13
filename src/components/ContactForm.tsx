'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Loader2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  type?: 'contact' | 'demo' | 'course' | 'schools' | 'join';
  courseName?: string;
  title?: string;
  subtitle?: string;
  initialPersona?: 'student' | 'school';
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  const cleaned = phone.replace(/\s+/g, '');
  return /^[+]?[0-9]{7,15}$/.test(cleaned);
}

const ContactForm = ({ type = 'contact', courseName, title, subtitle, initialPersona = 'student' }: ContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [persona, setPersona] = useState<'student' | 'school'>(initialPersona);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '',
    schoolName: '',
    city: '',
    designation: '',
    interest: ''
  });
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
      if (!validatePhone(value)) return 'Enter a valid phone number';
    }
    if (persona === 'school') {
      if (field === 'schoolName' && !value.trim()) return 'School name is required';
      if (field === 'city' && !value.trim()) return 'City is required';
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

    const fieldsToValidate = ['name', 'email', 'phone'];
    if (persona === 'school') fieldsToValidate.push('schoolName', 'city');
    
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    
    fieldsToValidate.forEach(f => {
      newErrors[f] = validate(f, (form as any)[f]);
      newTouched[f] = true;
    });

    setErrors(newErrors);
    setTouched(newTouched);
    
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          type,
          persona,
          source: type === 'join' ? 'join_page' : 'contact_form',
          createdAt: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '', schoolName: '', city: '', designation: '', interest: '' });
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
        <h3 className="text-2xl font-bold mb-3">Submission Successful! 🎉</h3>
        <p className="text-text/60 mb-8 max-w-sm mx-auto">
          Thank you for choosing Study Smart Innovations. Our team will contact you within 24 hours.
        </p>
        <button onClick={() => setStatus('idle')} className="text-primary font-bold hover:underline text-sm">
          Send another request →
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
    <div id="join-form" className="glass p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white/50 backdrop-blur-2xl">
      {title && <h3 className="text-3xl mb-2 font-heading">{title}</h3>}
      {subtitle && <p className="text-text/60 mb-8">{subtitle}</p>}
      
      {/* Persona Toggle */}
      <div className="flex p-1.5 bg-black/5 rounded-2xl mb-10 w-full max-w-sm mx-auto">
        <button
          onClick={() => setPersona('student')}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${persona === 'student' ? 'bg-white shadow-md text-primary' : 'text-text/40 hover:text-text/60'}`}
        >
          For Students
        </button>
        <button
          onClick={() => setPersona('school')}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${persona === 'school' ? 'bg-white shadow-md text-primary' : 'text-text/40 hover:text-text/60'}`}
        >
          For Schools
        </button>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            {errors.name && touched.name && <p className="text-red-500 text-[10px] ml-1 mt-1 font-bold uppercase tracking-wider">{errors.name}</p>}
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
            {errors.phone && touched.phone && <p className="text-red-500 text-[10px] ml-1 mt-1 font-bold uppercase tracking-wider">{errors.phone}</p>}
          </div>
        </div>

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
          {errors.email && touched.email && <p className="text-red-500 text-[10px] ml-1 mt-1 font-bold uppercase tracking-wider">{errors.email}</p>}
        </div>

        {persona === 'school' ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="schoolName" className="text-sm font-bold text-text/50 ml-1">School Name</label>
              <div className="relative">
                <input
                  type="text" id="schoolName"
                  value={form.schoolName} onChange={handleChange} onBlur={handleBlur}
                  className={inputClass('schoolName')} placeholder="St. Mary's School"
                />
              </div>
              {errors.schoolName && touched.schoolName && <p className="text-red-500 text-[10px] ml-1 mt-1 font-bold uppercase tracking-wider">{errors.schoolName}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label htmlFor="city" className="text-sm font-bold text-text/50 ml-1">City</label>
                <input
                  type="text" id="city"
                  value={form.city} onChange={handleChange} onBlur={handleBlur}
                  className={inputClass('city')} placeholder="Kolkata"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="designation" className="text-sm font-bold text-text/50 ml-1">Designation</label>
                <select id="designation" value={form.designation} onChange={handleChange} className={inputClass('designation')}>
                  <option value="">Select Role</option>
                  <option value="Principal">Principal</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Trustee">Trustee / Owner</option>
                </select>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-1">
            <label htmlFor="interest" className="text-sm font-bold text-text/50 ml-1">Interested In</label>
            <select id="interest" value={form.interest} onChange={handleChange} className={inputClass('interest')}>
              <option value="">Select Interest</option>
              <option value="Python Programming">Python Programming</option>
              <option value="Java Development">Java Development</option>
              <option value="Robotics Workshops">Robotics Workshops</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Other">Other</option>
            </select>
          </motion.div>
        )}

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-bold text-text/50 ml-1">Your Message (Optional)</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-text/30" />
            <textarea
              id="message" rows={3}
              value={form.message} onChange={handleChange}
              className="w-full bg-white/60 border border-black/5 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all resize-none font-medium placeholder:text-text/30"
              placeholder="Tell us more about your requirements..."
            />
          </div>
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center font-bold">Something went wrong. Please try again.</p>
        )}

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full btn-primary py-5 flex items-center justify-center gap-2 group disabled:opacity-70 text-lg"
        >
          {status === 'loading' ? (
            <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</>
          ) : (
            <><Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Inquiry</>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
