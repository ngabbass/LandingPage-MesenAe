import React, { useEffect, useState } from "react";

// ============================================================================
// REUSABLE IMAGE WITH FALLBACK
// ============================================================================
export interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

export function ImageWithFallback({ src, alt, className, fallbackIcon, ...props }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => { setHasError(false); }, [src]);
  if (hasError || !src) {
    return (
      <div className={`flex items-center justify-center bg-slate-200 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 overflow-hidden ${className}`} {...props}>
        {fallbackIcon || (
          <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 text-brand-blue">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} {...props} />;
}

// ============================================================================
// ICON HELPERS
// ============================================================================
export const getFallbackIcon = (name: string, size = 20) => {
  const className = "text-brand-blue/80 shrink-0";
  const n = name.toLowerCase();
  if (n.includes("makanan") || n.includes("nasi") || n.includes("ayam") || n.includes("mie")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12h20" /><path d="M20 12v2a8 8 0 0 1-16 0v-2" />
        <path d="M12 2v3" /><path d="M8 2v3" /><path d="M16 2v3" />
      </svg>
    );
  }
  if (n.includes("camilan") || n.includes("dimsum")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="13" cy="14" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (n.includes("minuman") || n.includes("kopi") || n.includes("ice")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    );
  }
  if (n.includes("dessert")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v4" /><path d="M3 11.5a2.5 2.5 0 0 1 5 0h8a2.5 2.5 0 0 1 5 0V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5z" /><path d="M3 14h18" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v3" /><path d="M21 17a9 9 0 0 0-18 0" /><path d="M2 20h20" />
    </svg>
  );
};

// ============================================================================
// STORY STEPS DATA — 10 LANGKAH PERJALANAN PELANGGAN
// ============================================================================
export interface StoryStep {
  id: number;
  title: string;
  shortTitle: string;
  desc: string;
  color: string;
  colorLight: string;
  glowColor: string;
  duration: number;
  icon: React.ReactNode;
}

export const STORY_STEPS: StoryStep[] = [
  {
    id: 0, title: "Pelanggan Datang", shortTitle: "Masuk Restoran",
    desc: "Pelanggan masuk ke resto dan langsung menuju meja kosong favorit mereka, tanpa perlu antre panjang di kasir.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 3200,
    icon: <><circle cx="12" cy="7" r="4"/><path d="M5 20a7 7 0 0 1 14 0"/></>,
  },
  {
    id: 1, title: "Scan QR Code", shortTitle: "Scan Menu",
    desc: "Pelanggan cukup scan QR code yang terpasang di meja menggunakan HP. Tidak perlu download aplikasi apapun, langsung terbuka di browser.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 3200,
    icon: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h.01M18 14h.01M14 18h.01M18 18h.01M11 7h.01M11 11h.01"/></>,
  },
  {
    id: 2, title: "Eksplorasi Menu", shortTitle: "Lihat Menu",
    desc: "Menu interaktif terbuka sepenuhnya. Ada foto produk, deskripsi detail, filter kategori, dan tampilan penawaran menarik restoran.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 4200,
    icon: <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></>,
  },
  {
    id: 3, title: "Pilih & Tambah Pesanan", shortTitle: "Pilih Menu",
    desc: "Dengan satu klik, item masuk keranjang. Bisa tambah catatan khusus seperti 'tidak pedas' atau 'extra saus' dll.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 4000,
    icon: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
  },
  {
    id: 4, title: "Review & Checkout Pesanan", shortTitle: "Checkout",
    desc: "Pelanggan review pesanan, lihat total harga, pilih metode pembayaran, nomor meja sudah terisi otomatis dari QR, tidak ada risiko salah meja.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 3800,
    icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
  },
  {
    id: 5, title: "Bayar dengan QRIS", shortTitle: "Bayar QRIS",
    desc: "Satu QRIS melayani semua e-wallet and mobile banking. Pelanggan scan dan tinggal klik bayar. Selesai dalam hitungan detik, tanpa uang kembalian.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 4800,
    icon: <><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></>,
  },
  {
    id: 6, title: "Dapur Terima Pesanan", shortTitle: "Ke Dapur",
    desc: "Begitu pembayaran sukses, pesanan LANGSUNG muncul di layar Kitchen Display System di dapur secara real-time.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 3800,
    icon: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><line x1="6" y1="20" x2="18" y2="20"/></>,
  },
  {
    id: 7, title: "Notifikasi", shortTitle: "Notif",
    desc: "Sistem otomatis mengirim notifikasi sistem dan pesan WhatsApp ke pelanggan ketika status sudah 'Pesanan Siap'. Pelanggan tidak perlu bertanya.",
    color: "#25D366", colorLight: "rgba(37,211,102,0.1)", glowColor: "rgba(37,211,102,0.4)",
    duration: 4200,
    icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>,
  },
  {
    id: 8, title: "Pesanan Diantar", shortTitle: "Diantar",
    desc: "Pelayan dengan sigap mengambil pesanan dari dapur dan mengantarkannya tepat ke meja pelanggan. Tidak ada kebingungan soal 'ini pesanan siapa'.",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 3800,
    icon: <><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  },
  {
    id: 9, title: "Selamat Menikmati!", shortTitle: "Nikmati",
    desc: "Pelanggan menikmati hidangan lezat dengan puas. Tanpa menunggu lama, tanpa salah pesanan. Ini baru namanya pengalaman makan yang sempurna! ✨",
    color: "#3B82F6", colorLight: "rgba(59,130,246,0.1)", glowColor: "rgba(59,130,246,0.4)",
    duration: 5500,
    icon: <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>,
  },
];

// Map step ke phone state: -1 = hidden, 0-5 = screens
export const getPhoneState = (step: number) => {
  if (step < 2 || step > 7) return -1;
  const mapping: { [key: number]: number } = { 2: 0, 3: 1, 4: 2, 5: 3, 6: 4, 7: 5 };
  return mapping[step] ?? -1;
};

// ============================================================================
// HUMAN-LIKE ANIMATION HELPER — cubic-bezier timing functions
// ============================================================================
export const EASING = {
  walk:     "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  bounce:   "cubic-bezier(0.34, 1.56, 0.64, 1)",
  smooth:   "cubic-bezier(0.4, 0, 0.2, 1)",
  overshoot:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  snap:     "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};
