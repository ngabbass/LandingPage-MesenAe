import { useEffect, useState, useRef } from 'react';

export default function Hero({ theme, onOpenDemo }: { theme: 'dark' | 'light'; onOpenDemo: () => void }) {
  // Data statis untuk angka besar di atas
  const mockupData = [
    { revenue: 'Rp 610.500', profit: 'Rp 170.000', trx: '7 TRANSAKSI' },
    { revenue: 'Rp 825.000', profit: 'Rp 245.000', trx: '12 TRANSAKSI' },
    { revenue: 'Rp 1.240.000', profit: 'Rp 380.000', trx: '18 TRANSAKSI' },
    { revenue: 'Rp 1.550.000', profit: 'Rp 490.000', trx: '24 TRANSAKSI' },
  ];
  
  // Data simulasi pesanan masuk untuk "Transaksi Terakhir"
  const incomingOrders = [
    { name: 'Nasi Goreng Spesial', price: 'Rp 108.900', status: 'TUNAI', color: '#10B981', icon: '🍚' },
    { name: 'Es Kopi Susu x2', price: 'Rp 36.000', status: 'QRIS', color: '#3B82F6', icon: '☕' },
    { name: 'Mie Goreng Gila', price: 'Rp 25.000', status: 'TUNAI', color: '#10B981', icon: '🍝' },
    { name: 'Paket Ayam Geprek', price: 'Rp 35.000', status: 'QRIS', color: '#3B82F6', icon: '🍗' },
    { name: 'Ice Americano', price: 'Rp 18.000', status: 'QRIS', color: '#3B82F6', icon: '🧊' },
    { name: 'Dimsum Udang', price: 'Rp 22.000', status: 'TUNAI', color: '#10B981', icon: '🥟' },
  ];

  const [rvIdx, setRvIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [timeInfo, setTimeInfo] = useState({ greeting: 'Selamat Malam', time: '18:24:07' });
  
  // State untuk Transaksi Live
  const [liveTransactions, setLiveTransactions] = useState([
    { id: 't1', ...incomingOrders[0], time: '18:20' },
    { id: 't2', ...incomingOrders[1], time: '18:15' }
  ]);

  const cardRef = useRef<HTMLDivElement>(null);

  // Efek rotasi angka mockup & update transaksi live
  useEffect(() => {
    const interval = setInterval(() => {
      setRvIdx((prev) => (prev + 1) % mockupData.length);
      
      const now = new Date();
      const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace(/\./g, ':');
      const randomOrder = incomingOrders[Math.floor(Math.random() * incomingOrders.length)];
      
      setLiveTransactions(prev => {
        const updated = [{ id: `t-${Date.now()}`, ...randomOrder, time: timeStr }, ...prev];
        return updated.slice(0, 2); 
      });
      
    }, 5600);
    return () => clearInterval(interval);
  }, []);

  // Jam & Sapaan Dinamis
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      
      let greeting = 'Selamat Malam';
      if (hours >= 4 && hours < 11) greeting = 'Selamat Pagi';
      else if (hours >= 11 && hours < 15) greeting = 'Selamat Siang';
      else if (hours >= 15 && hours < 18) greeting = 'Selamat Sore';

      const timeString = now.toLocaleTimeString('id-ID', { 
        hour: '2-digit', minute: '2-digit', second: '2-digit' 
      }).replace(/\./g, ':');
      
      setTimeInfo({ greeting, time: timeString });
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handler interaktif 3D Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y / rect.height) - 0.5) * -3; 
    const rotateY = ((x / rect.width) - 0.5) * 3;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="relative w-full lg:min-h-[90vh] flex items-center pt-32 pb-20 z-10 overflow-hidden">
      


      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (TEXT) ================= */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-in-up w-full max-w-xl mx-auto lg:mx-0">
            
            <div className="group inline-flex items-center gap-2.5 bg-brand-amber/10 border border-brand-amber/30 hover:border-brand-amber/60 backdrop-blur-md rounded-full px-4 py-2 text-[12px] font-bold text-brand-amber tracking-wider uppercase mb-6 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-amber"></span>
              </span>
              Point Of Sale & Self-Order
            </div>

            <h1 className="font-display text-[clamp(32px,5.5vw,64px)] font-black leading-[1.1] tracking-tight mb-6 text-text-primary">
              Restoran Modern<br />
              Butuh Sistem yang<br />
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-900 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-200 bg-clip-text text-transparent">
                  Sama Modernnya.
                </span>
                <svg className="absolute w-full h-[10px] sm:h-[12px] -bottom-1 left-0 text-brand-amber/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Desktop explanation */}
            <p className="hidden md:block text-[19px] text-text-secondary leading-relaxed mb-10 w-full">
              Mesen.Ae — Aplikasi Point Of Sale, Self-Order QR, Kitchen Display System, dan manajemen F&B lengkap dalam satu ekosistem. Sinkron real-time, jalan offline, dan se-smooth pengalaman makan di sana.
            </p>
            {/* Mobile explanation */}
            <p className="block md:hidden text-[17px] text-text-secondary leading-relaxed mb-10 w-full max-w-[340px]">
              Mesen.Ae — Aplikasi Point of Sale, Self Order QR, & Manajemen Dapur. Praktis, sinkron otomatis, dan mudah digunakan.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full justify-center lg:justify-start">
              <button 
                onClick={onOpenDemo} 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-display text-[15px] font-bold bg-brand-amber text-white transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 relative z-10">
                  <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
                  <path d="M12 12c2.5-2.5 5-2.5 5-2.5s0 2.5-2.5 5l-2.5-2.5z" />
                  <path d="M21 3s-6.5.5-10 4.5a18.2 18.2 0 0 0-3.8 6.4L3 18l3 3 4.1-4.2a18.2 18.2 0 0 0 6.4-3.8C20.5 9.5 21 3 21 3z" />
                </svg>
                <span className="relative z-10">Coba Demo Gratis</span>
              </button>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold border border-border/80 text-text-secondary bg-bg-card/50 backdrop-blur-md transition-all duration-300 hover:border-brand-amber/50 hover:bg-bg-card hover:text-text-primary hover:-translate-y-1 shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-brand-amber">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Lihat Semua Fitur
              </a>
            </div>

            {/* Fitur Highlight */}
            <div className="flex flex-row gap-2.5 min-[360px]:gap-4 min-[400px]:gap-6 lg:border-t border-border/50 lg:pt-8 w-full justify-between sm:justify-start">
              <div className="text-left">
                <div className="font-display text-[13px] min-[360px]:text-[14px] sm:text-[15px] font-bold text-text-primary hover:text-brand-amber transition-colors leading-tight">Real-time</div>
                <div className="text-[10px] min-[360px]:text-[11.5px] sm:text-[13px] text-text-muted mt-0.5 font-medium leading-tight">Sync Dapur & Kasir</div>
              </div>
              <div className="text-left border-l border-border/40 pl-2.5 min-[360px]:pl-4 min-[400px]:pl-6">
                <div className="font-display text-[13px] min-[360px]:text-[14px] sm:text-[15px] font-bold text-text-primary hover:text-brand-amber transition-colors leading-tight">Multi-Role</div>
                <div className="text-[10px] min-[360px]:text-[11.5px] sm:text-[13px] text-text-muted mt-0.5 font-medium leading-tight">Admin, Staf, Dapur</div>
              </div>
              <div className="text-left border-l border-border/40 pl-2.5 min-[360px]:pl-4 min-[400px]:pl-6">
                <div className="font-display text-[13px] min-[360px]:text-[14px] sm:text-[15px] font-bold text-text-primary hover:text-brand-amber transition-colors leading-tight">Offline</div>
                <div className="text-[10px] min-[360px]:text-[11.5px] sm:text-[13px] text-text-muted mt-0.5 font-medium leading-tight">Auto Local Cache</div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT (MOCKUP 3D - FIXED LAYOUT) ================= */}
          {/* Gunakan relative parent dengan min-height agar layout aman dari pergeseran absolute */}
          <div className="relative block perspective-1000 animate-fade-in-up-delay w-full flex justify-center items-center mt-12 lg:mt-0 min-h-[400px] sm:min-h-[500px] lg:min-h-[580px]">
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full scale-90 pointer-events-none"></div>

            {/* WRAPPER UTAMA UNTUK SCALING 
              Kita meletakkan properti scaling DI SINI, sementara layout di dalamnya fix 560px.
              Ini memastikan posisi widget (atas/bawah) terkunci sempurna baik di desktop maupun mobile. 
            */}
            <div className="absolute transform-gpu origin-center scale-[0.55] min-[380px]:scale-[0.6] min-[450px]:scale-[0.7] sm:scale-[0.85] lg:scale-100 transition-all duration-300 w-[560px] flex justify-center items-center z-10">

              <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                }}
                className={`border rounded-2xl overflow-hidden shadow-2xl relative z-10 transform-style-3d flex font-sans w-full bg-red max-w-[560px] mx-auto ${theme === 'light' ? 'bg-white border-slate-200/80 shadow-slate-200/50' : 'bg-[#0B1120] border-[#1E293B] shadow-black/50'}`}
              >
                
                {/* === MINI SIDEBAR === */}
                <div className="w-[72px] bg-[#0F172A] border-r border-[#1E293B] flex flex-col items-center py-5 shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#1E293B] border border-[#334155] flex items-center justify-center text-brand-amber mb-5 shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                  </div>
                  <div className="flex flex-col gap-1.5 w-full px-3 items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 text-[#3B82F6] flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)] shrink-0 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
                    </div>
                    {/* Shopping Cart Icon (Sebelumnya) */}
                    <div className="w-10 h-10 rounded-xl text-[#64748B] hover:text-white hover:bg-[#1E293B]/50 transition-colors flex items-center justify-center shrink-0 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </div>
                    {/* Clock/History Icon (Sebelumnya) */}
                    <div className="w-10 h-10 rounded-xl text-[#64748B] hover:text-white hover:bg-[#1E293B]/50 transition-colors flex items-center justify-center shrink-0 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    
                    <div className="w-6 border-b border-[#1E293B] shrink-0 my-1"></div>
                    
                    {/* Wallet Icon */}
                    <div className="w-10 h-10 rounded-xl text-[#64748B] hover:text-white hover:bg-[#1E293B]/50 transition-colors flex items-center justify-center shrink-0 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2v2"></path><path d="M3 5v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4z"></path></svg>
                    </div>
                    {/* Voucher Banner Icon */}
                    <div className="w-10 h-10 rounded-xl text-[#64748B] hover:text-white hover:bg-[#1E293B]/50 transition-colors flex items-center justify-center shrink-0 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><line x1="13" y1="5" x2="13" y2="19" strokeDasharray="2 2"></line></svg>
                    </div>
                    {/* Settings Icon */}
                    <div className="w-10 h-10 rounded-xl text-[#64748B] hover:text-white hover:bg-[#1E293B]/50 transition-colors flex items-center justify-center shrink-0 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </div>
                  </div>
                </div>

                {/* === MAIN DASHBOARD CONTENT === */}
                <div className={`flex-1 flex flex-col min-h-[460px] ${theme === 'light' ? 'bg-[#F8FAFC]' : ''}`}>
                  
                  {/* Header Topbar */}
                  <div className={`h-[64px] border-b flex items-center justify-between px-6 shrink-0 ${theme === 'light' ? 'border-slate-200' : 'border-[#1E293B]'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${theme === 'light' ? 'bg-slate-100 text-slate-500' : 'bg-[#1E293B] text-[#94A3B8]'}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
                      </div>
                      <div>
                        <h3 className={`font-bold text-[14px] leading-tight ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Dashboard</h3>
                        <p className={`text-[12px] ${theme === 'light' ? 'text-slate-400' : 'text-[#64748B]'}`}>Ringkasan performa penjualan real-time.</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                  </div>

                  {/* Dashboard Body */}
                  <div className="p-6 flex flex-col gap-5 overflow-hidden">
                    
                    {/* Greeting & Clock */}
                    <div className="flex justify-between items-end">
                      <div>
                        <div className={`text-[13px] flex items-center gap-1.5 mb-1 ${theme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                          {timeInfo.greeting},
                        </div>
                        <div className={`font-extrabold text-[19px] ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Administrator</div>
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg flex items-center gap-2 border shadow-sm ${theme === 'light' ? 'bg-white border-slate-200 text-slate-700' : 'bg-[#1E293B]/50 border-[#334155]/50 text-[#E2E8F0]'}`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme === 'light' ? '#64748b' : '#64748B'} strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <div className={`text-[13px] font-mono font-medium ${theme === 'light' ? 'text-slate-800' : 'text-[#E2E8F0]'}`}>
                          {timeInfo.time} <span className={`text-[10px] ${theme === 'light' ? 'text-slate-400' : 'text-[#94A3B8]'}`}>WIB</span>
                        </div>
                      </div>
                    </div>

                    {/* Cards Row */}
                    <div className="grid grid-cols-5 gap-4">
                      {/* Blue Card - Penjualan */}
                      <div className="col-span-3 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl p-5 shadow-[0_4px_20px_rgba(59,130,246,0.25)] relative overflow-hidden">
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-1.5 text-blue-100 text-[12px] font-medium mb-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="18" y="3" width="4" height="18"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect></svg>
                            Penjualan Hari Ini
                          </div>
                          <div key={rvIdx} className="text-white font-display font-bold text-[28px] tracking-tight animate-slide-up-fade drop-shadow-sm">
                            {mockupData[rvIdx].revenue}
                          </div>
                          <div key={`trx-${rvIdx}`} className="inline-block mt-1.5 px-2.5 py-1 bg-white/20 rounded text-[10px] font-bold text-white tracking-wider animate-slide-up-fade">
                            {mockupData[rvIdx].trx}
                          </div>
                        </div>
                      </div>

                      {/* Light/Dark Card - Profit */}
                      <div className={`col-span-2 border rounded-xl p-5 flex flex-col justify-center transition-all duration-300 ${theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#1E293B]/60 border-[#334155]'}`}>
                        <div className={`flex items-center gap-1.5 text-[11px] font-bold mb-1.5 uppercase tracking-wider ${theme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                          Profit Bersih
                        </div>
                        <div key={`profit-${rvIdx}`} className={`font-display font-bold text-[22px] tracking-tight animate-slide-up-fade ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                          {mockupData[rvIdx].profit}
                        </div>
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                          <span className={`text-[10px] font-medium ${theme === 'light' ? 'text-slate-400' : 'text-[#64748B]'}`}>Telah dipotong modal</span>
                        </div>
                      </div>
                    </div>

                    {/* ================= TRANSAKSI TERAKHIR ================= */}
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-3.5">
                        <div className={`flex items-center gap-2 text-[13px] font-bold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                          Transaksi Terakhir
                        </div>
                        <div className="text-[12px] text-[#3B82F6] font-semibold cursor-pointer hover:underline">Lihat Semua ›</div>
                      </div>
                      
                      <div className="flex flex-col gap-2.5">
                        {liveTransactions.map((trx) => (
                          <div key={trx.id} className={`border rounded-xl p-3 flex items-center justify-between animate-slide-down-fade transition-all duration-300 ${theme === 'light' ? 'bg-white border-slate-200/80 shadow-sm' : 'bg-[#1E293B]/40 border-[#334155]/60'}`}>
                            <div className="flex items-center gap-3.5">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-[18px] shadow-inner border ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-[#0F172A] border-[#1E293B]'}`}>
                                {trx.icon}
                              </div>
                              <div>
                                <div className={`text-[13px] font-bold mb-0.5 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{trx.name}</div>
                                <div className="text-[12px] font-bold text-[#3B82F6]">{trx.price}</div>
                              </div>
                            </div>
                            <div className="text-right flex flex-col items-end">
                              <div className={`text-[11px] font-mono mb-1.5 px-1.5 py-0.5 rounded border ${theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-500' : 'bg-[#0F172A] border-[#1E293B] text-[#64748B]'}`}>{trx.time}</div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: trx.color }}></span>
                                <span className={`text-[10px] font-bold tracking-wider ${theme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'}`}>{trx.status}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* === FLOATING WIDGETS === 
                  Catatan: Semua ukuran, text, dan posisi sekarang bersifat statis/absolut terhadap dimensi 560px.
                  Akan mengecil di mobile secara simetris dan rapi karena terbungkus parent ber-scale.
              */}
              
              {/* WhatsApp Notification Widget (Bottom Left) */}
              <div 
                style={{ transform: `translateZ(30px)` }}
                className={`absolute -bottom-8 -left-8 border rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[0_15px_35px_rgba(0,0,0,0.15)] animate-[float_4s_ease-in-out_infinite] z-20 font-sans transition-colors duration-300 ${theme === 'light' ? 'bg-white border-slate-200/80 text-slate-800' : 'bg-[#1E293B] border-[#334155] text-white'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-[24px] shrink-0 shadow-md shadow-green-500/30">💬</div>
                <div>
                  <div className={`text-[12px] font-bold mb-1 ${theme === 'light' ? 'text-[#25D366]' : 'text-[#25D366]'}`}>Pesanan Masuk</div>
                  <div className={`text-[15px] font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Pesanan Meja 4 Andi</div>
                </div>
              </div>

              {/* Kitchen Display Widget (Top Right) */}
              <div 
                style={{ transform: `translateZ(25px)` }}
                className={`absolute -top-8 -right-8 border rounded-2xl px-6 py-5 min-w-[200px] shadow-[0_15px_35px_rgba(0,0,0,0.15)] animate-[float_5s_ease-in-out_infinite_reverse] z-20 font-sans transition-colors duration-300 ${theme === 'light' ? 'bg-white border-slate-200/80 text-slate-800' : 'bg-[#1E293B] border-[#334155] text-white'}`}
              >
                <div className={`text-[12px] font-mono mb-3 uppercase tracking-wide font-bold ${theme === 'light' ? 'text-slate-500' : 'text-[#64748B]'}`}>🍳 Dapur (Kitchen)</div>
                <div className={`flex items-center gap-2.5 text-[14px] font-semibold mb-2.5 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${theme === 'light' ? 'bg-blue-500' : 'bg-amber-500'}`}></span> Es Kopi Susu ×2
                </div>
                <div className={`flex items-center gap-2.5 text-[14px] font-semibold mb-2.5 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-blue-500"></span> Nasi Goreng ×1
                </div>
                <div className={`flex items-center gap-2.5 text-[14px] font-semibold opacity-50 line-through ${theme === 'light' ? 'text-slate-400' : 'text-[#64748B]'}`}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-emerald-500"></span> Roti Bakar ×1 ✓
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1200px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateZ(30px); }
          50% { transform: translateY(-8px) translateZ(30px); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up-fade {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down-fade {
          0% { opacity: 0; transform: translateY(-15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up-delay { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .animate-slide-up-fade { animation: slide-up-fade 0.4s ease-out forwards; }
        .animate-slide-down-fade { animation: slide-down-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
}
