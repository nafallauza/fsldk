import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { LayoutDashboard, CalendarDays, Building2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Brand } from '../../app/PublicLayout';
import type { Role, Activity } from './model';
import { visibleActivities } from './model';

const initial: Activity[] = [
  { id: 'a1', ldkId: 'itb', title: 'Kajian pekanan mahasiswa', date: '2026-10-24', status: 'Selesai', report: 'Diskusi dan refleksi bersama mahasiswa lintas jurusan.', documentation: '' },
  { id: 'a2', ldkId: 'unpad', title: 'Pelatihan fasilitator mentoring', date: '2026-11-07', status: 'Direncanakan', report: '', documentation: '' },
  { id: 'a3', ldkId: 'upi', title: 'Pendampingan kader baru', date: '2026-10-30', status: 'Berjalan', report: '', documentation: '' },
];
type DemoState = { role: Role; activities: Activity[]; save: (activity: Activity) => void };
const DemoContext = createContext<DemoState | null>(null);
export function useDemo() {
  const value = useContext(DemoContext);
  if (!value) throw new Error('Dashboard harus berada di dalam DemoContext');
  return value;
}
export function Panel({ children }: { children: ReactNode }) {
  return <section className="min-w-0 rounded-2xl border border-line bg-white p-5 sm:p-7">{children}</section>;
}
export default function DashboardLayout() {
  const [role, setRole] = useState<Role>('admin');
  const [activities, setActivities] = useState(initial);
  function save(activity: Activity) {
    // Simulasi pembatasan UI saja. Otorisasi sebenarnya wajib dilakukan di API.
    if (role === 'ldk' && activity.ldkId !== 'itb') return;
    setActivities(current => current.some(a => a.id === activity.id) ? current.map(a => a.id === activity.id ? activity : a) : [...current, activity]);
  }
  return <DemoContext.Provider value={{ role, activities: visibleActivities(activities, role, 'itb'), save }}><a href="#dashboard-main" className="skip-link">Langsung ke dashboard</a><div className="min-h-screen bg-surface lg:grid lg:grid-cols-[245px_1fr]">
    <aside className="border-b border-line bg-white p-4 lg:border-r lg:p-5"><Brand /><nav className="mt-5 grid grid-cols-3 gap-2 lg:mt-7 lg:grid-cols-1" aria-label="Navigasi dashboard">{[[LayoutDashboard, '/dashboard', 'Ringkasan'], [CalendarDays, '/dashboard/activities', 'Kegiatan'], [Building2, '/dashboard/ldks', 'Database LDK']].map(([Icon, to, label]) => { const I = Icon as typeof LayoutDashboard; return <NavLink end to={to as string} key={to as string} className={({ isActive }) => `flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs lg:flex-row lg:justify-start lg:gap-3 lg:px-3 lg:text-sm ${isActive ? 'bg-brand-soft font-semibold text-brand' : 'text-muted hover:bg-surface'}`}><I size={19} />{label as string}</NavLink>; })}</nav><Link to="/" className="text-link mt-3 text-xs lg:mt-8">Lihat portal publik <ArrowUpRight size={15} /></Link><p className="mt-8 hidden text-xs leading-6 text-muted lg:block">Lingkungan demonstrasi.<br />Data hilang saat halaman dimuat ulang.</p></aside>
    <div className="min-w-0"><header className="flex flex-wrap items-center justify-between gap-4 border-b border-line bg-white px-6 py-5 sm:px-9"><div><p className="text-xs text-muted">Portal monitoring FSLDK</p><p className="mt-1 text-sm font-semibold">{role === 'admin' ? 'Admin Pusat · semua kampus' : 'Pengurus LDK · Gamais ITB'}</p></div><label className="flex flex-wrap items-center gap-2 text-sm text-muted"><ShieldCheck size={18} />Simulasi peran<select className="input !mt-0 !w-auto !py-2" value={role} onChange={e => setRole(e.target.value as Role)}><option value="admin">Admin Pusat</option><option value="ldk">Pengurus LDK</option></select></label></header><div className="border-b border-[#e6d9b8] bg-[#faf6e9] px-6 py-3 text-xs leading-6 text-[#725c28]">Mode demo: tanpa login dan autentikasi server. Pergantian peran hanya memperagakan tampilan dan cakupan data.</div><main id="dashboard-main" tabIndex={-1} className="p-5 sm:p-9"><Outlet /></main></div>
  </div></DemoContext.Provider>;
}
