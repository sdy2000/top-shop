import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./layouts/layout";
import { Layout, HomeLayout } from "@/layouts";
import { HomePage } from "@/pages/home";

function App() {
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
