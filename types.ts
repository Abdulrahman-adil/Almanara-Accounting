export enum Language {
  AR = 'ar',
  EN = 'en',
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TranslationData {
  meta: {
    title: string;
    dir: 'rtl' | 'ltr';
  };
  nav: {
    links: NavLink[];
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    section: SectionContent;
    items: ServiceItem[];
  };
  about: {
    section: SectionContent;
    content: string;
    values: string[];
  };
  process: {
    section: SectionContent;
    steps: ProcessStep[];
  };
  pricing: {
    section: SectionContent;
    plans: PricingPlan[];
  };
  faq: {
    section: SectionContent;
    items: FAQItem[];
  };
  contact: {
    section: SectionContent;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      service: string;
      serviceOptions: string[];
      message: string;
      submit: string;
      success: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
    };
  };
  footer: {
    rights: string;
    description: string;
  };
}