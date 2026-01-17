"use client"
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Use the correct relative path to your file in the public folder
    link.download = "Allen_Aryee_CV.pdf"; // The name the file will have once downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <motion.section
      className="h-full mt-auto"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.3, duration: 0.8, ease: "easeIn" }
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Animated subtitle with word-by-word typewriter */}
            <span>
              {["Software", "Engineer"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.2 + (index * 0.15),
                    ease: "easeOut"
                  }}
                >
                  {word}{index < 1 ? " " : ""}
                </motion.span>
              ))}
            </span>

            {/* Animated heading with word-by-word typewriter effect */}
            <h1 className="h1">
              {["Hi!", "I'm"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.5 + (index * 0.15),
                    ease: "easeOut"
                  }}
                >
                  {word}{index < 1 ? " " : ""}
                </motion.span>
              ))}
              <br />
              {["Allen", "Nii Ayitey", " Aryee"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.8 + (index * 0.15),
                    ease: "easeOut"
                  }}
                  className="text-blue-500"
                >
                  {word}{index < 1 ? " " : ""}
                </motion.span>
              ))}
            </h1>

            {/* Animated description with word-by-word typewriter effect */}
            <p className="max-w-[500px] mb-9">
              {["A", "full-stack", "developer", "passionate", "about", "creating", "mobile", "and", "web", "applications", "with", "expertise", "in", "modern", "technologies."].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 2.0 + (index * 0.15),
                    ease: "easeOut"
                  }}
                >
                  {word}{index < 14 ? " " : ""}
                </motion.span>
              ))}
            </p>

            {/* Animated buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.5 }}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <Button variant="secondary" onClick={handleDownloadCV}>
                <span>
                  Download CV
                </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-6 xl:mb-0">
                <Socials />
              </div>
            </motion.div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </motion.section>
  );
}
