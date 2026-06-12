import React from 'react';
import { Scale, AlertCircle, Phone, Mail } from 'lucide-react';
import PageHeader from './components/PageHeader';

export default function SyaratKetentuan({ theme, toggleTheme }: { theme: 'dark' | 'light'; toggleTheme: () => void }) {
  const waLink = `https://wa.me/${import.meta.env.VITE_WA_NUMBER}?text=Halo%2C%20saya%20butuh%20bantuan%20terkait%20legalitas%20Mesen.Ae`;

  return (
    <div className="min-h-screen bg-bg-base text-text-primary transition-colors duration-300 font-sans pb-16 pt-24">
      <PageHeader theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden border-b border-border bg-gradient-to-b from-bg-card/20 to-transparent">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-amber/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-brand-blue/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-amber/10 text-[11px] font-bold tracking-widest uppercase mb-6 text-brand-amber">
            <Scale size={14} />
            Syarat & Ketentuan
          </div>
          <h1 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] tracking-tight mb-4">
            Syarat & Ketentuan Layanan
          </h1>
          <p className="text-[17px] sm:text-[19px] text-text-secondary leading-relaxed max-w-[640px] mx-auto">
            Panduan hukum dan aturan main penggunaan platform POS Cloud, QR Menu, dan sistem operasional Mesen.Ae untuk seluruh mitra bisnis kami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-12">
        
        {/* Ringkasan Eksekutif - Elegan & Tanpa Kotak Kaku */}
        <div className="mb-12 py-5 px-6 sm:px-8 bg-brand-amber/5 border-l-4 border-brand-amber rounded-r-2xl flex flex-col sm:flex-row gap-5 items-start">
          <AlertCircle className="text-brand-amber shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-[18px] font-bold text-text-primary mb-2">Ringkasan Eksekutif</h3>
            <p className="text-[16px] text-text-secondary leading-relaxed">
              Dengan menggunakan sistem Mesen.Ae, Anda menyetujui seluruh ketentuan ini. Anda memegang kendali penuh atas data bisnis Anda dan bertanggung jawab atas operasional kasir di <em>outlet</em> Anda. <strong>Kami tidak memungut komisi persentase dari penjualan Anda</strong> (di luar biaya standar <em>payment gateway</em> pihak ketiga). Mesen.Ae berhak melakukan pemeliharaan dan pembaruan sistem demi stabilitas platform.
            </p>
          </div>
        </div>

        {/* Daftar Pasal - Modern Editorial Style (Tanpa Garis & Tanpa Kotak) */}
        <div className="space-y-10 sm:space-y-12">
          
          <RuleSection number="1" title="Penerimaan Ketentuan">
            Selamat datang di Mesen.Ae. Dengan mendaftarkan usaha Anda, membuat akun, mengakses, atau menggunakan layanan <em>Point of Sale</em> (POS) Cloud, <em>Self-Order</em> QR, <em>Kitchen Display</em>, dan layanan pendukung kami, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat dengan ketentuan ini. Jika Anda bertindak atas nama badan usaha, Anda menyatakan memiliki kewenangan hukum yang sah untuk mengikat badan usaha tersebut.
          </RuleSection>

          <RuleSection number="2" title="Pendaftaran Akun & Keamanan">
            <p className="mb-3">Untuk menggunakan sistem kasir dan <em>dashboard</em> Mesen.Ae, Anda diwajibkan memberikan informasi pendaftaran yang akurat, lengkap, dan terbaru. Anda bertanggung jawab penuh atas:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span>Menjaga kerahasiaan kata sandi administrator maupun PIN kasir staf Anda.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span>Seluruh transaksi, input menu, dan aktivitas operasional yang terjadi di bawah akun Anda.</span>
              </li>
            </ul>
            <p className="mt-3">Segera laporkan kepada tim bantuan Mesen.Ae jika mendeteksi penggunaan akun tanpa izin atau indikasi kebocoran keamanan.</p>
          </RuleSection>

          <RuleSection number="3" title="Hak Akses & Lisensi Penggunaan">
            Mesen.Ae memberikan lisensi non-eksklusif, non-transferabel, terbatas, dan dapat ditarik kembali kepada Anda untuk mengakses sistem <em>dashboard</em> serta menggunakan aplikasi kasir pada perangkat keras yang kompatibel. Lisensi ini khusus untuk keperluan operasional internal bisnis F&B Anda sendiri dan tidak memberikan hak untuk menyewakan kembali atau menjual lisensi kepada pihak ketiga.
          </RuleSection>

          <RuleSection number="4" title="Mode Offline & Sinkronisasi Cache">
            <p className="mb-2">Layanan kasir Mesen.Ae didukung oleh teknologi <em>caching</em> lokal yang memungkinkan pencatatan transaksi tetap berjalan ketika jaringan internet terputus sementara.</p>
            <p>Anda memahami bahwa data transaksi <em>offline</em> disimpan sementara pada perangkat Anda. <strong>Anda dilarang membersihkan data/cache browser secara paksa</strong> sebelum data disinkronkan secara <em>online</em> ke server <em>cloud</em> Mesen.Ae guna menghindari hilangnya rekaman transaksi secara permanen.</p>
          </RuleSection>

          <RuleSection number="5" title="Langganan & Biaya Layanan">
            <p className="mb-3">Layanan Mesen.Ae ditawarkan dengan model langganan berbayar (bulanan/tahunan). Detail kuota dan biaya terlampir pada <em>dashboard</em> Anda.</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span><strong>Pembayaran di Muka:</strong> Biaya dibayarkan penuh di awal periode penagihan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span><strong>Tanpa Komisi:</strong> Kami tidak memotong persentase penjualan tunai maupun pesanan Anda (kecuali biaya pemrosesan <em>payment gateway</em> pihak ketiga).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span><strong>Penangguhan:</strong> Jika perpanjangan melewati tanggal jatuh tempo, akses ke <em>dashboard</em> akan ditangguhkan sementara.</span>
              </li>
            </ul>
          </RuleSection>

          <RuleSection number="6" title="Masa Aktif Akun & Pembersihan Data">
            Jika akun Anda tidak memperpanjang masa aktif langganan selama lebih dari 90 (sembilan puluh) hari berturut-turut, Mesen.Ae berhak mengkategorikan akun tersebut sebagai "Tidak Aktif". Kami akan mengirimkan notifikasi peringatan sebelum melakukan pembersihan data transaksi dan menu Anda secara permanen dari server database utama demi efisiensi infrastruktur.
          </RuleSection>

          <RuleSection number="7" title="Kewajiban Tenant (Merchant)">
            <p className="mb-3">Sebagai pengguna layanan, Anda memiliki kewajiban operasional dan hukum sebagai berikut:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span>Menjamin keabsahan dan legalitas barang, makanan, serta minuman yang dijual.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span>Bertanggung jawab atas penyelesaian pajak penjualan (PPN/PB1) dan perizinan usaha setempat.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-blue mt-0.5">▪</span>
                <span>Menyelesaikan langsung segala keluhan pelanggan terkait layanan, kualitas masakan, atau kesalahan operasional kasir.</span>
              </li>
            </ul>
          </RuleSection>

          <RuleSection number="8" title="Pembatasan Penggunaan Sistem">
            <p className="mb-3">Anda dan staf Anda dilarang keras untuk melakukan tindakan berikut pada platform kami:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 mt-0.5">▪</span>
                <span>Melakukan rekayasa balik (<em>reverse engineering</em>) atau membongkar kode sumber aplikasi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 mt-0.5">▪</span>
                <span>Menggunakan skrip otomatis (bot) untuk mengambil data dari server secara ilegal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 mt-0.5">▪</span>
                <span>Menyisipkan kode berbahaya yang dapat merusak, mengganggu, atau membatasi kinerja server kami.</span>
              </li>
            </ul>
          </RuleSection>

          <RuleSection number="9" title="Ketersediaan Layanan (Uptime)">
            Mesen.Ae menargetkan <em>uptime</em> sistem sebesar 99% setiap bulannya. Namun, layanan dapat mengalami gangguan sementara untuk keperluan pemeliharaan terencana (<em>scheduled maintenance</em>), peningkatan keamanan, atau gangguan koneksi pada penyedia <em>cloud</em> pihak ketiga. Kami akan memberikan pemberitahuan di awal jika pemeliharaan berdampak pada jam operasional bisnis Anda.
          </RuleSection>

          <RuleSection number="10" title="Batas Tanggung Jawab">
            Perangkat lunak kasir dan <em>self-order</em> ini disediakan secara "apa adanya" (<em>as is</em>). Mesen.Ae tidak bertanggung jawab atas kerugian finansial, kehilangan keuntungan, atau kerusakan reputasi bisnis Anda yang disebabkan oleh gangguan penyedia internet lokal, ketidaksesuaian perangkat keras milik Anda, atau hilangnya data akibat kelalaian staf <em>outlet</em> Anda.
          </RuleSection>

          <RuleSection number="11" title="Perubahan Fitur Layanan">
            Sebagai platform berbasis SaaS (<em>Software as a Service</em>) yang dinamis, Mesen.Ae berhak memodifikasi, menambah, atau menghentikan fitur tertentu sewaktu-waktu demi penyempurnaan sistem secara keseluruhan. Perubahan fitur skala mayor akan diinformasikan melalui <em>dashboard</em> administrator.
          </RuleSection>

          <RuleSection number="12" title="Hak Kekayaan Intelektual">
            Seluruh desain visual, logo, merek dagang, struktur kode program, basis data, antarmuka pengguna (UI), dan teknologi di balik Mesen.Ae sepenuhnya merupakan hak kekayaan intelektual eksklusif milik kami. Anda tidak diperkenankan menggunakan aset merek kami untuk tujuan komersial di luar penggunaan resmi tanpa izin tertulis.
          </RuleSection>

        </div>



      </main>
    </div>
  );
}

/**
 * Komponen RuleSection
 * Desain Editorial: Tipografi bersih, nomor besar yang transparan namun menyala saat di-hover.
 * Tidak ada kotak (box) atau garis (line), hanya menggunakan Flexbox dan Spacing.
 */
function RuleSection({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  // Pad number with leading zero (e.g., "1" -> "01")
  const formattedNumber = number.padStart(2, '0');

  return (
    <div className="group flex flex-col sm:flex-row gap-2 sm:gap-8 items-start cursor-default">
      {/* Nomor Pasal Tipografi Besar */}
      <div className="text-4xl sm:text-5xl font-display font-black text-border group-hover:text-brand-blue/80 transition-colors duration-300 pt-1 shrink-0 select-none">
        {formattedNumber}
      </div>
      
      {/* Konten Text */}
      <div className="flex-1 mt-1">
        <h2 className="text-[20px] sm:text-[22px] font-bold text-text-primary mb-3 group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h2>
        <div className="text-[16px] sm:text-[17px] text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
