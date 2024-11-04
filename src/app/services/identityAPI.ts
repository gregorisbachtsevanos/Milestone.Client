import config from "@/.config/config";
import { getFetchQueryErrorMessage } from "@/common/utils/errors";
import { localStorageHandler } from "@/common/utils/localStorage";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {
  setAccessToken,
  setMachineToken,
  setRefreshToken,
  setUserId,
} from "features/auth/authSlice";
import { RootState } from "../store";
import { api } from "./api";
import {
  AuthResponse,
  LoginProps,
  LogoutProps,
  MachineTokenResponse,
  RefreshProps,
  RegisterProps,
} from "./types/identityTypes";
import { userAPI } from "./userApi";

const { identityAPI: IDENTITY_API } = config;
const { clientId, clientSecret } = config.auth;
// const {machineId,machineSecret} = config.auth;

export const identityAPI = api.injectEndpoints({
  endpoints: (build) => ({
    fetchMachineToken: build.mutation<MachineTokenResponse, void>({
      async queryFn(_, _queryApi, _extraOptions, baseQuery) {
        const machineTokenResponse = await baseQuery({
          url: `${IDENTITY_API}/identity/machine-token`,
          method: "GET",
          // body: {
          //   grantType: "client_credentials",
          //   clientId: machineId,
          //   clientSecret: machineSecret,
          //   scopes: config.scopes.machineToken,
          // },
        });

        if (machineTokenResponse.error)
          return { error: machineTokenResponse.error as FetchBaseQueryError };

        const machineToken = (machineTokenResponse.data as MachineTokenResponse).machineToken;

        _queryApi.dispatch(setMachineToken(machineToken));

        return { data: machineTokenResponse.data as MachineTokenResponse };
      },
    }),
    register: build.mutation<AuthResponse, RegisterProps>({
      async queryFn(
        { firstname, lastname, username, email, password },
        _queryApi,
        _extraOptions,
        baseQuery
      ) {
        let machineToken = (_queryApi.getState() as RootState).auth.machineToken;

        if (!machineToken) {
          await _queryApi.dispatch(identityAPI.endpoints.fetchMachineToken.initiate());
          machineToken = (_queryApi.getState() as RootState).auth.machineToken;
        }

        const registerResponse = await baseQuery({
          url: `${IDENTITY_API}/identity/register`,
          headers: { Authorization: `Bearer ${machineToken}` },
          method: "POST",
          body: {
            grantType: "password",
            clientId,
            clientSecret,
            name: `${firstname} ${lastname}`,
            username,
            email,
            password,
            scopes: config.scopes.accessToken,
          },
        });

        if (registerResponse.error) {
          const errorMessage = getFetchQueryErrorMessage(registerResponse.error);
          console.log(errorMessage);
          return { error: registerResponse.error as FetchBaseQueryError };
        }

        const { accessToken } = registerResponse.data as AuthResponse;
        const { refreshToken } = registerResponse.data as AuthResponse;

        _queryApi.dispatch(setAccessToken(accessToken));
        _queryApi.dispatch(setRefreshToken(refreshToken));

        localStorageHandler.setItem("refreshToken", refreshToken);

        const { user_id } = registerResponse.data as AuthResponse;

        if (user_id)
          await _queryApi.dispatch(userAPI.endpoints.getCurrentUser.initiate({ user_id }));

        return { data: registerResponse.data as AuthResponse };
      },
    }),
    login: build.mutation<AuthResponse, LoginProps>({
      async queryFn({ username, password }, _queryApi, _extraOptions, baseQuery) {
        let machineToken = (_queryApi.getState() as RootState).auth.machineToken;

        if (!machineToken) {
          await _queryApi.dispatch(identityAPI.endpoints.fetchMachineToken.initiate());
          machineToken = (_queryApi.getState() as RootState).auth.machineToken;
        }

        const loginResponse = await baseQuery({
          url: `${IDENTITY_API}/identity/login`,
          headers: { Authorization: `Bearer ${machineToken}` },
          method: "POST",
          body: {
            grantType: "password",
            clientId,
            clientSecret,
            username,
            password,
            scopes: config.scopes.accessToken,
          },
        });

        if (loginResponse.error) {
          const errorMessage = getFetchQueryErrorMessage(loginResponse.error);
          console.log(errorMessage);
          return { error: loginResponse.error as FetchBaseQueryError };
        }

        const { accessToken } = loginResponse.data as AuthResponse;
        const { refreshToken } = loginResponse.data as AuthResponse;

        _queryApi.dispatch(setAccessToken(accessToken));
        _queryApi.dispatch(setRefreshToken(refreshToken));

        localStorageHandler.setItem("refreshToken", refreshToken);
        const { user_id } = loginResponse.data as AuthResponse;

        if (user_id) {
          _queryApi.dispatch(setUserId(user_id));
          localStorageHandler.setItem("user_id", user_id);
        }

        return { data: loginResponse.data as AuthResponse };
      },
    }),
    refresh: build.mutation<AuthResponse, RefreshProps>({
      async queryFn({ refreshToken: prevRefreshToken }, _queryApi, _extraOptions, baseQuery) {
        let machineToken = (_queryApi.getState() as RootState).auth.accessToken;

        if (!machineToken) {
          await _queryApi.dispatch(identityAPI.endpoints.fetchMachineToken.initiate());
          machineToken = (_queryApi.getState() as RootState).auth.machineToken;
        }

        const refreshTokenResponse = await baseQuery({
          url: `${IDENTITY_API}/identity/refresh-token`,
          headers: { Authorization: `Bearer ${prevRefreshToken}` },
          method: "POST",
          body: {
            clientId,
            clientSecret,
            refreshToken: prevRefreshToken,
            scopes: config.scopes.refreshToken,
          },
        });

        if (refreshTokenResponse.error) {
          _queryApi.dispatch(setAccessToken(null));
          _queryApi.dispatch(setRefreshToken(null));
          localStorageHandler.removeItem("refreshToken");
          return { error: refreshTokenResponse.error as FetchBaseQueryError };
        }

        const accessToken = (refreshTokenResponse.data as AuthResponse).accessToken;
        const refreshToken = (refreshTokenResponse.data as AuthResponse).refreshToken;

        _queryApi.dispatch(setAccessToken(accessToken));
        _queryApi.dispatch(setRefreshToken(refreshToken));
        localStorageHandler.setItem("refreshToken", refreshToken);

        return { data: refreshTokenResponse.data as AuthResponse };
      },
    }),
    logout: build.mutation<void, LogoutProps>({
      async queryFn({ refreshToken }, _queryApi, _extraOptions, baseQuery) {
        const logoutResponse = await baseQuery({
          url: `${IDENTITY_API}/identity/logout`,
          headers: { Authorization: `Bearer ${refreshToken}` },
          method: "POST",
          // body: {
          //   clientId,
          //   clientSecret,
          //   refreshToken,
          // },
        });

        if (logoutResponse.error) return { error: logoutResponse.error as FetchBaseQueryError };

        _queryApi.dispatch(setAccessToken(null));
        _queryApi.dispatch(setRefreshToken(null));
        _queryApi.dispatch(api.util.resetApiState());

        localStorageHandler.removeItem("refreshToken");

        return { data: logoutResponse.data as void };
      },
    }),
    invitationCode: build.mutation<void, LogoutProps>({
      async queryFn({ refreshToken }, _queryApi, _extraOptions, baseQuery) {
        const logoutResponse = await baseQuery({
          url: `${IDENTITY_API}/web/logout`,
          method: "POST",
          body: {
            clientId,
            clientSecret,
            refreshToken,
          },
        });

        if (logoutResponse.error) return { error: logoutResponse.error as FetchBaseQueryError };

        _queryApi.dispatch(setAccessToken(null));
        _queryApi.dispatch(setRefreshToken(null));
        _queryApi.dispatch(api.util.resetApiState());

        localStorageHandler.removeItem("refreshToken");

        return { data: logoutResponse.data as void };
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useRefreshMutation, useLogoutMutation } =
  identityAPI;
