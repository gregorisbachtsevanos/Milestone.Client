import { calendarData } from "@/data/calenderData";
import { notesData } from "@/data/notesData";
import { StyledMainLayout } from "@/layouts/DashboardLayout/DashboardLayout.styled";
import Chat from "./components/Chat";
import Notes from "./components/Notes";
import Summary from "./components/Summary";
import Tasks from "./components/Tasks";
import { StyledOverviewContainer } from "./Overview.styled";
import NewEventModal from "./components/Notes/components/NewEventModal";
import NewGoalModal from "./components/Notes/components/NewGoalModal";
import { useCallback, useState } from "react";

const Overview = () => {
  const [newGoalModal, setNewGoalModal] = useState(false);
  const [newEventModal, setNewEventModal] = useState(false);

  const openNewGoalModal = useCallback(() => {
    setNewGoalModal(true);
  }, []);

  const openNewEventModal = useCallback(() => {
    setNewGoalModal(true);
  }, []);

  return (
    <StyledMainLayout>
      <StyledOverviewContainer>
        <Summary />
        <div className="sections">
          <Tasks />
          <Notes data={notesData} title="Goals" btnTitle="New Goal" onBtnClick={openNewGoalModal} />
          <div className="row">
            <Notes
              data={calendarData}
              title="Calendar"
              size="small"
              btnTitle="New Event"
              onBtnClick={openNewEventModal}
            />
            <Chat />
          </div>
        </div>
      </StyledOverviewContainer>
      <NewEventModal isOpen={newEventModal} onClose={() => setNewEventModal(false)} />
      <NewGoalModal isOpen={newGoalModal} onClose={() => setNewGoalModal(false)} />
    </StyledMainLayout>
  );
};

export default Overview;
