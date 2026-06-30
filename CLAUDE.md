# CLAUDE.md — OBS Overlay Control Panel

## Konteks Project
Aplikasi Next.js untuk overlay live streaming (TikTok & YouTube) + Control Panel
yang sangat mudah dipakai oleh streamer pemula (non-teknis). Dipakai sendiri,
dijalankan di satu PC yang sama dengan OBS.

## Profil Developer
- Non-expert developer, kerja bertahap, copy-paste kode lewat Notepad + CMD
- **WAJIB pakai CMD, bukan PowerShell** (PowerShell bermasalah dengan path
  yang mengandung tanda kurung siku `[id]` pada dynamic route Next.js)
- Setiap instruksi command harus diberikan lengkap (siap copy-paste), bukan
  hanya arahan teks

## Arsitektur
- `/overlay/*` → halaman yang dimasukkan ke OBS sebagai Browser Source
  (transparan, ringan, hanya nampilkan widget)
- `/panel/*` → Control Panel untuk streamer (UI sederhana, bahasa Indonesia,
  tanpa istilah teknis)
- Komunikasi overlay ⇄ panel ⇄ koneksi live (TikTok/YouTube): real-time via
  WebSocket (Socket.io) di dalam satu Next.js app — TIDAK pakai server terpisah
  kecuali benar-benar diperlukan
- Integrasi live event:
  - YouTube: YouTube Live Streaming API / Live Chat API (resmi)
  - TikTok: library unofficial (mis. TikTok-Live-Connector) — catat di README
    bahwa ini bisa berubah sewaktu-waktu karena tidak resmi

## Alur Kerja per Tahap
1. Bangun kode untuk 1 Tahap kecil
2. Berikan command CMD lengkap untuk menjalankan/test
3. Test di browser dan/atau OBS (sebagai Browser Source)
4. **Verifikasi wajib sebelum lanjut**: tampilkan hasil yang harus dicek,
   tunggu konfirmasi dari user
5. Setelah verifikasi OK → commit ke GitHub dengan pesan jelas (`Tahap X: ...`)
6. Lanjut ke Tahap berikutnya

## Aturan Khusus
- Semua teks di UI Control Panel pakai Bahasa Indonesia yang simpel,
  hindari istilah teknis (contoh: "Sambungkan ke TikTok" bukan "Connect API")
- Tidak ada fitur yang mengharuskan streamer edit kode/JSON manual
- Setiap widget baru: sediakan tombol "Tes Tampilan" di Panel supaya bisa
  dicoba sebelum live
- Verifikasi dynamic route `[id]` pakai CMD `type`, bukan PowerShell
- API key / token (TikTok, YouTube) disimpan di `.env.local`, jangan pernah
  di-commit ke GitHub
