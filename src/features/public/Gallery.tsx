import { Expand } from 'lucide-react';
import Modal from '../../components/ui/Modal';

const photos = [
  { src: '/images/fsldk-pelantikan.jpg', title: 'Berkumpul untuk langkah bersama', alt: 'Foto bersama peserta di depan spanduk Simposium Kebangsaan dan Pelantikan Pengurus FSLDK Baraya periode 2024–2026' },
  { src: '/images/fsldk-kebersamaan.jpg', title: 'Wajah-wajah di balik gerakan', alt: 'Enam orang berfoto di depan spanduk Pelantikan Pengurus FSLDK Baraya periode 2024–2026' },
];

export default function Gallery() {
  return <section id="dokumentasi" className="page section-space border-t border-line scroll-mt-8">
    <div className="section-heading"><div><h2>Ukhuwah yang bisa kita lihat.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-muted">Dokumentasi dari arsip FSLDK Baraya. Ada orang, pertemuan, dan kerja bersama di balik setiap kegiatan.</p></div><a className="text-link" href="https://fsldk-baraya.my.id/" target="_blank" rel="noopener noreferrer">Sumber dokumentasi</a></div>
    <div className="grid gap-6 md:grid-cols-2">{photos.map(photo => <figure key={photo.src}>
      <Modal wide title={photo.title} description="Arsip kegiatan FSLDK Baraya, periode 2024–2026 sebagaimana tercantum pada spanduk." trigger={<button className="group relative block w-full overflow-hidden rounded-xl bg-white text-left" aria-label={`Perbesar foto: ${photo.title}`}><img src={photo.src} alt={photo.alt} width="1000" height="666" loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" /><span className="absolute bottom-3 right-3 grid size-11 place-items-center rounded-lg border border-white/20 bg-slate-950/75 text-white transition-colors group-hover:bg-brand"><Expand size={18} aria-hidden="true" /></span></button>}>
        <img src={photo.src} alt={photo.alt} width="1000" height="666" className="max-h-[65dvh] w-full rounded-lg object-contain" />
      </Modal>
      <figcaption className="mt-4 text-base font-medium">{photo.title}</figcaption>
    </figure>)}</div>
  </section>;
}
