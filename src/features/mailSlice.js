import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    selectMailAction: (state, action) => {
      state.selectedMail = action.payload;
    },

    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMailAction } =
  mailSlice.actions;

export const selectMail = (state) => state.mail.sendMessageIsOpen;

export const selectedMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
