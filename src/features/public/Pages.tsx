import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import Gallery from './Gallery';
import { contactInfo, ldks, orgStats } from '../../data/demo';

export function About() {
  return <>
    <section className="page section-space">
      <p className="eyebrow">Profil Organisasi</p>
      <h1 className="page-title mt-2">Tentang FSLDK Bandung Raya</h1>
      <p className="intro">
        FSLDK BARAYA (Forum Silaturahim Lembaga Dakwah Kampus) se-Bandung Raya merupakan forum koordinasi lembaga dakwah di kampus-kampus se-Bandung Raya sebagai sarana terciptanya dakwah kampus yang harmoni dalam mencapai Indonesia Emas 2045 serta menjaga semangat kebangsaan dari paham-paham radikalisme dan ekstremisme.
      </p>

      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white p-6">
          <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Jejaring Kampus</dt>
          <dd className="mt-2 text-4xl font-bold tracking-tight text-brand">{orgStats.ldkCount} <span className="text-base font-medium text-muted">LDK Tergabung</span></dd>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6">
          <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Struktur Kerja</dt>
          <dd className="mt-2 text-4xl font-bold tracking-tight text-royal">{orgStats.commissions} <span className="text-base font-medium text-muted">Komisi Fokus</span></dd>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6">
          <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Sumber Daya</dt>
          <dd className="mt-2 text-4xl font-bold tracking-tight text-brand">{orgStats.activeManagers} <span className="text-base font-medium text-muted">Pengurus Aktif</span></dd>
        </div>
      </dl>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-9">
          <h2 className="text-xl font-bold">Peran & Pembinaan Mahasiswa</h2>
          <p className="mt-4 text-sm leading-8 text-muted">
            FSLDK Bandung Raya menjadi wadah strategis untuk mengedukasi dan membina mahasiswa agar mampu menghadapi tantangan zaman seperti pergaulan bebas, penyalahgunaan obat-obatan terlarang, radikalisme, dan ekstremisme melalui pendekatan intelektual dan ukhuwah.
          </p>
        </div>
        <div className="rounded-2xl bg-brand p-6 text-white sm:p-9">
          <h2 className="text-xl font-bold">Pengawalan Isu Keumatan & Kebangsaan</h2>
          <p className="mt-4 text-base leading-8 text-slate-200">
            Menjawab tantangan globalisasi, modernisasi, dan perkembangan teknologi, serta mengawal isu-isu keumatan, kebangsaan, dan kemahasiswaan secara kolaboratif bersama seluruh LDK di Bandung Raya.
          </p>
        </div>
      </div>

      <div id="jejaring" className="mt-14 scroll-mt-8 border-t border-line pt-12">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Direktori Anggota</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Representasi dari 43 LDK se-Bandung Raya.</h2>
          </div>
          <Link to="/dashboard/ldks" className="text-link">Lihat di Portal LDK <ArrowUpRight size={17} /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {ldks.map(l => (
            <article className="rounded-xl border border-line bg-white p-6" key={l.id}>
              <span className="inline-block rounded bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand">{l.city}</span>
              <h3 className="mt-3 font-semibold">{l.name}</h3>
              <p className="mt-1 text-sm text-muted">{l.campus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <Gallery />
  </>;
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="page section-space">
      <p className="eyebrow">Saluran Resmi</p>
      <h1 className="page-title mt-2">Hubungi Puskomda FSLDK Baraya</h1>
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-14">
        <div className="space-y-6">
          <p className="intro !mt-0">
            Terbuka untuk pengajuan Media Partner, undangan delegasi kampus, diskusi isu keumatan, maupun kolaborasi kegiatan se-Bandung Raya.
          </p>

          <div className="grid gap-3">
            {contactInfo.contacts.map(c => (
              <a
                key={c.role}
                href={c.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-line bg-white p-5 transition-colors hover:border-royal"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-royal">{c.role}</p>
                  <p className="mt-1 font-semibold text-ink">{c.name} · <span className="font-normal text-muted">{c.phone}</span></p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-soft px-3 py-2 text-xs font-semibold text-brand">
                  <MessageCircle size={15} /> WhatsApp
                </span>
              </a>
            ))}
          </div>

          <div className="rounded-xl border border-line bg-white p-6 text-sm leading-7">
            <h2 className="font-bold text-ink">{contactInfo.pic}</h2>
            <p className="mt-3 flex items-start gap-2.5 text-muted">
              <MapPin size={18} className="mt-1 shrink-0 text-royal" />
              <span>{contactInfo.address}</span>
            </p>
            <p className="mt-3 flex items-center gap-2.5 text-muted">
              <Mail size={18} className="shrink-0 text-royal" />
              <a href={`mailto:${contactInfo.email}`} className="font-medium text-royal hover:underline">{contactInfo.email}</a>
            </p>
          </div>
        </div>

        <form
          className="grid gap-5 rounded-2xl border border-line bg-white p-6 sm:p-9"
          onSubmit={e => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div role="status">
              <h2 className="text-xl font-semibold text-brand">Pesan Anda telah dicatat.</h2>
              <p className="my-4 text-sm leading-7 text-muted">
                Terima kasih telah menghubungi Puskomda FSLDK Bandung Raya. Untuk respon cepat terkait Media Partner atau Humas, silakan hubungi narahubung WhatsApp di samping.
              </p>
              <button type="button" className="btn btn-outline" onClick={() => setSent(false)}>Kirim pesan lain</button>
            </div>
          ) : <>
            <h2 className="text-xl font-semibold">Kirim Pesan Langsung</h2>
            <p className="text-sm leading-6 text-muted">Lengkapi identitas dan keperluan kolaborasi atau aspirasi Anda.</p>
            <label>Nama Lengkap<input className="input" required name="name" maxLength={120} autoComplete="name" placeholder="Nama Anda / Perwakilan LDK" /></label>
            <label>Email atau Nomor WhatsApp<input className="input" required name="contact" maxLength={254} placeholder="email@kampus.ac.id / 08xx" /></label>
            <label>Keperluan<select className="input" name="topic"><option>Kerja Sama Media Partner</option><option>Undangan / Humas</option><option>Kajian & Isu Keumatan</option><option>Keanggotaan LDK</option></select></label>
            <label>Pesan<textarea className="input min-h-32" required name="message" maxLength={3000} placeholder="Tuliskan detail agenda atau pesan kolaborasi..." /></label>
            <button className="btn btn-primary">Kirim Pesan</button>
          </>}
        </form>
      </div>
    </section>
  );
}

export function NotFound() {
  return <section className="page py-20"><p className="text-4xl font-semibold text-muted">404</p><h1 className="page-title">Halaman belum tersedia.</h1><Link className="btn btn-primary mt-6" to="/">Kembali ke beranda</Link></section>;
}
