import { ArrowUpRight, Plus } from 'lucide-react';
import { Link } from 'react-router';

const improvements = [
  ['01', 'Dokumentasi yang lebih bermakna', 'Situs referensi memiliki foto asli yang kuat, tetapi teks alternatif galeri masih berupa “Zoomed Image” dan nomor.', 'Foto arsip dipertahankan, diberi deskripsi sesuai isi, serta dapat diperbesar lewat dialog yang mendukung keyboard.'],
  ['02', 'Pencarian yang membantu', 'Pada kode publik yang diperiksa, kolom dan tombol cari kegiatan belum memiliki penanganan input atau klik.', 'Pencarian judul dan lokasi terhubung ke hasil. Filter kategori, pesan hasil kosong, serta reset tersedia.'],
  ['03', 'Navigasi yang mengikuti kebiasaan pengguna', 'Navigasi utama referensi menggunakan tombol untuk berpindah halaman.', 'Tautan memiliki alamat tujuan, penanda halaman aktif, dukungan buka tab baru, serta menu seluler yang bisa ditutup dengan Escape.'],
  ['04', 'Konten tampil tanpa menunggu animasi panjang', 'Galeri referensi memiliki durasi animasi 1,8 detik per foto dengan jeda bertingkat hingga 3 detik.', 'Galeri tampil tanpa animasi masuk. Gambar di bawah layar dimuat saat diperlukan dan memiliki dimensi untuk menyediakan ruang sejak awal.'],
  ['05', 'Struktur yang lebih konsisten', 'Markup data terstruktur referensi mengandung komentar sehingga tidak dapat dibaca sebagai JSON yang valid.', 'Portal ini memiliki markup WebSite yang valid, judul halaman yang mengikuti navigasi, dan pemisahan halaman publik dengan monitoring.'],
];

export default function PortalUpdates() {
  return <>
    <section id="pembaruan" className="page scroll-mt-8 border-y border-line">
      <details className="faq-row py-2">
        <summary><span className="text-lg">Apa yang diperbarui di portal ini?</span><Plus size={20} className="shrink-0 transition-transform" aria-hidden="true" /></summary>
        <p className="mb-6 max-w-3xl text-sm leading-7 text-muted">Catatan berikut berasal dari pemeriksaan HTML dan aset publik situs referensi. Perbandingan performa di perangkat nyata belum dilakukan; fitur transaksi portal ini masih demo.</p>
        <div className="grid gap-x-10 lg:grid-cols-2">{improvements.map(([number, title, before, after]) => <article key={number} className="border-t border-line py-6"><h3 className="text-base font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{before}</p><p className="mt-3 text-sm leading-7">{after}</p></article>)}</div>
        <Link to="/contact" className="text-link mb-6">Sampaikan masukan <ArrowUpRight size={17} /></Link>
      </details>
    </section>
    <section id="bantuan" className="page section-space scroll-mt-8 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
      <div><h2 className="text-3xl font-semibold tracking-tight">Pertanyaan umum.</h2><p className="mt-4 max-w-md text-sm leading-7 text-muted">Temukan agenda, kenali jejaring, atau masuk ke ruang pengurus sesuai kebutuhanmu.</p></div>
      <div>{[
        ['Bagaimana cara mengikuti agenda?', <>Buka <Link className="underline text-royal" to="/events">halaman agenda</Link>, pilih kegiatan, lalu baca tanggal dan lokasinya. Form pendaftaran saat ini masih simulasi dan belum mengirim data peserta.</>],
        ['Untuk siapa portal monitoring disediakan?', <>Portal monitoring ditujukan untuk Admin Pusat dan pengurus LDK kampus. Versi saat ini memperagakan pencatatan kegiatan dan laporan melalui dua peran demo. Login server belum tersedia.</>],
        ['Bagaimana mengajukan kolaborasi atau masukan?', <>Kunjungi <Link className="underline text-royal" to="/contact">halaman kontak</Link> untuk melihat alur pesan. Pengiriman masih simulasi; saluran resmi akan ditampilkan setelah diverifikasi pengurus.</>],
        ['Apakah data kampus dan kegiatan sudah resmi?', <>Konten dan angka saat ini merupakan contoh untuk pengembangan portal. Nama kampus pada pita jejaring tidak sama dengan jumlah LDK yang tercatat pada data demo.</>],
      ].map(([question, answer]) => <details className="faq-row border-b border-line" key={question as string}><summary>{question}<Plus size={18} className="shrink-0 transition-transform" aria-hidden="true" /></summary><div className="pb-6 pr-6 text-sm leading-7 text-muted">{answer}</div></details>)}</div>
    </section>
  </>;
}
