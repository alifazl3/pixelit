import type { Activity } from "@/entities/activity/model/types";
import type { Project } from "@/entities/project/model/types";
import type { ApiMeta } from "@/shared/types/api";

export type OverviewMetric = {
  label: string;
  value: string;
  detail: string;
};

export type SiteOverview = {
  metrics: OverviewMetric[];
  projects: Project[];
  activities: Activity[];
  meta: ApiMeta;
};
