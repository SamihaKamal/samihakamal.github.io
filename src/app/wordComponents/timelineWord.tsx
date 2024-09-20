'use client';
import { useRef } from 'react';
import React from 'react';
import { color, motion, useInView } from 'framer-motion';
import { col } from 'framer-motion/client';

type wordProp ={
    name: string
    colour: string
}

const TimelineWord = ({ name, colour }: wordProp) => {
    const ref = useRef(null);
    const inView = useInView(ref);
    const letters = Array.from(name)

    
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const child = {
        hidden: {
            opacity: 0,
            x: 0,
            y: 100,
            rotateZ: 45,
            transition: {
                type: "spring",
            },
        },

        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotateZ: 0,
            transition: {
                type: "spring",
            },
        }
    }
    return (
            <div className='mx-auto flex flex-col justify-center items-center'>
                <motion.div
                    ref={ref}
                    variants={container}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className={`px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)]`}>
                    {letters.map((letter, index) => (
                        <motion.span
                            
                            key={index}
                            variants={child}
                            style={{color: colour}}>
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div
                    className={`px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)]`}>
                    {letters.map((letter, index) => (
                        <motion.span
                            style={{
                                WebkitTextStroke: `1px ${colour}`,
                            }}
                            key={index}
                            className='text-transparent'>
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        )
}

export default TimelineWord