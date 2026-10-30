import { useState } from 'react';
import { Link } from 'react-router';
import { Plus, ArrowUpRight } from 'lucide-react';
import { ldks, dateLabel } from '../../data/demo';
import { Panel, useDemo } from './DashboardLayout';
import Modal from '../../components/ui/Modal';
import type { Activity, Status } from './model';
import { validateActivity } from './model';

function ActivityTable({ activities, editable = false }: { activities: Activity[]; editable?: boolean }) {
  return <div className="overflow-x-auto"><table className="responsive-table w-full text-left text-sm"><caption className="sr-only">Daftar monitoring kegiatan LDK</caption><thead className="border-b border-line bg-surface text-muted"><tr>{['Kegiatan / kampus', 'Tanggal', 'Status', 'Laporan'].map(h => <th key={h} className="px-4 py-4 font-medium">{h}</th>)}</tr></thead><tbody>{activities.map(a => <tr key={a.id} className="border-b border-line last:border-0">
    <td data-label="Kegiatan" className="px-4 py-5"><p className="font-semibold">{a.title}</p><p className="mt-2 text-sm text-muted">{ldks.find(l => l.id === a.ldkId)?.name}</p></td>
    <td data-label="Tanggal" className="px-4 py-5 text-muted">{dateLabel(a.date)}</td>
    <td data-label="Status" className="px-4 py-5"><span className={`inline-block rounded-md px-2.5 py-1.5 text-xs font-semibold ${a.status === 'Selesai' ? 'bg-positive-soft text-emerald-800' : 'bg-surface text-slate-600'}`}>{a.status}</span></td>
    <td data-label="Laporan" className="max-w-sm px-4 py-5 text-sm leading-7 text-muted">{a.report || 'Belum ada laporan'}{a.documentation && <a href={a.documentation} target="_blank" rel="noopener noreferrer" className="text-link mt-2">Dokumentasi <ArrowUpRight size={14} /></a>}{editable && <div className="mt-3"><Modal title="Perbarui kegiatan" description="Ubah status, isi laporan, dan tambahkan tautan dokumentasi." trigger={<button className="filter" aria-label={`Perbarui ${a.title}`}>Perbarui</button>}><ActivityForm activity={a} /></Modal></div>}</td>
  </tr>)}</tbody></table>{!activities.length && <p role="status" className="py-10 text-center text-sm text-muted">Belum ada kegiatan untuk filter ini.</p>}</div>;
}
export default function Dashboard() {
  const { role, activities } = useDemo();
  const scope = role === 'admin' ? ldks : ldks.filter(l => l.id === 'itb');
  const completed = activities.filter(a => a.status === 'Selesai').length;
  return <><h1 className="mt-3 text-3xl font-semibold tracking-tight">Ringkasan monitoring</h1><p className="mt-3 text-sm text-muted">Ringkasan data demo {role === 'admin' ? 'seluruh jejaring' : 'LDK Gamais ITB'}.</p><div className="my-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[['LDK aktif', scope.filter(l => l.active).length], ['Kader terdata', scope.reduce((sum, l) => sum + l.members, 0)], ['Total kegiatan', activities.length], ['Laporan selesai', completed]].map(([label, value]) => <Panel key={label}><p className="text-xs text-muted">{label}</p><p className="mt-4 text-3xl font-semibold tracking-tight">{value}</p></Panel>)}</div><div className="grid gap-5 xl:grid-cols-[1fr_280px]"><Panel><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-semibold">Aktivitas jejaring</h2><Link className="text-link text-xs" to="/dashboard/activities">Kelola kegiatan <ArrowUpRight size={16} /></Link></div><ActivityTable activities={activities} /></Panel><Panel><h2 className="font-semibold">Kelengkapan laporan</h2><p className="my-6 text-5xl font-semibold tracking-tight text-brand">{activities.length ? Math.round(completed / activities.length * 100) : 0}<span className="text-xl">%</span></p><p className="text-sm leading-7 text-muted">{completed} dari {activities.length} kegiatan telah selesai dan memiliki ringkasan laporan.</p><div className="mt-8 border-t border-line pt-5 text-xs leading-6 text-muted">Lengkapi status kegiatan agar rekap jejaring mencerminkan perkembangan terbaru.</div></Panel></div></>;
}
function ActivityForm({ activity }: { activity?: Activity }) {
  const { role, save } = useDemo();
  const [recordId] = useState(() => activity?.id ?? crypto.randomUUID());
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  return <form className="grid gap-4" onSubmit={e => {
    e.preventDefault(); const data = new FormData(e.currentTarget);
    const next: Activity = { id: recordId, ldkId: role === 'ldk' ? 'itb' : String(data.get('ldkId')), title: String(data.get('title')).trim(), date: String(data.get('date')), status: String(data.get('status')) as Status, report: String(data.get('report')).trim(), documentation: String(data.get('documentation')).trim() };
    const validation = validateActivity(next); if (validation) { setError(validation); setMessage(''); return; }
    save(next); setError(''); setMessage('Tersimpan di sesi demo. Data akan hilang jika halaman dimuat ulang.');
  }}><label>Kegiatan<input className="input" name="title" defaultValue={activity?.title} required maxLength={160} /></label><label>LDK kampus<select className="input" name="ldkId" defaultValue={activity?.ldkId ?? 'itb'} disabled={role === 'ldk'}>{ldks.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}</select></label><div className="grid gap-4 sm:grid-cols-2"><label>Tanggal<input className="input" type="date" name="date" required defaultValue={activity?.date} /></label><label>Status<select className="input" name="status" defaultValue={activity?.status ?? 'Direncanakan'}>{['Direncanakan', 'Berjalan', 'Selesai'].map(s => <option key={s}>{s}</option>)}</select></label></div><label>Ringkasan laporan<textarea className="input min-h-24" name="report" maxLength={3000} defaultValue={activity?.report} /><span className="text-xs font-normal text-muted">Wajib untuk status Selesai.</span></label><label>Tautan dokumentasi<input className="input" name="documentation" type="url" placeholder="https://…" defaultValue={activity?.documentation} maxLength={2048} /><span className="text-xs font-normal text-muted">Demo menggunakan tautan HTTPS; belum mendukung unggahan.</span></label>{error && <p role="alert" className="text-sm text-red-700">{error}</p>}{message && <p role="status" className="text-sm leading-6 text-brand">{message}</p>}<button className="btn btn-primary">Simpan kegiatan demo</button></form>;
}
export function Activities() {
  const { activities } = useDemo();
  const [status, setStatus] = useState('Semua');
  const [query, setQuery] = useState('');
  const filtered = activities.filter(a => (status === 'Semua' || a.status === status) && a.title.toLocaleLowerCase('id').includes(query.toLocaleLowerCase('id')));
  return <><div className="section-heading"><div><h1 className="mt-3 text-3xl font-semibold tracking-tight">Kegiatan kampus</h1></div><Modal title="Tambah kegiatan" description="Masukkan agenda dan perkembangan kegiatan LDK. Data hanya tersimpan di sesi ini." trigger={<button className="btn btn-primary"><Plus size={17} />Tambah kegiatan</button>}><ActivityForm /></Modal></div><Panel><div className="mb-5 flex flex-wrap gap-3"><label className="grow text-xs">Cari kegiatan<input className="input" type="search" placeholder="Nama kegiatan…" value={query} onChange={e => setQuery(e.target.value)} /></label><label className="text-xs">Filter status<select className="input" value={status} onChange={e => setStatus(e.target.value)}>{['Semua', 'Direncanakan', 'Berjalan', 'Selesai'].map(s => <option key={s}>{s}</option>)}</select></label></div><ActivityTable activities={filtered} editable /></Panel></>;
}
export function Directory() {
  const { role } = useDemo();
  const [query, setQuery] = useState('');
  const filtered = ldks.filter(l => (role === 'admin' || l.id === 'itb') && `${l.name} ${l.campus} ${l.city}`.toLowerCase().includes(query.toLowerCase()));
  return <><h1 className="my-4 text-3xl font-semibold tracking-tight">Database LDK</h1><p className="mb-7 text-sm text-muted">Direktori dan jumlah kader ilustrasi sesuai cakupan peran terpilih.</p><Panel><label className="mb-5 block max-w-lg text-sm">Cari LDK, kampus, atau kota<input className="input" type="search" value={query} onChange={e => setQuery(e.target.value)} /></label><div className="overflow-x-auto"><table className="responsive-table w-full text-left text-sm"><caption className="sr-only">Direktori LDK kampus demo</caption><thead className="border-b border-line text-xs text-muted"><tr>{['LDK / kampus', 'Kota', 'Kader', 'Keaktifan'].map(h => <th key={h} className="p-4 font-medium">{h}</th>)}</tr></thead><tbody>{filtered.map(l => <tr key={l.id} className="border-b border-line"><td data-label="LDK / kampus" className="p-4 font-semibold">{l.name}<p className="mt-1 text-xs font-normal text-muted">{l.campus}</p></td><td data-label="Kota" className="p-4">{l.city}</td><td data-label="Kader" className="p-4">{l.members}</td><td data-label="Keaktifan" className="p-4"><span className={l.active ? 'text-emerald-700' : 'text-muted'}>{l.active ? 'Aktif' : 'Perlu pembaruan'}</span></td></tr>)}</tbody></table>{!filtered.length && <p role="status" className="py-8 text-sm text-muted">Tidak ada LDK yang cocok.</p>}</div></Panel></>;
}
