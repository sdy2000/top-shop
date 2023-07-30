import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("language") === null) {
    localStorage.setItem(
      "language",
      JSON.stringify({
        language: "English",
        symbol: "EN",
        dir: "ltr",
      })
    );
  }

  return JSON.parse(localStorage.getItem("language"));
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    onChangeLanguage: (state, { payload }) => {
      state.language = payload.title;
      state.symbol = payload.symbol;
      state.dir = payload.dir;

      localStorage.setItem("language", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const { onChangeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
