import { StyledLineContainer } from "./Lines.styled";

const Lines = () => {
  const lines = Array.from({ length: 11 }, (_, i) => `line-${i + 1}`);

  const linesTop = [-20, -7, 5, 17, 30];
  const linesLeft = [50.5, 56, 61.5, 67, 72.5, 78];

  return (
    <StyledLineContainer linesTop={linesTop} linesLeft={linesLeft}>
      {lines.map((lineClass) => (
        <div key={lineClass} className={lineClass}></div>
      ))}
      <div className="center"></div>
    </StyledLineContainer>
  );
};

export default Lines;
