/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useCart } from "../contexts/Cart";
import { useWishlist } from "../contexts/Wishlist";

export default function Products({ menProducts, womenProducts }) {
  const { quickAddToCart } = useCart();
  const { quickAddToWishlist } = useWishlist();

  const [imageHover, setImageHover] = useState(null);
  const [wishlistClick, setWishlistClick] = useState(null);
  const [cartClick, setCartClick] = useState(null);

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const location = useLocation();

  useEffect(() => {
    setFilter(
      location.pathname === "/shop/men"
        ? "men"
        : location.pathname === "/shop/women"
          ? "women"
          : "",
    );
  }, [location.pathname]);

  const handleSort = () => {
    sort === ""
      ? setSort("asc")
      : sort === "asc"
        ? setSort("desc")
        : setSort("");
  };

  const filteredProducts =
    filter === "men"
      ? menProducts
      : filter === "women"
        ? womenProducts
        : [...womenProducts, ...menProducts];

  const sortedProducts = filteredProducts.sort((a, b) =>
    sort === "asc"
      ? a.price - b.price
      : sort === "desc"
        ? b.price - a.price
        : 0,
  );

  return (
    <>
      <div className="flex flex-col p-2 pt-10">
        <div className="flex justify-evenly">
          <motion.button
            className={`h-12 rounded-full border ${location.pathname === "/shop" ? "" : "hidden"} ${filter === "" && "bg-black text-white"}`}
            initial={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            whileHover={{ paddingLeft: "4rem", paddingRight: "4rem" }}
            onClick={() => setFilter("")}
          >
            All
          </motion.button>
          <motion.button
            className={`h-12 rounded-full border ${location.pathname === "/shop" ? "" : "hidden"} ${filter === "men" && "bg-black text-white"}`}
            initial={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            whileHover={{ paddingLeft: "4rem", paddingRight: "4rem" }}
            onClick={() => setFilter("men")}
          >
            Men
          </motion.button>
          <motion.button
            className={`h-12 rounded-full border ${location.pathname === "/shop" ? "" : "hidden"} ${filter === "women" && "bg-black text-white"}`}
            initial={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            whileHover={{ paddingLeft: "4rem", paddingRight: "4rem" }}
            onClick={() => setFilter("women")}
          >
            Women
          </motion.button>
          <motion.button
            className={`flex h-12 items-center rounded-full border ${sort !== "" && "bg-black text-white"} ${location.pathname === "/" && "hidden"}`}
            initial={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            whileHover={{ paddingLeft: "4rem", paddingRight: "4rem" }}
            onClick={handleSort}
          >
            <p className="">Sort</p>
            <motion.span
              className={` ${sort !== "" && "px-2 text-white"}`}
              initial={{ scale: 0 }}
              animate={{
                rotate: sort === "asc" ? 0 : sort === "desc" ? 180 : 0,
                scale: sort !== null ? 1 : 0,
              }}
              transition={{ duration: 1 }}
            >
              {sort !== "" ? "▲" : null}
            </motion.span>
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center pb-5 mobile:flex-row">
        {render(
          sortedProducts,
          quickAddToWishlist,
          quickAddToCart,
          imageHover,
          setImageHover,
          wishlistClick,
          setWishlistClick,
          cartClick,
          setCartClick,
        )}
      </div>
    </>
  );
}

function render(
  sortedProducts,
  quickAddToCart,
  quickAddToWishlist,
  imageHover,
  setImageHover,
  wishlistClick,
  setWishlistClick,
  cartClick,
  setCartClick,
) {
  return sortedProducts.map((item) => (
    <a
      key={item.id}
      className="m-[1px] mb-1 py-8 mobile:w-96"
      href={`/product/${item.id}`}
    >
      <div className="relative">
        <div
          onMouseEnter={() => setImageHover(item.id)}
          onMouseLeave={() => setImageHover(null)}
        >
          <motion.img
            src={item.img}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${imageHover === item.id ? "opacity-0" : "opacity-100"}`}
            alt={item.name}
          />
          <motion.img
            src={item.hoverImg}
            className={`h-full w-full object-cover`}
            alt={item.name}
          />
        </div>

        <motion.button
          className="absolute right-4 top-4 z-10 flex items-center"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWishlistClick(item.id);
            setTimeout(() => {
              setWishlistClick(null);
            }, 2000);
            quickAddToCart(item);
          }}
        >
          <motion.span
            className={`z-10 mr-1 origin-right rounded-xl bg-white px-2 text-sm text-black`}
            initial={{ scale: 0 }}
            animate={{ scale: wishlistClick === item.id ? 1 : 0 }}
          >
            Added to Wishlist
          </motion.span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.1em"
            height="1.1em"
            viewBox="0 0 48 48"
            whileHover={{ scale: 1.3 }}
          >
            <defs>
              <mask id={`mask-${item.id}`}>
                <g
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                >
                  <path
                    fill={wishlistClick === item.id ? "#fff" : "#000"}
                    stroke="#fff"
                    d="M15 7C8.925 7 4 11.925 4 18c0 11 13 21 20 23.326C31 39 44 29 44 18c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 7"
                  ></path>
                  <path stroke="#000" d="M18 24h12m-6-6v12"></path>
                </g>
              </mask>
            </defs>
            <path
              fill="white"
              d="M0 0h48v48H0z"
              mask={`url(#mask-${item.id})`}
            ></path>
          </motion.svg>
        </motion.button>

        <motion.button
          className="absolute bottom-4 right-4 z-10 flex items-center"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setCartClick(item.id);
            setTimeout(() => {
              setCartClick(null);
            }, 2000);
            quickAddToWishlist(item);
          }}
        >
          <motion.span
            className="z-10 mr-1 origin-right rounded-xl bg-white px-2 text-sm text-black"
            initial={{ scale: 0 }}
            animate={{ scale: cartClick === item.id ? 1 : 0 }}
          >
            Added to Cart
          </motion.span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 48 48"
            whileHover={{ scale: 1.3 }}
          >
            <defs>
              <mask id={`ipSShoppingCart-${item.id}`}>
                <g fill="none">
                  <path
                    fill={cartClick === item.id ? "#fff" : "#000"}
                    d="M39 32H13L8 12h36z"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
                  ></path>
                  <circle
                    cx={13}
                    cy={39}
                    r={3}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                  ></circle>
                  <circle
                    cx={39}
                    cy={39}
                    r={3}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                  ></circle>
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M22 22h8m-4 4v-8"
                  ></path>
                </g>
              </mask>
            </defs>
            <path
              fill="white"
              d="M0 0h48v48H0z"
              mask={`url(#ipSShoppingCart-${item.id})`}
            ></path>
          </motion.svg>
        </motion.button>
      </div>
      <div className="p-2">
        <p className="text-xl">{item.name}</p>
        <p>Ralph Lauren</p>
        <p className="text-md">A${item.price}</p>
      </div>
    </a>
  ));
}
