import Icon from "@/components/Icon";
import Tags from "@/components/Tags";
import useTaskCounts from "@/hooks/useTaskCounts";
import { Status } from "@/types";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { StyledNavbarContainer } from "./Navbar.styled";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navbarData = useTaskCounts();

  const handleParams = useCallback(
    (type: Status) => {
      searchParams.set("status", type);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

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
      <Tags variant="primary" icon={<Icon name="add" color="darkGray" />}>
        New Task
      </Tags>
    </StyledNavbarContainer>
  );
};

export default Navbar;
