import { Text, TitleXl } from "@/theme";
import { StyledSummaryContainer } from "./Summary.styled";
import { overviewData } from "@/data/overviewData";

const Summary = () => {
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
