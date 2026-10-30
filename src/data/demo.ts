export type Category = 'Kajian' | 'Training' | 'Musda';
export type Event = {
  id: string; slug: string; title: string; category: Category;
  startsAt: string; location: string; host: string; summary: string;
};
export type Issue = { slug: string; category: string; title: string; excerpt: string; date: string; body: string[] };
export const ldks = [
  { id: 'itb', name: 'LDK Gamais ITB', campus: 'Institut Teknologi Bandung', city: 'Bandung', members: 240, active: true },
  { id: 'unpad', name: 'LDK DKM Unpad', campus: 'Universitas Padjadjaran', city: 'Sumedang', members: 185, active: true },
  { id: 'upi', name: 'LDK UKDM UPI', campus: 'Universitas Pendidikan Indonesia', city: 'Bandung', members: 160, active: true },
  { id: 'telkom', name: 'LDK Al-Fath', campus: 'Telkom University', city: 'Bandung', members: 125, active: false },
];
export const events: Event[] = [
  { id: 'ev-1', slug: 'ruang-tumbuh', title: 'Ruang Tumbuh: Menjadi Muslim yang Berdampak', category: 'Kajian', startsAt: '2026-11-14T09:00:00+07:00', location: 'Masjid Salman ITB, Bandung', host: 'itb', summary: 'Temukan ruang untuk bertanya, berbagi, dan memaknai kontribusi sebagai mahasiswa muslim. Kajian interaktif bersama jejaring LDK.' },
  { id: 'ev-2', slug: 'sekolah-pemimpin', title: 'Sekolah Pemimpin Dakwah Kampus', category: 'Training', startsAt: '2026-11-21T08:00:00+07:00', location: 'Kampus Universitas Padjadjaran', host: 'unpad', summary: 'Lokakarya kepemimpinan, tata kelola organisasi, dan kolaborasi lintas kampus untuk pengurus LDK.' },
  { id: 'ev-3', slug: 'musda-baraya', title: 'Musyawarah Daerah: Satu Arah, Banyak Langkah', category: 'Musda', startsAt: '2026-12-05T08:00:00+07:00', location: 'Universitas Pendidikan Indonesia', host: 'upi', summary: 'Merawat silaturahmi dan merumuskan arah gerak bersama melalui musyawarah perwakilan kampus.' },
];
export const issues: Issue[] = [
  { slug: 'kampus-ruang-aman', category: 'Kajian strategis', title: 'Menjadikan kampus ruang aman untuk bertumbuh.', excerpt: 'Tentang kepedulian, keberpihakan, dan peran mahasiswa dalam membangun lingkungan yang lebih baik.', date: '2026-10-24', body: ['Kampus adalah ruang perjumpaan. Di dalamnya, mahasiswa membawa latar belakang, pengalaman, serta harapan yang beragam. Merawat ruang tersebut berarti memastikan setiap orang dapat belajar dengan aman dan bermartabat.', 'LDK dapat mengambil peran melalui forum dialog, pendampingan teman sebaya, serta kerja sama dengan layanan kampus. Langkah kecil yang konsisten membantu menumbuhkan budaya saling menjaga.', 'Tulisan ini merupakan contoh konten untuk pengembangan antarmuka. Naskah dan pernyataan resmi perlu melalui verifikasi serta persetujuan redaksi FSLDK.'] },
  { slug: 'kolaborasi-lintas-kampus', category: 'Opini', title: 'Kolaborasi dimulai dari kemauan untuk mendengar.', excerpt: 'Membangun jejaring yang melampaui batas almamater.', date: '2026-10-20', body: ['Silaturahmi bukan hanya tentang bertemu. Ia juga tentang membuka ruang untuk mendengar kebutuhan dan gagasan yang berbeda.', 'Melalui agenda bersama, jejaring LDK dapat saling melengkapi sumber daya dan membangun kegiatan yang lebih relevan bagi mahasiswa.', 'Konten ilustrasi; bukan pernyataan resmi organisasi.'] },
];
export function dateLabel(date: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', ...options }).format(new Date(date));
}
