"use client";

import { useEffect, useState } from "react";

import { HeroLightReveal } from "./HeroLightReveal";
import { SunriseStatement } from "./SunriseStatement";

type Locale = "de" | "en" | "fa";

type ServiceIconName = "globe" | "mail" | "gear" | "chart";

type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
};

type PackageItem = {
  name: string;
  price: string;
  items: string[];
};

const content: Record<
  Locale,
  {
    nav: string[];
    brand: string;
    heroLead: string;
    heroTitle: string;
    heroTagline: string;
    heroDescription: string;
    primaryCta: string;
    secondaryCta: string;
    servicesTitle: string;
    servicesSubtitle: string;
    readMore: string;
    catalogTitle: string;
    catalogSubtitle: string;
    footerEmail: string;
    services: Service[];
    packages: PackageItem[];
  }
> = {
  de: {
    nav: ["Leistungen", "Pakete", "Module", "SLA", "Onboarding"],
    brand: "Marburg Digital Service",
    heroLead: "Licht an für deine",
    heroTitle: "MARKE",
    heroTagline: "Marketing, das gesehen wird.",
    heroDescription:
      "Websites, Business-E-Mail, lokales Marketing und digitale Abläufe für KMU mit klarer Setup- und Monatsstruktur.",
    primaryCta: "Pakete ansehen",
    secondaryCta: "Onboarding starten",
    servicesTitle: "Kernleistungen",
    servicesSubtitle:
      "Eine vollständige digitale Ausführungsebene für lokale Unternehmen.",
    readMore: "Read More...",
    catalogTitle: "Service Catalog",
    catalogSubtitle: "Setup fee + monthly subscription with clear deliverables.",
    footerEmail: "hello@marburg.digital",
    services: [
      {
        title: "Web-Präsenz",
        description:
          "Schnelle, conversion-orientierte Websites für lokale Kundennachfrage.",
        icon: "globe",
      },
      {
        title: "Business-E-Mail",
        description: "Zustellungsstarke Einrichtung mit SPF, DKIM und DMARC.",
        icon: "mail",
      },
      {
        title: "Digitale Abläufe",
        description:
          "Automatisierung für Buchungen, Leads, Erinnerungen und CRM-Übergaben.",
        icon: "gear",
      },
      {
        title: "Wachstumsmarketing",
        description: "Lokales SEO, Content-Rhythmus und Kampagnen mit KPI-Reporting.",
        icon: "chart",
      },
    ],
    packages: [
      {
        name: "Launch Presence",
        price: "€1,500 setup\n€249/month",
        items: [
          "5-page business website",
          "Business email setup",
          "Google Business Profile setup",
          "Basic analytics dashboard",
        ],
      },
      {
        name: "Growth Ops",
        price: "€2,500 setup\n€499/month",
        items: [
          "Local SEO implementation",
          "Lead automation workflows",
          "Email campaign operations",
          "KPI dashboard + monthly review",
        ],
      },
      {
        name: "Cafe Loyalty & Menu",
        price: "€1,800 setup\n€349/month",
        items: [
          "QR menu system",
          "Loyalty points program",
          "Win-back campaign flows",
          "Offer and promotion dashboard",
        ],
      },
      {
        name: "Medical Booking",
        price: "€2,000 setup\n€399/month",
        items: [
          "Doctor profile website",
          "Appointment scheduling",
          "Reminder automation",
          "GDPR-safe intake forms",
        ],
      },
    ],
  },
  en: {
    nav: ["Services", "Packages", "Modules", "SLA", "Onboarding"],
    brand: "Marburg Digital Service",
    heroLead: "Lights on for your",
    heroTitle: "BRAND",
    heroTagline: "Marketing that gets seen.",
    heroDescription:
      "Websites, business email, local marketing, and digital workflows for small businesses with clear setup and monthly plans.",
    primaryCta: "View packages",
    secondaryCta: "Start onboarding",
    servicesTitle: "Core Services",
    servicesSubtitle: "A complete digital execution layer for local businesses.",
    readMore: "Read More...",
    catalogTitle: "Service Catalog",
    catalogSubtitle: "Setup fee + monthly subscription with clear deliverables.",
    footerEmail: "hello@marburg.digital",
    services: [
      {
        title: "Web Presence",
        description: "Fast, conversion-focused websites for local demand.",
        icon: "globe",
      },
      {
        title: "Business Email",
        description: "Reliable inbox setup with SPF, DKIM, and DMARC.",
        icon: "mail",
      },
      {
        title: "Digital Workflows",
        description: "Automation for bookings, leads, reminders, and CRM handoffs.",
        icon: "gear",
      },
      {
        title: "Growth Marketing",
        description: "Local SEO, content cadence, campaigns, and KPI reporting.",
        icon: "chart",
      },
    ],
    packages: [
      {
        name: "Launch Presence",
        price: "€1,500 setup\n€249/month",
        items: [
          "5-page business website",
          "Business email setup",
          "Google Business Profile setup",
          "Basic analytics dashboard",
        ],
      },
      {
        name: "Growth Ops",
        price: "€2,500 setup\n€499/month",
        items: [
          "Local SEO implementation",
          "Lead automation workflows",
          "Email campaign operations",
          "KPI dashboard + monthly review",
        ],
      },
      {
        name: "Cafe Loyalty & Menu",
        price: "€1,800 setup\n€349/month",
        items: [
          "QR menu system",
          "Loyalty points program",
          "Win-back campaign flows",
          "Offer and promotion dashboard",
        ],
      },
      {
        name: "Medical Booking",
        price: "€2,000 setup\n€399/month",
        items: [
          "Doctor profile website",
          "Appointment scheduling",
          "Reminder automation",
          "GDPR-safe intake forms",
        ],
      },
    ],
  },
  fa: {
    nav: ["خدمات", "پکیج‌ها", "ماژول‌ها", "SLA", "شروع همکاری"],
    brand: "Marburg Digital Service",
    heroLead: "چراغ‌ها روشن برای",
    heroTitle: "برند",
    heroTagline: "مارکتینگی که دیده می‌شود.",
    heroDescription:
      "وب‌سایت، ایمیل تجاری، مارکتینگ محلی و جریان‌های دیجیتال برای کسب‌وکارهای کوچک، با ساختار شفاف راه‌اندازی و ماهانه.",
    primaryCta: "مشاهده پکیج‌ها",
    secondaryCta: "شروع همکاری",
    servicesTitle: "خدمات اصلی",
    servicesSubtitle: "یک لایه اجرای دیجیتال کامل برای کسب‌وکارهای محلی.",
    readMore: "بیشتر بخوانید...",
    catalogTitle: "کاتالوگ خدمات",
    catalogSubtitle: "هزینه راه‌اندازی + اشتراک ماهانه با خروجی‌های مشخص.",
    footerEmail: "hello@marburg.digital",
    services: [
      {
        title: "حضور وب",
        description: "وب‌سایت‌های سریع و تبدیل‌محور برای جذب تقاضای محلی.",
        icon: "globe",
      },
      {
        title: "ایمیل تجاری",
        description: "راه‌اندازی ایمیل قابل اعتماد با SPF، DKIM و DMARC.",
        icon: "mail",
      },
      {
        title: "فرآیندهای دیجیتال",
        description: "اتوماسیون رزرو، لید، یادآوری و انتقال به CRM.",
        icon: "gear",
      },
      {
        title: "مارکتینگ رشد",
        description: "سئوی محلی، ریتم محتوا، کمپین و گزارش KPI.",
        icon: "chart",
      },
    ],
    packages: [
      {
        name: "حضور اولیه",
        price: "€1,500 راه‌اندازی\n€249/ماه",
        items: [
          "وب‌سایت ۵ صفحه‌ای",
          "راه‌اندازی ایمیل تجاری",
          "راه‌اندازی Google Business Profile",
          "داشبورد پایه تحلیل",
        ],
      },
      {
        name: "عملیات رشد",
        price: "€2,500 راه‌اندازی\n€499/ماه",
        items: [
          "اجرای سئوی محلی",
          "اتوماسیون جذب لید",
          "اجرای کمپین ایمیلی",
          "داشبورد KPI + مرور ماهانه",
        ],
      },
      {
        name: "کافه، منو و وفاداری",
        price: "€1,800 راه‌اندازی\n€349/ماه",
        items: [
          "سیستم منوی QR",
          "برنامه امتیاز وفاداری",
          "کمپین بازگشت مشتری",
          "داشبورد پیشنهاد و پروموشن",
        ],
      },
      {
        name: "رزرو پزشکی",
        price: "€2,000 راه‌اندازی\n€399/ماه",
        items: [
          "وب‌سایت پروفایل پزشک",
          "زمان‌بندی نوبت",
          "اتوماسیون یادآوری",
          "فرم‌های امن پذیرش",
        ],
      },
    ],
  },
};

