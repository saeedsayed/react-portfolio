import React from "react";
import { FaLink, FaGithub } from "react-icons/fa6";
const ProjectCard = ({ project }) => {
  return (
    <div className="border border-hover-color rounded-lg overflow-hidden flex flex-col shadow-lg select-none">
      {/*==========
        card image 👇
      ============*/}
      <div
        style={{ backgroundImage: `url("${project.image}")` }}
        className="aspect-video bg-cover bg-center rounded-md"
      />
      {/* ===========
                card contents 👇
            =============== */}
      <div className="px-4  pt-6 flex-1 flex flex-col justify-between  bg-bg-nav">
        <div className="h-36 overflow-auto scroll-bar-slim  transition-all">
          <h3 className="text-xl">{project.name}</h3>
          <h3 className="text-lg my-1">technologies:</h3>
          {/* {project.descrption} */}
          <ul className="ps-5">
            {project.techStack.map((tech, i) => (
              <li key={i} className="flex items-center gap-3">
                - {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-3 -mx-4 gap-px">
          <a
            className="w-1/2 hover:w-full flex justify-center items-center text-2xl bg-[var(--hover-color)] py-3 hover:opacity-80 transition-all duration-300"
            target="_plank"
            title="Repository"
            href={project.repository}
          >
            <FaGithub />
          </a>
          <a
            className="w-1/2 hover:w-full flex justify-center items-center text-2xl bg-[var(--hover-color)] py-3 hover:opacity-80 transition-all duration-300"
            target="_plank"
            title="demo"
            href={project.link}
          >
            <FaLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
