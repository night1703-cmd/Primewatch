import { Section } from './ui/Section';
import { ShieldCheck, Award, Target, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Users,
      title: "Highly Trained Personnel",
      desc: "Our operators undergo rigorous background verification and regular defense training to keep tactical skills razor-sharp."
    },
    {
      icon: ShieldCheck,
      title: "Absolute Command Safety",
      desc: "From emergency mitigations to standard access control, defense protocols are fully audited and rigorously applied."
    },
    {
      icon: Target,
      title: "Client-Centric Solutions",
      desc: "Each task profile is compiled specifically to your venue, balancing client-facing hospitality with watertight security."
    },
    {
      icon: Award,
      title: "SIRA Compliant Standards",
      desc: "Fully accredited operations in absolute alignment with the regulatory laws of the United Arab Emirates."
    }
  ];

  return (
      <Section id="about" className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-32">

        {/* Dynamic Multi-layered Background Architecture */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {/* Main Structural Grid */}
          <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
          />
          {/* Soft Radial Vignette Mask to fade the grids elegantly toward edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#f8fafc_80%)]" />

          {/* Amplified Dynamic Color Orbs */}
          <div className="absolute top-12 -left-20 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-br from-[#C8102E]/10 to-transparent blur-[120px]" />
          <div className="absolute bottom-12 -right-20 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tl from-[#C8102E]/8 to-transparent blur-[120px]" />

          {/* Fine architectural panel accents running down the margins */}
          <div className="absolute top-0 bottom-0 left-[4%] w-[1px] bg-slate-200/30 hidden 2xl:block" />
          <div className="absolute top-0 bottom-0 right-[4%] w-[1px] bg-slate-200/30 hidden 2xl:block" />

          {/* Technical side labels and markers */}
          <div className="absolute left-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase rotate-180 [writing-mode:vertical-lr]">
            <span>ESTABLISHED IN THE UAE // DUBAI</span>
            <span className="text-[#C8102E]">SEC_CREDENTIALS_01</span>
          </div>
          <div className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase [writing-mode:vertical-lr]">
            <span>REGULATORY CONTROL SIRA CERTIFIED</span>
            <span className="text-[#C8102E]">LIC_REF_DUBAI_7493</span>
          </div>

          {/* Absolute corner graphic marks */}
          <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#C8102E]/10" />
          <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-[#C8102E]/10" />
          <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-[#C8102E]/10" />
          <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#C8102E]/10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

            {/* Left Column: Typography & Content Grid */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#C8102E] tracking-[0.2em] uppercase">
                    Corporate Overview
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400">
                    // SEC_DIVISION_01
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-sans font-black text-slate-900 uppercase tracking-tight leading-none">
                  Sovereign Standards.<br />
                  <span className="text-[#C8102E]">Uncompromising</span> Vigilance.
                </h2>
                <div className="w-20 h-1 bg-[#C8102E] rounded-full mt-4" />
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Prime Watch Security is a premier security and facility services company dedicated to delivering dependable and professional services throughout the United Arab Emirates. We operate to strict international service standards to ensure your peace of mind and the absolute safety of your assets.
              </p>

              {/* Redesigned Interactive Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {features.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                      <div
                          key={index}
                          className="group relative p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-[#C8102E] rounded-l-2xl transition-colors duration-300" />
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-xl bg-slate-50 text-[#C8102E] group-hover:bg-[#C8102E]/10 transition-colors duration-300 shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                              {item.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Premium Offset Media Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full max-w-md lg:max-w-none mx-auto aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] xl:aspect-[3/4]">
                {/* Architectural Grid Underlay */}
                <div
                    className="absolute inset-4 opacity-[0.03] pointer-events-none z-0"
                    style={{
                      backgroundImage: 'linear-gradient(#C8102E 1.5px, transparent 1.5px), linear-gradient(90deg, #C8102E 1.5px, transparent 1.5px)',
                      backgroundSize: '24px 24px'
                    }}
                />

                {/* Premium Backdrop Framing */}
                <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-gradient-to-tr from-[#C8102E]/20 to-transparent rounded-3xl z-0" />

                {/* Primary Image Component */}
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 relative z-10">
                  <img
                      src="/images/uae_security_about_1779460489809.png"
                      alt="Prime Watch Security - Reliable Corporate Standards"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                  />
                </div>

                {/* Status Pill Component */}
                <div className="absolute -bottom-3 -left-3 sm:-left-6 z-20 bg-slate-900 text-white rounded-xl p-3.5 shadow-xl border border-white/10 flex items-center gap-3">
                  <div className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-slate-400 block">
                      REGULATORY APPROVAL
                    </span>
                    <span className="text-[11px] font-mono font-bold text-white block mt-0.5 whitespace-nowrap">
                      LICENSED & FULLY CERTIFIED
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Section>
  );
}

export default About;