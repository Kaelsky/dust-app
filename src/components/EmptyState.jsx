import { motion } from "framer-motion";

export function EmptyState({ activeTab }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="py-10 flex justify-center items-center flex-col animate-shake">
        <div className="ml-4 text-8xl mb-4">🤷‍♂️</div>
        <div>Nothing to see in Tab {activeTab + 1}</div>
      </div>
    </motion.div>
  );
}
