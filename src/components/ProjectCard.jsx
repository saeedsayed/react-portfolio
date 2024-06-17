import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaLink,
  FaGithub,
} from "react-icons/fa6";
import { SiAxios, SiTailwindcss } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";
import { TbBrandRedux, TbCloudDataConnection } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="border border-hover-color rounded-lg overflow-hidden flex flex-col shadow-lg select-none"
    >
      {/*==========
        card image 👇
      ============*/}
      <div
        style={{ backgroundImage: `url("${project.thumbnails}")` }}
        className="aspect-video bg-cover bg-center rounded-md"
      />
      {/* ===========
                card contents 👇
            =============== */}
      <div className="px-4  pt-6 flex-1 flex flex-col justify-between  bg-bg-nav">
        <div className="h-36 overflow-auto scroll-bar-slim  transition-all">
          <h3 className="text-xl">{project.name}</h3>
          <h3 className="text-lg my-1">technologies:</h3>
          {project.descrption}
          <ul className="ps-5">
            {project.technologies.map((tech, i) => (
              <li key={i} className="flex items-center gap-3">
                - {tech}
                {tech == "HTML5" && <FaHtml5 className="text-orange-600" />}
                {tech == "CSS3" && <FaCss3 className="text-blue-600" />}
                {tech == "Bootstrap" && (
                  <FaBootstrap className="text-violet-600" />
                )}
                {tech == "JS" && <FaJs className="text-yellow-500" />}
                {tech == "axios" && (
                  <SiAxios className="text-blue-900 dark:text-white" />
                )}
                {tech == "responsive-design" && (
                  <CiMobile3 className="text-blue-900 text-2xl dark:text-white" />
                )}
                {tech == "ReactJS" && (
                  <FaReact className="text-blue-900 text-2xl" />
                )}
                {tech == "Redux" && (
                  <TbBrandRedux className="text-purple-700 text-2xl" />
                )}
                {tech == "Api" && (
                  <TbCloudDataConnection className="text-gray-700 dark:text-white text-2xl" />
                )}
                {tech == "Tailwind" && (
                  <SiTailwindcss className="text-blue-500 text-2xl" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-3 -mx-4 gap-px">
          <a
            className="w-1/2 hover:w-full flex justify-center items-center text-2xl bg-[var(--hover-color)] py-3 hover:opacity-80 transition-all duration-300"
            target="_plank"
            href={project.repo}
          >
            <FaGithub />
          </a>
          <a
            className="w-1/2 hover:w-full flex justify-center items-center text-2xl bg-[var(--hover-color)] py-3 hover:opacity-80 transition-all duration-300"
            target="_plank"
            href={project.url}
          >
            <FaLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
