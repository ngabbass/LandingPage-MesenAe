import { useEffect, useState, useRef, useCallback } from "react";
import { STORY_STEPS, getPhoneState, EASING } from "./journey/JourneyHelpers";
import { CafeEnvironment } from "./journey/CafeEnvironment";
import { PhoneMockup } from "./journey/PhoneMockup";


// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function Journey({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [currentStep, setCurrentStep]   = useState(0);
  const [isAutoPlay, setIsAutoPlay]     = useState(true);
  const [currentTime, setCurrentTime]   = useState("09:41");
  const [isVibrating, setIsVibrating]   = useState(false);
  const [prevStep, setPrevStep]         = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isWaiterWalking, setIsWaiterWalking] = useState(false);
  const [waiterStateStep, setWaiterStateStep] = useState(0);

  const stepContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoPlayRef = useRef<any>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNextStep();
    } else if (distance < -minSwipeDistance) {
      goToPrevStep();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX.current !== null) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNextStep();
    } else if (distance < -minSwipeDistance) {
      goToPrevStep();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const isDark = theme === "dark";

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }).replace(/\./g, ":"));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Go to step function
  const goToStep = useCallback((idx: number) => {
    setPrevStep(currentStep);
    setIsTransitioning(true);
    setTimeout(() => { setIsTransitioning(false); }, 300);
    setCurrentStep(idx);
  }, [currentStep]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay) return;
    const duration = STORY_STEPS[currentStep].duration;
    autoPlayRef.current = setTimeout(() => {
      goToStep((currentStep + 1) % STORY_STEPS.length);
    }, duration);
    return () => clearTimeout(autoPlayRef.current);
  }, [currentStep, isAutoPlay, goToStep]);

  // Resume auto-play after manual interaction
  useEffect(() => {
    if (!isAutoPlay) {
      const id = setTimeout(() => setIsAutoPlay(true), 18000);
      return () => clearTimeout(id);
    }
  }, [isAutoPlay, currentStep]);

  // Waiter step delay logic (let food move first in step 9)
  useEffect(() => {
    if (currentStep === 9) {
      const timer = setTimeout(() => {
        setWaiterStateStep(9);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setWaiterStateStep(currentStep);
    }
  }, [currentStep]);

  // Waiter walking animation: triggers whenever waiter moves between table (step 8) and off-screen
  useEffect(() => {
    const wasAtMeja = prevStep === 8;
    const isAtMeja  = waiterStateStep === 8;
    // Fire walk anim whenever the waiter changes position (table ↔ off-screen)
    if (wasAtMeja !== isAtMeja) {
      setIsWaiterWalking(true);
      const timer = setTimeout(() => {
        setIsWaiterWalking(false);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [waiterStateStep, prevStep]);

  // Scroll stepper to active
  useEffect(() => {
    const el = stepRefs.current[currentStep];
    const container = stepContainerRef.current;
    if (el && container) {
      const target = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
      container.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    }
    // Vibrate for WA step
    if (currentStep === 7) {
      setIsVibrating(true);
      setTimeout(() => setIsVibrating(false), 600);
    }
  }, [currentStep]);

  const handleStepClick = (idx: number) => {
    clearTimeout(autoPlayRef.current);
    setIsAutoPlay(false);
    goToStep(idx);
  };

  const goToNextStep = () => {
    handleStepClick((currentStep + 1) % STORY_STEPS.length);
  };

  const goToPrevStep = () => {
    handleStepClick((currentStep - 1 + STORY_STEPS.length) % STORY_STEPS.length);
  };

  const phoneState = getPhoneState(currentStep);
  const isPhoneVisible = phoneState !== -1;
  const showWA = currentStep === 7;

  const colors = {
    isDark,
    charShirt: isDark ? "#2563EB" : "#1D4ED8",
    waiterShirt: "#10B981",
  };

  const currentStepData = STORY_STEPS[currentStep];

  return (
    <section
      id="cara-kerja-story"
      className="relative z-10 overflow-hidden pt-6 pb-6 md:pt-10 md:pb-8 bg-bg-base"
    >
      {/* BG DECOR */}
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-brand-blue/8 blur-[120px] rounded-full pointer-events-none"/>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14 opacity-0" style={{ animation: "fadeInUp 0.9s ease-out 0.1s forwards" }}>
          <div className={`inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[0.15em] uppercase mb-5
            before:content-[''] before:block before:w-8 before:h-0.5 before:bg-brand-blue before:rounded-full
            after:content-[''] after:block after:w-8 after:h-0.5 after:bg-brand-blue after:rounded-full
            text-brand-blue`}>
            Journey Pelanggan
          </div>
          <h2 className={`font-display text-[clamp(30px,4vw,46px)] font-black leading-[1.1] tracking-tight mb-5 ${isDark ? "text-white" : "text-slate-900"}`}>
            Dari Datang Sampai Kenyang,<br/>
            <span className="text-brand-blue">Satu Genggaman</span> Saja
          </h2>
          <p className={`text-[18px] sm:text-[20px] max-w-[640px] mx-auto leading-relaxed text-text-secondary`}>
            Ikuti setiap langkah perjalanan pelanggan, mulai dari scan QR, memilih menu, konfirmasi pesanan, hingga makanan tersaji di meja.
          </p>
        </div>

        {/* ── 2-COL GRID ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_460px] gap-8 xl:gap-10 items-start">

          {/* ── LEFT: SCENE CANVAS ─────────────────────────────────────────── */}
          <div className="relative -mx-3 sm:mx-0">
            {/* Main scene box */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative w-full rounded-[24px] md:rounded-[36px] overflow-hidden border shadow-2xl mx-auto transition-all duration-500 aspect-[9/13] md:aspect-[4/3] cursor-grab active:cursor-grabbing select-none"
              style={{
                backgroundColor: isDark ? "#0B1121" : "#E8EEF5",
                borderColor: isDark ? "#1E293B" : "#CBD5E1",
              }}
            >
              {/* SVG SCENE */}
              <CafeEnvironment step={currentStep} prevStep={prevStep} colors={colors} isWaiterWalking={isWaiterWalking} waiterStep={waiterStateStep}/>

              {/* PHONE OVERLAY */}
              <PhoneMockup
                isPhoneVisible={isPhoneVisible}
                phoneState={phoneState}
                isVibrating={isVibrating}
                isDark={isDark}
                theme={theme}
                currentTime={currentTime}
                showWA={showWA}
              />

              {/* STEP INDICATOR MINI (floating on scene bottom) */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
                {STORY_STEPS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? "w-6 h-2 bg-brand-blue"
                        : `w-2 h-2 ${isDark ? "bg-white/20 hover:bg-white/40" : "bg-black/20 hover:bg-black/40"}`
                    }`}
                  />
                ))}
              </div>

              {/* PLAY / PAUSE BUTTON */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`absolute bottom-4 right-4 z-50 w-8 h-8 rounded-full flex items-center justify-center border backdrop-blur-md shadow-md transition-all duration-300 pointer-events-auto hidden xl:flex
                  ${isDark 
                    ? "bg-black/40 hover:bg-black/60 border-white/10 text-white hover:border-white/25" 
                    : "bg-white/60 hover:bg-white/80 border-black/10 text-slate-800 hover:border-black/25"
                  }`}
                aria-label={isAutoPlay ? "Pause Autoplay" : "Play Autoplay"}
              >
                {isAutoPlay ? (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="4" width="4" height="16" rx="1" />
                    <rect x="15" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* MOBILE CONTROLS: < [play/pause] > */}
            <div className="flex xl:hidden items-center justify-center gap-6 mt-4">
              {/* Prev Button */}
              <button
                onClick={goToPrevStep}
                className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md shadow-md transition-all duration-300
                  ${isDark 
                    ? "bg-[#0F172A]/90 border-white/10 text-white hover:bg-[#1E293B]" 
                    : "bg-white border-black/10 text-slate-800 hover:bg-slate-100"
                  }`}
                aria-label="Previous Step"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Play / Pause Button */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-md shadow-md transition-all duration-300
                  ${isDark 
                    ? "bg-[#0F172A]/90 border-white/10 text-white hover:bg-[#1E293B]" 
                    : "bg-white border-black/10 text-slate-800 hover:bg-slate-100"
                  }`}
                aria-label={isAutoPlay ? "Pause Autoplay" : "Play Autoplay"}
              >
                {isAutoPlay ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="4" width="4" height="16" rx="1" />
                    <rect x="15" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Next Button */}
              <button
                onClick={goToNextStep}
                className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md shadow-md transition-all duration-300
                  ${isDark 
                    ? "bg-[#0F172A]/90 border-white/10 text-white hover:bg-[#1E293B]" 
                    : "bg-white border-black/10 text-slate-800 hover:bg-slate-100"
                  }`}
                aria-label="Next Step"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

          </div>

          {/* ── RIGHT: STEPPER TIMELINE ──────────────────────────────────── */}
          <div className="relative flex flex-col justify-start">

            {/* Active step summary card */}
            <div
              className={`mb-4 p-4 rounded-2xl border transition-all duration-500 ${isDark ? "bg-[#0F172A] border-[#1E293B]" : "bg-white border-slate-200 shadow-sm"}`}
              style={{ borderLeftColor: currentStepData.color, borderLeftWidth: "3px" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: currentStepData.colorLight }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={currentStepData.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {currentStepData.icon}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: currentStepData.color }}>
                      Langkah {currentStep + 1} / {STORY_STEPS.length}
                    </span>
                  </div>
                  <div className={`font-black text-[17px] leading-tight mb-1.5 ${isDark ? "text-white" : "text-slate-800"}`}>
                    {currentStepData.title}
                  </div>
                  <p className={`text-[15px] sm:text-[16px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {currentStepData.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline (Fits all 10 stages without scroll) */}
            <div
              ref={stepContainerRef}
              className="flex-1 relative hidden xl:block"
            >
              <div className="relative py-2 px-1">

                {/* Vertical line (Aligned perfectly to nodes) */}
                <div
                  className={`absolute left-[28px] top-[19px] bottom-[19px] w-0.5 rounded-full z-0 ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
                >
                  {/* Filled portion */}
                  <div
                    className="w-full bg-brand-blue rounded-full transition-all duration-700"
                    style={{ height: `${(currentStep / (STORY_STEPS.length - 1)) * 100}%` }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  {STORY_STEPS.map((step, idx) => {
                    const isActive = currentStep === idx;
                    const isPast   = currentStep > idx;

                    return (
                      <div
                        key={step.id}
                        ref={el => { stepRefs.current[idx] = el; }}
                        onClick={() => handleStepClick(idx)}
                        className={`group relative pl-[52px] cursor-pointer transition-all duration-400 ${isActive ? "scale-[1.01]" : "hover:scale-[1.005]"}`}
                      >
                        {/* Node */}
                        <div
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all duration-400 border-2"
                          style={{
                            backgroundColor: isActive ? "#3B82F6" : isPast ? "#3B82F6" : (isDark ? "#020617" : "#F8FAFC"),
                            borderColor: isActive || isPast ? "#3B82F6" : (isDark ? "#334155" : "#CBD5E1"),
                            boxShadow: isActive ? "0 0 15px rgba(59,130,246,0.4)" : "none",
                          }}
                        >
                          {isPast && !isActive ? (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4.5"><polyline points="20 6 9 17 4 12"/></svg>
                          ) : (
                            <span
                              className="text-[10px] font-black"
                              style={{ color: isActive ? "white" : isPast ? "white" : (isDark ? "#475569" : "#94A3B8") }}
                            >{idx + 1}</span>
                          )}
                        </div>

                        {/* Card */}
                        <div
                          className={`px-3 py-1.5 rounded-xl border transition-all duration-400 ${
                            isActive
                              ? isDark ? "border-slate-600 bg-[#1E293B] shadow-lg" : "border-slate-200 bg-white shadow-md"
                              : `border-transparent bg-transparent ${isDark ? "group-hover:bg-[#1E293B]/40" : "group-hover:bg-white/70"}`
                          }`}
                          style={{
                            opacity: isActive ? 1 : isPast ? 0.6 : 0.45,
                            ...(isActive ? { borderLeftColor: step.color, borderLeftWidth: "2px" } : {})
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                              style={{
                                backgroundColor: isActive ? step.colorLight : "transparent",
                              }}
                            >
                              <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke={isActive ? step.color : (isDark ? "#475569" : "#94A3B8")}
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                              >
                                {step.icon}
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div
                                className="font-black text-[13px] leading-tight truncate transition-colors duration-300"
                                style={{ color: isActive ? step.color : (isDark ? "#E2E8F0" : "#1E293B") }}
                              >
                                {step.title}
                              </div>
                            </div>
                            {isActive && (
                              <div
                                className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                                style={{ backgroundColor: step.color }}
                              />
                            )}
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── CSS ───────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vibrate {
          0%   { transform: translate3d(0, 0, 0); }
          20%  { transform: translate3d(-2px, 2px, 0); }
          40%  { transform: translate3d(-2px, -2px, 0); }
          60%  { transform: translate3d(2px, 2px, 0); }
          80%  { transform: translate3d(2px, -2px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes charBreathe {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50%       { transform: translateY(-1px) scaleX(1.005); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective-1000 { perspective: 1400px; }
      `}</style>
    </section>
  );
}
