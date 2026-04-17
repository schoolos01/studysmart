'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface LeadFormProps {
  type: 'contact' | 'demo' | 'course' | 'newsletter';
  courseName?: string;
  title?: string;
}

const LeadForm = ({ type, courseName, title }: LeadFormProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    schoolName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', schoolName: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-3xl text-center border-emerald-500/20 bg-emerald-500/5 mb-12"
      >
        <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
        <p className="text-text/70 mb-8">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-primary font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-xl border-white/50 backdrop-blur-2xl">
      {title && <h3 className="text-2xl mb-8 font-heading">{title}</h3>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-text/60 ml-1">Full Name</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-text/60 ml-1">Email Address</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-text/60 ml-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              placeholder="+91 99999 00000"
            />
          </div>
          {type === 'demo' ? (
            <div className="space-y-2">
              <label htmlFor="schoolName" className="text-sm font-medium text-text/60 ml-1">School Name</label>
              <input
                type="text"
                id="schoolName"
                required
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                placeholder="Ex. Green Valley School"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-text/60 ml-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all disabled:opacity-50"
                value={courseName || 'General Inquiry'}
                disabled
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-text/60 ml-1">Your Message</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
            placeholder="Tell us what you are looking for..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary py-4 flex items-center justify-center gap-2 group disabled:opacity-70"
        >
          {status === 'loading' ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {type === 'demo' ? 'Book Free Demo' : 'Send Message'}
              <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
