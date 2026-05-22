import { motion } from 'motion/react';

interface SectionSeparatorProps {
  dark?: boolean;
  bgColor?: string;
}

export function SectionSeparator({ dark = false, bgColor }: SectionSeparatorProps) {
  // Determine standard background color based on dark prop if bgColor is not provided
  const bgClass = bgColor || (dark ? 'bg-[#111111]' : 'bg-white');

  return (
    <div className={`w-full py-4 relative flex items-center justify-center overflow-hidden select-none ${bgClass}`}>
      {/* Subtle dashed/dotted texture beside the line */}
      {!dark && (
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
             style={{
               backgroundImage: 'radial-gradient(#C8102E 1px, transparent 1px)',
               backgroundSize: '16px 16px'
             }} 
        />
      )}

      {/* Structural full-width architectural horizontal line */}
      <div className={`absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 ${dark ? 'bg-gray-800' : 'bg-gray-200/80'}`} />

      {/* Centered Red Diamond Motif */}
      <div className="relative flex items-center justify-center z-10">
        <motion.div
          initial={{ rotate: 45, scale: 0.8 }}
          whileInView={{ rotate: 225, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={`w-3 h-3 bg-[#C8102E] rotate-45 border-2 ${dark ? 'border-[#111111]' : 'border-white'} shadow-sm`}
        />
      </div>
    </div>
  );
}

export default SectionSeparator;
