# Audit situs referensi FSLDK Baraya

Audit berbasis HTML dan aset publik yang diambil 30 Oktober 2026. Bukan audit visual browser, Lighthouse, keamanan backend, atau pengujian akun.

Sumber:
- https://fsldk-baraya.my.id/
- https://fsldk-baraya.my.id/assets/index-Dh2-CrWN.js

## Kekuatan yang dipertahankan

- Foto pengurus dan 11 foto galeri memberi identitas organisasi yang nyata.
- Halaman kegiatan, isu, kontak, dan login sudah tersedia pada definisi route.
- Komponen kegiatan mengambil data dari Firestore; referensi memiliki integrasi backend yang belum dimiliki starter ini.
- Footer mencantumkan kanal komunikasi dan alamat sekretariat. Status kontak terkini belum diverifikasi sehingga tidak disalin sebagai kontak aktif.

## Temuan dan respons implementasi

| Bukti pada aset publik | Dampak / batas kesimpulan | Perbaikan pada proyek |
| --- | --- | --- |
| Foto pengurus memakai alt `anime`; galeri memakai `Zoomed Image N` | Deskripsi tidak menjelaskan isi foto bagi pengguna pembaca layar | Alt deskriptif, judul arsip, sumber, dan dialog perbesar foto |
| Galeri: 11 foto, `duration:1.8`, `delay:j*.3` | Foto terakhir dijadwalkan mulai setelah 3 detik; belum diukur di browser | Galeri statis tanpa animasi masuk; lazy loading hanya untuk foto di bawah hero |
| Elemen img galeri yang diperiksa tidak menetapkan width/height atau loading | Browser tidak mendapat dimensi intrinsik melalui atribut sebelum file diunduh; bukan hasil ukur CLS | Dimensi eksplisit dan rasio gambar; gambar hero prioritas tinggi |
| Input “Cari kegiatan FSLDK” dan tombol “Cari” tanpa onChange/onClick pada elemen yang diperiksa | Indikasi UI pencarian belum terhubung; belum diuji melalui browser | Pencarian judul/lokasi, filter, hasil kosong, reset |
| Navbar memakai button dan navigate untuk perpindahan halaman | Tidak mempunyai perilaku tautan bawaan seperti salin alamat/buka tab baru | Link/NavLink, aria-current, menu keyboard |
| JSON-LD HTML mengandung komentar `//`; json.loads gagal pada baris 6 | Data terstruktur tidak valid JSON | WebSite JSON-LD valid tanpa domain produksi yang belum ditetapkan |
| Footer mencantumkan © 2024 | Tahun hardcoded dapat memberi kesan konten tidak diperbarui; bukan bukti organisasi tidak aktif | Tahun dinamis dan footer dengan kelompok navigasi |
| Navbar/galeri memakai max-w-6xl; kontak memakai h-[77vh]/h-[50vh] | Struktur relatif kaku; potensi ruang kosong / masalah pertumbuhan konten, perlu verifikasi viewport | Kontainer fluid dan tinggi mengikuti isi |

## Implementasi foto

Foto pengurus menjadi visual hero. Dua foto pelantikan menjadi galeri di beranda dan profil. Semua disajikan lokal, tidak bergantung pada hotlink. Label arsip membedakan foto periode 2024–2026 dari agenda demo mendatang. Tidak menambahkan tanggal kegiatan atau nama orang yang belum terverifikasi.

Ukuran tiga JPEG sekitar 598 KiB total. Ini ukuran aset, bukan pengukuran bandwidth awal; kedua foto galeri memakai lazy loading. Bundle JS referensi yang diunduh berukuran 1.859.650 byte tanpa informasi transfer compression. Angka ini tidak boleh dibandingkan dengan ukuran gzip build lokal atau digunakan sebagai klaim “sekian kali lebih cepat”.

## Batas dan pekerjaan berikutnya

Portal ini lebih tertata pada aspek UI yang diperbaiki, tetapi belum lebih lengkap secara operasional: auth, database, registrasi, pengiriman pesan, dan upload belum terhubung. Pengujian browser lintas viewport, pengukuran performa, verifikasi konten, serta pengujian backend tetap diperlukan sebelum produksi. HTML awal kedua situs masih SPA; JSON-LD valid tidak otomatis menyelesaikan SEO artikel atau menjamin peringkat pencarian.
