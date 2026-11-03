export type Category = 'Kajian' | 'Training' | 'Musda';
export type Event = {
  id: string; slug: string; title: string; category: Category;
  startsAt: string; location: string; host: string; summary: string;
};
export type Issue = { slug: string; category: string; title: string; excerpt: string; date: string; body: string[] };

export const orgStats = {
  ldkCount: 43,
  commissions: 4,
  activeManagers: 40,
};

export const contactInfo = {
  pic: 'Humas Komisi D FSLDK Jogja',
  email: 'fsldkjogja@gmail.com',
  address: 'Sekretariat Puskomda FSLDK D.I. Yogyakarta, Kompleks Masjid Kampus UGM, Bulaksumur, Sleman, D.I. Yogyakarta 55281',
  instagram: 'https://www.instagram.com/fsldkjogja/',
  twitter: 'https://x.com/fsldkjogja',
  contacts: [
    { role: 'Media Partner', name: 'Mbak Dini', phone: '(+62) 881-8381-143', wa: 'https://wa.me/628818381143' },
    { role: 'Bidang Humas', name: 'Mas Fikri', phone: '(+62) 895-3900-88123', wa: 'https://wa.me/62895390088123' },
    { role: 'Bidang Isu', name: 'Mas Uki', phone: '(+62) 821-1566-4723', wa: 'https://wa.me/6282115664723' },
  ],
};

export const ldks = [
  { id: 'ugm', name: 'LDK Jama’ah Shalahuddin UGM', campus: 'Universitas Gadjah Mada', city: 'Sleman', members: 320, active: true },
  { id: 'uny', name: 'LDK Al-Mujaddid UNY', campus: 'Universitas Negeri Yogyakarta', city: 'Sleman', members: 275, active: true },
  { id: 'uin', name: 'LDK Al-Manar UIN Sunan Kalijaga', campus: 'UIN Sunan Kalijaga', city: 'Yogyakarta', members: 250, active: true },
  { id: 'uii', name: 'LDK Jama’ah Al-Anhar UII', campus: 'Universitas Islam Indonesia', city: 'Sleman', members: 230, active: true },
  { id: 'umy', name: 'LDK Al-Mujaddid UMY', campus: 'Universitas Muhammadiyah Yogyakarta', city: 'Bantul', members: 210, active: true },
  { id: 'uad', name: 'LDK Al-Farabi UAD', campus: 'Universitas Ahmad Dahlan', city: 'Bantul', members: 185, active: true },
  { id: 'upn', name: 'LDK Al-Hikam UPN Veteran', campus: 'UPN Veteran Yogyakarta', city: 'Sleman', members: 160, active: true },
  { id: 'isi', name: 'LDK Al-Ikhlas ISI', campus: 'Institut Seni Indonesia Yogyakarta', city: 'Bantul', members: 140, active: true },
];

export const events: Event[] = [
  { id: 'ev-1', slug: 'simposium-kebangsaan-jogja', title: 'Simposium Kebangsaan & Silaturahim LDK se-Daerah Istimewa Yogyakarta', category: 'Kajian', startsAt: '2026-11-14T08:30:00+07:00', location: 'Masjid Kampus UGM, Bulaksumur, Sleman', host: 'ugm', summary: 'Forum strategis merawat harmoni dakwah kampus dalam menyongsong Indonesia Emas 2045 serta memperkokoh moderasi dan semangat kebangsaan mahasiswa.' },
  { id: 'ev-2', slug: 'sekolah-pemimpin-dakwah', title: 'Sekolah Pemimpin & Upgrading Pengurus LDK', category: 'Training', startsAt: '2026-11-21T08:00:00+07:00', location: 'Masjid Mujahidin UNY, Sleman, Yogyakarta', host: 'uny', summary: 'Pembinaan kapasitas kepemimpinan, manajemen organisasi, serta penguatan kolaborasi lintas komisi bagi pengurus aktif LDK se-D.I. Yogyakarta.' },
  { id: 'ev-3', slug: 'rapimda-fsldk-jogja', title: 'Rapat Pimpinan Daerah (Rapimda) FSLDK Yogyakarta', category: 'Musda', startsAt: '2026-12-05T08:00:00+07:00', location: 'Kampus Terpadu Universitas Islam Indonesia, Sleman', host: 'uii', summary: 'Konsolidasi 43 LDK tergabung untuk menyelaraskan gerak pembinaan mahasiswa, isu keumatan, serta program kolaborasi daerah.' },
];

export const issues: Issue[] = [
  {
    slug: 'harmoni-dakwah-indonesia-emas-2045',
    category: 'Isu Kebangsaan',
    title: 'Merawat Harmoni Dakwah Kampus Menuju Indonesia Emas 2045.',
    excerpt: 'Peran strategis lembaga dakwah kampus dalam membina karakter mahasiswa dan menangkal paham ekstremisme di lingkungan akademik.',
    date: '2026-10-24',
    body: [
      'FSLDK Daerah Istimewa Yogyakarta hadir sebagai forum koordinasi lembaga dakwah di kampus-kampus se-D.I. Yogyakarta untuk memastikan terciptanya dakwah kampus yang teduh, inklusif, dan harmonis dalam menyongsong Indonesia Emas 2045.',
      'Di tengah tantangan pergaulan bebas, penyalahgunaan obat-obatan terlarang, hingga masuknya paham radikalisme dan ekstremisme, LDK berperan sebagai ruang pembinaan intelektual dan spiritual yang ramah bagi seluruh mahasiswa.',
      'Melalui sinergi 43 LDK tergabung, pembinaan karakter tidak berhenti di ruang kajian, melainkan hadir dalam karya akademik, kepedulian sosial, serta kontribusi nyata bagi masyarakat Yogyakarta dan Indonesia.',
    ],
  },
  {
    slug: 'menjawab-tantangan-globalisasi-dan-isu-keumatan',
    category: 'Isu Keumatan',
    title: 'Menjawab Tantangan Modernisasi dan Mengawal Isu Kemahasiswaan.',
    excerpt: 'Mengintegrasikan literasi teknologi, kepekaan sosial, dan kolaborasi lintas almamater dalam merespons dinamika umat.',
    date: '2026-10-20',
    body: [
      'Perkembangan teknologi dan arus globalisasi menuntut aktivis dakwah kampus untuk adaptif dalam menyuarakan nilai-nilai kebaikan dengan pendekatan yang santun dan berbasis data.',
      'Komisi Isu Keumatan dan Kebangsaan FSLDK Yogyakarta secara berkala menghimpun aspirasi serta kajian strategis dari berbagai kampus untuk merumuskan sikap bersama yang konstruktif.',
      'Kolaborasi lintas kampus memperkuat dampak gerakan mahasiswa—mengubah kepedulian individual menjadi aksi kolektif yang terukur dan berkelanjutan.',
    ],
  },
];

export function dateLabel(date: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', ...options }).format(new Date(date));
}
