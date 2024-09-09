import Icons from "@/assets/icons/Icons";
import { LinkStyle, Text, TitleLg } from "@/theme";
import { Outlet } from "react-router-dom";
import { StyledAuthLayout } from "./AuthLayout.styled";
import Lines from "@/components/Lines";

const AuthLayout = () => {
  return (
    <StyledAuthLayout>
      <div className="auth-container">
        <div className="header">
          <div className="section">
            <Icons name="logo" size={"150px"} />
            <Text>
              Welcome to Milestone, your ultimate productivity tool! Manage your projects, set clear
              goals, and track your progress — all in one place.
            </Text>
          </div>
          <div className="section">
            <Icons name="projects" />
            <TitleLg>Comprehensive Project Management</TitleLg>
            <Text>
              Organize and oversee all your projects efficiently in one centralized platform.
            </Text>
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
        </div>
        <div className="footer">
          <LinkStyle>Terms</LinkStyle>
          <i>-</i>
          <LinkStyle>Privacy</LinkStyle>
          <i>-</i>
          <LinkStyle>Docs</LinkStyle>
          <i>-</i>
          <LinkStyle>Help</LinkStyle>
        </div>
      </div>
      <Lines />
      <div className="auth-form">
        <Outlet />
      </div>
    </StyledAuthLayout>
  );
};

export default AuthLayout;
