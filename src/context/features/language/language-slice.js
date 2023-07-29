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
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = languageSlice.actions;

export default languageSlice.reducer;
