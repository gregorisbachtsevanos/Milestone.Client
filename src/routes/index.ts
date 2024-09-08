const PROJECTS = "/projects";
const TASKS = "/tasks";
const SUBTASKS = "/subtasks";

export const routes = Object.freeze({
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/",
  PROJECT: {
    Index: PROJECTS,
    Create: "new",
    Edit: {
      Index: ":projectId",
    },
    TASK: {
      Index: TASKS,
      Create: "new",
      SUBTASK: {
        Index: SUBTASKS,
        Create: "new",
      },
    },
  },
  ROADMAP: "/roadmap",
  GOALS: "/goals",
  CALENDAR: "/calendar",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  CHAT: "/chat",
});
