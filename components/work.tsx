"use client";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// Define project structure interface
interface Project {
  num: string;
  category: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

// List of projects
const projects: Project[] = [
  {
    num: "01",
    category: "FullStack",
    description: "A full-stack web application built using React, Node.js, and MongoDB.",
    stack: [{ name: "JavaScript" }, { name: "React" }, { name: "Node.js" }],
    image: "/assets/hero.png",
    live: "https://example.com",
    github: "https://github.com/example1",
  },
  {
    num: "02",
    category: "Frontend",
    description: "A responsive e-commerce site built with React and TailwindCSS.",
    stack: [{ name: "JavaScript" }, { name: "React" }, { name: "TailwindCSS" }],
    image: "/assets/hero.png",
    live: "https://example.com",
    github: "https://github.com/example2",
  },
  // More projects...
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [project, setProject] = useState<Project>(projects[0]);

  // Function for next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setProject(projects[(currentIndex + 1) % projects.length]);
  };

  // Function for previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setProject(projects[(currentIndex - 1 + projects.length) % projects.length]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6, ease: "easeInOut" } }}
      className="min-h-screen py-12 bg-white flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-12">
          {/* Left Section: Project Details */}
          <div className="w-full xl:w-[50%] text-black">
            <div className="flex flex-col gap-6">
              {/* Project Number */}
              <div className="text-5xl font-extrabold">{project.num}</div>

              {/* Project Title */}
              <h2 className="text-3xl font-semibold capitalize">{project.category} Project</h2>

              {/* Project Description */}
              <p className="text-lg">{project.description}</p>

              {/* Tech Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-blue-500">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-6">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-14 h-14 flex justify-center items-center rounded-full hover:bg-blue-500 transition-all">
                        <BsArrowUpRight size={24} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-14 h-14 flex justify-center items-center rounded-full hover:bg-blue-500 transition-all">
                        <BsGithub size={24} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Project Image Slider */}
          <div className="w-full xl:w-[50%] relative">
            <div className="relative group h-[520px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={project.image}
                alt={`Project ${project.num}`}
                layout="fill"
                objectFit="cover"
                className="transition-all transform group-hover:scale-110"
              />
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white w-[50px] h-[50px] flex justify-center items-center rounded-full transition-all"
                onClick={prevSlide}
              >
                <span className="text-2xl">&lt;</span>
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white w-[50px] h-[50px] flex justify-center items-center rounded-full transition-all"
                onClick={nextSlide}
              >
                <span className="text-2xl">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
