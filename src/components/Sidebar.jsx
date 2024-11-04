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
          transition={{ duration: 0.6 }}
          exit={{ x: "200%" }}
        >
          <svg width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" className="bg-black" />
          </svg>
          <div className="absolute inset-0 z-50 flex h-full w-full flex-col p-4">
            <ul className="mt-44 p-5 text-white">
              <li className="flex flex-col space-y-6 p-8 text-2xl">
                <motion.a
                  href="/shop/men"
                  className="relative inline-block"
                  whileHover={{ color: "#fff" }}
                >
                  <span>Men</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === "/shop/men" ? 1.0 : 0,
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
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === "/shop/women" ? 1.0 : 0,
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
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === "/gift" ? 1.0 : 0,
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
                  <span>Shop All</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === "/shop" ? 1.0 : 0,
                    }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="/account"
                  className="relative inline-block"
                  whileHover={{ color: "#fff" }}
                >
                  <span>Your Account</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === "/account" ? 1.0 : 0,
                    }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="/wishlist"
                  className="relative inline-block"
                  whileHover={{ color: "#fff" }}
                >
                  <span>Wishlist</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === "/wishlist" ? 1.0 : 0,
                    }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="/cart"
                  className="relative inline-block"
                  whileHover={{ color: "#fff" }}
                >
                  <span>Cart</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === "/cart" ? 1.0 : 0,
                    }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
