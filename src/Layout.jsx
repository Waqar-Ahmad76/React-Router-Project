import React from "react";
import Header from "./components/Headers/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footers/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
