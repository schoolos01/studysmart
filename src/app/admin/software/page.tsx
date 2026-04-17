'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit2, Cpu, CheckCircle2, AlertCircle, Loader2, X, Save, ExternalLink } from 'lucide-react';

const colors = ['bg-primary', 'bg-cta', 'bg-emerald-500', 'bg-purple-500', 'bg-orange-500', 'bg-blue-500', 'bg-rose-500', 'bg-teal-500'];

const emptyForm = { title: '', slug: '', tagline: '', description: '', icon: 'Cpu', color: 'bg-primary', imageUrl: '', highlights: ['', '', ''] };

function Toast({ toast }: { toast: {msg:string;type:'success'|'error'} | null }) {
  if (!toast) return null;
  return (
    <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
      className={`fixed top-8 right-8 z-[999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-bold text-white ${toast.type==='success'?'bg-emerald-500':'bg-red-500'}`}>
      {toast.type==='success' ? <CheckCircle2 size={20}/> : <AlertCircle size={20}/>} {toast.msg}
    </motion.div>
  );
}

export default function AdminSoftwarePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string|null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{msg:string;type:'success'|'error'}|null>(null);
  const [confirmDelete, setConfirmDelete] = useState<any|null>(null);
  const [form, setForm] = useState<any>({ ...emptyForm, highlights: ['','',''] });

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch('/api/software');
    setProducts(await res.json());
    setLoading(false);
  };

  const showToast = (msg:string, type:'success'|'error') => {
    setToast({msg,type});
    setTimeout(()=>setToast(null), 3000);
  };

  const openCreate = () => {
    setForm({ ...emptyForm, highlights: ['','',''] });
    setEditId(null);
    setShowForm(true);
  };

  const openEdit = (p: any) => {
    setForm({ title: p.title||'', slug: p.slug||'', tagline: p.tagline||'', description: p.description||'',
      icon: p.icon||'Cpu', color: p.color||'bg-primary', imageUrl: p.image||p.imageUrl||'',
      highlights: p.highlights?.length ? p.highlights : ['','',''] });
    setEditId(p._id);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, active: true };
      let res;
      if (editId) {
        res = await fetch('/api/software', { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ id: editId, ...payload }) });
      } else {
        res = await fetch('/api/software', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      }
      if (res.ok) {
        showToast(editId ? 'Product updated!' : 'Product launched!', 'success');
        setShowForm(false);
        fetchProducts();
      } else { showToast('Save failed', 'error'); }
    } finally { setSaving(false); }
  };

  const handleDelete = async (p: any) => {
    const res = await fetch(`/api/software?id=${p._id}`, { method: 'DELETE' });
    if (res.ok) { showToast('Product removed', 'success'); setConfirmDelete(null); fetchProducts(); }
    else showToast('Delete failed', 'error');
  };

  return (
    <div className="space-y-10">
      <AnimatePresence>{toast && <Toast toast={toast} />}</AnimatePresence>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-heading mb-2">Manage <span className="text-primary italic">Products</span></h1>
          <p className="text-slate-500">Add or edit SaaS offerings like SchoolOS, HospitalOS, etc. Changes are live instantly.</p>
        </div>
        <button onClick={openCreate} className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/20">
          <Plus size={18}/> Add New Product
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2].map(i=><div key={i} className="h-48 bg-slate-100 rounded-[2rem] animate-pulse"/>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p:any) => (
            <motion.div key={p._id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
              className="bg-white rounded-[2rem] border border-slate-200 p-8 flex gap-6 items-start hover:shadow-xl transition-all">
              <div className={`w-14 h-14 rounded-2xl ${p.color||'bg-primary'} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                <Cpu size={24}/>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-slate-400 text-sm font-medium">{p.tagline}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={()=>openEdit(p)} className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all"><Edit2 size={15}/></button>
                    <button onClick={()=>setConfirmDelete(p)} className="p-2 bg-red-50 text-red-400 rounded-xl hover:bg-red-100 transition-all"><Trash2 size={15}/></button>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mt-3 line-clamp-2">{p.description}</p>
                {p.highlights?.filter(Boolean).length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.highlights.filter(Boolean).map((h:string, i:number) => (
                      <span key={i} className="text-xs bg-slate-50 text-slate-500 px-3 py-1 rounded-lg font-medium">✓ {h}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {products.length === 0 && (
            <div className="col-span-2 text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
              <Cpu className="mx-auto mb-4 text-slate-300" size={48}/>
              <h3 className="text-xl font-bold text-slate-500 mb-2">No products yet</h3>
              <p className="text-slate-400">Click "Add New Product" to launch your first offering.</p>
            </div>
          )}
        </div>
      )}

      {/* Create / Edit Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={e=>e.target===e.currentTarget&&setShowForm(false)}>
            <motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.9,opacity:0}}
              className="bg-white rounded-[2.5rem] p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{editId ? 'Edit Product' : 'Launch New Product'}</h2>
                <button onClick={()=>setShowForm(false)} className="p-2 rounded-xl hover:bg-slate-100"><X size={20}/></button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Product Name</label>
                    <input required value={form.title} onChange={e=>setForm({...form, title:e.target.value, slug:e.target.value.toLowerCase().replace(/\s+/g,'-')})} className="form-input" placeholder="HospitalOS"/>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Slug</label>
                    <input required value={form.slug} onChange={e=>setForm({...form, slug:e.target.value})} className="form-input" placeholder="hospitalos"/>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Tagline</label>
                  <input value={form.tagline} onChange={e=>setForm({...form, tagline:e.target.value})} className="form-input" placeholder="Smart Hospital Management"/>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Description</label>
                  <textarea rows={3} value={form.description} onChange={e=>setForm({...form, description:e.target.value})} className="form-input rounded-2xl"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Brand Color</label>
                  <div className="flex flex-wrap gap-3">
                    {colors.map(c=>(
                      <button key={c} type="button" onClick={()=>setForm({...form,color:c})}
                        className={`w-10 h-10 rounded-xl ${c} transition-all ${form.color===c?'ring-4 ring-offset-2 ring-slate-400 scale-110':''}`}/>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Preview Image URL</label>
                  <input value={form.imageUrl} onChange={e=>setForm({...form, imageUrl:e.target.value})} className="form-input" placeholder="https://..."/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">Key Highlights</label>
                  {form.highlights.map((h:string, i:number)=>(
                    <input key={i} value={h} onChange={e=>{const hl=[...form.highlights];hl[i]=e.target.value;setForm({...form,highlights:hl});}}
                      className="form-input mb-2" placeholder={`Highlight ${i+1}`}/>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={()=>setShowForm(false)} className="flex-1 py-4 rounded-full border border-slate-200 font-bold hover:bg-slate-50">Cancel</button>
                  <button type="submit" disabled={saving} className="flex-1 btn-primary flex items-center justify-center gap-2">
                    {saving ? <Loader2 className="animate-spin" size={18}/> : <><Save size={18}/> {editId?'Save Changes':'Launch'}</>}
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
              <h2 className="text-2xl font-bold mb-3">Delete Product?</h2>
              <p className="text-slate-500 mb-8">Permanently remove <strong>"{confirmDelete.title}"</strong>? This cannot be undone.</p>
              <div className="flex gap-4">
                <button onClick={()=>setConfirmDelete(null)} className="flex-1 py-4 rounded-full border border-slate-200 font-bold">Cancel</button>
                <button onClick={()=>handleDelete(confirmDelete)} className="flex-1 py-4 rounded-full bg-red-500 text-white font-bold hover:bg-red-600">Yes, Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
