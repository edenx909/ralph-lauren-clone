import { motion } from "framer-motion";

import men from "../assets/images/men.jpeg";
import women from "../assets/images/women.jpeg";
import gift from "../assets/images/gift.jpeg";

export default function Intro() {
  return (
    <div className="font-sarcolenta flex flex-col items-center p-2 pt-10">
      <div className="flex flex-col items-center justify-center space-x-[1px] space-y-[1px] lg:flex-row">
        <div className="px-4 py-4 pr-16">
          <p className="py-2 text-4xl">The World of Luxury</p>
          <p className="px-1 text-lg">Explore collections</p>
        </div>
        <a className="relative" href="/shop/men">
          <img src={men} alt="Men Collection" className="" />
          <p className="absolute bottom-10 right-10 text-2xl tracking-wider text-white">
            Men
          </p>
        </a>
        <a className="relative" href="/shop/women">
          <img src={women} alt="Women Collection" className="" />
          <p className="absolute bottom-10 right-10 text-2xl text-white">
            Women
          </p>
        </a>
        <a className="relative" href="/gift">
          <img src={gift} alt="Gift Cards" className="" />
          <p className="absolute bottom-10 right-10 text-2xl text-white">
            Gift Cards
          </p>
        </a>
      </div>
      <p className="pb-8 pt-14 text-3xl">New Collection</p>
      <motion.a
        className={`flex h-12 items-center rounded-full border font-sans`}
        href="/shop/"
        initial={{
          paddingLeft: "4rem",
          paddingRight: "4rem",
          backgroundColor: "white",
          color: "black",
        }}
        whileHover={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
          backgroundColor: "black",
          color: "white",
          transition: {
            duration: 0.2,
          },
        }}
      >
        Shop All
      </motion.a>
    </div>
  );
}
