import { StyledLineContainer } from "./Lines.styled";

const Lines = () => {
  const lines = Array.from({ length: 11 }, (_, i) => `line-${i + 1}`);

  return (
    <StyledLineContainer>
      {lines.map((lineClass) => (
        <div key={lineClass} className={lineClass}></div>
      ))}
      <div className="center"></div>
    </StyledLineContainer>
  );
};

export default Lines;
