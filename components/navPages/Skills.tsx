"use client";
import { FaGitAlt, FaGithub, FaReact, FaPython, FaAws, FaDocker } from "react-icons/fa6";
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNodedotjs, SiTypescript, SiPostgresql, SiRedis, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiFastapi, SiLangchain, SiNginx } from "react-icons/si";
import { TbBrandCpp, TbBrandGoogleFilled } from "react-icons/tb";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
    // Frontend
    { name: "React.js", icon: <FaReact />, hoverColor: "group-hover:text-cyan-300" },
    { name: "Next.js", icon: <RiNextjsFill />, hoverColor: "group-hover:none" },
    { name: "TypeScript", icon: <SiTypescript />, hoverColor: "group-hover:text-sky-500" },
    { name: "JavaScript", icon: <IoLogoJavascript />, hoverColor: "group-hover:text-yellow-400" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill />, hoverColor: "group-hover:text-cyan-400" },
    { name: "HTML 5", icon: <RiHtml5Fill />, hoverColor: "group-hover:text-orange-500" },
    { name: "CSS", icon: <RiCss3Fill />, hoverColor: "group-hover:text-blue-500" },
    
    // Backend & APIs
    { name: "Node.js", icon: <SiNodedotjs />, hoverColor: "group-hover:text-green-600" },
    { name: "Express.js", icon: <SiExpress />, hoverColor: "group-hover:text-gray-500" },
    { name: "FastAPI", icon: <SiFastapi />, hoverColor: "group-hover:text-teal-500" },
    { name: "Python", icon: <FaPython />, hoverColor: "group-hover:text-blue-400" },
    
    // Databases
    { name: "MongoDB", icon: <SiMongodb />, hoverColor: "group-hover:text-green-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, hoverColor: "group-hover:text-sky-500" },
    { name: "Redis", icon: <SiRedis />, hoverColor: "group-hover:text-red-500" },
    
    // AI/ML & GenAI
    { name: "PyTorch", icon: <SiPytorch />, hoverColor: "group-hover:text-orange-500" },
    { name: "scikit-learn", icon: <SiScikitlearn />, hoverColor: "group-hover:text-orange-400" },
    { name: "NumPy", icon: <SiNumpy />, hoverColor: "group-hover:text-blue-500" },
    { name: "pandas", icon: <SiPandas />, hoverColor: "group-hover:text-purple-500" },
    { name: "LangChain", icon: <SiLangchain />, hoverColor: "group-hover:text-green-300" },
    { name: "Gemini AI", icon: <TbBrandGoogleFilled />, hoverColor: "group-hover:text-blue-500" },
    
    // Cloud & Tools
    { name: "AWS", icon: <FaAws />, hoverColor: "group-hover:text-orange-400" },
    { name: "Docker", icon: <FaDocker />, hoverColor: "group-hover:text-blue-500" },
    { name: "Nginx", icon: <SiNginx />, hoverColor: "group-hover:text-green-500" },
    { name: "Git", icon: <FaGitAlt />, hoverColor: "group-hover:text-orange-600" },
    { name: "GitHub", icon: <FaGithub />, hoverColor: "group-hover:text-purple-500" },
    
    // Programming
    { name: "C++", icon: <TbBrandCpp />, hoverColor: "group-hover:text-blue-600" },
];

export default function SkillsSection() {
    return (
        <section id="skills" className={` ${jetbrainsMono.className} flex flex-col gap-10 py-16 px-4`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My Skills
                </h1>
            </div>
            <div className="flex flex-wrap max-w-4xl mx-auto gap-6 items-center justify-center">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}
