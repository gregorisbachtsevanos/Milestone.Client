import AppLayout from "layouts/AppLayout";
import DashboardLayout from "layouts/DashboardLayout";
import LoginLayout from "layouts/LoginLayout";
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ProtectedRoutes from "routes/ProtectedRoutes";
import PublicRoutes from "routes/PublicRoutes";
import Login from "./features/auth/pages/Login";
import { routes } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<ProtectedRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path={routes.HOME} element={<Navigate to={`${routes.HOME}`} replace />} />
          <Route path={`${routes.PROJECT.Index}/*`} element={""} />
          <Route path={`${routes.ROADMAP}/*`} element={""} />
          <Route path={`${routes.GOALS}/*`} element={""} />
          <Route path={`${routes.CALENDAR}/*`} element={""} />
          <Route path={`${routes.SETTINGS}/*`} element={""} />
          <Route path={`${routes.PROFILE}/*`} element={""} />
          <Route path={`${routes.CHAT}/*`} element={""} />
        </Route>
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<LoginLayout />}>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.REGISTER} element={""} />
        </Route>
      </Route>
    </Route>
  )
);
