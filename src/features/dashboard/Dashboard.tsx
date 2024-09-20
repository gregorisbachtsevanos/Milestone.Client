import { tasksData } from "@/data/tasksData";
import { StyledMainLayout } from "@/layouts/DashboardLayout/DashboardLayout.styled";
import Cards from "./components/Cards";
import Overview from "./components/Overview";

const Dashboard = () => {
  return (
    <StyledMainLayout>
      <Overview />
      <Cards tasks={tasksData} />
    </StyledMainLayout>
  );
};

export default Dashboard;
