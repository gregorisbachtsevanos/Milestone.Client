import { routes } from "@/routes";

export const navItems = [
  { name: "home", label: "Dashboard", route: routes.HOME },
  { name: "projects", label: "Projects", route: routes.PROJECT.Index },
  { name: "goals", label: "Goals", route: routes.GOALS },
  { name: "calendar", label: "Calendar", route: routes.CALENDAR },
  { name: "chat", label: "Chat", route: routes.CHAT },
];
