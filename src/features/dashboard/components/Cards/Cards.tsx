import SingleCard from "@/components/SingleCard";
import { TaskType } from "@/types";
import { StyledCardsContainer } from "./Cards.styled";

const Cards = ({ tasks }: { tasks: TaskType[] }) => {
  console.log(tasks);
  return (
    <StyledCardsContainer>
      {tasks.map(({ title, description, priority, tags }) => (
        <SingleCard
          title={title}
          description={description}
          deadline={"2025-08-02 00:00:00"}
          priority={priority}
          tags={tags}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default Cards;
