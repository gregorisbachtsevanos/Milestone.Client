import { calendarData } from "@/data/calenderData";
import { notesData } from "@/data/notesData";
import { StyledMainLayout } from "@/layouts/DashboardLayout/DashboardLayout.styled";
import Chat from "./components/Chat";
import Notes from "./components/Notes";
import Summary from "./components/Summary";
import Tasks from "./components/Tasks";
import { StyledOverviewContainer } from "./Overview.styled";

const Overview = () => {
  return (
    <StyledMainLayout>
      <StyledOverviewContainer>
        <Summary />
        <div className="sections">
          <Tasks />
          <Notes data={notesData} title="Goals" />
          <div className="row">
            <Notes data={calendarData} title="Calendar" size={"small"} />
            <Chat />
          </div>
        </div>
      </StyledOverviewContainer>
    </StyledMainLayout>
  );
};

export default Overview;
