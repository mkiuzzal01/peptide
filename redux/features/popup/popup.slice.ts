import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  announcementOpen: boolean;
}

const initialState: PopupState = {
  announcementOpen: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openAnnouncement(state) {
      state.announcementOpen = true;
    },
    closeAnnouncement(state) {
      state.announcementOpen = false;
    },
  },
});

export const { openAnnouncement, closeAnnouncement } = popupSlice.actions;

export default popupSlice.reducer;
