"use client";

import { useEffect, useRef } from "react";

type Locale = "de" | "en" | "fa";

const statementCopy: Record<Locale, string> = {
  de: "Nach oben kommt man nicht zufällig.",
  en: "You do not climb by accident.",
  fa: "بالا رفتن اتفاقی نیست.",
};

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

export function SunriseStatement({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    function updateProgress() {
      if (!section) {
        return;
      }

      const start = section.offsetTop;
      const end = start + section.offsetHeight - window.innerHeight;
      const progress = clamp((window.scrollY - start) / Math.max(end - start, 1));
      const sunrise = clamp(progress / 0.55);
      const statement = clamp((progress - 0.55) / 0.28);

      section.style.setProperty("--sunrise-progress", sunrise.toString());
      section.style.setProperty("--statement-progress", statement.toString());
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="sunrise-scroll" id="modules" ref={sectionRef}>
      <div className="sunrise-scene">
        <div className="sunrise-layer sunrise-layer--day" aria-hidden="true" />
        <div className="sunrise-layer sunrise-layer--night" aria-hidden="true" />
        <div className="sunrise-layer sunrise-layer--glow" aria-hidden="true" />
        <div className="sunrise-statement">
          <h2>{statementCopy[locale]}</h2>
        </div>
      </div>
    </section>
  );
}
