import Tags from "@/common/components/Tags";
import useTaskCounts from "@/common/hooks/useTaskCounts";
import { Overview } from "@/features/profile/types";
import { Status } from "@/types";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CreateNewButton from "../../../CreateNewButton";
import AddNewOptions from "../AddNewOptions";
import Modal from "../Modal";
import { StyledNavbarContainer } from "./Navbar.styled";
import { ModalType } from "@/features/overview/types";

const Navbar = ({ overviewTotalData }: { overviewTotalData?: Overview }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectionModal, setSelectionModal] = useState<ModalType>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const navbarData = useTaskCounts(overviewTotalData);

  const handleParams = useCallback(
    (type: Status) => {
      searchParams.set("status", type);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const selectModal = useCallback((type: ModalType) => {
    setSelectionModal(type);
    setOpenModal(false);
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
      <CreateNewButton title="Add New" onOpen={() => setOpenModal(true)} />
      <AddNewOptions
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSelect={selectModal}
      />
      <Modal isOpen={selectionModal} onClose={() => setSelectionModal(null)} />
    </StyledNavbarContainer>
  );
};

export default Navbar;
