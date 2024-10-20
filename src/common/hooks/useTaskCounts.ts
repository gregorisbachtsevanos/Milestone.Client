import { backlogTasks, completedTasks, inProgressTasks, onHoldTasks } from "@/data/tasksData";
import { Status } from "@/types";
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

  return [
    { label: Status.Backlog, count: counts.backlog },
    { label: Status.OnHold, count: counts.onHold },
    { label: Status.InProgress, count: counts.inProgress },
    { label: Status.Completed, count: counts.completed },
  ];
};

export default useTaskCounts;
