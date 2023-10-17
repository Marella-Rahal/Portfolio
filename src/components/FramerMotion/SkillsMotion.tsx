"use client";
import { motion } from "framer-motion";

const SkillsMotion = ({ children, index }: motionType) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default SkillsMotion;