const navTargets = ["#services", "#packages", "#modules", "#sla", "#onboarding"];

function ServiceIcon({ type }: { type: ServiceIconName }) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="9" y="18" width="46" height="30" rx="3" />
        <path d="m12 21 20 17 20-17" />
      </svg>
    );
  }

  if (type === "gear") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="29" cy="32" r="12" />
        <path d="M29 8v9M29 47v9M9 32h8M41 32h14M14 17l6 6M14 47l6-6M44 18l-7 7M43 46l-6-7M48 20h7M48 32h7M48 44h7" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M11 50h42" />
        <path d="M15 46V34h8v12M29 46V27h8v19M43 46V18h8v28" />
        <path d="M11 29c13-1 25-7 39-19" />
        <path d="m44 10 8-2-2 8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="20" />
      <path d="M12 32h40M32 12c7 8 10 15 10 20S39 44 32 52M32 12c-7 8-10 15-10 20s3 12 10 20" />
    </svg>
  );
}

export function MarburgLanding() {
  const [locale, setLocale] = useState<Locale>("de");
  const [hasScrolled, setHasScrolled] = useState(false);
  const copy = content[locale];

  useEffect(() => {
    function updateNavState() {
      setHasScrolled(window.scrollY > 16);
    }

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });

    return () => window.removeEventListener("scroll", updateNavState);
  }, []);

  return (
    <main className={`landing-shell landing-shell--${locale}`} dir={locale === "fa" ? "rtl" : "ltr"}>
      <header
        className={`site-nav ${hasScrolled ? "site-nav--scrolled" : ""}`}
        aria-label="Primary navigation"
      >
        <a className="brand" href="#top" aria-label={copy.brand}>
          <span>MDS</span>
          <strong>{copy.brand}</strong>
        </a>
        <nav>
          {copy.nav.map((item, index) => (
            <a href={navTargets[index]} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="language-switch" aria-label="Language selection">
          {(["de", "en", "fa"] as const).map((item) => (
            <button
              aria-pressed={locale === item}
              key={item}
              onClick={() => setLocale(item)}
              type="button"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <HeroLightReveal>
        <div className="hero-copy" id="top">
          <p>{copy.heroLead}</p>
          <h1>{copy.heroTitle}</h1>
          <h2>{copy.heroTagline}</h2>
        </div>

        <div className="hero-action-row">
          <p>{copy.heroDescription}</p>
          <div>
            <a href="#packages">{copy.primaryCta}</a>
            <a href="#onboarding">{copy.secondaryCta}</a>
          </div>
        </div>
      </HeroLightReveal>

      <section className="services-section" id="services">
        <div className="section-copy">
          <h2>{copy.servicesTitle}</h2>
          <p>{copy.servicesSubtitle}</p>
        </div>
        <div className="service-grid">
          {copy.services.map((service) => (
            <article className="service-tile" key={service.title}>
              <h3>{service.title}</h3>
              <div className="service-icon-orbit">
                <ServiceIcon type={service.icon} />
              </div>
              <p>{service.description}</p>
              <a href="#packages">{copy.readMore}</a>
            </article>
          ))}
        </div>
      </section>

      <SunriseStatement locale={locale} />

      <section className="catalog-section" id="packages">
        <div className="catalog-heading">
          <h2>{copy.catalogTitle}</h2>
          <p>{copy.catalogSubtitle}</p>
        </div>

        <div className="package-grid">
          {copy.packages.map((item) => (
            <article className="package" key={item.name}>
              <h3>{item.name}</h3>
              <strong>
                {item.price.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </strong>
              <ul>
                {item.items.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="page-footer" id="onboarding">
        <p>{copy.brand}</p>
        <a href={`mailto:${copy.footerEmail}`}>{copy.footerEmail}</a>
      </footer>
    </main>
  );
}
