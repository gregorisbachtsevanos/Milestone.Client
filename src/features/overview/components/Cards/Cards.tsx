import SingleCard from "@/components/SingleCard";
import { TaskType } from "@/types";
import { StyledCardsContainer } from "./Cards.styled";
import Navbar from "../Navbar";

const Cards = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <StyledCardsContainer>
      <Navbar />
      <div className="cards-container">
        {tasks.map(({ title, description, priority, tags }, index) => (
          <SingleCard
            key={index}
            title={title}
            description={description}
            deadline={"2025-08-02 00:00:00"}
            priority={priority}
            tags={tags}
          />
        ))}
      </div>
    </StyledCardsContainer>
  );
};

export default Cards;
