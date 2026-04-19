import { mockActivityService } from "@/entities/activity/api/mockActivityService";
import { mockProjectService } from "@/entities/project/api/mockProjectService";
import { formatNumber, formatPercent } from "@/shared/lib/format";
import type { SiteOverview } from "../model/types";

export async function getSiteOverview(): Promise<SiteOverview> {
  const [projectResponse, activityResponse] = await Promise.all([
    mockProjectService.list(),
    mockActivityService.list(),
  ]);

  const projects = projectResponse.data;
  const liveCount = projects.filter((project) => project.status === "live").length;
  const reviewCount = projects.filter((project) => project.status === "review").length;
  const averageScore =
    projects.reduce((total, project) => total + project.score, 0) / projects.length;
  const assetCount = projects.reduce((total, project) => total + project.assetCount, 0);

  return {
    projects,
    activities: activityResponse.data,
    meta: projectResponse.meta,
    metrics: [
      {
        label: "Active sites",
        value: formatNumber(projects.length),
        detail: `${reviewCount} awaiting review`,
      },
      {
        label: "Live launches",
        value: formatNumber(liveCount),
        detail: "Published demonstration data",
      },
      {
        label: "Readiness",
        value: formatPercent(averageScore),
        detail: "Average across all mock projects",
      },
      {
        label: "Assets tracked",
        value: formatNumber(assetCount),
        detail: "Images, copy blocks, and approvals",
      },
    ],
  };
}
