import { useState, useCallback, useRef } from "react";
import Button from "@/common/components/Button";
import Icons, { IconProps } from "@/common/components/Icon/Icons";
import { StyledTopBarContainer } from "./TopBar.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  isNotificationOpen,
  setIsOpen as setNotificationOpen,
} from "../notification/notificationSlice";
import useClickOutside from "@/common/hooks/useClickOutside";
import { isProfileModalOpen, setIsOpen as setProfileOpen } from "../profile/profileSlice";

interface TopBarProps {
  notificationPopupRef: React.RefObject<HTMLDivElement>;
  profilePopupRef: React.RefObject<HTMLDivElement>;
}

const TopBar: React.FC<TopBarProps> = ({ notificationPopupRef, profilePopupRef }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const dispatch = useDispatch();

  const isNotificationModalOpen = useSelector(isNotificationOpen);
  const isUserModalOpen = useSelector(isProfileModalOpen);

  const buttonsRef = useRef<HTMLDivElement>(null);

  const props: Omit<IconProps, "name"> = { color: "gray", size: "20px" };

  const handleNotificationButtonClick = useCallback(() => {
    setActiveButton((prevActive) => (prevActive === "notifications" ? null : "notifications"));
    dispatch(setProfileOpen(false));
    dispatch(setNotificationOpen(!isNotificationModalOpen));
  }, [isNotificationModalOpen, dispatch]);

  const handleUserButtonClick = useCallback(() => {
    setActiveButton((prevActive) => (prevActive === "user" ? null : "user"));
    dispatch(setNotificationOpen(false));
    dispatch(setProfileOpen(!isUserModalOpen));
  }, [dispatch, isUserModalOpen]);

  useClickOutside([buttonsRef, notificationPopupRef, profilePopupRef], () => {
    setActiveButton(null);
    if (isNotificationModalOpen) {
      dispatch(setNotificationOpen(false));
    }
    if (isUserModalOpen) {
      dispatch(setProfileOpen(false));
    }
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
