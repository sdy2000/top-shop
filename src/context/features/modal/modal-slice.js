import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalId: "",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.modalId = payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalId = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
