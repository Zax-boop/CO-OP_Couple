"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IceCreamCone, Wine, Cake, Tractor, Ghost, UtensilsCrossed, ChefHat, House, PartyPopper, Heart, Flower2, Clover, Landmark, Dog, Popcorn, Cookie, Croissant, Crown, Volleyball, Gamepad2, Star, Squirrel } from 'lucide-react';
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
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/semi.jpg' />
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
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/bohan20thbday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Bohan&apos;s 20th &quot;Surprise&quot; Birthday</h1>
                        <p className='!mt-0 '>Bohan was not surprised whatsoever. His genius allowed him to figure out the plans substantially early. Many insane Pokémon cards were pulled. Many cookies were devoured.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(186, 85, 211)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(186, 85, 211)' }}
                    date="May 2023"
                    iconStyle={{ background: 'rgb(186, 85, 211)', color: '#fff' }}
                    icon={<Star />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/start.jpeg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Started Dating!</h1>
                        <p className='!mt-0 '>We started dating officially on May 10th!</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 182, 193)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 182, 193)' }}
                    date="September 2023"
                    iconStyle={{ background: 'rgb(255, 182, 193)', color: '#fff' }}
                    icon={<Cake />}
                >
                    <div className='flex flex-col'>
                        <div className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/prathBday.jpg' />
                        </div>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prath&apos;s 20th Surprise Birthday!</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>(She was not surprised)</p>
                        <p className='!mt-0'>Everyone showed up after da Prath arrived... except for da Bohan of course! We ate some delectable sushi and stir fry.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(128, 0, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(128, 0, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(128, 0, 0)', color: '#fff' }}
                    icon={<Tractor />}
                >
                    <div className='flex flex-col'>
                        <div className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/bance.jpg' />
                        </div>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Da BANCE!</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>(Too much country music)</p>
                        <p className='!mt-0'>We sat around a fire and went on a hay ride. There was lots of country music. Prath wished for s&apos;mores.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    date="October 2023"
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    icon={<Ghost />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/halloween2023.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Halloweekend!</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>(spooky..)</p>
                        <p className='!mt-0'>We were Joker and Harley Quinn. We both dyed our hair and da Bohan hated it!</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(193, 65, 48)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(193, 65, 48)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(193, 65, 48)', color: '#fff' }}
                    icon={<ChefHat />}
                >
                    <div className='flex flex-col'>
                        <video className='w-full rounded-lg overflow-hidden' src='/shells.mp4' autoPlay loop muted />
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Shells Florentine</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Shmack!</p>
                        <p className='!mt-0'>Bohan used to eat shells florentine all the time in freshman year Allen Hall dining room! It was so shmack and so was this one!</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(65, 105, 225)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(65, 105, 225)' }}
                    date="November 2023"
                    iconStyle={{ background: 'rgb(65, 105, 225)', color: '#fff' }}
                    icon={<UtensilsCrossed />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/6month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>6 Monthiversary</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Thai Food</p>
                        <p className='!mt-0'>Prath&apos;s ordered the spiciest of spiciest spice levels only to get annihilated. We had some shmack spoonhouse dessert after though!.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(143, 0, 255)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(143, 0, 255)' }}
                    date="February 2024"
                    iconStyle={{ background: 'rgb(143, 0, 255)', color: '#fff' }}
                    icon={<House />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/visiting_apt.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Bohan&apos;s Future Apt. Tour</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Twas cheap</p>
                        <p className='!mt-0'>Nice place! Cool balcony! Very smelly stairs...</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 200, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 200, 0)' }}
                    date="February 2024"
                    iconStyle={{ background: 'rgb(0, 200, 0)', color: '#fff' }}
                    icon={<PartyPopper />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/carnivale.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Carnivale</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>They said there would be food...</p>
                        <p className='!mt-0'>They only had two food items, one of which da Prathinator couldn&apos;t consume.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 105, 180)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 105, 180)' }}
                    date="February 2024"
                    iconStyle={{ background: 'rgb(255, 105, 180)', color: '#fff' }}
                    icon={<Heart />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/valentines.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Valentine&apos;s Day</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Homemade Almond Joys!</p>
                        <p className='!mt-0'>Prath made some insane homemade almond joys that were super shmack! We also made some tasty enchiladas.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(102, 204, 102)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 204, 102)' }}
                    date="March 2024"
                    iconStyle={{ background: 'rgb(102, 204, 102)', color: '#fff' }}
                    icon={<Flower2 />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/visiting_praths.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Spring Break</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>Visited Prath&apos;s House</p>
                        <p className='!mt-0'>So many shoes! We watched John Wick in the theater room. It was Prath&apos;s first time!</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 128, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 128, 0)' }}
                    date="March 2024"
                    iconStyle={{ background: 'rgb(0, 128, 0)', color: '#fff' }}
                    icon={<Clover />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/unofficial2024.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Unofficial</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>So much green..</p>
                        <p className='!mt-0'>Unofficial is St. Patrick&apos;s Day for UIUC. Prath met Bohan&apos;s brother for the first time! Many mysteries left unsolved...</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(194, 178, 128)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(194, 178, 128)' }}
                    date="April 2024"
                    iconStyle={{ background: 'rgb(194, 178, 128)', color: '#fff' }}
                    icon={<Landmark />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/museum.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>World Cultures Museum</h1>
                        <p className='!mt-0'>There was an insanely tasty charcuterie board. Prath and Bohan are posing as Orpheus and Eurydice like the statue behind us. Museum was awesome but we got rained in and had to call an Uber...</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(218, 165, 32)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(218, 165, 32)' }}
                    date="April 2024"
                    iconStyle={{ background: 'rgb(218, 165, 32)', color: '#fff' }}
                    icon={<Dog />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/doggo.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Doggo!</h1>
                        <p className='!mt-0'>Took picture with puppo in training who painted a canvas in da Bohan&apos;s hand in exchange for peanut butter and money.</p>

                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 223, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 223, 0)' }}
                    date="April 2024"
                    iconStyle={{ background: 'rgb(255, 223, 0)', color: '#fff' }}
                    icon={<ChefHat />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/making_cheese.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Cheese Club!</h1>
                        <p className='!mt-0'>We scienced some cheese together...</p>

                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(139, 69, 19)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(139, 69, 19)' }}
                    date="April 2024"
                    iconStyle={{ background: 'rgb(139, 69, 19)', color: '#fff' }}
                    icon={<Popcorn />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/monkeyman.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Movie Theater</h1>
                        <p className='!mt-0'>We watched Monkey Man! It was respectable.</p>

                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(101, 67, 33)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(101, 67, 33)' }}
                    date="May 2024"
                    iconStyle={{ background: 'rgb(101, 67, 33)', color: '#fff' }}
                    icon={<Wine />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/bohan21stbday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Bohan&apos;s 21st Birthday!</h1>
                        <p className='!mt-0'>We went out for sushi! Da Bohan got to try some sake. It is not worth the hype...</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(178, 34, 34)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(178, 34, 34)' }}
                    date="May 2024"
                    iconStyle={{ background: 'rgb(178, 34, 34)', color: '#fff' }}
                    icon={<Gamepad2 />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/1year.jpeg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>1 Year Anniversary</h1>
                        <p className='!mt-0'>We had so many plans that got cancelled by the weather! But it was still awesome since we spent the whole day playing Hades and Valorant instead!</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(231, 84, 128)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(231, 84, 128)' }}
                    date="September 2024"
                    iconStyle={{ background: 'rgb(231, 84, 128)', color: '#fff' }}
                    icon={<Cookie />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/prath21stBday.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Prath&apos;s 21st Birthday!</h1>
                        <p className='!mt-0'>Much food was munched!</p>

                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(64, 64, 64)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(64, 64, 64)' }}
                    date="October 2024"
                    iconStyle={{ background: 'rgb(64, 64, 64)', color: '#fff' }}
                    icon={<Croissant />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/masquerade.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Masquerade Party</h1>
                        <p className='!mt-0'>Olive Garden was catered so much food was eaten that night. They even let da Bohan bring a tray each of pasta and pasta sauce!</p>

                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(204, 51, 102)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(204, 51, 102)' }}
                    date="October 2024"
                    iconStyle={{ background: 'rgb(204, 51, 102)', color: '#fff' }}
                    icon={<Crown />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/halloween2024.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>Halloweekend 2024!</h1>
                        <p className='!xs:text-xs !xl:text-xl !mt-0 font-medium'>(much less spooky...)</p>
                        <p className='!mt-0'>Da Bohan was Princess Peach and Prath was Mario! People loved our costumes! Even Mihir came to visit!</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(165, 42, 42)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(165, 42, 42)' }}
                    date="November 2024"
                    iconStyle={{ background: 'rgb(165, 42, 42)', color: '#fff' }}
                    icon={<Squirrel />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/18month.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>1.5 Year Anniversary</h1>
                        <p className='!mt-0'>Four Breakfast was eaten! It used to be good... Many squirrels were also fed!</p>

                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 140, 0)', color: '#fff', padding: '12px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 140, 0)' }}
                    date="May 2025"
                    iconStyle={{ background: 'rgb(255, 140, 0)', color: '#fff' }}
                    icon={<Volleyball />}
                >
                    <div className='flex flex-col'>
                        <a className="rounded-lg overflow-hidden">
                            <img className='w-full' src='/unofficial2025.jpg' />
                        </a>
                        <h1 className='vertical-timeline-element-title !text-3xl !mt-2'>2 Year Anniversary</h1>
                        <p className='!mt-0'>Da Bohan came to visit since he&apos;d been working at IBM for a co-op at home! Much raquetball was played!</p>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div >
    )
}