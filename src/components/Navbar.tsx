import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 15);

      if (isMobileMenuOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;

      const sections = siteConfig.navigation
          .map((nav) => document.getElementById(nav.href.replace('#', '')))
          .filter(Boolean);

      let current = 'home';
      const pos = currentScrollY + 180;

      for (const section of sections as HTMLElement[]) {
        if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 80) setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
      <>
        {/* ================= NAVBAR ================= */}
        <motion.nav
            initial={false}
            animate={{
              y: isVisible ? 0 : -80,
              opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`
          fixed top-0 left-0 right-0 z-50
          border-b transition-all duration-300
          ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-sm border-gray-200/60 py-2.5'
                    : 'bg-white/70 backdrop-blur-md border-gray-100/60 py-4'
            }
        `}
        >
          {/* top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8102E]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">

              {/* ================= LOGO ================= */}
              <a
                  href="#home"
                  className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition">
                  <img src="/Logo.png" className="w-8 h-8 object-contain" />
                </div>

                <div className="leading-tight">
                  <div className="font-black text-gray-900 group-hover:text-[#C8102E] transition text-sm tracking-tight">
                    PRIME WATCH
                  </div>
                  <div className="text-[9px] tracking-[0.25em] text-[#C8102E] font-bold uppercase">
                    Security Services
                  </div>
                </div>
              </a>

              {/* ================= DESKTOP NAV ================= */}
              <div className="hidden md:flex items-center gap-10">

                <ul className="flex items-center gap-7">
                  {siteConfig.navigation.map((item) => {
                    const active = activeSection === item.href.replace('#', '');

                    return (
                        <li key={item.label} className="relative">
                          <a
                              href={item.href}
                              className={`
                          text-xs font-bold uppercase tracking-widest
                          transition-colors duration-200
                          hover:text-[#C8102E]
                          ${active ? 'text-[#C8102E]' : 'text-gray-800'}
                        `}
                          >
                            {item.label}

                            {active && (
                                <motion.span
                                    layoutId="nav-indicator"
                                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#C8102E]"
                                    transition={{
                                      type: 'spring',
                                      stiffness: 400,
                                      damping: 30,
                                    }}
                                />
                            )}
                          </a>
                        </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className="
                  px-5 py-2.5 text-xs font-bold uppercase tracking-widest
                  bg-gray-950 text-white
                  hover:bg-[#C8102E]
                  transition-all duration-300
                  rounded-lg
                  hover:scale-[1.03] active:scale-[0.98]
                "
                >
                  Request Quote
                </a>
              </div>

              {/* ================= MOBILE BUTTON ================= */}
              <button
                  onClick={() => setIsMobileMenuOpen((p) => !p)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>

            </div>
          </div>
        </motion.nav>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="
              fixed top-[64px] left-0 right-0 z-40
              bg-white/95 backdrop-blur-xl
              border-b border-gray-200
              md:hidden
            "
              >
                <div className="px-6 py-6 space-y-4">

                  {siteConfig.navigation.map((item) => {
                    const active = activeSection === item.href.replace('#', '');

                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`
                      block text-sm font-semibold uppercase tracking-wider
                      pl-3 border-l-2 transition
                      ${
                                active
                                    ? 'border-[#C8102E] text-[#C8102E]'
                                    : 'border-transparent text-gray-700 hover:text-[#C8102E]'
                            }
                    `}
                        >
                          {item.label}
                        </a>
                    );
                  })}

                  <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="
                  block mt-4 text-center
                  bg-[#C8102E] text-white
                  py-3 rounded-lg text-sm font-bold
                  hover:bg-black transition
                "
                  >
                    Request Quote
                  </a>

                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}

export default Navbar;