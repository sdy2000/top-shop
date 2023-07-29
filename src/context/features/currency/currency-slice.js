import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("currency") === null) {
    localStorage.setItem(
      "currency",
      JSON.stringify({
        currency: "USD",
        symbol: "$",
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
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = currencySlice.actions;

export default currencySlice.reducer;
