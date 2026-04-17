'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  Rocket, 
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import Link from 'next/link';

export default function NewCoursePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    subtitle: '',
    description: '',
    duration: '',
    price: '',
    originalPrice: '',
    discount: '',
    type: 'recorded',
    image: '',
    startingDate: '',
    liveClassInfo: '',
  });

  const [modules, setModules] = useState([{ title: '', desc: '' }]);
  const [whatYouLearn, setWhatYouLearn] = useState(['']);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          modules,
          whatYouWillLearn: whatYouLearn,
          // Add default mentor if not specified, or add mentor fields to form
          mentor: {
            name: "H. Goswami",
            role: "Educator & Software Engineer",
            bio: ["6+ years of experience", "Simplifying complex topics"],
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
            whyLearnFromMe: ["Practical examples", "Easy to understand"]
          },
          bonus: ["Private WhatsApp Group", "Lifetime Access", "Doubt Support"],
          placementGuidance: ["Resume Guidance", "Project Help", "Career Roadmap"]
        }),
      });

      if (res.ok) {
        router.push('/admin/courses');
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to create course');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex items-center gap-4">
        <Link href="/admin/courses" className="p-3 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-primary transition-all">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-heading">Create <span className="text-primary italic">New Course</span></h1>
          <p className="text-slate-500">Fill in the details to launch your next course.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-20">
        {/* Basic Info */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 size={24} className="text-primary" />
            General Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Course Title</label>
              <input 
                type="text" 
                required
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}
                className="form-input" 
                placeholder="Python Mastery: Zero to DSA" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Slug</label>
              <input 
                type="text" 
                required
                value={formData.slug}
                onChange={e => setFormData({...formData, slug: e.target.value})}
                className="form-input" 
                placeholder="python-mastery" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Subtitle</label>
            <input 
              type="text" 
              value={formData.subtitle}
              onChange={e => setFormData({...formData, subtitle: e.target.value})}
              className="form-input" 
              placeholder="Master Python from basics to advanced libraries." 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Description</label>
            <textarea 
              rows={4}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="form-input rounded-3xl" 
              placeholder="Full course description in Bengali..." 
            />
          </div>
        </div>

        {/* Pricing & Logistics */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Rocket size={24} className="text-orange-500" />
            Logistics & Pricing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Current Price</label>
              <input 
                type="text" 
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
                className="form-input" 
                placeholder="₹499" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Original Price</label>
              <input 
                type="text" 
                value={formData.originalPrice}
                onChange={e => setFormData({...formData, originalPrice: e.target.value})}
                className="form-input" 
                placeholder="₹699" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Course Type</label>
              <select 
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
                className="form-input appearance-none"
              >
                <option value="recorded">Recorded</option>
                <option value="live">Live</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Banner Image URL</label>
              <input 
                type="text" 
                value={formData.image}
                onChange={e => setFormData({...formData, image: e.target.value})}
                className="form-input" 
                placeholder="/hero_bengali.png" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-4">Duration</label>
              <input 
                type="text" 
                value={formData.duration}
                onChange={e => setFormData({...formData, duration: e.target.value})}
                className="form-input" 
                placeholder="2 Months" 
              />
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Plus size={24} className="text-emerald-500" />
              Curriculum Roadmap
            </h3>
            <button 
              type="button"
              onClick={() => setModules([...modules, { title: '', desc: '' }])}
              className="px-4 py-2 bg-slate-50 rounded-xl text-primary text-sm font-bold flex items-center gap-2"
            >
              <Plus size={16} /> Add Module
            </button>
          </div>

          <div className="space-y-4">
            {modules.map((mod, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-3xl relative">
                <div className="flex-grow space-y-4">
                  <input 
                    type="text" 
                    value={mod.title}
                    onChange={e => {
                      const newMods = [...modules];
                      newMods[idx].title = e.target.value;
                      setModules(newMods);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold focus:outline-none" 
                    placeholder="Module Title" 
                  />
                  <textarea 
                    value={mod.desc}
                    onChange={e => {
                      const newMods = [...modules];
                      newMods[idx].desc = e.target.value;
                      setModules(newMods);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none" 
                    placeholder="Brief description..." 
                  />
                </div>
                <button 
                  type="button"
                  onClick={() => setModules(modules.filter((_, i) => i !== idx))}
                  className="p-2 text-slate-300 hover:text-red-500 transition-all self-start"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="sticky bottom-8 flex justify-between items-center bg-white/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white shadow-2xl z-50">
          <div className="flex items-center gap-3">
             {error && <div className="text-red-500 text-sm font-bold flex items-center gap-2"><AlertCircle size={16} /> {error}</div>}
          </div>
          <div className="flex gap-4">
            <Link href="/admin/courses" className="px-8 py-4 rounded-full font-bold text-slate-400 hover:text-slate-600 transition-all">
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary flex items-center gap-2 px-10 shadow-lg shadow-primary/20"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <><Save size={20} /> Launch Course</>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
