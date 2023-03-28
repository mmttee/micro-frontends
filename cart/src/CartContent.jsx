import React, { useState, useEffect, Fragment } from "react";
import { jwt, login } from "./cart";

import { cart, clearCart } from "cart/cart";
import { currency } from "home/products";

import Login from "./Login";

const CartContent = () => {
  const [items, setItems] = useState([]);
  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {" "}
        {items.map((item) => (
          <Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="w-6 h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          {currency.format(
            items.reduce((acc, item) => acc + item.quantity * item.price, 0)
          )}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex mb-10 items-center">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 px-5 rounded-md"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button
              className="bg-green-900 text-white px-5 rounded-md"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContent;
