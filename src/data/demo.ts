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
  pic: 'Humas Komisi D FSLDK Baraya',
  email: 'fsldkbandungraya@gmail.com',
  address: 'Lt. Dasar Masjid Ikomah UIN SGD, Jl. A.H. Nasution No. 105, Cibiru, Bandung 40614',
  instagram: 'https://www.instagram.com/fsldkbaraya/',
  twitter: 'https://x.com/fsldkbaraya',
  contacts: [
    { role: 'Media Partner', name: 'Teh Dini', phone: '(+62) 881-8381-143', wa: 'https://wa.me/628818381143' },
    { role: 'Bidang Humas', name: 'Kang Fikri', phone: '(+62) 895-3900-88123', wa: 'https://wa.me/62895390088123' },
    { role: 'Bidang Isu', name: 'Kang Uki', phone: '(+62) 821-1566-4723', wa: 'https://wa.me/6282115664723' },
  ],
};

export const ldks = [
  { id: 'uin', name: 'LDK Al-Jami’ah UIN SGD', campus: 'UIN Sunan Gunung Djati', city: 'Bandung', members: 310, active: true },
  { id: 'itb', name: 'LDK Gamais ITB', campus: 'Institut Teknologi Bandung', city: 'Bandung', members: 265, active: true },
  { id: 'unpad', name: 'LDK DKM Unpad', campus: 'Universitas Padjadjaran', city: 'Jatinangor', members: 240, active: true },
  { id: 'upi', name: 'LDK UKDM UPI', campus: 'Universitas Pendidikan Indonesia', city: 'Bandung', members: 220, active: true },
  { id: 'telkom', name: 'LDK Al-Fath Tel-U', campus: 'Telkom University', city: 'Kab. Bandung', members: 195, active: true },
  { id: 'polban', name: 'LDK Assalam Polban', campus: 'Politeknik Negeri Bandung', city: 'Bandung Barat', members: 150, active: true },
  { id: 'unisba', name: 'LDK Al-Asy’ari Unisba', campus: 'Universitas Islam Bandung', city: 'Bandung', members: 175, active: true },
  { id: 'unpas', name: 'LDK Ulul Albab Unpas', campus: 'Universitas Pasundan', city: 'Bandung', members: 160, active: true },
];

export const events: Event[] = [
  { id: 'ev-1', slug: 'simposium-kebangsaan-baraya', title: 'Simposium Kebangsaan & Silaturahim LDK se-Bandung Raya', category: 'Kajian', startsAt: '2026-11-14T08:30:00+07:00', location: 'Masjid Ikomah UIN Sunan Gunung Djati, Bandung', host: 'uin', summary: 'Forum strategis merawat harmoni dakwah kampus dalam menyongsong Indonesia Emas 2045 serta memperkokoh moderasi dan semangat kebangsaan mahasiswa.' },
  { id: 'ev-2', slug: 'sekolah-pemimpin-dakwah', title: 'Sekolah Pemimpin & Upgrading Pengurus LDK', category: 'Training', startsAt: '2026-11-21T08:00:00+07:00', location: 'Masjid Salman ITB, Bandung', host: 'itb', summary: 'Pembinaan kapasitas kepemimpinan, manajemen organisasi, serta penguatan kolaborasi lintas komisi bagi pengurus aktif LDK se-Bandung Raya.' },
  { id: 'ev-3', slug: 'rapimda-fsldk-baraya', title: 'Rapat Pimpinan Daerah (Rapimda) FSLDK Bandung Raya', category: 'Musda', startsAt: '2026-12-05T08:00:00+07:00', location: 'Kampus Universitas Pendidikan Indonesia, Bandung', host: 'upi', summary: 'Konsolidasi 43 LDK tergabung untuk menyelaraskan gerak pembinaan mahasiswa, isu keumatan, serta program kolaborasi daerah.' },
];

export const issues: Issue[] = [
  {
    slug: 'harmoni-dakwah-indonesia-emas-2045',
    category: 'Isu Kebangsaan',
    title: 'Merawat Harmoni Dakwah Kampus Menuju Indonesia Emas 2045.',
    excerpt: 'Peran strategis lembaga dakwah kampus dalam membina karakter mahasiswa dan menangkal paham ekstremisme di lingkungan akademik.',
    date: '2026-10-24',
    body: [
      'FSLDK Bandung Raya hadir sebagai forum koordinasi lembaga dakwah di kampus-kampus se-Bandung Raya untuk memastikan terciptanya dakwah kampus yang teduh, inklusif, dan harmonis dalam menyongsong Indonesia Emas 2045.',
      'Di tengah tantangan pergaulan bebas, penyalahgunaan obat-obatan terlarang, hingga masuknya paham radikalisme dan ekstremisme, LDK berperan sebagai ruang pembinaan intelektual dan spiritual yang ramah bagi seluruh mahasiswa.',
      'Melalui sinergi 43 LDK tergabung, pembinaan karakter tidak berhenti di ruang kajian, melainkan hadir dalam karya akademik, kepedulian sosial, serta kontribusi nyata bagi masyarakat Jawa Barat dan Indonesia.',
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
      'Komisi Isu Keumatan dan Kebangsaan FSLDK Bandung Raya secara berkala menghimpun aspirasi serta kajian strategis dari berbagai kampus untuk merumuskan sikap bersama yang konstruktif.',
      'Kolaborasi lintas kampus memperkuat dampak gerakan mahasiswa—mengubah kepedulian individual menjadi aksi kolektif yang terukur dan berkelanjutan.',
    ],
  },
];

export function dateLabel(date: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', ...options }).format(new Date(date));
}
