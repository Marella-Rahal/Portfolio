import { skills } from "@/data/data";
import Image from "next/image";
import SkillsMotion from "./FramerMotion/SkillsMotion";
const Skills = () => {
  return (
    <div id="skills" className="px-10 pt-20 space-y-7 select-none">
      <p className="text-effectColor tracking-widest uppercase">skills</p>
      <h2>What I Can Do</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((one, index) => {
          return (
            <SkillsMotion key={index}>
              <div className="p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03] transition ease-linear duration-150">
                <Image
                  src={one.url}
                  alt={one.name}
                  width={55}
                  height={55}
                  placeholder="blur"
                  blurDataURL={one.url}
                  priority
                />
                <h3 className="text-center">{one.name}</h3>
              </div>
            </SkillsMotion>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
