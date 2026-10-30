import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { dateLabel, ldks } from '../../data/demo';
import type { Event } from '../../data/demo';

export default function AgendaCard({ event }: { event: Event }) {
  const host = ldks.find(ldk => ldk.id === event.host);
  return <article className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_6px_24px_rgba(15,43,72,0.04)]">
    <div className="flex items-start justify-between gap-4">
      <time dateTime={event.startsAt} className="grid min-w-17 gap-1 rounded-lg bg-brand-soft px-3 py-3 text-center text-brand">
        <span className="text-2xl font-bold leading-none tracking-tight">{dateLabel(event.startsAt, { day: '2-digit' })}</span>
        <span className="text-xs font-semibold uppercase tracking-wide">{dateLabel(event.startsAt, { month: 'short', year: 'numeric' })}</span>
      </time>
      <span className="rounded-md border border-line px-2.5 py-1.5 text-xs font-medium text-royal">{event.category}</span>
    </div>
    <p className="mt-6 text-xs font-medium text-muted">{host?.name ?? 'Jejaring FSLDK'}</p>
    <h3 className="mb-5 mt-2 text-xl font-semibold leading-7 tracking-tight"><Link className="hover:text-royal" to={`/e/${event.slug}`}>{event.title}</Link></h3>
    <p className="mt-auto flex gap-2 text-xs leading-6 text-muted"><MapPin size={15} className="mt-1 shrink-0 text-royal" aria-hidden="true" />{event.location}</p>
    <Link className="mt-5 flex min-h-11 items-center justify-between border-t border-line pt-4 text-xs font-semibold text-royal" to={`/e/${event.slug}`}>Lihat agenda <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
  </article>;
}
