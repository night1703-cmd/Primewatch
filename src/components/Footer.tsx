import { ShieldAlert, Linkedin, Instagram, Facebook, Twitter, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const socialMap = {
  Linkedin: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  Twitter: Twitter,
  Globe: Globe,
};

export function Footer() {
  const { name, description } = siteConfig.company;
  const { phone, email, address } = siteConfig.contact;

  return (
    <footer aria-label="Footer" className="bg-[#111111] text-white pt-16 pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 bg-white border border-gray-800 rounded-lg flex items-center justify-center p-1 shrink-0 shadow-sm">
                <img
                  src="/Logo.png"
                  alt="Prime Watch"
                  className="w-full h-full object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold tracking-tight leading-none uppercase text-base text-white">
                  PRIME WATCH
                </span>
                <span className="text-[8px] tracking-[0.25em] leading-none mt-1 font-bold text-[#C8102E] uppercase">
                  Security Services
                </span>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-sm">
              {description} Let us secure your commercial or residential premises with elite civil enforcement standards.
            </p>
            {/* Social List */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socials.map((soc) => {
                const IconComp = socialMap[soc.icon as keyof typeof socialMap] || Linkedin;
                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Prime Watch Security on ${soc.name}`}
                    className="p-2.5 bg-gray-900 hover:bg-[#C8102E] text-gray-400 hover:text-white transition-colors duration-200 border border-gray-800"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8102E] font-sans">
              Corporate Desk
            </h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((nav) => (
                <li key={nav.href}>
                  <a
                    href={nav.href}
                    className="text-sm font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-150 font-sans"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8102E] font-sans">
              Get In Touch
            </h4>
            <ul className="space-y-4 font-sans text-sm text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                <address className="not-italic text-gray-400 leading-relaxed">
                  {address}
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-colors duration-150 font-bold">
                  {phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors duration-150 underline">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Bottom bar with Geometric Accents */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-sans font-medium">
          <p>© {new Date().getFullYear()} Prime Watch Security Services LLC. Registered in Dubai, UAE.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="flex gap-2 items-center mr-2">
              <div className="w-2 h-2 bg-[#C8102E] rotate-45"></div>
              <div className="w-2 h-2 bg-gray-600 rotate-45"></div>
              <div className="w-2 h-2 bg-[#C8102E] rotate-45"></div>
            </div>
            <span className="hover:text-white transition-colors cursor-pointer text-[10px] uppercase tracking-widest font-bold">Authorized Service Provider</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-white transition-colors cursor-pointer text-[10px] uppercase tracking-widest font-bold">SIRA & PSBD Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
