"use client";

import type { PointerEvent, ReactNode } from "react";

type HeroLightRevealProps = {
  children: ReactNode;
};

export function HeroLightReveal({ children }: HeroLightRevealProps) {
  function updateSpotlight(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
    event.currentTarget.style.setProperty("--spotlight-opacity", "1");
  }

  function hideSpotlight(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  }

  return (
    <section
      className="marburg-hero"
      onPointerLeave={hideSpotlight}
      onPointerMove={updateSpotlight}
    >
      <div className="hero-image-layer hero-image-layer--lit" aria-hidden="true" />
      <div className="hero-image-layer hero-image-layer--dark" aria-hidden="true" />
      {children}
    </section>
  );
}
