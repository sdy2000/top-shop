import { getInitialTheme } from "@/utils";

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
