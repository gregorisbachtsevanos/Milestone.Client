import Tags from "@/common/components/Tags";
import useTaskCounts from "@/common/hooks/useTaskCounts";
import { Status } from "@/types";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CreateNewButton from "../../../CreateNewButton";
import NewTaskModal from "../NewTaskModal";
import { StyledNavbarContainer } from "./Navbar.styled";
import { Overview } from "@/features/profile/types";

const Navbar = ({ overviewTotalData }: { overviewTotalData: Overview }) => {
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const navbarData = useTaskCounts(overviewTotalData);

  const handleParams = useCallback(
    (type: Status) => {
      searchParams.set("status", type);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const openNewTaskModal = useCallback(() => setNewTaskModal(true), []);

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
      <CreateNewButton title="Add New" onOpen={openNewTaskModal} />
      <NewTaskModal isOpen={newTaskModal} onClose={() => setNewTaskModal(false)} />
    </StyledNavbarContainer>
  );
};

export default Navbar;
