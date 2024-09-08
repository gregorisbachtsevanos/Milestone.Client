import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectIsUserLoggedIn } from "features/auth/authSlice";
import useAuth from "features/auth/hooks/useAuth";
import { routes } from ".";

const ProtectedRoutes = () => {
  const isUserAuthenticated = useSelector(selectIsUserLoggedIn);
  const { isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return "loading";

  if (!isUserAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={routes.LOGIN} state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
