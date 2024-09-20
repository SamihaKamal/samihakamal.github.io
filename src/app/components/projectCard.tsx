"use client"
import Image, { getImageProps } from "next/image";
import LinkedInPic from "../images/LinkedIn Pic.jpg";
import { Carousel } from "./carousel";
import { useState } from "react";
import styles from '../css/cardstyle.module.css'

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
                    <div className="max-h-full w-full max-w-4xl overflow-y-auto sm:rounded-2xl bg-white flex">
                        <div className="w-1/2 flex items-center justify-center p-4">
                            
                            <Carousel images={images}/>
                        </div>
                        <div className="w-1/2 p-8 flex flex-col justify-between">
                            <div>
                                <h1 className="mb-4 text-3xl font-extrabold">{name}</h1>
                                <p className={styles.paragraph}>{description}</p>
                                <br></br>
                                <hr />
                                <br></br>
                                <h2 className="mb-4 text-2xl font-extrabold">Features</h2>
                                <p className={styles.paragraph}>{features}</p>
                                <br></br>
                            </div>
                            <div className="flex space-x-4">
                            <a href={github} className="p-3 bg-black rounded-full text-center text-white w-full font-semibold">Github Link</a>
                                <button onClick={closeModal} className="p-3 bg-white border rounded-full w-full font-semibold">Close</button>
                            </div>
                        </div>
                                        
                    </div>
                </div>
        )
    }
    
    const closeModal = () => setModalOpen(false);
    
    return(
        <div>
            <Model/>

            <a href="#" onClick={handleClick} className="shadow-2xl relative m-4">
                <div className="w-80 h-60 mt-4 shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105 backdrop-blur-lg">
                    <div className="absolute rounded-lg  inset-0 bg-white/40 backdrop-blur-md flex items-center justify-center">
                        <h3 className="text-white text-center font-bold text-2xl">
                            {name}
                        </h3>
                    </div>
                </div>
            </a>

            
            
        </div>
    )
}