"use client";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    category: "Romofete",
    description: "A modern e-commerce web application designed to help users discover and purchase thoughtful gifts for their loved ones. Built with a focus on user experience and seamless authentication, Romofete provides an intuitive platform where customers can browse curated collections of beautiful items to bring joy and smiles to special people in their lives.",
    stack: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "React" }, { name: "shadcn/ui" }, { name: "paystack" }],
    image: "/p11.png",
    live: "https://romofete.com",
    github: "",
  },
  {
    num: "02",
    category: "SpareParts Hub",
    description: "Developed comprehensive layouts, interactive dashboards, and integrated RESTful endpoints to facilitate robust backend functionality for SpareParts Hub. Implemented responsive UI components and seamless API integrations to enhance user experience and streamline automotive parts management operations.",
    stack: [{ name: "TypeScript" }, { name: "React" },],
    image: "/p1.png",
    live: "https://www.sparepartshub.store",
    github: "",
  },
  {
    num: "03",
    category: "SpareParts Hub Mobile App",
    description: "Engineered a cross-platform mobile application using React Native to enable iOS and Android users to browse, search, and purchase automotive spare parts online. Implemented responsive design patterns, secure payment gateways, and intuitive navigation to deliver a seamless e-commerce experience across multiple mobile platforms.",
    stack: [{ name: "TypeScript" }, { name: "React Native" }],
    image: "/p2.png",
    live: "https://apps.apple.com/gb/app/sparepartshub/id6747882519",
    github: "",
  },
  {
    num: "04",
    category: "MeetStream Video Communication Platform",
    description: "A video communication platform built to facilitate seamless client interactions. The app allows users to engage in video calls in real-time, making it easy to collaborate remotely. Built with TypeScript, Node.js, and the MeetStream API for video streaming functionality.",
    stack: [{ name: "TypeScript" }, { name: "Node.js" }, { name: "MeetStream" }],
    image: "/p3.png",
    live: "https://meetstream-three.vercel.app/",
    github: "https://github.com/PAPA-allen/meetstream",
  },
  {
    num: "05",
    category: "LMS Mobile App",
    description: "A mobile application designed for parents to manage and track their wards' performance. Built with React Native for the mobile app and styled with TailwindCSS, the app provides a seamless experience for monitoring academic progress, assignments, and notifications.",
    stack: [{ name: "React Native" }],
    image: "/p4.png",

  },
  {
    num: "06",
    category: "LMS Web Application",
    description: "A web application built to assist students in making learning easier. The app provides a variety of features such as resource management, progress tracking, and interactive study tools. Built with React.js for the frontend, Redux for state management, and styled with TailwindCSS, the app ensures a smooth and engaging user experience.",
    stack: [{ name: "React.js" }, { name: "Redux" }, { name: "TailwindCSS" }, { name: "React Query" }],
    image: "/p5.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "Laundry Mobile App",
    description: "A mobile application developed for a client to manage their small laundry shop. The app allows shop owners to efficiently manage customer orders, track laundry progress, and handle payments. Built with React Native for cross-platform support and TailwindCSS for responsive design, it offers a simple yet effective solution for streamlining laundry operations and improving customer satisfaction.",
    stack: [
      { name: "React Native" },
      { name: "TailwindCSS" },
      { name: "Firebase" },      // Added Firebase for authentication and data storage
      { name: "React Navigation" } // Used for app navigation
    ],
    image: "/p6.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "StudyHub LMS Web Application",
    description: "StudyHub is an interactive study platform designed for students to access educational videos and learning resources. The platform allows students to watch videos, track their progress, and interact with instructors in real time. StudyHub offers a fast, responsive, and engaging experience.",
    stack: [
      { name: "Next.js" },
      { name: "Redux Toolkit" },
      { name: "Express.js" },
      { name: "Socket.IO" },
      { name: "Redis" },

    ],
    image: "/p7.png",
    live: "",
    github: "",
  },
  {
    num: "09",
    category: "LMS Admin Dashboard",
    description: "The Admin Dashboard for StudyHub provides a powerful interface to manage and customize every aspect of the platform. From the layout to the footer, the admin can easily modify content, update user data, and oversee platform performance. Designed with a focus on usability and clean design. It integrates a smooth user experience with interactive features such as drag-and-drop components, charts, and real-time updates, allowing admins to manage the platform efficiently.",
    stack: [
      { name: "Next.js" },
      { name: "Redux Toolkit" },
      { name: "Chart.js" },      // Added for 
      { name: "React DnD" },     // Added for drag-and-drop functionality
      { name: "Socket.IO" }      // For real-time updates on the platform's status
    ],
    image: "/p8.png",
    live: "",
    github: "",
  },
  {
    num: "10",
    category: "Bus Transit Dashboard",
    description: "The Bus Transit Dashboard is a comprehensive management system for overseeing bus routes, scheduling, and user activity in a company’s transit system to ensure a clean and responsive interface. Real-time updates and notifications are handled with **Socket.IO**, while detailed transit data and reports are visualized using **Chart.js**.",
    stack: [
      { name: "PHP" },             // PHP for backend logic and API handling
      { name: "React.js" },        // React.js for the frontend dashboard interface
      { name: "TailwindCSS" },     // TailwindCSS for styling the frontend
      { name: "Socket.IO" },      // For real-time updates like bus locations and user activity
      { name: "Chart.js" },
      { name: "MySQL" },
      { name: "Axios" },

    ],
    image: "/p9.png",
    live: "",
    github: "",
  },
  {
    num: "11",
    category: "Student Exam Portal",
    description: "This application is designed for students to solve past questions and track their academic progress. The app allows users to access a vast database of past exam questions, submit answers, and review solutions. It provides an interactive interface that helps students improve their study habits. Features include question categorization, progress tracking, and performance analysis",
    stack: [
      { name: "Javascript" },
      { name: "Python" },
    ],
    image: "/p10.png",
    live: "",
    github: "",
  }


];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [project, setProject] = useState<Project>(projects[0]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6, ease: "easeInOut" } }}
      className="min-h-screen py-12 flex flex-col justify-center flex-wrap relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Large Screen Navigation - Fixed at screen edges */}
      <div className="hidden xl:flex fixed top-1/2 transform -translate-y-1/2 left-8 z-10">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white w-16 h-16 flex justify-center items-center rounded-full transition-all shadow-lg hover:shadow-xl"
          onClick={prevSlide}
        >
          <span className="text-2xl"><ChevronLeft /></span>
        </button>
      </div>

      <div className="hidden xl:flex fixed top-1/2 transform -translate-y-1/2 right-8 z-10">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white w-16 h-16 flex justify-center items-center rounded-full transition-all shadow-lg hover:shadow-xl"
          onClick={nextSlide}
        >
          <span className="text-2xl"><ChevronRight /></span>
        </button>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col xl:flex-row xl:gap-16 gap-6">
          {/* Left Section: Project Details */}
          <div className="w-full xl:w-[45%] flex flex-col items-center xl:items-center text-center xl:text-left">
            <div className="flex flex-col gap-6 xl:max-w-lg">
              {/* Project Number */}
              <div className="text-5xl font-extrabold">{project.num}</div>

              {/* Project Title */}
              <h2 className="text-3xl font-semibold capitalize">{project.category}</h2>

              {/* Project Description */}
              <p className="text-lg leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <ul className="flex gap-4 flex-wrap justify-center xl:justify-center">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-blue-500">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-6 justify-center xl:justify-center">
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

          {/* Right Section: Project Image */}
          <div className="w-full xl:w-[45%] relative xl:flex xl:justify-center">
            <div className="relative group h-[300px] sm:h-[400px] w-full xl:max-w-md overflow-hidden">
              <Image
                src={project.image}
                alt={`Project ${project.num}`}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Mobile/Small Screen Navigation - Centered below image */}
            <div className="xl:hidden flex justify-between items-center mt-6">
              {/* Previous Button - Left Side */}
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-full transition-all"
                onClick={prevSlide}
              >
                <span className="text-xl sm:text-2xl"><ChevronLeft /></span>
              </button>

              {/* Next Button - Right Side */}
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-full transition-all"
                onClick={nextSlide}
              >
                <span className="text-xl sm:text-2xl"><ChevronRight /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
