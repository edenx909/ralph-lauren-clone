import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Hamburger = ({ open, setOpen }) => {
  const rotateHamburg = () => {
    setOpen(!open);
  };
  return (
    <div
      onClick={rotateHamburg}
      className="fixed right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full md:hidden"
    >
      <motion.div
        className={`flex h-2 flex-col ${open ? "justify-center" : "justify-between"} `}
        whileTap={{
          x: 3,
          y: 3,
          scale: 0.2,
        }}
        transition={{ duration: 0.1, stiffness: 0.1, damping: 0.2 }}
      >
        <div
          className={`h-1/6 w-7 rounded-xl bg-slate-300 duration-500 ease-out ${open ? "rotate-45" : ""} `}
        ></div>
        <div
          className={`h-1/6 w-7 rounded-xl bg-slate-300 duration-500 ease-out ${open ? "-rotate-45" : ""}`}
        ></div>
      </motion.div>
    </div>
  );
};

export default Hamburger;
