import { motion } from "framer-motion";
import { useEffect } from "react";

const statusStyle = {
  true: "via-green bg-pos-100",
  false: "",
};

export function Welcome({ setIsOpen, setIsSuccess, isSuccess, className }) {
  useEffect(() => {
    if (!isSuccess) return;
    // Here we're resetting the isSuccess value after 3s
    setTimeout(() => setIsSuccess(false), 3000);
  }, [isSuccess, setIsSuccess]);

  return (
    <div
      className={`flex justify-center items-center flex-col ${className} z-10`}
    >
      <motion.div
        initial={
          isSuccess ? { opacity: 0, x: 0, y: 0 } : { opacity: 0, x: 0, y: -40 }
        }
        animate={
          isSuccess ? { opacity: 1, x: 20, y: 0 } : { opacity: 1, x: 0, y: 0 }
        }
        transition={{
          type: "spring",
          bounce: isSuccess ? 0.8 : 0,
        }}
      >
        <h1
          className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-green via-orange to-primary bg-size-200 bg-pos-0 transition-all duration-500 ${statusStyle[isSuccess]}`}
        >
          {isSuccess ? "🎉 Correct !" : "Welcome"}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.3,
        }}
      >
        <h2 className="text-4xl text-white font-bold font">Let's start</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.8,
        }}
      >
        <button className="btn-primary mt-12" onClick={() => setIsOpen(true)}>
          Open
        </button>
      </motion.div>
    </div>
  );
}
