import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("currency") === null) {
    localStorage.setItem(
      "currency",
      JSON.stringify({
        currency: "USD",
        symbol: "$",
        currency_name: "United States Dollar",
        currency_image:
          "https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg",
      })
    );
  }

  return JSON.parse(localStorage.getItem("currency"));
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    onChangeCurrency: (state, { payload }) => {
      state.currency = payload.id;
      state.symbol = payload.symbol;
      state.currency_name = payload.currency_name;
      state.currency_image = payload.image;

      localStorage.setItem("currency", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const { onChangeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
