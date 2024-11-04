import config from "@/.config/config";
import { localStorageHandler } from "@/common/utils/localStorage";
import { isExpired } from "@/common/utils/token";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { setAccessToken, setRefreshToken } from "features/auth/authSlice";
import { RootState } from "../store";
import { AuthResponse } from "./types/identityTypes";

type FetchArgsWithoutAuth = { withoutAuth: boolean } & FetchArgs;

const mutex = new Mutex();
const IDENTITY_API = config.identityAPI;
const clientId = config.auth.clientId;
const clientSecret = config.auth.clientSecret;

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const accessToken = (getState() as RootState).auth.accessToken;
    if (headers.has("Authorization")) return headers;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithoutAuth = fetchBaseQuery({
  prepareHeaders: (headers) => headers,
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs | FetchArgsWithoutAuth,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const withoutAuth = (args as FetchArgsWithoutAuth).withoutAuth;
  const getState = api.getState() as RootState;
  const refreshToken = getState.auth.refreshToken;
  const accessToken = getState.auth.accessToken;
  let result;

  if (withoutAuth) result = baseQueryWithoutAuth(args, api, extraOptions);
  else {
    await mutex.waitForUnlock();
    if (!accessToken) result = await baseQuery(args, api, extraOptions);
    else {
      if (isExpired(accessToken)) {
        if (!mutex.isLocked()) {
          const release = await mutex.acquire();

          try {
            const refreshResult = await baseQuery(
              {
                url: `${IDENTITY_API}/identity/refresh-token`,
                method: "POST",
                body: {
                  clientId,
                  clientSecret,
                  refreshToken,
                },
              },
              api,
              extraOptions
            );

            if (refreshResult.data) {
              const newAccessToken = (refreshResult.data as AuthResponse).accessToken;
              const newRefreshToken = (refreshResult.data as AuthResponse).refreshToken;
              api.dispatch(setRefreshToken(newRefreshToken));
              api.dispatch(setAccessToken(newAccessToken));
              localStorageHandler.setItem("refreshToken", newRefreshToken);

              // retry the initial query
              result = await baseQuery(args, api, extraOptions);
            } else {
              api.dispatch(setAccessToken(null));
              api.dispatch(setRefreshToken(null));
              // localStorageHandler.removeItem("refreshToken");
              result = await baseQuery(args, api, extraOptions);
            }
          } finally {
            release();
          }
        } else {
          await mutex.waitForUnlock();
          result = await baseQuery(args, api, extraOptions);
        }
      } else result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithInterceptor,

  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: [],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  refetchOnReconnect: true,
  keepUnusedDataFor: 1200,
  endpoints: () => ({}),
});
