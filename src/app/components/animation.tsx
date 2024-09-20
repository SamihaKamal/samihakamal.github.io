"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Spill from "../SVGComponents/spill";

export function Animation(){
    const { scrollY } = useScroll();

    const width = useTransform(scrollY, [0,500,1000,1500,2000,2500], ["200vh", "250vh","300vh", "250vh","200vh", "300vh"]); // Adjust 1000 based on your scroll length
    const borderRadius = useTransform(scrollY, [0, 1], ["50%", "0%"]);
    return (
        <div>
            <div className="fixed z-0 top-0 left-[50%] h-screen w-full flex justify-end items-center">             
                <div style={{ height: "100vh"}} className="items-center flex justify-center">         
                    <motion.div style={{ width, borderRadius }}>
                        <Spill />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}