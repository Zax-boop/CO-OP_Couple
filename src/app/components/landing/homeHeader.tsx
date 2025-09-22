"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ListOrdered } from "lucide-react";
export default function HomeHeader() {
    const lineRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (lineRef.current) {
            observer.observe(lineRef.current);
        }

        return () => {
            if (lineRef.current) {
                observer.unobserve(lineRef.current);
            }
        };
    }, []);
    return (
        <header className={`w-4/5 flex flex-col items-start mt-4 xs:py-1 xl:py-3`}>
            <div className="flex flex-row items-center w-full justify-between">
                <Link href={"/"} className="font-semibold text-xl cursor-pointer p-1 rounded-md hover:bg-white hover:text-black transition-all ease-in-out duration-300">
                    PRA
                </Link>
                <div className={`flex flex-row mt-2 gap-2`}>
                    <div className="relative z-[100]" onMouseLeave={() => setDropdownOpen(false)}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="transform transition-transform duration-200 hover:scale-105"
                        >
                            <ListOrdered className="xs:w-[1.8rem] sm:w-[1.5rem] sm:h-[1.5rem] self-start p-0.5 rounded-md hover:bg-white hover:text-black transition-all ease-in-out duration-300" />
                        </button>
                        <ul
                            className={`absolute xs:right-0  mt-0 bg-white border border-gray-200 rounded-md shadow-md xs:w-[8rem] sm:w-48 transition-all duration-300 ease-in-out ${dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                                }`}
                        >
                            <li>
                                <Link
                                    href="/albums"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Albums
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/books"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/belevision"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Da Belevision
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ghibli"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Ghibli
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/munch"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Munch
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mushroom"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Mushroom
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sports"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Sports
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/games"
                                    className="block xs:px-2 sm:px-4 xs:py-1 sm:py-2 text-black hover:bg-gray-100"
                                >
                                    Video Games
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                ref={lineRef}
                className={`h-[0.1rem] bg-white transition-all duration-700 mt-2 ${isVisible ? "w-full" : "w-0"}`}
            />
        </header>
    )
}
