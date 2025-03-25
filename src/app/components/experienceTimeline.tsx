"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefcaseIcon, SquareArrowUpRight } from 'lucide-react';
import FadeInSection from './fadeIn';
import { useRef, useState, useEffect } from 'react';
import React from 'react'

export default function ExperienceTimeline() {
    const lineRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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
        <div className='mt-10'>
            <FadeInSection className="w-full flex flex-row justify-center items-center xs:text-2xl sm:text-4xl xl:text-5xl">Work Experience</FadeInSection>
            <div
                ref={lineRef}
                className={`h-[0.1rem] bg-white transition-all duration-700 mt-2 ${isVisible ? "w-full" : "w-0"
                    }`}
            />
            <VerticalTimeline className='!mt-4'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="February 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/ice_skating.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="April 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/semi.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="May 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bohan20thbday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="September 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/prathBday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bance.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/halloween2023.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/6month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/6month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="May 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bohan20thbday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="September 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/prathBday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bance.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/halloween2023.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/6month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/6month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="May 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bohan20thbday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="September 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/prathBday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bance.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/halloween2023.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/6month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(254, 76, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(254, 76, 0)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/6month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prismera</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Full Stack Developer</p>
                        <p className='!mt-0'>Worked across the stack on real estate lease parser. Used Next.js, Typescript, and Tailwind CSS for the frontend. Wrote REST APIs in python. Utilized Java to create and consume RESTful services for seamless communication across the stack. Used Firebase for authentication.</p>
                        <div className="relative group self-start cursor-pointer my-2">
                            <a target='_blank' href="https://prismera.ai/" className='flex flex-row items-center gap-2'>
                                <strong className='!font-bold'>Visit Website</strong>
                                <SquareArrowUpRight />
                            </a>
                            <span className="absolute xs:-bottom-[0.075rem] sm:-bottom-[0.3rem] left-0 w-0 xs:h-[0.1rem] sm:h-1 bg-white transition-all group-hover:w-full"></span>
                        </div>
                        <div className='flex flex-row flex-wrap !mt-2 gap-2'>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Next.js</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Typescript</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Tailwind CSS</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Firebase</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Java</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>Python</p>
                            <p className='!mt-0 py-1.5 px-3 rounded-xl bg-white text-black hover:opacity-70 transition duration-300 ease-in-out'>REST APIs</p>

                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div >
    )
}