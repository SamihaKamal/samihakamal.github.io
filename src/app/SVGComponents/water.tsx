"use client"

import * as React from "react"
import { SVGProps } from "react"
import {motion} from "framer-motion";
const WaterSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
   
    viewBox="0 0 1015 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
    animate={{x: ["0%", "50%"]}}
    transition={{duration: 5, repeat: Infinity}}
      d="M1015 5V212C985 290 942 308 902 324C862 340 726 225 714 219C704.4 214.2 684.667 217 676 219C661.667 235 609.6 275.2 516 308C399 349 220 238 176 225C140.8 214.6 118.667 248.667 112 267C104.333 303.667 82.8 381.2 58 398C33.2 414.8 9.66667 312.333 1 259L7 15L1015 5Z"
      fill="#6B6464"
      fillOpacity={0.9}
    />
    <path
      d="M1013.16 4L15.1582 16C9.4915 3 -1.44183 36.6 0.158167 275C2.15817 573 42.1582 512 62.1582 518C82.1582 524 143.158 452 137.158 370C132.358 304.4 182.492 274 208.158 267C243.492 265 317.158 272.2 329.158 317C341.158 361.8 392.158 339.667 416.158 323C452.492 298.333 533.958 252.6 569.158 267C613.158 285 616.158 300 676.158 312C736.158 324 835.158 34 868.158 207C901.158 380 1013.16 216 1013.16 207V4Z"
      fill="#1B1B1B"
      fillOpacity={0.5}
    />
    <path
      d="M719.887 244.664C778.793 262.969 917.902 281.088 1003.09 207.128L1004.13 5.13045C720.764 10.6658 138.241 20.0548 75.0745 13.3283C-3.88313 4.92001 13.0443 19.0077 12.8272 61.0071C12.6101 103.007 7.8968 240.984 30.7983 260.103C53.6998 279.221 142.848 250.682 185.636 291.903C228.423 333.125 240.553 -78.8176 284.307 162.412C319.31 355.395 381.82 321.251 408.7 280.056C433.896 242.186 499.477 168.724 560.231 177.838C620.984 186.952 691.982 226.187 719.887 244.664Z"
      fill="#060606"
      fillOpacity={0.3}
    />
  </svg>
)
export default WaterSVG
