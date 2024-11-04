import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../contexts/Cart";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  return (
    <div className="flex flex-col md:flex-row">
      {cart.length === 0 ? (
        <div className="relative flex items-center justify-start border-b p-4">
          <p className="p-4 text-xl">Your Cart is Empty!</p>
        </div>
      ) : (
        <>
          <div className="mx-8 flex flex-col md:w-3/4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                  key={item.id}
                  className="relative flex w-full items-center justify-start border-b-[1px] p-4"
                >
                  <img src={item.img} className="m-4 h-80" alt={item.name} />
                  <div>
                    <p className="text-lg md:text-2xl">{item.name}</p>
                    <br /> x{item.quantity}
                    <br /> A${item.price}
                  </div>
                  <motion.button
                    className="absolute right-8 top-8"
                    onClick={() => removeFromCart(item.id)}
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
                        d="M22.73 22.73L2.77 2.77L2 2l-.73-.73L0 2.54l4.39 4.39l2.21 4.66l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h7.46l1.38 1.38A1.997 1.997 0 0 0 17 22c.67 0 1.26-.33 1.62-.84L21.46 24zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h2.36l2 2zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H6.54zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2"
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
              {cart.reduce(
                (total, item) => total + item.price * (item.quantity || 1),
                0,
              )}
            </p>
            <button className="my-4 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
