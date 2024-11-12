import { timePassSince } from "@/common/utils/dates";
import { calendarData } from "@/data/calenderData";
import { notesData } from "@/data/notesData";

type OverviewData = {
  totalProjects: number;
  totalTasks: number;
};

export const constructOverviewData = ({ totalProjects, totalTasks }: OverviewData) => {
  return [
    {
      title: "Tasks",
      value: totalTasks,
    },
    {
      title: "Projects",
      value: totalProjects,
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
      title: "Last Activity",
      value: timePassSince(new Date("2024-09-22T12:00:00")),
    },
  ];
};
