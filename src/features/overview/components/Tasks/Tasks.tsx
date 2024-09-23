import { backlogTasks, completedTasks, inProgressTasks, onHoldTasks } from "@/data/tasksData";
import Cards from "../Cards";
import { StyledTasksContainer } from "./Tasks.styled";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const Tasks = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const tasksToRender = useMemo(() => {
    switch (status) {
      case "backlog":
        return backlogTasks;
      case "on hold":
        return onHoldTasks;
      case "in progress":
        return inProgressTasks;
      case "completed":
        return completedTasks;
      default:
        return backlogTasks;
    }
  }, [status]);

  return (
    <StyledTasksContainer>
      <Cards data={tasksToRender} />
    </StyledTasksContainer>
  );
};

export default Tasks;
