import { calendarData } from "@/data/calenderData";
import { notesData } from "@/data/notesData";

type OverviewData = {
  totalProjects: number;
  totalTasks: number;
  totalSubtasks: number;
};

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

export const constructProjectOptions = (projects) => {
  return projects?.map((project) => ({
    label: project.name,
    value: project.project_id,
  }));
};
