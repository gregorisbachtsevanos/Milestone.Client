import Button from "@/common/components/Button";
import Icons from "@/common/components/Icon";
import Tags from "@/common/components/Tags";
import { FC } from "react";

interface CreateNewButtonProps {
  title: string;
  onOpen: () => void;
}

const CreateNewButton: FC<CreateNewButtonProps> = ({ title, onOpen }) => {
  console.log(title);

  return (
    <Button variant="primary" size="small" rounded>
      <Tags variant="primary" icon={<Icons name="add" color="darkGray" />} onClick={onOpen}>
        {title}
      </Tags>
    </Button>
  );
};

export default CreateNewButton;
