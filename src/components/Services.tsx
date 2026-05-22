import { useState } from 'react';
import {
  Shield,
  LifeBuoy,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  Phone,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './ui/Section';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  Shield,
  LifeBuoy,
  Sparkles,
};

export function Services() {
  const services = siteConfig.services;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSwitching, setIsSwitching] = useState(false);

  const activeService =
      services.find((s) => s.id === selectedId) || services[0];

  const handleSelect = (id: string) => {
    setIsSwitching(true);

    setTimeout(() => {
      setSelectedId(id);
      setIsSwitching(false);
    }, 180);
  };

  return (
      <Section
          id="services"
          darkBg
          className="relative bg-[#0A0B0E] py-24 sm:py-32 overflow-hidden"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(200,16,46,0.15), transparent 60%),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.06), transparent 55%)
          `
             }}
        />

        {/* HEADER */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mb-14 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8102E]/20 bg-[#C8102E]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#C8102E]">
            Certified Operations Division
          </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white">
            PREMIER <span className="text-[#C8102E]">SERVICES</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Integrated safety, marine, and facility operations designed for high-end environments across UAE.
          </p>
        </div>

        {/* MAIN */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">

            {/* ================= GRID ================= */}
            {!selectedId ? (
                <motion.div
                    key="grid"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.08,
                        },
                      },
                      exit: {},
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {services.map((service, index) => {
                    const Icon = iconMap[service.iconName] || Shield;

                    return (
                        <motion.button
                            key={service.id}
                            onClick={() => handleSelect(service.id)}
                            variants={{
                              hidden: { opacity: 0, y: 18, scale: 0.98 },
                              show: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                  duration: 0.45,
                                  ease: 'easeOut',
                                },
                              },
                              exit: {
                                opacity: 0,
                                y: -10,
                                transition: { duration: 0.2 },
                              },
                            }}
                            whileHover={{ y: -6 }}
                            className="
                      group text-left rounded-2xl overflow-hidden
                      border border-white/5 bg-white/[0.03]
                      hover:bg-white/[0.06]
                      transition
                    "
                        >
                          {/* IMAGE */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                                src={service.image}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] to-transparent" />

                            <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#C8102E]">
                          0{index + 1}
                        </span>
                            </div>

                            <div className="absolute top-4 right-4">
                              <Icon className="w-4 h-4 text-white/70" />
                            </div>
                          </div>

                          {/* TEXT */}
                          <div className="p-5 space-y-3">
                            <h3 className="text-white font-bold text-lg group-hover:text-[#C8102E] transition">
                              {service.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                              {service.shortDescription}
                            </p>

                            <div className="pt-2 flex items-center justify-between text-xs text-gray-500">
                              <span>{service.features.length} capabilities</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                            </div>
                          </div>
                        </motion.button>
                    );
                  })}
                </motion.div>

            ) : (

                /* ================= SPLIT VIEW ================= */
                <motion.div
                    key="split"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid lg:grid-cols-12 gap-8"
                >

                  {/* LEFT NAV */}
                  <div className="lg:col-span-4 space-y-3">

                    {/* BACK BUTTON (IMPROVED) */}
                    <button
                        onClick={() => setSelectedId(null)}
                        className="
                    group inline-flex items-center gap-2
                    px-4 py-2 rounded-xl
                    bg-white/5 hover:bg-white/10
                    border border-white/5 hover:border-white/10
                    text-xs font-mono tracking-widest text-gray-400 hover:text-white
                    transition-all duration-300 mb-2
                  "
                    >
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition" />
                      EXIT VIEW
                    </button>

                    {services.map((service) => {
                      const Icon = iconMap[service.iconName] || Shield;
                      const active = service.id === selectedId;

                      return (
                          <button
                              key={service.id}
                              onClick={() => handleSelect(service.id)}
                              className={`w-full flex items-center gap-3 p-4 rounded-xl border transition ${
                                  active
                                      ? 'bg-white/5 border-[#C8102E]/40 text-white'
                                      : 'border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                          >
                            <Icon className={`w-4 h-4 ${active ? 'text-[#C8102E]' : ''}`} />

                            <div className="text-left">
                              <div className="text-sm font-semibold">
                                {service.title}
                              </div>
                              <div className="text-xs text-gray-500 line-clamp-1">
                                {service.shortDescription}
                              </div>
                            </div>
                          </button>
                      );
                    })}
                  </div>

                  {/* RIGHT PANEL (SMOOTH SWITCH ANIMATION) */}
                  <motion.div
                      animate={{
                        opacity: isSwitching ? 0 : 1,
                        y: isSwitching ? 10 : 0,
                        scale: isSwitching ? 0.985 : 1,
                      }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03]"
                  >
                    <div className="grid xl:grid-cols-2">

                      {/* IMAGE */}
                      <div className="h-64 xl:h-auto relative">
                        <img
                            key={activeService.id}
                            src={activeService.image}
                            className="w-full h-full object-cover transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
                      </div>

                      {/* CONTENT */}
                      <div className="p-8 space-y-6">

                        <div>
                          <div className="text-[#C8102E] text-xs font-mono tracking-widest mb-2">
                            ACTIVE SERVICE
                          </div>

                          <h3 className="text-2xl font-bold text-white">
                            {activeService.title}
                          </h3>

                          <p className="text-gray-400 text-sm mt-2">
                            {activeService.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {activeService.features.map((f, i) => (
                              <div
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-gray-300"
                              >
                                <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                                {f}
                              </div>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4">
                          <a
                              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-white flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Call
                          </a>

                          <a
                              href="#contact"
                              className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-white hover:text-black text-sm font-semibold transition"
                          >
                            Contact
                          </a>
                        </div>

                      </div>
                    </div>
                  </motion.div>

                </motion.div>
            )}

          </AnimatePresence>
        </div>
      </Section>
  );
}

export default Services;