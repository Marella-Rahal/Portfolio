"use client";
import { motion } from "framer-motion";

const LeftMotion = ({ children }: motionType) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default LeftMotion;
