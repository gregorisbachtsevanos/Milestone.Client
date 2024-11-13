import { useGetAllSubtasksQuery } from "@/app/services/projectManagerApi";
import { Status } from "@/types";
import { useSearchParams } from "react-router-dom";
import { StyledSubtasksContainer } from "./Subtasks.styled";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Overview } from "@/features/profile/types";

const Subtasks = ({ overviewTotalData }: { overviewTotalData?: Overview }) => {
  const [searchParams] = useSearchParams();

  const selectedTaskStatus = searchParams.get("status") ?? Status.Backlog;

  const { data: subtasks, isLoading } = useGetAllSubtasksQuery({
    status: selectedTaskStatus as Status,
  });

  return (
    <StyledSubtasksContainer>
      <Navbar overviewTotalData={overviewTotalData} />
      <div className="cards-container">
        <Card subtasks={subtasks} isLoading={isLoading} />
      </div>
    </StyledSubtasksContainer>
  );
};

export default Subtasks;
