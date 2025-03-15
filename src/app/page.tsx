"use client";

import { useEffect, useState } from "react";
import PoppingLetters from "./components/poppingLetters";
// import ExperienceTimeline from "./components/experienceTimeline";
import AboutSection from "./components/aboutSection";
// import ProjectSection from "./components/projectSection";
// import ContactSection from "./components/contactSection";
import SignInForm from "../app/components/signIn"
import LazyLoader from "./components/lazyLoader";
import { useMediaQuery } from "react-responsive";
import HomeHeader from "./components/homeHeader";
import ExperienceTimeline from "./components/experienceTimeline";
import ImageSlider from "./components/imageSlider";

const images: string[] = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider5.jpg",
  "/slider6.jpg",
  "/slider7.jpg",
  "/slider8.jpg",
  "/slider9.jpg",
  "/slider10.jpg",
  "/slider11.jpg",
  "/slider12.jpg",
  "/slider13.jpg",
  "/slider14.jpg",
  "/slider15.jpg",
  "/slider16.jpg",
];

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' })
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(true);
    }, 2800);
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const svg = document.querySelector("svg.squiggle");
    const path = svg?.querySelector("path");

    if (!svg || !path) return;

    const threshold = 40 * 16;

    const scroll = () => {
      const distance = window.scrollY;

      if (distance < threshold) {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;
        return;
      }

      const totalDistance = svg.clientHeight - window.innerHeight;
      const adjustedDistance = distance - threshold;
      const percentage = Math.min(Math.max(adjustedDistance / totalDistance, 0), 1);

      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <div className={`flex flex-col w-full h-full items-center bg-[#96c484]`}>
      <SignInForm />
      <svg
        width={isMobile ? "200" : "100%"}
        height={isMobile ? "1000" : "2000"}
        viewBox={isMobile ? "0 0 500 1000" : "0 0 1000 2000"}
        fill="none"
        className="absolute xs:top-[10rem] sm:top-[45rem] xl:top-[40rem] left-0 w-full h-auto z-0 squiggle"
      >
        <path
          d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeOpacity={0.3}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <HomeHeader />
      <div className="relative flex flex-col w-full mt-1 xl:h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col w-4/5 items-start z-10">
          <PoppingLetters
            className="font-semibold xs:text-[2rem] sm:text-[5rem] lg:text-[7rem] xl:text-[7rem] 2xl:text-[9rem] xs:mt-2 sm:mt-0 xl:mt-12"
            text={"The CO-OP Couple"}
          />
          <div className="flex xs:flex-col xl:flex-row justify-between w-full xs:mt-2 xl:mt-20">
            <div className="flex flex-col w-4/5">
              <PoppingLetters
                className="xs:text-[1.1rem] sm:text-[3rem] xl:text-[5rem] xl:leading-[4rem] 2xl:text-7xl"
                text="An Immersive Experience of Our Interests and Hobbies"
                initialDelay={1000}
                speed={30}
              />
            </div>
            {<div
              className={`flex transform transition-transform duration-200 hover:scale-105 flex-col justify-end items-end w-2/5 ${!timer && "opacity-0"
                } animate-fadeInDelayed xs:mb-[0rem] sm:mb-0`}
            >
              <ImageSlider images={images} />
            </div>}
          </div>
        </div>
      </div>
      <div className="w-4/5 flex flex-col mt-2 xl:mt-[1rem] z-10">
        <LazyLoader id="experience">
          <ExperienceTimeline />
        </LazyLoader>
        {/* <LazyLoader id="projects">
          <ProjectSection />
        </LazyLoader> */}
        <LazyLoader id="about">
          <AboutSection />
        </LazyLoader>
        {/* <LazyLoader id="contact">
          <ContactSection />
        </LazyLoader> */}
      </div>
    </div>
  );
}
