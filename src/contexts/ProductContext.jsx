import React, { createContext, useEffect, useState } from "react";
import instance from "../utils/axiosShopInstance";

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function getProducts() {
    instance
      .get(`/products?limit=150`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    products.forEach((product) => {
      if (product.discount) {
        product.discountPrice =
          ((100 - product.discount) * product.price) / 100;
      } else product.discountPrice = 0;
    });
  }, [products]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
