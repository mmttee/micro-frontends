import { BehaviorSubject } from "rxjs";
import { useState, useEffect } from "react";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);
export const cart = new BehaviorSubject(null);

export const getCart = () => {
  fetch(`${API_SERVER}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      cart.next(data);
      return data;
    });
};

export const addToCart = (id) => {
  fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((response) => response.json())
    .then((data) => {
      getCart();
    });
};

export const clearCart = () => {
  fetch(`${API_SERVER}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then(() => getCart());
};

export const login = (username, password) => {
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      jwt.next(data.access_token);
      getCart();
      return data.access_token;
    });
};

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    return jwt.subscribe((c) => {
      setLoggedIn(!!jwt.value);
    });
  }, []);
  return loggedIn;
};
