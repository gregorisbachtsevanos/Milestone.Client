export enum PriorityOptions {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export enum StatusOptions {
  Backlog = "backlog",
  InProgress = "in progress",
  OnHold = "on hold",
  Completed = "completed",
}

export type ModalType = "project" | "task" | "subtask" | null;
