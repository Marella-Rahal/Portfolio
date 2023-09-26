import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const shoppingo = () => {
  return (
    <div>
      <div className="relative shadow-xl shadow-shadowColor">
        <img
          className="h-[350px] w-full opacity-30"
          src="shoppingo-2.png"
          alt=""
        />
        <div className="absolute top-[70%] left-[10%]">
          <h2>Shoppingo</h2>
          <p className="mt-2 pl-3">NextJS</p>
        </div>
      </div>

      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row my-20 mx-[10%] justify-between md:items-center">
        {/* left */}
        <div className="md:w-[50%]">
          <p>Project</p>

          <h2>Overview</h2>

          <p className="mt-4">
            Introducing a multi-merchant online shopping platform where users
            can seamlessly explore and rate a diverse range of products. In
            instances where multiple merchants offer the same product, the
            platform optimizes user experience by showcasing the most economical
            option on the products interface.
            <br />
            Upon selecting a product, details of this product will be displayed,
            in addition to a map containing all merchants who sell this product,
            whether this merchant is the closest to the user or the cheapest, or
            sells the product with an offer or otheres. At the same time,
            products similar to this product will be displayed based on the
            Recommendation System, which uses the SVD model.
            <br />
            Users can also complete the product purchase process through the
            Checkout interface, which processes purchase orders that accept
            payment on receipt and purchase orders that accept payment through
            Wepay.
            <br />
            Users seeking to expand their horizons can request merchant status.
            Admin approval grants them the ability to add, delete, and modify
            their product while also tracking their purchase requests from
            customers.
            <br />
            These features are fundamental, though the platform offers an array
            of additional services to enhance the user experience.
            <br />
            <br />
            The backend has been developed by my teammate using Node.js and
            MongoDB, with a distinct approach from Next.js, operating
            independently.
          </p>

          <div className="mt-5">
            <button className="uppercase text-white mr-4 px-5 py-2 hover:scale-[1.1]">
              <Link href="https://shoppingo-marella-rahal.vercel.app/">
                demo
              </Link>
            </button>

            <button className="uppercase text-white px-5 py-2 hover:scale-[1.1]">
              <Link href="https://github.com/Marella-Rahal/shoppingo-ui">
                code
              </Link>
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col  rounded-xl shadow-xl shadow-shadowColor p-5 space-y-2 select-none">
          <p className="font-bold text-center">Technologies</p>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">CSS</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Tailwind CSS</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Javascript</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">ReactJS</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">NextJS</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">ReduxJS-Toolkit</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Next-Redux-Wrapper</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Axios</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Framer-Motion</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">MapBox Gl</p>
          </div>

          <div className="flex items-center">
            <RiRadioButtonFill />
            <p className="ml-2">Recharts</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <iframe
          src="https://drive.google.com/file/d/10U42XshuHB-f4sqOh8Hq0YQlIPKGTLm1/preview"
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

export default shoppingo;
