"use client"
import Image, { getImageProps } from "next/image";
import LinkedInPic from "../images/LinkedIn Pic.jpg";

type projectCardProps={
    id: number
    name: string
    description: string
    features: string
    github: string
}

export function ProjectCard({id, name, description, features, github}:projectCardProps ) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent the default anchor behavior
        alert(`Project: ${name}`);
    };
    return(
        <main>
             <a href="#" onClick={handleClick} className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-0 pb-1">{name}</h2>
                                <p className="text-lg font-light text-white">{github}</p>
                            </div>
                        </div>
                    </div>
                    <Image 
                        className="w-full h-auto max-w-md"
                        width={500}
                        height={500}
                        src={LinkedInPic}
                        alt="Picture of myself"
                        />
                </div>
            </a>
        </main>
    )
}