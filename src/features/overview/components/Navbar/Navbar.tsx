import Tags from "@/components/Tags";
import { StyledNavbarContainer } from "./Navbar.styled";
import { navbarData } from "./constants";
import Icon from "@/components/Icon";

const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <div className="categories">
        {navbarData.map(({ label, count }) => (
          <Tags key={label} variant="dark" color="yellow" pointer>
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
