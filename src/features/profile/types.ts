export type ModalType = "profile" | "password" | "subscription" | null;

export enum ThemeOptions {
  System = "system",
  Light = "light",
  Dark = "dark",
}

export enum LanguageOptions {
  System = "system",
  English = "English",
  Greek = "Greek",
}

export type UserType = {
  id: string;
  user_id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
};

export type TotalByStatus = {
  backlog?: number;
  completed?: number;
  onHold?: number;
  inProgress?: number;
  total: number;
};

export type Overview = {
  totalProjects: number;
  totalTasks: TotalByStatus;
  totalSubtasks: TotalByStatus;
};
