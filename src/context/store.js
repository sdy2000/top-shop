import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/theme-slice";
import modalReducer from "./features/modal/modal-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
  },
});
