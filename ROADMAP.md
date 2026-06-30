# Roadmap — OBS Overlay Control Panel

## Tahap 1 — Setup Project
- Inisialisasi Next.js, struktur folder `/overlay`, `/panel`, `/lib`
- Halaman overlay kosong (background transparan) → ditambahkan sebagai
  Browser Source pertama kali di OBS untuk memastikan transparansi & ukuran
  benar
- Verifikasi: overlay tampil transparan di OBS, tidak ada background putih

## Tahap 2 — Real-time Channel (WebSocket)
- Setup Socket.io di dalam Next.js (custom server)
- Panel kirim pesan test → Overlay terima & tampilkan di layar
- Verifikasi: ketik pesan di Panel, langsung muncul di overlay (browser & OBS)

## Tahap 3 — Alert Box (Manual Trigger dulu)
- Widget alert box di overlay (animasi muncul-hilang, teks + gambar)
- Tombol "Tes Alert" di Panel untuk trigger manual
- Ini dasar sebelum disambungkan ke event live asli
- Verifikasi: klik tombol di Panel, alert muncul di overlay dengan animasi

## Tahap 4 — Koneksi YouTube Live (Alert Otomatis)
- Setup YouTube Data API (API key, OAuth jika perlu untuk live chat)
- Baca event Super Chat / New Member dari Live Chat API
- Trigger alert box otomatis saat event masuk
- Verifikasi: pakai live test/private livestream YouTube, kirim Super Chat
  dummy, pastikan alert muncul

## Tahap 5 — Koneksi TikTok Live (Alert Otomatis)
- Setup unofficial TikTok live connector
- Tangani event gift, follow, like
- Trigger alert box otomatis
- Verifikasi: buka TikTok Live (bisa akun test), pastikan event masuk ke
  overlay

## Tahap 6 — Widget Timer
- Widget countdown/stopwatch di overlay
- Kontrol start/pause/reset di Panel
- Verifikasi: jalankan timer dari Panel, cek update real-time di overlay

## Tahap 7 — Widget Now Playing
- Input manual judul lagu/artist di Panel → tampil di overlay
- (Opsional lanjutan: auto-detect dari Spotify API)
- Verifikasi: ubah teks di Panel, overlay update tanpa refresh

## Tahap 8 — Widget Stream Stats
- Tampilkan viewer count, durasi live (uptime)
- Ambil data viewer dari koneksi TikTok/YouTube yang sudah aktif (Tahap 4-5)
- Verifikasi: angka viewer & durasi update otomatis saat live

## Tahap 9 — Widget Win / Lose
- Widget overlay yang tampilkan status "MENANG" / "KALAH" dengan animasi
  & warna berbeda (misal hijau untuk menang, merah untuk kalah)
- Kontrol di Panel: tombol "Set Menang", "Set Kalah", "Sembunyikan"
- Cocok untuk streamer game/PK battle TikTok
- Verifikasi: klik tombol di Panel, overlay berubah status dengan animasi
  yang sesuai

## Tahap 10 — Widget Room ID
- Widget kecil di overlay yang menampilkan Room ID / kode lobi game
- Kontrol di Panel: input teks untuk isi/ubah Room ID, tombol salin (copy)
  untuk memudahkan streamer share ke chat
- Opsi tampilkan/sembunyikan widget ini kapan saja
- Verifikasi: ubah Room ID di Panel, overlay update langsung; tombol salin
  berfungsi

## Tahap 11 — Preset & Kontrol Tampilan Widget
- Panel: toggle on/off tiap widget, pilih preset tampilan
- Penyimpanan setting sederhana (local file/DB ringan, misal SQLite/JSON)
- Verifikasi: ganti preset di Panel, overlay berubah sesuai

## Tahap 12 — Polish & Dokumentasi
- Perbaikan UI Panel (bahasa, layout)
- README cara pakai untuk streamer pemula
- Commit final + tag release

---

**Catatan:** Tahap 4 dan 5 (integrasi live) berpotensi butuh waktu lebih lama
karena tergantung API/library eksternal. Saya akan beri tahu di awal tahap
tersebut jika ada kendala dari sisi API/akun yang perlu kamu siapkan
(misal: API key YouTube, akun TikTok untuk testing).
