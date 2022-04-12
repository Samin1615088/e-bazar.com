import React from "react";
import products from "./../products";
import { useParams } from "react-router-dom";
const ProductScreen = () => {
  const params = useParams();

  const product = products.find((product) => product.id === params._id);
  console.log("params", params);
  console.log("product", product);
  return <div>{product.name}</div>;
};

export default ProductScreen;
