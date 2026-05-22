import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './ui/Section';
import { siteConfig } from '../config/siteConfig';

export function FAQ() {
  const faqs = siteConfig.faqs;
  const [selectedId, setSelectedId] = useState<string>('faq-1');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setOpenId(openId === id ? null : id);
  };

  const selectedFaq = faqs.find(f => f.id === selectedId) || faqs[0];

  return (
      <Section
          id="faq"
          className="bg-[#FAFBF9] text-[#0F172A] relative overflow-hidden py-24 sm:py-32 lg:py-40 border-b border-slate-200"
          darkBg={false}
      >
        {/* ---------------------------------------------------------------- */}
        {/* PREMIUM CHROME-AMBIENCE RADIAL CANVAS                            */}
        {/* ---------------------------------------------------------------- */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Main Subtle Dotted Matrix Pattern */}
          <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'radial-gradient(#C8102E 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
          />

          {/* Soft, ultra-diffused corporate crimson light pools */}
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#C8102E]/[0.03] blur-[130px]" />
          <div className="absolute bottom-[-10%] right-[15%] w-[700px] h-[700px] rounded-full bg-[#C8102E]/[0.04] blur-[150px]" />

          {/* Deep anchoring vignette shadows */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full bg-slate-200/40 blur-[120px]" />

          {/* Fine architectural panel accents running down the margins */}
          <div className="absolute top-0 bottom-0 left-[4%] w-[1px] bg-slate-200/30 hidden 2xl:block" />
          <div className="absolute top-0 bottom-0 right-[4%] w-[1px] bg-slate-200/30 hidden 2xl:block" />

          {/* Technical side labels and markers */}
          <div className="absolute left-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase rotate-180 [writing-mode:vertical-lr]">
            <span>SECURITY MATRIX INFORMATION PORTAL</span>
            <span className="text-[#C8102E]">SYS_RESOLVE_KBASE</span>
          </div>
          <div className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase [writing-mode:vertical-lr]">
            <span>SECURE FAQ SYSTEM // INTEGRITY</span>
            <span className="text-[#C8102E]">INFO_CORE_VER_4.1</span>
          </div>

          {/* Absolute corner graphic marks */}
          <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#C8102E]/10" />
          <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-[#C8102E]/10" />
          <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-[#C8102E]/10" />
          <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#C8102E]/10" />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* FOREGROUND INTERFACE MATRIX                                      */}
        {/* ---------------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* EDITORIAL SECTION INTRO HEADER */}
          <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 mb-16 border-b border-slate-200/80 items-end"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C8102E] tracking-[0.2em] uppercase">
                <span>CHAPTER 03</span>
                <span className="text-slate-300">//</span>
                <span className="text-slate-400 font-normal">KNOWLEDGE BASE</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tight text-[#0F172A] leading-none">
                Frequently Asked <br className="hidden sm:inline" />Questions
              </h2>
              <p className="text-base sm:text-lg text-slate-500 max-w-2xl font-normal leading-relaxed">
                Find detailed information about our onboarding, compliance structures, service locations, and licensing across the UAE.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-[#F0F2F0] border border-slate-200 p-4 rounded-xl font-mono flex items-center gap-4 shadow-sm bg-opacity-80 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#C8102E] animate-pulse" />
                <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">OPERATIONS DESK DATA STREAM</span>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP MATRIX GRID */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-stretch mt-12 min-h-[520px]">

            {/* Left Navigation Track */}
            <div className="md:col-span-5 flex flex-col justify-between max-h-[540px]">
              <div className="space-y-3 overflow-y-auto pr-3 scrollbar-thin">
                {faqs.map((faq, index) => {
                  const isSelected = selectedId === faq.id;
                  const formattedIndex = String(index + 1).padStart(2, '0');

                  return (
                      <button
                          key={faq.id}
                          type="button"
                          onClick={() => handleSelect(faq.id)}
                          className="w-full text-left outline-none block relative p-0.5 group"
                      >
                        <div className={`w-full py-4.5 px-6 rounded-2xl transition-all duration-300 relative flex items-center gap-4 border backdrop-blur-md
                      ${isSelected
                            ? 'bg-slate-950 border-slate-900 shadow-xl shadow-slate-950/25 translate-x-1.5'
                            : 'bg-white/90 border-slate-200/90 hover:bg-white hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-slate-100/60 hover:translate-x-1.5'
                        }`}
                        >
                          {/* Animated sliding notch selector */}
                          {isSelected && (
                              <motion.div
                                  layoutId="active-faq-indicator"
                                  className="absolute left-0 top-3 bottom-3 w-[4px] rounded-r bg-[#C8102E]"
                                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                              />
                          )}

                          <span className={`font-mono text-xs font-bold px-2 py-1 rounded transition-colors duration-250 
                            ${isSelected ? 'bg-[#C8102E]/20 text-red-400' : 'bg-slate-100 text-slate-500 group-hover:bg-[#C8102E]/10 group-hover:text-[#C8102E]'}`}
                          >
                            {formattedIndex}
                          </span>

                          <span className={`text-xs sm:text-sm font-sans font-black uppercase tracking-wider transition-colors duration-250 line-clamp-2 flex-1
                            ${isSelected ? 'text-white' : 'text-slate-900 group-hover:text-[#C8102E]'}`}
                          >
                            {faq.question}
                          </span>
                        </div>
                      </button>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-slate-200/80 font-mono text-[9px] tracking-widest text-slate-400 uppercase">
                PRIME_WATCH_SAFETY_COMPLIANCE_CORE // HELPDESK
              </div>
            </div>

            {/* Right Presentation Screen */}
            <div className="md:col-span-7 bg-gradient-to-br from-[#E31637] via-[#C8102E] to-[#9E0B22] border border-[#C8102E] rounded-3xl p-10 lg:p-14 flex flex-col justify-between relative shadow-2xl shadow-[#C8102E]/25 overflow-hidden ring-1 ring-inset ring-white/10">

              {/* Dynamic glossy light sheen overlays */}
              <div className="absolute top-0 left-0 right-0 h-[280px] bg-gradient-to-b from-white/12 to-transparent pointer-events-none -skew-y-12 origin-top-left" />
              <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-black/15 blur-[80px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-[60px] pointer-events-none" />

              {/* Structural design corner locks */}
              <div className="absolute top-0 left-0 w-5 h-[2px] bg-white/55" />
              <div className="absolute top-0 left-0 w-[2px] h-5 bg-white/55" />
              <div className="absolute bottom-0 right-0 w-5 h-[2px] bg-white/40" />
              <div className="absolute bottom-0 right-0 w-[2px] h-5 bg-white/40" />

              <AnimatePresence mode="wait">
                <motion.div
                    key={selectedFaq.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 flex-grow flex flex-col justify-center relative z-10"
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/10 font-mono text-[9px] text-white font-bold tracking-widest uppercase shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>SYS_RESPONSE_FEED</span>
                      <span className="text-white/45">//</span>
                      <span className="text-white/80 font-normal">APPROVED_V_DATA</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white leading-tight uppercase tracking-tight drop-shadow-sm">
                      {selectedFaq.question}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-sans font-normal max-w-xl drop-shadow-sm">
                    {selectedFaq.answer}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 pt-6 border-t border-dashed border-white/25 flex flex-wrap items-center justify-between gap-3 text-[9px] font-mono tracking-widest text-white/80 uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-white/80" />
                  <span>REGULATORY COMPLIANCE STATUS: VALIDATED</span>
                </div>
                <span className="text-[#C8102E] bg-white px-2.5 py-1 rounded-md font-bold tracking-normal text-[8px] shadow-md hover:scale-105 transition-all">UAE GOV CODES</span>
              </div>
            </div>
          </div>

          {/* MOBILE ACCORDION STACK */}
          <div className="block md:hidden max-w-3xl mx-auto mt-6 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                  <div
                      key={faq.id}
                      className={`rounded-2xl transition-all duration-300 border overflow-hidden backdrop-blur-sm relative
                  ${isOpen
                          ? 'border-[#C8102E] bg-gradient-to-br from-[#E31637] to-[#9E0B22] shadow-xl relative z-10 ring-1 ring-inset ring-white/10'
                          : 'border-slate-200 bg-white/90 hover:bg-white hover:border-slate-300 shadow-sm'
                      }`}
                  >
                    {isOpen && (
                      <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none -skew-y-6 origin-top-left" />
                    )}
                    <h3>
                      <button
                          type="button"
                          onClick={() => handleSelect(faq.id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-body-${faq.id}`}
                          id={`faq-btn-${faq.id}`}
                          className="w-full py-5 px-5 flex justify-between items-center text-left transition-all duration-200 outline-none relative z-10"
                      >
                        <div className="flex items-center gap-3 pr-4">
                          <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded
                            ${isOpen ? 'bg-white/15 text-red-100' : 'bg-slate-100 text-slate-500'}`}
                          >
                            {formattedIndex}
                          </span>
                          <span className={`text-xs sm:text-sm font-sans font-black uppercase tracking-wider
                            ${isOpen ? 'text-white drop-shadow' : 'text-slate-900'}`}
                          >
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                            className={`w-4 h-4 shrink-0 transition-transform duration-300 stroke-[2.5]
                            ${isOpen ? 'transform rotate-180 text-white' : 'text-slate-400'}`}
                        />
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                          <motion.div
                              id={`faq-body-${faq.id}`}
                              role="region"
                              aria-labelledby={`faq-btn-${faq.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="bg-black/10 border-t border-white/10 relative z-10"
                          >
                            <div className="px-5 pb-6 pt-5 text-xs sm:text-sm text-white/95 leading-relaxed font-sans font-normal">
                              <p className="mb-4">{faq.answer}</p>

                              <div className="pt-3 border-t border-dashed border-white/20 flex items-center justify-between text-[8px] font-mono tracking-widest text-red-200/85 uppercase">
                                <span>SYS_STREAM_REF // VALID</span>
                                <span className="text-white font-bold">UAE MATRIX</span>
                              </div>
                            </div>
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
              );
            })}
          </div>

        </div>
      </Section>
  );
}

export default FAQ;