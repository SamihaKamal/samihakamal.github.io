import Image from "next/image";
import BubbleSVG from "./bubble";
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div style={{ width: '60vw', height: '45vw' }}>
        <BubbleSVG className="w-full h-full" />
      </div>
    </main>
  );
}
