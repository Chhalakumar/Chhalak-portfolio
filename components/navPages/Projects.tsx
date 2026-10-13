import { Heart } from "lucide-react";
import React, { JSX, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostgresql, SiSocketdotio, SiStreamlit, SiLangchain } from "react-icons/si";
import { TbBrandGoogleFilled } from "react-icons/tb";

export const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongo: <SiMongodb className="text-green-400" />,
  ts: <SiTypescript className="text-blue-500" />,
  next: <SiNextdotjs className="text-white" />,
  postgres: <SiPostgresql className="text-sky-500" />,
  socketio: <SiSocketdotio className="text-white" />,
  aws: <FaAws className="text-orange-400" />,
  python: <FaPython className="text-blue-400" />,
  langchain: <SiLangchain className="text-green-300" />,
  streamlit: <SiStreamlit className="text-red-400" />,
  gemini: <TbBrandGoogleFilled className="text-blue-500" />,
};

const projects = [
  {
    title: "DevGrams",
    description: "A developer networking platform where developers create profiles, send connection requests and chat in real-time",
    thumbnail: "/project1.png",
    techStack: ["react", "node", "express", "mongo", "socketio", "aws"],
    gradient: "#51fbfb, rgb(13, 1, 60)",
    github: "https://github.com/Chhalakumar",
    live: "https://devgrams.in/",
  },
  {
    title: "AgroConnect",
    description: "A full-stack wholesale crop trading platform with separate farmer and buyer portals, real-time inventory updates and AI crop prediction",
    thumbnail: "/project2.png",
    techStack: ["react", "node", "express", "mongo", "socketio", "gemini"],
    gradient: "#14f195, rgb(13, 1, 60)",
    github: "https://github.com/Chhalakumar",
    live: "https://github.com/Chhalakumar",
  },
  {
    title: "StackAssist AI",
    description: "RAG-based developer knowledge assistant using LangChain, FAISS vector database and Google Gemini for context-aware responses",
    thumbnail: "/project3.png",
    techStack: ["python", "langchain", "streamlit", "gemini"],
    gradient: "#64e, rgb(13, 1, 60)",
    github: "https://github.com/Chhalakumar",
    live: "https://github.com/Chhalakumar",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div id="projects" className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex gap-2 text-[#e8390d]">
          Made with <Heart />
        </p>
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} flex flex-col gap-6 w-full `}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
