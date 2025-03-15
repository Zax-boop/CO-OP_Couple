"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageSliderProps {
    images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change images every 3 seconds

        return () => clearInterval(timerId);
    }, [images.length]);

    return (
        <div className="relative w-full mx-auto xs:mt-4 xs:pb-4 sm:pb-0 xl:mt-0">
            <div className="relative xs:w-[20rem] xs:h-[11.4rem] sm:w-[30rem] sm:h-[16.8rem] xl:w-[35rem] xl:h-[20rem] group overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
