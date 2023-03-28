import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";
import Layout from "pdp/Layout";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeContent />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/product/:id" element={<PDPContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainLayout;
