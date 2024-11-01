import config from "@/.config/config";
import { api } from "./api";

const { userAPI: USER_API } = config;

export const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<any, { user_id: string }>({
      query: ({ user_id }) => ({
        url: `${USER_API}/v1/users/me`,
        params: { user_id },
      }),
    }),
  }),
});

// export const {  } = userAPI;
