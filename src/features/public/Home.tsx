import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import Hero from './Hero';
import Gallery from './Gallery';
import PortalUpdates from './PortalUpdates';
import AgendaCard from '../events/AgendaCard';
import IssueSection from '../issues/IssueSection';
import { events } from '../../data/demo';

export default function Home() {
  return <><Hero /><section className="page section-space"><div className="section-heading"><div><h2>Agenda dakwah kampus.</h2></div><Link className="text-link" to="/events">Semua agenda <ArrowRight size={17} /></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{events.map(event => <AgendaCard key={event.id} event={event} />)}</div></section><IssueSection /><Gallery /><PortalUpdates /><section className="page pb-10 lg:pb-16"><div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-brand px-7 py-10 text-white sm:flex-row sm:items-center sm:px-10"><div><h2 className="text-3xl font-semibold tracking-tight">Kebaikan tumbuh saat kita terhubung.</h2><p className="mt-3 text-sm text-white/80">Mulai percakapan, temukan irisan, bergerak bersama.</p></div><Link to="/contact" className="btn shrink-0 bg-white text-brand hover:bg-slate-100">Mari berkolaborasi <ArrowUpRight size={17} /></Link></div></section></>;
}
