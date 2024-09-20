import { useState } from "react";
import Image from "next/image";

type CarouselProps = {
    images: string[];
};

export function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Handle moving to the next image
    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    function checkURL(a: string) {
        console.log(a)
        return a;
    }

    return (
        <div>
            <div id="default-carousel" className="relative" data-carousel="static">
                <div className="overflow-hidden relative rounded-lg ">
                    
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`duration-700 ease-in-out ${index === currentIndex ? "block" : "hidden"}`}
                            data-carousel-item
                        >
                             <Image
                                className="w-full h-auto max-w-md"
                                src={checkURL(image)}
                                alt={`Image ${index + 1}`}
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button onClick={handlePrev} type="button" className="flex absolute top-0 -left-8 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button onClick={handleNext} type="button" className="flex absolute top-0 -right-12 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}
