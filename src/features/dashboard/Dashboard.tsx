import { tasksData } from "@/data/tasksData";
import { StyledMainLayout } from "@/layouts/DashboardLayout/DashboardLayout.styled";
import Cards from "./components/Cards";
import Overview from "./components/Overview";
import { StyledDashboardContainer } from "./Dashboard.styled";
import { notesData } from "@/data/notesData";
import Notes from "./components/Notes";
import { calendarData } from "@/data/calenderData";

const Dashboard = () => {
  return (
    <StyledMainLayout>
      <StyledDashboardContainer>
        <Overview />
        <div className="sections">
          <Cards tasks={tasksData} />
          <Notes notes={notesData} title="Goals" />
          <Notes notes={calendarData} title="Calendar" size={"small"} /> {/* Calendar */}
        </div>
      </StyledDashboardContainer>
    </StyledMainLayout>
  );
};

export default Dashboard;
