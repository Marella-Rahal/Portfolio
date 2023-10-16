"use client";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [pending, setPending] = useState<boolean>(false);

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = e.target as HTMLFormElement;
    setPending(true);
    emailjs
      .sendForm(
        "service_amfb8jq",
        "template_nyq1aab",
        data,
        "4n4v4JF8ZviObE5Cx"
      )
      .then(
        (result) => {
          data.reset();
          setPending(false);
          console.log(result.text);
        },
        (error) => {
          setPending(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="px-10 pt-20 space-y-7">
      <p className="text-effectColor tracking-widest uppercase">contact</p>

      <h2>Get In Touch</h2>

      <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
        {/* left */}
        <div className="flex flex-col p-5 rounded-xl shadow-xl shadow-shadowColor space-y-5">
          <img
            className="rounded-xl hover:scale-[1.03] transition ease-linear duration-150"
            src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MXxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />

          <h2>Marella Rahal</h2>

          <p>Front-End Developer</p>

          <p>
            I am available for freelance , part-time positions or full-time
            positions.
            <br />
            Contact me and let&apos;s talk.
          </p>

          <p className="text-effectColor uppercase">connect with me</p>

          <div className="flex justify-between  pt-3">
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
        </div>

        {/* right */}
        <form
          onSubmit={sendMail}
          className="w-full flex flex-col p-5 rounded-xl shadow-xl shadow-shadowColor space-y-5"
        >
          {/* first row */}
          <div className="flex space-x-3">
            <div className="w-[50%] flex flex-col justify-between space-y-3">
              <label className="font-bold uppercase">Name</label>
              <input
                className="border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none"
                name="name"
                type="text"
                required
              />
            </div>
            <div className="w-[50%] flex flex-col justify-between space-y-3">
              <label className="font-bold uppercase">Phone Number</label>
              <input
                className="border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none"
                name="phone"
                type="tel"
                required
              />
            </div>
          </div>

          {/* second */}
          <div className="flex flex-col space-y-3">
            <label className="font-bold uppercase">Email</label>
            <input
              className="border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none"
              name="email"
              type="email"
              required
            />
          </div>

          {/* third */}
          <div className="flex flex-col space-y-3">
            <label className="font-bold uppercase">subject</label>
            <input
              className="border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none"
              name="subject"
              type="text"
              required
            />
          </div>

          {/* fourth */}
          <div className="flex flex-col space-y-3">
            <label className="font-bold uppercase">message</label>
            <textarea
              className="border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none"
              rows={5}
              name="message"
              required
            />
          </div>

          {/* fifth */}
          <button
            disabled={pending}
            className={`uppercase h-12 ${
              !pending && "hover:bg-gradient-to-br"
            }`}
          >
            {pending ? (
              <div className="flex justify-center gap-2 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            ) : (
              "send message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
