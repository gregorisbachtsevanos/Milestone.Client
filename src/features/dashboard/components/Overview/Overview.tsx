import { Text, TitleXl } from "@/theme";
import { StyledOverviewContainer } from "./Overview.styled";
import { data } from "./data";

const Overview = () => {
  return (
    <StyledOverviewContainer>
      {data.map(({ title, value }) => (
        <>
          <div className="card">
            <Text>{title}</Text>
            <TitleXl>{value}</TitleXl>
          </div>
          <span className="divisive"></span>
        </>
      ))}
    </StyledOverviewContainer>
  );
};

export default Overview;
