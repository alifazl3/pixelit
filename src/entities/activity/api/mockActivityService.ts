import type { ApiResponse } from "@/shared/types/api";
import type { Activity } from "../model/types";
import type { ActivityService } from "./activityService";

const mockActivities: Activity[] = [
  {
    id: "activity-1",
    kind: "approval",
    title: "Homepage art direction approved",
    projectName: "Atlas Retail Launch",
    actor: "Mina Parker",
    happenedAt: "2026-04-19T18:30:00.000Z",
  },
  {
    id: "activity-2",
    kind: "upload",
    title: "Twelve product shots added",
    projectName: "Kanso Product Story",
    actor: "Samira Holt",
    happenedAt: "2026-04-19T15:10:00.000Z",
  },
  {
    id: "activity-3",
    kind: "comment",
    title: "Hero copy needs shorter mobile line breaks",
    projectName: "Orbit Hotel Refresh",
    actor: "Theo Chan",
    happenedAt: "2026-04-19T10:45:00.000Z",
  },
  {
    id: "activity-4",
    kind: "publish",
    title: "Campaign preview shared with client",
    projectName: "Atlas Retail Launch",
    actor: "Mina Parker",
    happenedAt: "2026-04-18T21:20:00.000Z",
  },
];

function createMockResponse<TData>(data: TData): ApiResponse<TData> {
  return {
    data,
    meta: {
      source: "mock",
      requestedAt: new Date().toISOString(),
    },
  };
}

export const mockActivityService: ActivityService = {
  async list() {
    return createMockResponse(mockActivities);
  },
};
