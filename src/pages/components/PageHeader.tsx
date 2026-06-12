import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function PageHeader({ theme, toggleTheme }: PageHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[210] flex items-center justify-between transition-all duration-500 ease-in-out rounded-full ${
        scrolled
          ? 'top-4 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1000px] px-6 py-2.5'
          : 'top-6 w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] max-w-[1100px] px-6 py-3.5'
      } ${
        scrolled
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

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold border border-border/80 text-text-secondary hover:text-text-primary hover:border-white/30 hover:bg-white/5 transition-all duration-300"
        >
          <ArrowLeft size={14} className="text-brand-amber shrink-0" />
          <span>Kembali</span>
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
    </nav>
  );
}
