import React, { useEffect, useState, Fragment } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";

const MiniCart = () => {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showcart_span">
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
        {items.length}
      </span>
      {showCart && (
        <div
          className="absolute p-5 border-4 border-blue-400 bg-white"
          style={{ width: 300, top: "2rem", left: -250 }}
        >
          <div
            className="grid gap-3 text-sm"
            style={{ gridTemplateColumns: "1fr 3fr 10fr 2fr" }}
          >
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
            <div>
              {currency.format(
                items.reduce((acc, item) => acc + item.quantity * item.price, 0)
              )}
            </div>
          </div>
          <div className="flex">
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
        </div>
      )}
    </>
  );
};

export default MiniCart;
