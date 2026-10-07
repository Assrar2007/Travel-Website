import React, { useState } from 'react';
import { ArrowUpRight, Compass, ShieldCheck, X, ChevronRight, Check, Mail, Phone, Calendar, MapPin, Sparkles, Target, Zap, TrendingUp, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navItems = ['Home', 'Tours', 'Experiences', 'About us', 'Contact'];

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    if (item === 'Contact') {
      setIsContactModalOpen(true);
    }
  };

  return (
    <div className="w-full bg-black text-white selection:bg-white selection:text-black">
      {/* ================= SECTION 1: HERO BANNER (Height: 900px) ================= */}
      <section className="relative w-full h-[900px] max-h-[900px] flex flex-col justify-between overflow-hidden bg-black">
        {/* Top Header / Navigation Bar */}
        <header className="relative w-full pt-5 md:pt-6 pb-2 px-6 md:px-12 lg:px-16 flex items-center justify-between z-30 shrink-0">
          {/* Left: Brand Logo */}
          <div className="flex items-center z-10 shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('Home');
              }}
              className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase select-none transition-opacity hover:opacity-90"
              style={{ letterSpacing: '0.04em' }}
            >
              PARIS
            </a>
          </div>

          {/* Center: Navigation Capsule Bar - Fixed in one single line, mathematically centered */}
          <nav
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg z-20 whitespace-nowrap flex-nowrap shrink-0 max-w-fit"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 lg:px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-black shadow-sm font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions (Open Menu) */}
          <div className="flex items-center z-10 shrink-0">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 active:scale-95 border border-white/20 backdrop-blur-xl text-white text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm flex items-center gap-2 whitespace-nowrap"
            >
              <span>Open menu</span>
            </button>
          </div>
        </header>

        {/* Main Center Banner Hero Content - Shifted slightly below top nav */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 pt-10 md:pt-16 pb-3 z-20">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Main Title: 54px with medium font weight */}
            <h1 className="text-3xl sm:text-4xl md:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
              Experience Paris Like Never Before
            </h1>

            {/* Subtitle: DM Sans font, pure white, reduced spacing */}
            <p className="mt-3.5 text-sm sm:text-[15px] md:text-base text-white font-normal max-w-2xl mx-auto leading-relaxed">
              From iconic landmarks to hidden cafes and unforgettable moments , we create journeys that feel effortless and memorable
            </p>

            {/* CTA Button: White capsule with blue circle arrow */}
            <div className="mt-4 sm:mt-5">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm md:text-[15px] hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl"
              >
                <span className="tracking-tight text-black font-medium">
                  Explore Tours
                </span>
                <div className="w-8 h-8 rounded-full bg-[#0066FF] group-hover:bg-[#0052cc] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
                </div>
              </button>
            </div>
          </div>
        </main>

        {/* Bottom Floating Cards Layout: 1st fold visible with transparent blur background */}
        <footer className="w-full px-6 md:px-12 lg:px-16 pb-5 md:pb-7 z-20 shrink-0">
          <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-5 max-w-[1400px] mx-auto">
            {/* Card 1: Authentic Paris Experiences */}
            <div className="w-full md:max-w-[350px] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
              {/* Top white badge with icon */}
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-md">
                <Compass className="w-4 h-4 text-[#0066FF]" />
              </div>

              {/* Title */}
              <h2 className="text-lg md:text-[19px] font-medium text-white mb-1.5 tracking-tight">
                Authentic Paris Experiences
              </h2>

              {/* Subtext */}
              <p className="text-xs md:text-[13.5px] text-white leading-relaxed font-normal">
                Discover hidden cafes, charming streets and iconic landmarks with expert local guides who know the city best
              </p>
            </div>

            {/* Card 2: Stress - Free Every Step */}
            <div className="w-full md:max-w-[350px] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
              {/* Top white badge with icon */}
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
              </div>

              {/* Title */}
              <h2 className="text-lg md:text-[19px] font-medium text-white mb-1.5 tracking-tight">
                Stress - Free Every Step
              </h2>

              {/* Subtext */}
              <p className="text-xs md:text-[13.5px] text-white leading-relaxed font-normal">
                From airport transfers to curated iteratives , we handle every detail so you can simply enjoy your Paris adventure
              </p>
            </div>
          </div>
        </footer>
      </section>

      {/* ================= SECTION 2: PROUDLY TRUSTED BY LEADING BRANDS ================= */}
      <section className="relative w-full min-h-[640px] md:min-h-[720px] bg-black text-white flex flex-col justify-between pt-24 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/10">
        {/* Ambient atmospheric backlight glow matching the reference image */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[400px] bg-gradient-to-tr from-amber-600/15 via-rose-600/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-0" />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          {/* Main Headline: Italic Serif Style exactly as in reference image */}
          <h2 className="font-editorial-italic text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-tight text-white leading-[1.08] select-none">
            Proudly Trusted
            <br />
            by Leading Brands
            <br />
            Across Industries
            <span className="inline-flex items-center justify-center align-top ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full border border-[#E53E3E] text-[#E53E3E] text-[10px] md:text-xs font-sans font-bold leading-none not-italic">
              ®
            </span>
          </h2>

          {/* Subtext: DM Sans font, pure white color */}
          <p className="mt-7 md:mt-9 text-sm sm:text-[15px] md:text-base text-white font-normal max-w-xl mx-auto leading-relaxed">
            We've partnered with leading
            <br />
            brands to deliver innovative and impactful
            <br />
            architectural solutions
          </p>
        </div>

        {/* Separator Line & Brand Logos */}
        <div className="relative z-10 w-full max-w-6xl mx-auto mt-14 md:mt-20">
          {/* Subtle thin horizontal divider */}
          <div className="w-full border-t border-white/15 mb-10 md:mb-12" />

          {/* Brand Logos Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center opacity-90">
            {/* Logo 1: Geometric Towers Architecture */}
            <div className="flex flex-col items-center justify-center group cursor-pointer transition-all duration-200 hover:opacity-100">
              <svg className="h-10 w-auto text-white" viewBox="0 0 60 50" fill="currentColor">
                <rect x="6" y="24" width="12" height="26" rx="1" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="22" y="10" width="14" height="40" rx="1" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="40" y="18" width="14" height="32" rx="1" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <line x1="10" y1="28" x2="14" y2="28" stroke="currentColor" strokeWidth="2" />
                <line x1="26" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" />
                <line x1="26" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2" />
                <line x1="44" y1="24" x2="50" y2="24" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-[10px] tracking-widest text-white/70 uppercase mt-1.5 font-medium">
                METRIC
              </span>
            </div>

            {/* Logo 2: CONDON CONSTRUCTION */}
            <div className="flex flex-col items-center justify-center group cursor-pointer transition-all duration-200 hover:opacity-100">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-7 h-7 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M16 3 L28 10 L28 22 L16 29 L4 22 L4 10 Z" />
                  <path d="M22 13 L12 13 L9 16 L12 19 L22 19" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col items-center text-center leading-none">
                <span className="text-xs font-bold tracking-widest text-white uppercase">CONDON</span>
                <span className="text-[8px] tracking-[0.2em] text-white/60 uppercase mt-0.5 font-medium">CONSTRUCTION</span>
              </div>
            </div>

            {/* Logo 3: Morrison Construction */}
            <div className="flex flex-col items-center justify-center group cursor-pointer transition-all duration-200 hover:opacity-100">
              <div className="flex items-center gap-1">
                <span className="text-base font-semibold text-white tracking-tight">Morrison</span>
                {/* Red accent leaf/swoosh */}
                <svg className="w-3.5 h-3.5 text-[#E53E3E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 18 C 2 9, 10 3, 20 2 C 22 11, 14 20, 2 18 Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white tracking-wide">
                Construction
              </span>
            </div>

            {/* Logo 4: Curved Skyline Roof with swoosh */}
            <div className="flex flex-col items-center justify-center group cursor-pointer transition-all duration-200 hover:opacity-100">
              <svg className="h-8 w-auto text-white" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 28 L14 14 L24 8 L24 28" />
                <path d="M24 8 L36 4 L36 28" />
                <path d="M36 4 L46 12 L46 28" />
                <path d="M6 32 Q 30 22 54 32" strokeWidth="2.5" />
              </svg>
              <span className="text-[9px] tracking-wider text-white/70 uppercase mt-1 font-medium">
                APEX DESIGN
              </span>
            </div>

            {/* Logo 5: Minimalist Architectural Blueprint Outline */}
            <div className="flex flex-col items-center justify-center group cursor-pointer transition-all duration-200 hover:opacity-100">
              <svg className="h-9 w-auto text-white" viewBox="0 0 50 45" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polygon points="12,10 26,4 26,40 12,40" />
                <polygon points="26,4 40,12 40,40 26,40" />
                <line x1="26" y1="4" x2="26" y2="40" strokeWidth="2" />
                <line x1="6" y1="40" x2="44" y2="40" strokeWidth="1.5" />
              </svg>
              <span className="text-[9px] tracking-widest text-white/70 uppercase mt-1 font-medium">
                VERDANT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: KINETIC STUDIO & 4 STAGGERED CARDS ================= */}
      <section className="relative w-full min-h-screen bg-black text-white pt-24 pb-28 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Label & Headline */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Top pill label */}
            <span className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-6 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
              About studio
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white leading-[1.15] text-center">
              <span className="inline-flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5522] fill-current shrink-0 -translate-y-0.5 inline-block" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 4.41L19.07 2.93L18.59 7.91L23.24 9.47L20.25 13.5L23.24 17.53L18.59 19.09L19.07 24.07L14.59 22.59L12 27L9.41 22.59L4.93 24.07L5.41 19.09L0.76 17.53L3.75 13.5L0.76 9.47L5.41 7.91L4.93 2.93L9.41 4.41L12 0Z" />
                </svg>
                Kinetic Studio – is an SMM
              </span>
              <br />
              agency of bold creators that
              <br />
              <span className="text-white/70">delivers the power of social media</span>
              <br />
              with cutting-edge strategy
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-xs sm:text-sm text-white/60 font-normal max-w-lg leading-relaxed text-center">
              The flinderfox breezes through neon twilight with adjustable pancake logic erfox breezes through neon
            </p>
          </div>

          {/* Staggered 4 Cards Grid - Same Frosted Glass Blur Style as Banner Cards, No Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start mt-20 md:mt-24">
            {/* Card 1: Strategy (Tall) */}
            <div className="h-[460px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-7 flex flex-col justify-between shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
              {/* Top Tag Pill */}
              <div className="w-fit px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs text-white/80 font-medium">
                Strategy
              </div>

              {/* Bottom Content */}
              <div className="mt-auto">
                <div className="mb-3">
                  <svg className="w-4 h-4 text-[#FF5522] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 4.41L19.07 2.93L18.59 7.91L23.24 9.47L20.25 13.5L23.24 17.53L18.59 19.09L19.07 24.07L14.59 22.59L12 27L9.41 22.59L4.93 24.07L5.41 19.09L0.76 17.53L3.75 13.5L0.76 9.47L5.41 7.91L4.93 2.93L9.41 4.41L12 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-[22px] font-medium text-white mb-2 leading-snug tracking-tight">
                  Bold strategies
                  <br />
                  that shape identities
                </h3>
                <p className="text-xs md:text-[13px] text-white/80 leading-relaxed font-normal">
                  We craft concepts that define unique brands and strengthen their presence.
                </p>
              </div>
            </div>

            {/* Card 2: Growth (Medium, Stepped Down) */}
            <div className="h-[400px] lg:mt-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-7 flex flex-col justify-between shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
              {/* Top Tag Pill */}
              <div className="w-fit px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs text-white/80 font-medium">
                Growth
              </div>

              {/* Bottom Content */}
              <div className="mt-auto">
                <div className="mb-3">
                  <svg className="w-4 h-4 text-[#FF5522] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 4.41L19.07 2.93L18.59 7.91L23.24 9.47L20.25 13.5L23.24 17.53L18.59 19.09L19.07 24.07L14.59 22.59L12 27L9.41 22.59L4.93 24.07L5.41 19.09L0.76 17.53L3.75 13.5L0.76 9.47L5.41 7.91L4.93 2.93L9.41 4.41L12 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-[22px] font-medium text-white mb-2 leading-snug tracking-tight">
                  Driving measurable
                  <br />
                  growth through impact
                </h3>
                <p className="text-xs md:text-[13px] text-white/80 leading-relaxed font-normal">
                  Focused on reach, engagement, and real sales — not empty noise.
                </p>
              </div>
            </div>

            {/* Card 3: Creative (Tall) */}
            <div className="h-[480px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-7 flex flex-col justify-between shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
              {/* Top Tag Pill */}
              <div className="w-fit px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs text-white/80 font-medium">
                Creative
              </div>

              {/* Bottom Content */}
              <div className="mt-auto">
                <div className="mb-3">
                  <svg className="w-4 h-4 text-[#FF5522] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 4.41L19.07 2.93L18.59 7.91L23.24 9.47L20.25 13.5L23.24 17.53L18.59 19.09L19.07 24.07L14.59 22.59L12 27L9.41 22.59L4.93 24.07L5.41 19.09L0.76 17.53L3.75 13.5L0.76 9.47L5.41 7.91L4.93 2.93L9.41 4.41L12 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-[22px] font-medium text-white mb-2 leading-snug tracking-tight">
                  Creative processes
                  <br />
                  with rapid delivery
                </h3>
                <p className="text-xs md:text-[13px] text-white/80 leading-relaxed font-normal">
                  Ideas turn into results fast, without losing quality or relevance.
                </p>
              </div>
            </div>

            {/* Card 4: Powerfull (Medium, Stepped Down) */}
            <div className="h-[400px] lg:mt-16 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-7 flex flex-col justify-between shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
              {/* Top Tag Pill */}
              <div className="w-fit px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs text-white/80 font-medium">
                Powerfull
              </div>

              {/* Bottom Content */}
              <div className="mt-auto">
                <div className="mb-3">
                  <svg className="w-4 h-4 text-[#FF5522] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 4.41L19.07 2.93L18.59 7.91L23.24 9.47L20.25 13.5L23.24 17.53L18.59 19.09L19.07 24.07L14.59 22.59L12 27L9.41 22.59L4.93 24.07L5.41 19.09L0.76 17.53L3.75 13.5L0.76 9.47L5.41 7.91L4.93 2.93L9.41 4.41L12 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-[22px] font-medium text-white mb-2 leading-snug tracking-tight">
                  A dedicated team
                  <br />
                  behind success
                </h3>
                <p className="text-xs md:text-[13px] text-white/80 leading-relaxed font-normal">
                  Our experts guide every step, from launch to scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CASE STUDY & STATS (BERNICE TAY) ================= */}
      <section className="relative w-full min-h-[640px] bg-black text-white py-20 md:py-28 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/10">
        <div className="max-w-[1300px] mx-auto">
          {/* Main Case Study Card Container */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
            {/* Left Card: Bernice Tay Portrait */}
            <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                alt="Bernice Tay - Bright Culture"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Card: Stats & Quote with Sun-Orange Color Gradient */}
            <div className="flex-1 min-h-[440px] lg:min-h-[520px] rounded-3xl border border-white/20 p-8 sm:p-10 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#1b0a03] via-[#752a08] to-[#e65c00]">
              {/* Sun-orange ambient light glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen"
                style={{
                  background: 'radial-gradient(circle at 85% 85%, #ff7700 0%, #d84315 35%, transparent 70%)',
                }}
              />

              {/* Top Quote */}
              <div className="relative z-10 max-w-3xl">
                <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-bold text-white uppercase tracking-tight leading-[1.35] select-none">
                  «I WASTED MY TIME WITH OTHER AGENCIES, BUT WITH OMNI, WE INCREASED OUR REVENUE AND GOT MORE STUDENTS WITH LOW CPL AND HIGH ROAS»
                </p>
              </div>

              {/* Middle 3 Metric Stats */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 my-8 md:my-10 pt-6 border-t border-white/15">
                {/* Metric 1: CPL */}
                <div>
                  <div className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-white tracking-tight leading-none">
                    $15-25
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium mt-2 tracking-wide">
                    CPL
                  </div>
                </div>

                {/* Metric 2: Attendees */}
                <div>
                  <div className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-white tracking-tight leading-none">
                    263
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium mt-2 tracking-wide">
                    Webinar attendees
                  </div>
                </div>

                {/* Metric 3: ROAS */}
                <div>
                  <div className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-white tracking-tight leading-none">
                    11.11X
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium mt-2 tracking-wide">
                    ROAS for Crash Course
                  </div>
                </div>
              </div>

              {/* Bottom Attribution */}
              <div className="relative z-10">
                <div className="text-sm sm:text-base font-semibold text-white tracking-wider uppercase">
                  — BERNICE TAY
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-normal mt-0.5">
                  Bright Culture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: 4 SPLIT CARDS WITH EMPTY CENTER SPACE ================= */}
      <section className="relative w-full min-h-[700px] bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-xs uppercase tracking-widest text-white/60 font-semibold px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mt-4 leading-tight">
              Engineered for Omnichannel Reach
            </h2>
          </div>

          {/* 3-Column Layout: Left (2 cards), Center (Empty Space for Future Visual), Right (2 cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-6 md:gap-8 items-center">
            {/* Left Column: 2 Cards */}
            <div className="flex flex-col gap-6 w-full">
              {/* Card 1: Precision Targeting */}
              <div className="w-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3.5 shadow-md">
                  <Target className="w-4 h-4 text-[#0066FF]" />
                </div>
                <h3 className="text-lg md:text-[19px] font-medium text-white mb-1.5 tracking-tight">
                  Precision Audience Targeting
                </h3>
                <p className="text-xs md:text-[13.5px] text-white leading-relaxed font-normal">
                  Deep algorithmic segmentation ensuring creative narratives connect directly with high-intent decision makers.
                </p>
              </div>

              {/* Card 2: High-Velocity Deployment */}
              <div className="w-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3.5 shadow-md">
                  <Zap className="w-4 h-4 text-[#0066FF] fill-[#0066FF]" />
                </div>
                <h3 className="text-lg md:text-[19px] font-medium text-white mb-1.5 tracking-tight">
                  High-Velocity Deployment
                </h3>
                <p className="text-xs md:text-[13.5px] text-white leading-relaxed font-normal">
                  Rapid creative turnaround with continuous A/B multivariate testing to optimize conversion rates on the fly.
                </p>
              </div>
            </div>

            {/* Center Column: STRICTLY EMPTY SPACE FOR FUTURE VISUAL (No components inside) */}
            <div
              className="w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] flex items-center justify-center"
              aria-hidden="true"
            >
              {/* Deliberately empty space reserved for future visual asset */}
            </div>

            {/* Right Column: 2 Cards */}
            <div className="flex flex-col gap-6 w-full">
              {/* Card 3: Compounding Revenue Growth */}
              <div className="w-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3.5 shadow-md">
                  <TrendingUp className="w-4 h-4 text-[#0066FF]" />
                </div>
                <h3 className="text-lg md:text-[19px] font-medium text-white mb-1.5 tracking-tight">
                  Compounding Revenue Growth
                </h3>
                <p className="text-xs md:text-[13.5px] text-white leading-relaxed font-normal">
                  Full-funnel customer acquisition systems designed to scale predictably and maximize long-term client value.
                </p>
              </div>

              {/* Card 4: End-to-End Asset Control */}
              <div className="w-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 shadow-2xl hover:border-white/35 hover:bg-white/[0.13] transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3.5 shadow-md">
                  <Layers className="w-4 h-4 text-[#0066FF]" />
                </div>
                <h3 className="text-lg md:text-[19px] font-medium text-white mb-1.5 tracking-tight">
                  End-to-End Asset Control
                </h3>
                <p className="text-xs md:text-[13.5px] text-white leading-relaxed font-normal">
                  Unified creative production, video editing, tracking infrastructure, and reporting centralized under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide-out Navigation Drawer for "Open menu" */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-zinc-950 border-l border-white/15 p-8 flex flex-col justify-between z-10 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-white/10">
                <span className="text-2xl font-bold tracking-tight text-white uppercase">PARIS</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      handleNavClick(item);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left text-2xl font-medium py-2 transition-colors flex items-center justify-between cursor-pointer ${
                      activeTab === item ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </button>
                ))}
              </nav>

              <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
                <div className="text-xs uppercase tracking-wider text-white/40 font-semibold">
                  Curated Experiences
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">Montmartre Walk</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">Le Marais Tastings</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">Saint-Germain Art</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">Private Louvre</div>
                </div>
              </div>
            </div>

            {/* Bottom Drawer CTA button */}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="w-full py-3.5 px-6 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <span>Explore Tours</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Modal for "Explore Tours" */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsContactModalOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-zinc-950 border border-white/20 rounded-3xl p-8 z-10 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white fill-white" />
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight">Explore Paris Tours</h3>
              </div>
              <button
                onClick={() => {
                  setIsContactModalOpen(false);
                  setFormSubmitted(false);
                }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-semibold text-white mb-2">Itinerary Request Received</h4>
                <p className="text-white/70 text-sm max-w-sm mx-auto">
                  Our Paris travel specialist will reach out with tailor-made tour recommendations within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsContactModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                    Preferred Tour Style
                  </label>
                  <select className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-white transition-colors">
                    <option value="private-highlights">Private Iconic Highlights & Louvre Skip-the-Line</option>
                    <option value="hidden-cafes">Hidden Cafés, Secret Passages & Montmartre Walk</option>
                    <option value="culinary-wine">Gourmet Wine, Cheese & Pastry Tasting Walk</option>
                    <option value="full-bespoke">Full VIP Concierge & Chauffeured Adventure</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Custom Paris Itinerary</span>
                    <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
