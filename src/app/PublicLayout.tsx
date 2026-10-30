import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NavLink, Link, Outlet, useLocation } from 'react-router';
import { contactInfo } from '../data/demo';

const navigation = [['/', 'Beranda'], ['/about', 'Tentang kami'], ['/events', 'Agenda'], ['/issues', 'Isu & opini'], ['/contact', 'Kontak']];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="FSLDK Bandung Raya beranda">
      <img
        src="/images/logo-circle.png"
        alt="Logo FSLDK Bandung Raya"
        width="42"
        height="42"
        className="size-10.5 shrink-0 rounded-full object-contain"
      />
      <span className={`text-xl font-extrabold tracking-tight ${inverse ? 'text-white' : 'text-brand'}`}>
        FSLDK<span className={`ml-0.5 ${inverse ? 'text-sky-400' : 'text-royal'}`}>.</span>
        <span className={`mt-0.5 block text-[10px] font-semibold uppercase tracking-[.16em] ${inverse ? 'text-slate-300' : 'text-muted'}`}>
          Bandung Raya
        </span>
      </span>
    </Link>
  );
}

export default function PublicLayout() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const dark = pathname === '/';
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  useEffect(() => {
    setOpen(false);
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return <>
    <a href="#main" className="skip-link">Langsung ke konten</a>
    <header id="site-header" className={`relative z-30 border-b ${dark ? 'dark-surface border-white/10 bg-[#0c1a2e] text-white' : 'border-line bg-white'}`}>
      <div className="page flex h-20 items-center justify-between gap-6">
        <Brand inverse={dark} />
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {navigation.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${dark ? `hover:text-sky-300 ${isActive ? 'font-semibold text-sky-300' : 'text-slate-300'}` : isActive ? 'font-semibold text-royal' : 'text-muted'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className={`btn ml-auto hidden sm:flex lg:ml-0 ${dark ? 'border border-white/20 bg-white/5 text-white hover:bg-white/10' : 'btn-outline'}`} to="/dashboard">
          Portal LDK <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button ref={menuButton} className="grid size-11 place-items-center lg:hidden" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Navigasi seluler" className={`page grid border-t pb-5 lg:hidden ${dark ? 'border-white/10' : 'border-line'}`}>
          {[...navigation, ['/dashboard', 'Portal LDK']].map(([to, label]) => (
            <NavLink onClick={() => setOpen(false)} className={`flex min-h-12 items-center border-b text-sm ${dark ? 'border-white/10 text-slate-200 hover:text-sky-300' : 'border-line'}`} to={to} key={to}>
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
    <main id="main" tabIndex={-1}><Outlet /></main>
    <footer className="dark-surface bg-[#0c1a2e] text-white">
      <div className="page">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-white/10 py-10 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr] lg:gap-10 lg:py-12">
          <div className="col-span-2 lg:col-span-1">
            <Brand inverse />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Pusat Komunikasi Daerah Forum Silaturahim Lembaga Dakwah Kampus se-Bandung Raya. Merawat harmoni dakwah kampus menuju Indonesia Emas 2045.
            </p>
            <p className="mt-4 text-xs leading-6 text-slate-400">{contactInfo.address}</p>
          </div>
          <nav aria-label="Footer organisasi">
            <h2 className="mb-4 text-sm font-semibold text-white">Organisasi</h2>
            <Link className="footer-link" to="/about">Tentang FSLDK Baraya</Link>
            <Link className="footer-link" to="/about#jejaring">43 LDK Tergabung</Link>
            <Link className="footer-link" to="/#komisi">Struktur Komisi</Link>
            <Link className="footer-link" to="/contact">Hubungi Narahubung</Link>
          </nav>
          <nav aria-label="Footer jelajahi">
            <h2 className="mb-4 text-sm font-semibold text-white">Program & Media</h2>
            <Link className="footer-link" to="/events">Agenda Kegiatan</Link>
            <Link className="footer-link" to="/issues">Isu Keumatan & Opini</Link>
            <Link className="footer-link" to="/#dokumentasi">Galeri Dokumentasi</Link>
            <a className="footer-link" href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">Instagram @fsldkbaraya</a>
            <a className="footer-link" href={contactInfo.twitter} target="_blank" rel="noopener noreferrer">X / Twitter @fsldkbaraya</a>
          </nav>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="mb-4 text-sm font-semibold text-white">Sekretariat & Kontak</h2>
            <p className="text-sm leading-7 text-slate-300">{contactInfo.pic}</p>
            <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-xs text-sky-300 hover:underline">{contactInfo.email}</a>
            <Link to="/dashboard" className="btn mt-5 w-full justify-between border border-white/20 text-white hover:bg-white/10">
              Portal Monitoring LDK <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Puskomda FSLDK Bandung Raya. Hak cipta dilindungi.</p>
          <p className="max-w-lg leading-6">Kolaborasi 43 Lembaga Dakwah Kampus se-Bandung Raya · Jawa Barat</p>
          <a href="#site-header" className="inline-flex min-h-11 items-center gap-2 text-slate-200 hover:text-sky-300">
            Kembali ke atas <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  </>;
}
