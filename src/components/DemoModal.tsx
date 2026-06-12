import { useEffect, useState } from 'react';

export default function DemoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [demoSrc, setDemoSrc] = useState('');

  useEffect(() => {
    if (isOpen) {
      setDemoSrc(import.meta.env.VITE_DEMO_LINK || 'https://mesen.ae/demo');
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setDemoSrc(''), 300);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 bg-black z-[1000] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Floating Back Button */}
      {isOpen && (
        <button 
          onClick={onClose}
          className="fixed top-4 left-4 z-[1010] flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 hover:border-brand-amber/50 hover:bg-black/90 text-white font-display font-semibold text-[12px] sm:text-[13px] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali
        </button>
      )}
      
      <div className="w-full h-full bg-black">
        {demoSrc && (
          <iframe 
            src={demoSrc} 
            className="w-full h-full border-none bg-white" 
            title="Demo Mesen.Ae" 
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
