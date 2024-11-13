import SingleCard from "@/common/components/SingleCard";
import { TaskType } from "@/types";
import { FC } from "react";

interface CardProps {
  subtasks?: TaskType[];
  isLoading: boolean;
}

const Card: FC<CardProps> = ({ subtasks, isLoading }) => {
  if (isLoading) return "loading";

  return (
    <>
      {subtasks?.map(({ title, description, priority, created_at, tags }, index) => (
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
