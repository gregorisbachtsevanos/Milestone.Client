import { useGetAllTasksQuery } from "@/app/services/projectManegerApi";
import { Status } from "@/types";
import { useSearchParams } from "react-router-dom";
import { StyledTasksContainer } from "./Tasks.styled";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const Tasks = () => {
  const [searchParams] = useSearchParams();

  const selectedTaskStatus = searchParams.get("status") ?? Status.Backlog;

  const { data: tasks, isLoading } = useGetAllTasksQuery({ status: selectedTaskStatus as Status });

  return (
    <StyledTasksContainer>
      <Navbar />
      <div className="cards-container">
        <Card tasks={tasks} isLoading={isLoading} />
      </div>
    </StyledTasksContainer>
  );
};

export default Tasks;
