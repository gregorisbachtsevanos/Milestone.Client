import { Text, Title2Xl, TitleLg } from "@/theme";
import { StyledHeaderContainer } from "./Header.styled";
import Icons from "@/common/components/Icon/Icons";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <div className="section">
        <div className="title">
          <Icons name="milestone" size={"150px"} />
          <Title2Xl>Milestone</Title2Xl>
        </div>
        <Text>
          Welcome to Milestone, your ultimate productivity tool! Manage your projects, set clear
          goals, and track your progress — all in one place.
        </Text>
      </div>
      <div className="section">
        <Icons name="projects" />
        <TitleLg>Comprehensive Project Management</TitleLg>
        <Text>Organize and oversee all your projects efficiently in one centralized platform.</Text>
      </div>
      <div className="section">
        <Icons name="goals" />
        <TitleLg>Goal Setting</TitleLg>
        <Text>Define and set clear objectives to drive your productivity and stay focused</Text>
      </div>
      <div className="section">
        <Icons name="progress" />
        <TitleLg>Progress Tracking</TitleLg>
        <Text>Monitor your advancement and evaluate your performance with ease.</Text>
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
