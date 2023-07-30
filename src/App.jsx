import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./layouts/layout";
import { Layout, HomeLayout } from "@/layouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
