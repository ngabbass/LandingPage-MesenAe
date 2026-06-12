const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function Footer() {
  const waLink = `https://wa.me/${import.meta.env.VITE_WA_NUMBER}?text=Halo%2C%20saya%20tertarik%20dengan%20Mesen.Ae%21`;
  const igLink = import.meta.env.VITE_IG_LINK || '#';

  return (
    <footer className="bg-bg-deep border-t border-border py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">

          {/* Logo + Desc + Mobile Social Icons */}
          <div>
            <a href="/" className="flex items-center gap-2.5 font-display font-extrabold text-[22px] mb-3">
              <img src="/assets/mesenae.png" alt="Mesen.Ae" className="w-9 h-9 object-contain rounded-lg" />
              <span className="text-text-primary">Mesen<span className="text-brand-blue">.Ae</span></span>
            </a>
            <p className="text-[15px] text-text-secondary max-w-[300px] mb-4">Cloud POS &amp; Ekosistem F&amp;B Modern. Transformasi digital untuk restoran masa kini.</p>

            {/* Social icons — tampil di mobile, sembunyi di sm ke atas */}
            <div className="flex items-center gap-3 sm:hidden">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-border bg-bg-card text-text-secondary hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all duration-200"
              >
                <WaIcon />
              </a>
              <a
                href={igLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-border bg-bg-card text-text-secondary hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-200"
              >
                <IgIcon />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-16 text-[15px] font-medium w-full sm:w-auto">
            <div className="flex flex-col gap-3">
              <span className="text-text-muted font-bold tracking-wider uppercase text-[11px] mb-1">Produk</span>
              <a href="/#features" className="text-text-secondary hover:text-brand-amber transition-colors">Fitur POS</a>
              <a href="/#cara-kerja-story" className="text-text-secondary hover:text-brand-amber transition-colors">Customer Journey</a>
              <a href="/#ecosystem" className="text-text-secondary hover:text-brand-amber transition-colors">Self-Order QR</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-text-muted font-bold tracking-wider uppercase text-[11px] mb-1">Tentang Kami</span>
              <a href="/kisahkami" className="text-text-secondary hover:text-brand-amber transition-colors">Kisah Kami</a>
              <a href="/syaratketentuan" className="text-text-secondary hover:text-brand-amber transition-colors">Syarat &amp; Ketentuan</a>
              <a href="/kebijakanprivasi" className="text-text-secondary hover:text-brand-amber transition-colors">Kebijakan Privasi</a>
            </div>

            {/* Hubungi Kami — sembunyi di mobile, tampil di sm ke atas */}
            <div className="hidden sm:flex flex-col gap-3">
              <span className="text-text-muted font-bold tracking-wider uppercase text-[11px] mb-1">Hubungi Kami</span>
              <a href={waLink} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-[#25D366] transition-colors flex items-center gap-1.5">
                <WaIcon /> WhatsApp
              </a>
              <a href={igLink} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-pink-500 transition-colors flex items-center gap-1.5">
                <IgIcon /> Instagram
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-text-muted">
          <div>&copy; {new Date().getFullYear()} Mesen.Ae. All rights reserved.</div>
          <div>Ponorogo, Indonesia</div>
        </div>
      </div>
    </footer>
  );
}
