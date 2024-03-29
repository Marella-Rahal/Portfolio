"use client";
import { motion } from "framer-motion";

const ProjectsMotion = ({ children, index }: motionType) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: (index as number) % 2 == 0 ? "-100%" : "100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectsMotion;
