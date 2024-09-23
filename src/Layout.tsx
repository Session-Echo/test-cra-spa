import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};
