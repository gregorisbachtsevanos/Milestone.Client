import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface ProfileDataState {
  isOpen: boolean;
}

const initialState: ProfileDataState = {
  isOpen: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = profileSlice.actions;

export default profileSlice.reducer;

export const isProfileModalOpen = (state: RootState) => state.profile.isOpen;
