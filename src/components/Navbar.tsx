"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const sideNav = () => {
    setNav((prev) => !prev);
  };

  //* tha shadow effect when scrolling the navbar* */
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        className={`fixed z-[100] w-full h-20 flex justify-between items-center px-5 ${
          shadow &&
          "shadow-sm shadow-shadowColor bg-bgColor/50 backdrop-blur-lg"
        }`}
      >
        <Link href={"/#main"}>
          <img src="/logo.svg" className="w-20 md:w-[110px]" />
        </Link>

        <ul className="hidden uppercase space-x-10 md:flex md:flex-row">
          <li className="hover:text-effectColor">
            <Link href="/#main">Home</Link>
          </li>
          <li className="hover:text-effectColor">
            <Link href="/#about">About</Link>
          </li>
          <li className="hover:text-effectColor">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="hover:text-effectColor">
            <Link href="/#projects">projects</Link>
          </li>
          <li className="hover:text-effectColor">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        <div
          onClick={sideNav}
          className="hover:scale-[1.05] transition ease-linear duration-150 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu size={"30px"} />
        </div>
      </div>

      <div
        className={`${
          nav &&
          "fixed z-[100] left-0 top-0 w-full h-screen bg-black/50 md:hidden"
        }`}
      >
        <div
          className={`fixed z-[100] ${
            nav ? "left-0 duration-500" : "left-[-100%] duration-300"
          } top-0 w-[75%] md:w-[60%] lg:w-[45%] h-screen bg-[#ecf0f3] flex flex-col p-7 space-y-8 ease-in overflow-y-auto`}
        >
          <div className="flex justify-between items-center">
            <Link href={"/#main"} onClick={sideNav}>
              <img src="/logo.svg" className="w-20 md:w-[110px]" />
            </Link>

            <div
              onClick={sideNav}
              className="rounded-full shadow-lg shadow-shadowColor p-3 hover:scale-[1.05] transition ease-linear duration-150 cursor-pointer"
            >
              <AiOutlineClose size={"25px"} />
            </div>
          </div>

          <p className="text-xl pb-5 border-gray-300 border-b-[2px]">
            Let&apos;s build something legendary together
          </p>

          <ul className="uppercase flex flex-col space-y-5">
            <li className="hover:text-effectColor" onClick={sideNav}>
              <Link href="/#main">Home</Link>
            </li>
            <li className="hover:text-effectColor" onClick={sideNav}>
              <Link href="/#about">about</Link>
            </li>
            <li className="hover:text-effectColor" onClick={sideNav}>
              <Link href="/#skills">skills</Link>
            </li>
            <li className="hover:text-effectColor" onClick={sideNav}>
              <Link href="/#projects">projects</Link>
            </li>
            <li className="hover:text-effectColor" onClick={sideNav}>
              <Link href="/#contact">contact</Link>
            </li>
          </ul>

          <div className="pt-[30px] flex flex-col space-y-5">
            <p className="text-effectColor uppercase">Let&apos;s Connect</p>

            <div id="connectIcons" className="flex space-x-2">
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
            </div>

            {/* //todo some styling for connect menu  for mobile devices*/}
            <style jsx>
              {`
                @media (max-width: 330px) {
                  #connectIcons {
                    margin-inline: -27px;
                    justify-content: space-between;
                  }
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
