import React, { useState, useEffect } from "react";
import { ImageWithFallback, getFallbackIcon, EASING } from "./JourneyHelpers";

// ============================================================================
// PHONE BOTTOM NAV
// ============================================================================
function BottomNav({ activeTab, theme, onTabChange }: { activeTab: string; theme: string; onTabChange?: (tab: string) => void }) {
  const isDark = theme === "dark";
  const tabs = [
    { id: "home", label: "Beranda", icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/> },
    { id: "menu", label: "Menu",    icon: <><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></> },
    { id: "pesanan", label: "Pesanan", icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>, badge: true },
    { id: "profil", label: "Profil", icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
  ];
  return (
    <div className={`absolute bottom-6 w-[88%] left-1/2 -translate-x-1/2 backdrop-blur-xl border rounded-full h-15 flex justify-around items-center px-2.5 shadow-2xl z-50 ${isDark ? "bg-[#0F172A]/95 border-[#334155]" : "bg-white/95 border-slate-200"}`}>
      {tabs.map(t => (
        <div key={t.id} className="relative" onClick={() => onTabChange?.(t.id)}>
          {activeTab === t.id ? (
            <div className="px-3.5 py-2 bg-brand-blue text-white rounded-full flex items-center gap-1.5 shadow-md shadow-brand-blue/30 select-none cursor-pointer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{t.icon}</svg>
              <span className="text-[10px] font-bold">{t.label}</span>
            </div>
          ) : (
            <div className={`p-2 cursor-pointer transition-colors ${isDark ? "text-[#64748B]" : "text-slate-400"}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{t.icon}</svg>
              {t.badge && <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border border-white flex items-center justify-center text-[7.5px] text-white font-bold">1</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// PHONE SCREENS
// ============================================================================
function PhoneScreenHome({ theme, currentTime }: { theme: string; currentTime: string }) {
  const isDark = theme === "dark";
  return (
    <div className={`absolute inset-0 flex flex-col ${isDark ? "bg-[#0F172A]" : "bg-slate-50"}`}>
      <div className="relative w-full h-[240px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=60"
          alt="Cafe Banner"
          className="w-full h-full object-cover"
          loading="lazy"
          fallbackIcon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue/70"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0F172A] opacity-90"></div>
        <div className="absolute top-16 left-6 right-6 flex justify-between items-center z-10">
          <h2 className="text-[22px] font-black tracking-tight text-white drop-shadow-md">Mesen.Ae Cafe</h2>
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md text-white border border-white/30">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </div>
        </div>
        <div className={`absolute -bottom-7 left-6 right-6 rounded-2xl p-4 flex items-center justify-between shadow-xl ${isDark ? "bg-[#1E293B] border border-[#334155]" : "bg-white border border-slate-200"}`}>
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-brand-blue/15 text-brand-blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div>
              <div className={`text-[11px] uppercase tracking-wider font-bold ${isDark ? "text-[#94A3B8]" : "text-slate-400"}`}>Nomor Meja</div>
              <div className={`text-[15px] font-black ${isDark ? "text-white" : "text-slate-800"}`}>Meja 04</div>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
        </div>
      </div>
      <div className="px-6 pt-12 flex-1 overflow-hidden">
        <h3 className={`text-[13px] font-bold mb-3 ${isDark ? "text-white" : "text-slate-800"}`}>Kategori Menu</h3>
        <div className="flex justify-between mb-6">
          {[
            { img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=100&q=60", name: "Makanan" },
            { img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=100&q=60", name: "Camilan" },
            { img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=100&q=60", name: "Minuman" },
            { img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=100&q=60", name: "Dessert" },
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-2xl overflow-hidden border-2 shadow-sm p-0.5 ${isDark ? "border-[#334155] bg-[#1E293B]" : "border-slate-200 bg-white"}`}>
                <ImageWithFallback src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-xl" loading="lazy" fallbackIcon={getFallbackIcon(cat.name, 20)}/>
              </div>
              <span className={`text-[10px] font-bold ${isDark ? "text-[#94A3B8]" : "text-slate-600"}`}>{cat.name}</span>
            </div>
          ))}
        </div>
        <h3 className={`text-[13px] font-bold mb-3 flex justify-between ${isDark ? "text-white" : "text-slate-800"}`}>
          Rekomendasi Chef <span className="text-[11.5px] text-brand-blue font-bold">Lihat Semua</span>
        </h3>
        <div className="flex flex-col gap-2">
          {[
            { name: "Nasi Goreng Spesial", price: "Rp 25.000", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=100&q=60", tag: "POPULER" },
            { name: "Ayam Bakar Madu", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=100&q=60" },
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-3 p-2 rounded-2xl border shadow-sm ${isDark ? "bg-[#1E293B] border-[#2E3B4E]" : "bg-white border-slate-100"}`}>
              <ImageWithFallback src={item.img} alt={item.name} className="w-12 h-12 rounded-xl object-cover shrink-0" loading="lazy" fallbackIcon={getFallbackIcon(item.name, 18)}/>
              <div className="flex-1 min-w-0">
                <div className={`text-[12.5px] font-bold truncate ${isDark ? "text-white" : "text-slate-800"}`}>{item.name}</div>
                <div className="text-brand-blue font-black text-[11px] mt-0.5">{item.price}</div>
              </div>
              {item.tag && <span className="bg-brand-blue/15 text-brand-blue text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0">{item.tag}</span>}
            </div>
          ))}
        </div>
      </div>
      <BottomNav activeTab="home" theme={theme}/>
    </div>
  );
}

function PhoneScreenMenu({ theme }: { theme: string }) {
  const isDark = theme === "dark";
  return (
    <div className={`absolute inset-0 flex flex-col ${isDark ? "bg-[#0F172A]" : "bg-slate-50"}`}>
      <div className={`pt-14 px-6 pb-4 border-b shadow-sm z-10 ${isDark ? "bg-[#0F172A] border-[#1E293B]" : "bg-white border-slate-200"}`}>
        <div className="flex gap-2 overflow-x-auto mb-4 scrollbar-hide px-6 -mx-6">
          <div className="px-3.5 py-1.5 bg-brand-blue text-white rounded-full text-[11px] font-bold shrink-0 shadow-md shadow-brand-blue/20">Semua Menu</div>
          <div className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border shrink-0 ${isDark ? "bg-[#1E293B] border-[#334155] text-white" : "bg-slate-50 border-slate-200 text-slate-600"}`}>🔥 Terlaris</div>
          <div className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border shrink-0 ${isDark ? "bg-[#1E293B] border-[#334155] text-[#94A3B8]" : "bg-slate-50 border-slate-200 text-slate-600"}`}>Promo</div>
        </div>
        <div className={`text-[11px] uppercase tracking-widest font-black ${isDark ? "text-[#64748B]" : "text-slate-400"}`}>20 Menu Tersedia</div>
      </div>
      <div className="p-4 flex-1 overflow-hidden flex flex-col gap-3">
        {[
          { name: "Nasi Goreng Spesial", desc: "Bumbu rempah asli, telur, kerupuk udang.", price: "Rp 25.000", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=150&q=60", added: true },
          { name: "Ayam Bakar Madu", desc: "Ayam bakar karamel madu disajikan dengan sambal.", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=150&q=60", added: false },
        ].map((item, i) => (
          <div key={i} className={`rounded-2xl overflow-hidden border flex p-2 items-center gap-3 shadow-sm ${isDark ? "bg-[#1E293B] border-[#2E3B4E]" : "bg-white border-slate-150"}`}>
            <ImageWithFallback src={item.img} className="w-14 h-14 shrink-0 rounded-xl object-cover" loading="lazy" fallbackIcon={getFallbackIcon(item.name, 22)}/>
            <div className="flex-1 min-w-0">
              <div className={`text-[13.5px] font-black leading-tight truncate ${isDark ? "text-white" : "text-slate-800"}`}>{item.name}</div>
              <div className={`text-[10.5px] leading-snug line-clamp-1 mt-0.5 ${isDark ? "text-[#94A3B8]" : "text-slate-400"}`}>{item.desc}</div>
              <div className="flex justify-between items-center mt-1.5">
                <span className="text-brand-blue font-black text-[13px]">{item.price}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.added ? "bg-brand-blue text-white shadow-md" : isDark ? "bg-[#0F172A] border border-[#2E3B4E] text-brand-blue" : "bg-white border border-slate-300 text-brand-blue"}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomNav activeTab="menu" theme={theme}/>
    </div>
  );
}

function PhoneScreenCheckout({ theme }: { theme: string }) {
  const isDark = theme === "dark";
  return (
    <div className={`absolute inset-0 flex flex-col overflow-hidden ${isDark ? "bg-[#0F172A]" : "bg-slate-50"}`}>
      <div className={`pt-14 pl-8 pr-6 pb-5 border-b flex items-center justify-between z-10 ${isDark ? "bg-[#0F172A] border-[#1E293B]" : "bg-white border-slate-200"}`}>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isDark ? "bg-[#1E293B] text-white" : "bg-slate-100 text-slate-700"}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg></div>
        <div className={`font-black text-[16px] tracking-tight ${isDark ? "text-white" : "text-slate-800"}`}>Checkout Order</div>
        <div className="w-9 h-9"/>
      </div>
      <div className="pl-8 pr-6 py-5 flex-1 overflow-y-auto scrollbar-hide pb-32">
        <div className={`text-[11px] font-bold tracking-widest uppercase mb-2.5 ${isDark ? "text-[#64748B]" : "text-slate-400"}`}>Lokasi Pesanan</div>
        <div className={`rounded-2xl border p-3.5 mb-6 flex items-center gap-3 shadow-sm overflow-hidden ${isDark ? "bg-[#1E293B]/60 border-[#334155]" : "bg-white border-slate-200"}`}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/15 text-brand-blue shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div className="min-w-0">
            <div className={`text-[14px] font-black ${isDark ? "text-white" : "text-slate-800"}`}>Meja 04</div>
            <div className="text-[11px] text-green-500 font-bold flex items-center gap-1"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> Terverifikasi QR</div>
          </div>
        </div>
        <div className={`text-[11px] font-bold tracking-widest uppercase mb-2.5 ${isDark ? "text-[#64748B]" : "text-slate-400"}`}>Ringkasan Pesanan</div>
        <div className={`rounded-2xl border p-2.5 mb-4 flex items-center gap-3 shadow-sm overflow-hidden ${isDark ? "bg-[#1E293B] border-[#2E3B4E]" : "bg-white border-slate-150"}`}>
          <ImageWithFallback src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=100&q=60" className="w-12 h-12 rounded-xl object-cover shrink-0" loading="lazy" fallbackIcon={getFallbackIcon("Nasi Goreng Spesial", 18)}/>
          <div className="flex-1 min-w-0">
            <div className={`text-[13px] font-bold truncate ${isDark ? "text-white" : "text-slate-800"}`}>Nasi Goreng Spesial</div>
            <div className="text-brand-blue text-[12px] font-black mt-0.5">Rp 25.000</div>
          </div>
          <div className={`flex items-center justify-center w-7 h-7 rounded-full border shadow-sm ${isDark ? "bg-[#0F172A] border-[#2E3B4E] text-white" : "bg-slate-50 border-slate-200 text-slate-800"} text-[11.5px] font-black`}>1x</div>
        </div>
        <div className={`text-[11px] font-bold tracking-widest uppercase mb-2.5 ${isDark ? "text-[#64748B]" : "text-slate-400"}`}>Metode Pembayaran</div>
        <div className={`rounded-3xl border p-4 flex items-center justify-between shadow-sm overflow-hidden ${isDark ? "bg-[#1E293B] border-brand-blue/50" : "bg-white border-brand-blue/40 ring-2 ring-brand-blue/20"}`}>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
            <div>
              <div className={`text-[14px] font-black ${isDark ? "text-white" : "text-slate-800"}`}>QRIS Otomatis</div>
              <div className={`text-[11px] ${isDark ? "text-[#94A3B8]" : "text-slate-500"}`}>Cepat & tanpa admin</div>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full border-[5px] border-brand-blue bg-white"></div>
        </div>
      </div>
      <div className={`absolute bottom-0 w-full border-t pl-8 pr-6 pb-6 pt-5 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] ${isDark ? "bg-[#0F172A] border-[#1E293B]" : "bg-white border-slate-200"}`}>
        <div className="flex justify-between items-center mb-5">
          <div className={`text-[14px] font-bold ${isDark ? "text-[#94A3B8]" : "text-slate-500"}`}>Total Bayar</div>
          <div className="text-brand-blue text-[22px] font-black tracking-tight">Rp 25.000</div>
        </div>
        <button className="w-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-black py-4 rounded-2xl text-[15px] flex justify-center items-center gap-2 shadow-[0_8px_25px_rgba(59,130,246,0.3)]">
          Bayar Sekarang <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}

function PhoneScreenQRIS({ theme, active }: { theme: string; active: boolean }) {
  const isDark = theme === "dark";
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setShowSuccess(true);
      }, 2400);
      return () => clearTimeout(timer);
    } else {
      setShowSuccess(false);
    }
  }, [active]);

  return (
    <div className={`absolute inset-0 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-all duration-500 z-[70] rounded-[36px] overflow-hidden ${active ? "opacity-100" : "opacity-0 pointer-events-none"} ${isDark ? "bg-[#020617]/80" : "bg-slate-900/40"}`}>
      
      {/* 1. QRIS CODE SCREEN */}
      <div className={`absolute w-full max-w-[280px] rounded-[18px] bg-white text-slate-800 shadow-2xl flex flex-col items-center overflow-hidden font-sans border border-slate-200 transform-gpu transition-all duration-500 ease-in-out ${active && !showSuccess ? "scale-100 translate-y-0 opacity-100 pointer-events-auto" : "scale-95 translate-y-4 opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0">
          <svg width="100%" height="100%" className="text-slate-400">
            <pattern id="qrisKawungPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="8" y="8" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <rect x="14" y="14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="0.8"/>
              <line x1="20" y1="0" x2="20" y2="8" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="20" y1="32" x2="20" y2="40" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="0" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="32" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#qrisKawungPattern)"/>
          </svg>
        </div>
        <div className="absolute left-0 top-[22%] w-[42px] h-[120px] bg-[#DA291C] pointer-events-none z-0" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}/>
        <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-[#DA291C] pointer-events-none z-0" style={{ clipPath: "polygon(100% 50%, 100% 100%, 50% 100%)" }}/>
        <div className="w-full pt-5 pb-5 px-4 flex flex-col items-center z-10 relative">
          <div className="w-full flex items-start justify-between mb-2 px-1">
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-black text-slate-900 tracking-tight">QRIS</span>
              <span className="text-[7px] font-black text-[#DA291C] tracking-tighter mt-[1px]">STANDAR</span>
            </div>
          </div>
          <div className="text-center mb-2">
            <div className="text-[13px] font-black text-slate-900 tracking-tight uppercase">MESEN.AE CAFE</div>
            <div className="text-[8px] text-slate-600 font-bold mt-0.5 tracking-wider">NMID : ID1021093287626</div>
          </div>
          <div className="bg-white p-2.5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] border-2 border-slate-800 w-[150px] h-[150px] flex items-center justify-center relative mb-4">
            <svg viewBox="0 0 33 33" className="w-full h-full fill-current text-slate-900">
              <path d="M0,0 h7 v7 h-7 z M1,1 h5 v5 h-5 z M2,2 h3 v3 h-3 z" fillRule="evenodd"/>
              <path d="M26,0 h7 v7 h-7 z M27,1 h5 v5 h-5 z M28,2 h3 v3 h-3 z" fillRule="evenodd"/>
              <path d="M0,26 h7 v7 h-7 z M1,27 h5 v5 h-5 z M2,28 h3 v3 h-3 z" fillRule="evenodd"/>
              <path d="M24,24 h5 v5 h-5 z M25,25 h3 v3 h-3 z M26,26 h1 v1 h-1 z" fillRule="evenodd"/>
              {(() => {
                const pixels = [];
                let seed = 45;
                const random = () => { const x = Math.sin(seed++) * 10000; return x - Math.floor(x); };
                for (let y = 0; y < 33; y++) {
                  for (let x = 0; x < 33; x++) {
                    if (x < 8 && y < 8) continue;
                    if (x > 24 && y < 8) continue;
                    if (x < 8 && y > 24) continue;
                    if (x >= 24 && x <= 28 && y >= 24 && y <= 28) continue;
                    if (random() > 0.45) pixels.push([x, y]);
                  }
                }
                return pixels.map(([px, py]) => <rect key={`${px}-${py}`} x={px} y={py} width="1" height="1"/>);
              })()}
            </svg>
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-slate-900"/>
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-900"/>
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-slate-900"/>
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-slate-900"/>
          </div>
          <div className="text-center w-full relative z-10">
            <div className="text-[18px] font-black text-slate-800 tracking-tight leading-none">Rp 25.000</div>
            <div className="text-[8px] tracking-widest uppercase font-black mt-2 text-slate-400 select-none">Powered by MesenAe</div>
          </div>
        </div>
      </div>

      {/* 2. SUCCESS SCREEN */}
      <div className={`absolute w-full max-w-[280px] rounded-[18px] bg-white text-slate-800 shadow-2xl flex flex-col items-center overflow-hidden font-sans border border-slate-200 transform-gpu transition-all duration-500 ease-out ${active && showSuccess ? "scale-100 translate-y-0 opacity-100 pointer-events-auto" : "scale-105 -translate-y-4 opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
          <svg width="100%" height="100%" className="text-emerald-950">
            <rect width="100%" height="100%" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none z-0" />
        <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-blue-500/10 rounded-full blur-xl pointer-events-none z-0" />

        <div className="w-full pt-6 pb-6 px-5 flex flex-col items-center z-10 relative">
          <div className={`w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow-[0_4px_12px_rgba(16,185,129,0.2)] transform transition-transform duration-700 ease-out ${showSuccess ? "scale-100 rotate-[360deg]" : "scale-50 rotate-0"}`}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>

          <h3 className="text-[17px] font-black text-slate-800 tracking-tight text-center leading-tight mb-1">
            Pembayaran Berhasil!
          </h3>
          <p className="text-[11px] text-slate-500 font-medium text-center mb-4 leading-normal">
            Verifikasi Instan via Mesen.Ae
          </p>

          <div className="w-full border-t border-dashed border-slate-200 my-1"></div>

          <div className="w-full py-3 flex flex-col gap-2.5 text-[12px] font-semibold text-slate-700">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-medium">Merchant</span>
              <span className="text-slate-800 font-bold">Mesen.Ae Cafe</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-medium">Nominal</span>
              <span className="text-slate-800 font-bold">Rp 25.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-medium">Metode</span>
              <span className="text-slate-800 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                QRIS Otomatis
              </span>
            </div>
          </div>

          <div className="w-full border-t border-dashed border-slate-200 my-1"></div>

          <div className="mt-4 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black tracking-wider uppercase flex items-center gap-1 shadow-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Lunas Terverifikasi
          </div>
        </div>
      </div>

    </div>
  );
}

function PhoneScreenTracking({ theme, showWA, phoneState }: { theme: string; showWA: boolean; phoneState: number }) {
  const isDark = theme === "dark";
  const activeStep = phoneState === 4 ? 1 : phoneState === 5 ? 2 : 1;

  const steps = [
    { label: "Pesanan Diterima", time: "09:42 WIB" },
    { label: "Dimasak", time: "Sedang diproses" },
    { label: "Pesanan Siap", time: "Siap disajikan" },
    { label: "Selesai", time: "Selesai" }
  ];

  return (
    <div className={`absolute inset-0 flex flex-col ${isDark ? "bg-[#0F172A]" : "bg-slate-50"}`}>
      <div className={`pt-14 px-6 pb-4 border-b ${isDark ? "border-[#1E293B] bg-[#0F172A]" : "border-slate-200 bg-white"}`}>
        <div className="flex flex-col items-center mb-5 mt-2">
          <div className="w-13 h-13 rounded-full bg-green-500 flex items-center justify-center text-white mb-3 shadow-[0_8px_20px_rgba(34,197,94,0.3)] animate-[pulse_2s_ease-in-out_infinite]"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div className={`font-black text-[18px] tracking-tight ${isDark ? "text-white" : "text-slate-800"}`}>Status Pesanan</div>
          <div className={`text-[12px] font-medium mt-0.5 ${isDark ? "text-[#94A3B8]" : "text-slate-500"}`}>Pembayaran berhasil terverifikasi</div>
        </div>
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-4 flex justify-between items-center shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-white/80 text-[10px] uppercase font-bold tracking-widest mb-0.5">ID Transaksi</div>
            <div className="text-white text-[15px] font-black font-mono tracking-wider">#TX-9904221</div>
          </div>
          <div className="text-[28px] relative z-10 opacity-90 drop-shadow-md">🧾</div>
        </div>
      </div>
      
      {/* Centered Timeline */}
      <div className="flex-1 p-6 flex flex-col justify-around relative">
        {/* Timeline Lines Wrapper */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] z-0" style={{ top: "52px", bottom: "52px" }}>
          {/* Background Vertical Line */}
          <div className={`w-full h-full rounded-full ${isDark ? "bg-[#1E293B]" : "bg-slate-200"}`} />
          {/* Active Line Fill */}
          <div 
            className="absolute top-0 left-0 w-full bg-brand-blue rounded-full transition-all duration-700 ease-in-out" 
            style={{ 
              height: activeStep === 0 
                ? "0%" 
                : activeStep === 1 
                  ? "33.333%" 
                  : activeStep === 2 
                    ? "66.666%" 
                    : "100%"
            }}
          />
        </div>

        <div className="flex flex-col justify-between h-full py-4 z-10">
          {steps.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isActive = idx === activeStep;
            
            return (
              <div key={idx} className="relative flex items-center justify-center w-full my-2">
                {/* Center Node */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center z-20 border-[3px] transition-all duration-500 ${
                    isActive 
                      ? "bg-brand-blue border-brand-blue text-white shadow-md shadow-brand-blue/30 scale-110" 
                      : isCompleted 
                        ? "bg-brand-blue border-brand-blue text-white" 
                        : isDark
                          ? "bg-[#0F172A] border-slate-700 text-slate-500"
                          : "bg-white border-slate-300 text-slate-400"
                  }`}
                >
                  {isCompleted ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4.5"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : isActive ? (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-40"/>
                  ) : null}
                  {!isCompleted && <span className="text-[10px] font-black z-10">{idx + 1}</span>}
                </div>

                {/* Left/Right Text Content to make it aligned nicely and clear */}
                <div className="w-full flex justify-between items-center px-2">
                  {/* Left Side: Step Name */}
                  <div className="w-[42%] text-right pr-4">
                    <span className={`font-black text-[12.5px] block ${
                      isActive 
                        ? "text-brand-blue" 
                        : isCompleted
                          ? isDark ? "text-slate-200" : "text-slate-800"
                          : isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  
                  {/* Center spacing spacer */}
                  <div className="w-8 shrink-0" />

                  {/* Right Side: Step Details/Time */}
                  <div className="w-[42%] text-left pl-4">
                    <span className={`text-[11px] block leading-tight font-medium ${
                      isActive 
                        ? "text-brand-blue font-bold" 
                        : isDark ? "text-slate-500" : "text-slate-400"
                    }`}>
                      {step.time}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Floating WhatsApp Notification */}
      <div className={`absolute top-12 left-1/2 -translate-x-1/2 w-[92%] rounded-2xl p-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-start gap-3.5 z-[100] transform-gpu transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${showWA ? "translate-y-0 opacity-100 scale-100" : "-translate-y-24 opacity-0 scale-90 pointer-events-none"} ${isDark ? "bg-[#1E293B]/95 backdrop-blur-md border border-[#334155]" : "bg-white/95 backdrop-blur-md border border-slate-200/50"}`}>
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shrink-0 shadow-md shadow-[#25D366]/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </div>
        <div className="flex-1 mt-0.5">
          <div className="flex justify-between items-center mb-0.5">
            <span className={`text-[13px] font-black ${isDark ? "text-white" : "text-slate-900"}`}>Mesen.Ae Info</span>
            <span className={`text-[10px] font-bold ${isDark ? "text-[#64748B]" : "text-slate-400"}`}>Sekarang</span>
          </div>
          <div className={`text-[12px] leading-snug font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Halo Kak! Nasi Goreng Spesial untuk Meja 04 <strong className={isDark ? "text-blue-400 font-black" : "text-brand-blue font-black"}>SIAP DISAJIKAN!</strong> Silakan dinikmati. 🍽️
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN PHONE OVERLAY COMPONENT
// ============================================================================
interface PhoneMockupProps {
  isPhoneVisible: boolean;
  phoneState: number;
  isVibrating: boolean;
  isDark: boolean;
  theme: "dark" | "light";
  currentTime: string;
  showWA: boolean;
}

export function PhoneMockup({
  isPhoneVisible,
  phoneState,
  isVibrating,
  isDark,
  theme,
  currentTime,
  showWA,
}: PhoneMockupProps) {
  return (
    <div
      className={`phone-mockup-container ${isPhoneVisible ? "visible" : ""}`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .phone-mockup-container {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.05);
          transition: transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
        }

        .phone-mockup-container.visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(0.82);
        }

        @media (max-width: 767px) {
          .phone-mockup-container.visible {
            transform: translate(-50%, -50%) scale(0.75);
          }
        }

        .phone-cursor-container {
          position: absolute;
          z-index: 100;
          pointer-events: none;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: top left;
        }

        .phone-cursor-ripple {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2.5px solid rgba(255, 255, 255, 0.8);
          background-color: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          opacity: 0;
          pointer-events: none;
        }

        /* State 0 (Home Screen / Step 3) */
        .phone-cursor-state-0 {
          animation: cursor-anim-state-0 4s infinite ease-in-out;
        }
        .phone-cursor-state-0 .phone-cursor-ripple {
          animation: ripple-anim-state-0 4s infinite ease-in-out;
        }

        @keyframes cursor-anim-state-0 {
          0% { left: 80%; top: 80%; opacity: 0; transform: scale(1); }
          10% { left: 80%; top: 80%; opacity: 1; transform: scale(1); }
          35% { left: 12%; top: 55%; opacity: 1; transform: scale(1); }
          40% { left: 12%; top: 55%; opacity: 1; transform: scale(0.85); }
          45% { left: 12%; top: 55%; opacity: 1; transform: scale(1); }
          70% { left: 46%; top: 91%; opacity: 1; transform: scale(1); }
          75% { left: 46%; top: 91%; opacity: 1; transform: scale(0.85); }
          80% { left: 46%; top: 91%; opacity: 1; transform: scale(1); }
          92% { left: 46%; top: 91%; opacity: 0; transform: scale(1); }
          100% { left: 80%; top: 80%; opacity: 0; }
        }

        @keyframes ripple-anim-state-0 {
          0%, 39% { transform: scale(0); opacity: 0; }
          40% { transform: scale(0.4); opacity: 1; }
          48% { transform: scale(2.2); opacity: 0; }
          49%, 74% { transform: scale(0); opacity: 0; }
          75% { transform: scale(0.4); opacity: 1; }
          83% { transform: scale(2.2); opacity: 0; }
          84%, 100% { transform: scale(0); opacity: 0; }
        }

        /* State 1 (Menu Screen / Step 4) */
        .phone-cursor-state-1 {
          animation: cursor-anim-state-1 4s infinite ease-in-out;
        }
        .phone-cursor-state-1 .phone-cursor-ripple {
          animation: ripple-anim-state-1 4s infinite ease-in-out;
        }

        @keyframes cursor-anim-state-1 {
          0% { left: 35%; top: 92%; opacity: 0; transform: scale(1); }
          15% { left: 35%; top: 92%; opacity: 1; transform: scale(1); }
          50% { left: 83%; top: 35%; opacity: 1; transform: scale(1); }
          55% { left: 83%; top: 35%; opacity: 1; transform: scale(0.85); }
          60% { left: 83%; top: 35%; opacity: 1; transform: scale(1); }
          85% { left: 83%; top: 35%; opacity: 1; transform: scale(1); }
          92% { left: 83%; top: 35%; opacity: 0; transform: scale(1); }
          100% { left: 80%; top: 80%; opacity: 0; }
        }

        @keyframes ripple-anim-state-1 {
          0%, 54% { transform: scale(0); opacity: 0; }
          55% { transform: scale(0.4); opacity: 1; }
          63% { transform: scale(2.2); opacity: 0; }
          64%, 100% { transform: scale(0); opacity: 0; }
        }

        /* State 2 (Checkout Screen / Step 5) */
        .phone-cursor-state-2 {
          animation: cursor-anim-state-2 4s infinite ease-in-out;
        }
        .phone-cursor-state-2 .phone-cursor-ripple {
          animation: ripple-anim-state-2 4s infinite ease-in-out;
        }

        @keyframes cursor-anim-state-2 {
          0% { left: 75%; top: 35%; opacity: 0; transform: scale(1); }
          10% { left: 75%; top: 35%; opacity: 1; transform: scale(1); }
          45% { left: 50%; top: 92%; opacity: 1; transform: scale(1); }
          50% { left: 50%; top: 92%; opacity: 1; transform: scale(0.85); }
          55% { left: 50%; top: 92%; opacity: 1; transform: scale(1); }
          90% { left: 50%; top: 92%; opacity: 0; transform: scale(1); }
          100% { left: 50%; top: 50%; opacity: 0; }
        }

        @keyframes ripple-anim-state-2 {
          0%, 49% { transform: scale(0); opacity: 0; }
          50% { transform: scale(0.4); opacity: 1; }
          58% { transform: scale(2.2); opacity: 0; }
          59%, 100% { transform: scale(0); opacity: 0; }
        }
      ` }} />
      {/* PHONE FRAME */}
      <div
        className={`relative w-[340px] h-[650px] rounded-[48px] border-[12px] overflow-hidden transform-gpu pointer-events-auto
          ${isVibrating ? "animate-[vibrate_0.1s_ease-in-out_infinite]" : ""}
          ${isDark
            ? "bg-[#0F172A] border-[#0B1120] ring-1 ring-[#1E293B] shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
            : "bg-slate-50 border-slate-800 ring-1 ring-slate-300 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.5)]"
          }`}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-[60] flex items-center justify-between px-3 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B]/80"/>
          <div className="w-3 h-3 rounded-full bg-blue-900/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1 h-1 bg-white/40 rounded-full blur-[0.5px]"/>
          </div>
        </div>

        {/* INNER SCREEN CONTAINER - Fixes rounded corner clipping issue with absolute children & transforms on mobile */}
        <div 
          className="absolute inset-0 overflow-hidden rounded-[36px] bg-transparent z-10 isolate"
          style={{
            transform: "translate3d(0, 0, 0)",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          {/* Status bar */}
          <div className={`absolute top-4 w-full px-7 flex justify-between items-center text-[11px] font-bold z-50 ${isDark ? "text-white/90" : "text-slate-800"}`}>
            <span className="tracking-wider">{currentTime}</span>
            <div className="flex gap-1.5 items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
              <svg width="16" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12h20v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/><path d="M2 8h20a2 2 0 01-2-2H4a2 2 0 01-2 2z"/></svg>
            </div>
          </div>

          {/* Home indicator */}
          <div className={`absolute bottom-2.5 left-1/2 -translate-x-1/2 w-36 h-1.5 rounded-full z-50 ${isDark ? "bg-white/40" : "bg-slate-800"}`}/>

          {/* SCREEN 0 — HOME */}
          <div className={`absolute inset-0 transition-all duration-500 ease-out z-${phoneState === 0 ? "40" : "0"} ${phoneState === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}>
            <PhoneScreenHome theme={theme} currentTime={currentTime}/>
          </div>

          {/* SCREEN 1 — MENU */}
          <div className={`absolute inset-0 transition-all duration-500 ease-out z-${phoneState === 1 ? "40" : "0"} ${phoneState === 1 ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95 pointer-events-none"}`}>
            <PhoneScreenMenu theme={theme}/>
          </div>

          {/* SCREEN 2 — CHECKOUT */}
          <div className={`absolute inset-0 transition-all duration-500 ease-in-out z-${phoneState === 2 ? "40" : "0"} ${phoneState === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}`}>
            <PhoneScreenCheckout theme={theme}/>
          </div>

          {/* SCREEN 3 — QRIS */}
          <PhoneScreenQRIS theme={theme} active={phoneState === 3}/>

          {/* SCREEN 4 & 5 — TRACKING (with floating WA) */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out z-${(phoneState === 4 || phoneState === 5) ? "40" : "0"} ${(phoneState === 4 || phoneState === 5) ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <PhoneScreenTracking theme={theme} showWA={showWA} phoneState={phoneState}/>
          </div>

          {/* CUSTOM ANIMATED INTERACTIVE CURSOR */}
          {(phoneState === 0 || phoneState === 1 || phoneState === 2) && (
            <div className={`phone-cursor-container phone-cursor-state-${phoneState}`}>
              <div className="phone-cursor-ripple" />
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
                style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" }}
              >
                <path
                  d="M11.5 2C10.67 2 10 2.67 10 3.5V11.27L9.34 11.05C8.36 10.72 7.28 11.12 6.78 12.01L5 15.08L9.77 20.08C10.23 20.56 10.88 20.83 11.54 20.83H18.5C19.74 20.83 20.78 19.89 20.96 18.67L21.78 13.08C21.96 11.83 21.08 10.7 19.82 10.54L15 10V3.5C15 2.67 14.33 2 13.5 2H11.5Z"
                  fill="white"
                  stroke="#1E293B"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
