'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Save, X, Loader2, CheckCircle2, AlertCircle, Image as ImageIcon, RefreshCw, Eye } from 'lucide-react';

function Toast({ toast }: { toast: {msg:string;type:'success'|'error'}|null }) {
  if (!toast) return null;
  return (
    <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
      className={`fixed top-8 right-8 z-[999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-bold text-white ${toast.type==='success'?'bg-emerald-500':'bg-red-500'}`}>
      {toast.type==='success'?<CheckCircle2 size={20}/>:<AlertCircle size={20}/>} {toast.msg}
    </motion.div>
  );
}

const pageOptions = ['Home','About','Courses','Schools','Software','Contact','Global'];
const emptyForm = { key: '', label: '', page: 'Home', url: '' };

export default function AdminMediaPage() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{msg:string;type:'success'|'error'}|null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editImage, setEditImage] = useState<any|null>(null);  // for inline URL edit
  const [editUrl, setEditUrl] = useState('');
  const [form, setForm] = useState<any>({ ...emptyForm });   // for new placeholder  
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<any|null>(null);
  const [filterPage, setFilterPage] = useState<string>('All');

  useEffect(() => { fetchImages(); }, []);

  const fetchImages = async () => {
    setLoading(true);
    const res = await fetch('/api/settings/images');
    setImages(await res.json());
    setLoading(false);
  };

  const showToast = (msg:string, type:'success'|'error') => {
    setToast({msg,type}); setTimeout(()=>setToast(null),3000);
  };

  const handleUrlSave = async (img: any) => {
    setSaving(true);
    try {
      const res = await fetch('/api/settings/images', {
        method: 'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ key: img.key, label: img.label, page: img.page, url: editUrl }),
      });
      if (res.ok) { showToast('Image updated! Live now.','success'); setEditImage(null); setEditUrl(''); fetchImages(); }
      else showToast('Failed to update','error');
    } finally { setSaving(false); }
  };

  const handleCreatePlaceholder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.key.trim() || !form.label.trim()) return;
    setSaving(true);
    try {
      const res = await fetch('/api/settings/images', {
        method: 'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form),
      });
      if (res.ok) { showToast('Placeholder created!','success'); setShowForm(false); setForm({...emptyForm}); fetchImages(); }
      else showToast('Failed to create','error');
    } finally { setSaving(false); }
  };

  const handleDelete = async (img: any) => {
    const res = await fetch(`/api/settings/images?id=${img._id}`, { method: 'DELETE' });
    if (res.ok) { showToast('Placeholder removed','success'); setConfirmDelete(null); fetchImages(); }
    else showToast('Delete failed','error');
  };

  const filteredImages = filterPage === 'All' ? images : images.filter(img => img.page === filterPage);
  const groupedByPage = filteredImages.reduce((acc: Record<string,any[]>, img) => {
    const page = img.page || 'General';
    if (!acc[page]) acc[page] = [];
    acc[page].push(img);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      <AnimatePresence>{toast && <Toast toast={toast}/>}</AnimatePresence>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-heading mb-2">Global <span className="text-primary italic">Media Manager</span></h1>
          <p className="text-slate-500">Swap any image on the site. Add new placeholders, edit URLs, or remove them.</p>
        </div>
        <button onClick={()=>{setForm({...emptyForm});setShowForm(true);}}
          className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/20">
          <Plus size={18}/> Add Placeholder
        </button>
      </div>

      {/* Page Filter */}
      <div className="flex flex-wrap gap-2">
        {['All', ...pageOptions].map(p => (
          <button key={p} onClick={()=>setFilterPage(p)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${filterPage===p?'bg-primary text-white shadow-md shadow-primary/20':'bg-white border border-slate-200 text-slate-500 hover:border-primary/30'}`}>
            {p}
          </button>
        ))}
      </div>

      {/* Grid — grouped by page */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i=><div key={i} className="h-56 bg-slate-100 rounded-[2rem] animate-pulse"/>)}
        </div>
      ) : Object.keys(groupedByPage).length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
          <ImageIcon className="mx-auto mb-4 text-slate-300" size={48}/>
          <h3 className="text-xl font-bold text-slate-500">No placeholders found</h3>
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedByPage).map(([page, imgs]) => (
            <div key={page}>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Eye size={14}/> {page}
                <span className="bg-slate-100 text-slate-400 px-2 py-0.5 rounded-lg text-xs">{imgs.length}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(imgs as any[]).map((img: any) => {
                  const isEditing = editImage?._id === img._id;
                  return (
                    <motion.div key={img._id} layout initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
                      className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
                      {/* Preview */}
                      <div className="relative h-36 bg-slate-100 overflow-hidden">
                        {img.url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={img.url} alt={img.label} className="w-full h-full object-cover"
                            onError={e=>{(e.target as HTMLImageElement).src='https://placehold.co/400x200/e2e8f0/94a3b8?text=No+Image';}}/>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 gap-2">
                            <ImageIcon size={32}/><span className="text-xs font-bold">No image set</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                        <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">{img.key}</span>
                      </div>

                      <div className="p-5">
                        <p className="font-bold text-sm mb-1">{img.label}</p>
                        {img.url && !isEditing && (
                          <p className="text-xs text-slate-400 truncate mb-3" title={img.url}>{img.url}</p>
                        )}

                        {isEditing ? (
                          <div className="space-y-2">
                            <input type="url" value={editUrl} onChange={e=>setEditUrl(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
                              placeholder="Paste new image URL..." autoFocus/>
                            <div className="flex gap-2">
                              <button onClick={()=>{setEditImage(null);setEditUrl('');}}
                                className="flex-1 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-400 hover:bg-slate-50">Cancel</button>
                              <button onClick={()=>handleUrlSave(img)} disabled={saving||!editUrl.trim()}
                                className="flex-1 py-2 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center gap-1 hover:bg-primary/90 disabled:opacity-50">
                                {saving?<Loader2 size={14} className="animate-spin"/>:<><Save size={14}/> Save</>}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button onClick={()=>{setEditImage(img);setEditUrl(img.url||'');}}
                              className="flex-1 py-2 rounded-xl bg-primary/10 text-primary text-sm font-bold flex items-center justify-center gap-1 hover:bg-primary/15">
                              <Edit2 size={13}/> Change URL
                            </button>
                            <button onClick={()=>setConfirmDelete(img)}
                              className="p-2 rounded-xl bg-red-50 text-red-400 hover:bg-red-100 transition-all" title="Delete placeholder">
                              <Trash2 size={14}/>
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Placeholder Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={e=>e.target===e.currentTarget&&setShowForm(false)}>
            <motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.9,opacity:0}}
              className="bg-white rounded-[2.5rem] p-10 w-full max-w-lg shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Add Placeholder</h2>
                <button onClick={()=>setShowForm(false)} className="p-2 rounded-xl hover:bg-slate-100"><X size={20}/></button>
              </div>
              <form onSubmit={handleCreatePlaceholder} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Unique Key (no spaces)</label>
                  <input required value={form.key} onChange={e=>setForm({...form, key:e.target.value.toUpperCase().replace(/\s+/g,'_')})}
                    className="form-input" placeholder="e.g. BLOG_HERO"/>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Display Label</label>
                  <input required value={form.label} onChange={e=>setForm({...form,label:e.target.value})}
                    className="form-input" placeholder="e.g. Blog Page – Hero Banner"/>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Page</label>
                  <select value={form.page} onChange={e=>setForm({...form,page:e.target.value})} className="form-input appearance-none">
                    {pageOptions.map(p=><option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Image URL (optional)</label>
                  <input value={form.url} onChange={e=>setForm({...form,url:e.target.value})}
                    className="form-input" placeholder="https://..."/>
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={()=>setShowForm(false)} className="flex-1 py-4 rounded-full border border-slate-200 font-bold">Cancel</button>
                  <button type="submit" disabled={saving} className="flex-1 btn-primary flex items-center justify-center gap-2">
                    {saving?<Loader2 className="animate-spin" size={18}/> :<><Plus size={18}/> Create</>}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirm */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div initial={{scale:0.9}} animate={{scale:1}} exit={{scale:0.9}}
              className="bg-white rounded-[2rem] p-10 w-full max-w-md text-center shadow-2xl">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500"><Trash2 size={32}/></div>
              <h2 className="text-2xl font-bold mb-3">Delete Placeholder?</h2>
              <p className="text-slate-500 mb-8">Remove <strong>"{confirmDelete.label}"</strong> from the media manager? This won't affect any live pages.</p>
              <div className="flex gap-4">
                <button onClick={()=>setConfirmDelete(null)} className="flex-1 py-4 rounded-full border border-slate-200 font-bold">Cancel</button>
                <button onClick={()=>handleDelete(confirmDelete)} className="flex-1 py-4 rounded-full bg-red-500 text-white font-bold hover:bg-red-600">Yes, Remove</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
