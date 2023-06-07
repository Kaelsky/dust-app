import { VisibilityToggler } from "./VisibilityToggler";
import { Form } from "./Form";
import { motion } from "framer-motion";
import { EmptyState } from "./EmptyState";

export function DrawerContent({
  activeTab,
  isToggled,
  toggle,
  onClose,
  onSuccess,
}) {
  return activeTab === 0 ? (
    <>
      <VisibilityToggler isToggled={isToggled} onToggle={toggle} />
      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        animate={isToggled ? { opacity: 1, x: 0 } : undefined}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Form
          handleSuccess={onSuccess}
          isToggled={isToggled}
          onClose={onClose}
        />
      </motion.div>
    </>
  ) : (
    <EmptyState activeTab={activeTab} />
  );
}
