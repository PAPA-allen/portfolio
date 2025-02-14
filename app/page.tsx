import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full mt-auto">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-text-left order-2 xl:order-none">
            <span>Software Engineer</span>
            <h1 className="h1">
              Hi! I'm<br/><span className="text-blue-500">Allen Aryee</span>
            </h1>
            <p className="max-w-[500px] mb-9 ">A full-stack developer passionate about creating mobile and web applications with expertise in modern technologies. </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="secondary">
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
</section>
  );
}
