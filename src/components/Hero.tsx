import { motion } from 'motion/react';
import { ShieldCheck, ArrowUpRight, Terminal } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function Hero() {
  const { headline, subheading, primaryCta, secondaryCta, backgroundImage } = siteConfig.hero;

  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] select-none"
      >
        {/* ---------------------------------------------------------------- */}
        {/* PREMIUM VISUAL DEPTH CANVAS                                      */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.45 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            aria-hidden="true"
        />

        {/* Cinematic Vignette & Dynamic Color Wash Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/80 z-10" />

        {/* Technical Precision Mesh Grid */}
        <div
            className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
        />

        {/* Structural Framing Lines */}
        <div className="absolute top-0 bottom-0 left-[5%] w-[1px] bg-white/[0.03] z-10 hidden xl:block" />
        <div className="absolute top-0 bottom-0 right-[5%] w-[1px] bg-white/[0.03] z-10 hidden xl:block" />

        {/* ---------------------------------------------------------------- */}
        {/* FOREGROUND INTERFACE MATRIX                                      */}
        {/* ---------------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-28 pb-16">
          <div className="max-w-4xl relative">

            {/* Architectural Crosshair Details */}
            <div className="absolute left-0 top-0 w-3 h-[1px] bg-[#C8102E] -translate-y-4 hidden sm:block" />
            <div className="absolute left-0 top-0 w-[1px] h-3 bg-[#C8102E] -translate-y-4 hidden sm:block" />

            {/* UAE Operational Vetted Badge */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 px-3 py-1.5 bg-[#C8102E]/10 border border-[#C8102E]/30 text-white mb-8 backdrop-blur-md rounded-md"
            >
              <ShieldCheck className="w-4 h-4 text-[#C8102E] stroke-[2.5]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              SYS_STATUS // FULLY VETTED OPERATIONAL UAE
            </span>
            </motion.div>

            {/* Bold Editorial Headline */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tighter text-white uppercase leading-[0.95]"
              >
                {headline.split(' ').map((word, i) => (
                    <span key={i} className={word.toLowerCase() === 'security' || word.toLowerCase() === 'prime' ? 'text-[#C8102E]' : ''}>
                  {word}{' '}
                </span>
                ))}
              </motion.h1>
            </div>

            {/* Subheading Credibility Statement */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-12 max-w-2xl"
            >
              {subheading}
            </motion.p>

            {/* Interactive Core Actions */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 items-center"
            >
              {/* Primary Action Button */}
              <a
                  href="#services"
                  className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C8102E] text-white font-mono text-xs font-bold uppercase tracking-[0.15em] overflow-hidden rounded-md transition-all duration-300 active:scale-[0.98] shadow-xl shadow-red-950/20"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>{primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
              </a>

              {/* Secondary Action Button */}
              <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-white text-white hover:text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-[0.15em] border border-white/10 hover:border-white rounded-md transition-all duration-300 active:scale-[0.98]"
              >
                <Terminal className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                <span>{secondaryCta}</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* REFINED SIDEBAR CORNER DATA MATRIX                               */}
        {/* ---------------------------------------------------------------- */}
        <div className="absolute right-8 bottom-12 hidden xl:flex flex-col items-end gap-4 z-20 select-none">
          <div className="flex flex-col items-end gap-1 font-mono text-[9px] tracking-[0.3em] text-slate-500 uppercase">
            <span>LOC_REF // 25.2048° N, 55.2708° E</span>
            <span className="text-[#C8102E] font-bold">DUBAI · ABU DHABI · UAE</span>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C8102E]" />
        </div>
      </section>
  );
}

export default Hero;