"use client"
import { useState } from "react"
import styles from "../css/cardstyle.module.css"

type bulletProps ={
    id: number
    role: string
    company: string
    description: string
    from: Date
    to: Date | null
    skills: {name: string}[]
}
export function Bullet({id, role, description, company, from, to, skills}: bulletProps){
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = (e: React.MouseEvent<HTMLAnchorElement>) =>{
        e.preventDefault();
        setModalOpen(true);
    }

    const closeModal = () =>{
        setModalOpen(false);
    }

    function Model(){
        if (!modalOpen) return null;
    
        return(
            <div onClick={closeModal} className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-1 z-50">
                    <div className="max-h-full w-full max-w-4xl overflow-y-auto sm:rounded-2xl bg-white flex">
                        <div className="w-full p-8 flex flex-col justify-between">
                            <div>
                                <h1 className="mb-4 text-3xl font-extrabold">{role}</h1>
                                <p className="text-xl font-bold text-gray-600">{company}</p>
                                <p className="text-l text-gray-600">{from.toDateString()} - {to?.toDateString()}</p>
                                <br></br>
                                <hr />
                                <br></br>
                                <h2 className="mb-4 text-2xl font-extrabold">Description</h2>
                                <p className={styles.paragraph}>{description}</p>
                                <br></br>
                                <h2 className="mb-4 text-2xl font-extrabold">Skills</h2>
                                <div className="flex flex-wrap space-x-4">
                                    {skills.map((a, index) =>(
                                        <div key={index} className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-dark-slate-grey mt-4 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                                            <div className="mt-px">{a.name}</div>
                                    </div>
                                    ))}
                                </div>
                                
                            </div>
                            <div className="flex space-x-4">
                                <button onClick={closeModal} className="p-3 hover:bg-slate-100 hover:border-slate-700 bg-white border mt-4 rounded-full w-full font-semibold">Close</button>
                            </div>
                        </div>
                                        
                    </div>
                </div>
        )
    }

    return(
        <div>
            <Model />
            <a href="#" onClick={handleModal}>
                <div className='w-6 h-6 bg-slate-100 rounded-full hover:bg-transparent hover:outline hover:outline-white hover:w-8 hover:h-8'></div>
            </a>
        </div>
    )
}