import React, { useState, useEffect, useRef } from "react";
import { HumanCharacter } from "./CustomerCharacter";
import { WaiterCharacter } from "./WaiterCharacter";

interface CafeEnvironmentProps {
  step: number;
  prevStep: number;
  colors: any;
  isWaiterWalking: boolean;
  waiterStep: number;
}

export function CafeEnvironment({ step, prevStep, colors, isWaiterWalking, waiterStep }: CafeEnvironmentProps) {
  const isDark = colors.isDark;
  const showBubble = step === 9;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const [activeHologram,  setActiveHologram]  = useState(false);
  // Waiter: stays visible during walk-out, only hides after reaching off-screen
  const [waiterVisible,   setWaiterVisible]   = useState(step >= 8 || waiterStep >= 8);
  const [waiterX,         setWaiterX]         = useState(1100);
  const [waiterWalking,   setWaiterWalking]   = useState(false);
  const [waiterThumbsUp,  setWaiterThumbsUp]  = useState(false);
  const [waiterSnap,      setWaiterSnap]      = useState(false);
  const [waiterScaleX,    setWaiterScaleX]    = useState(1);
  const [tableFoodActive,  setTableFoodActive]  = useState(step >= 9);
  const [waiterFoodActive, setWaiterFoodActive] = useState(waiterStep === 8 && step < 9);

  // ── Customer Animation State Machine ──────────────────────────────────────
  // customerX      : horizontal SVG position (translateX)
  // customerWalking: activates walk-cycle leg animation
  // customerExiting: overrides isSitting so legs can straighten for stand-up/exit
  // customerScaleX : undefined = face right | -1 = face left (exit)
  // snap           : disables CSS transition for instant repositioning
  const ENTRY_X  = -200; // off-screen left — walk-in start point
  const IDLE_X   =  215; // standing at table (steps 1-7)
  const SEATED_X =  225; // seated at table  (steps 8-9)
  const EXIT_X   = -250; // off-screen left  — walk-out destination
  const getBaseX = (s: number) => s >= 8 ? SEATED_X : IDLE_X;

  const [customerX,       setCustomerX]       = useState(() => step === 0 ? ENTRY_X : getBaseX(step));
  const [customerWalking, setCustomerWalking] = useState(step === 0);
  const [customerExiting, setCustomerExiting] = useState(false);
  const [customerScaleX,  setCustomerScaleX]  = useState<number | undefined>(undefined);
  const [snap,            setSnap]            = useState(false);
  const [displayStep,     setDisplayStep]     = useState(step);

  useEffect(() => {
    const prevSeated   = prevStep >= 8;           // was sitting
    const prevStanding = prevStep > 0 && prevStep < 8; // was standing w/ phone
    const nowSeated    = step >= 8;
    const toStep0      = step === 0;
    // Seated→standing (not going to step 0, e.g. click step 4 while on step 8)
    const seatToStand  = prevSeated && !nowSeated && !toStep0;

    // ─────────────────────────────────────────────────────────────────────────
    //  A) GOING BACK TO STEP 0 FROM ANYWHERE  →  exit walk-out + re-enter
    // ─────────────────────────────────────────────────────────────────────────
    if (toStep0 && prevStep > 0) {

      if (prevSeated) {
        // A1: Was sitting → stand up first, then walk out left
        setCustomerExiting(true);   // legs straighten (override isSitting)
        setCustomerWalking(false);
        setCustomerScaleX(undefined);
        setDisplayStep(prevStep);
        setSnap(false);

        // 500ms: legs fully straight → face left + walk out
        const t1 = setTimeout(() => {
          setCustomerScaleX(-1);
          setCustomerWalking(true);
          setCustomerX(EXIT_X);
        }, 500);

        // 1700ms: character has left screen → snap to off-screen entry
        const t2 = setTimeout(() => {
          setSnap(true);
          setCustomerX(ENTRY_X);
          setCustomerWalking(false);
          setCustomerExiting(false);
          setCustomerScaleX(undefined);
          setDisplayStep(0);
        }, 1700);

        // 1760ms: re-enable transition + walk in from left
        const t3 = setTimeout(() => {
          setSnap(false);
          setCustomerWalking(true);
          setCustomerX(IDLE_X);
        }, 1760);

        // 3360ms: arrive at table, stop
        const t4 = setTimeout(() => setCustomerWalking(false), 3360);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };

      } else {
        // A2: Was standing (steps 1-7) → immediately face left + walk out, then re-enter
        setDisplayStep(prevStep);
        setCustomerExiting(false);
        setCustomerScaleX(-1);      // face left
        setCustomerWalking(true);
        setCustomerX(EXIT_X);       // walk to off-screen left (1.4s transition)
        setSnap(false);

        // 1350ms: character has left screen → snap to off-screen entry
        const t1 = setTimeout(() => {
          setSnap(true);
          setCustomerX(ENTRY_X);
          setCustomerWalking(false);
          setCustomerScaleX(undefined);
          setDisplayStep(0);
        }, 1350);

        // 1410ms: re-enable + walk in
        const t2 = setTimeout(() => {
          setSnap(false);
          setCustomerWalking(true);
          setCustomerX(IDLE_X);
        }, 1410);

        // 3010ms: arrive, stop
        const t3 = setTimeout(() => setCustomerWalking(false), 3010);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
      }

    // ─────────────────────────────────────────────────────────────────────────
    //  B) INITIAL LOAD  (prevStep === 0, step === 0)
    // ─────────────────────────────────────────────────────────────────────────
    } else if (toStep0) {
      setSnap(true);
      setCustomerX(ENTRY_X);
      setCustomerWalking(false);
      setCustomerExiting(false);
      setCustomerScaleX(undefined);
      setDisplayStep(0);

      const t0 = setTimeout(() => {
        setSnap(false);
        setCustomerWalking(true);
        setCustomerX(IDLE_X);
      }, 50);
      const t1 = setTimeout(() => setCustomerWalking(false), 1650);
      return () => { clearTimeout(t0); clearTimeout(t1); };

    // ─────────────────────────────────────────────────────────────────────────
    //  C) SEATED → STANDING  (e.g. step 8/9 clicked → step 3)
    // ─────────────────────────────────────────────────────────────────────────
    } else if (seatToStand) {
      // Override sitting so legs straighten, hold for 500ms, then glide to IDLE_X
      setCustomerExiting(true);
      setCustomerWalking(false);
      setCustomerScaleX(undefined);
      setDisplayStep(prevStep);
      setSnap(false);

      const t1 = setTimeout(() => {
        setCustomerExiting(false);
        setDisplayStep(step);
        setCustomerX(IDLE_X);
      }, 500);

    // ─────────────────────────────────────────────────────────────────────────
    //  C2) JUMPING FROM OUTSIDE TO ANY STEP >= 2 (Jumping to step 1 bypasses walk, standing still)
    // ─────────────────────────────────────────────────────────────────────────
    } else if (prevStep === 0 && step >= 2) {
      setSnap(true);
      setCustomerX(ENTRY_X);
      setCustomerWalking(false);
      setCustomerExiting(false);
      setCustomerScaleX(undefined);
      setDisplayStep(step);

      const t0 = setTimeout(() => {
        setSnap(false);
        setCustomerWalking(true);
        setCustomerX(getBaseX(step));
      }, 50);
      
      const walkDuration = step >= 8 ? 1900 : 1650;
      const t1 = setTimeout(() => {
        setCustomerWalking(false);
      }, walkDuration);

      return () => { clearTimeout(t0); clearTimeout(t1); };

    // ─────────────────────────────────────────────────────────────────────────
    //  D) ALL OTHER TRANSITIONS  (forward steps, standing→seated, etc.)
    // ─────────────────────────────────────────────────────────────────────────
    } else {
      setSnap(false);
      setCustomerExiting(false);
      setCustomerScaleX(undefined);
      setCustomerWalking(false);
      setCustomerX(getBaseX(step));
      setDisplayStep(step);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    if (step === 1) {
      // Delay showing the hologram until the customer has walked to the table (1.1s) and swung their hand (0.8s)
      const timer = setTimeout(() => {
        setActiveHologram(true);
      }, 1900);
      return () => clearTimeout(timer);
    } else {
      setActiveHologram(false);
    }
  }, [step]);

  const prevWaiterStepRef = useRef(waiterStep);

  // ── Waiter state machine (X coordinate, walking, thumbs-up) ────────────────
  useEffect(() => {
    const prevWaiterStep = prevWaiterStepRef.current;
    prevWaiterStepRef.current = waiterStep;

    const isFromStep9ToPhone = prevWaiterStep === 8 && (step >= 2 && step <= 7);

    if (isFromStep9ToPhone) {
      // Snap instantly to exit, no transition, no walking animation
      setWaiterSnap(true);
      setWaiterWalking(false);
      setWaiterThumbsUp(false);
      setWaiterX(1100);
      setWaiterScaleX(1);
    } else if (waiterStep === 8) {
      if (step >= 9) {
        // Step 10: Stand still at the table while food moves
        setWaiterSnap(false);
        setWaiterWalking(false);
        setWaiterThumbsUp(false);
        setWaiterX(500);
        setWaiterScaleX(-1); // Face left
      } else {
        // Walk to table
        setWaiterSnap(false);
        setWaiterWalking(true);
        setWaiterThumbsUp(false);
        setWaiterX(500);
        setWaiterScaleX(-1); // Face left
        const t = setTimeout(() => {
          setWaiterWalking(false);
        }, 1400);
        return () => clearTimeout(t);
      }
    } else if (waiterStep === 9) {
      // Walk to corner
      setWaiterSnap(false);
      setWaiterWalking(true);
      setWaiterThumbsUp(false); // lower hands while walking
      setWaiterX(800);
      
      // If coming from table (500), walk right (scaleX=1). If coming from off-screen (1100), walk left (scaleX=-1).
      const isComingFromTable = waiterX === 500;
      setWaiterScaleX(isComingFromTable ? 1 : -1);
      
      const t1 = setTimeout(() => {
        setWaiterWalking(false);
        setWaiterThumbsUp(true); // thumbs up once arrived
        setWaiterScaleX(-1); // Turn back or remain facing left/customer!
      }, 1400);
      return () => clearTimeout(t1);
    } else {
      // Transition away: immediately lower thumbs up, and walk to 1100 if visible
      setWaiterSnap(false);
      setWaiterThumbsUp(false);
      setWaiterScaleX(1); // Face right while walking away
      if (waiterX === 500 || waiterX === 800) {
        setWaiterWalking(true);
        setWaiterX(1100);
        const t = setTimeout(() => {
          setWaiterWalking(false);
        }, 1400);
        return () => clearTimeout(t);
      } else {
        setWaiterX(1100);
        setWaiterWalking(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waiterStep, step]);

  // ── Waiter visibility ──────────────────────────────────────────────────────
  // Waiter stays visible during the 1.4s walk to exit, then fades out.
  // Timeout is set to 1100ms so she is completely off-screen (X=1035px+) before fading.
  useEffect(() => {
    if (waiterStep >= 8) {
      setWaiterVisible(true);
    } else {
      const isFromStep9ToPhone = prevWaiterStepRef.current === 8 && (step >= 2 && step <= 7);
      if (isFromStep9ToPhone) {
        setWaiterVisible(false);
      } else {
        const t = setTimeout(() => setWaiterVisible(false), 1100);
        return () => clearTimeout(t);
      }
    }
  }, [waiterStep, step]);

  useEffect(() => {
    const isBackwardFrom10To9 = prevStep === 9 && step === 8;

    if (isBackwardFrom10To9) {
      // 10 to 9: keep food on table and empty tray during the 1.4s walk back
      setTableFoodActive(true);
      setWaiterFoodActive(false);
      
      const t = setTimeout(() => {
        setTableFoodActive(false);
        setWaiterFoodActive(true);
      }, 1400); // 1400ms walk duration
      return () => clearTimeout(t);
    } else {
      // Normal transitions
      setTableFoodActive(step >= 9);
      setWaiterFoodActive(waiterStep === 8 && step < 9);
    }
  }, [step, waiterStep, prevStep]);

  const showQRGlow = activeHologram;
  const isPhoneVisible = step >= 2 && step <= 7;


  return (
    <svg viewBox={isMobile ? "190 0 470 680" : "0 0 900 680"} className="w-full h-full absolute inset-0 z-10 overflow-visible pointer-events-none">
      <defs>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes cling-sparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(45deg); opacity: 1; }
            100% { transform: scale(0) rotate(90deg); opacity: 0; }
          }
          .cling-star {
            transform-origin: center center;
            animation: cling-sparkle 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
        `}} />
        <filter id="softShadowEnv" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="15" stdDeviation="15" floodOpacity={isDark ? "0.3" : "0.12"}/>
        </filter>
        <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <filter id="dropShadowObj" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
        </filter>
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur1"/>
          <feGaussianBlur stdDeviation="10" result="blur2"/>
          <feMerge>
            <feMergeNode in="blur2"/>
            <feMergeNode in="blur1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <linearGradient id="holoConeGrad" x1="0%" y1="0%" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.75"/>
          <stop offset="25%" stopColor="#60A5FA" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0"/>
        </linearGradient>

        <radialGradient id="tableGradEnv" cx="50%" cy="20%" r="70%">
          <stop offset="0%" stopColor={isDark ? "#475569" : "#D97706"} stopOpacity="1"/>
          <stop offset="60%" stopColor={isDark ? "#334155" : "#92400E"} stopOpacity="1"/>
          <stop offset="100%" stopColor={isDark ? "#1E293B" : "#78350F"} stopOpacity="1"/>
        </radialGradient>

        <linearGradient id="floorGradEnv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#0F172A" : "#CBD5E1"} stopOpacity="1"/>
          <stop offset="20%" stopColor={isDark ? "#1E293B" : "#E2E8F0"} stopOpacity="1"/>
          <stop offset="100%" stopColor={isDark ? "#020617" : "#94A3B8"} stopOpacity="1"/>
        </linearGradient>

        <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#0B1121" : "#F8FAFC"}/>
          <stop offset="100%" stopColor={isDark ? "#020617" : "#E2E8F0"}/>
        </linearGradient>

        <linearGradient id="windowGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#1E3A8A" : "#BAE6FD"} stopOpacity="0.3"/>
          <stop offset="50%" stopColor={isDark ? "#1E40AF" : "#E0F2FE"} stopOpacity="0.1"/>
          <stop offset="100%" stopColor={isDark ? "#172554" : "#7DD3FC"} stopOpacity="0.4"/>
        </linearGradient>
      </defs>

      {/* --- BACK WALL --- */}
      <rect x="0" y="0" width="900" height="480" fill="url(#wallGrad)"/>
      {/* Wall Texture / Wainscoting panels */}
      {[0, 150, 300, 450, 600, 750].map(x => (
        <g key={`panel-${x}`} transform={`translate(${x}, 380)`}>
          <rect x="10" y="0" width="130" height="100" rx="4" fill="none" stroke={isDark ? "#1E293B" : "#F1F5F9"} strokeWidth="3" opacity="0.6"/>
          <rect x="20" y="10" width="110" height="80" rx="2" fill="none" stroke={isDark ? "#1E293B" : "#F1F5F9"} strokeWidth="1" opacity="0.4"/>
        </g>
      ))}
      {/* Baseboard */}
      <rect x="0" y="460" width="900" height="20" fill={isDark ? "#020617" : "#94A3B8"}/>
      <line x1="0" y1="460" x2="900" y2="460" stroke={isDark ? "#1E293B" : "#CBD5E1"} strokeWidth="2"/>

      {/* --- FLOOR --- */}
      <rect x="0" y="480" width="900" height="200" fill="url(#floorGradEnv)"/>
      {/* High-detail perspective tiles */}
      <g opacity={isDark ? 0.3 : 0.4}>
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <line key={`v-tile-${i}`} x1={i * 150} y1="480" x2={i * 200 - 100} y2="680" stroke={isDark ? "#334155" : "#FFFFFF"} strokeWidth="2"/>
        ))}
        {[495, 520, 555, 600, 660].map(y => (
          <line key={`h-tile-${y}`} x1="0" y1={y} x2="900" y2={y} stroke={isDark ? "#334155" : "#FFFFFF"} strokeWidth="1.5"/>
        ))}
      </g>
      {/* Floor Reflections */}
      <ellipse cx="450" cy="550" rx="300" ry="50" fill={isDark ? "#3B82F6" : "#FFFFFF"} opacity="0.03" filter="url(#glowBlue)"/>

      <g
        style={{
          transform: isMobile && isPhoneVisible ? "scale(0.8) translate(-80px, 15px) translateZ(0)" : "scale(1) translate(0px, 0px) translateZ(0)",
          transformOrigin: "420px 480px",
          transition: "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)",
          willChange: "transform",
        }}
      >
      {/* --- LARGE ARCHED WINDOW (Left) --- */}
      <g transform="translate(60, 40)">
        {/* Window frame exterior shadow */}
        <rect x="-10" y="-10" width="130" height="250" rx="65" fill={isDark ? "#020617" : "#CBD5E1"} filter="url(#softShadowEnv)"/>
        {/* Main Frame */}
        <rect x="0" y="0" width="110" height="230" rx="55" fill={isDark ? "#1E293B" : "#F8FAFC"}/>
        {/* Glass */}
        <rect x="5" y="5" width="100" height="220" rx="50" fill="url(#windowGlass)"/>
        
        {/* Window Mullions (Grids) */}
        <line x1="55" y1="5" x2="55" y2="225" stroke={isDark ? "#0F172A" : "#E2E8F0"} strokeWidth="6"/>
        <line x1="5" y1="85" x2="105" y2="85" stroke={isDark ? "#0F172A" : "#E2E8F0"} strokeWidth="6"/>
        <line x1="5" y1="155" x2="105" y2="155" stroke={isDark ? "#0F172A" : "#E2E8F0"} strokeWidth="6"/>
        
        {/* Glass reflection streaks */}
        <path d="M 15 20 L 40 80" stroke="#FFFFFF" strokeWidth="8" opacity="0.1" strokeLinecap="round"/>
        <path d="M 25 15 L 50 75" stroke="#FFFFFF" strokeWidth="3" opacity="0.2" strokeLinecap="round"/>

        {/* Dynamic Light rays hitting the floor */}
        <path d="M 55 225 L -50 480 L 120 480 Z" fill={isDark ? "#3B82F6" : "#FDE047"} opacity="0.03" filter="url(#glowBlue)"/>
        <path d="M 55 225 L -10 460 L 80 460 Z" fill={isDark ? "#3B82F6" : "#FDE047"} opacity="0.05" filter="url(#glowBlue)"/>
      </g>

      {/* --- NEON CAFE SIGN / ART (Right Wall) --- */}
      <g transform={isMobile ? "translate(345, 60)" : "translate(680, 60)"}>
        {/* Sign Base Plate */}
        <rect x="0" y="0" width="160" height="90" rx="10" fill={isDark ? "#0F172A" : "#F1F5F9"} filter="url(#softShadowEnv)"/>
        <rect x="5" y="5" width="150" height="80" rx="5" fill={isDark ? "#1E293B" : "#FFFFFF"} stroke={isDark ? "#334155" : "#E2E8F0"} strokeWidth="1"/>
        
        {/* Neon Coffee Cup */}
        <g transform="translate(18, 20)" filter={isDark ? "url(#neonGlow)" : "undefined"}>
          <path d="M 10 30 C 10 45, 30 45, 30 30 L 30 10 L 10 10 Z" fill="none" stroke={isDark ? "#F472B6" : "#DB2777"} strokeWidth="3" strokeLinecap="round"/>
          {/* Cup Handle */}
          <path d="M 30 15 C 40 15, 40 25, 30 25" fill="none" stroke={isDark ? "#F472B6" : "#DB2777"} strokeWidth="3" strokeLinecap="round"/>
          {/* Neon Steam */}
          <path d="M 15 0 Q 20 -5 15 -10" fill="none" stroke={isDark ? "#60A5FA" : "#2563EB"} strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M 25 2 Q 30 -3 25 -8" fill="none" stroke={isDark ? "#60A5FA" : "#2563EB"} strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        {/* Neon Text */}
        <text x="110" y="45" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill={isDark ? "#34D399" : "#059669"} filter={isDark ? "url(#neonGlow)" : "undefined"} style={{ letterSpacing: "2px" }}>CAFE</text>
        <text x="110" y="70" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill={isDark ? "#94A3B8" : "#64748B"} style={{ letterSpacing: "4px" }}>PONOROGO</text>
      </g>

      {/* --- LARGE POTTED PLANT --- */}
      <g transform="translate(800, 292)">
        {/* Pot Shadow */}
        <ellipse cx="40" cy="190" rx="35" ry="8" fill="rgba(0,0,0,0.3)" filter="url(#glowBlue)"/>
        {/* Ceramic Pot */}
        <path d="M 20 190 L 10 100 L 70 100 L 60 190 Z" fill={isDark ? "#1E293B" : "#B45309"}/>
        {/* Pot Rim */}
        <rect x="5" y="90" width="70" height="15" rx="3" fill={isDark ? "#334155" : "#92400E"} filter="url(#dropShadowObj)"/>
        {/* Soil */}
        <ellipse cx="40" cy="90" rx="30" ry="5" fill="#451A03"/>
        
        {/* Monstera Leaves (Highly detailed) */}
        <g opacity="0.95">
          {/* Leaf 1 (Back) */}
          <path d="M 40 90 C 0 30, -20 60, 0 10 C 15 -10, 40 30, 40 90 Z" fill="#065F46"/>
          <path d="M 40 90 C 0 30, -20 60, 0 10" fill="none" stroke="#047857" strokeWidth="2"/>
          {/* Leaf 2 */}
          <path d="M 40 90 C 80 40, 100 70, 80 20 C 60 0, 40 40, 40 90 Z" fill="#047857"/>
          <path d="M 40 90 C 80 40, 100 70, 80 20" fill="none" stroke="#059669" strokeWidth="2"/>
          {/* Leaf 3 (Front Large) */}
          <path d="M 40 90 C 20 40, -10 20, 20 -20 C 50 -50, 60 20, 40 90 Z" fill="#10B981" filter="url(#dropShadowObj)"/>
          <path d="M 40 90 C 20 40, -10 20, 20 -20" fill="none" stroke="#059669" strokeWidth="2.5"/>
          {/* Leaf 4 (Monstera Slits) */}
          <path d="M 40 90 C 60 50, 85 40, 75 10 C 60 -10, 45 35, 40 90 Z" fill="#059669"/>
          <path d="M 40 90 C 60 50, 85 40, 75 10" fill="none" stroke="#10B981" strokeWidth="1.5"/>
        </g>
      </g>

      {/* --- CAFE TABLE DECORATIONS --- */}
      <g transform="translate(420, 360)" filter="url(#dropShadowObj)">
        {/* Wooden Flower Vase */}
        <rect x="85" y="-35" width="10" height="20" rx="2" fill={isDark ? "#475569" : "#D97706"}/>
        <rect x="83" y="-38" width="14" height="4" rx="1" fill={isDark ? "#334155" : "#B45309"}/>
        
        {/* Dried Pampas Grass / Foliage */}
        <g>
          {/* Stem 1 */}
          <path d="M 90 -35 Q 80 -60 70 -65" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.6"/>
          <ellipse cx="70" cy="-65" rx="3" ry="5" fill="#E2E8F0" transform="rotate(-30 70 -65)" opacity="0.8"/>
          {/* Stem 2 */}
          <path d="M 90 -35 Q 90 -65 92 -75" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.6"/>
          <ellipse cx="92" cy="-75" rx="3" ry="6" fill="#F8FAFC" opacity="0.9"/>
          {/* Stem 3 */}
          <path d="M 90 -35 Q 100 -55 110 -60" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.5"/>
          <ellipse cx="110" cy="-60" rx="3" ry="5" fill="#E2E8F0" transform="rotate(30 110 -60)" opacity="0.8"/>
          
          <line x1="7" y1="-38" x2="7" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.3"/>
        </g>
      </g>

      {/* --- MAIN CAFE TABLE --- */}
      <g transform="translate(420, 360)">
        {/* Heavy Table Shadow on floor */}
        <ellipse cx="0" cy="180" rx="120" ry="18" fill="rgba(0,0,0,0.4)" filter="url(#glowBlue)"/>
        
        {/* Central Pedestal Leg */}
        <rect x="-25" y="15" width="50" height="150" rx="10" fill="url(#tableGradEnv)" filter="url(#dropShadowObj)"/>
        <path d="M -20 15 L -10 165 L 10 165 L 20 15 Z" fill="#000000" opacity="0.2"/>
        
        {/* Pedestal Base */}
        <ellipse cx="0" cy="165" rx="60" ry="15" fill={isDark ? "#0F172A" : "#451A03"} filter="url(#dropShadowObj)"/>
        <ellipse cx="0" cy="160" rx="50" ry="10" fill={isDark ? "#1E293B" : "#78350F"}/>
        
        {/* Table Top Base / Thickness */}
        <rect x="-115" y="-5" width="230" height="25" rx="12" fill={isDark ? "#1E293B" : "#78350F"}/>
        {/* Table Surface */}
        <rect x="-120" y="-18" width="240" height="25" rx="12" fill="url(#tableGradEnv)" filter="url(#softShadowEnv)"/>
        {/* Specular Highlight on Table Edge */}
        <path d="M -110 -15 L 110 -15" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.2" strokeLinecap="round"/>

        {/* --- QR CODE TENT CARD --- */}
        <g 
          transform="translate(-15, -36)"
          style={{
            opacity: step >= 4 && step <= 10 ? 0 : 1,
            transition: "opacity 0.6s ease",
            pointerEvents: step >= 4 && step <= 10 ? "none" : "auto"
          }}
        >
          {/* Acrylic Stand Base */}
          <rect x="-22" y="-5" width="44" height="8" rx="2" fill="#FFFFFF" opacity="0.3"/>
          
          {/* Stand Plate */}
          <g style={{ transform: "skewX(-15deg) skewY(-3deg)" }}>
            {/* Premium Acrylic Stand Shadow & Body */}
            <rect x="-19" y="-23" width="38" height="42" rx="4" fill="rgba(0,0,0,0.15)" filter="url(#dropShadowObj)"/>
            <rect x="-18" y="-22" width="36" height="40" rx="3" fill="#FFFFFF"/>
            
            {/* Header Blue Accent Bar */}
            <rect x="-18" y="-22" width="36" height="4" fill="#3B82F6" rx="1"/>
            
            {/* Glossy Acrylic Reflection */}
            <path d="M -16 -20 L 5 -20 L -16 10 Z" fill="#FFFFFF" opacity="0.4"/>
            
            {/* Highly Detailed QR Code Pattern */}
            <g fill="#0F172A" opacity={showQRGlow ? 1 : 0.85} transform="translate(0, -3)">
              {/* Top-Left Finder */}
              <path d="M-13,-11 h8 v8 h-8 z M-12,-10 h6 v6 h-6 z M-10,-8 h2 v2 h-2 z" fillRule="evenodd"/>
              {/* Top-Right Finder */}
              <path d="M5,-11 h8 v8 h-8 z M6,-10 h6 v6 h-6 z M8,-8 h2 v2 h-2 z" fillRule="evenodd"/>
              {/* Bottom-Left Finder */}
              <path d="M-13,7 h8 v8 h-8 z M-12,8 h6 v6 h-6 z M-10,10 h2 v2 h-2 z" fillRule="evenodd"/>
              {/* Timing patterns and alignment pattern */}
              <path d="M-4,-10 h1 v1 h-1 z M-2,-10 h1 v1 h-1 z M0,-10 h1 v1 h-1 z M2,-10 h1 v1 h-1 z" />
              <path d="M-13,-2 h1 v1 h-1 z M-13,0 h1 v1 h-1 z M-13,2 h1 v1 h-1 z M-13,4 h1 v1 h-1 z" />
              {/* Alignment pattern at bottom right */}
              <path d="M6,8 h5 v5 h-5 z M7,9 h3 v3 h-3 z M8,10 h1 v1 h-1 z" fillRule="evenodd"/>
              {/* Real-looking data density modules */}
              <path d="M-4,-8 h2 v1 h-2 z M0,-8 h3 v2 h-3 z M4,-8 h1 v3 h-1 z M-4,-5 h1 v1 h-1 z M-2,-5 h3 v1 h-3 z M3,-5 h2 v2 h-2 z M-4,-3 h3 v1 h-3 z M0,-3 h1 v2 h-1 z M2,-3 h3 v1 h-3 z M-4,-1 h2 v2 h-2 z M-1,-1 h4 v1 h-4 z M4,-1 h1 v3 h-1 z M-4,2 h2 v1 h-2 z M0,2 h3 v1 h-3 z M4,2 h1 v2 h-1 z M-4,4 h1 v2 h-1 z M-2,4 h3 v1 h-3 z M2,4 h2 v1 h-2 z M0,7 h2 v2 h-2 z M3,7 h1 v3 h-1 z M0,10 h3 v1 h-3 z M-4,12 h4 v1 h-4 z M1,12 h2 v2 h-2 z" />
            </g>

            {/* Glowing Scan Effect around QR */}
            {showQRGlow && (
              <g>
                <rect x="-20" y="-24" width="40" height="42" rx="4" fill="none" stroke="#3B82F6" strokeWidth="2.5" filter="url(#glowBlue)">
                  <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite"/>
                </rect>
                {/* Laser Scanning Line over QR (Sweeping) */}
                <line x1="-15" y1="-14" x2="15" y2="-14" stroke="#3B82F6" strokeWidth="2.5" filter="url(#glowBlue)">
                  <animate attributeName="y1" values="-14;11;-14" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="-14;11;-14" dur="2s" repeatCount="indefinite"/>
                </line>
              </g>
            )}

            {/* Label Text inside the skewed group */}
            <text x="0" y="14" textAnchor="middle" fontSize="4.5" fill="#1E293B" fontFamily="sans-serif" fontWeight="950" letterSpacing="0.8px">SCAN ME</text>
          </g>
        </g>

      </g>

      {/* --- CAFE CHAIRS --- */}
      {/* Right Chair (Empty) */}
      <g transform="translate(590, 420)">
        {/* Shadow */}
        <ellipse cx="5" cy="115" rx="35" ry="10" fill="rgba(0,0,0,0.3)" filter="url(#glowBlue)"/>
        {/* Backrest Stand */}
        <rect x="-20" y="-85" width="8" height="110" rx="4" fill={isDark ? "#0F172A" : "#1E293B"}/>
        <rect x="22" y="-85" width="8" height="110" rx="4" fill={isDark ? "#0F172A" : "#1E293B"}/>
        {/* Backrest Cushion */}
        <rect x="-28" y="-95" width="66" height="50" rx="12" fill={isDark ? "#334155" : "#475569"} filter="url(#dropShadowObj)"/>
        {/* Seat Base */}
        <rect x="-35" y="5" width="80" height="20" rx="8" fill={isDark ? "#334155" : "#475569"} filter="url(#dropShadowObj)"/>
        {/* Seat Cushion highlight */}
        <ellipse cx="5" cy="8" rx="35" ry="8" fill={isDark ? "#475569" : "#64748B"} opacity="0.8"/>
        {/* Legs */}
        <rect x="-28" y="25" width="10" height="90" rx="5" fill={isDark ? "#0F172A" : "#1E293B"}/>
        <rect x="28" y="25" width="10" height="90" rx="5" fill={isDark ? "#0F172A" : "#1E293B"}/>
        <line x1="-25" y1="80" x2="30" y2="80" stroke={isDark ? "#1E293B" : "#334155"} strokeWidth="4"/>
      </g>

      {/* Left Chair (Customer's Seat) */}
      <g transform="translate(250, 420)">
        {/* Shadow */}
        <ellipse cx="5" cy="115" rx="35" ry="10" fill="rgba(0,0,0,0.3)" filter="url(#glowBlue)"/>
        {/* Backrest */}
        <rect x="-20" y="-85" width="8" height="110" rx="4" fill={isDark ? "#0F172A" : "#1E293B"}/>
        <rect x="22" y="-85" width="8" height="110" rx="4" fill={isDark ? "#0F172A" : "#1E293B"}/>
        <rect x="-28" y="-95" width="66" height="50" rx="12" fill={isDark ? "#334155" : "#475569"} filter="url(#dropShadowObj)"/>
        {/* Seat Base */}
        <rect x="-35" y="5" width="80" height="20" rx="8" fill={isDark ? "#334155" : "#475569"} filter="url(#dropShadowObj)"/>
        <ellipse cx="5" cy="8" rx="35" ry="8" fill={isDark ? "#475569" : "#64748B"} opacity="0.8"/>
        {/* Legs */}
        <rect x="-28" y="25" width="10" height="90" rx="5" fill={isDark ? "#0F172A" : "#1E293B"}/>
        <rect x="28" y="25" width="10" height="90" rx="5" fill={isDark ? "#0F172A" : "#1E293B"}/>
        <line x1="-25" y1="80" x2="30" y2="80" stroke={isDark ? "#1E293B" : "#334155"} strokeWidth="4"/>
      </g>

      {/* --- CHARACTERS --- */}
      {/* CUSTOMER CHARACTER */}
      <g style={{
        transform: `translate(${customerX}px, ${displayStep >= 8 && !customerExiting ? "245px" : "250px"}) scale(${displayStep >= 8 && !customerExiting ? 1.6 : 1.7})`,
        transition: snap ? "none" : `transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}>
        <HumanCharacter
          step={displayStep}
          colors={{...colors, charShirt: colors.charShirt}}
          forceWalking={customerWalking}
          forceExiting={customerExiting}
          forceScaleX={customerScaleX}
        />
      </g>

      {/* WAITER CHARACTER */}
      {/* waiterVisible: stays true during walk, SetFalse only after walk completes */}
      <g style={{
        transform: `translate(${waiterX}px, 300px) scale(1.45)`,
        transformOrigin: "20px 110px",
        transition: waiterSnap ? "none" : `transform 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease`,
        opacity: waiterVisible ? 1 : 0,
      }}>
        <WaiterCharacter
          step={step}
          waiterStep={waiterStep}
          colors={colors}
          isWalking={waiterWalking}
          showFood={waiterFoodActive}
          isThumbsUp={waiterThumbsUp}
          scaleX={waiterScaleX}
        />
      </g>

      {/* TABLE FOOD & DRINK (GLIDES & ENLARGES FROM TRAY TO TABLE AT STEP 9 / INDEX 9) */}
      <g style={{ 
        transition: `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease`,
        opacity: tableFoodActive ? 1 : 0,
        transform: tableFoodActive 
          ? `translate(370px, 305px) scale(1)` 
          : `translate(565px, 430px) scale(0.696)`,
        transformOrigin: "20px 26px", // centered around the plate
        pointerEvents: "none"
      }}>
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
        <path d="M 15 0 Q 18 -10 12 -20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" filter="url(#glowBlue)">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="d" values="M 15 0 Q 18 -10 12 -20; M 15 0 Q 12 -10 18 -20; M 15 0 Q 18 -10 12 -20" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 28 2 Q 25 -8 30 -18" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" filter="url(#glowBlue)">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          <animate attributeName="d" values="M 28 2 Q 25 -8 30 -18; M 28 2 Q 32 -8 25 -18; M 28 2 Q 25 -8 30 -18" dur="2.5s" repeatCount="indefinite"/>
        </path>

        {/* Premium Iced Drink (Es Teh Manis / Cocktail) */}
        <g transform="translate(65, 0)" style={{ transition: "transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)" }}>
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

      {/* CLING EFFECT / SPARKLING BURST */}
      {tableFoodActive && (
        <g transform="translate(365, 150)"> {/* Centered at speech bubble text */}
          {/* Sparkle 1 */}
          <path className="cling-star" d="M 0 -15 L 3 -5 L 13 -5 L 5 2 L 8 12 L 0 5 L -8 12 L -5 2 L -13 -5 L -3 -5 Z" fill="#FBBF24" style={{ animationDelay: "0.05s" }} transform="translate(-40, -25) scale(0.6)"/>
          {/* Sparkle 2 */}
          <path className="cling-star" d="M 0 -15 L 3 -5 L 13 -5 L 5 2 L 8 12 L 0 5 L -8 12 L -5 2 L -13 -5 L -3 -5 Z" fill="#FFFFFF" style={{ animationDelay: "0.15s" }} transform="translate(45, -30) scale(0.5)"/>
          {/* Sparkle 3 */}
          <path className="cling-star" d="M 0 -15 L 3 -5 L 13 -5 L 5 2 L 8 12 L 0 5 L -8 12 L -5 2 L -13 -5 L -3 -5 Z" fill="#FBBF24" style={{ animationDelay: "0s" }} transform="translate(5, -45) scale(0.85)"/>
          {/* Sparkle 4 */}
          <path className="cling-star" d="M 0 -15 L 3 -5 L 13 -5 L 5 2 L 8 12 L 0 5 L -8 12 L -5 2 L -13 -5 L -3 -5 Z" fill="#FFFFFF" style={{ animationDelay: "0.25s" }} transform="translate(-65, 0) scale(0.45)"/>
          {/* Sparkle 5 */}
          <path className="cling-star" d="M 0 -15 L 3 -5 L 13 -5 L 5 2 L 8 12 L 0 5 L -8 12 L -5 2 L -13 -5 L -3 -5 Z" fill="#FBBF24" style={{ animationDelay: "0.1s" }} transform="translate(70, 5) scale(0.55)"/>
        </g>
      )}

      {/* --- INTERACTIVE SPEECH BUBBLE (step 9) --- */}
      <g style={{
        transform: `translate(270px, 100px) scale(${step === 9 ? 1 : 0.95})`,
        transformOrigin: "center center",
        opacity: step === 9 ? 1 : 0,
        transition: `opacity 0.4s ease 0.8s, transform 0.4s ease 0.8s`,
      }}>

        {/* Bubble Shadow */}
        <path d="M 0 25 C 0 10, 15 0, 30 0 L 160 0 C 175 0, 190 10, 190 25 L 190 75 C 190 90, 175 100, 160 100 L 50 100 L 10 130 L 25 95 C 10 90, 0 75, 0 60 Z" fill="rgba(0,0,0,0.15)" filter="url(#glowBlue)"/>
        {/* Bubble Body */}
        <path d="M 0 25 C 0 10, 15 0, 30 0 L 160 0 C 175 0, 190 10, 190 25 L 190 75 C 190 90, 175 100, 160 100 L 50 100 L 10 130 L 25 95 C 10 90, 0 75, 0 60 Z" fill="#FFFFFF" stroke={isDark ? "#3B82F6" : "#E2E8F0"} strokeWidth="2"/>
        
        {/* Text Details */}
        <text x="95" y="35" fontFamily="sans-serif" fontSize="15" fontWeight="800" fill="#1E293B" textAnchor="middle">Wah, memudahkan ya</text>
        <text x="95" y="58" fontFamily="sans-serif" fontSize="14" fontWeight="600" fill="#475569" textAnchor="middle">Selamat makan guys..</text>
        
        {/* Animated Stars Rating */}
        <g transform="translate(50, 72)">
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={`star-${i}`} d="M 10 0 L 13 6 L 20 7 L 15 12 L 16 19 L 10 15 L 4 19 L 5 12 L 0 7 L 7 6 Z" fill="#FBBF24" filter="url(#dropShadowObj)" transform={`translate(${i * 18}, 0) scale(0.7)`}>
              <animate attributeName="transform" values={`translate(${i * 18}, 0) scale(0.7); translate(${i * 18}, -3) scale(0.85); translate(${i * 18}, 0) scale(0.7)`} dur="1.5s" begin={`${i * 0.15}s`} repeatCount="indefinite"/>
            </path>
          ))}
        </g>
      </g>

      {/* --- AMBIENT DUST / MAGIC PARTICLES --- */}
      <g>
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={`particle-${i}`} cx={50 + i * 80} cy={100 + (i % 4) * 90} r={Math.random() * 2 + 1.5} fill={isDark ? "#60A5FA" : "#3B82F6"} filter="url(#glowBlue)">
            <animate attributeName="cy" values={`${100 + (i % 4) * 90};${80 + (i % 4) * 90};${100 + (i % 4) * 90}`} dur={`${4 + i * 0.7}s`} repeatCount="indefinite"/>
            <animate attributeName="cx" values={`${50 + i * 80};${60 + i * 80};${50 + i * 80}`} dur={`${5 + i * 0.5}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.5;0" dur={`${3 + i * 0.8}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </g>

      {/* --- DYNAMIC SCANNING HOLOGRAM CONE (Step 1 only) --- */}
      {activeHologram && (
        <g>
          {/* Glowing holographic cone */}
          <polygon
            points="310,315 388,304 422,342"
            fill="url(#holoConeGrad)"
            opacity="0.3"
            filter="url(#glowBlue)"
          >
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="1.5s" repeatCount="indefinite"/>
          </polygon>
          {/* Subtle light beam lines for tech texture */}
          <line x1="310" y1="315" x2="388" y2="304" stroke="#60A5FA" strokeWidth="1" opacity="0.4" />
          <line x1="310" y1="315" x2="422" y2="342" stroke="#60A5FA" strokeWidth="1" opacity="0.4" />
          <line x1="310" y1="315" x2="405" y2="324" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6">
            <animate attributeName="strokeDashoffset" values="20;0" dur="2s" repeatCount="indefinite" />
          </line>
        </g>
      )}
      </g>
    </svg>
  );
}
