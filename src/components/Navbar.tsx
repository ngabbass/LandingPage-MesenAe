import { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu or download modal is open
  useEffect(() => {
    if (mobileOpen || showDownloadModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen, showDownloadModal]);

  const apkLink = import.meta.env.VITE_APK_LINK || '#';
  const waLink = `https://wa.me/${import.meta.env.VITE_WA_NUMBER}?text=Halo%2C%20saya%20tertarik%20dengan%20Mesen.Ae%21`;

  // WhatsApp SVG Icon Component
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[210] flex items-center justify-between transition-all duration-500 ease-in-out rounded-full ${
          scrolled
            ? 'top-4 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1000px] px-6 py-2.5'
            : 'top-6 w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] max-w-[1100px] px-6 py-3.5'
        } ${
          mobileOpen
            ? 'bg-transparent border-transparent shadow-none'
            : scrolled
            ? 'bg-bg-card/90 border border-transparent shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl'
            : 'bg-bg-card/40 border border-white/10 shadow-none backdrop-blur-xl'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 font-display font-extrabold text-[20px] group">
          <img 
            src="/assets/mesenae.png" 
            alt="Mesen.Ae" 
            className="w-8 h-8 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" 
          />
          <span className="text-text-primary">
            Mesen<span className="text-brand-blue">.Ae</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {[
            { label: 'Cara Kerja', href: '#cara-kerja-story' },
            { label: 'Fitur', href: '#features' },
            { label: 'Ekosistem', href: '#ecosystem' },
            { label: 'Pembayaran', href: '#payment' },
            { label: 'FAQ', href: '#faq' }
          ].map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-amber after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => setShowDownloadModal(true)} 
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold border border-border/80 text-text-secondary hover:text-text-primary hover:border-white/30 hover:bg-white/5 transition-all duration-300 focus:outline-none"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#3DDC84]">
              <path d="M17.523 15.3c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996m-11.046 0c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996M18.1 10.1l1.7-2.9c.1-.2 0-.5-.2-.6-.2-.1-.5 0-.6.2l-1.8 3c-1.6-.7-3.4-1.2-5.2-1.2s-3.6.5-5.2 1.2l-1.8-3c-.1-.2-.4-.3-.6-.2-.2.1-.3.4-.2.6l1.7 2.9C3.1 12.1 1 15.3 1 19.1h22c0-3.8-2.1-7-5.1-9z"/>
            </svg>
            APK
          </button>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noreferrer" 
            className="group px-4 py-1.5 rounded-full text-[12px] font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 flex items-center gap-2"
          >
            <WhatsAppIcon className="w-[14px] h-[14px]" />
            Hubungi
          </a>
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/30 hover:bg-white/5 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border transition-all duration-300 relative z-[210] focus:outline-none ${
            mobileOpen 
              ? 'bg-white/10 border-white/15 hover:bg-white/20' 
              : 'bg-white/5 border-white/10'
          }`} 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            /* Three vertical dots when open */
            <span className="flex flex-col items-center gap-[4px]">
              <span className="w-[4px] h-[4px] bg-text-primary rounded-full transition-all duration-300"></span>
              <span className="w-[4px] h-[4px] bg-text-primary rounded-full transition-all duration-300"></span>
              <span className="w-[4px] h-[4px] bg-text-primary rounded-full transition-all duration-300"></span>
            </span>
          ) : (
            /* Three horizontal bars when closed */
            <span className="flex flex-col items-center gap-[5px]">
              <span className="w-5 h-[2px] bg-text-primary rounded-sm transition-all duration-300"></span>
              <span className="w-5 h-[2px] bg-text-primary rounded-sm transition-all duration-300"></span>
              <span className="w-5 h-[2px] bg-text-primary rounded-sm transition-all duration-300"></span>
            </span>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-bg-base/95 backdrop-blur-2xl z-[200] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {[
          { label: 'Cara Kerja', href: '#cara-kerja-story' },
          { label: 'Fitur', href: '#features' },
          { label: 'Ekosistem', href: '#ecosystem' },
          { label: 'Pembayaran', href: '#payment' },
          { label: 'FAQ', href: '#faq' }
        ].map((item, index) => (
          <a 
            key={item.label}
            href={item.href} 
            onClick={() => setMobileOpen(false)} 
            className={`font-display text-3xl font-extrabold text-text-secondary hover:text-brand-amber transition-all duration-300 transform ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item.label}
          </a>
        ))}
        
        <div 
          className={`flex flex-col items-center gap-4 mt-4 transition-all duration-300 transform ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <button 
            onClick={() => { 
              setMobileOpen(false); 
              setShowDownloadModal(true); 
            }} 
            className="px-6 py-3 rounded-full border border-[#3DDC84]/40 dark:border-[#3DDC84]/30 bg-[#3DDC84]/15 dark:bg-[#3DDC84]/10 text-[#15803d] dark:text-white font-bold flex items-center gap-2 hover:bg-[#3DDC84]/25 dark:hover:bg-[#3DDC84]/20 transition-all duration-300 focus:outline-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#3DDC84] dark:text-[#3DDC84]">
              <path d="M17.523 15.3c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996m-11.046 0c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996M18.1 10.1l1.7-2.9c.1-.2 0-.5-.2-.6-.2-.1-.5 0-.6.2l-1.8 3c-1.6-.7-3.4-1.2-5.2-1.2s-3.6.5-5.2 1.2l-1.8-3c-.1-.2-.4-.3-.6-.2-.2.1-.3.4-.2.6l1.7 2.9C3.1 12.1 1 15.3 1 19.1h22c0-3.8-2.1-7-5.1-9z"/>
            </svg>
            Download APK
          </button>
          <a href={waLink} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)} className="px-8 py-3 rounded-full text-[16px] font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.3)] w-full justify-center">
            <WhatsAppIcon className="w-[20px] h-[20px]" />
            WhatsApp Kami
          </a>
          <button 
            onClick={() => { toggleTheme(); setMobileOpen(false); }}
            className="flex items-center justify-center gap-2.5 px-8 py-3 rounded-full border border-border/80 text-text-secondary hover:text-text-primary text-[14px] font-bold w-full transition-colors bg-white/5"
          >
            {theme === 'dark' ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-brand-amber">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                Mode Terang
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-brand-blue">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                Mode Gelap
              </>
            )}
          </button>
        </div>
      </div>

      {/* Download Modal Dialog */}
      {showDownloadModal && (
        <div 
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowDownloadModal(false)}
        >
          {/* Modal Container */}
          <div 
            className={`w-full max-w-[440px] rounded-[32px] border p-6 md:p-8 flex flex-col items-center relative overflow-hidden shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-300 animate-scaleIn ${
              theme === 'light' 
                ? 'bg-white border-slate-200 text-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.08)]' 
                : 'bg-[#0F172A] border-[#1E293B] text-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient background glow inside modal */}
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-[#3DDC84]/20 blur-[40px] rounded-full pointer-events-none"></div>

            {/* Android Icon Container */}
            <div className="w-16 h-16 rounded-3xl bg-[#3DDC84]/15 border border-[#3DDC84]/30 flex items-center justify-center mb-6 shadow-sm shadow-[#3DDC84]/10 shrink-0 transform hover:rotate-12 transition-transform duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#3DDC84]">
                <path d="M17.523 15.3c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996m-11.046 0c-.551 0-.996-.445-.996-.996 0-.551.445-.996.996-.996.551 0 .996.445.996.996 0 .551-.445.996-.996.996M18.1 10.1l1.7-2.9c.1-.2 0-.5-.2-.6-.2-.1-.5 0-.6.2l-1.8 3c-1.6-.7-3.4-1.2-5.2-1.2s-3.6.5-5.2 1.2l-1.8-3c-.1-.2-.4-.3-.6-.2-.2.1-.3.4-.2.6l1.7 2.9C3.1 12.1 1 15.3 1 19.1h22c0-3.8-2.1-7-5.1-9z"/>
              </svg>
            </div>

            {/* Typography */}
            <h3 className="font-display text-[22px] font-black tracking-tight text-center mb-3">
              Download Aplikasi Android
            </h3>
            <p className={`text-[15px] leading-relaxed text-center mb-7 ${
              theme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'
            }`}>
              Aplikasi Mesen.Ae akan diunduh dalam format installer <strong>.APK</strong>. Harap aktifkan opsi <span className="font-semibold text-brand-blue">"Instal Aplikasi dari Sumber Tidak Dikenal"</span> di pengaturan Android Anda jika ini adalah instalasi pertama kali.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button 
                onClick={() => setShowDownloadModal(false)}
                className={`w-full py-3.5 rounded-2xl text-[14px] font-bold text-center border transition-all duration-300 active:scale-[0.98] ${
                  theme === 'light' 
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-250 text-slate-700' 
                    : 'bg-[#1E293B]/60 hover:bg-[#1E293B] border-[#2E3B4E] text-[#94A3B8] hover:text-white'
                }`}
              >
                Batal
              </button>
              <a 
                href={apkLink} 
                onClick={() => setShowDownloadModal(false)}
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-3.5 rounded-2xl text-[14px] font-black text-center text-white bg-gradient-to-r from-[#3DDC84] to-[#2eb86b] hover:from-[#42e88c] hover:to-[#31c876] shadow-lg hover:shadow-[#3DDC84]/20 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-1.5"
              >
                Download (.APK)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
