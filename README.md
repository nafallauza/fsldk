# FSLDK — Portal Publik & Monitoring

Starter React + TypeScript + Vite, Tailwind CSS, Lucide, Framer Motion, React Router, dan Radix Dialog.

```bash
npm install
npm run dev
```

Node.js 22.12+ disarankan. Buka URL yang ditampilkan Vite. Halaman publik `/`; monitoring `/dashboard`.

```bash
npm run build
npm test
npm run preview
```

Arsitektur, struktur folder, ER diagram, aturan akses, kontrak API, dan rencana produksi: [docs/architecture.md](docs/architecture.md). Skema PostgreSQL: [database/schema.sql](database/schema.sql).

Fitur demo: profil dan jejaring, agenda dengan filter/kalender, detail dan simulasi registrasi, isu editorial, simulasi kontak, dashboard dengan dua peran, tambah/perbarui kegiatan, laporan, serta pencarian LDK. Semua statistik dan naskah adalah ilustrasi. Data monitoring berada di memori dan kembali ke seed saat refresh.

Belum ada backend, login, pengiriman pesan/registrasi, upload berkas, atau database terhubung. Pergantian peran hanya simulasi UI; rancangan otorisasi server ada di dokumen. Tidak ada kredensial yang diperlukan untuk mencoba demo. Untuk hosting SPA, rewrite route ke `index.html` agar URL detail bisa dibuka langsung.

Audit UI dan pekerjaan produksi yang masih diperlukan: [docs/ui-review.md](docs/ui-review.md). Bagian perbandingan tersedia di `/#pembaruan`, bantuan di `/#bantuan`.
