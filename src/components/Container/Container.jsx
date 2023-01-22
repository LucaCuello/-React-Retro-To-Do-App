import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Container = ({ classList, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          duration: 0.2,
        }}
        className={classList}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
