import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { CalendarDays, List, MapPin, ArrowLeft } from 'lucide-react';
import { events, dateLabel } from '../../data/demo';
import AgendaCard from './AgendaCard';
import Modal from '../../components/ui/Modal';

export default function Events() {
  const [category, setCategory] = useState('Semua');
  const [view, setView] = useState('cards');
  const months = [...new Set(events.map(event => event.startsAt.slice(0, 7)))].sort();
  const [month, setMonth] = useState(months[0] ?? new Date().toISOString().slice(0, 7));
  const [query, setQuery] = useState('');
  const filtered = events.filter(e => (category === 'Semua' || e.category === category) && `${e.title} ${e.location}`.toLowerCase().includes(query.trim().toLowerCase()));
  const monthly = filtered.filter(e => e.startsAt.startsWith(month));
  const [year, monthNumber] = month.split('-').map(Number);
  const firstDay = (new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay() + 6) % 7;
  const days = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  return <section className="page section-space"><h1 className="page-title">Agenda kegiatan</h1><p className="intro">Kajian, pelatihan, dan pertemuan yang menghubungkan langkah kita. Seluruh agenda merupakan contoh.</p>
    <label className="mt-8 block max-w-xl">Cari agenda atau lokasi<input className="input" type="search" placeholder="Nama kegiatan atau kampus…" value={query} onChange={e => setQuery(e.target.value)} /></label>
    <div className="my-8 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">{['Semua', 'Kajian', 'Training', 'Musda'].map(c => <button key={c} aria-pressed={category === c} className={`filter ${category === c ? 'selected' : ''}`} onClick={() => setCategory(c)}>{c}</button>)}</div><div className="flex gap-2" role="group" aria-label="Tampilan agenda"><button className="filter" aria-pressed={view === 'cards'} aria-label="Tampilan kartu" onClick={() => setView('cards')}><List size={18} /></button><button className="filter" aria-pressed={view === 'calendar'} aria-label="Tampilan kalender" onClick={() => setView('calendar')}><CalendarDays size={18} /></button></div></div>
    {!filtered.length && <div role="status" className="mb-6 rounded-xl border border-line bg-white p-8"><h2 className="font-semibold">Agenda belum ditemukan</h2><p className="mt-2 text-sm text-muted">Coba kata kunci lain atau tampilkan semua kategori.</p><button className="btn btn-outline mt-4" onClick={() => { setQuery(''); setCategory('Semua'); }}>Reset pencarian</button></div>}
    {view === 'cards' ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(e => <AgendaCard key={e.id} event={e} />)}</div> : <><label className="mb-5 block max-w-xs text-sm font-semibold">Bulan agenda<select className="input mt-2" value={month} onChange={e => setMonth(e.target.value)}>{months.map(value => <option key={value} value={value}>{dateLabel(`${value}-01T00:00:00+07:00`, { month: 'long', year: 'numeric' })}</option>)}</select></label><div className="grid gap-4 md:hidden">{monthly.map(event => <AgendaCard key={event.id} event={event} />)}</div>{!monthly.length && <p role="status" className="my-6 rounded-xl border border-line bg-white p-6 text-sm text-muted">Tidak ada agenda yang cocok pada bulan ini.</p>}<div className="hidden overflow-x-auto rounded-xl border border-line md:block"><div className="grid min-w-[680px] grid-cols-7">{['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(d => <div className="border-b border-line bg-surface p-3 text-xs font-bold" key={d}>{d}</div>)}{Array.from({ length: firstDay }, (_, i) => <div key={`blank-${i}`} className="border-b border-r border-line bg-surface" />)}{Array.from({ length: days }, (_, i) => <div key={i} className="min-h-28 border-b border-r border-line p-2 text-xs"><span className="text-muted">{i + 1}</span>{monthly.filter(e => Number(e.startsAt.slice(8, 10)) === i + 1).map(e => <Link className="mt-2 block rounded bg-brand-soft p-2 font-medium leading-5 text-brand" key={e.id} to={`/e/${e.slug}`}>{e.title}</Link>)}</div>)}</div></div><p className="mt-3 text-xs text-muted">Tanggal dan waktu agenda ditampilkan dalam WIB.</p></>}
  </section>;
}
export function EventDetail() {
  const { slug } = useParams();
  const event = events.find(e => e.slug === slug);
  const [submitted, setSubmitted] = useState(false);
  if (!event) return <section className="page py-16"><h1 className="page-title">Agenda tidak ditemukan.</h1><Link className="text-link" to="/events">Kembali ke agenda</Link></section>;
  return <article className="page max-w-3xl section-space"><Link className="text-link" to="/events"><ArrowLeft size={16} /> Semua agenda</Link><p className="eyebrow mt-10">{event.category} · Agenda demo</p><h1 className="page-title">{event.title}</h1><div className="my-7 grid gap-4 rounded-2xl border border-line bg-white p-6 text-base"><p className="flex items-center gap-3"><CalendarDays size={18} />{dateLabel(event.startsAt, { dateStyle: 'full', timeStyle: 'short' })} WIB</p><p className="flex items-center gap-3"><MapPin size={18} />{event.location}</p></div><p className="mb-8 leading-8 text-muted">{event.summary}</p>
    <Modal title="Registrasi agenda" description="Simulasi formulir. Data tidak dikirim atau disimpan; belum ada pendaftaran resmi." trigger={<button className="btn btn-primary" onClick={() => setSubmitted(false)}>Coba registrasi</button>}>
      {submitted ? <p role="status" className="rounded-lg bg-brand-soft p-5 text-sm leading-7 text-brand">Simulasi berhasil. Anda belum terdaftar pada acara resmi; tidak ada data yang dikirim.</p> : <form className="grid gap-4" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}><label>Nama lengkap<input className="input" name="name" required autoComplete="name" maxLength={120} /></label><label>Email<input className="input" type="email" name="email" required autoComplete="email" maxLength={254} /></label><label>Asal kampus<input className="input" name="campus" required maxLength={160} /></label><button className="btn btn-primary">Simulasikan pendaftaran</button></form>}
    </Modal>
  </article>;
}
