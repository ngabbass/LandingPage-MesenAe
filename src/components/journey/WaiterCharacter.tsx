import React from "react";
import { EASING } from "./JourneyHelpers";

interface WaiterCharacterProps {
  step: number;
  waiterStep: number;
  colors: any;
  isWalking: boolean;
  showFood: boolean;
  isThumbsUp: boolean;
  scaleX?: number;
}

export function WaiterCharacter({ step, waiterStep, colors, isWalking, showFood, isThumbsUp, scaleX }: WaiterCharacterProps) {
  const isDark = colors.isDark;
  const isHappy = step >= 9;
  const stateClass = isWalking ? "wc-walking" : "wc-idle";

  // Waiter specific colors - Beautiful & Elegant Palette
  const uniformMain = "#10B981"; // Emerald Green
  const uniformDark = "#047857"; // Deep Green for shadows
  const uniformLight = "#34D399"; // Green highlight
  const accentGold = "#FBBF24"; 
  const pantsMain = "#1E293B";
  const pantsShadow = "#020617";
  
  // Skin Palette (Soft, warm feminine tone)
  const skinW = "#FDE0C1";
  const skinShadowW = "#E2A888";
  const skinDeepW = "#C27A60";
  const skinHighW = "#FFF2E5";
  const blush = "#FCA5A5";
  
  // Hair Palette (Brunette / Dark Mocha)
  const hairBase = "#2D1B13";
  const hairMid = "#4A2E20";
  const hairHigh = "#7B4F35";
  
  // Lips Palette
  const lipUpper = "#D95C5C";
  const lipLower = "#F27D7D";
  
  // Hat Palette
  const hatColor = "#064E3B"; // Very dark elegant green

  return (
    <g className={stateClass} style={scaleX !== undefined ? { transform: `scaleX(${scaleX})`, transformOrigin: "20px 110px" } : undefined}>
      <defs>
        <style dangerouslySetInnerHTML={{ __html: `
          .wc-walking .wc-thigh-r { animation: wc-thigh-r-walk 0.7s ease-in-out infinite; }
          .wc-walking .wc-calf-r { animation: wc-calf-r-walk 0.7s ease-in-out infinite; }
          .wc-walking .wc-thigh-l { animation: wc-thigh-l-walk 0.7s ease-in-out infinite; }
          .wc-walking .wc-calf-l { animation: wc-calf-l-walk 0.7s ease-in-out infinite; }
          .wc-walking .wc-body { animation: wc-body-bob 0.7s ease-in-out infinite; }

          @keyframes wc-thigh-r-walk {
            0%, 100% { transform: rotate(-20deg); }
            50% { transform: rotate(18deg); }
          }
          @keyframes wc-calf-r-walk {
            0%, 100% { transform: rotate(26deg); }
            50% { transform: rotate(2deg); }
          }
          @keyframes wc-thigh-l-walk {
            0%, 100% { transform: rotate(18deg); }
            50% { transform: rotate(-20deg); }
          }
          @keyframes wc-calf-l-walk {
            0%, 100% { transform: rotate(2deg); }
            50% { transform: rotate(26deg); }
          }
          @keyframes wc-body-bob {
            0%, 50%, 100% { transform: translateY(0); }
            25%, 75% { transform: translateY(-6px); }
          }

          /* Idle breathe animation for waiter when standing */
          .wc-idle .wc-body { animation: wc-body-breathe 3s ease-in-out infinite; }
          @keyframes wc-body-breathe {
            0%, 100% { transform: translateY(0) scaleY(1); }
            50% { transform: translateY(-1.5px) scaleY(1.02); }
          }
        `}} />

        {/* HYPER-DETAILED GRADIENTS */}
        <linearGradient id="fSkinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={skinHighW} />
          <stop offset="40%" stopColor={skinW} />
          <stop offset="90%" stopColor={skinShadowW} />
          <stop offset="100%" stopColor={skinDeepW} />
        </linearGradient>

        <linearGradient id="fArmGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={skinHighW} />
          <stop offset="50%" stopColor={skinW} />
          <stop offset="100%" stopColor={skinShadowW} />
        </linearGradient>

        <linearGradient id="fShirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={uniformLight} />
          <stop offset="50%" stopColor={uniformMain} />
          <stop offset="100%" stopColor={uniformDark} />
        </linearGradient>

        <linearGradient id="fPantsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="40%" stopColor={pantsMain} />
          <stop offset="100%" stopColor={pantsShadow} />
        </linearGradient>

        <linearGradient id="fApronGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        <linearGradient id="fHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={hairMid} />
          <stop offset="30%" stopColor={hairBase} />
          <stop offset="100%" stopColor="#110A07" />
        </linearGradient>

        <linearGradient id="fHatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="50%" stopColor={hatColor} />
          <stop offset="100%" stopColor="#022C22" />
        </linearGradient>

        <linearGradient id="trayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        <filter id="fSoftShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.2" />
        </filter>
        <filter id="fGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="dropShadowObj" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* --- FLOOR SHADOW --- */}
      <ellipse cx="20" cy="210" rx="24" ry="5" fill="rgba(0,0,0,0.25)" filter="url(#fSoftShadow)"/>

      {/* --- LEGS GROUP --- */}
      <g>
        {/* Right Leg (Back) - Shifted X by +3, nested thigh & calf for knee animation */}
        <g className="wc-thigh-r" style={{ transformOrigin: "21px 115px" }}>
          {/* Sendi Pinggul (Hip Joint) */}
          <circle cx="21" cy="115" r="6" fill="url(#fPantsGrad)"/>
          {/* Paha Atas */}
          <path d="M 15 115 C 23 115, 26 140, 25 160 C 17 160, 13 130, 15 115 Z" fill="url(#fPantsGrad)"/>
          
          {/* Calf / Lower Leg Subgroup */}
          <g className="wc-calf-r" style={{ transformOrigin: "21px 160px" }}>
            {/* Sendi Lutut (Knee Joint) */}
            <circle cx="21" cy="160" r="5" fill="url(#fPantsGrad)"/>
            {/* Betis Bawah */}
            <path d="M 16 160 C 26 160, 29 195, 26 198 C 18 198, 15 180, 16 160 Z" fill="url(#fPantsGrad)"/>
            {/* Sepatu */}
            <path d="M 18 198 C 25 195, 35 198, 32 205 C 22 205, 14 205, 18 198 Z" fill="#020617"/>
            <path d="M 18 198 C 25 198, 30 200, 32 205 L 18 205 Z" fill="#1E293B"/>
            <rect x="20" y="204" width="4" height="2" fill="#000000"/>
          </g>
        </g>
        
        {/* Left Leg (Front) - Shifted X by +6, nested thigh & calf for knee animation */}
        <g className="wc-thigh-l" style={{ transformOrigin: "11px 115px" }}>
          {/* Sendi Pinggul (Hip Joint) */}
          <circle cx="11" cy="115" r="6" fill="url(#fPantsGrad)" filter="url(#fSoftShadow)"/>
          {/* Paha Atas */}
          <path d="M 5 115 C 17 115, 18 140, 15 160 C 7 160, 3 130, 5 115 Z" fill="url(#fPantsGrad)" filter="url(#fSoftShadow)"/>
          
          {/* Calf / Lower Leg Subgroup */}
          <g className="wc-calf-l" style={{ transformOrigin: "11px 160px" }}>
            {/* Sendi Lutut (Knee Joint) */}
            <circle cx="11" cy="160" r="5.5" fill="url(#fPantsGrad)"/>
            {/* Betis Bawah */}
            <path d="M 5.5 160 C 16.5 160, 18 195, 14 198 C 6 198, 4 180, 5.5 160 Z" fill="url(#fPantsGrad)"/>
            {/* Garis Lipatan Celana */}
            <line x1="11" y1="120" x2="9" y2="195" stroke="#334155" strokeWidth="1" opacity="0.4"/>
            {/* Sepatu */}
            <path d="M 8 198 C 16 195, 24 198, 20 205 C 10 205, 2 205, 8 198 Z" fill="#0F172A"/>
            <path d="M 8 198 C 16 198, 20 200, 20 205 L 8 205 Z" fill="#334155"/>
            <rect x="10" y="204" width="4" height="2" fill="#000000"/>
          </g>
        </g>
      </g>

      {/* Bobbing Body Group */}
      <g className="wc-body" style={{ transformOrigin: "20px 115px" }}>
        
        {/* Rambut Belakang (Model Cepol/Bun Rapi Profesional) */}
        <circle cx="10" cy="35" r="7" fill={hairBase} filter="url(#fSoftShadow)"/>
        <path d="M 5 25 C -2 30, 2 45, 15 45 C 20 45, 25 35, 20 25 Z" fill={hairBase}/>
        <path d="M 6 35 Q 10 40 14 35" fill="none" stroke="#110A07" strokeWidth="1.5" strokeLinecap="round"/>

        {/* --- LEFT ARM (Holding Left Side of Tray - Back Layer) --- */}
        <g style={{ transformOrigin: "32px 62px", transform: isThumbsUp ? "rotate(-5deg)" : "rotate(-20deg)", transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <circle cx="32" cy="62" r="6" fill="url(#fShirtGrad)" filter="url(#fSoftShadow)"/>
          {/* Upper Arm */}
          <path d="M 27 62 L 28 90 L 36 90 L 37 62 Z" fill="url(#fShirtGrad)"/>
          <circle cx="32" cy="90" r="4.5" fill="url(#fShirtGrad)"/>
          
          {/* Lower Arm & Hand */}
          <g style={{ transformOrigin: "32px 90px", transform: isThumbsUp ? "rotate(-75deg)" : "rotate(-40deg)", transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
            <path d="M 29 92 L 30 120 L 34 120 L 35 92 Z" fill="url(#fArmGrad)"/>
            {/* Tangan Kiri Terbuka Menopang Nampan */}
            <path d="M 30 120 C 28 128, 36 128, 34 120 Z" fill="url(#fSkinGrad)"/>
          </g>
        </g>

        {/* --- TORSO & GREEN UNIFORM --- */}
        <g>
          {/* Feminine Shirt Silhouette */}
          <path d="M -2 55 C 12 50, 28 50, 42 55 C 45 70, 38 85, 32 100 C 35 110, 35 120, 30 120 L 8 120 C 5 120, 5 110, 8 100 C 2 85, -5 70, -2 55 Z" fill="url(#fShirtGrad)" filter="url(#fSoftShadow)"/>
          
          <path d="M 4 65 C 12 78, 28 78, 36 65" fill="none" stroke={uniformDark} strokeWidth="1.5" opacity="0.4"/>
          <path d="M -2 55 C 5 70, 8 85, 15 100" fill="none" stroke={uniformDark} strokeWidth="2" opacity="0.3"/>
          <path d="M 42 55 C 35 70, 32 85, 25 100" fill="none" stroke={uniformDark} strokeWidth="2" opacity="0.3"/>
          
          <path d="M 12 60 C 15 70, 15 80, 12 90" fill="none" stroke={uniformLight} strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
          <path d="M 28 60 C 25 70, 25 80, 28 90" fill="none" stroke={uniformLight} strokeWidth="2" opacity="0.6" strokeLinecap="round"/>

          <path d="M 14 53 L 20 63 L 26 53 Z" fill="#F8FAFC" filter="url(#fSoftShadow)"/>
          <path d="M 14 53 L 18 60 L 12 56 Z" fill="#E2E8F0"/>
          <path d="M 26 53 L 22 60 L 28 56 Z" fill="#E2E8F0"/>

          <path d="M 16 60 C 18 65, 22 65, 24 60 Z" fill="#B45309"/>
          <path d="M 17 61 C 20 64, 20 64, 23 61 L 20 66 Z" fill={accentGold}/>
          <circle cx="20" cy="65" r="2" fill="#F59E0B" filter="url(#fSoftShadow)"/>
          <path d="M 19 66 C 15 72, 12 78, 14 80 C 16 75, 18 70, 20 67 Z" fill={accentGold}/>
          <path d="M 21 66 C 25 72, 28 78, 26 80 C 24 75, 22 70, 20 67 Z" fill="#FCD34D"/>

          <circle cx="20" cy="78" r="1.5" fill="#FFFFFF" opacity="0.9"/>
          <circle cx="20" cy="88" r="1.5" fill="#FFFFFF" opacity="0.9"/>
          <circle cx="20" cy="98" r="1.5" fill="#FFFFFF" opacity="0.9"/>

          <rect x="8" y="70" width="8" height="3" rx="0.5" fill={accentGold} filter="url(#fSoftShadow)"/>
          <rect x="8" y="70" width="8" height="1" fill="#FEF3C7" opacity="0.6"/>
        </g>

        {/* --- APRON --- */}
        <g>
          {/* Rok/Apron: Atasnya mepet pinggang (X=7 s/d 33), bawahnya melebar dan melengkung keluar (A-Line convex) */}
          <path d="M 7 108 C 18 110, 22 110, 33 108 C 39 125, 45 145, 44 160 L -4 160 C -5 145, 1 125, 7 108 Z" fill="url(#fApronGrad)" filter="url(#fSoftShadow)"/>
          {/* Sabuk Apron Mepet Pinggang */}
          <path d="M 6 106 C 15 108, 25 108, 34 106 L 33 111 C 25 113, 15 113, 7 111 Z" fill="#F1F5F9" filter="url(#fSoftShadow)"/>
          
          {/* Lipatan Rok yang Melengkung Keluar Mengikuti Bentuk Rok */}
          <path d="M 10 110 Q 5 135, 2 156" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 16 111 Q 13 138, 12 158" fill="none" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
          <path d="M 24 111 Q 27 138, 28 158" fill="none" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
          <path d="M 30 110 Q 35 135, 38 156" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round"/>
          
          {/* Pita Apron disesuaikan dengan posisi pinggang baru (32, 108) */}
          <g transform="translate(32, 108)">
            <path d="M 0 0 C 4 -4, 8 2, 0 4 Z" fill="#FFFFFF"/>
            <path d="M 0 0 C -4 -4, -8 2, 0 4 Z" fill="#E2E8F0"/>
            <circle cx="0" cy="2" r="1.5" fill="#CBD5E1"/>
            <path d="M 0 3 C 2 10, 6 15, 8 16 C 6 12, 2 8, 0 3 Z" fill="#FFFFFF"/>
            <path d="M -1 3 C -3 10, -5 18, -2 20 C -4 15, -2 8, 0 3 Z" fill="#F1F5F9"/>
          </g>

          {/* Kantong/Pita Tengah Apron Disesuaikan Centered */}
          <path d="M 15 120 L 25 120 L 24 132 C 20 135, 20 135, 16 132 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
          <line x1="17" y1="123" x2="23" y2="123" stroke="#CBD5E1" strokeWidth="1"/>
        </g>

        {/* --- HEAD, FACE & BEAUTIFUL FEATURES --- */}
        <g>
          {/* Slender Neck */}
          <path d="M 16 45 L 24 45 L 23 56 L 17 56 Z" fill="url(#fSkinGrad)"/>
          <path d="M 16 45 L 24 45 L 22 49 L 18 49 Z" fill={skinShadowW} opacity="0.8"/>
          <path d="M 14 54 Q 18 56 20 54 M 26 54 Q 22 56 20 54" fill="none" stroke={skinDeepW} strokeWidth="0.5" opacity="0.6"/>

          {/* Face Base */}
          <ellipse cx="20" cy="27" rx="17" ry="19" fill="url(#fSkinGrad)" filter="url(#fSoftShadow)"/>
          
          {/* Cheekbones / Blush */}
          <ellipse cx="8" cy="31" rx="5" ry="3.5" fill={blush} opacity="0.4" filter="url(#fGlow)"/>
          <ellipse cx="32" cy="31" rx="5" ry="3.5" fill={blush} opacity="0.4" filter="url(#fGlow)"/>

          {/* High-Detail Eyes */}
          <g>
            <g style={{ opacity: isHappy ? 0 : 1, transition: "opacity 0.4s ease" }}>
              <path d="M 6 26 Q 10 23 14 26 Q 10 28 6 26 Z" fill="#FFFFFF"/>
              <path d="M 26 26 Q 30 23 34 26 Q 30 28 26 26 Z" fill="#FFFFFF"/>
              
              <circle cx="10" cy="25.5" r="2.2" fill="#654321"/>
              <circle cx="30" cy="25.5" r="2.2" fill="#654321"/>
              
              <circle cx="10" cy="25.5" r="1" fill="#000000"/>
              <circle cx="30" cy="25.5" r="1" fill="#000000"/>
              
              <circle cx="9" cy="24.5" r="0.6" fill="#FFFFFF"/>
              <circle cx="10.8" cy="26" r="0.3" fill="#FFFFFF"/>
              <circle cx="29" cy="24.5" r="0.6" fill="#FFFFFF"/>
              <circle cx="30.8" cy="26" r="0.3" fill="#FFFFFF"/>
              
              <path d="M 5 26 Q 10 22 15 26" fill="none" stroke="#110A07" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 25 26 Q 30 22 35 26" fill="none" stroke="#110A07" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="6" y1="25" x2="4" y2="23" stroke="#110A07" strokeWidth="1" strokeLinecap="round"/>
              <line x1="7" y1="24" x2="6" y2="22" stroke="#110A07" strokeWidth="0.8" strokeLinecap="round"/>
              <line x1="34" y1="25" x2="36" y2="23" stroke="#110A07" strokeWidth="1" strokeLinecap="round"/>
              <line x1="33" y1="24" x2="34" y2="22" stroke="#110A07" strokeWidth="0.8" strokeLinecap="round"/>
            </g>

            {/* Happy Squinted Eyes */}
            <g style={{ opacity: isHappy ? 1 : 0, transition: "opacity 0.4s ease" }}>
              <path d="M 6 25 Q 10 22 14 25" fill="none" stroke="#110A07" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 26 25 Q 30 22 34 25" fill="none" stroke="#110A07" strokeWidth="2" strokeLinecap="round"/>
              <line x1="6" y1="24" x2="4" y2="22" stroke="#110A07" strokeWidth="1" strokeLinecap="round"/>
              <line x1="34" y1="24" x2="36" y2="22" stroke="#110A07" strokeWidth="1" strokeLinecap="round"/>
            </g>

            <path d="M 6 23 Q 10 20 14 23" fill="none" stroke={skinDeepW} strokeWidth="0.5" opacity="0.6"/>
            <path d="M 26 23 Q 30 20 34 23" fill="none" stroke={skinDeepW} strokeWidth="0.5" opacity="0.6"/>

            <path d="M 5 20 Q 9 17 14 19" fill="none" stroke={hairBase} strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M 26 19 Q 31 17 35 20" fill="none" stroke={hairBase} strokeWidth="1.8" strokeLinecap="round"/>
          </g>

          {/* Delicate Nose */}
          <path d="M 20 26 Q 18 31 20 33" fill="none" stroke={skinDeepW} strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          <path d="M 18 33 Q 20 34 22 33" fill="none" stroke={skinDeepW} strokeWidth="1" strokeLinecap="round" opacity="0.8"/>
          <circle cx="18" cy="33.5" r="0.5" fill={skinShadowW}/>
          <circle cx="22" cy="33.5" r="0.5" fill={skinShadowW}/>
          <line x1="20" y1="27" x2="20" y2="32" stroke={skinHighW} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>

          {/* Lips & Smile */}
          <g transform="translate(0, 36)">
            <path d="M 12 0 Q 12 2 14 4" fill="none" stroke={skinDeepW} strokeWidth="0.5" opacity="0.5"/>
            <path d="M 28 0 Q 28 2 26 4" fill="none" stroke={skinDeepW} strokeWidth="0.5" opacity="0.5"/>
            
            <g style={{ opacity: isHappy ? 0 : 1, transition: "opacity 0.4s ease" }}>
              <path d="M 13 2 Q 20 5 27 2" fill="none" stroke="#991B1B" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M 14 2 Q 20 0 26 2 Q 20 4 14 2 Z" fill={lipUpper}/>
              <path d="M 14 2 Q 20 7 26 2 Q 20 4 14 2 Z" fill={lipLower}/>
              <path d="M 17 3 Q 20 5 23 3" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" strokeLinecap="round"/>
            </g>

            <g style={{ opacity: isHappy ? 1 : 0, transition: "opacity 0.4s ease" }}>
              <path d="M 12 0 Q 20 8 28 0 Z" fill="#7F1D1D"/>
              <path d="M 13 0 Q 20 4 27 0 Z" fill="#FFFFFF"/>
              <path d="M 16 4 Q 20 7 24 4 Q 20 8 16 4 Z" fill="#FCA5A5"/>
            </g>
          </g>

          {/* Ears with Pearl Earrings */}
          <g>
            <path d="M 4 25 C 1 23, 1 28, 3 30 Z" fill="url(#fSkinGrad)"/>
            <circle cx="2" cy="29" r="1.5" fill="#F8FAFC" filter="url(#fSoftShadow)"/>
            <circle cx="1.5" cy="28.5" r="0.5" fill="#FFFFFF"/>
            
            <path d="M 36 25 C 39 23, 39 28, 37 30 Z" fill="url(#fSkinGrad)"/>
            <circle cx="38" cy="29" r="1.5" fill="#F8FAFC" filter="url(#fSoftShadow)"/>
            <circle cx="37.5" cy="28.5" r="0.5" fill="#FFFFFF"/>
          </g>

          {/* Front Hair */}
          <g>
            <path d="M 3 20 C 3 5, 10 -2, 20 -2 C 30 -2, 37 5, 37 20 C 35 15, 25 10, 20 12 C 15 10, 5 15, 3 20 Z" fill="url(#fHairGrad)"/>
            <path d="M 20 12 C 15 10, 5 12, 1 22 C -2 30, -3 35, 1 42 C 0 35, 4 25, 12 18 C 15 15, 18 13, 20 12 Z" fill={hairBase}/>
            <path d="M 20 12 C 25 10, 35 12, 39 22 C 42 30, 43 35, 39 42 C 40 35, 36 25, 28 18 C 25 15, 22 13, 20 12 Z" fill={hairBase}/>
            <path d="M 2 25 Q 5 40 8 45 Q 6 35 4 25 Z" fill={hairMid}/>
            <path d="M 38 25 Q 35 40 32 45 Q 34 35 36 25 Z" fill={hairMid}/>
            
            <path d="M 6 15 Q 12 10 18 13" fill="none" stroke={hairHigh} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M 22 13 Q 28 10 34 15" fill="none" stroke={hairHigh} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M 2 28 Q 4 35 6 40" fill="none" stroke={hairHigh} strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
            <path d="M 38 28 Q 36 35 34 40" fill="none" stroke={hairHigh} strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
          </g>

          {/* ELEGANT CAFE HAT (Forward Baseball Style) */}
          <g transform="translate(4, -8) rotate(8)">
            <path d="M 20 5 Q 35 0 40 8 Q 30 12 20 10 Z" fill="#022C22" filter="url(#fSoftShadow)"/>
            <path d="M 5 10 C 5 -8, 25 -8, 28 10 Z" fill="url(#fHatGrad)" filter="url(#fSoftShadow)"/>
            <path d="M 22 5 Q 32 2 37 7" fill="none" stroke="#0F766E" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
            <circle cx="16.5" cy="-2.5" r="2.5" fill={accentGold}/>
            <circle cx="16" cy="-3" r="1" fill="#FEF3C7"/>
          </g>
        </g>

        {/* --- TRAY AND CLOCHE (Centered between both hands) --- */}
        <g style={{
          /* Saat thumbs up (step 10), nampan bergeser ke kiri menyeimbangkan ke tangan kiri */
          transform: isThumbsUp ? "translate(35px, 104px)" : "translate(45px, 104px)",
          transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}>
          <ellipse cx="0" cy="0" rx="35" ry="5" fill="#334155" filter="url(#fSoftShadow)"/>
          <ellipse cx="0" cy="-2" rx="33" ry="4" fill="url(#trayGrad)"/>
          <ellipse cx="0" cy="-2" rx="28" ry="2.5" fill="none" stroke="#F8FAFC" strokeWidth="1" opacity="0.8"/>
          {/* Uap Hangat Nampan */}
          <path d="M -20 -2 Q -25 -10 -18 -15" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" strokeLinecap="round">
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M 20 -2 Q 25 -12 18 -18" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" strokeLinecap="round">
            <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin="1s"/>
          </path>

          {/* Inline Food & Drink on Tray */}
          <g style={{
            transform: showFood ? "scale(1)" : "scale(0)",
            transformOrigin: "0px 0px",
            transition: showFood ? "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none"
          }}>
            <g transform="translate(0, -2) scale(0.48) translate(-20, -26)">
              {/* Ceramic Plate */}
              <ellipse cx="20" cy="26" rx="45" ry="16" fill={isDark ? "#334155" : "#CBD5E1"} filter="url(#dropShadowObj)"/>
              <ellipse cx="20" cy="24" rx="38" ry="12" fill={isDark ? "#1E293B" : "#F8FAFC"}/>
              <ellipse cx="20" cy="24" rx="28" ry="8" fill={isDark ? "#0F172A" : "#F1F5F9"}/>
              
              {/* Nasi Goreng Mound (Textured layers) */}
              <path d="M -5 20 C -5 5, 45 5, 45 20 C 45 28, -5 28, -5 20 Z" fill="#D97706"/>
              <path d="M 0 18 C 0 5, 40 5, 40 18 C 40 25, 0 25, 0 18 Z" fill="#F59E0B"/>
              <path d="M 5 15 C 5 5, 35 5, 35 15 C 35 20, 5 20, 5 15 Z" fill="#FBBF24"/>
              {/* Rice grains texture hint */}
              <circle cx="10" cy="12" r="1.5" fill="#FFFBEB" opacity="0.6"/>
              <circle cx="20" cy="8" r="1.5" fill="#FFFBEB" opacity="0.6"/>
              <circle cx="30" cy="14" r="1.5" fill="#FFFBEB" opacity="0.6"/>
              <circle cx="15" cy="16" r="1.5" fill="#FFFBEB" opacity="0.6"/>
              
              {/* Sunny Side Up Egg (Telur Mata Sapi) */}
              <path d="M 8 10 C 10 2, 28 0, 32 8 C 35 15, 20 20, 8 10 Z" fill="#FFFFFF" filter="url(#dropShadowObj)"/>
              {/* Yolk */}
              <ellipse cx="20" cy="8" rx="7" ry="5" fill="#F59E0B"/>
              <ellipse cx="19" cy="7" rx="5" ry="3" fill="#FBBF24"/>
              <circle cx="17" cy="6" r="1.5" fill="#FFFFFF" opacity="0.8"/>

              {/* Garnishes (Cucumber, Tomato, Kerupuk) */}
              {/* Cucumber slices */}
              <ellipse cx="-2" cy="20" rx="6" ry="3" fill="#16A34A" style={{ transform: "rotate(-20deg)", transformOrigin: "-2px 20px" }}/>
              <ellipse cx="-2" cy="20" rx="4" ry="2" fill="#D9F99D" style={{ transform: "rotate(-20deg)", transformOrigin: "-2px 20px" }}/>
              <ellipse cx="4" cy="24" rx="6" ry="3" fill="#16A34A"/>
              <ellipse cx="4" cy="24" rx="4" ry="2" fill="#D9F99D"/>
              {/* Tomato Slice */}
              <ellipse cx="42" cy="22" rx="7" ry="4" fill="#DC2626"/>
              <ellipse cx="42" cy="22" rx="5" ry="3" fill="#EF4444"/>
              {/* Kerupuk (Prawn Crackers) */}
              <path d="M 35 5 C 45 -5, 50 10, 42 15 Z" fill="#FCA5A5" opacity="0.9" filter="url(#dropShadowObj)"/>
              <path d="M 38 8 C 42 2, 48 10, 42 12 Z" fill="#FEE2E2"/>

              {/* Steamy Goodness */}
              <path d="M 15 0 Q 18 -10 12 -20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" filter="url(#fGlow)">
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="d" values="M 15 0 Q 18 -10 12 -20; M 15 0 Q 12 -10 18 -20; M 15 0 Q 18 -10 12 -20" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M 28 2 Q 25 -8 30 -18" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" filter="url(#fGlow)">
                <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
                <animate attributeName="d" values="M 28 2 Q 25 -8 30 -18; M 28 2 Q 32 -8 25 -18; M 28 2 Q 25 -8 30 -18" dur="2.5s" repeatCount="indefinite"/>
              </path>

              {/* Premium Iced Drink (Es Teh Manis / Cocktail) */}
              <g transform="translate(65, -10)">
                {/* Coaster */}
                <ellipse cx="12" cy="35" rx="18" ry="6" fill={isDark ? "#1E293B" : "#94A3B8"}/>
                {/* Glass Shadow */}
                <path d="M 0 32 L 24 32 L 35 15 L -10 15 Z" fill="rgba(0,0,0,0.1)"/>
                {/* Tall Glass Base */}
                <path d="M 2 32 C 2 34, 22 34, 22 32 L 24 0 L 0 0 Z" fill="rgba(186,230,253,0.3)" stroke={isDark ? "#64748B" : "#E2E8F0"} strokeWidth="1.5" strokeLinejoin="round"/>
                {/* Liquid (Tea/Cola) */}
                <path d="M 2 30 C 2 32, 22 32, 22 30 L 23 8 C 15 10, 8 6, 1 8 Z" fill="rgba(180,83,9,0.85)"/>
                {/* Condensation / Highlights */}
                <line x1="4" y1="5" x2="4" y2="28" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
                <line x1="20" y1="8" x2="20" y2="25" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
                
                {/* Ice Cubes (Layered) */}
                <rect x="5" y="15" width="8" height="8" rx="2" fill="rgba(255,255,255,0.8)" transform="rotate(15 9 19)"/>
                <rect x="12" y="20" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.6)" transform="rotate(-20 15 23)"/>
                <rect x="8" y="8" width="9" height="9" rx="2" fill="rgba(255,255,255,0.9)" transform="rotate(45 12 12)"/>
                
                {/* Lemon Slice Garnish */}
                <path d="M 20 0 A 10 10 0 0 1 20 20" fill="#FDE047" stroke="#EAB308" strokeWidth="2"/>
                <path d="M 20 3 A 7 7 0 0 1 20 17" fill="none" stroke="#FEF08A" strokeWidth="1"/>

                {/* Red Striped Straw */}
                <path d="M 6 30 L 14 -15" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
                <path d="M 6 30 L 14 -15" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round"/>
              </g>
            </g>
          </g>
        </g>

        {/* --- RIGHT ARM (Front, Holding Right Side of Tray -> Thumbs Up) --- */}
        <g style={{ transformOrigin: "0px 65px", transform: isThumbsUp ? "rotate(-45deg)" : "rotate(-15deg)", transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <circle cx="0" cy="65" r="6" fill="url(#fShirtGrad)" filter="url(#fSoftShadow)"/>
          {/* Upper Arm */}
          <path d="M -5 65 L -4 90 L 4 90 L 5 65 Z" fill="url(#fShirtGrad)"/>
          <circle cx="0" cy="90" r="4.5" fill="url(#fShirtGrad)"/>

          {/* Lower Arm */}
          <g style={{ transformOrigin: "0px 90px", transform: isThumbsUp ? "rotate(-45deg)" : "rotate(-45deg)", transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
            <rect x="-5" y="88" width="10" height="4" rx="1.5" fill={uniformDark}/>
            <path d="M -3 92 L -2 120 L 2 120 L 3 92 Z" fill="url(#fArmGrad)"/>

            {/* Flat Hand: Memegang Nampan (Hilang saat Thumbs Up) */}
            <g style={{ opacity: isThumbsUp ? 0 : 1, transition: "opacity 0.3s ease" }}>
              <path d="M -2 120 C -5 128, 5 128, 2 120 Z" fill="url(#fSkinGrad)"/>
            </g>

            {/* Thumbs Up Hand (Tampil di Step 10) */}
            <g style={{ 
              opacity: isThumbsUp ? 1 : 0, 
              transition: "opacity 0.3s ease", 
              transform: "translate(0px, 120px) rotate(90deg)" 
            }}>
              {/* Kepalan Tangan (Fist) */}
              <rect x="-4" y="-2" width="8" height="7" rx="2" fill="url(#fSkinGrad)"/>
              {/* Jempol Tegak (Thumb) */}
              <path d="M -1 -2 L -1 -7 C -1 -9, 2 -9, 2 -7 L 2 -2 Z" fill="url(#fSkinGrad)"/>
              {/* Detail Jari Terkepal */}
              <line x1="-3" y1="1" x2="1" y2="1" stroke={skinDeepW} strokeWidth="0.8"/>
              <line x1="-3" y1="3" x2="1" y2="3" stroke={skinDeepW} strokeWidth="0.8"/>
            </g>
          </g>
        </g>

      </g>
    </g>
  );
}
