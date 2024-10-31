import SingleCard from "@/common/components/SingleCard";
import { TaskType } from "@/types";
import { FC } from "react";

interface CardProps {
  tasks?: TaskType[];
  isLoading: boolean;
}

const Card: FC<CardProps> = ({ tasks, isLoading }) => {
  if (isLoading) return "loading";

  return (
    <>
      {tasks?.map(({ title, description, priority, created_at, tags }, index) => (
        <SingleCard
          key={index}
          title={title}
          description={description}
          createdDate={created_at}
          priority={priority}
          tags={tags}
        />
      ))}
    </>
  );
};

export default Card;
