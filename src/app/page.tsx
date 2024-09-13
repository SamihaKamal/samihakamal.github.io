"use client"
import Image from "next/image";
import LinkedInPic from "./images/LinkedIn Pic.jpg";
import WavesSVG from "./SVGComponents/waves";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { LoremIpsum } from "./loremipsum";
import { AboutMe } from "./components/aboutme";

export default function Home() {
  const controls = useAnimation();
  const router = useRouter();

  const handleScroll = async () => {
    await controls.start({
      y: -window.innerHeight,
      transition: { duration: 1, ease: "easeInOut"},
    });
    router.push("/aboutme");
  }
  return (
    <motion.main 
    className="bg-regal-blue relative min-h-screen min-w-screen overflow-hidden flex flex-col"
    initial={{ y: 0 }}
    animate={controls}
  >
    {/* First Section: My Portfolio Text and Waves */}
    <section className="flex flex-col items-center justify-center min-h-screen relative">
      <motion.div
        className="absolute top-0 left-0"
        style={{ transform: "translateY(-75%) translateX(-30%)", width: "200vw" }}
      >
        {/* <WavesSVG /> */}
      </motion.div>
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
        <div className="pr-10">
          <AboutMe />
        </div>
      </div>
    </section>

    {/* Third section projects */}
    <section className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center">
       <p>Projects</p>
      </div>
    </section>

    {/* Fourth section experience and skills*/}
    <section className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center">
       <p>Experience</p>
      </div>
    </section>
  </motion.main>
  );
}
