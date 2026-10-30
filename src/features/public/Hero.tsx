import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { dateLabel, events, ldks } from '../../data/demo';
import CampusMarquee from './CampusMarquee';

export default function Hero() {
  const upcoming = events
    .filter(event => new Date(event.startsAt).getTime() >= Date.now())
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt));
  const spotlight = upcoming[0] ?? [...events].sort((a, b) => Date.parse(b.startsAt) - Date.parse(a.startsAt))[0];

  return <>
    <section className="hero-surface dark-surface bg-[#0c1a2e] text-white" aria-labelledby="hero-title">
      <div className="page section-space grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div>
          
          <h1 id="hero-title" className="max-w-[820px] text-[clamp(2.25rem,3.7vw,4.5rem)] font-bold leading-[1.14] tracking-[-.025em] [text-wrap:balance]">
            Merajut Ukhuwah, Menggerakkan Peradaban <span className="text-sky-400">dari Kampus.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Wadah silaturahmi, kolaborasi strategis, dan pembinaan Lembaga Dakwah Kampus se-Bandung Raya.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn bg-sky-400 text-slate-950 hover:bg-sky-300" to="/about#jejaring">Kenali jejaring kami <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10" to="/contact">Bangun kolaborasi <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6 sm:gap-x-12">
            <div><dt className="text-xs text-slate-300">LDK dalam jejaring</dt><dd className="mt-2 text-3xl font-bold tracking-tight">{ldks.length}<span className="ml-2 text-xs font-medium tracking-normal text-slate-300">kampus</span></dd></div>
            <div><dt className="text-xs text-slate-300">Agenda mendatang</dt><dd className="mt-2 text-3xl font-bold tracking-tight text-sky-400">{upcoming.length}<span className="ml-2 text-xs font-medium tracking-normal text-slate-300">kegiatan</span></dd></div>
          </dl>
        </div>

        <div className="min-w-0">
          <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <img src="/images/fsldk-pengurus.jpeg" width="1488" height="992" fetchPriority="high" decoding="async" alt="Foto bersama pengurus dari arsip situs FSLDK Bandung Raya" className="block aspect-[3/2] w-full object-cover" />
            
            
            {spotlight && <article className="border-t border-white/10 bg-white/5 p-5 sm:p-6" aria-labelledby="spotlight-title">
              <div className="flex items-start gap-4">
                <time dateTime={spotlight.startsAt} className="grid min-w-16 shrink-0 gap-1 rounded-lg bg-white/10 px-3 py-3 text-center"><span className="text-2xl font-semibold leading-none">{dateLabel(spotlight.startsAt, { day: '2-digit' })}</span><span className="text-xs text-sky-200">{dateLabel(spotlight.startsAt, { month: 'short' })}</span></time>
                <div className="min-w-0"><p className="text-xs text-sky-300">{upcoming.length ? 'Agenda terdekat' : 'Arsip agenda'} · {spotlight.category}</p><h2 id="spotlight-title" className="mt-1.5 text-lg font-semibold leading-7">{spotlight.title}</h2></div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2"><p className="flex items-center gap-2 text-xs leading-6 text-slate-300"><MapPin size={15} className="shrink-0" aria-hidden="true" />{spotlight.location}</p><Link className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white" to={`/e/${spotlight.slug}`}>{upcoming.length ? 'Ikuti agenda' : 'Lihat agenda'}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
            </article>}
          </div>
          <p className="mt-3 text-right text-xs text-slate-400">Foto arsip pengurus · <a className="underline underline-offset-2 hover:text-white" href="https://fsldk-baraya.my.id/" target="_blank" rel="noopener noreferrer">FSLDK Baraya</a></p>
        </div>
      </div>
    </section>
    <CampusMarquee />
  </>;
}
