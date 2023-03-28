import React from "react";
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="text-3xl mx-auto max-w-6xl">
        <SafeComponent>
          <Header />
        </SafeComponent>
        <div className="my-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
