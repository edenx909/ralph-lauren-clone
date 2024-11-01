import { AnimatePresence, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="fixed right-0 z-40 h-full w-full md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: open ? 0 : "100%" }}
          transition={{ duration: 0.6, staggerChildren: true }}
          exit={{ x: "200%" }}
        >
          <svg width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" className="bg-black" />
          </svg>
          <div className="absolute inset-0 z-50 flex h-full w-full flex-col p-4">
            <ul className="mt-44 p-5 text-white">
              <li className="flex flex-col space-y-6 p-8 text-2xl">
                <a href="/shop/men">Men</a>
                <a href="/shop/women">Women</a>
                <a href="/gift">Gift</a>
                <a href="/shop">Shop All</a>
                <a href="/account">Your Account</a>
                <a href="/wishlist">Wishlist</a>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
