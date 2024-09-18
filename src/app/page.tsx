
import Image from "next/image";
import LinkedInPic from "./images/LinkedIn Pic.jpg";

import { prisma } from "@/db";
import { AboutMe } from "./components/aboutme";
import { ProjectCard } from "./components/projectCard";
import { Timeline } from "./components/timeline";

export default async function Home() {


  const projects = await prisma.project.findMany({
    include: {
      images: true,
    }
  })

 
  return (
    <main 
    className="bg-regal-blue relative min-h-screen min-w-screen overflow-hidden flex flex-col">
    {/* First Section: My Portfolio Text and Waves */}
    <section className="flex flex-col items-center justify-center min-h-screen relative">
      <div
        className="absolute top-0 left-0"
        style={{ transform: "translateY(-75%) translateX(-30%)", width: "200vw" }}
      >
        {/* <WavesSVG /> */}
      </div>
      <div className="text-center">
        <h1 className="text-9xl font-bold text-slate-300" style={{ fontFamily: "Poppins" }}>
          My portfolio
        </h1>
      </div>
    </section>

    {/* Second Section: Image and Lorem Ipsum + Contact me*/}
    <section className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <Image 
        className="w-full h-auto max-w-md"
        width={500}
        height={500}
        src={LinkedInPic}
        alt="Picture of myself"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="mr-10">
          <AboutMe />
        </div>
      </div>
    </section>

    {/* Third section projects */}
    <section className="flex min-h-screen">
      <div className="flex-1 flex flex-wrap items-center justify-center space-x-9">
       {projects.map(a =>(
        <ProjectCard key={a.id} {...a} />
       ))}
      </div>
    </section>

    {/* Fourth section experience and skills*/}
    <section className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center">
       <Timeline />
      </div>
    </section>
  </main>
  );
}
