import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Fidget Spinner World</Link>
          <span className="mx-5">|</span>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="flex-end text-black text-sm relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
