import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Globe
} from 'lucide-react';
import { Section } from './ui/Section';
import { siteConfig } from '../config/siteConfig';

export function Contact() {
  const { phone, email, address, mapEmbedUrl, whatsapp } = siteConfig.contact;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copy = (value: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(value);

    if (type === 'email') setCopiedEmail(true);
    else setCopiedPhone(true);

    setTimeout(() => {
      setCopiedEmail(false);
      setCopiedPhone(false);
    }, 2000);
  };

  const channels = [
    {
      name: 'WhatsApp',
      desc: 'Instant operational response',
      icon: MessageSquare,
      href: whatsapp ? (whatsapp.startsWith('http') ? whatsapp : `https://wa.me/${whatsapp.replace(/\+/g, '').replace(/\s/g, '').replace(/-/g, '')}`) : 'https://wa.me/971501234567',
      color: 'text-emerald-500'
    },
    {
      name: 'LinkedIn',
      desc: 'Corporate updates & networking',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/prime-watch-82b2b1411',
      color: 'text-blue-500'
    },
    {
      name: 'Instagram',
      desc: 'Field operations & media assets',
      icon: Instagram,
      href: 'https://www.instagram.com/primewatchae/',
      color: 'text-pink-500'
    },
    {
      name: 'Facebook',
      desc: 'Community connection & reviews',
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61590047894438',
      color: 'text-indigo-500'
    },
    {
      name: 'Official Website',
      desc: 'Explore services online',
      icon: Globe,
      href: 'https://primewatch.ae',
      color: 'text-[#C8102E]'
    }
  ];

  return (
      <Section id="contact" className="relative overflow-hidden bg-slate-50">

        {/* ================= PREMIUM BACKGROUND SYSTEM ================= */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Main Subtle Technical Grid */}
          <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)',
                backgroundSize: '48px 48px'
              }}
          />
          {/* Soft Radial Vignette Mask to fade the grids elegantly toward edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#f8fafc_80%)]" />

          {/* Glowing Ambient Crimson and Slate Accent Orbs */}
          <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#C8102E]/8 to-transparent blur-[130px]" />
          <div className="absolute bottom-1/4 -left-24 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-slate-400/8 to-transparent blur-[120px]" />

          {/* Technical side labels and markers */}
          <div className="absolute left-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase rotate-180 [writing-mode:vertical-lr]">
            <span>SYSTEM DIRECTIVES // STATUS ACTIVE</span>
            <span className="text-[#C8102E]">SEC_LINK_009_PRIME</span>
          </div>
          <div className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-25 font-mono text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase [writing-mode:vertical-lr]">
            <span>LOC_REF // 25.2048° N, 55.2708° E</span>
            <span className="text-[#C8102E]">HQ_INT_COMM_SYS</span>
          </div>

          {/* Absolute corner graphic marks */}
          <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#C8102E]/10" />
          <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-[#C8102E]/10" />
          <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-[#C8102E]/10" />
          <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#C8102E]/10" />

          {/* Subtle horizontal grid lines */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-slate-200/50" />
          <div className="absolute bottom-12 left-[10%] right-[10%] h-[1px] bg-slate-200/50" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 relative z-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-6">

            {/* HQ CARD */}
            <div className="rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Headquarters
              </h3>

              <div className="space-y-5">

                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="text-red-600 w-5 h-5 mt-1" />
                  <p className="text-sm text-gray-700">{address}</p>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-center">
                  <Phone className="text-red-600 w-5 h-5" />
                  <a
                      href={`tel:${phone}`}
                      className="text-sm font-semibold text-gray-900 hover:text-red-600 transition-colors"
                  >
                    {phone}
                  </a>

                  <button onClick={() => copy(phone, 'phone')}>
                    {copiedPhone ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-center">
                  <Mail className="text-red-600 w-5 h-5" />
                  <a
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-gray-900 hover:text-red-600 transition-colors"
                  >
                    {email}
                  </a>

                  <button onClick={() => copy(email, 'email')}>
                    {copiedEmail ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>

              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 shadow-sm">
              <iframe
                  title="HQ Map"
                  src={mapEmbedUrl}
                  className="w-full h-full"
                  loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 space-y-6">

            {/* TITLE */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Contact Channels
              </h2>
              <p className="text-gray-500 mt-2 max-w-lg">
                Reach us directly through official communication networks or instant messaging channels.
              </p>
            </div>

            {/* CHANNEL GRID */}
            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map((c, i) => {
                const Icon = c.icon;

                return (
                    <motion.a
                        key={c.name}
                        href={c.href}
                        target="_blank"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="
                    group relative rounded-2xl border border-gray-100
                    bg-white p-5 overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md
                  "
                    >
                      {/* SMOOTH BLACK SLIDE OVERLAY */}
                      <span
                          className="
                      absolute inset-0 bg-black
                      translate-y-full group-hover:translate-y-0
                      transition-transform duration-500 ease-out
                      z-0
                    "
                      />

                      <div className="relative z-10">

                        {/* ICON ROW */}
                        <div className="flex items-center justify-between">
                          <Icon className={`w-5 h-5 ${c.color} group-hover:text-white transition-colors duration-300`} />
                          <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* TEXT */}
                        <h4 className="mt-4 font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                          {c.name}
                        </h4>

                        <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                          {c.desc}
                        </p>
                      </div>
                    </motion.a>
                );
              })}
            </div>

            {/* CTA STRIP */}
            <div className="rounded-2xl bg-gray-950 text-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              <div>
                <h4 className="font-semibold text-lg">Need immediate response?</h4>
                <p className="text-sm text-gray-300">
                  Call our duty officer for urgent deployment requests.
                </p>
              </div>

              {/* SMOOTH RED → BLACK SLIDE BUTTON */}
              <a
                  href={`tel:${phone}`}
                  className="
                group relative px-5 py-3 rounded-xl overflow-hidden
                text-white font-semibold text-sm
                transition-all duration-300 hover:scale-[1.03]
              "
              >
                {/* red base */}
                <span className="absolute inset-0 bg-[#C8102E]" />

                {/* black sliding layer */}
                <span
                    className="
                  absolute inset-0 bg-black
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
                />

                <span className="relative flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </span>
              </a>

            </div>

          </div>
        </div>
      </Section>
  );
}

export default Contact;