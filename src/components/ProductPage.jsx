/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contexts/Cart";
import { useWishlist } from "../contexts/Wishlist";
export default function ProductPage({ menProducts, womenProducts }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const allProducts = [...menProducts, ...womenProducts];
  const location = useLocation();
  const productId = location.pathname.replace("/product/", "");
  const product = allProducts.find((product) => product.id === productId);

  const [quantity, setQuantity] = useState(1);
  // for desc
  const [expand, setExpand] = useState(false);
  return (
    <>
      {product ? (
        <div className="flex flex-col lg:m-24 lg:flex-row">
          <div className="">
            <img src={product.img} className="w-full" />
            <img src={product.hoverImg} className="w-full" />
          </div>
          <div className="w-full p-10 lg:w-1/2">
            <p className="py-9 text-4xl">{product.name}</p>
            <p className="py-2 text-lg text-blue-950">A${product.price}</p>
            <ProductDesc
              product={product}
              expand={expand}
              setExpand={setExpand}
            />
            <input
              className="my-2 w-full border px-6 py-4"
              type="number"
              placeholder="*Quanity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <button
              className="mx-1 my-4 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white"
              onClick={() => addToCart({ ...product, quantity })}
            >
              Add To Cart
            </button>
            <button
              className="my-4 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white"
              onClick={() => addToWishlist({ ...product, quantity })}
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      ) : (
        "Product not found"
      )}
    </>
  );
}

const ProductDesc = ({ product, expand, setExpand }) => {
  const toggleExpand = () => setExpand(!expand);
  return (
    <div className="py-5">
      <p className={`overflow-hidden ${expand ? "" : "line-clamp-4"}`}>
        {product.desc}
      </p>
      <button onClick={toggleExpand}>
        {expand ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};
