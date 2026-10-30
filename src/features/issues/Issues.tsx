import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { issues, dateLabel } from '../../data/demo';

export default function Issues() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Semua');
  const filtered = issues.filter(issue => (category === 'Semua' || issue.category === category) && `${issue.title} ${issue.excerpt}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="page section-space">
    <div className="grid gap-6 border-b border-line pb-9 lg:grid-cols-2 lg:items-end"><div><h1 className="page-title">Isu & opini</h1><p className="intro">Kajian strategis dan perspektif mahasiswa tentang kampus, masyarakat, dan peran kita di dalamnya.</p></div><label className="block lg:ml-auto lg:w-full lg:max-w-md">Cari tulisan<input type="search" className="input" placeholder="Judul atau topik…" value={query} onChange={e => setQuery(e.target.value)} /></label></div>
    <div className="my-7 flex flex-wrap gap-2" role="group" aria-label="Kategori tulisan">{['Semua', ...new Set(issues.map(i => i.category))].map(c => <button key={c} className="filter" aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div>
    <div className="grid gap-6 lg:grid-cols-2">{filtered.map(i => <article className="flex flex-col rounded-2xl border border-line bg-white p-6 sm:p-9" key={i.slug}><p className="text-sm text-muted">{i.category} · {dateLabel(i.date)}</p><h2 className="my-5 max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"><Link className="hover:text-royal" to={`/i/${i.slug}`}>{i.title}</Link></h2><p className="mb-6 max-w-xl text-base leading-8 text-muted">{i.excerpt}</p><Link className="text-link mt-auto self-start" to={`/i/${i.slug}`}>Baca tulisan <ArrowUpRight size={17} /></Link></article>)}</div>
    {!filtered.length && <div role="status" className="rounded-xl border border-line bg-white p-8"><h2 className="font-semibold">Tulisan belum ditemukan</h2><p className="mt-2 text-sm text-muted">Gunakan kata kunci lain atau pilih semua kategori.</p><button className="btn btn-outline mt-4" onClick={() => { setQuery(''); setCategory('Semua'); }}>Reset pencarian</button></div>}
  </section>;
}
export function IssueDetail() {
  const { slug } = useParams();
  const issue = issues.find(i => i.slug === slug);
  if (!issue) return <section className="page py-16"><h1 className="page-title">Tulisan tidak ditemukan.</h1><Link to="/issues" className="text-link">Kembali ke tulisan</Link></section>;
  return <article className="page max-w-3xl section-space"><Link className="text-link" to="/issues"><ArrowLeft size={16} /> Semua tulisan</Link><p className="eyebrow mt-10">{issue.category} · {dateLabel(issue.date)}</p><h1 className="page-title">{issue.title}</h1><p className="intro border-b border-line pb-8">{issue.excerpt}</p><p className="my-6 text-xs text-muted">Redaksi demo FSLDK · Naskah ilustrasi</p><div className="space-y-6 text-[18px] leading-9 text-slate-700">{issue.body.map(p => <p key={p}>{p}</p>)}</div><div className="mt-12 border-t border-line pt-6"><Link className="text-link" to="/issues">Jelajahi tulisan lainnya <ArrowUpRight size={17} /></Link></div></article>;
}
