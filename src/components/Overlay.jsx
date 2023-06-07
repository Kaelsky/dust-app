import { motion, AnimatePresence } from "framer-motion";

export function Overlay({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full bg-black pointer-events-none z-20"
        />
      ) : null}
    </AnimatePresence>
  );
}
