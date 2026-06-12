import React from 'react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="pt-2 pb-12 md:pt-4 md:pb-16 bg-bg-base relative z-10 font-sans transition-colors duration-300 overflow-hidden -mt-px">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-200 dark:border-blue-500/20 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-500 animate-pulse"></span>
            Satu Platform
          </div>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-text-primary leading-tight tracking-tight mb-6 transition-colors">
            Aplikasi Berbeda untuk <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400">
              Kebutuhan Berbeda
            </span>
          </h2>
          <p className="text-[19px] text-text-secondary leading-relaxed transition-colors">
            Ekosistem terintegrasi yang dirancang khusus untuk mempermudah operasional bisnis F&B Anda dari hulu ke hilir.
          </p>
        </div>

        {/* Cards Grid (Semua memiliki struktur dan nilai yang sama) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Web Dashboard */}
          <div className="group relative flex flex-col bg-bg-card border border-border rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden z-10">

            
            {/* Elegant Floating Badge */}
            <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-600 dark:bg-blue-500 text-white z-20 shadow-none">
              Progresive Web App
            </div>

            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 dark:border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              
              <h3 className="font-display text-[19px] font-bold text-text-primary mb-2 transition-colors">Pusat Kendali Admin</h3>
              <p className="text-text-secondary text-[17px] leading-relaxed mb-6 transition-colors">
                Kelola master data menu, stok, bahan baku, meja, diskon, hingga laporan keuangan komprehensif dari satu tempat.
              </p>
            </div>

            <div className="relative z-10 pt-5 border-t border-border mt-auto transition-colors">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest block mb-3">Fitur Utama</span>
              <ul className="space-y-3">
                {['Drag & drop banner maker', 'Export laporan ke Excel/PDF', 'Manajemen multi-role staf'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-text-secondary transition-colors">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                      <CheckIcon className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Android Native (Favorit - Dibuat sejajar tanpa merusak layout) */}
          <div className="group relative flex flex-col bg-bg-card border border-border rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden z-10">

            
            {/* Elegant Floating Badge */}
            <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-600 dark:bg-blue-500 text-white z-20 shadow-none">
              Android App
            </div>

            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 dark:border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-all duration-300 group-hover:scale-110">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996m-11.046 0c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996M18.1 10.1l1.7-2.9c.1-.2 0-.5-.2-.6-.2-.1-.5 0-.6.2l-1.8 3c-1.6-.7-3.4-1.2-5.2-1.2s-3.6.5-5.2 1.2l-1.8-3c-.1-.2-.4-.3-.6-.2-.2.1-.3.4-.2.6l1.7 2.9C3.1 12.1 1 15.3 1 19.1h22c0-3.8-2.1-7-5.1-9z"/>
                </svg>
              </div>
              
              <h3 className="font-display text-[19px] font-bold text-text-primary mb-2 transition-colors">Kasir di Genggaman</h3>
              <p className="text-text-secondary text-[17px] leading-relaxed mb-6 transition-colors">
                Aplikasi React Native untuk tablet dan HP Android — dirancang khusus untuk kasir mobile dengan dukungan periferal lengkap.
              </p>
            </div>

            <div className="relative z-10 pt-5 border-t border-border mt-auto transition-colors">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest block mb-3">Fitur Utama</span>
              <ul className="space-y-3">
                {['Printer thermal BT/WiFi/USB', 'Scanner barcode via kamera', 'UI adaptif Tablet & HP', 'Sinkronisasi real-time', 'Mode offline pintar'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-text-secondary transition-colors">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                      <CheckIcon className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Progressive Web App */}
          <div className="group relative flex flex-col bg-bg-card border border-border rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden z-10">

            
            {/* Elegant Floating Badge */}
            <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-600 dark:bg-blue-500 text-white z-20 shadow-none">
              Web Dinamis
            </div>

            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 dark:border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-all duration-300 group-hover:scale-110">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              </div>
              
              <h3 className="font-display text-[19px] font-bold text-text-primary mb-2 transition-colors">Self-Order Pelanggan</h3>
              <p className="text-text-secondary text-[17px] leading-relaxed mb-6 transition-colors">
                Tanpa download aplikasi. Cukup scan QR, web app ringan terbuka dengan menu interaktif dan keranjang belanja.
              </p>
            </div>

            <div className="relative z-10 pt-5 border-t border-border mt-auto transition-colors">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest block mb-3">Fitur Utama</span>
              <ul className="space-y-3">
                {['Tanpa install (Scan & Go)', 'Lock nomor meja otomatis', 'Simpan riwayat pesanan'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-text-secondary transition-colors">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                      <CheckIcon className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Komponen helper untuk ikon centang
function CheckIcon({ className }) {
  return (
    <svg 
      className={`w-3.5 h-3.5 ${className}`} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth="3.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
