import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, tech, img, url }: project) => {
  return (
    <div className="p-5 relative rounded-xl shadow-xl shadow-shadowColor group hover:bg-gradient-to-r from-gradientFrom to-gradientTo h-[300px] hover:scale-[1.03] tranistion ease-linear duration-100 sm:h-[400px]">
      <Image
        className="w-full h-[260px] sm:h-[360px] rounded-xl group-hover:opacity-5"
        src={img}
        alt={title}
        placeholder="blur"
        blurDataURL={img}
        fill
        priority
      />

      <div className="hidden group-hover:flex flex-col space-y-2 items-center text-bgColor text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="text-xl font-bold">{title}</p>

        <p>{tech}</p>

        <Link
          href={url}
          className="bg-bgColor text-textColor font-bold rounded-xl cursor-pointer p-2 hover:scale-[1.05] transition ease-linear duration-100"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
