import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsUserLoggedIn } from "../features/auth/authSlice";
import useAuth from "../features/auth/hooks/useAuth";

const PublicRoutes = () => {
  // const location = useLocation();
  // const state = location.state as { from: Location };
  // const from = state ? state.from.pathname : "/";
  const from = "/";
  const { isLoading } = useAuth();

  const isUserAuthenticated = useSelector(selectIsUserLoggedIn);
  if (isLoading) return "loading";
  return <>{isUserAuthenticated ? <Navigate to={from} /> : <Outlet />}</>;
};

export default PublicRoutes;
