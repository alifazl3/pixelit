export type ProjectStatus = "draft" | "review" | "live";

export type ProjectPriority = "normal" | "high";

export type Project = {
  id: string;
  name: string;
  client: string;
  location: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  score: number;
  dueDate: string;
  imageSrc: string;
  assetCount: number;
  owner: {
    name: string;
    role: string;
  };
};
