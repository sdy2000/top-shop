import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/theme-slice";
import modalReducer from "./features/modal/modal-slice";
import userReducer from "./features/user/user-slice";
import currencyReducer from "./features/currency/currency-slice";
import languageReducer from "./features/language/language-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    user: userReducer,
    currency: currencyReducer,
    language: languageReducer,
  },
});
