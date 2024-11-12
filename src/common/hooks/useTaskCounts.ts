import { Overview } from "@/features/profile/types";
import { Status } from "@/types";
import { useMemo } from "react";

const useTaskCounts = (overviewTotalData?: Overview) => {
  return useMemo(() => {
    const { totalSubtasks } = overviewTotalData ?? {};

    return [
      { label: Status.Backlog, count: totalSubtasks?.backlog ?? 0 },
      { label: Status.OnHold, count: totalSubtasks?.onHold ?? 0 },
      { label: Status.InProgress, count: totalSubtasks?.inProgress ?? 0 },
      { label: Status.Completed, count: totalSubtasks?.completed ?? 0 },
    ];
  }, [overviewTotalData]);
};

export default useTaskCounts;
