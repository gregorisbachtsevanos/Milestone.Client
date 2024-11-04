import config from "@/.config/config";
import { api } from "./api";
import { UserType } from "@/features/profile/types";

const { userAPI: USER_API } = config;

export const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<UserType, { user_id: string }>({
      query: ({ user_id }) => ({
        url: `${USER_API}/v1/users/me`,
        params: { user_id },
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery } = userAPI;
