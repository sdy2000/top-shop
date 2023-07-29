import { getInitialTheme } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem(
      "theme",
      JSON.stringify({
        theme: getInitialTheme(),
      })
    );
  }

  return JSON.parse(localStorage.getItem("theme"));
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = themeSlice.actions;

export default themeSlice.reducer;
