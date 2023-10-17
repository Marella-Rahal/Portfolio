"use client";
import { motion } from "framer-motion";

const AboutRightMotion = ({ children }: motionType) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] my-10 md:mb-10 md:mt-0 rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03] transition ease-linear duration-150 self-center"
    >
      {children}
    </motion.div>
  );
};

export default AboutRightMotion;
