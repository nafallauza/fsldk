import { ArrowUpRight, Plus, Shield, Users, Megaphone, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

const commissions = [
  {
    code: 'Komisi A',
    title: 'Kelembagaan & Kaderisasi',
    desc: 'Membina kapasitas kepemimpinan, tata kelola organisasi, dan standarisasi pembinaan kader di 43 LDK se-Bandung Raya.',
    icon: Shield,
  },
  {
    code: 'Komisi B',
    title: 'Isu Keumatan & Kebangsaan',
    desc: 'Mengawal isu kemahasiswaan, keumatan, dan kebangsaan melalui kajian strategis serta menangkal paham radikalisme dan ekstremisme.',
    icon: BookOpen,
  },
  {
    code: 'Komisi C',
    title: 'Jaringan & Kemuslimahan',
    desc: 'Mempererat silaturahmi lintas almamater dan menggerakkan pembinaan serta ruang berkarya bagi mahasiswi muslimah.',
    icon: Users,
  },
  {
    code: 'Komisi D',
    title: 'Humas, Media & Syiar',
    desc: 'Mengelola komunikasi publik, kemitraan media partner, dokumentasi gerakan, serta syiar digital yang edukatif.',
    icon: Megaphone,
  },
];

export default function PortalUpdates() {
  return <>
    <section id="komisi" className="page section-space scroll-mt-8 border-t border-line">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Struktur Pergerakan</p>
          <h2 className="mt-2">Empat komisi yang menggerakkan kolaborasi.</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Puskomda FSLDK Bandung Raya bekerja melalui empat komisi fungsional yang didukung oleh 40 pengurus aktif dari berbagai perguruan tinggi.
          </p>
        </div>
        <Link to="/about" className="text-link">Profil lengkap organisasi <ArrowUpRight size={17} /></Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {commissions.map(({ code, title, desc, icon: Icon }) => (
          <article key={code} className="flex flex-col rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">{code}</span>
              <Icon size={20} strokeWidth={1.75} className="text-royal" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2.5 text-sm leading-7 text-muted">{desc}</p>
          </article>
        ))}
      </div>
    </section>

    <section id="bantuan" className="page section-space scroll-mt-8 grid gap-8 border-t border-line lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
      <div>
        <p className="eyebrow">Informasi & Panduan</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Pertanyaan umum seputar FSLDK Baraya.</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">
          Panduan singkat mengenai keanggotaan LDK, kolaborasi media partner, dan partisipasi agenda dakwah kampus.
        </p>
      </div>
      <div>
        {[
          [
            'Apa itu Puskomda FSLDK Bandung Raya?',
            <>FSLDK Bandung Raya (Baraya) adalah forum koordinasi yang menghimpun <strong>43 Lembaga Dakwah Kampus</strong> di wilayah Bandung Raya untuk merawat harmoni dakwah kampus, membina mahasiswa, dan berkontribusi menuju Indonesia Emas 2045.</>,
          ],
          [
            'Bagaimana cara mengajukan kerja sama Media Partner atau Humas?',
            <>Anda dapat menghubungi narahubung resmi Komisi D pada <Link className="underline text-royal font-medium" to="/contact">halaman Kontak</Link>: Teh Dini untuk Media Partner, Kang Fikri untuk Bidang Humas, atau Kang Uki untuk Bidang Isu.</>,
          ],
          [
            'Apakah mahasiswa umum dapat mengikuti agenda kajian dan pelatihan?',
            <>Sebagian besar agenda seperti Simposium Kebangsaan dan Kajian Terbuka dapat diikuti oleh seluruh mahasiswa Bandung Raya, sedangkan Rapimda dan Sekolah Pemimpin dikhususkan bagi delegasi pengurus LDK.</>,
          ],
          [
            'Di mana lokasi Sekretariat FSLDK Bandung Raya?',
            <>Sekretariat Puskomda FSLDK Bandung Raya bertempat di <strong>Lt. Dasar Masjid Ikomah UIN Sunan Gunung Djati</strong>, Jl. A.H. Nasution No. 105, Cibiru, Kota Bandung 40614.</>,
          ],
        ].map(([question, answer]) => (
          <details className="faq-row border-b border-line" key={question as string}>
            <summary>
              {question}
              <Plus size={18} className="shrink-0 transition-transform" aria-hidden="true" />
            </summary>
            <div className="pb-6 pr-6 text-sm leading-7 text-muted">{answer}</div>
          </details>
        ))}
      </div>
    </section>
  </>;
}
