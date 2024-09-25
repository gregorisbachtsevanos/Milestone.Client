import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const initialState = {
  isOpen: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = profileSlice.actions;

export default profileSlice.reducer;

export const isProfileModalOpen = (state: RootState) => state.profile.isOpen;
