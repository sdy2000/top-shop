import { Header, TopFooter } from "@/features/layouts/home-layout";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <TopFooter />
    </>
  );
};
export default HomeLayout;
