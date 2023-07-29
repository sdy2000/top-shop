import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("user") === null) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        user_id: 0,
        user_name: "",
        email: "",
        user_avatar: "",
        first_name: "",
        last_name: "",
        phone: "",
        gender: "",
        register_date: "",
        isLoading: true,
      })
    );
  }

  return JSON.parse(localStorage.getItem("user"));
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {  } = userSlice.actions;

export default userSlice.reducer;
