import { Text, TitleXl } from "@/.config/theme";
import { StyledSummaryContainer } from "./Summary.styled";
import { constructOverviewData } from "../../utils/helpers";
import { FC } from "react";

interface SummaryProps {
  totalProjects: number;
  totalTasks: number;
  totalSubtasks: number;
}

const Summary: FC<SummaryProps> = ({ totalProjects, totalTasks, totalSubtasks }) => {
  const overviewData = constructOverviewData({ totalProjects, totalTasks, totalSubtasks });

  return (
    <StyledSummaryContainer>
      {overviewData.map(({ title, value }, index) => (
        <div className="card-container" key={index}>
          <div className="card">
            <Text>{title}</Text>
            <TitleXl>{value}</TitleXl>
          </div>
          <span className="divisive"></span>
        </div>
      ))}
    </StyledSummaryContainer>
  );
};

export default Summary;
