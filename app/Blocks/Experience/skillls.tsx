"use client";
import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiC,
} from "react-icons/si";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  Icon: IconType;
  percent: number;
};

const skills: Skill[] = [
  { name: "C", Icon: SiC, percent: 90 },
  { name: "C++", Icon: SiCplusplus, percent: 90 },
  { name: "JavaScript", Icon: SiJavascript, percent: 80 },
  { name: "TypeScript", Icon: SiTypescript, percent: 80 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, percent: 70 },
  { name: "React", Icon: SiReact, percent: 80 },
  { name: "Next.js", Icon: SiNextdotjs, percent: 80 },
  { name: "Python", Icon: SiPython, percent: 85 },
  { name: "Java", Icon: FaJava, percent: 75 },
  { name: "MySQL", Icon: SiMysql, percent: 90 },
  { name: "MongoDB", Icon: SiMongodb, percent: 85 },
  { name: "Docker", Icon: SiDocker, percent: 60 },
];

const Skills = () => {
  return (
    <div className="flex flex-col mt-4 gap-6" id="skills">
      <h2 className="text-2xl font-bold text-center mb-6 mt-2">My Skills</h2>
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto">
          {skills.map(({ name, Icon, percent }) => (
            <div
              key={name}
              className="rounded-md bg-gradient-to-r dark:from-gray-600 dark:to-pink-500 p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-2">
                <div className="text-xl mr-2 text-pink-700">
                  <Icon />
                </div>
                <h3 className="text-base font-medium">{name}</h3>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-blue-700">
                <span>Proficiency</span>
                <span>{percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
