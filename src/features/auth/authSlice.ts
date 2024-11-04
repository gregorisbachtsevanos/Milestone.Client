import { localStorageHandler } from "@/common/utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface authState {
  accessToken: string | null;
  machineToken: string | null;
  refreshToken: string | null;
  userId: string | null;
}

const initialState = {
  accessToken: null,
  machineToken: null,
  refreshToken: null,
  userId: localStorageHandler.getItem("user_id") ?? null,
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    setMachineToken(state, action: PayloadAction<string | null>) {
      state.machineToken = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string | null>) {
      state.refreshToken = action.payload;
    },
    setUserId(state, action: PayloadAction<string | null>) {
      state.userId = action.payload;
    },
  },
});

export const { setAccessToken, setMachineToken, setRefreshToken, setUserId } = authSlice.actions;

export default authSlice.reducer;

export const selectIsUserLoggedIn = (state: RootState) => Boolean(state.auth.accessToken);
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectMachineToken = (state: RootState) => state.auth.machineToken;
export const selectUserId = (state: RootState) => state.auth.userId;
