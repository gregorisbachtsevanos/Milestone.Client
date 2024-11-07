import { useGetCurrentUserQuery } from "@/app/services/userApi";
import { calendarData } from "@/data/calenderData";
import { notesData } from "@/data/notesData";
import { StyledMainLayout } from "@/layouts/DashboardLayout/DashboardLayout.styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserId } from "../auth/authSlice";
import Chat from "./components/Chat";
import Notes from "./components/Notes";
import NewEventModal from "./components/Notes/NewEventModal";
import NewGoalModal from "./components/Notes/NewGoalModal";
import Summary from "./components/Summary";
import Tasks from "./components/Tasks";
import { StyledOverviewContainer } from "./Overview.styled";
import { useOverviewQuery } from "@/app/services/projectManagerApi";

const Overview = () => {
  const [newGoalModal, setNewGoalModal] = useState(false);
  const [newEventModal, setNewEventModal] = useState(false);
  const getUserId = useSelector(selectUserId);

  const { data: user } = useGetCurrentUserQuery({ user_id: getUserId ?? "" }, { skip: !getUserId });

  const { data: overviewData } = useOverviewQuery();
  console.log(user, overviewData);

  return (
    <StyledMainLayout>
      <StyledOverviewContainer>
        <Summary />
        <div className="sections">
          <Tasks overviewTotalData={overviewData ?? {}} />
          <Notes
            data={notesData}
            title="Goals"
            btnTitle="New Goal"
            onBtnClick={() => setNewGoalModal(true)}
          />
          <div className="row">
            <Notes
              data={calendarData}
              title="Calendar"
              size="small"
              btnTitle="New Event"
              onBtnClick={() => setNewEventModal(true)}
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
