import { HeroLightReveal } from "@/features/marburg-landing/ui/HeroLightReveal";
import { SunriseStatement } from "@/features/marburg-landing/ui/SunriseStatement";

const services = [
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
    description: "Automatisierung für Buchungen, Leads, Erinnerungen und CRM-Übergaben.",
    icon: "gear",
  },
  {
    title: "Wachstumsmarketing",
    description: "Lokales SEO, Content-Rhythmus und Kampagnen mit KPI-Reporting.",
    icon: "chart",
  },
];

const packages = [
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
];

function ServiceIcon({ type }: { type: string }) {
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

export default function Home() {
  return (
    <main>
      <HeroLightReveal>
        <header className="site-nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Marburg Digital Service">
            <span>MDS</span>
            <strong>Marburg Digital Service</strong>
          </a>
          <nav>
            <a href="#services">Leistungen</a>
            <a href="#packages">Pakete</a>
            <a href="#modules">Module</a>
            <a href="#sla">SLA</a>
            <a href="#onboarding">Onboarding</a>
          </nav>
          <div className="language-switch" aria-label="Language selection">
            <button type="button" aria-pressed="true">DE</button>
            <button type="button">EN</button>
            <button type="button">FA</button>
          </div>
        </header>

        <div className="hero-copy" id="top">
          <p>Licht an für deine</p>
          <h1>MARKE</h1>
          <h2>Marketing, das gesehen wird.</h2>
        </div>

        <div className="hero-action-row">
          <p>
            Websites, Business-E-Mail, lokales Marketing und digitale Abläufe
            für KMU mit klarer Setup- und Monatsstruktur.
          </p>
          <div>
            <a href="#packages">Pakete ansehen</a>
            <a href="#onboarding">Onboarding starten</a>
          </div>
        </div>
      </HeroLightReveal>

      <section className="services-section" id="services">
        <div className="section-copy">
          <h2>Kernleistungen</h2>
          <p>Eine vollständige digitale Ausführungsebene für lokale Unternehmen.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-tile" key={service.title}>
              <h3>{service.title}</h3>
              <ServiceIcon type={service.icon} />
              <p>{service.description}</p>
              <a href="#packages">Read More...</a>
            </article>
          ))}
        </div>
      </section>

      <SunriseStatement />

      <section className="catalog-section" id="packages">
        <div className="catalog-heading">
          <h2>Service Catalog</h2>
          <p>Setup fee + monthly subscription with clear deliverables.</p>
        </div>

        <div className="package-grid">
          {packages.map((item) => (
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
        <p>Marburg Digital Service</p>
        <a href="mailto:hello@marburg.digital">hello@marburg.digital</a>
      </footer>
    </main>
  );
}
