import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get(" http://localhost:8080/cartItems")
      .then((res) => setCount(res.data));
  },[]);
  return (
    <CartContext.Provider value={{ Count }}>{children}</CartContext.Provider>
  );
};
