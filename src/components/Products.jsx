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
      <div className="m-2 flex justify-center p-2">
        <button
          className="mx-auto h-12 w-3/5 rounded-full border px-6"
          onClick={handleSort}
        >
          Sort {sort === "asc" ? "▲" : sort === "desc" ? "▼" : ""}
        </button>
      </div>
      <div className="flex flex-col p-2">
        <div
          className={`${location.pathname === "/shop" ? "flex justify-evenly" : "hidden"} `}
        >
          <button
            className="h-12 rounded-full border px-6"
            onClick={() => setFilter("")}
          >
            All
          </button>
          <button
            className="h-12 rounded-full border px-6"
            onClick={() => setFilter("men")}
          >
            Men
          </button>
          <button
            className="h-12 rounded-full border px-6"
            onClick={() => setFilter("women")}
          >
            Women
          </button>
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
            className="z-10 mr-1 origin-right rounded-xl bg-white px-2 text-sm text-black"
            initial={{ scale: 0 }}
            animate={{ scale: wishlistClick === item.id ? 1 : 0 }}
          >
            Added to Wishlist
          </motion.span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.1em"
            height="1.1em"
            viewBox="0 0 48 48"
          >
            <defs>
              <mask id="ipSLoveAndHelp0">
                <g
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                >
                  <path
                    fill="#fff"
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
              mask="url(#ipSLoveAndHelp0)"
            ></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m3.72 2.788l.55 1.862h14.654c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 1 1 1.438-.425M13.25 8a.75.75 0 0 0-1.5 0v1.25H10.5a.75.75 0 0 0 0 1.5h1.25V12a.75.75 0 0 0 1.5 0v-1.25h1.25a.75.75 0 0 0 0-1.5h-1.25zM8.5 17.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m8 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"
            ></path>
          </svg>
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
