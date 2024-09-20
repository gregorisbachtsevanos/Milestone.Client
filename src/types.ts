import { ReactNode } from "react";

export type Nullable<T> = { [K in keyof T]?: T[K] | null };

export type ErrorResponse = {
  title: string;
  code: number;
  domain: string;
  message: string;
};

export type HookFormError = {
  message: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  pages: number;
};

export type PaginatedRequest = {
  offset: number;
  limit: number;
};

export type Link = {
  title: string;
  icon: ReactNode;
  to: string;
};

export enum Status {
  Backlog = "backlog",
  InProgress = "in progress",
  OnHold = "on hold",
  Completed = "completed",
}

export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export type User = {
  name: String;
  email: String;
};

type PriorityType = Priority;

type StatusType = Status;

export type ProjectType = {
  id: string;
  project_id: string;
  name: string;
  description?: string;
  tasks: number;
  comments: number;
  created_at: string;
  updated_at: string;
  deadline: string;
  // roadmaps: RoadmapType[];
  tags?: string[];
};

export type RoadmapType = {
  id: string;
  project: ProjectType;
  title: string;
  description?: string;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
};

export type TaskType = {
  id: string;
  task_id: string;
  project_id: string;
  title: string;
  description: string;
  status: StatusType;
  priority: PriorityType;
  created_at: string;
  updated_at: string;
  subtasks: number;
  comments: number;
  tags?: string[];
};

export type SubtaskType = {
  id: string;
  subtask_id: string;
  task_id: string;
  project_id: string;
  title: string;
  description?: string;
  status: StatusType;
  priority: PriorityType;
  created_at: string;
  updated_at: string;
  comments: number;
  tags?: string[];
};

export type VariantType =
  | "success"
  | "warning"
  | "danger"
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "light"
  | "dark";

export type NotesType = {
  title: string;
  content: string;
  created_at?: string;
  datetime?: string;
  tags?: string[];
};
