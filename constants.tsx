import { TranslationData, Language } from './types';
import { 
  Calculator, 
  FileText, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

export const CONTACT_INFO = {
  phone: "+971 50 123 4567",
  whatsapp: "971501234567", // format for API
  email: "info@almanaraelite.ae",
  address: "Abu Dhabi, United Arab Emirates"
};

export const TRANSLATIONS: Record<Language, TranslationData> = {
  [Language.AR]: {
    meta: { title: "المنارة إي لايت", dir: "rtl" },
    nav: {
      links: [
        { label: "الرئيسية", href: "#hero" },
        { label: "خدماتنا", href: "#services" },
        { label: "من نحن", href: "#about" },
        { label: "آلية العمل", href: "#process" },
        { label: "الأسعار", href: "#pricing" },
        { label: "الأسئلة", href: "#faq" },
      ],
      cta: "طلب استشارة",
    },
    hero: {
      title: "شريكك الموثوق في مسك الدفاتر والمراجعة وإعداد الميزانيات",
      subtitle: "نقدم حلولاً مالية شاملة للشركات الصغيرة والمتوسطة في الإمارات. دقة في الأرقام، ووضوح في الرؤية.",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "تواصل عبر واتساب",
    },
    services: {
      section: {
        title: "خدماتنا",
        description: "نقدم مجموعة متكاملة من الخدمات المالية والمحاسبية المصممة لنمو أعمالك.",
      },
      items: [
        { id: '1', title: "مسك الدفاتر والمحاسبة", description: "تسجيل دقيق لكافة العمليات المالية لضمان سجلات نظيفة ومحدثة.", iconName: "Calculator" },
        { id: '2', title: "التدقيق الداخلي والخارجي", description: "مراجعة شاملة لضمان الامتثال للمعايير المحاسبية وتجنب المخاطر.", iconName: "ShieldCheck" },
        { id: '3', title: "القوائم المالية والميزانيات", description: "إعداد تقارير الأرباح والخسائر والميزانية العمومية بمهنية عالية.", iconName: "FileText" },
        { id: '4', title: "خدمات ضريبة القيمة المضافة", description: "التسجيل، تقديم الإقرارات، وضمان الامتثال لقوانين الضرائب في الإمارات.", iconName: "PieChart" },
        { id: '5', title: "الامتثال والرواتب", description: "إدارة كشوف المرتبات والتأكد من الامتثال لقوانين العمل.", iconName: "Users" },
        { id: '6', title: "الاستشارات المالية", description: "تحليل مالي استراتيجي لمساعدتك في اتخاذ قرارات عمل مستنيرة.", iconName: "TrendingUp" },
      ],
    },
    about: {
      section: { title: "من نحن" },
      content: "المنارة إي لايت هي شركة رائدة في مجال الخدمات المحاسبية في دولة الإمارات العربية المتحدة. نحن متخصصون في دعم الشركات الناشئة والصغيرة والمتوسطة من خلال تقديم حلول محاسبية دقيقة وموثوقة. فريقنا من الخبراء الماليين يلتزم بأعلى معايير الجودة لضمان استقرار ونمو أعمالك.",
      values: ["الشفافية المطلقة", "الدقة والامتثال", "السرية التامة", "الاحترافية في التعامل"],
    },
    process: {
      section: { title: "كيف نعمل؟", description: "خطوات بسيطة وواضحة لبدء رحلة النجاح المالي." },
      steps: [
        { number: "٠١", title: "استشارة أولية", description: "نفهم طبيعة عملك واحتياجاتك المالية بدقة." },
        { number: "٠٢", title: "جمع المستندات", description: "تنظيم وجمع كافة الفواتير والسجلات المالية اللازمة." },
        { number: "٠٣", title: "التنفيذ والمراجعة", description: "العمل على مسك الدفاتر والتدقيق وإعداد التقارير دورياً." },
        { number: "٠٤", title: "التسليم والدعم", description: "تسليم القوائم المالية النهائية وتقديم الدعم الضريبي." },
      ],
    },
    pricing: {
      section: { title: "باقات الأسعار", description: "اختر الباقة التي تناسب حجم وطبيعة عملك." },
      plans: [
        { 
          name: "البداية", 
          price: "يبدأ من ١٠٠٠ د.إ", 
          features: ["مسك دفاتر شهري", "تقارير ربع سنوية", "دعم عبر البريد الإلكتروني"], 
          cta: "اطلب عرض سعر" 
        },
        { 
          name: "النمو", 
          price: "يبدأ من ٢٥٠٠ د.إ", 
          features: ["مسك دفاتر أسبوعي", "تقارير شهرية", "تقديم إقرارات الضريبة", "دعم عبر الهاتف"], 
          recommended: true,
          cta: "اطلب عرض سعر" 
        },
        { 
          name: "المؤسسات", 
          price: "مخصص", 
          features: ["تدقيق داخلي كامل", "مدير حسابات مخصص", "تقارير مالية متقدمة", "استشارات استراتيجية"], 
          cta: "تواصل معنا" 
        },
      ],
    },
    faq: {
      section: { title: "الأسئلة الشائعة" },
      items: [
        { question: "هل تقدمون خدماتكم لجميع إمارات الدولة؟", answer: "نعم، نقدم خدماتنا للشركات في أبوظبي، دبي، وكافة أنحاء الإمارات." },
        { question: "هل تساعدون في التسجيل لضريبة القيمة المضافة؟", answer: "بالتأكيد، نساعدك في التسجيل، تقديم الإقرارات، ومراجعة الامتثال الضريبي." },
        { question: "كيف يتم تحديد تكلفة الخدمات؟", answer: "تعتمد التكلفة على حجم العمليات المالية وعدد المعاملات الشهرية ونوع الخدمات المطلوبة." },
      ],
    },
    contact: {
      section: { title: "تواصل معنا", description: "جاهزون للإجابة على استفساراتكم وتقديم الدعم المالي." },
      form: {
        name: "الاسم الكامل",
        company: "اسم الشركة (اختياري)",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        service: "نوع الخدمة المطلوبة",
        serviceOptions: ["مسك الدفاتر", "تدقيق ومراجعة", "إعداد ميزانيات", "ضريبة القيمة المضافة", "أخرى"],
        message: "تفاصيل الرسالة",
        submit: "إرسال الطلب",
        success: "شكراً لك! سيتم تحويلك لإرسال الرسالة عبر واتساب لإكمال الطلب.",
      },
      info: {
        address: "أبوظبي، الإمارات العربية المتحدة",
        phone: "هاتف: " + CONTACT_INFO.phone,
        email: "بريد: " + CONTACT_INFO.email,
      }
    },
    footer: {
      rights: "جميع الحقوق محفوظة © ٢٠٢٤ المنارة إي لايت",
      description: "شركة متخصصة في المحاسبة والتدقيق والاستشارات المالية في الإمارات العربية المتحدة."
    }
  },
  [Language.EN]: {
    meta: { title: "Almanara Elite L.L.C", dir: "ltr" },
    nav: {
      links: [
        { label: "Home", href: "#hero" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Process", href: "#process" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Request Consultation",
    },
    hero: {
      title: "Your Trusted Partner for Bookkeeping, Auditing, and Budgeting",
      subtitle: "Comprehensive financial solutions for SMEs in the UAE. Precision in numbers, clarity in vision.",
      ctaPrimary: "Book a Free Consultation",
      ctaSecondary: "Chat on WhatsApp",
    },
    services: {
      section: {
        title: "Our Services",
        description: "A complete suite of financial and accounting services designed for your business growth.",
      },
      items: [
        { id: '1', title: "Bookkeeping & Accounting", description: "Accurate recording of all financial transactions ensuring clean and up-to-date records.", iconName: "Calculator" },
        { id: '2', title: "Internal & External Audit", description: "Comprehensive auditing to ensure compliance with standards and mitigate risks.", iconName: "ShieldCheck" },
        { id: '3', title: "Financial Statements", description: "Professional preparation of P&L, balance sheets, and cash flow statements.", iconName: "FileText" },
        { id: '4', title: "VAT & Tax Services", description: "Registration, filing returns, and ensuring full compliance with UAE tax laws.", iconName: "PieChart" },
        { id: '5', title: "Payroll & Compliance", description: "Managing payroll processing and ensuring labor law compliance.", iconName: "Users" },
        { id: '6', title: "Financial Advisory", description: "Strategic financial analysis to help you make informed business decisions.", iconName: "TrendingUp" },
      ],
    },
    about: {
      section: { title: "About Us" },
      content: "Almanara Elite L.L.C is a premier accounting firm in the UAE. We specialize in supporting startups and SMEs with accurate and reliable accounting solutions. Our team of financial experts is committed to the highest standards of quality to ensure the stability and growth of your business.",
      values: ["Absolute Transparency", "Accuracy & Compliance", "Strict Confidentiality", "Professionalism"],
    },
    process: {
      section: { title: "How We Work", description: "Simple and clear steps to start your financial success journey." },
      steps: [
        { number: "01", title: "Initial Consultation", description: "Understanding your business nature and financial needs precisely." },
        { number: "02", title: "Data Collection", description: "Organizing and collecting all necessary invoices and financial records." },
        { number: "03", title: "Execution & Audit", description: "Ongoing bookkeeping, auditing, and periodic reporting." },
        { number: "04", title: "Delivery & Support", description: "Delivering final financial statements and providing tax support." },
      ],
    },
    pricing: {
      section: { title: "Pricing Plans", description: "Choose the package that fits your business size and nature." },
      plans: [
        { 
          name: "Starter", 
          price: "From AED 1,000", 
          features: ["Monthly Bookkeeping", "Quarterly Reports", "Email Support"], 
          cta: "Request Quote" 
        },
        { 
          name: "Growth", 
          price: "From AED 2,500", 
          features: ["Weekly Bookkeeping", "Monthly Reports", "VAT Filing", "Phone Support"], 
          recommended: true,
          cta: "Request Quote" 
        },
        { 
          name: "Enterprise", 
          price: "Custom", 
          features: ["Full Internal Audit", "Dedicated Account Manager", "Advanced Reporting", "Strategic Advisory"], 
          cta: "Contact Us" 
        },
      ],
    },
    faq: {
      section: { title: "Frequently Asked Questions" },
      items: [
        { question: "Do you serve all UAE emirates?", answer: "Yes, we serve companies in Abu Dhabi, Dubai, and across the entire UAE." },
        { question: "Do you help with VAT registration?", answer: "Absolutely, we assist with registration, filing returns, and tax compliance reviews." },
        { question: "How is the cost determined?", answer: "Cost depends on the volume of financial operations, number of monthly transactions, and specific services required." },
      ],
    },
    contact: {
      section: { title: "Contact Us", description: "Ready to answer your inquiries and provide financial support." },
      form: {
        name: "Full Name",
        company: "Company Name (Optional)",
        email: "Email Address",
        phone: "Phone Number",
        service: "Service Needed",
        serviceOptions: ["Bookkeeping", "Auditing", "Budgeting", "VAT / Tax", "Other"],
        message: "Message Details",
        submit: "Submit Request",
        success: "Thank you! Redirecting you to WhatsApp to complete your request.",
      },
      info: {
        address: "Abu Dhabi, United Arab Emirates",
        phone: "Tel: " + CONTACT_INFO.phone,
        email: "Email: " + CONTACT_INFO.email,
      }
    },
    footer: {
      rights: "All Rights Reserved © 2024 Almanara Elite L.L.C",
      description: "Specialized in accounting, auditing, and financial consulting in the UAE."
    }
  },
};

export const iconMap: any = {
  Calculator,
  FileText,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Users
};