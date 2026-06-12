import React, { useState, useEffect } from "react";

export function HumanCharacter({ step, colors, forceWalking, forceExiting, forceScaleX }: { step: number; colors: any; forceWalking?: boolean; forceExiting?: boolean; forceScaleX?: number }) {
  const [isWalking, setIsWalking] = useState(step === 0);
  const [showSuccessFace, setShowSuccessFace] = useState(false);

  useEffect(() => {
    if (step === 0) {
      setIsWalking(true);
    } else if (step === 1) {
      setIsWalking(true);
      const timer = setTimeout(() => {
        setIsWalking(false);
      }, 1100);
      return () => clearTimeout(timer);
    } else {
      setIsWalking(false);
    }
  }, [step]);

  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        setShowSuccessFace(true);
      }, 2400);
      return () => clearTimeout(timer);
    } else {
      setShowSuccessFace(false);
    }
  }, [step]);

  const activeWalking = forceWalking !== undefined ? forceWalking : isWalking;

  // 1. MACRO STATES
  const isScanning = step === 1;
  const isHoldingPhone = step >= 1 && step <= 7;
  // When exiting (stand-up walk-out), override isSitting so legs straighten
  const isSitting = forceExiting ? false : step >= 8;
  const isHappy = step === 9 && !forceExiting;
  const isAmazed = step === 7;

  // 2. DYNAMIC CSS CLASSES
  const stateClass = activeWalking 
    ? "hc-walking" 
    : isSitting 
      ? isHappy 
        ? "hc-sitting hc-happy" 
        : "hc-sitting"
      : isScanning
        ? "hc-scanning"
        : isHoldingPhone && !forceExiting
          ? isAmazed 
            ? "hc-phone hc-amazed" 
            : "hc-phone" 
          : "hc-idle";

  // 3. COLOR PALETTE (Pria Tampan, Profesional)
  const skinHigh = "#FFE4E1";
  const skinBase = "#F5C8B8";
  const skinMid = "#E2A892";
  const skinShadow = "#C8826D";
  
  // Rambut Stylish & Profesional (Warna gelap)
  const hairDark = "#020617";
  const hairBase = "#0F172A";
  const hairHigh = "#334155";
  
  // Kemeja Putih Berwibawa
  const shirtBase = "#F8FAFC";
  const shirtDark = "#CBD5E1";
  const shirtHigh = "#FFFFFF";
  
  const pantsBase = "#1E293B";
  const pantsDark = "#020617";
  
  const shoeBase = "#0F172A";
  const shoeAccent = "#94A3B8";

  // Injeksi CSS Keyframes
  const cssAnimations = `
    .hc-walking .hc-core { animation: hc-bounce 1s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
    .hc-idle .hc-core, .hc-phone .hc-core, .hc-scanning .hc-core, .hc-sitting .hc-core { animation: hc-breathe 3s ease-in-out infinite; }
    
    @keyframes hc-bounce {
      0%, 100% { transform: translateY(0) rotate(2deg); }
      25% { transform: translateY(-4px) rotate(4deg); }
      50% { transform: translateY(0) rotate(2deg); }
      75% { transform: translateY(-4px) rotate(0deg); }
    }
    @keyframes hc-breathe {
      0%, 100% { transform: translateY(0) scaleY(1); }
      50% { transform: translateY(-1.5px) scaleY(1.01); }
    }

    /* Kaki Belakang (Kanan) */
    .hc-walking .hc-leg-r-thigh { animation: hc-walk-thigh-r 1s ease-in-out infinite; }
    .hc-walking .hc-leg-r-calf { animation: hc-walk-calf-r 1s ease-in-out infinite; }
    .hc-walking .hc-leg-r-foot { animation: hc-walk-foot-r 1s ease-in-out infinite; }
    .hc-sitting .hc-leg-r-thigh { transform: rotate(-85deg); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
    .hc-sitting .hc-leg-r-calf { transform: rotate(85deg); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }

    @keyframes hc-walk-thigh-r { 0%, 100% { transform: rotate(25deg); } 50% { transform: rotate(-30deg); } }
    @keyframes hc-walk-calf-r { 0%, 50%, 100% { transform: rotate(5deg); } 25% { transform: rotate(40deg); } }
    @keyframes hc-walk-foot-r { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(15deg); } }

    /* Kaki Depan (Kiri) */
    .hc-walking .hc-leg-l-thigh { animation: hc-walk-thigh-l 1s ease-in-out infinite; }
    .hc-walking .hc-leg-l-calf { animation: hc-walk-calf-l 1s ease-in-out infinite; }
    .hc-walking .hc-leg-l-foot { animation: hc-walk-foot-l 1s ease-in-out infinite; }
    .hc-sitting .hc-leg-l-thigh { transform: rotate(-80deg); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
    .hc-sitting .hc-leg-l-calf { transform: rotate(80deg); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }

    @keyframes hc-walk-thigh-l { 0%, 100% { transform: rotate(-30deg); } 50% { transform: rotate(25deg); } }
    @keyframes hc-walk-calf-l { 0%, 50%, 100% { transform: rotate(0deg); } 75% { transform: rotate(40deg); } }
    @keyframes hc-walk-foot-l { 0%, 100% { transform: rotate(15deg); } 50% { transform: rotate(-10deg); } }

    /* Lengan Belakang (Kanan) */
    .hc-walking .hc-arm-r-upper { animation: hc-walk-arm-r 1s ease-in-out infinite; }
    .hc-walking .hc-arm-r-lower { animation: hc-walk-forearm-r 1s ease-in-out infinite; }
    .hc-phone .hc-arm-r-upper { animation: hc-phone-arm-r-upper 3s ease-in-out infinite; transition: 0.8s ease; }
    .hc-phone .hc-arm-r-lower { animation: hc-phone-arm-r-lower 3s ease-in-out infinite; transition: 0.8s ease; }
    .hc-scanning .hc-arm-r-upper { transform: rotate(15deg); transition: 0.8s ease; }
    .hc-sitting .hc-arm-r-upper { transform: rotate(10deg); }

    @keyframes hc-walk-arm-r { 0%, 100% { transform: rotate(-25deg); } 50% { transform: rotate(30deg); } }
    @keyframes hc-walk-forearm-r { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(-35deg); } }

    /* Lengan Depan (Kiri / Pegang HP) */
    .hc-walking .hc-arm-l-upper { animation: hc-walk-arm-l 1s ease-in-out infinite; }
    .hc-walking .hc-arm-l-lower { animation: hc-walk-forearm-l 1s ease-in-out infinite; }
    .hc-phone .hc-arm-l-upper { animation: hc-phone-arm-upper 3s ease-in-out infinite; }
    .hc-phone .hc-arm-l-lower { animation: hc-phone-arm-lower 3s ease-in-out infinite; }
    .hc-scanning .hc-arm-l-upper { transform: rotate(-45deg); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
    .hc-scanning .hc-arm-l-lower { transform: rotate(-80deg); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
    .hc-sitting .hc-arm-l-upper { animation: hc-sit-arm-l-upper 3s ease-in-out infinite; transition: 0.8s ease; }
    .hc-sitting .hc-arm-l-lower { animation: hc-sit-arm-l-lower 3s ease-in-out infinite; transition: 0.8s ease; }
    .hc-amazed .hc-arm-l-upper { transform: rotate(-35deg) !important; animation: none !important; transition: 0.8s ease; }
    .hc-amazed .hc-arm-l-lower { transform: rotate(-75deg) !important; animation: none !important; transition: 0.8s ease; }
    .hc-amazed .hc-arm-r-upper { transform: rotate(18deg) !important; animation: none !important; transition: 0.8s ease; }
    .hc-amazed .hc-arm-r-lower { transform: rotate(-140deg) !important; animation: none !important; transition: 0.8s ease; }
    .hc-amazed .hc-head { transform: rotate(-8deg) translate(0px, -3px) !important; animation: none !important; transition: 0.8s ease; }

    @keyframes hc-walk-arm-l { 0%, 100% { transform: rotate(30deg); } 50% { transform: rotate(-25deg); } }
    @keyframes hc-walk-forearm-l { 0%, 100% { transform: rotate(-40deg); } 50% { transform: rotate(-10deg); } }

    /* Kepala */
    .hc-walking .hc-head { animation: hc-bob-head 1s ease-in-out infinite; }
    .hc-phone .hc-head { animation: hc-phone-head 3s ease-in-out infinite; }
    .hc-scanning .hc-head { transform: rotate(18deg) translate(2px, 3px); transition: all 0.6s ease; }
    .hc-sitting .hc-head { transform: rotate(5deg); transition: 0.6s ease; }
    
    @keyframes hc-bob-head { 0%, 50%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-2deg); } 75% { transform: rotate(2deg); } }
    @keyframes hc-phone-arm-upper { 0%, 100% { transform: rotate(-52deg); } 50% { transform: rotate(-48deg); } }
    @keyframes hc-phone-arm-lower { 0%, 100% { transform: rotate(-72deg); } 50% { transform: rotate(-68deg); } }
    @keyframes hc-phone-arm-r-upper { 0%, 100% { transform: rotate(8deg); } 50% { transform: rotate(12deg); } }
    @keyframes hc-phone-arm-r-lower { 0%, 100% { transform: rotate(-138deg); } 50% { transform: rotate(-134deg); } }
    @keyframes hc-phone-head { 0%, 100% { transform: rotate(14deg) translate(1px, 2.5px); } 50% { transform: rotate(17deg) translate(1.2px, 3.5px); } }
    
    .hc-blink { animation: hc-eye-blink 4s infinite; }
    @keyframes hc-eye-blink { 0%, 94%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.05); } }
    
    .hc-thumb { animation: hc-tap 2.5s infinite; }
    @keyframes hc-tap { 0%, 80%, 100% { transform: rotate(0deg); } 85% { transform: rotate(-12deg); } 90% { transform: rotate(4deg); } }

    /* Sitting arm idle */
    @keyframes hc-sit-arm-l-upper { 0%, 100% { transform: rotate(-60deg); } 50% { transform: rotate(-56deg); } }
    @keyframes hc-sit-arm-l-lower { 0%, 100% { transform: rotate(-50deg); } 50% { transform: rotate(-46deg); } }

    /* Happy cheering */
    .hc-happy .hc-arm-l-upper { animation: hc-happy-arm-l-upper 1.5s ease-in-out infinite !important; }
    .hc-happy .hc-arm-l-lower { animation: hc-happy-arm-l-lower 1.5s ease-in-out infinite !important; }
    .hc-happy .hc-arm-r-upper { animation: hc-happy-arm-r-upper 1.5s ease-in-out infinite !important; }
    .hc-happy .hc-arm-r-lower { animation: hc-happy-arm-r-lower 1.5s ease-in-out infinite !important; }

    @keyframes hc-happy-arm-l-upper { 0%, 100% { transform: rotate(-110deg); } 50% { transform: rotate(-130deg); } }
    @keyframes hc-happy-arm-l-lower { 0%, 100% { transform: rotate(20deg); } 50% { transform: rotate(45deg); } }
    @keyframes hc-happy-arm-r-upper { 0%, 100% { transform: rotate(-90deg); } 50% { transform: rotate(-110deg); } }
    @keyframes hc-happy-arm-r-lower { 0%, 100% { transform: rotate(-30deg); } 50% { transform: rotate(-15deg); } }
  `;

  return (
    <g className={`hc-rig ${stateClass}`} style={forceScaleX !== undefined ? { transform: `scaleX(${forceScaleX})`, transformOrigin: "20px 90px" } : undefined}>
      <defs>
        <style dangerouslySetInnerHTML={{ __html: cssAnimations }} />

        <radialGradient id="hc-headVol" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={skinHigh} />
          <stop offset="60%" stopColor={skinBase} />
          <stop offset="90%" stopColor={skinMid} />
          <stop offset="100%" stopColor={skinShadow} />
        </radialGradient>

        <linearGradient id="hc-armVol" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={skinMid} />
          <stop offset="40%" stopColor={skinBase} />
          <stop offset="100%" stopColor={skinShadow} />
        </linearGradient>

        <linearGradient id="hc-shirtVol" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={shirtDark} />
          <stop offset="25%" stopColor={shirtBase} />
          <stop offset="65%" stopColor={shirtHigh} />
          <stop offset="100%" stopColor={shirtDark} />
        </linearGradient>

        <linearGradient id="hc-pantsVol" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={pantsDark} />
          <stop offset="50%" stopColor={pantsBase} />
          <stop offset="100%" stopColor={pantsDark} />
        </linearGradient>

        <filter id="hc-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.25" />
        </filter>
        <filter id="hc-shadow-light" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* SHADOW ON FLOOR */}
      <ellipse 
        cx="25" cy="180" rx="28" ry="6" 
        fill="rgba(0,0,0,0.15)" 
        style={{ 
          transformOrigin: "25px 180px", 
          transform: activeWalking ? "scaleX(1.1)" : "scaleX(1)",
          transition: "transform 0.5s" 
        }}
      />

      {/* CORE BODY GROUP */}
      <g className="hc-core" style={{ transformOrigin: "20px 110px", transition: "transform 0.5s" }}>

        {/* --- KAKI KANAN (BELAKANG) --- */}
        <g className="hc-leg-r-thigh" style={{ transformOrigin: "30px 110px" }}>
          {/* Sendi Paha Belakang */}
          <circle cx="30" cy="110" r="7" fill={pantsDark}/>
          {/* Path presisi paha kanan */}
          <path d="M 23 110 C 34 110, 34 130, 34 138 L 24 138 C 22 125, 18 115, 20 110 Z" fill="url(#hc-pantsVol)"/>
          
          <g className="hc-leg-r-calf" style={{ transformOrigin: "29px 138px" }}>
            {/* Sendi Lutut Belakang */}
            <circle cx="29" cy="138" r="5" fill="url(#hc-pantsVol)"/>
            {/* Path presisi betis kanan */}
            <path d="M 24 138 C 24 150, 23 165, 29 172 C 35 165, 34 150, 34 138 Z" fill="url(#hc-pantsVol)"/>
            {/* Lipatan Celana Bawah */}
            <path d="M 20 168 C 25 170, 33 170, 35 166 L 34 172 C 28 174, 21 174, 19 170 Z" fill={pantsDark}/>
            
            <g className="hc-leg-r-foot" style={{ transformOrigin: "29px 170px" }}>
              {/* SEPATU KANAN */}
              <path d="M 29 170 C 39 168, 45 174, 43 180 C 35 182, 22 182, 19 180 C 15 176, 21 172, 29 170 Z" fill={shoeBase}/>
              <path d="M 19 178 C 27 181, 37 181, 44 178 L 43 182 C 35 184, 22 184, 18 181 Z" fill="#020617"/>
              <path d="M 29 172 L 35 174 M 31 174 L 36 176" stroke={shoeAccent} strokeWidth="1.5" strokeLinecap="round"/>
            </g>
          </g>
        </g>

        {/* --- LENGAN KANAN (BELAKANG) --- */}
        <g className="hc-arm-r-upper" style={{ transformOrigin: "32px 55px" }}>
          {/* Lengan Bawah */}
          <g className="hc-arm-r-lower" style={{ transformOrigin: "33px 68px" }}>
            <circle cx="33" cy="68" r="4.5" fill="url(#hc-armVol)"/>
            <path d="M 28.5 68 C 37.5 68, 36 105, 32 110 C 26 110, 25 85, 28.5 68 Z" fill="url(#hc-armVol)"/>
            {/* Telapak Tangan */}
            <circle cx="30" cy="112" r="3.5" fill={skinBase}/>
            <path d="M 27 112 Q 30 118 32 116 Q 34 115 33 112" fill={skinBase}/>
          </g>

          {/* Lengan Baju Putih (Rapi tanpa semburat stroke yang melayang) */}
          <circle cx="32" cy="55" r="7.5" fill="url(#hc-shirtVol)"/>
          <path d="M 24.5 55 C 24.5 45, 39.5 45, 39.5 55 C 39.5 62, 38 68, 37 68 L 27 68 C 26 68, 24.5 62, 24.5 55 Z" fill="url(#hc-shirtVol)"/>
          <path d="M 27 68 Q 32 71 37 68" fill="none" stroke={shirtDark} strokeWidth="1.5" strokeLinecap="round"/>
        </g>

        {/* --- KAKI KIRI (DEPAN) --- */}
        {/* Dirender SEBELUM Badan agar ujung paha tertutup rapi oleh kemeja/sabuk */}
        <g className="hc-leg-l-thigh" style={{ transformOrigin: "24px 110px" }}>
          <circle cx="24" cy="110" r="7.5" fill={pantsDark}/>
          {/* Path presisi paha kiri */}
          <path d="M 16.5 110 C 28.5 110, 25 130, 25 138 L 13 138 C 13 125, 8 115, 13.5 110 Z" fill="url(#hc-pantsVol)" filter="url(#hc-shadow-light)"/>
          
          <g className="hc-leg-l-calf" style={{ transformOrigin: "19px 138px" }}>
            {/* Sendi Lutut Kiri */}
            <circle cx="19" cy="138" r="6" fill="url(#hc-pantsVol)"/>
            {/* Path presisi betis kiri */}
            <path d="M 13 138 C 13 150, 15 165, 21 172 C 27 165, 25 150, 25 138 Z" fill="url(#hc-pantsVol)"/>
            {/* Lipatan Celana Bawah */}
            <path d="M 12 168 C 17 170, 25 170, 27 166 L 26 172 C 20 174, 13 174, 11 170 Z" fill={pantsDark} opacity="0.9"/>
            
            <g className="hc-leg-l-foot" style={{ transformOrigin: "21px 170px" }}>
              <path d="M 21 170 C 31 168, 37 174, 35 180 C 27 182, 14 182, 11 180 C 7 176, 13 172, 21 170 Z" fill={shoeBase}/>
              <path d="M 11 178 C 19 181, 29 181, 36 178 L 35 182 C 27 184, 14 184, 10 181 Z" fill="#020617"/>
              <path d="M 21 172 L 27 174 M 23 174 L 28 176" stroke={shoeAccent} strokeWidth="1.5" strokeLinecap="round"/>
            </g>
          </g>
        </g>

        {/* --- BADAN UTAMA --- */}
        <g filter="url(#hc-shadow)">
          {/* Base Tubuh (Kemeja Putih Berwibawa) */}
          <path d="M 4 48 C 22 43, 37 48, 37 65 C 39 85, 33 110, 33 110 L 7 110 C 7 110, 1 85, 4 65 Z" fill="url(#hc-shirtVol)"/>
          
          {/* Lipatan Kemeja (Tegap/Volume Badan) */}
          <path d="M 14 68 Q 24 73 32 68" fill="none" stroke={shirtDark} strokeWidth="1" opacity="0.5"/>
          <path d="M 9 82 Q 19 86 28 82" fill="none" stroke={shirtDark} strokeWidth="1" opacity="0.3"/>
          <path d="M 7 98 Q 17 102 29 98" fill="none" stroke={shirtDark} strokeWidth="1" opacity="0.4"/>

          {/* Kerah Kemeja */}
          <path d="M 10 46 L 19 62 L 30 46 Z" fill="#FFFFFF" opacity="0.95"/>
          <path d="M 10 46 L 19 57 L 14 46 Z" fill="#E2E8F0"/>
          <path d="M 30 46 L 21 57 L 26 46 Z" fill="#E2E8F0"/>
          
          {/* Garis Kancing */}
          <line x1="20" y1="62" x2="19" y2="110" stroke={shirtDark} strokeWidth="2" opacity="0.6"/>
          <circle cx="19.5" cy="68" r="1.5" fill="#94A3B8"/>
          <circle cx="19.2" cy="82" r="1.5" fill="#94A3B8"/>
          <circle cx="19" cy="96" r="1.5" fill="#94A3B8"/>
          
          {/* Saku Dada */}
          <g transform="translate(6, 63)">
            <path d="M 0 0 L 10 0 L 10 9 L 5 12 L 0 9 Z" fill="#FFFFFF" opacity="0.8" stroke={shirtDark} strokeWidth="1"/>
            <rect x="2" y="-3" width="1.5" height="6" fill="#0F172A" rx="0.5"/>
            <rect x="4" y="-2" width="1" height="4" fill="#EF4444" rx="0.5"/>
          </g>

          {/* Sabuk */}
          <path d="M 7 108 L 33 108 L 32 113 L 8 113 Z" fill={pantsDark}/>
          <rect x="16.5" y="107" width="7" height="6" rx="1" fill="#CBD5E1"/>
          <rect x="17.5" y="108" width="5" height="4" fill={pantsDark}/>
          <rect x="18.5" y="108" width="1" height="4" fill="#CBD5E1"/>
        </g>

        {/* --- KEPALA (TAMPAN & BERWIBAWA) --- */}
        <g className="hc-head" style={{ transformOrigin: "20px 40px" }}>
          {/* Leher */}
          <path d="M 14 35 L 26 35 L 25 50 L 15 50 Z" fill={skinShadow}/>
          
          {/* Rahang Maskulin/Tegas */}
          <path d="M 1 20 C 1 5, 39 5, 39 20 C 39 35, 30 45, 20 45 C 10 45, 1 35, 1 20 Z" fill="url(#hc-headVol)" filter="url(#hc-shadow-light)"/>

          {/* Telinga */}
          <g>
            <ellipse cx="-1" cy="24" rx="3.5" ry="6" fill={skinMid}/>
            <path d="M -2 22 Q 0 25 -1 27" fill="none" stroke={skinShadow} strokeWidth="1.5"/>
            <ellipse cx="41" cy="24" rx="3.5" ry="6" fill={skinMid}/>
          </g>

		    {/* Rambut Modern & Rapi (Datar Melengkung Tipis dengan Godek/Sideburns) */}
          <g className="hc-hair">
            {/* Base Rambut / Volume Atas Rapi Datar Melengkung Tipis */}
            <path d="M -2 20 C -3 4, 8 -10, 20 -10 C 32 -10, 43 4, 42 20 C 35 11, 22 7, 20 8 C 14 9, 6 12, -2 20 Z" fill={hairBase} filter="url(#hc-shadow-light)"/>
            
            {/* Fade/Cukuran Samping + Godek (Sideburns) */}
            <path d="M -2 20 C -2 15, 2 10, 5 10 C 2 15, 4 20, 4 28 C 2 28, 0 24, -2 20 Z" fill={hairHigh} opacity="0.75"/>
            <path d="M 42 20 C 42 15, 38 10, 35 10 C 38 15, 36 20, 36 28 C 38 28, 40 24, 42 20 Z" fill={hairHigh} opacity="0.75"/>
            
            {/* Detail Godek Tambahan (untuk mempertegas garis rambut depan telinga) */}
            <path d="M 2 20 L 2 27 L 4 25 L 4 20 Z" fill={hairBase}/>
            <path d="M 38 20 L 38 27 L 36 25 L 36 20 Z" fill={hairBase}/>

            {/* Highlight Rambut Rapi Datar */}
            <path d="M 8 -2 Q 20 -7 32 -4 Q 20 1 8 -2 Z" fill={hairHigh} opacity="0.3"/>
            <path d="M 14 -5 Q 20 -9 26 -7 Q 20 -4 14 -5 Z" fill={hairHigh} opacity="0.35"/>
          </g>
          {/* Mata, Alis & Mulut */}
          <g className="hc-blink" style={{ transformOrigin: "20px 22px" }}>
            {/* Mata Normal */}
            <g style={{ opacity: isHappy ? 0 : 1, transition: "opacity 0.3s" }}>
              {isAmazed ? (
                <g>
                  <circle cx="12" cy="20" r="4.5" fill="#ffffff" stroke={hairBase} strokeWidth="1"/>
                  <circle cx="28" cy="20" r="4.5" fill="#ffffff" stroke={hairBase} strokeWidth="1"/>
                  <circle cx="12" cy="18" r="2" fill="#020617"/>
                  <circle cx="28" cy="18" r="2" fill="#020617"/>
                  <circle cx="13" cy="17" r="0.8" fill="#ffffff"/>
                  <circle cx="29" cy="17" r="0.8" fill="#ffffff"/>
                </g>
              ) : (
                <g>
                  {/* Bentuk mata maskulin dewasa */}
                  <ellipse cx="12" cy="20" rx="4.5" ry="3" fill="#ffffff"/>
                  <ellipse cx="28" cy="20" rx="4.5" ry="3" fill="#ffffff"/>
                  <g style={{ transform: showSuccessFace ? "translate(1.5px, 0px)" : isHoldingPhone ? "translate(0, 1px)" : "none", transition: "transform 0.4s" }}>
                    <ellipse cx="12" cy="20" rx="2.5" ry="2" fill="#334155"/>
                    <ellipse cx="28" cy="20" rx="2.5" ry="2" fill="#334155"/>
                    <circle cx="12" cy="20" r="1.2" fill="#020617"/>
                    <circle cx="28" cy="20" r="1.2" fill="#020617"/>
                    <circle cx="13" cy="19.5" r="0.6" fill="#ffffff"/>
                    <circle cx="29" cy="19.5" r="0.6" fill="#ffffff"/>
                  </g>
                </g>
              )}
              {/* Alis Tegas */}
              <path d={isScanning ? "M 7 15 L 14 17" : isAmazed ? "M 6 12 L 14 15" : "M 6 14 L 14 16"} fill="none" stroke={hairBase} strokeWidth="3" strokeLinecap="round" style={{ transition: "d 0.3s" }}/>
              <path d={isScanning ? "M 26 17 L 33 15" : isAmazed ? "M 26 15 L 34 12" : "M 26 16 L 34 14"} fill="none" stroke={hairBase} strokeWidth="3" strokeLinecap="round" style={{ transition: "d 0.3s" }}/>
            </g>

            {/* Mata Happy (Step 9) */}
            <g style={{ opacity: isHappy ? 1 : 0, transition: "opacity 0.3s" }}>
              <path d="M 8 20 Q 12 16 16 20" fill="none" stroke={hairBase} strokeWidth="3" strokeLinecap="round"/>
              <path d="M 24 20 Q 28 16 32 20" fill="none" stroke={hairBase} strokeWidth="3" strokeLinecap="round"/>
              <path d="M 12 30 Q 20 40 28 30 Z" fill="#7F1D1D"/>
              <path d="M 13 30 Q 20 34 27 30 Z" fill="#ffffff"/>
              <path d="M 16 34 Q 20 38 24 34 Q 20 40 16 34 Z" fill="#FCA5A5"/>
            </g>
          </g>

          {/* Hidung */}
          <path d="M 20 22 L 20 28 L 22 28" fill="none" stroke={skinShadow} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>

          {/* Mulut */}
          <g style={{ opacity: isHappy ? 0 : 1 }}>
            <path
              d={showSuccessFace ? "M 15.5 34.5 Q 20 38.5 24.5 34.5" : "M 15 35 Q 20 36 25 35"}
              fill="none"
              stroke="#991B1B"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ transition: "d 0.3s ease" }}
            />
            <path
              d={showSuccessFace ? "M 18 37.5 Q 20 38.5 22 37.5" : "M 18 38 Q 20 39 22 38"}
              fill="none"
              stroke={skinShadow}
              strokeWidth="1"
              strokeLinecap="round"
              style={{ transition: "d 0.3s ease" }}
            />
          </g>
        </g>

        {/* --- LENGAN KIRI (DEPAN, Pegang HP) --- */}
        <g className="hc-arm-l-upper" style={{ transformOrigin: "10px 55px" }}>
          {/* Lengan Bawah (Lengan Kulit) */}
          <g className="hc-arm-l-lower" style={{ transformOrigin: "8px 68px" }}>
            <circle cx="8" cy="68" r="5" fill="url(#hc-armVol)"/>
            <path d="M 3 68 C 13 68, 12 105, 8 110 C 2 110, 0 85, 3 68 Z" fill="url(#hc-armVol)"/>
            
            {/* Jam Tangan */}
            <g transform="translate(2, 100) rotate(-10)">
              <rect x="-1" y="-1" width="10" height="6" fill="#0F172A" rx="1.5"/>
              <rect x="2" y="-2" width="5" height="8" fill="#94A3B8" rx="2"/>
            </g>

            {/* Tangan & HP */}
            <g>
              <circle cx="7" cy="112" r="4.5" fill={skinBase}/>
              
              <g 
                style={{ 
                  opacity: isHoldingPhone ? 1 : 0, 
                  transform: isScanning 
                    ? "rotate(125deg) scale(1)" 
                    : isAmazed
                      ? "rotate(110deg) scale(1)"
                      : isHoldingPhone 
                        ? "rotate(105deg) scale(1)" 
                        : "translate(0px, 10px) scale(0)",
                  transformOrigin: "7px 112px",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              >
                <rect x="-2" y="102" width="16" height="26" rx="3" fill="#020617" filter="url(#hc-shadow)"/>
                <rect x="-1" y="103" width="14" height="24" rx="2" fill="#1E293B"/>
                
                <rect x="0" y="104" width="12" height="22" rx="1.5" fill="#3B82F6"/>
                <rect x="2" y="106" width="8" height="2" rx="1" fill="#FFFFFF" opacity="0.5"/>
                <rect x="2" y="110" width="5" height="1.5" rx="0.5" fill="#FFFFFF" opacity="0.3"/>

                <path d="M 10 110 C 14 110, 14 113, 10 113" fill="none" stroke={skinBase} strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M 10 115 C 14 115, 14 118, 10 118" fill="none" stroke={skinBase} strokeWidth="2.5" strokeLinecap="round"/>
                
                <g className="hc-thumb" style={{ transformOrigin: "4px 115px" }}>
                  <path d="M 2 113 C -2 115, -2 120, 3 122" fill="none" stroke={skinHigh} strokeWidth="3" strokeLinecap="round"/>
                </g>
              </g>

              {/* Tangan Normal (Bila HP tidak dipegang) */}
              <g style={{ opacity: isHoldingPhone ? 0 : 1, transition: "opacity 0.2s" }}>
                <path d="M 2 115 Q 6 122 8 118 Q 10 115 8 112" fill={skinBase}/>
              </g>
            </g>
          </g>

          {/* Lengan Baju Putih Pendek (Sleeve Pundak Rapi Tanpa Semburat) */}
          <circle cx="10" cy="55" r="8" fill="url(#hc-shirtVol)" filter="url(#hc-shadow-light)"/>
          <path d="M 2 55 C 2 45, 18 45, 18 55 C 18 62, 14 69, 13 69 L 3 69 C 2 69, 2 62, 2 55 Z" fill="url(#hc-shirtVol)" filter="url(#hc-shadow-light)"/>
          <path d="M 3 69 Q 8 72 13 69" fill="none" stroke={shirtDark} strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </g>
    </g>
  );
}
