import { timePassSince } from "@/utils/dates";
import { backlogTasks, completedTasks, inProgressTasks, onHoldTasks } from "./tasksData";
import { projectData } from "./projectData";
import { notesData } from "./notesData";
import { calendarData } from "./calenderData";

export const overviewData = [
  {
    title: "Tasks",
    value:
      backlogTasks.length + onHoldTasks.length + inProgressTasks.length + completedTasks.length,
  },
  {
    title: "Projects",
    value: projectData.length,
  },
  {
    title: "Goals",
    value: notesData.length,
  },
  {
    title: "Events",
    value: calendarData.length,
  },
  {
    title: "Last login",
    value: timePassSince(new Date("2024-09-22T12:00:00")),
  },
];
