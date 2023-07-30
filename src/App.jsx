import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./layouts/layout";
import { Layout, HomeLayout } from "@/layouts";
import { HomePage } from "@/pages/home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  //TODO : Create Hook for this method
  //#region Theme Changer

  const { theme } = useSelector((store) => store.theme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);
  };

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  //#endregion

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* //! */}
            {/* //! */}
            {/* //! Home Layout //! */}
            <Route element={<HomeLayout />}>
              <Route path="*" element={<HomePage />} />
            </Route>
            {/* //! */}
            {/* //! */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
