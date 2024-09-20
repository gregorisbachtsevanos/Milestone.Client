import { StyledMainLayout } from "@/layouts/DashboardLayout/DashboardLayout.styled";
import React from "react";
import Overview from "./components/Overview";

const Dashboard = () => {
  return (
    <StyledMainLayout>
      <Overview />
    </StyledMainLayout>
  );
};

export default Dashboard;
