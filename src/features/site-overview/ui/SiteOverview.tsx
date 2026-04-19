import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { appConfig } from "@/core/config/app";
import { Button } from "@/shared/ui/Button";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import type { SiteOverview as SiteOverviewModel } from "../model/types";

type SiteOverviewProps = {
  overview: SiteOverviewModel;
};

export function SiteOverview({ overview }: SiteOverviewProps) {
  return (
    <main className="app-shell">
      <section className="hero-band">
        <div className="hero-band__content">
          <p className="eyebrow">Launch command</p>
          <h1>{appConfig.name} launch workspace</h1>
          <p>
            Coordinate site visuals, approvals, and launch readiness from a
            calm operating desk built for active creative teams.
          </p>
          <div className="hero-band__actions">
            <Button>Review queue</Button>
            <Button variant="secondary">Create site brief</Button>
          </div>
        </div>
        <div className="hero-band__panel" aria-label="Launch health summary">
          <span>Launch health</span>
          <strong>{overview.metrics[2]?.value}</strong>
          <p>{overview.metrics[2]?.detail}</p>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Site overview metrics">
        {overview.metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <div className="content-grid__main">
          <SectionHeader eyebrow="Project pipeline" title="Visual launches" />
          <div className="project-grid">
            {overview.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <aside className="activity-panel" aria-label="Recent activity">
          <SectionHeader eyebrow="Activity" title="Latest updates" />
          <ol className="activity-list">
            {overview.activities.map((activity) => (
              <li key={activity.id}>
                <span className={`activity-list__dot activity-list__dot--${activity.kind}`} />
                <div>
                  <strong>{activity.title}</strong>
                  <p>
                    {activity.projectName} by {activity.actor}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mock-note">
            Last synced at{" "}
            {new Date(overview.meta.requestedAt).toLocaleTimeString("en", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            .
          </p>
        </aside>
      </section>
    </main>
  );
}
