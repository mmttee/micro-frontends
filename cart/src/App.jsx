import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";
import Layout from "pdp/Layout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CartContent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
