import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./layouts/layout";
import { Layout, HomeLayout } from "@/layouts";
import { HomePage } from "@/pages/home";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { changeTheme } from "@/hooks";

function App() {
  //#region Theme Changer

  const { theme } = useSelector((store) => store.theme);

  useEffect(() => {
    changeTheme(theme);
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
