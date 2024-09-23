import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const initialState = {
  isOpen: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = notificationSlice.actions;

export default notificationSlice.reducer;

export const isNotificationOpen = (state: RootState) => state.notification.isOpen;
