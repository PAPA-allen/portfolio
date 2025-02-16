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
            <span>Software Engineer</span>
            <h1 className="h1">
              Hi! I'm<br/><span className="text-blue-500">Allen Aryee</span>
            </h1>
            <p className="max-w-[500px] mb-9 ">
              A full-stack developer passionate about creating mobile and web applications with expertise in modern technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="secondary" onClick={handleDownloadCV}>
                <span>
                  Download CV
                </span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-6 xl:mb-0">
                <Socials/> 
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </motion.section>
  );
}
