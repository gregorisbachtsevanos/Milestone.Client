import { Overview } from "@/features/profile/types";
import { Status } from "@/types";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum CalculateStatus {
  backlog = "backlog",
  onHold = "onHold",
  inProgress = "inProgress",
  completed = "completed",
}

const useTaskCounts = (overviewTotalData?: Overview) => {
  const counts = useMemo(() => {
    const totalTasks = overviewTotalData?.totalTasks || {};
    const totalSubtasks = overviewTotalData?.totalSubtasks || {};
    const calculateCount = (status: keyof typeof CalculateStatus): number =>
      (totalTasks[status] || 0) + (totalSubtasks[status] || 0);

    return {
      backlog: calculateCount("backlog"),
      onHold: calculateCount("onHold"),
      inProgress: calculateCount("inProgress"),
      completed: calculateCount("completed"),
    };
  }, [overviewTotalData?.totalSubtasks, overviewTotalData?.totalTasks]);

  return [
    { label: Status.Backlog, count: counts.backlog },
    { label: Status.OnHold, count: counts.onHold },
    { label: Status.InProgress, count: counts.inProgress },
    { label: Status.Completed, count: counts.completed },
  ];
};

export default useTaskCounts;
