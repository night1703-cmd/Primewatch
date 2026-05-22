import React from 'react';
import { motion, useMotionValue } from 'motion/react';
import { Section } from './ui/Section';

interface DirectiveItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  features: { name: string; description: string }[];
  highlight: string;
}

export function VisionMission() {
  const directives: DirectiveItem[] = [
    {
      id: "01",
      tag: "TACTICAL CONDUCT",
      title: "Vigilance & Precision",
      description:
        "Integrity and absolute readiness form our operational foundation. We maintain unwavering alertness and coordinate responsive protective protocols across every UAE sector.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      highlight: "MILITARY-GRADE EXECUTION CONTROL",
      features: [
        {
          name: "Surveillance Audit",
          description: "Continuous perimeter monitoring and risk zone detection.",
        },
        {
          name: "Tactical Guard Sync",
          description: "Instant communication with mobile response units.",
        },
        {
          name: "Rapid Response Matrix",
          description: "Critical escalation within sub-4-minute deployment window.",
        },
      ],
    },
    {
      id: "02",
      tag: "STRATEGIC FORESIGHT",
      title: "Resilient Vision",
      description:
        "We design preventative protective frameworks that define next-generation UAE safety and risk intelligence systems.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      highlight: "PREDICTIVE RISK MANAGEMENT",
      features: [
        {
          name: "Risk Mapping",
          description: "Dynamic threat intelligence and vulnerability indexing.",
        },
        {
          name: "System Integration",
          description: "Smart compliance-linked monitoring systems.",
        },
        {
          name: "Strategy Tuning",
          description: "Quarterly operational optimization cycles.",
        },
      ],
    },
    {
      id: "03",
      tag: "OPERATIONAL DISPATCH",
      title: "Sovereign Mission",
      description:
        "Protecting national assets through elite personnel networks and coordinated emergency response systems.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      highlight: "SIRA CERTIFIED DEFENSE MATRIX",
      features: [
        {
          name: "Mobilization",
          description: "Instant containment and emergency security deployment.",
        },
        {
          name: "Federal Links",
          description: "Direct coordination with UAE security authorities.",
        },
        {
          name: "Asset Shield",
          description: "Full compliance backup under civil defense law.",
        },
      ],
    },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Section
      id="values"
      className="bg-[#FAFBF9] text-slate-950 relative overflow-hidden py-24 sm:py-32 lg:py-40 border-b border-slate-200"
      darkBg={false}
    >

      {/* ================= PREMIUM BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Atmospheric light fields */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[#C8102E]/10 blur-[140px]" />
          <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-slate-300/40 blur-[160px]" />
          <div className="absolute bottom-[-20%] left-1/3 w-[500px] h-[500px] bg-white/40 blur-[180px]" />
        </div>

        {/* Subtle grid layer */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Diagonal energy lines */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                135deg,
                rgba(200,16,46,0.2),
                rgba(200,16,46,0.2) 1px,
                transparent 1px,
                transparent 28px
              )
            `,
          }}
        />

        {/* Animated glow blobs */}
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#C8102E]/5 blur-[120px]"
        />

        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-slate-400/30 blur-[140px]"
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Fine architectural panel accents running down the margins */}
        <div className="absolute top-0 bottom-0 left-[4%] w-[1px] bg-slate-200/30 hidden 2xl:block pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-[4%] w-[1px] bg-slate-200/30 hidden 2xl:block pointer-events-none" />

        {/* Technical side labels and markers */}
        <div className="absolute left-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase rotate-180 [writing-mode:vertical-lr]">
          <span>STRATEGIC ALIGNMENT DIRECTIVES</span>
          <span className="text-[#C8102E]">CORE_VALS_DEPT_02</span>
        </div>
        <div className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase [writing-mode:vertical-lr]">
          <span>SECURE PROTOCOL DISPATCH OFFICE</span>
          <span className="text-[#C8102E]">OPERATIONAL_MAT_03</span>
        </div>

        {/* Absolute corner graphic marks */}
        <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#C8102E]/10" />
        <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-[#C8102E]/10" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-[#C8102E]/10" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#C8102E]/10" />

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= HEADER (CLEANED) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-10 mb-20 border-b border-slate-200 pb-14"
        >
          <div className="lg:col-span-12 space-y-4">

            <div className="text-xs font-mono tracking-[0.25em] text-[#C8102E] uppercase">
              CHAPTER 02 · OPERATIONAL FOUNDATIONS
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-slate-900">
              Core Operational<br />Directives
            </h2>

            <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
              Foundational principles defining security excellence and operational discipline across UAE infrastructure.
            </p>

          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-32">

          {directives.map((dir, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={dir.id}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >

                {/* IMAGE */}
                <motion.div
                  onMouseMove={handleMouseMove}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group">

                    <motion.img
                      src={dir.image}
                      className="w-full h-[420px] object-cover group-hover:scale-[1.03] transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 text-[10px] font-mono bg-white/90 px-2 py-1 rounded text-slate-800">
                      0{dir.id}
                    </div>

                    <div className="absolute bottom-4 right-4 text-[10px] font-mono bg-emerald-500 text-white px-2 py-1 rounded">
                      ACTIVE
                    </div>

                  </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >

                  <div className="text-xs font-mono text-[#C8102E] tracking-[0.25em] uppercase">
                    {dir.tag}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                    {dir.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed max-w-xl">
                    {dir.description}
                  </p>

                  {/* FEATURES */}
                  <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                    {dir.features.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        className="space-y-2"
                      >
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          {f.name}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {f.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase pt-4 border-t border-dashed">
                    {dir.highlight}
                  </div>

                </motion.div>

              </div>
            );
          })}

        </div>
      </div>
    </Section>
  );
}

export default VisionMission;