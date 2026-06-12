import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Features from './components/Features'
import Journey from './components/Journey'
import Ecosystem from './components/Ecosystem'
import Payment from './components/Payment'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'

// Pages
import KisahKami from './pages/KisahKami'
import SyaratKetentuan from './pages/SyaratKetentuan'
import KebijakanPrivasi from './pages/KebijakanPrivasi'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'landing' | 'kisah' | 'syarat' | 'privasi'>('landing');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/kisahkami') {
        setCurrentPage('kisah');
        window.scrollTo(0, 0);
      } else if (path === '/syaratketentuan') {
        setCurrentPage('syarat');
        window.scrollTo(0, 0);
      } else if (path === '/kebijakanprivasi') {
        setCurrentPage('privasi');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('landing');
        const hash = window.location.hash;
        if (hash) {
          const id = hash.replace('#', '');
          // Wait for DOM to mount landing sections
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 80);
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Intercept navigation clicks globally for internal paths
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          e.preventDefault();
          window.history.pushState(null, '', href);
          handleLocationChange();
        }
      }
    };
    document.addEventListener('click', handleLinkClick);

    handleLocationChange(); // initial check

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const themeColorMeta = window.document.querySelector('meta[name="theme-color"]');
    
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#F8FAFC');
      }
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#080D1A');
      }
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    root.classList.add('theme-transition');
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 250);
  };

  return (
    <>
      <div className="noise-overlay"></div>
      <div className="ambient ambient-1 fixed pointer-events-none z-0"></div>
      <div className="ambient ambient-2 fixed pointer-events-none z-0"></div>

      {currentPage === 'landing' ? (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <main className="relative z-10">
            <Hero theme={theme} onOpenDemo={() => setIsModalOpen(true)} />
            <TechMarquee />
            <Journey theme={theme} />
            <Features />
            <Ecosystem />
            <Payment />
            <FAQ />
            <CTA />
          </main>
        </>
      ) : currentPage === 'kisah' ? (
        <KisahKami theme={theme} toggleTheme={toggleTheme} />
      ) : currentPage === 'syarat' ? (
        <SyaratKetentuan theme={theme} toggleTheme={toggleTheme} />
      ) : (
        <KebijakanPrivasi theme={theme} toggleTheme={toggleTheme} />
      )}

      <Footer />

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default App

