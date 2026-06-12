export default function Features() {
  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-amber">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      bgClass: 'bg-brand-amber-dim', borderClass: 'border-border-amber',
      title: 'Kasir & Manajemen Order Lanjutan',
      desc: 'Split bill, cicilan, open bill, dan hold order dalam genggaman. Sistem kustomisasi varian produk mendalam, Level Gula, Es, ekstra topping dengan kalkulasi harga otomatis saat checkout.',
      featured: true
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-emerald">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="5" y="5" width="3" height="3" fill="currentColor" stroke="none"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="16" y="5" width="3" height="3" fill="currentColor" stroke="none"/>
          <rect x="3" y="14" width="7" height="7"/>
          <rect x="5" y="16" width="3" height="3" fill="currentColor" stroke="none"/>
          <rect x="14" y="14" width="2" height="2" fill="currentColor" stroke="none"/>
          <rect x="18" y="14" width="3" height="2" fill="currentColor" stroke="none"/>
          <rect x="14" y="18" width="2" height="3" fill="currentColor" stroke="none"/>
          <rect x="18" y="18" width="2" height="2" fill="currentColor" stroke="none"/>
          <rect x="11" y="7" width="2" height="2" fill="currentColor" stroke="none"/>
          <rect x="11" y="11" width="2" height="2" fill="currentColor" stroke="none"/>
        </svg>
      ),
      bgClass: 'bg-brand-emerald-dim', borderClass: 'border-brand-emerald/30',
      title: 'Self-Order QR Pelanggan',
      desc: 'Halaman pemesanan mandiri. Pelanggan scan QR di meja, pilih menu, lalu pesanan masuk langsung ke sistem. Nomor meja terkunci otomatis dari kode QR.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <rect x="2" y="4" width="20" height="12" rx="2" ry="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
          <path d="M12 16v4M8 20h8"/>
        </svg>
      ),
      bgClass: 'bg-blue-500/10', borderClass: 'border-blue-500/30',
      title: 'Kitchen Display System',
      desc: 'Layar dapur dengan tampilan Grid yang bisa dikustomisasi dan di-toggle on/off. Dapur selalu tahu antrian masakan tanpa perlu teriak ke kasir.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
          <path d="M2 20h20"/>
          <path d="M5 10l7-6 5 4 5-3" strokeWidth="2"/>
        </svg>
      ),
      bgClass: 'bg-violet-500/10', borderClass: 'border-violet-500/30',
      title: 'Laporan Keuangan Komprehensif',
      desc: 'Laporan penjualan, laba-rugi, pengeluaran operasional, pajak, dan HPP dalam satu dasbor. Visualisasi grafik interaktif per hari/minggu/bulan — ekspor langsung ke PDF & Excel dengan format siap audit.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-emerald">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
          <polygon points="12 22.08 12 12 3 6.92 3 17.08 12 22.08"/>
          <polygon points="12 22.08 12 12 21 6.92 21 17.08 12 22.08"/>
          <polygon points="12 12 3 6.92 12 1.84 21 6.92 12 12"/>
        </svg>
      ),
      bgClass: 'bg-brand-emerald-dim', borderClass: 'border-brand-emerald/30',
      title: 'Manajemen Stok & HPP',
      desc: 'Pencatatan log pergerakan stok masuk/keluar dan riwayat fluktuasi Harga Pokok Penjualan secara akuntabel. Dengan kompresi gambar otomatis.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      ),
      bgClass: 'bg-[#25D366]/10', borderClass: 'border-[#25D366]/30',
      title: 'Notifikasi WhatsApp Pelanggan',
      desc: 'Saat pesanan siap, sistem otomatis kirim notifikasi langsung ke HP pelanggan via Web dan WhatsApp. Gantikan device dan layar pemanggil nomor antrian yang kuno dan ribet.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <polyline points="6 9 6 2 18 2 18 9"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <rect x="6" y="14" width="12" height="8"/>
        </svg>
      ),
      bgClass: 'bg-purple-500/10', borderClass: 'border-purple-500/30',
      title: 'Cetak Struk & E-Receipt',
      desc: 'Cetak struk thermal via Bluetooth/USB dengan header & footer kustom. Kirim struk to WhatsApp pelanggan dalam satu ketukan.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-amber">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      ),
      bgClass: 'bg-brand-amber-dim', borderClass: 'border-border-amber',
      title: 'Studio Banner Promosi',
      desc: 'Editor drag & drop visual untuk mendesain banner promosi toko langsung di browser. Multi-layer overlay, AI background remover, dan auto-sync presisi 100% ke tampilan pelanggan.',
    },
  ];

  return (
    <section id="features" className="pt-2 pb-10 md:pt-4 md:pb-14 relative z-10 bg-bg-base -mt-px">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-brand-amber mb-3 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-brand-amber before:rounded-full">Fitur Unggulan</div>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.2] tracking-tight mb-4">Semua yang Anda Butuhkan,<br/>Sudah <span className="text-brand-blue">Ada di Sini</span></h2>
          <p className="text-[19px] text-text-secondary max-w-[560px] leading-relaxed">Dari manajemen pesanan hingga laporan keuangan — satu platform, satu ekosistem, satu ketenangan pikiran.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, idx) => (
            <div key={idx} className={`relative overflow-hidden bg-bg-card border border-border rounded-[20px] p-7 transition-all duration-300 hover:border-white/10 hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-card group ${f.featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-amber/10 to-bg-card/60 border-border-amber' : ''}`}>
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-transparent transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-amber group-hover:to-transparent ${f.featured ? 'group-hover:to-brand-amber-light' : ''}`}></div>
              <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-5 border ${f.bgClass} ${f.borderClass}`}>{f.icon}</div>
              <div className="font-display text-[18px] font-bold mb-2">{f.title}</div>
              <div className="text-[17px] text-text-secondary leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
