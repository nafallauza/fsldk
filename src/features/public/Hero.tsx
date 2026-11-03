import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { dateLabel, events, orgStats } from '../../data/demo';
import CampusMarquee from './CampusMarquee';

export default function Hero() {
  const upcoming = events
    .filter(event => new Date(event.startsAt).getTime() >= Date.now())
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt));
  const spotlight = upcoming[0] ?? [...events].sort((a, b) => Date.parse(b.startsAt) - Date.parse(a.startsAt))[0];

  return <>
    <section className="hero-surface dark-surface bg-[#061a12] text-white" aria-labelledby="hero-title">
      <div className="page section-space grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
            PUSKOMDA FSLDK YOGYAKARTA
          </p>
          <h1 id="hero-title" className="max-w-[820px] text-[clamp(2.25rem,3.6vw,4.25rem)] font-bold leading-[1.12] tracking-[-.025em] [text-wrap:balance]">
            Merajut Ukhuwah, Menggerakkan Peradaban <span className="text-emerald-400">dari Kampus.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-100/80 sm:text-lg">
            Forum koordinasi Lembaga Dakwah Kampus se-Daerah Istimewa Yogyakarta sebagai sarana terciptanya dakwah kampus yang harmoni menuju Indonesia Emas 2045 serta menjaga semangat kebangsaan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn bg-[#0a9346] text-white hover:bg-[#077035]" to="/about#jejaring">
              Jelajahi 43 LDK <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link className="btn border border-emerald-500/30 bg-emerald-950/30 text-white hover:bg-emerald-900/40" to="/contact">
              Hubungi Narahubung <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-emerald-500/20 pt-6 sm:gap-8">
            <div>
              <dt className="text-xs text-emerald-200/70">LDK Tergabung</dt>
              <dd className="mt-1.5 text-3xl font-bold tracking-tight text-white">{orgStats.ldkCount}<span className="ml-1.5 text-xs font-medium text-emerald-200/70">kampus</span></dd>
            </div>
            <div>
              <dt className="text-xs text-emerald-200/70">Komisi Kerja</dt>
              <dd className="mt-1.5 text-3xl font-bold tracking-tight text-emerald-400">{orgStats.commissions}<span className="ml-1.5 text-xs font-medium text-emerald-200/70">komisi</span></dd>
            </div>
            <div>
              <dt className="text-xs text-emerald-200/70">Pengurus Aktif</dt>
              <dd className="mt-1.5 text-3xl font-bold tracking-tight text-white">{orgStats.activeManagers}<span className="ml-1.5 text-xs font-medium text-emerald-200/70">orang</span></dd>
            </div>
          </dl>
        </div>

        <div className="min-w-0">
          <div className="relative isolate overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#04160e] shadow-2xl">
            <img
              src="/images/template-dokumentasi.svg"
              width="1200"
              height="800"
              fetchPriority="high"
              decoding="async"
              alt="Template Dokumentasi Foto Kegiatan FSLDK D.I. Yogyakarta"
              className="block aspect-[3/2] w-full object-cover"
            />
            {spotlight && (
              <article className="border-t border-emerald-500/20 bg-[#072417] p-5 sm:p-6" aria-labelledby="spotlight-title">
                <div className="flex items-start gap-4">
                  <time dateTime={spotlight.startsAt} className="grid min-w-16 shrink-0 gap-1 rounded-xl border border-emerald-500/30 bg-[#04160e] px-3 py-3 text-center">
                    <span className="text-2xl font-semibold leading-none text-white">{dateLabel(spotlight.startsAt, { day: '2-digit' })}</span>
                    <span className="text-xs font-medium text-emerald-300">{dateLabel(spotlight.startsAt, { month: 'short' })}</span>
                  </time>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-emerald-400">{upcoming.length ? 'Agenda Terdekat' : 'Sorotan Kegiatan'} · {spotlight.category}</p>
                    <h2 id="spotlight-title" className="mt-1.5 text-lg font-semibold leading-7 text-white">{spotlight.title}</h2>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
                  <p className="flex items-center gap-2 text-xs leading-6 text-emerald-100/75">
                    <MapPin size={15} className="shrink-0 text-emerald-400" aria-hidden="true" />{spotlight.location}
                  </p>
                  <Link className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white" to={`/e/${spotlight.slug}`}>
                    Detail agenda <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )}
          </div>
          <p className="mt-3 text-right text-xs font-medium text-emerald-400/60">
            Slot Template Foto Kegiatan · Siap Diganti Dokumentasi Resmi
          </p>
        </div>
      </div>
    </section>
    <CampusMarquee />
  </>;
}
