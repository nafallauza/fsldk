# Audit UI dan tindak lanjut

## Temuan yang diperbaiki

| Temuan pada versi awal proyek | Perbaikan |
| --- | --- |
| Batas kontainer 1380px membuat margin 270px pada layar 1920px | Lebar fluid dengan gutter `clamp(32px, 4vw, 96px)` total; pada 1920px margin sekitar 38px per sisi |
| Hero kurang mengisi kolom lebar | Skala headline diperbesar, area foto mengikuti kolom, lebar deskripsi ditambah; artikel panjang tetap dibatasi untuk keterbacaan |
| Overlay absolut berisiko memotong judul saat font diperbesar | Kartu agenda masuk alur flex sehingga tinggi visual mengikuti konten |
| Footer hanya berisi sedikit tautan | Empat kelompok: identitas, organisasi, jelajahi portal, ruang pengurus; susunan satu/dua/empat kolom |
| Marquee dapat menyisakan celah pada monitor lebar | ResizeObserver menyamakan lebar minimal setiap salinan dengan viewport marquee |
| Menu seluler belum bisa ditutup dengan Escape | Escape menutup menu dan mengembalikan fokus ke tombol; klik tautan menutup menu |
| Manfaat pembaruan belum dijelaskan | Bagian perbandingan di `/#pembaruan` dan bantuan di `/#bantuan` |

Perbandingan pada website mengacu pada versi awal proyek ini dan masukan pengguna. Situs referensi https://fsldk-baraya.my.id/ tidak menghasilkan konten yang dapat dibaca alat penelusuran. Tidak ada klaim hasil audit performa, aksesibilitas, atau keamanan situs referensi.

## Yang masih memerlukan pekerjaan produksi

- Backend dan autentikasi server: pergantian peran masih simulasi; data monitoring hilang saat refresh.
- Pengiriman pendaftaran dan kontak: form belum terhubung ke pengurus.
- Konten resmi: sejarah, mandat komisi, kontak, foto organisasi, agenda, dan statistik harus diverifikasi.
- Pita enam kampus adalah daftar nama yang diminta, sementara seed monitoring memiliki empat LDK; FAQ menjelaskan perbedaannya.
- SQL belum dieksekusi; pengujian akses lintas kampus dan transaksi kuota diperlukan saat API tersedia.
- Uji visual browser pada 360/390/768/1024/1440/1920px, zoom 200%, menu, keyboard, dan dialog belum tersedia di lingkungan ini. Build bukan bukti bahwa tampilan telah diperiksa di perangkat nyata.
- Halaman publik masih SPA; metadata server per artikel dan pengukuran Core Web Vitals belum tersedia.

Tujuan revisi ini adalah memperbaiki UI dan alur yang bisa diuji pada starter; bukan menyatakan website sudah sempurna atau siap produksi.

## Revisi konsistensi seluruh halaman

- Label dekoratif kecil di atas judul dihapus pada beranda, profil, agenda, isu, kontak, dan dashboard. Metadata tanggal/kategori yang membantu pengunjung tetap ditampilkan dengan ukuran lebih terbaca.
- Pita kampus menjadi grid statis responsif; label samping, kontrol jeda, serta animasinya dihapus sesuai masukan terbaru.
- Profil memakai panel editorial dan direktori responsif; kontak memakai formulir dengan hierarki yang jelas.
- Agenda dan isu memiliki pencarian serta keadaan hasil kosong dengan reset. Pilihan bulan agenda mengikuti data, dan tampilan kalender mobile memakai daftar kegiatan.
- Tabel kegiatan dan direktori menggunakan susunan vertikal di mobile; tombol perbarui berada pada kegiatan terkait.
- Identitas record formulir dipertahankan setelah simpan agar klik simpan berikutnya memperbarui kegiatan yang sama, bukan membuat duplikat.
- Render delapan route publik/404 dan tiga tampilan dashboard diperiksa. Pemeriksaan ini bukan pengganti uji visual browser.

## Pembaruan audit referensi

Pemeriksaan lanjutan berhasil membaca bundle JavaScript publik dan foto referensi. Temuan terbaru menggantikan keterbatasan pembacaan teks sebelumnya; lihat [reference-audit.md](reference-audit.md). Foto stok pada hero telah diganti dengan arsip pengurus, galeri ditambahkan ke beranda dan profil, serta JSON-LD divalidasi.

## Pemeriksaan browser dan perapian komposisi

Pemeriksaan Chromium headless kini sudah dilakukan pada 390, 768, 1440, dan 1920px untuk 10 route: beranda, profil, agenda, detail agenda, isu, detail isu, kontak, ringkasan dashboard, monitoring, dan direktori. Seluruh kombinasi tanpa overflow horizontal dan error JavaScript. Menu mobile/Escape, dialog galeri/Escape, pencarian/reset, serta dialog tambah kegiatan diuji langsung. Ini memperbarui catatan keterbatasan browser pada audit sebelumnya; belum merupakan pengujian lintas Safari/Firefox atau perangkat fisik.

Perbaikan berdasarkan screenshot: headline lebih proporsional, kerenggangan huruf/kata lebih terbaca, kartu agenda hero tanpa bingkai bertumpuk, kolom agenda/artikel/galeri konsisten, catatan pembaruan bisa dibuka sesuai kebutuhan, footer mobile dua kolom, dan navigasi dashboard mobile lebih ringkas. Fade pada konten hero dihapus agar informasi utama langsung terlihat.

Alat browser dipasang hanya di `/tmp/fsldk-ui-check`, tidak menambah dependensi aplikasi. Screenshot akhir: `/tmp/fsldk-final-390.png`, `/tmp/fsldk-final-1440.png`.
