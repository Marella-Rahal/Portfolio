"use client";
import { motion } from "framer-motion";

const ProjectsMotion = ({ children, index }: motionType) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 == 0 ? -500 : 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectsMotion;
