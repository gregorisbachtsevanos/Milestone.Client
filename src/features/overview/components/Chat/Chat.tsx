import Input from "@/common/components/Input";
import { Title } from "@/theme";
import { Controller, useForm } from "react-hook-form";
import { StyledChatContainer } from "./Chat.styled";
import Icons from "@/common/components/Icon/Icons";
import ComingSoon from "@/common/components/ComingSoon";

const Chat = ({}) => {
  const { control } = useForm({
    defaultValues: {
      message: "",
    },
    mode: "onBlur",
  });

  return (
    <StyledChatContainer>
      <Title>Chat GPT</Title>
      <ComingSoon size="50px" />
      <div className="form">
        <Controller
          key="chat"
          control={control}
          name="message"
          render={({ field: { value, onChange } }) => (
            <Input
              error={""}
              type="text"
              value={value}
              onChange={onChange}
              className="dark"
              disabled
            />
          )}
        />
        <Icons name="send" size={"20px"} />
      </div>
    </StyledChatContainer>
  );
};

export default Chat;
