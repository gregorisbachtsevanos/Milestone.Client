import AuthLayout from "@/layouts/AuthLayout";
import AppLayout from "layouts/AppLayout";
import DashboardLayout from "layouts/DashboardLayout";
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PublicRoutes from "routes/PublicRoutes";
import ComingSoon from "@/common/components/ComingSoon";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Overview from "./features/overview";
import { routes } from "./routes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<ProtectedRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path={routes.HOME} element={<Navigate to={`${routes.OVERVIEW}`} replace />} />
          <Route path={`${routes.OVERVIEW}/*`} element={<Overview />} />
          <Route path={`${routes.PROJECT.Index}/*`} element={""} />
          <Route path={`${routes.ROADMAP}/*`} element={""} />
          <Route path={`${routes.GOALS}/*`} element={<ComingSoon size="70px" />} />
          <Route path={`${routes.CALENDAR}/*`} element={<ComingSoon size="70px" />} />
          <Route path={`${routes.SETTINGS}/*`} element={""} />
          <Route path={`${routes.PROFILE}/*`} element={""} />
          <Route path={`${routes.CHAT}/*`} element={<ComingSoon size="70px" />} />
        </Route>
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.REGISTER} element={<Register />} />
        </Route>
      </Route>
    </Route>
  )
);
