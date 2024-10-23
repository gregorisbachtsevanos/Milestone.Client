import { PriorityOptions, StatusOptions } from "./types";

export const statusOptions = [
  { value: "backlog", label: StatusOptions.Backlog },
  { value: "in progress", label: StatusOptions.InProgress },
  { value: "on hold", label: StatusOptions.OnHold },
  { value: "completed", label: StatusOptions.Completed },
];

export const priorityOptions = [
  { value: "low", label: PriorityOptions.Low },
  { value: "medium", label: PriorityOptions.Medium },
  { value: "high", label: PriorityOptions.High },
];
