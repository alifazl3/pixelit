import type { ApiResponse } from "@/shared/types/api";
import type { Project } from "../model/types";
import type { ProjectService } from "./projectService";

const mockProjects: Project[] = [
  {
    id: "site-atlas",
    name: "Atlas Retail Launch",
    client: "Atlas Studio",
    location: "Austin, TX",
    status: "review",
    priority: "high",
    score: 0.92,
    dueDate: "2026-04-24T09:00:00.000Z",
    imageSrc: "/mock-sites/atlas.svg",
    assetCount: 42,
    owner: {
      name: "Mina Parker",
      role: "Visual lead",
    },
  },
  {
    id: "site-orbit",
    name: "Orbit Hotel Refresh",
    client: "Orbit Hotels",
    location: "Lisbon, PT",
    status: "draft",
    priority: "normal",
    score: 0.74,
    dueDate: "2026-04-28T14:30:00.000Z",
    imageSrc: "/mock-sites/orbit.svg",
    assetCount: 28,
    owner: {
      name: "Theo Chan",
      role: "Content designer",
    },
  },
  {
    id: "site-kanso",
    name: "Kanso Product Story",
    client: "Kanso Supply",
    location: "Tokyo, JP",
    status: "live",
    priority: "normal",
    score: 0.98,
    dueDate: "2026-04-21T08:15:00.000Z",
    imageSrc: "/mock-sites/kanso.svg",
    assetCount: 57,
    owner: {
      name: "Samira Holt",
      role: "Producer",
    },
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

export const mockProjectService: ProjectService = {
  async list() {
    return createMockResponse(mockProjects);
  },
};
