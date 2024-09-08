import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import config from "config";
import { setAccessToken, setRefreshToken, setMachineToken } from "features/auth/authSlice";
import { getFetchQueryErrorMessage } from "utils/errors";
import { removeLocalStorageItem, setLocalStorageItem } from "utils/localStorage";
import { RootState } from "../store";
import { api } from "./api";

export interface MachineTokenResponse {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface LoginResponse {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  tokenType: string;
}

export interface LoginProps {
  email?: string;
  password?: string;
}

export interface RefreshProps {
  refreshToken: string;
}

export interface LogoutProps extends RefreshProps {}

export interface DecodedToken {
  role: string;
}

const IDENTITY_API = config.identityAPI;
const clientId = config.auth.clientId;
const clientSecret = config.auth.clientSecret;
const machineId = config.auth.machineId;
const machineSecret = config.auth.machineSecret;

export const identityAPI = api.injectEndpoints({
  endpoints: (build) => ({
    fetchMachineToken: build.mutation<MachineTokenResponse, void>({
      async queryFn(_, _queryApi, _extraOptions, baseQuery) {
        const machineTokenResponse = await baseQuery({
          url: `${IDENTITY_API}/machine/token`,
          method: "POST",
          body: {
            grantType: "client_credentials",
            clientId: machineId,
            clientSecret: machineSecret,
            scopes: config.scopes.machineToken,
          },
        });

        if (machineTokenResponse.error)
          return { error: machineTokenResponse.error as FetchBaseQueryError };

        const machineToken = (machineTokenResponse.data as MachineTokenResponse).accessToken;
        _queryApi.dispatch(setMachineToken(machineToken));
        return { data: machineTokenResponse.data as MachineTokenResponse };
      },
    }),
    login: build.mutation<LoginResponse, LoginProps>({
      async queryFn({ email, password }, _queryApi, _extraOptions, baseQuery) {
        let machineToken = (_queryApi.getState() as RootState).auth.machineToken;

        if (!machineToken) {
          await _queryApi.dispatch(identityAPI.endpoints.fetchMachineToken.initiate());
          machineToken = (_queryApi.getState() as RootState).auth.machineToken;
        }
        const loginResponse = await baseQuery({
          url: `${IDENTITY_API}/web/adops/login`,
          headers: { Authorization: `Bearer ${machineToken}` },
          method: "POST",
          body: {
            grantType: "password",
            clientId,
            clientSecret,
            username: email,
            password,
            scopes: config.scopes.accessToken,
          },
        });

        if (loginResponse.error) {
          const errorMessage = getFetchQueryErrorMessage(loginResponse.error);
          return { error: loginResponse.error as FetchBaseQueryError };
        }

        const accessToken = (loginResponse.data as LoginResponse).accessToken;
        const refreshToken = (loginResponse.data as LoginResponse).refreshToken;
        _queryApi.dispatch(setAccessToken(accessToken));
        _queryApi.dispatch(setRefreshToken(refreshToken));
        setLocalStorageItem("refreshToken", refreshToken);
        return { data: loginResponse.data as LoginResponse };
      },
    }),
    refresh: build.mutation<LoginResponse, RefreshProps>({
      async queryFn({ refreshToken: prevRefreshToken }, _queryApi, _extraOptions, baseQuery) {
        const refreshTokenResponse = await baseQuery({
          url: `${IDENTITY_API}/web/refresh`,
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
          removeLocalStorageItem("refreshToken");
          return { error: refreshTokenResponse.error as FetchBaseQueryError };
        }

        const accessToken = (refreshTokenResponse.data as LoginResponse).accessToken;
        const refreshToken = (refreshTokenResponse.data as LoginResponse).refreshToken;
        _queryApi.dispatch(setAccessToken(accessToken));
        _queryApi.dispatch(setRefreshToken(refreshToken));
        setLocalStorageItem("refreshToken", refreshToken);
        return { data: refreshTokenResponse.data as LoginResponse };
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
  }),
});

export const { useLoginMutation, useRefreshMutation, useLogoutMutation } = identityAPI;
