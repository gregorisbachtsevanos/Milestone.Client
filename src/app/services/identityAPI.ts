import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { setAccessToken, setRefreshToken, setMachineToken } from "features/auth/authSlice";
import { getFetchQueryErrorMessage } from "@/common/utils/errors";
import { removeLocalStorageItem, setLocalStorageItem } from "@/common/utils/localStorage";
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
import config from "@/.config/config";

const IDENTITY_API = config.identityAPI;
const clientId = config.auth.clientId;
const clientSecret = config.auth.clientSecret;
// const machineId = config.auth.machineId;
// const machineSecret = config.auth.machineSecret;

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
        console.log(machineTokenResponse);
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
        console.log(machineToken);
        const registerResponse = await baseQuery({
          url: `${IDENTITY_API}/identity/register`,
          headers: { Authorization: `Bearer ${machineToken}` },
          method: "POST",
          body: {
            grantType: "password",
            clientId,
            clientSecret,
            name: firstname + lastname,
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
        const accessToken = (registerResponse.data as AuthResponse).accessToken;
        _queryApi.dispatch(setAccessToken(accessToken));
        const refreshToken = (registerResponse.data as AuthResponse).refreshToken;
        _queryApi.dispatch(setRefreshToken(refreshToken));
        setLocalStorageItem("refreshToken", refreshToken);
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

        const accessToken = (loginResponse.data as AuthResponse).accessToken;
        const refreshToken = (loginResponse.data as AuthResponse).refreshToken;
        _queryApi.dispatch(setAccessToken(accessToken));
        _queryApi.dispatch(setRefreshToken(refreshToken));
        setLocalStorageItem("refreshToken", refreshToken);
        return { data: loginResponse.data as AuthResponse };
      },
    }),
    refresh: build.mutation<AuthResponse, RefreshProps>({
      async queryFn({ refreshToken: prevRefreshToken }, _queryApi, _extraOptions, baseQuery) {
        let machineToken = (_queryApi.getState() as RootState).auth.accessToken;
        console.log(machineToken);
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
        console.log(prevRefreshToken);
        if (refreshTokenResponse.error) {
          _queryApi.dispatch(setAccessToken(null));
          _queryApi.dispatch(setRefreshToken(null));
          removeLocalStorageItem("refreshToken");
          return { error: refreshTokenResponse.error as FetchBaseQueryError };
        }

        const accessToken = (refreshTokenResponse.data as AuthResponse).accessToken;
        const refreshToken = (refreshTokenResponse.data as AuthResponse).refreshToken;
        _queryApi.dispatch(setAccessToken(accessToken));
        _queryApi.dispatch(setRefreshToken(refreshToken));
        setLocalStorageItem("refreshToken", refreshToken);
        return { data: refreshTokenResponse.data as AuthResponse };
      },
    }),
    logout: build.mutation<void, LogoutProps>({
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
        removeLocalStorageItem("refreshToken");
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
        removeLocalStorageItem("refreshToken");
        return { data: logoutResponse.data as void };
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useRefreshMutation, useLogoutMutation } =
  identityAPI;
