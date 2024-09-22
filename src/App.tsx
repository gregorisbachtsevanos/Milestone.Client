import AppLayout from "layouts/AppLayout";
import DashboardLayout from "layouts/DashboardLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ProtectedRoutes from "routes/ProtectedRoutes";
import PublicRoutes from "routes/PublicRoutes";
import Login from "./features/auth/pages/Login";
import { routes } from "./routes";
import Register from "./features/auth/pages/Register";
import Dashboard from "./features/dashboard";
import ComingSoon from "./components/ComingSoon";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      {/* <Route element={<ProtectedRoutes />}> */}
      <Route element={<DashboardLayout />}>
        <Route path={routes.HOME} element={<Navigate to={`${routes.OVERVIEW}`} replace />} />
        <Route path={`${routes.OVERVIEW}/*`} element={<Dashboard />} />
        <Route path={`${routes.PROJECT.Index}/*`} element={""} />
        <Route path={`${routes.ROADMAP}/*`} element={""} />
        <Route path={`${routes.GOALS}/*`} element={<ComingSoon size="70px" />} />
        <Route path={`${routes.CALENDAR}/*`} element={<ComingSoon size="70px" />} />
        <Route path={`${routes.SETTINGS}/*`} element={""} />
        <Route path={`${routes.PROFILE}/*`} element={""} />
        <Route path={`${routes.CHAT}/*`} element={<ComingSoon size="70px" />} />
      </Route>
      {/* </Route> */}
      <Route element={<PublicRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.REGISTER} element={<Register />} />
        </Route>
      </Route>
    </Route>
  )
);
