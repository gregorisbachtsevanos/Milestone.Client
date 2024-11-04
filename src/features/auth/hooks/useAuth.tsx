import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useRegisterMutation,
} from "../../../app/services/identityAPI";
// import { LoginProps, useAuthenticateMutation } from '../../../app/services/authApi';
import { localStorageHandler } from "../../../common/utils/localStorage";
import { selectIsUserLoggedIn } from "../authSlice";

const useAuth = () => {
  const refreshToken = localStorageHandler.getItem("refreshToken") ?? "";
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const [initialLoading, setInitialLoading] = useState(true);

  const [
    login,
    {
      isLoading: isLoginLoading,
      isSuccess: isLoginSuccessful,
      isUninitialized: isLoginUninitialized,
    },
  ] = useLoginMutation();
  const [
    register,
    {
      isLoading: isRegisterLoading,
      isSuccess: isRegisterSuccessful,
      isUninitialized: isRegisterUninitialized,
    },
  ] = useRegisterMutation();
  const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation();

  const [refresh, { isLoading: isRefreshLoading, isUninitialized: isRefreshUninitialized }] =
    useRefreshMutation({
      fixedCacheKey: "refresh",
    });

  const shouldRefreshTokens = !isUserLoggedIn && Boolean(refreshToken) && isRefreshUninitialized;

  useEffect(() => {
    if (shouldRefreshTokens) refresh({ refreshToken });
    else setInitialLoading(false);
  }, [refresh, refreshToken, shouldRefreshTokens]);

  return {
    register: {
      request: register,
      isLoading: isRegisterLoading,
      isUninitialized: isRegisterUninitialized,
      isRegisterSuccessful,
    },
    login: {
      request: login,
      isLoading: isLoginLoading,
      isUninitialized: isLoginUninitialized,
      isLoginSuccessful,
    },
    logout: {
      request: () => logout({ refreshToken }),
      isLoading: isLogoutLoading,
    },
    isLoading: isRefreshLoading || initialLoading,
  };
};

export default useAuth;
