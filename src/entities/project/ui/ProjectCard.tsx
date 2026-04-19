import Image from "next/image";

import { Badge } from "@/shared/ui/Badge";
import { Card } from "@/shared/ui/Card";
import { formatPercent, formatShortDate } from "@/shared/lib/format";
import type { Project, ProjectStatus } from "../model/types";

const statusTone: Record<ProjectStatus, "neutral" | "success" | "warning"> = {
  draft: "neutral",
  live: "success",
  review: "warning",
};

const statusLabel: Record<ProjectStatus, string> = {
  draft: "Draft",
  live: "Live",
  review: "In review",
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <div className="project-card__image">
        <Image
          alt={`${project.name} site preview`}
          fill
          sizes="(max-width: 760px) 100vw, 360px"
          src={project.imageSrc}
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <Badge tone={statusTone[project.status]}>{statusLabel[project.status]}</Badge>
          {project.priority === "high" ? <Badge tone="danger">High priority</Badge> : null}
        </div>
        <div>
          <h3>{project.name}</h3>
          <p>{project.client} / {project.location}</p>
        </div>
        <dl className="project-card__stats">
          <div>
            <dt>Readiness</dt>
            <dd>{formatPercent(project.score)}</dd>
          </div>
          <div>
            <dt>Assets</dt>
            <dd>{project.assetCount}</dd>
          </div>
          <div>
            <dt>Due</dt>
            <dd>{formatShortDate(project.dueDate)}</dd>
          </div>
        </dl>
        <footer>
          <span>{project.owner.name}</span>
          <span>{project.owner.role}</span>
        </footer>
      </div>
    </Card>
  );
}
