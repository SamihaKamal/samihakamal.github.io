"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from 'react';
import React from 'react'
import Con1 from '../SVGComponents/constellation1'
import Con2 from '../SVGComponents/constellation2'
import Con3 from '../SVGComponents/constellation3'

const getRandomValue = ( min: number, max: number) => Math.random() * (max-min) + min;

interface ConstellationProp {
    SVGComponent: React.ComponentType
}

const Constellation: React.FC<ConstellationProp> = ({ SVGComponent }) => {
    const ref = useRef(null);
    const inView = useInView(ref);
    const randomX = getRandomValue(-10, 90); // Random X position as percentage
    const randomY = getRandomValue(-10, 90); // Random Y position as percentage
    const randomScale = getRandomValue(0.3, 1); // Random scaling
    const randomDuration = getRandomValue(1.5, 4); // Random duration for the animation
  
    return (
      <motion.div
        ref={ref}
        style={{
          position: 'absolute',
          top: `${randomY}%`,
          left: `${randomX}%`,
          transformOrigin: 'center',
        }}
        initial={{
          opacity: 0,
          scale: randomScale,
          rotate: getRandomValue(0, 360),
        }}
        animate={
            inView
            ? {
                opacity: [0, 1, 0], // Twinkling effect: fade in and out
                rotate: [0, 360], // Rotate a full circle
              }
            : {
                opacity: 0, // Hide when out of view
              }
          
        }
        transition={{
          duration: randomDuration,
          repeat: Infinity, // Infinite loop
          repeatType: 'reverse', // Reverses the animation for smoother twinkling
        }}
      >
        <SVGComponent />
      </motion.div>
    );
  };

export function Star(){
    const numConstellations = 15; // Number of constellations on the screen
    const constellations = [];
  
    for (let i = 0; i < numConstellations; i++) {
      const SVGComponent = i % 3 === 0 ? Con1 : i % 3 === 1 ? Con2 : Con3; // Alternate between SVG 1 and SVG 2
      constellations.push(<Constellation key={i} SVGComponent={SVGComponent} />);
    }
  
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {constellations}
      </div>
    );
}