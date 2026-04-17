'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import { 
  TrendingUp, Eye, Rocket, Activity, RefreshCw, Image as ImageIcon, Cpu
} from 'lucide-react';

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [range, setRange] = useState<'1d'|'7d'|'30d'>('7d');

  const fetchStats = useCallback(async (showSpinner = true) => {
    if (showSpinner) setRefreshing(true);
    try {
      const res = await fetch(`/api/admin/stats?range=${range}`);
      const d = await res.json();
      setData(d);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [range]);

  useEffect(() => { fetchStats(false); }, [fetchStats]);

  if (loading) return (
    <div className="flex h-screen items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full" />
    </div>
  );

  const quickActions = [
    { icon: <Rocket size={18} />, label: 'Add New Course', href: '/admin/courses/new', color: 'bg-primary' },
    { icon: <Cpu size={18} />, label: 'Add New Product', href: '/admin/software', color: 'bg-cta' },
    { icon: <ImageIcon size={18} />, label: 'Update Site Images', href: '/admin/settings/images', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading mb-1">System <span className="text-primary italic">Overview</span></h1>
          <p className="text-slate-500 text-sm">Welcome back, hgadmin. Live data from your MongoDB.</p>
        </div>
        <div className="flex gap-3 items-center">
          {/* Range Selector */}
          <div className="flex bg-slate-100 rounded-2xl p-1">
            {(['1d','7d','30d'] as const).map(r => (
              <button key={r} onClick={() => setRange(r)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${range === r ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
                {r === '1d' ? 'Today' : r === '7d' ? '7 Days' : '30 Days'}
              </button>
            ))}
          </div>
          <button onClick={() => fetchStats()} disabled={refreshing}
            className="p-3 bg-white rounded-2xl border border-slate-200 text-slate-400 hover:text-primary hover:border-primary/20 transition-all disabled:opacity-50">
            <RefreshCw size={18} className={refreshing ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Today's Visits" value={data?.stats?.today ?? 0} sub="Last 24 hours" icon={<Eye className="text-blue-500" />} color="blue" />
        <StatCard title="Weekly Traffic" value={data?.stats?.week ?? 0} sub="Last 7 days" icon={<TrendingUp className="text-emerald-500" />} color="emerald" />
        <StatCard title="Monthly Traffic" value={data?.stats?.month ?? 0} sub="Last 30 days" icon={<Activity className="text-purple-500" />} color="purple" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Traffic Activity</h3>
            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-xl">{range === '1d' ? 'Hourly' : 'Daily'} breakdown</span>
          </div>
          {data?.graphData?.length > 0 ? (
            <div className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.graphData}>
                  <defs>
                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', fontSize: '13px'}} />
                  <Area type="monotone" dataKey="visits" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" animationDuration={1500} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-[360px] flex items-center justify-center text-slate-400 flex-col gap-3">
              <Activity size={40} className="opacity-20" />
              <p className="font-medium">No visit data for this period yet.</p>
            </div>
          )}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
            <div className="space-y-3 relative z-10">
              {quickActions.map(a => (
                <Link key={a.href} href={a.href}
                  className="flex items-center gap-4 w-full p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-sm font-bold border border-white/5">
                  <div className={`w-8 h-8 rounded-lg ${a.color} flex items-center justify-center flex-shrink-0`}>{a.icon}</div>
                  {a.label}
                </Link>
              ))}
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Top Pages */}
          {data?.topPages && data.topPages.length > 0 && (
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold mb-5">Top Pages</h3>
              <div className="space-y-3">
                {data.topPages.slice(0, 5).map((p: any, i: number) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium truncate max-w-[140px]">{p._id || '/'}</span>
                    <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{p.count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, sub, icon, color }: { title: string; value: number; sub: string; icon: React.ReactNode; color: string }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-2xl bg-${color}-500/10 group-hover:scale-110 transition-transform`}>{icon}</div>
      </div>
      <div className="text-3xl font-bold mb-1 tracking-tight">{value.toLocaleString()}</div>
      <div className="text-sm font-bold text-slate-700">{title}</div>
      <div className="text-xs text-slate-400 font-medium mt-1">{sub}</div>
    </div>
  );
}
