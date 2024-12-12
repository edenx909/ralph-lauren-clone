import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import hero from "../assets/hero.jpeg";
import Hamburger from "./macros/Hamburger";

// eslint-disable-next-line react/prop-types
export default function Nav({ open, setOpen }) {
  const location = useLocation();
  const [home, setHome] = useState();
  useEffect(() => {
    location.pathname === "/" ? setHome(true) : setHome(false);
  }, [location.pathname]);

  return (
    <div
      className={`${home ? "h-screen" : "h-auto"} relative top-0 bg-black bg-cover bg-center p-12 text-white`}
      style={{
        backgroundImage: `url(${home ? hero : ""})`,
      }}
    >
      <div className="flex items-center justify-start font-light uppercase">
        <div>
          <ul className="flex items-center justify-center space-x-6">
            <li className="pr-8 text-xl uppercase tracking-widest">
              <a href="/">Ralph Lauren</a>
            </li>
            <Hamburger open={open} setOpen={setOpen} />
            <div className="hidden items-center justify-center space-x-6 md:flex">
              <motion.a
                href="/shop/men"
                className="relative inline-block"
                whileHover={{ color: "#fff" }}
              >
                <span>Men</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: location.pathname === "/shop/men" ? 1.3 : 0,
                  }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/shop/women"
                className="relative inline-block"
                whileHover={{ color: "#fff" }}
              >
                <span>Women</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: location.pathname === "/shop/women" ? 1.3 : 0,
                  }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/gift"
                className="relative inline-block"
                whileHover={{ color: "#fff" }}
              >
                <span>Gift</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: location.pathname === "/gift" ? 1.3 : 0,
                  }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/shop"
                className="relative inline-block"
                whileHover={{ color: "#fff" }}
              >
                <span>Shop</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: location.pathname === "/shop" ? 1.3 : 0,
                  }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </ul>
        </div>
        <div className="absolute right-0 hidden items-center justify-center space-x-6 pr-16 md:flex">
          <a href="/account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="white" strokeWidth={1.5}>
                <circle cx={12} cy={6} r={4}></circle>
                <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"></path>
              </g>
            </svg>
          </a>
          <a href="/wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11m2.222 5.43c-.23.08-.492.33-.492.907c0 .214.141.545.51.971c.348.403.809.786 1.227 1.093c.226.166.333.242.42.288c.054.029.069.029.093.029c.025 0 .04 0 .094-.03a4 4 0 0 0 .42-.287c.418-.307.878-.69 1.227-1.093c.368-.426.51-.757.51-.971c0-.576-.263-.827-.493-.907c-.25-.088-.714-.06-1.24.443a.75.75 0 0 1-1.037 0c-.525-.503-.989-.531-1.239-.443M12 11.234c-.716-.471-1.525-.616-2.254-.36c-.933.327-1.496 1.226-1.496 2.323c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321l.07.052c.352.26.752.556 1.331.556c.58 0 .98-.296 1.33-.556l.07-.052c.461-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953c0-1.097-.562-1.996-1.495-2.323c-.73-.256-1.539-.111-2.255.36"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  stroke="white"
                  strokeWidth={1.5}
                  d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"
                ></path>
                <circle cx={15} cy={9} r={1} fill="white"></circle>
                <circle cx={9} cy={9} r={1} fill="white"></circle>
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  d="M9 6V5a3 3 0 1 1 6 0v1"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <span
        className={`flex ${home ? "absolute" : "hidden"} bottom-10 right-10`}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          initial={{ y: -5, rotate: 180 }}
          animate={{ y: [5, -5, 5] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <g fill="none" stroke="white" strokeLinecap="round" strokeWidth={1.5}>
            <path strokeMiterlimit={10} d="M12 4v16"></path>
            <path
              strokeLinejoin="round"
              d="M19.66 11.033L13.089 4.46a1.53 1.53 0 0 0-2.176 0L4.34 11.033"
            ></path>
          </g>
        </motion.svg>
      </span>
    </div>
  );
}
