import React, { useState, useEffect } from "react";
import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";

const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("RUNNING useeffect");
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5">
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="flex justify-center">
              <div className="flex-grow font-bold">
                <a href="">{product.name}</a>
              </div>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
            <div className="text-sm mt-4">{product.description}</div>
            {loggedIn && (
              <div className="text-right mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-sm text-white px-2"
                  onClick={() => addToCart(product.id)}
                  id={`addtocart_${product.id}`}
                >
                  Add to cart
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default HomeContent;