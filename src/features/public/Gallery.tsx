import { Expand } from 'lucide-react';
import Modal from '../../components/ui/Modal';

const photos = [
  {
    src: '/images/fsldk-pelantikan.jpg',
    title: 'Simposium Kebangsaan & Pelantikan Pengurus',
    alt: 'Foto bersama peserta Simposium Kebangsaan dan Pelantikan Pengurus FSLDK Baraya periode 2024–2026',
  },
  {
    src: '/images/fsldk-kebersamaan.jpg',
    title: 'Sinergi Pengurus Puskomda FSLDK Baraya',
    alt: 'Pengurus FSLDK Bandung Raya berfoto di depan spanduk pelantikan',
  },
  {
    src: '/images/galeri-3.jpg',
    title: 'Forum Diskusi & Konsolidasi Lintas Kampus',
    alt: 'Suasana diskusi dan pemaparan program kerja pengurus LDK se-Bandung Raya',
  },
  {
    src: '/images/galeri-4.jpg',
    title: 'Pembinaan & Upgrading Kapasitas Kader',
    alt: 'Sesi penyampaian materi kepemimpinan dan pembinaan mahasiswa',
  },
  {
    src: '/images/galeri-5.jpg',
    title: 'Silaturahmi Delegasi LDK Bandung Raya',
    alt: 'Pertemuan delegasi lembaga dakwah kampus dalam agenda daerah',
  },
  {
    src: '/images/galeri-6.jpg',
    title: 'Kolaborasi Komisi & Penguatan Ukhuwah',
    alt: 'Kebersamaan pengurus aktif Puskomda FSLDK Bandung Raya usai kegiatan',
  },
];

export default function Gallery() {
  return (
    <section id="dokumentasi" className="page section-space border-t border-line scroll-mt-8">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Galeri Gerakan</p>
          <h2 className="mt-2">Ukhuwah yang hadir dalam karya nyata.</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Rekam jejak kegiatan, simposium kebangsaan, dan konsolidasi pengurus Puskomda FSLDK Bandung Raya.
          </p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map(photo => (
          <figure key={photo.src} className="group">
            <Modal
              wide
              title={photo.title}
              description={photo.alt}
              trigger={
                <button
                  className="relative block w-full overflow-hidden rounded-xl border border-line bg-white text-left"
                  aria-label={`Perbesar foto: ${photo.title}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width="1000"
                    height="666"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-lg border border-white/20 bg-slate-950/75 text-white transition-colors group-hover:bg-brand">
                    <Expand size={17} aria-hidden="true" />
                  </span>
                </button>
              }
            >
              <img src={photo.src} alt={photo.alt} width="1000" height="666" className="max-h-[70dvh] w-full rounded-lg object-contain" />
            </Modal>
            <figcaption className="mt-3 text-sm font-semibold text-ink">{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
