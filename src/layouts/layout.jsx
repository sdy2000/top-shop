import { TopHeader, Footer } from "@/features/layouts/layout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <TopHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
