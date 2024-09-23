import Button from "@/components/Button";
import Icons, { IconProps } from "@/components/Icon/Icons";
import { StyledTopBarContainer } from "./TopBar.styled";
import { useDispatch, useSelector } from "react-redux";
import { isNotificationOpen, setIsOpen } from "../notification/notificationSlice";
import { useCallback } from "react";

const TopBar = () => {
  const props: Omit<IconProps, "name"> = { color: "gray", size: "20px" };
  const dispatch = useDispatch();
  const isNotificationModalOpen = useSelector(isNotificationOpen);

  const toggleNotificationModal = useCallback(
    () => dispatch(setIsOpen(!isNotificationModalOpen)),
    [isNotificationModalOpen]
  );

  return (
    <StyledTopBarContainer>
      <div className="logo">
        <Icons name="milestone" size={"100px"} />
      </div>
      <div className="buttons">
        <Button onClick={toggleNotificationModal}>
          <Icons name="notifications" {...props} />
        </Button>
        <Button>
          <Icons name="user" {...props} />
        </Button>
      </div>
    </StyledTopBarContainer>
  );
};

export default TopBar;
