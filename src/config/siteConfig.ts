/**
 * Site Configuration for Prime Watch Security
 * Centralized content file for easy updates of all text and data across the website.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  iconName: 'Shield' | 'LifeBuoy' | 'Sparkles';
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Users' | 'Clock' | 'Sliders' | 'FileCheck' | 'Zap' | 'Award';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  mapEmbedUrl: string;
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    logoText: string;
    establishedYear?: number;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    headline: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    commitmentTitle: string;
    commitments: string[];
  };
  principles: {
    principle: {
      title: string;
      text: string;
    };
    vision: {
      title: string;
      text: string;
    };
    mission: {
      title: string;
      text: string;
    };
  };
  services: ServiceItem[];
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: WhyChooseUsItem[];
    ctaBanner: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
  faqs: FAQItem[];
  contact: ContactDetails;
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: 'Prime Watch Security',
    tagline: 'Premium security, lifeguard, and housekeeping services in the UAE',
    description: 'We protect people, property, and communities through certified personnel and exceptional professional service.',
    logoText: 'PRIME WATCH'
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Our Services', href: '#services' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headline: 'Your Trusted Security Partner in the UAE',
    subheading: 'Professional security, lifeguard, and housekeeping services tailored to your needs.',
    primaryCta: 'Our Services',
    secondaryCta: 'Contact Us',
    // Uses the generated premium security lobby skyscraper asset
    backgroundImage: '/images/uae_security_hero_1779306974010.png',
  },
  about: {
    title: 'About Prime Watch Security',
    subtitle: 'Committed to Quality, Built on Trust',
    paragraphs: [
      'Prime Watch Security is a newly established premier provider of physical security, lifeguard, and comprehensive facility services across the United Arab Emirates. Guided by a steadfast dedication to high professional standards, we address the critical protection and housekeeping needs of businesses, residential communities, and special events.',
      'As a newly founded company in the region, we are completely focused on demonstrating our readiness, agility, and elite capabilities in every deployment. Rather than relying on past accomplishments, we earn our clients trust at every engagement by setting new benchmarks for vigilance, responsiveness, and customer-centered support.',
    ],
    commitmentTitle: 'Our Core Commitments',
    commitments: [
      'Highly trained, certified, and vetted personnel who represent your brand with distinction.',
      'An unwavering commitment to client safety, confidentiality, and asset protection.',
      'Symmetric solutions shaped precisely around each client\'s specific environmental hazards and goals.',
      'Total alignment with international security delivery standards and federal UAE regulatory authorities.',
    ],
  },
  principles: {
    principle: {
      title: 'Our Principle',
      text: 'Integrity, vigilance, and professionalism guide everything we do.',
    },
    vision: {
      title: 'Our Vision',
      text: 'To become one of the most trusted providers of security and support services in the UAE.',
    },
    mission: {
      title: 'Our Mission',
      text: 'To protect people, property, and communities through reliable personnel and exceptional service.',
    },
  },
  services: [
    {
      id: 'security-services',
      title: 'Security Services',
      shortDescription: 'Comprehensive guarding and technical vigilance for complete asset and personal protection.',
      description: 'Our security division delivers tailored solutions built to mitigate modern risks. From executive protection to commercial building defense, our guards operate with peak discipline, local UAE compliance knowledge, and rapid critical response readiness.',
      features: [
        'Manned Guarding (Residential & Commercial)',
        'Event Security & VIP Crowd Sourcing',
        'CCTV Monitoring & Control Room Support',
        'Physical Access Control & Gate Management',
        'VIP Close Protection & Executive Security Transport',
      ],
      image: '/images/uae_security_service_1779460535319.png',
      iconName: 'Shield',
    },
    {
      id: 'lifeguard-services',
      title: 'Lifeguard Services',
      shortDescription: 'Professional marine safety, surveillance, and emergency emergency response for pools and beaches.',
      description: 'We supply certified pool and open-water lifeguards who adhere to strict civil defense and international water safety standards. Our personnel ensure safety, watch key recreational zones tirelessly, and manage incident mitigation seamlessly.',
      features: [
        'Highly Certified Lifeguards (Pools, Waterparks & Resorts)',
        'Pool Safety Supervision & Active Patrolling',
        'Emergency Action Planning & First Aid Response',
        'Daily Risk Assessment & Hazard Prevention Reports',
      ],
      image: '/images/uae_lifeguard_service_1779460513875.png',
      iconName: 'LifeBuoy',
    },
    {
      id: 'housekeeping-services',
      title: 'Housekeeping Services',
      shortDescription: 'Premium residential, commercial, and facility maintenance for absolute hygiene and order.',
      description: 'Keep your property clean, organized, and welcoming. Our housekeeping professionals utilize high-safety sanitizing practices to service office hubs, corporate towers, residential sectors, and industrial facilities in UAE style.',
      features: [
        'Commercial & Corporate Office Cleaning',
        'Residential Block & Luxury Community Housekeeping',
        'Specialist Post-Event Clean-up and Operations',
        'Hygiene Maintenance and Advanced Sanitization',
        'Dedicated Facility Support Personnel',
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600',
      iconName: 'Sparkles',
    },
  ],
  whyChooseUs: {
    title: 'Why Choose Prime Watch Security',
    subtitle: 'The Core Differentiators that Earn Client Confidence',
    items: [
      {
        id: 'staff',
        title: 'Professional & Trained Staff',
        description: 'Every representative undergoes rigorous background vetting, technical security or safety drills, and extensive hospitality training.',
        iconName: 'Users',
      },
      {
        id: 'availability',
        title: '24/7 Availability & Control',
        description: 'Our operations desk operates around the clock. Clients can access management and security supervisors at any moment of the day or night.',
        iconName: 'Clock',
      },
      {
        id: 'solutions',
        title: 'Tailored Solutions',
        description: 'No template contracts. We analyze your asset layout, perimeter vulnerabilities, and user activity to formulate highly customized SOPs.',
        iconName: 'Sliders',
      },
      {
        id: 'compliance',
        title: 'UAE Compliance Standards',
        description: 'All operations strictly align with UAE Private Security Business Department (PSBD) or Dubai Police Academy Academy requirements.',
        iconName: 'FileCheck',
      },
      {
        id: 'response',
        title: 'Fast & Agile Response',
        description: 'Streamlined local management ensures speed. We bypass bureaucratic delays to handle dynamic staffing modifications or incidents immediately.',
        iconName: 'Zap',
      },
      {
        id: 'excellence',
        title: 'Commitment to Excellence',
        description: 'We implement regular performance audits, random supervisor sit-ins, and client feedback loops to maintain elite quality standards.',
        iconName: 'Award',
      },
    ],
    ctaBanner: {
      title: 'Secure Your Premier UAE Asset Today',
      description: 'Connect with our security and facilities specialists. Get a comprehensive site-risk audit and dynamic service quotation tailored precisely to your operational needs.',
      buttonText: 'Request a Free Quotation',
    },
  },
  faqs: [
    {
      id: 'faq-1',
      question: 'What professional services does Prime Watch Security provide?',
      answer: 'We provide specialized solutions across three primary divisions in the UAE: Manned Physical Security (Commercial Security, Residential Guarding, Control Room/CCTV Officers, Event Protection), Certified Lifeguards (for private pools, hospitality resorts, and aquatic centers), and Premium Housekeeping & Facilities maintenance.',
    },
    {
      id: 'faq-2',
      question: 'Which geographical areas in the UAE do you cover?',
      answer: 'Our operational network spans the entirety of the United Arab Emirates, with deployment capabilities in Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.',
    },
    {
      id: 'faq-3',
      question: 'Are your staff fully trained and legally certified?',
      answer: 'Yes. Our security guards, lifeguards, and cleaning crews are trained in line with public safety metrics. All security personnel are vetted and comply with UAE regulatory standards (such as SIRA in Dubai or PSBD in Abu Dhabi), while our lifeguards hold valid first-aid and open-water response certifications.',
    },
    {
      id: 'faq-4',
      question: 'Can your services be customized to our specific needs?',
      answer: 'Absolutely. We do not believe in one-size-fits-all contracts. Our specialized engineers and operations heads will conduct an initial site assessment, map vulnerabilities, and build a bespoke Standard Operating Procedure (SOP) customized to your asset layout, traffic density, and budget.',
    },
    {
      id: 'faq-5',
      question: 'How do I request a formal quotation?',
      answer: 'You can easily request a quotation by filling out our online contact form below with your requirements, emailing us directly, or calling our UAE operational office. We usually respond with an initial draft or schedule a physical inspect visit within 24 working hours.',
    },
  ],
  contact: {
    phone: '+971 4 123 4567',
    email: 'info@primewatch.ae',
    address: 'Business Bay, Sheikh Zayed Road, Office 1402, Prime Watch Tower, Dubai, United Arab Emirates',
    workingHours: 'Monday - Saturday: 8:00 AM - 6:00 PM (Operations 24/7)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.975411649961!2d55.264426868581704!3d25.18652317182283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68311a681335%3A0xe5a3c2602738a9e7!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1716187893123!5m2!1sen!2sae',
  },
  socials: [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/primewatchsecurity-uae-placeholder', icon: 'Linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/primewatch_uae-placeholder', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://facebook.com/primewatchsecurityae-placeholder', icon: 'Facebook' },
    { name: 'Twitter/X', url: 'https://twitter.com/primewatch_uae-placeholder', icon: 'Twitter' },
  ],
};
