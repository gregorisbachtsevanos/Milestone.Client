import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface appDataState {
  isLoaderOpen: boolean;
}

const initialState: appDataState = {
  isLoaderOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoaderIsOpen(state, action: PayloadAction<boolean>) {
      state.isLoaderOpen = action.payload;
    },
  },
});

export const { setLoaderIsOpen } = appSlice.actions;

export default appSlice.reducer;

export const isLoaderOpen = (state: RootState) => state.app.isLoaderOpen;
