
import Image from "next/image";
import LinkedInPic from "./images/LinkedIn Pic.jpg";
import { motion } from "framer-motion";
import { prisma } from "@/db";
import { AboutMe } from "./components/aboutme";
import { ProjectCard } from "./components/projectCard";
import { Timeline } from "./components/timeline";
import { SideNav } from "./components/sidenav";
import { Animation } from "./components/animation";
import TimelineWord from "./wordComponents/timelineWord";


export default async function Home() {


  const projects = await prisma.project.findMany({
    include: {
      images: true,
    }
  })

 
  return (
    <div className="bg-regal-blue relative min-h-screen min-w-screen overflow-hidden flex flex-col">
      <SideNav />
      <Animation />
      {/* First Section: My Portfolio Text and Waves */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-slate-300" style={{ fontFamily: "Poppins" }}>
            <TimelineWord name="My Porfolio" colour="#E8E5E5"/>
          </h1>
        </div>
      </section>

      {/* Second Section: Image and Lorem Ipsum + Contact me*/}
      <section id="about" className="flex min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <Image 
          className="z-10 w-full h-auto max-w-md"
          width={500}
          height={500}
          src={LinkedInPic}
          alt="Picture of myself"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="z-10 mr-10">
            <AboutMe />
          </div>
        </div>
      </section>

      {/* Third section projects */}
      <section id="portfolio" className=" flex flex-col min-h-screen relative">
        <div className="flex items-center justify-center w-full mt-40">
          <TimelineWord name="Projects" colour="#E8E5E5"/>
        </div>
        <div className="flex-1 flex flex-wrap items-center justify-center space-x-9">
        {projects.map(a =>(
          <ProjectCard key={a.id} {...a} />
        ))}
        </div>
      </section>

      {/* Fourth section experience and skills*/}
      <section id="experience" className="flex min-h-screen">
        <div className="flex-1 flex items-center justify-center">
        <Timeline />
        </div>
      </section>
    </div>
  );
}
