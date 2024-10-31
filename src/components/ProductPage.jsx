/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
export default function ProductPage({ menProducts, womenProducts }) {
  const allProducts = [...menProducts, ...womenProducts];
  const location = useLocation();
  const productId = location.pathname.replace("/product/", "");
  const product = allProducts.find((product) => product.id === productId);
  console.log(product);
  return <div> {product ? product.name : "Product not found"}</div>;
}
