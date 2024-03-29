"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div
      id="main"
      className="pt-28 pb-10 space-y-3 text-center overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="uppercase p-3"
      >
        Let&apos;s build somthing together
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="p-3"
      >
        Hi,I&apos;m
        <span className="text-effectColor"> Marella</span>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="p-3"
      >
        A Front-End Web Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto p-3"
      >
        I&apos;m a web front-end developer with a passion for crafting engaging
        and interactive user experiences. My journey in web development started
        with learning various technologies and frameworks that empower modern
        web applications. Currently, I&apos;m focused on mastering Next.js to
        become a full-stack developer. The versatility and performance
        enhancements that Next.js offers are what excite me as I aim to create
        seamless, server-rendered applications.
        <br />
        Aside from my web development journey, I&apos;m deeply intrigued by the
        world of machine learning and deep learning. The potential to build
        intelligent systems that can learn and adapt is truly captivating to me.
        I believe that combining my web development skills with insights from
        machine learning will open doors to innovative and dynamic projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center space-x-5 pt-3"
      >
        <div className="hover:scale-[1.1] tranistion ease-linear duration-100 cursor-pointer rounded-full shadow-lg shadow-shadowColor p-3">
          <Link href="https://www.linkedin.com/in/marella-rahal-bb4a60224/">
            <FaLinkedinIn size={"20px"} />
          </Link>
        </div>

        <div className="hover:scale-[1.1] tranistion ease-linear duration-100 cursor-pointer rounded-full shadow-lg shadow-shadowColor p-3">
          <Link href="https://github.com/Marella-Rahal">
            <BsGithub size={"20px"} />
          </Link>
        </div>

        <div className="hover:scale-[1.1] tranistion ease-linear duration-100 cursor-pointer rounded-full shadow-lg shadow-shadowColor p-3">
          <Link href="sms:+963937-720-508">
            <AiOutlineMail size={"20px"} />
          </Link>
        </div>

        <div className="hover:scale-[1.1] tranistion ease-linear duration-100 cursor-pointer rounded-full shadow-lg shadow-shadowColor p-3">
          <Link href="tel:+963937-720-508">
            <BsFillPersonLinesFill size={"20px"} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
