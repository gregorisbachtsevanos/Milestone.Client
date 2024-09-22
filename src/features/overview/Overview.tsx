import { tasksData } from "@/data/tasksData";
import { StyledMainLayout } from "@/layouts/DashboardLayout/DashboardLayout.styled";
import Cards from "./components/Cards";
import Summary from "./components/Summary";
import { StyledOverviewContainer } from "./Overview.styled";
import { notesData } from "@/data/notesData";
import Notes from "./components/Notes";
import { calendarData } from "@/data/calenderData";
import Chat from "./components/Chat";

const Overview = () => {
  return (
    <StyledMainLayout>
      <StyledOverviewContainer>
        <Summary />
        <div className="sections">
          <Cards tasks={tasksData} />
          <Notes notes={notesData} title="Goals" />
          <div className="row">
            <Notes notes={calendarData} title="Calendar" size={"small"} />
            <Chat />
          </div>
        </div>
      </StyledOverviewContainer>
    </StyledMainLayout>
  );
};

export default Overview;
