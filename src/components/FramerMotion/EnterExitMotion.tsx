"use client";
import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

const EnterExitMotion = ({ children }: motionType) => {
  //   const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        // key={path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default EnterExitMotion;
