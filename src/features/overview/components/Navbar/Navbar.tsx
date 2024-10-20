import Icon from "@/common/components/Icon";
import Tags from "@/common/components/Tags";
import useTaskCounts from "@/common/hooks/useTaskCounts";
import { Status } from "@/types";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { StyledNavbarContainer } from "./Navbar.styled";
import Button from "@/common/components/Button";
import NewTaskModal from "../NewTaskModal";

const Navbar = () => {
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navbarData = useTaskCounts();

  const handleParams = useCallback(
    (type: Status) => {
      searchParams.set("status", type);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const openNewTaskModal = useCallback(() => {
    setNewTaskModal(true);
  }, []);

  return (
    <StyledNavbarContainer>
      <div className="categories">
        {navbarData.map(({ label, count }) => (
          <Tags
            key={label}
            variant="dark"
            color="yellow"
            pointer
            onClick={() => handleParams(label as Status)}
          >
            {`${label} (${count})`}
          </Tags>
        ))}
      </div>
      <Button variant="primary" size="small" rounded>
        <Tags
          variant="primary"
          icon={<Icon name="add" color="darkGray" />}
          onClick={() => openNewTaskModal()}
        >
          New Task
        </Tags>
      </Button>
      <NewTaskModal isOpen={newTaskModal} onClose={() => setNewTaskModal(false)} />
    </StyledNavbarContainer>
  );
};

export default Navbar;
