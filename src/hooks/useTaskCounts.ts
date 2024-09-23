import { backlogTasks, completedTasks, inProgressTasks, onHoldTasks } from "@/data/tasksData";
import { useMemo } from "react";

const useTaskCounts = () => {
  const counts = useMemo(() => {
    return {
      backlog: backlogTasks.length,
      onHold: onHoldTasks.length,
      inProgress: inProgressTasks.length,
      completed: completedTasks.length,
    };
  }, []);

  const navbarData = [
    { label: "backlog", count: counts.backlog },
    { label: "on hold", count: counts.onHold },
    { label: "in progress", count: counts.inProgress },
    { label: "completed", count: counts.completed },
  ];

  return navbarData;
};

export default useTaskCounts;
