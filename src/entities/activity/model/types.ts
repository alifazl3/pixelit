export type ActivityKind = "comment" | "approval" | "upload" | "publish";

export type Activity = {
  id: string;
  kind: ActivityKind;
  title: string;
  projectName: string;
  actor: string;
  happenedAt: string;
};
