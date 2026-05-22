import { Users, Clock, Sliders, FileCheck, Zap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Section } from './ui/Section';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  Users: Users,
  Clock: Clock,
  Sliders: Sliders,
  FileCheck: FileCheck,
  Zap: Zap,
  Award: Award,
};

export function WhyChooseUs() {
  const { title, subtitle, items, ctaBanner } = siteConfig.whyChooseUs;

  return (
    <Section id="why-us" title={title} subtitle={subtitle} darkBg={true} className="bg-[#111111]">
      {/* 3x2 Bento Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-8">
        {items.map((item, index) => {
          const IconComponent = iconMap[item.iconName] || Award;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-[#1c1c1c] border border-gray-800 hover:border-[#C8102E] p-8 transition-all duration-300 relative group flex flex-col justify-between cursor-pointer focus-within:ring-2 focus-within:ring-[#C8102E]"
            >
              <div>
                <div className="w-10 h-10 bg-[#C8102E]/10 text-[#C8102E] border border-[#C8102E]/20 flex items-center justify-center mb-5 group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3 font-sans">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
              
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#C8102E] transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>

      {/* Corporate Quotation CTA Banner - Heavyweight card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#1c1c1c] text-white p-8 md:p-12 relative overflow-hidden border border-gray-800"
      >
        {/* Subtle decorative security grid background inside card */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Absolute red graphic line design */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-[#C8102E]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
              {ctaBanner.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {ctaBanner.description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-4 bg-[#C8102E] hover:bg-[#b00e28] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 focus:ring-offset-[#111111] hover:scale-[1.03] active:scale-[0.98] transform-gpu"
            >
              <span>{ctaBanner.buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
export default WhyChooseUs;
