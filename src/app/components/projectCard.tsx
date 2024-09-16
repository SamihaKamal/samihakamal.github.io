"use client"
import Image, { getImageProps } from "next/image";
import LinkedInPic from "../images/LinkedIn Pic.jpg";


type projectCardProps={
    id: number
    name: string
    description: string
    features: string
    github: string
    images: {url: string}[]
}

export function ProjectCard({id, name, description, features, github, images}:projectCardProps ) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        alert(`Project: ${name}`);
    };

    
    return(
        <main>
             <a href="#" onClick={handleClick} className=" shadow-2xl relative m-4">
                <div className="w-80 h-60 mt-4 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">
                    <div className="absolute inset-0 bg-raisin flex items-center justify-center">
                        <h3 className="text-white font-bold text-lg">
                            {name}
                        </h3>
                    </div>
                </div>
            </a>
        </main>
    )
}