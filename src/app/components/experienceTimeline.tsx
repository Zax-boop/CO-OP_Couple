"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefcaseIcon, SquareArrowUpRight, IceCreamCone, Wine, Cake } from 'lucide-react';
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
            <FadeInSection className="w-full flex flex-row justify-center items-center xs:text-2xl sm:text-4xl xl:text-5xl">Da CO-OP Adventures</FadeInSection>
            <div
                ref={lineRef}
                className={`h-[0.1rem] bg-white transition-all duration-700 mt-2 ${isVisible ? "w-full" : "w-0"
                    }`}
            />
            <VerticalTimeline className='!mt-4'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(173, 216, 230)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(173, 216, 230)' }}
                    date="February 2023"
                    iconStyle={{ background: 'rgb(173, 216, 230)', color: '#fff' }}
                    icon={<IceCreamCone />}
                >
                    <div className='flex flex-col'>
                        <img className='w-full cursor-pointer rounded-3xl' src='/ice_skating.jpg' />
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2 text-black'>Prath&apos;s First Time Ice Skating!</h1>
                        <p className='!mt-0 text-black'>It was not Bohan&apos;s first time.. Prath was very scared, but unfortunately she did not fall!</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(245, 245, 220)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(245, 245, 220)' }}
                    date="April 2023"
                    iconStyle={{ background: 'rgb(245, 245, 220)', color: '#000000' }}
                    icon={<Wine />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/semi.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2 text-black'>CC&apos;s Sorority Semi</h1>
                        <p className='!mt-0 text-black'>Prath ended up at Latin night! Bohan went to go babysit some pleb high schoolers...</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(34, 139, 34)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(34, 139, 34)' }}
                    date="May 2023"
                    iconStyle={{ background: 'rgb(34, 139, 34)', color: '#fff' }}
                    icon={<Cake />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bohan20thbday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Bohan&apos;s 20th &quot;Surprise&quot; Birthday</h1>
                        <p className='!mt-0 '>Bohan was not surprised whatsoever. His genius allowed him to figure out the plans substantially early. Many insane Pokémon cards were pulled. Many cookies were devoured.</p>
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
                        <video className='w-full rounded-lg overflow-hidden' src='/shells.mp4' autoPlay loop muted />
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
                    date="February 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/visiting_apt.jpg' />
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
                    date="February 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/carnivale.jpg' />
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
                    date="February 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/valentines.jpg' />
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
                    date="March 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/visiting_praths.jpg' />
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
                    date="March 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/unofficial2024.jpg' />
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
                    date="April 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/museum.jpg' />
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
                    date="April 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/doggo.jpg' />
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
                    date="April 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/making_cheese.jpg' />
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
                    date="April 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/monkeyman.jpg' />
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
                    date="May 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/bohan21stbday.jpg' />
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
                    date="September 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/prath21stBday.jpg' />
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
                    date="October 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/masquerade.jpg' />
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
                    date="October 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/halloween2024.jpg' />
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
                    date="November 2024"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/18month.jpg' />
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
                    date="May 2025"
                    iconStyle={{ background: 'rgb(254, 76, 0)', color: '#fff' }}
                    icon={<BriefcaseIcon />}
                >
                    <div className='flex flex-col'>
                        <a target='_blank' href='https://colomboai.com/' className="rounded-lg overflow-hidden cursor-pointer">
                            <img className='w-full cursor-pointer' src='/unofficial2025.jpg' />
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