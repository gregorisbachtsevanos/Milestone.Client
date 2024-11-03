import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Overview, UserType } from "./types";

interface CachedDataState {
  isOpen: boolean;
  currentUser: UserType | null;
  overview: Overview | null;
}

const initialState: CachedDataState = {
  isOpen: false,
  currentUser: null,
  overview: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<UserType>) {
      state.currentUser = action.payload;
    },
    setOverview(state, action: PayloadAction<Overview>) {
      state.overview = action.payload;
    },
  },
});

export const { setIsOpen, setCurrentUser, setOverview } = profileSlice.actions;

export default profileSlice.reducer;

export const isProfileModalOpen = (state: RootState) => state.profile.isOpen;
export const getCurrentUser = (state: RootState) => state.profile.currentUser;
export const overview = (state: RootState) => state.profile.overview;
