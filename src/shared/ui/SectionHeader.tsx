import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
};

export function SectionHeader({ action, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {action ? <div className="section-header__action">{action}</div> : null}
    </div>
  );
}
