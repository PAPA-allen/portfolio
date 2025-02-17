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
  live?: string;
  github?: string;
}

// List of projects
const projects: Project[] = [
    {
        num: "01",
        category: "FullStack",
        description: "A video communication platform built to facilitate seamless client interactions. The app allows users to engage in video calls in real-time, making it easy to collaborate remotely. Built with TypeScript, Node.js, and the MeetStream API for video streaming functionality.",
        stack: [{ name: "TypeScript" }, { name: "Node.js" }, { name: "MeetStream" }],
        image: "/project1.png",
        live: "https://meetstream-three.vercel.app/",
        github: "https://github.com/PAPA-allen/meetstream",
      },  
      {
        num: "02",
        category: "Frontend",
        description: "A mobile application designed for parents to manage and track their wards' performance. Built with React Native for the mobile app and styled with TailwindCSS, the app provides a seamless experience for monitoring academic progress, assignments, and notifications.",
        stack: [{ name: "React Native" }],
        image: "/project2.png",
       
    },
    {
        num: "03",
        category: "Frontend",
        description: "A web application built to assist students in making learning easier. The app provides a variety of features such as resource management, progress tracking, and interactive study tools. Built with React.js for the frontend, Redux for state management, and styled with TailwindCSS, the app ensures a smooth and engaging user experience.",
        stack: [{ name: "React.js" }, { name: "Redux" }, { name: "TailwindCSS" }, { name: "React Query" }],
        image: "/project3.png",
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "Mobile",
        description: "A mobile application developed for a client to manage their small laundry shop. The app allows shop owners to efficiently manage customer orders, track laundry progress, and handle payments. Built with React Native for cross-platform support and TailwindCSS for responsive design, it offers a simple yet effective solution for streamlining laundry operations and improving customer satisfaction.",
        stack: [
          { name: "React Native" },
          { name: "TailwindCSS" },
          { name: "Firebase" },      // Added Firebase for authentication and data storage
          { name: "React Navigation" } // Used for app navigation
        ],
        image: "/project4.png",
        live: "",
        github: "",
    },
    {
        num: "05",
        category: "FullStack",
        description: "StudyHub is an interactive study platform designed for students to access educational videos and learning resources. The platform allows students to watch videos, track their progress, and interact with instructors in real time. Built with **Next.js** for server-side rendering, **Redux Toolkit** for efficient state management, and styled with **TailwindCSS**, StudyHub offers a fast, responsive, and engaging experience. The backend is powered by **Express.js** and integrates real-time communication via **Socket.IO**. Redis is used for caching, while **Paystack** handles payments and **Cloudinary** is used for media storage and management.",
        stack: [
          { name: "Next.js" },
          { name: "Redux Toolkit" },
          { name: "Express.js" },
          { name: "Socket.IO" },
          { name: "Redis" },
        
        ],
        image: "/project5.png",
        live: "",
        github: "",
    },
    {
        num: "06",
        category: "Frontend",
        description: "The Admin Dashboard for StudyHub provides a powerful interface to manage and customize every aspect of the platform. From the layout to the footer, the admin can easily modify content, update user data, and oversee platform performance. Designed with a focus on usability and clean design, the dashboard is built using **React.js**, **Redux Toolkit**, and styled with **TailwindCSS**. It integrates a smooth user experience with interactive features such as drag-and-drop components, charts, and real-time updates, allowing admins to manage the platform efficiently.",
        stack: [
          { name: "Next.js" },
          { name: "Redux Toolkit" },
          { name: "Chart.js" },      // Added for 
          { name: "React DnD" },     // Added for drag-and-drop functionality
          { name: "Socket.IO" }      // For real-time updates on the platform's status
        ],
        image: "/project6.png",
        live: "",
        github: "",
    },
    {
        num: "07",
        category: "FullStack",
        description: "The Bus Transit Dashboard is a comprehensive management system for overseeing bus routes, scheduling, and user activity in a company’s transit system. Built with **PHP** for the backend, the dashboard allows administrators to manage bus routes, track users, and view analytics in real-time. The frontend is developed using **React.js** and styled with **TailwindCSS** to ensure a clean and responsive interface. Real-time updates and notifications are handled with **Socket.IO**, while detailed transit data and reports are visualized using **Chart.js**.",
        stack: [
          { name: "PHP" },             // PHP for backend logic and API handling
          { name: "React.js" },        // React.js for the frontend dashboard interface
          { name: "TailwindCSS" },     // TailwindCSS for styling the frontend
          { name: "Socket.IO" },      // For real-time updates like bus locations and user activity
          { name: "Chart.js" },   
          { name: "MySQL" },  
          { name: "Axios" },        
    
        ],
        image: "/project7.png",
        live: "",
        github: "",
    },
    {
        num: "08",
        category: "FullStack",
        description: "This application is designed for students to solve past questions and track their academic progress. The app allows users to access a vast database of past exam questions, submit answers, and review solutions. It provides an interactive interface that helps students improve their study habits. Features include question categorization, progress tracking, and performance analysis. Built with JavaScript for the frontend and python for the backend, the app offers a seamless user experience for students to manage their study sessions effectively.",
        stack: [
          { name: "Javascript" }, 
          { name: "Python" }, 
        ],
        image: "/project8.png",
        live: "",
        github: "",
      }  
      
      
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
      className="min-h-screen py-12 flex flex-col justify-center flex-wrap"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-12 gap-6">
          {/* Left Section: Project Details */}
          <div className="w-full xl:w-[50%] text-black flex flex-col items-center xl:items-start">
            <div className="flex flex-col gap-6">
              {/* Project Number */}
              <div className="text-5xl font-extrabold">{project.num}</div>

              {/* Project Title */}
              <h2 className="text-3xl font-semibold capitalize">{project.category} Project</h2>

              {/* Project Description */}
              <p className="text-lg">{project.description}</p>

              {/* Tech Stack */}
              <ul className="flex gap-4 flex-wrap justify-center xl:justify-start">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-blue-500">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-6 justify-center xl:justify-start">
                <Link href={project.live || ""}>
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

                <Link href={project.github || ""}>
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
          <div className="w-full relative">
            <div className="relative group h-[300px] sm:h-[400px] overflow-hidden">
              <Image
                src={project.image}
                alt={`Project ${project.num}`}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-full transition-all"
                onClick={prevSlide}
              >
                <span className="text-xl sm:text-2xl">&lt;</span>
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-full transition-all"
                onClick={nextSlide}
              >
                <span className="text-xl sm:text-2xl">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
