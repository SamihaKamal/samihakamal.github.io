import Image from "next/image";
import BubbleSVG from "./SVGComponents/bubble";
import WaterSVG from "./SVGComponents/water";
import WavesSVG from "./SVGComponents/waves";

export default function Home() {
  return (
    <main className=" bg-regal-blue relative min-h-screen min-w-screen overflow-hidden flex flex-col items-center justify-center">
    <div className="absolute top-0 left-0" style={{ transform: "translateY(-75%) translateX(-30%)", width: "200vw" }}>
      <WavesSVG />
    </div>
    <text className="text-9xl font-bold text-slate-300 " style={{fontFamily: "Poppins"}}>My portfolio</text>
    <text className="absolute bottom-4 text-center text-6xl hover:text-8xl hover:cursor-pointer font-thin text-slate-300">v</text>
  </main>
  );
}
