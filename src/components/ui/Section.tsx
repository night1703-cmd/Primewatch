import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  darkBg?: boolean;
  children: ReactNode;
  titleAlign?: 'center' | 'left';
}

export function Section({
  id,
  className = '',
  title,
  subtitle,
  darkBg = false,
  children,
  titleAlign = 'center',
}: SectionProps) {
  const isCentered = titleAlign === 'center';

  return (
    <section
      id={id}
      className={`py-20 md:py-28 transition-colors duration-300 relative overflow-hidden ${
        darkBg
          ? 'bg-[#111111] text-white'
          : className.includes('bg-[#F8F9FA]') || className.includes('bg-gray-50')
          ? 'text-[#333333]'
          : 'bg-[#FFFFFF] text-[#333333]'
      } ${className}`}
    >
      {/* Decorative vertical lines on very wide screens to frame the layout and prevent empty feeling */}
      <div className={`absolute top-0 bottom-0 left-[4%] w-[1px] hidden xl:block pointer-events-none transition-colors duration-300 ${darkBg ? 'bg-gray-800/20' : 'bg-gray-200/40'}`} />
      <div className={`absolute top-0 bottom-0 right-[4%] w-[1px] hidden xl:block pointer-events-none transition-colors duration-300 ${darkBg ? 'bg-gray-800/20' : 'bg-gray-200/40'}`} />

      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1500px] 3xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`mb-12 md:mb-16 max-w-3xl ${isCentered ? 'mx-auto text-center' : ''}`}
          >
            {title && (
              <h2
                className={`text-3xl md:text-5xl font-display font-black tracking-tight mb-4 uppercase relative inline-block ${
                  darkBg ? 'text-white' : 'text-gray-900'
                }`}
              >
                {title}
                <span className="block w-14 h-[3px] bg-[#C8102E] mt-4 mx-auto"></span>
              </h2>
            )}
            {subtitle && (
              <p className={`text-sm md:text-base mt-4 font-sans max-w-2xl mx-auto tracking-normal leading-relaxed ${darkBg ? 'text-gray-400 font-normal' : 'text-gray-500 font-medium'}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
