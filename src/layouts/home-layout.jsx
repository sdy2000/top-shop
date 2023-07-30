import { Outlet } from "react-router-dom";
import { Header, TopFooter } from "@/features/layouts/home-layout";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="py-20 bg-red-400 text-4xl font-bold">Some Content</div>
      <TopFooter />
    </>
  );
};
export default HomeLayout;
