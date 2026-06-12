import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';
import PageHeader from './components/PageHeader';

export default function KebijakanPrivasi({ theme, toggleTheme }: { theme: 'dark' | 'light'; toggleTheme: () => void }) {
  const waLink = `https://wa.me/${import.meta.env.VITE_WA_NUMBER}?text=Halo%2C%20saya%20butuh%20bantuan%20terkait%20privasi%20data%20Mesen.Ae`;

  return (
    <div className="min-h-screen bg-bg-base text-text-primary transition-colors duration-300 font-sans pb-16 pt-24">
      <PageHeader theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden border-b border-border bg-gradient-to-b from-bg-card/20 to-transparent">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-emerald/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-brand-blue/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-emerald/10 text-[11px] font-bold tracking-widest uppercase mb-6 text-brand-emerald">
            <ShieldCheck size={14} />
            Kebijakan Privasi
          </div>
          <h1 className="font-display text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4">
            Komitmen Kami Menjaga <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-blue">
              Privasi & Keamanan Data
            </span>
          </h1>
          <p className="text-[17px] sm:text-[19px] text-text-secondary leading-relaxed max-w-[640px] mx-auto">
            Dibangun dengan dedikasi untuk UMKM Indonesia, Mesen.Ae menempatkan kepercayaan Anda sebagai prioritas utama. Kami berkomitmen menjaga setiap byte informasi operasional Anda.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-12">
        
        {/* Ringkasan Eksekutif - Elegan & Tanpa Kotak Kaku */}
        <div className="mb-12 py-5 px-6 sm:px-8 bg-brand-emerald/5 border-l-4 border-brand-emerald rounded-r-2xl flex flex-col sm:flex-row gap-5 items-start">
          <ShieldCheck className="text-brand-emerald shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-[18px] font-bold text-text-primary mb-2">Janji Privasi Mesen.Ae</h3>
            <p className="text-[16px] text-text-secondary leading-relaxed">
              Kami <strong>tidak akan pernah menjual data Anda</strong> kepada pihak ketiga. Seluruh data transaksi, pelanggan, dan menu Anda dikunci rapat menggunakan enkripsi modern. Pembayaran digital diproses langsung oleh <em>payment gateway</em> standar bank, dan Anda memiliki kendali penuh untuk mengakses, mengekspor, atau menghapus data bisnis Anda kapan saja.
            </p>
          </div>
        </div>

        {/* Daftar Pasal Privasi - Modern Editorial Style */}
        <div className="space-y-10 sm:space-y-12">
          
          <PolicySection number="1" title="Data yang Kami Kumpulkan">
            <p className="mb-4">Sebagai platform berbasis <em>cloud</em>, kami memerlukan beberapa informasi dasar agar sistem kasir dan dapur Anda dapat tersinkronisasi secara <em>real-time</em>:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h4 className="font-bold text-[16px] text-text-primary mb-1">Akun & Outlet</h4>
                <p className="text-[15px]">Nama pemilik, email, nomor WhatsApp outlet, nama kafe/resto, dan aset visual (logo) yang Anda unggah.</p>
              </div>
              <div>
                <h4 className="font-bold text-[16px] text-text-primary mb-1">Operasional & Transaksi</h4>
                <p className="text-[15px]">Daftar menu, Harga Pokok Penjualan (HPP), rekap pesanan, log <em>split-bill</em>, shift kasir, dan pergerakan stok.</p>
              </div>
              <div>
                <h4 className="font-bold text-[16px] text-text-primary mb-1">Data Pelanggan (Self-Order)</h4>
                <p className="text-[15px]">Nama pemesan di meja dan nomor WhatsApp (opsional) untuk pengiriman notifikasi masakan atau E-Receipt.</p>
              </div>
              <div>
                <h4 className="font-bold text-[16px] text-text-primary mb-1">Log Teknis</h4>
                <p className="text-[15px]">Alamat IP kasir, tipe browser, resolusi layar, dan MAC address dari printer Bluetooth yang terhubung.</p>
              </div>
            </div>
          </PolicySection>

          <PolicySection number="2" title="Penggunaan Data">
            <p className="mb-3">Informasi yang kami kumpulkan digunakan secara eksklusif untuk operasional bisnis UMKM Anda, antara lain:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-emerald mt-0.5">▪</span>
                <span>Memproses pesanan pelanggan dan mendistribusikannya ke <em>Kitchen Display System</em> (KDS).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-emerald mt-0.5">▪</span>
                <span>Merakit laporan penjualan otomatis (profit/loss) untuk membantu Anda mengambil keputusan bisnis.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-emerald mt-0.5">▪</span>
                <span>Mengirimkan struk digital belanja langsung ke WhatsApp pelanggan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-emerald mt-0.5">▪</span>
                <span>Mendeteksi dan mencegah <em>bug</em> sistem atau celah keamanan.</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection number="3" title="Enkripsi & Keamanan Tingkat Tinggi">
            Kami memprioritaskan keamanan data Anda. Arus komunikasi data antara aplikasi kasir dan server dikawal penuh oleh protokol enkripsi <strong>HTTPS/TLS</strong>. Sistem keamanan berbasis <em>Security Rules</em> di infrastruktur kami memastikan bahwa data suatu outlet (misal: Outlet A) mustahil dibaca, diakses, apalagi dimodifikasi oleh outlet lain atau pihak asing manapun tanpa hak otorisasi yang sah.
          </PolicySection>

          <PolicySection number="4" title="Infrastruktur Penyimpanan & Backup">
            Kami menyadari betapa krusialnya data transaksi bagi bisnis Anda. Seluruh database disimpan di infrastruktur <em>cloud</em> modern dengan latensi rendah. Sistem kami juga melakukan <em>backup</em> data (cadangan) secara berkala dan terenkripsi. Hal ini ditujukan untuk memitigasi hilangnya informasi akibat kondisi <em>force majeure</em> atau bencana pada <em>server</em>.
          </PolicySection>

          <PolicySection number="5" title="Integrasi Layanan Pihak Ketiga">
            <p className="mb-4">Untuk menyajikan fungsionalitas yang utuh, Mesen.Ae berintegrasi secara aman dengan penyedia layanan tepercaya:</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[16px] text-text-primary mb-1">Midtrans & Xendit (Payment Gateway)</h4>
                <p className="text-[15px]">Mesen.Ae <strong>tidak pernah menyimpan</strong> kredensial kartu kredit atau rekening Anda. Seluruh pembayaran QRIS/Virtual Account diproses langsung oleh sistem mereka yang telah bersertifikasi PCI-DSS.</p>
              </div>
              <div>
                <h4 className="font-bold text-[16px] text-text-primary mb-1">WhatsApp API & Email Provider</h4>
                <p className="text-[15px]">Digunakan murni sebagai saluran untuk mengirimkan E-Receipt, pesan verifikasi OTP, atau notifikasi pesanan ke pelanggan secara otomatis.</p>
              </div>
            </div>
          </PolicySection>

          <PolicySection number="6" title="Hak & Kendali Penuh Pengguna">
            <p className="mb-3">Kami percaya bahwa Anda adalah pemilik mutlak atas data bisnis Anda. Oleh karena itu, Anda memiliki wewenang untuk:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-emerald mt-0.5">▪</span>
                <span>Mengekspor laporan penjualan ke dalam format digital (Excel/PDF) kapan saja.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-emerald mt-0.5">▪</span>
                <span>Memperbarui, memodifikasi, atau menghapus informasi menu dan HPP.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-emerald mt-0.5">▪</span>
                <span>Menambah atau mencabut akses akun kasir milik staf Anda.</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection number="7" title="Kebijakan Penghapusan Data">
            Jika pada suatu saat Anda memutuskan untuk berhenti berlangganan, Anda dapat mengajukan penghapusan data secara permanen. Setelah memverifikasi identitas dan kepemilikan akun Anda, kami akan memusnahkan seluruh riwayat transaksi, data pelanggan, menu, dan stok Anda dari database utama maupun <em>backup cloud</em> kami dalam kurun waktu maksimal 14 (empat belas) hari kerja.
          </PolicySection>

        </div>



      </main>
    </div>
  );
}

/**
 * Komponen PolicySection (Sama dengan format RuleSection)
 * Tipografi bersih, nomor transparan yang menyala (hijau emerald) saat di-hover.
 */
function PolicySection({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  const formattedNumber = number.padStart(2, '0');

  return (
    <div className="group flex flex-col sm:flex-row gap-2 sm:gap-8 items-start cursor-default">
      {/* Nomor Pasal Tipografi Besar */}
      <div className="text-4xl sm:text-5xl font-display font-black text-border group-hover:text-brand-emerald/80 transition-colors duration-300 pt-1 shrink-0 select-none">
        {formattedNumber}
      </div>
      
      {/* Konten Text */}
      <div className="flex-1 mt-1">
        <h2 className="text-[20px] sm:text-[22px] font-bold text-text-primary mb-3 group-hover:text-brand-emerald transition-colors duration-300">
          {title}
        </h2>
        <div className="text-[16px] sm:text-[17px] text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
