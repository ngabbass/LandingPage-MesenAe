# Mesen.Ae Landing Page

Landing page premium, dinamis, dan responsif untuk **Mesen.Ae** — Ekosistem Aplikasi Kasir & Self-Order QR modern khusus untuk bisnis kafe, restoran, dan UMKM kuliner.

Website ini dibangun menggunakan teknologi mutakhir dengan performa tinggi, transisi GPU-accelerated yang mulus, dan adaptabilitas tema gelap/terang secara serentak.

## ✨ Fitur Utama

- **Hero 3D Mockup Dashboard**: Presentasi mockup dashboard admin yang modern dan responsif pada perangkat mobile maupun desktop.
- **Cara Kerja Interaktif (How It Works)**: Simulasi visual alur pemesanan digital dari *self-order* pelanggan, daftar menu terlaris, *checkout* instan, modal QRIS Dinamis nasional, hingga halaman pelacakan pesanan secara real-time.
- **Replika Kartu QRIS Dinamis Resmi**: Kartu QRIS putih dengan aksen segitiga merah resmi, motif batik Kawung presisi (repeat pattern 80px), serta kode QR densitas tinggi hasil rendering SVG algoritmik.
- **Modal Konfirmasi APK Android**: Dialog persetujuan pengunduhan berkas `.APK` yang aman, bersih, dan profesional sebelum proses unduh langsung dimulai.
- **Transisi Tema Instan & Bebas Lag**: Pengoptimalan performa transisi *Dark* / *Light Mode* menggunakan kelas transisi dinamis temporer selama 250ms untuk menghindari stuttering/frame-drop pada browser.
- **Integrasi WhatsApp Langsung**: Tombol komunikasi instan yang terhubung langsung dengan nomor resmi Mesen.Ae.
- **Fallback Aset Tangguh**: Sistem penanganan gambar error otomatis (`ImageWithFallback`) yang mengalihkan URL mati ke ikon SVG kustom minimalis setema secara cerdas.

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript (TSX)
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS 3 + PostCSS
- **Iconography**: Lucide React + Kustom SVG Ikon
- **Fonts**: Plus Jakarta Sans, Inter, & JetBrains Mono (Google Fonts)

## 🚀 Instalasi & Pengembangan

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di perangkat Anda.

### 1. Klon Repositori / Masuk ke Direktori
```bash
cd "MesenAe Landing Page"
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables (.env)
Buat berkas `.env` di root direktori jika belum ada, lalu tentukan tautan APK dan WhatsApp Anda:
```env
VITE_APK_LINK=https://tautan-unduhan-apk-anda.com/mesenae.apk
VITE_WA_NUMBER=6281234567890
```

### 4. Jalankan Server Pengembangan (Dev Mode)
Jalankan server lokal interaktif:
```bash
npm run dev
```
Akses website melalui browser di `http://localhost:5173`.

### 5. Kompilasi & Build Produksi
Buat bundel produksi yang dioptimalkan secara langsung tanpa type-checking TSC berlebih:
```bash
npm run build
```
Hasil kompilasi siap rilis akan diekspor ke folder `/dist`.

### 6. Preview Hasil Build
Untuk meninjau bundel produksi secara lokal sebelum melakukan deployment:
```bash
npm run preview
```

## 📄 Lisensi

Proyek ini dilindungi di bawah lisensi **MIT License**.
