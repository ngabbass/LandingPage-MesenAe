export default function Payment() {
  return (
    <section id="payment" className="py-8 md:py-12 bg-bg-base relative z-10 -mt-px">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold text-text-primary mb-5">Sistem Menerima <span className="text-brand-blue">Semua Pembayaran</span></h2>
        <p className="text-[19px] text-text-secondary max-w-[600px] mx-auto mb-10 leading-relaxed">Dari tunai hingga e-wallet, Mesen.Ae mencatat semuanya dengan presisi. Integrasi payment gateway (Midtrans) tersedia untuk pembayaran online Self-Order.</p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="text-[12px] font-semibold text-text-muted uppercase tracking-widest">E-Wallet & QRIS</div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img src="/assets/ico/qris.png" alt="QRIS" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/gopay.png" alt="GoPay" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/ovo.png" alt="OVO" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/dana.png" alt="DANA" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/linkaja.png" alt="LinkAja" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/shopeepay.png" alt="ShopeePay" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            </div>
          </div>
          
          <div className="w-[1px] h-16 bg-border hidden lg:block"></div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="text-[12px] font-semibold text-text-muted uppercase tracking-widest">Bank & Virtual Account</div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img src="/assets/ico/bca.png" alt="BCA" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/mandiri.png" alt="Mandiri" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/bni.png" alt="BNI" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              <img src="/assets/ico/bri.png" alt="BRI" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
