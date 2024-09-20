import { Text, TitleXl } from "@/theme";
import { StyledOverviewContainer } from "./Overview.styled";
import { overview } from "@/data/overviewData";

const Overview = () => {
  return (
    <StyledOverviewContainer>
      {overview.map(({ title, value }, index) => (
        <div className="card-container" key={index}>
          <div className="card">
            <Text>{title}</Text>
            <TitleXl>{value}</TitleXl>
          </div>
          <span className="divisive"></span>
        </div>
      ))}
    </StyledOverviewContainer>
  );
};

export default Overview;
