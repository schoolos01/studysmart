'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, ExternalLink, BookOpen, Clock, X, Save, Loader2, CheckCircle2, AlertCircle, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function Toast({ toast }: { toast: {msg: string; type: 'success'|'error'} | null }) {
  if (!toast) return null;
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className={`fixed top-8 right-8 z-[999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-bold text-white ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
      {toast.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
      {toast.msg}
    </motion.div>
  );
}

const emptyForm = {
  title: '', slug: '', subtitle: '', description: '', duration: '', price: '', originalPrice: '', discount: '', type: 'recorded', image: '', startingDate: '', liveClassInfo: '',
};

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState<{msg: string; type: 'success'|'error'} | null>(null);
  const [editCourse, setEditCourse] = useState<any | null>(null);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<any | null>(null);

  useEffect(() => { fetchCourses(); }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const res = await fetch('/api/courses');
    const data = await res.json();
    setCourses(data);
    setLoading(false);
  };

  const showToast = (msg: string, type: 'success'|'error') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSaveEdit = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/courses/${editCourse.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editCourse),
      });
      if (res.ok) { showToast('Course updated!', 'success'); setEditCourse(null); fetchCourses(); }
      else showToast('Update failed', 'error');
    } finally { setSaving(false); }
  };

  const handleDelete = async (course: any) => {
    const res = await fetch(`/api/courses/${course.slug}`, { method: 'DELETE' });
    if (res.ok) { showToast('Course deleted', 'success'); setConfirmDelete(null); fetchCourses(); }
    else showToast('Delete failed', 'error');
  };

  const filtered = courses.filter(c =>
    c.title?.toLowerCase().includes(search.toLowerCase()) ||
    c.slug?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <AnimatePresence>{toast && <Toast toast={toast} />}</AnimatePresence>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-heading mb-2">Manage <span className="text-primary italic">Courses</span></h1>
          <p className="text-slate-500">Create, edit, or remove courses. Changes appear on the site instantly.</p>
        </div>
        <Link href="/admin/courses/new" className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/20">
          <Plus size={18} /> Create Course
        </Link>
      </div>

      {/* Search */}
      <div className="flex gap-4 items-center bg-white p-4 rounded-3xl border border-slate-200">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input type="text" placeholder="Search by title or slug..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 font-medium" />
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map(i => <div key={i} className="h-64 rounded-[2.5rem] bg-slate-100 animate-pulse" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((course: any, idx: number) => (
              <motion.div key={course.slug} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: idx * 0.04 }}
                className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  {course.image ? (
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300"><BookOpen size={40} /></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex gap-2">
                    <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase">{course.type}</span>
                    {course.price && <span className="px-2 py-0.5 bg-primary rounded-md text-[10px] font-bold text-white">{course.price}</span>}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 line-clamp-1">{course.title}</h3>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-5 pb-4 border-b border-slate-50">
                    <span className="flex items-center gap-1"><Clock size={12} className="text-primary" />{course.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen size={12} className="text-primary" />{course.modules?.length || 0} modules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button onClick={() => setEditCourse({ ...course })}
                        className="p-2.5 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all" title="Edit">
                        <Edit2 size={15} />
                      </button>
                      <button onClick={() => setConfirmDelete(course)}
                        className="p-2.5 bg-red-50 text-red-400 rounded-xl hover:bg-red-100 transition-all" title="Delete">
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <a href={`/courses/${course.slug}`} target="_blank"
                      className="text-xs font-bold text-slate-400 hover:text-primary flex items-center gap-1 transition-colors">
                      View Live <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {!loading && filtered.length === 0 && (
            <div className="col-span-3 text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <BookOpen className="mx-auto mb-4 text-slate-300" size={48} />
              <h3 className="text-xl font-bold text-slate-500">No courses found</h3>
            </div>
          )}
        </div>
      )}

      {/* Edit Modal */}
      <AnimatePresence>
        {editCourse && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={e => e.target === e.currentTarget && setEditCourse(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2.5rem] p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Edit Course</h2>
                <button onClick={() => setEditCourse(null)} className="p-2 rounded-xl hover:bg-slate-100"><X size={20} /></button>
              </div>
              <div className="space-y-5">
                {[
                  { label: 'Title', field: 'title' },
                  { label: 'Slug', field: 'slug' },
                  { label: 'Subtitle', field: 'subtitle' },
                  { label: 'Duration', field: 'duration' },
                  { label: 'Price', field: 'price' },
                  { label: 'Original Price', field: 'originalPrice' },
                  { label: 'Discount Label', field: 'discount' },
                  { label: 'Banner Image URL', field: 'image' },
                  { label: 'Starting Date', field: 'startingDate' },
                  { label: '💳 Payment / Enroll URL (Razorpay, etc.)', field: 'paymentUrl' },
                ].map(({ label, field }) => (
                  <div key={field} className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">{label}</label>
                    <input value={editCourse[field] || ''} onChange={e => setEditCourse({ ...editCourse, [field]: e.target.value })}
                      className="form-input" />
                  </div>
                ))}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Type</label>
                  <select value={editCourse.type || 'recorded'} onChange={e => setEditCourse({ ...editCourse, type: e.target.value })}
                    className="form-input appearance-none">
                    <option value="recorded">Recorded</option>
                    <option value="live">Live</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Description</label>
                  <textarea rows={4} value={editCourse.description || ''} onChange={e => setEditCourse({ ...editCourse, description: e.target.value })}
                    className="form-input rounded-2xl" />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => setEditCourse(null)} className="flex-1 py-4 rounded-full border border-slate-200 font-bold hover:bg-slate-50">Cancel</button>
                <button onClick={handleSaveEdit} disabled={saving}
                  className="flex-1 btn-primary flex items-center justify-center gap-2">
                  {saving ? <Loader2 className="animate-spin" size={18} /> : <><Save size={18} /> Save Changes</>}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirm Modal */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-white rounded-[2rem] p-10 w-full max-w-md text-center shadow-2xl">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                <Trash2 size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-3">Delete Course?</h2>
              <p className="text-slate-500 mb-8">This will permanently remove <strong>"{confirmDelete.title}"</strong> from the database. This cannot be undone.</p>
              <div className="flex gap-4">
                <button onClick={() => setConfirmDelete(null)} className="flex-1 py-4 rounded-full border border-slate-200 font-bold">Cancel</button>
                <button onClick={() => handleDelete(confirmDelete)} className="flex-1 py-4 rounded-full bg-red-500 text-white font-bold hover:bg-red-600">Yes, Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
