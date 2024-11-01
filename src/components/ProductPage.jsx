/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "../contexts/Cart";
import { useWishlist } from "../contexts/Wishlist";
export default function ProductPage({ menProducts, womenProducts }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const allProducts = [...menProducts, ...womenProducts];
  const location = useLocation();
  const productId = location.pathname.replace("/product/", "");
  const product = allProducts.find((product) => product.id === productId);

  // for button animations
  const [cartButton, setCartButton] = useState(false);
  const [wishlistButton, setWishlistButton] = useState(false);

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
              className="relative mx-1 my-4 h-12 w-1/3 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white"
              onClick={() => {
                addToCart({ ...product, quantity });
                setCartButton(true);
                setTimeout(() => {
                  setCartButton(false);
                }, 3000);
              }}
            >
              <AnimatePresence>
                {cartButton ? (
                  <motion.span
                    key="added"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    ✓ Added {quantity} to Your Cart
                  </motion.span>
                ) : (
                  <motion.span
                    key="add"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    Add to Cart
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button
              className="relative mx-1 my-4 h-12 w-1/3 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white"
              onClick={() => {
                addToWishlist({ ...product, quantity });
                setWishlistButton(true);
                setTimeout(() => {
                  setWishlistButton(false);
                }, 3000);
              }}
            >
              <AnimatePresence>
                {wishlistButton ? (
                  <motion.span
                    key="added"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    ✓ Added {quantity} to Your Wishlist
                  </motion.span>
                ) : (
                  <motion.span
                    key="add"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    Add to Wishlist
                  </motion.span>
                )}
              </AnimatePresence>
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
