import { calendarData } from "@/data/calenderData";
import { notesData } from "@/data/notesData";

interface OverviewData {
  totalProjects: number;
  totalTasks: number;
  totalSubtasks: number;
}

interface projectOptions {
  name: string;
  project_id: string;
}

export const constructOverviewData = ({
  totalProjects,
  totalTasks,
  totalSubtasks,
}: OverviewData) => {
  return [
    {
      title: "Projects",
      value: totalProjects,
    },
    {
      title: "Tasks",
      value: totalTasks,
    },
    {
      title: "Subtasks",
      value: totalSubtasks,
    },
    {
      title: "Goals",
      value: notesData.length,
    },
    {
      title: "Events",
      value: calendarData.length,
    },
  ];
};
