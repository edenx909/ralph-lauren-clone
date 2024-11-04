import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useWishlist } from "../contexts/Wishlist";
import { useCart } from "../contexts/Cart";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [wishlistState, setWishlistState] = useState("empty");
  console.log(wishlist);

  return (
    <div className="flex flex-col md:flex-row">
      {wishlist.length === 0 ? (
        <div className="relative flex items-center justify-start border-b p-4">
          <p className="p-4 text-xl">
            {wishlistState === "empty"
              ? "Add Items to Your Wishlist to View Them Here"
              : "Your Wishlist has been Added to Cart"}
          </p>
          {wishlistState === "added" && (
            <a
              href="/cart"
              className="absolute right-10 my-4 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white"
            >
              Go to Cart
            </a>
          )}
        </div>
      ) : (
        <>
          <div className="ml-8 flex flex-col md:w-3/4">
            <AnimatePresence>
              {wishlist.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative flex w-full items-center justify-start border-b p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <img src={item.img} className="m-4 h-80" alt={item.name} />
                  <div>
                    <p className="text-lg md:text-2xl">{item.name}</p>
                    <br /> x{item.quantity}
                    <br /> A${item.price}
                  </div>
                  <motion.button
                    className="absolute right-8 top-8"
                    onClick={() => removeFromWishlist(item.id)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.3em"
                      height="1.3em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="M12 18c0 1 .25 1.92.67 2.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.79-.38-1.68-.61-2.62-.61c-3.31 0-6 2.69-6 6m9.54-2.12l-1.42-1.41L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.42L18 19.41l2.12 2.13l1.42-1.42L19.41 18z"
                      ></path>
                    </svg>
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="m-4 mr-8 flex flex-col items-center p-4 md:w-1/4 md:items-end md:justify-start">
            <p className="py-6 text-2xl">Total Price</p>
            <p className="py-3 pr-2 text-blue-950">
              A$
              {wishlist.reduce(
                (total, item) => total + item.price * (item.quantity || 1),
                0,
              )}
            </p>
            <button
              className="my-4 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white"
              onClick={() => {
                const addedItems = Object.values(wishlist).flat();
                addedItems.forEach((item) => addToCart(item));
                clearWishlist();
                setWishlistState("added");
              }}
            >
              Add All To Cart
            </button>
            <br />
          </div>
        </>
      )}
    </div>
  );
}
