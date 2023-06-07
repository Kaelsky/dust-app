import { XMarkIcon } from "@heroicons/react/24/solid";
import { Tabs } from "./Tabs";
import { useState } from "react";
import { useToggle } from "../hooks/useToggle";
import { DrawerContent } from "./DrawerContent";
import { motion, AnimatePresence } from "framer-motion";

export function Drawer({ isOpen, onClose, onSuccess }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggled, toggle] = useToggle(false);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute w-screen md:w-1/2 lg:w-1/3 right-0 h-screen bg-grey text-white px-6 py-8 shadow-lg z-20"
        >
          <button
            className="absolute right-6 top-6 peer hover:scale-110 active:scale-90"
            onClick={onClose}
          >
            <div className="rounded-md border border-gray-300 bg-white bg-opacity-10 p-1">
              <XMarkIcon className="text-white h-4 w-4" />
            </div>
          </button>

          <div className="text-lg">Header</div>

          <Tabs
            className="pt-4"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <DrawerContent
            activeTab={activeTab}
            onSuccess={onSuccess}
            onClose={onClose}
            isToggled={isToggled}
            toggle={toggle}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
