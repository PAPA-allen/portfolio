"use client";
import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiMongodb, SiGraphql, SiReactrouter, SiSass, SiDocker, SiGit, SiPostgresql, SiStyledcomponents, SiJest, SiFirebase, SiExpo, SiRedux, SiGithub, SiVercel, SiFigma, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

// About section data
const about = {
  title: "About Me",
  description:
    "I'm a passionate full-stack developer with 4+ years of experience building innovative and scalable web applications. I am proficient in both frontend and backend technologies and am always eager to learn more.",
  info: [
    { fieldName: "Name", fieldValue: "Allen Aryee" },
    { fieldName: "Phone", fieldValue: "(+233) 247 549 825" },
    { fieldName: "Experience", fieldValue: "4+ years" },
    { fieldName: "Nationality", fieldValue: "Ghanaian" },
    { fieldName: "Email", fieldValue: "allenniia@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

// Education section data
const education = [
  {
    degree: "BSc Computer Engineering (Second Class Honours)",
    institution: "Kwame Nkrumah University of Science and Technology",
    duration: "September 2017 – November 2021",
  },
  {
    degree: "WASSCE (SCIENCE WITH TECHNICAL DRAWING)",
    institution: "MFANTSIPIM SCHOOL",
    duration: "September 2014 – August 2017",
  },
];

// Skills section data with added frontend and backend skills
const skills = [
  // Frontend Web Development
  { icon: <FaHtml5 size={48} color="#E34F26" />, label: "HTML5", type: "frontend" },
  { icon: <FaCss3 size={48} color="#1572B6" />, label: "CSS3", type: "frontend" },
  { icon: <FaJs size={48} color="#F7DF1E" />, label: "JavaScript", type: "frontend" },
  { icon: <FaReact size={48} color="#61DAFB" />, label: "React", type: "frontend" },
  { icon: <SiTailwindcss size={48} color="#38BDF8" />, label: "Tailwind CSS", type: "frontend" },
  { icon: <SiNextdotjs size={48} color="#000000" />, label: "Next.js", type: "frontend" },
  { icon: <SiTypescript size={48} color="#3178C6" />, label: "TypeScript", type: "frontend" },
  { icon: <SiSass size={48} color="#C76494" />, label: "Sass", type: "frontend" },
  { icon: <SiStyledcomponents size={48} color="#DB7093" />, label: "Styled Components", type: "frontend" },

  // Frontend Testing (Web)
  { icon: <SiJest size={48} color="#C21325" />, label: "Jest", type: "testing" },

  // Backend Development
  { icon: <FaNodeJs size={48} color="#68A063" />, label: "Node.js", type: "backend" },
  { icon: <SiExpress size={48} color="#000000" />, label: "Express.js", type: "backend" },
  { icon: <SiMongodb size={48} color="#47A248" />, label: "MongoDB", type: "backend" },
  { icon: <SiGraphql size={48} color="#E10098" />, label: "GraphQL", type: "backend" },
  { icon: <SiReactrouter size={48} color="#CA4245" />, label: "React Router", type: "backend" },
  { icon: <SiDocker size={48} color="#2496ED" />, label: "Docker", type: "backend" },
  { icon: <SiGit size={48} color="#F1502F" />, label: "Git", type: "backend" },
  { icon: <SiPostgresql size={48} color="#336791" />, label: "PostgreSQL", type: "backend" },
  { icon: <SiFirebase size={48} color="#FFCA28" />, label: "Firebase", type: "backend" },

  // Frontend Mobile Development (React Native)
  { icon: <FaReact size={48} color="#61DAFB" />, label: "React Native", type: "frontend" },
  { icon: <SiExpo size={48} color="#000000" />, label: "Expo", type: "frontend" },
  { icon: <SiRedux size={48} color="#764ABC" />, label: "Redux", type: "frontend" },

  // Version Control
  { icon: <SiGit size={48} color="#F1502F" />, label: "Git", type: "tools" },
  { icon: <SiGithub size={48} color="#181717" />, label: "GitHub", type: "tools" },
  

  // Cloud Platforms & Services
  { icon: <SiVercel size={48} color="#000000" />, label: "Vercel", type: "tools" },

  // Other Tools & Libraries
  { icon: <SiFigma size={48} color="#F24E1E" />, label: "Figma", type: "tools" },
  { icon: <SiPostman size={48} color="#FF6C37" />, label: "Postman", type: "tools" },

];


const Resume = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto p-6">
      {/* Tab Navigation */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
        }}
      >
        <button
          className={`px-6 py-3 text-lg font-medium ${
            activeTab === "about" ? "text-primary border-b-4 border-primary" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`px-6 py-3 text-lg font-medium ${
            activeTab === "skills" ? "text-primary border-b-4 border-primary" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={`px-6 py-3 text-lg font-medium ${
            activeTab === "education" ? "text-primary border-b-4 border-primary" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </motion.div>

      {/* Content */}
      <div>
        {activeTab === "about" && (
          <>
            <motion.h2
              className="text-3xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
              }}
            >
              {about.title}
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
              }}
            >
              {about.description}
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
  {about.info.map((item, index) => (
    <motion.div
      key={index}
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
      }}
    >
      <h3 className="font-medium text-gray-600">{item.fieldName}</h3>
      <p className="text-gray-800 mt-2 flex items-center">
        {item.fieldName === "Freelance" && item.fieldValue === "Available" ? (
          <>
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-blink mr-2"></span>
            {item.fieldValue}
          </>
        ) : (
          item.fieldValue
        )}
      </p>
    </motion.div>
  ))}
</div>


          </>
        )}

        {activeTab === "skills" && (
          <>
            <motion.h2
              className="text-3xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
              }}
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center justify-center text-center ${skill.type === "frontend" ? "text-blue-600" : "text-green-600"}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 2.5, duration: 0.4, ease: "easeIn" },
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    {skill.icon}
                    <p className="mt-2">{skill.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {activeTab === "education" && (
          <>
            <motion.h2
              className="text-3xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
              }}
            >
              Education
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                  }}
                >
                  <h3 className="font-medium text-gray-600">{item.degree}</h3>
                  <p className="text-gray-800 mt-2">{item.institution}</p>
                  <p className="text-gray-600 mt-1">{item.duration}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Resume;
