import { useGetAllTasksQuery } from "@/app/services/projectManegerApi";
import { Status } from "@/types";
import { useSearchParams } from "react-router-dom";
import Cards from "../Cards";
import { StyledTasksContainer } from "./Tasks.styled";

const Tasks = () => {
  const [searchParams] = useSearchParams();

  const selectedTaskStatus = searchParams.get("status") ?? Status.Backlog;

  const { data: tasks, isLoading } = useGetAllTasksQuery({ status: selectedTaskStatus as Status });

  if (isLoading) return "loading";

  return (
    <StyledTasksContainer>
      <Cards data={tasks ?? []} />
    </StyledTasksContainer>
  );
};

export default Tasks;
