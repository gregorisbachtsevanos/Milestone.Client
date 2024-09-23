import { useState, useCallback, useRef } from "react";
import Button from "@/components/Button";
import Icons, { IconProps } from "@/components/Icon/Icons";
import { StyledTopBarContainer } from "./TopBar.styled";
import { useDispatch, useSelector } from "react-redux";
import { isNotificationOpen, setIsOpen } from "../notification/notificationSlice";
import useClickOutside from "@/hooks/useClickOutside";

interface TopBarProps {
  notificationPopupRef: React.RefObject<HTMLDivElement>;
}

const TopBar: React.FC<TopBarProps> = ({ notificationPopupRef }) => {
  const dispatch = useDispatch();
  const isNotificationModalOpen = useSelector(isNotificationOpen);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const props: Omit<IconProps, "name"> = { color: "gray", size: "20px" };

  const handleNotificationButtonClick = useCallback(() => {
    setActiveButton((prevActive) => (prevActive === "notifications" ? null : "notifications"));
    dispatch(setIsOpen(!isNotificationModalOpen));
  }, [isNotificationModalOpen, dispatch]);

  const handleUserButtonClick = useCallback(() => {
    setActiveButton((prevActive) => (prevActive === "user" ? null : "user"));
    isNotificationModalOpen && dispatch(setIsOpen(false));
  }, [isNotificationModalOpen]);

  useClickOutside([buttonsRef, notificationPopupRef], () => {
    setActiveButton(null);
    isNotificationModalOpen && dispatch(setIsOpen(!isNotificationModalOpen));
  });

  return (
    <StyledTopBarContainer>
      <div className="logo">
        <Icons name="milestone" size={"100px"} />
      </div>
      <div className="buttons" ref={buttonsRef}>
        <Button
          onClick={handleNotificationButtonClick}
          className={activeButton === "notifications" ? "active" : ""}
        >
          <Icons name="notifications" {...props} />
        </Button>
        <Button onClick={handleUserButtonClick} className={activeButton === "user" ? "active" : ""}>
          <Icons name="user" {...props} />
        </Button>
      </div>
    </StyledTopBarContainer>
  );
};

export default TopBar;
