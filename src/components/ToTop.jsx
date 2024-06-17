import Lottie from "lottie-react";
import toUP from "../assets/animation/to-up.json";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed bottom-8 right-4 lg:right-8 z-50">
      <AnimatePresence>
        {showBtn && (
          <motion.button
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            exit={{ x: 100 }}
            whileHover={{ scale: 1.1, y: -10 }}
            className="bg-white w-8 md:w-14 opacity-40 hover:opacity-100 md:opacity-100 aspect-square rounded-full outline outline-offset-2
        transition-all hover:outline-hover-color"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Lottie animationData={toUP} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToTop;
