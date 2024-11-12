import { Overview } from "@/features/profile/types";
import { Status } from "@/types";
import { useMemo } from "react";

const useTaskCounts = (overviewTotalData?: Overview) => {
  const counts = useMemo(() => {
    const { totalSubtasks } = overviewTotalData ?? {};

    return {
      backlog: totalSubtasks?.backlog ?? 0,
      onHold: totalSubtasks?.onHold ?? 0,
      inProgress: totalSubtasks?.inProgress ?? 0,
      completed: totalSubtasks?.completed ?? 0,
    };
  }, [overviewTotalData]);

  return [
    { label: Status.Backlog, count: counts.backlog },
    { label: Status.OnHold, count: counts.onHold },
    { label: Status.InProgress, count: counts.inProgress },
    { label: Status.Completed, count: counts.completed },
  ];
};

export default useTaskCounts;
