import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api

  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const { name } = data;
  console.log(data.name);

  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{}</h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">{}</span>
        <button data-cy="product-decrement-cart-item-count-button" > - </button>
        <button data-cy="product-remove-cart-item-button">Add Product</button>
      </div>
    </div>
  );
};

export default Product;
