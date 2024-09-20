"use client"
import { motion, useScroll, useTransform } from "framer-motion"

export function Animation(){
    const { scrollYProgress } = useScroll();

    const width = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["10vw", "50vw", "100vw", "10vw", "50vw", "100vw"]); // Width grows based on scroll
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
    return (
        <div>
             <div className="fixed z-0 bottom-2/4 right-0 flex justify-center items-end">
                <motion.div style={{width, height: "4rem", borderRadius}} className="w-16 h-16 bg-black rounded-full mb-4"></motion.div>
            </div>
        </div>
    )
}