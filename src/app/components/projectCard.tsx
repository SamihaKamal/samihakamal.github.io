"use client"
import Image, { getImageProps } from "next/image";
import LinkedInPic from "../images/LinkedIn Pic.jpg";
import { useState } from "react";


type projectCardProps={
    id: number
    name: string
    description: string
    features: string
    github: string
    images: {url: string}[]
}



export function ProjectCard({id, name, description, features, github, images}:projectCardProps ) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        setModalOpen(true);
    };

    const directLinks = images.map(img => {
        const fileId = img.url.match(/\/d\/(.*)\//)?.[1];
        return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : null;
    });

    function Model(){
        if (!modalOpen) return null;
    
        return(
            <div onClick={closeModal} className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-1 z-50">
                    <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white flex">
                        <div className="w-1/2 flex items-center justify-center p-4">
                            <Image 
                            className="w-full h-auto max-w-md"
                            width={500}
                            height={500}
                            src={directLinks[0] as string}
                            alt="Picture of myself"/>
                        </div>
                        <div className="w-1/2 p-8 flex flex-col justify-between">
                            <div>
                                <h1 className="mb-4 text-3xl font-extrabold">Turn on notifications</h1>
                                <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.</p>
                            </div>
                            <div className="mt-8 space-y-4">
                                <button onClick={closeModal} className="p-3 bg-white border rounded-full w-full font-semibold">Skip for now</button>
                            </div>
                        </div>
                                        
                    </div>
                </div>
        )
    }
    
    const closeModal = () => setModalOpen(false);
    
    return(
        <main>
            <Model/>

            <a href="#" onClick={handleClick} className=" shadow-2xl relative m-4">
                <div className="w-80 h-60 mt-4 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">
                    <div className="absolute inset-0 bg-raisin flex items-center justify-center">
                        <h3 className="text-white text-center font-bold text-2xl">
                            {name}
                        </h3>
                    </div>
                </div>
            </a>

            
            
        </main>
    )
}