import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

// 1. PINDAHKAN DATA KE LUAR KOMPONEN: 
// Mencegah alokasi memori berulang (re-creation) setiap kali state berubah.
const faqs: FAQItemProps[] = [
  {
    question: "Apakah Mesen.Ae cocok untuk bisnis F&B saya?",
    answer: "Cocok. Mesen.Ae dibuat untuk bisnis F&B yang ingin mulai rapi dari awal : kasir POS, QR menu, pembayaran digital, dan laporan penjualan dalam satu sistem."
  },
  {
    question: "Apakah saya harus membeli mesin kasir baru?",
    answer: "Tidak perlu. Mesen.Ae berbasis web cloud, jadi selama perangkat Anda memiliki browser modern dan koneksi internet, kasir bisa dipakai tanpa harus membeli mesin baru."
  },
  {
    question: "Bagaimana cara kerja QR menu pelanggan?",
    answer: "Sangat mudah. Pelanggan bisa scan QR menu di meja, memilih pesanan langsung dari browser HP mereka, lalu order masuk ke alur operasional kasir & dapur secara otomatis sehingga staff tidak perlu mencatat semuanya manual."
  },
  {
    question: "Bagaimana jika koneksi internet di outlet saya mati? Apakah aplikasi masih bisa digunakan?",
    answer: "Bisa. Mesen.Ae dilengkapi dengan fitur Offline-First Cache. Transaksi kasir tetap berjalan lancar dan data tersimpan aman di perangkat lokal. Begitu koneksi internet tersambung kembali, sistem akan otomatis melakukan sinkronisasi data tanpa duplikasi."
  },
  {
    question: "Apakah Mesen.Ae mendukung pencetakan struk belanja fisik?",
    answer: "Ya. Aplikasi Android native kami mendukung pencetakan langsung ke printer thermal via Bluetooth, WiFi, maupun kabel USB. Anda dapat mencetak struk fisik kasir secara real-time dengan header & footer kustom, serta membagikan struk digital langsung ke WhatsApp pelanggan."
  },
  {
    question: "Apakah ada batasan jumlah menu atau transaksi?",
    answer: "Tidak ada batasan. Anda dapat menambahkan menu, kategori, varian produk, serta mencatat transaksi sebanyak apa pun tanpa adanya limitasi kuota harian maupun bulanan."
  },
  {
    question: "Bagaimana cara mulai memakai sistem ini?",
    answer: "Caranya sangat mudah. Cukup hubungi kami melalui tombol WhatsApp yang tersedia untuk pendaftaran outlet baru. Tim kami akan membantu konfigurasi awal menu dan meja Anda hingga sistem siap digunakan untuk berjualan."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    // Menutup accordion jika diklik lagi, membuka jika berbeda
    setOpenIdx(prevIdx => (prevIdx === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative z-10 py-16 md:py-20 -mt-px">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-amber">
            <span className="h-[2px] w-6 rounded-full bg-brand-amber/80"></span>
            FAQ
            <span className="h-[2px] w-6 rounded-full bg-brand-amber/80"></span>
          </div>
          <h2 className="mb-5 font-display text-[clamp(24px,4vw,44px)] font-extrabold leading-tight tracking-tight text-text-primary">
            Yang sering <span className="text-brand-blue">ditanyakan</span>
          </h2>
          <p className="mx-auto max-w-xl text-[15px] sm:text-[19px] leading-relaxed text-text-secondary">
            Jawaban singkat tentang kecocokan sistem, perangkat kasir, QR menu, printer, offline mode, dan cara memulai.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            // Unik ID untuk Aksesibilitas (Screen Reader)
            const accordionId = `faq-answer-${idx}`; 

            return (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out ${
                  isOpen 
                    ? 'border-brand-amber dark:border-brand-amber/30 bg-bg-card shadow-md shadow-brand-amber/5' 
                    : 'border-border bg-bg-card hover:border-brand-amber/50 hover:bg-bg-card/60 dark:border-transparent'
                }`}
              >
                {/* Active Indicator Line */}
                <div 
                  className={`absolute bottom-0 left-0 top-0 w-1.5 bg-brand-amber transition-all duration-300 ease-out ${
                    isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />

                <button 
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={accordionId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-inset rounded-2xl"
                >
                  <span className={`font-display text-[16px] sm:text-[19px] font-semibold transition-colors duration-300 ${
                    isOpen ? 'text-brand-amber' : 'text-text-primary group-hover:text-brand-amber'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Modern Chevron SVG Icon */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-brand-amber/15 border-brand-amber/30 text-brand-amber rotate-180' 
                      : 'bg-bg-base border-border text-text-secondary group-hover:bg-brand-amber/10 group-hover:border-brand-amber/40 group-hover:text-brand-amber'
                  }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>

                {/* Smooth Grid Accordion Content */}
                <div 
                  id={accordionId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/40 px-5 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-4 text-[14px] sm:text-[17px] leading-relaxed text-text-secondary">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
