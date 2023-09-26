import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const landingPage = () => {
  return (
    <div>
      <div className="relative shadow-xl shadow-shadowColor">
        <img
          className="h-[350px] w-full opacity-30"
          src="landing-page.png"
          alt=""
        />
        <div className="absolute top-[70%] left-[10%]">
          <h2>Landing Page</h2>
          <p className="mt-2 pl-3">NextJs</p>
        </div>
      </div>

      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row my-20 mx-[10%] justify-between md:items-center">
        {/* left */}
        <div className="md:w-[50%]">
          <p>Project</p>

          <h2>Overview</h2>

          <p className="mt-4">Responsive landing page</p>

          <div className="mt-5">
            <button className="uppercase text-white mr-4 px-5 py-2 hover:scale-[1.1]">
              <Link href="https://responsive-landing-page-five.vercel.app/">
                demo
              </Link>
            </button>

            <button className="uppercase text-white px-5 py-2 hover:scale-[1.1]">
              <Link href="https://github.com/Marella-Rahal/responsive-landing-page">
                code
              </Link>
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col  rounded-xl shadow-xl shadow-shadowColor p-5 space-y-2">
          <p className="font-bold text-center">Technologies</p>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Javascript</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">NextJs</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Tailwind CSS</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <iframe
          src="https://drive.google.com/file/d/13eIYEY9rBvk4bwqZ79pQoBlqugifE4lH/preview"
          allow="autoplay"
          allowFullScreen
          className="w-[80%] aspect-video bg-black"
        ></iframe>
      </div>

      <div className="my-20 mx-[12%] underline hover:text-effectColor">
        <Link href="/#projects">Back</Link>
      </div>
    </div>
  );
};

export default landingPage;
