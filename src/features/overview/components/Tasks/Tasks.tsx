import { useGetAllSubtasksQuery } from "@/app/services/projectManagerApi";
import { Status } from "@/types";
import { useSearchParams } from "react-router-dom";
import { StyledTasksContainer } from "./Tasks.styled";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Overview } from "@/features/profile/types";

const Tasks = ({ overviewTotalData }: { overviewTotalData: Overview }) => {
  const [searchParams] = useSearchParams();

  const selectedTaskStatus = searchParams.get("status") ?? Status.Backlog;

  const { data: tasks, isLoading } = useGetAllSubtasksQuery({
    status: selectedTaskStatus as Status,
  });

  return (
    <StyledTasksContainer>
      <Navbar overviewTotalData={overviewTotalData} />
      <div className="cards-container">
        <Card tasks={tasks} isLoading={isLoading} />
      </div>
    </StyledTasksContainer>
  );
};

export default Tasks;
