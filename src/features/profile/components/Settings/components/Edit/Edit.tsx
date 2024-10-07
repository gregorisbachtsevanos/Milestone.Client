import Icons from "@/components/Icon";
import Card from "../../../Card";
import { StyledEditContainer } from "./Edit.styled";
import { Text } from "@/theme";
import { FC } from "react";

interface EditInfoModal {
  title: string;
  onClick: () => void;
}

const EditInfo: FC<EditInfoModal> = ({ title, onClick }) => {
  return (
    <Card withoutMargin>
      <StyledEditContainer onClick={onClick}>
        <Text>{title}</Text>
        <Icons name="arrow_right" color="gray" />
      </StyledEditContainer>
    </Card>
  );
};

export default EditInfo;
