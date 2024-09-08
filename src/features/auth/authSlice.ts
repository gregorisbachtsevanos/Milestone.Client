import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface authState {
  accessToken: string | null;
  machineToken: string | null;
  refreshToken: string | null;
}

const initialState = {
  accessToken: null,
  machineToken: null,
  refreshToken: null,
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setMachineToken(state, action) {
      state.machineToken = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
  },
});

export const { setAccessToken, setMachineToken, setRefreshToken } = authSlice.actions;

export default authSlice.reducer;

export const selectIsUserLoggedIn = (state: RootState) => Boolean(state.auth.accessToken);
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectMachineToken = (state: RootState) => state.auth.machineToken;
