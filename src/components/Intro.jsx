import { motion } from "framer-motion";

import men from "../assets/images/men.jpeg";
import women from "../assets/images/women.jpeg";
import gift from "../assets/images/gift.jpeg";

export default function Intro() {
  return (
    <div className="mx-8 flex flex-col items-center">
      <div className="m-3 flex flex-col items-center justify-center pb-8 pt-4 md:flex-row">
        <div className="px-4 py-4 pr-16">
          <p className="py-2 text-4xl">The World of Luxury</p>
          <p className="px-1 text-lg">Explore collections</p>
        </div>
        <a className="relative m-2" href="/shop/men">
          <img src={men} alt="Men Collection" className="" />
          <p className="absolute bottom-10 right-10 text-2xl tracking-wider text-white">
            Men
          </p>
        </a>
        <a className="relative m-2" href="/shop/women">
          <img src={women} alt="Women Collection" className="" />
          <p className="absolute bottom-10 right-10 text-2xl text-white">
            Women
          </p>
        </a>
        <a className="relative m-2" href="/gift">
          <img src={gift} alt="Gift Cards" className="" />
          <p className="absolute bottom-10 right-10 text-2xl text-white">
            Gift Cards
          </p>
        </a>
      </div>
      <p className="pb-8 pt-14 text-3xl">New Collection</p>
      <motion.a
        className={`flex h-12 items-center rounded-full border`}
        href="/shop/"
        initial={{ paddingLeft: "4rem", paddingRight: "4rem" }}
        whileHover={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
          backgroundColor: "black",
          color: "white",
          transition: {
            duration: 0.5,
          },
        }}
      >
        Shop All
      </motion.a>
    </div>
  );
}
