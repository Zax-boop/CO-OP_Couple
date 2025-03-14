"use client"

import React from 'react'
import FadeInSection from './fadeIn'
import Link from 'next/link'
import Image from 'next/image'
import climbing_app from "../../../public/climbing_app.jpg"
import cinema from "../../../public/cinema.jpg"
import hades from "../../../public/hades_ex.webp"
import sopranos from "../../../public/sopranos_ex.jpg"
import cb from "../../../public/cb.jpg"
import camus from "../../../public/camus.webp"
import { useRef, useState, useEffect } from 'react'

export default function AboutSection() {
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
    <div className='flex flex-col mt-10'>
      <p className="w-full flex flex-row justify-center xs:text-2xl sm:text-4xl xl:text-5xl font-semibold bg-gradient-to-r from-purple-400 via-green-300 to-blue-500 bg-clip-text text-transparent">
        About Us
      </p>

      <div
        ref={lineRef}
        className={`h-[0.1rem] bg-white transition-all duration-700 mt-2 ${isVisible ? "w-full" : "w-0"
          }`}
      />
      <FadeInSection className='mt-[1rem]'>
        <div className='flex xs:flex-col sm:flex-row xs:gap-4 sm:gap-8'>
          <img src={"/bohan_ex.jpg"} className='xs:w-full self-start sm:w-[20rem] xl:w-[25rem] xs:rounded-md xl:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
          <p className='xs:text-sm sm:text-xl xl:text-7xl 2xl:text-2xl font-medium text-purple-200'>

            My name is Bohan. <br /> I mega munch. <br /> I do code. <br /> I am type. <br /> I sports. <br /> I game. <br /> I schlebb.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection className=''>
        <div className='flex xs:flex-col sm:flex-row xs:gap-4 sm:gap-8 xs:mt-[0.5rem] sm:mt-4'>
          <div className='flex flex-col gap-2 sm:text-xl xs:text-sm 2xl:text-2xl font-medium'>
            <p className='xs:text-sm sm:text-xl xl:text-6xl 2xl:text-2xl font-medium text-blue-200'>My name is Prath.  <br /> I do studious.  <br /> I drink 3 coffees a day.  <br /> I schlebb.  <br /> I&apos;m having caffeine withdrawals today actually. </p>
            <p className='xs:text-[0.5rem] sm:text-sm text-blue-200'>
              Oh my god. I was not expecting you to add that. </p>
          </div>
          <img src={"/prath_ex.jpg"} className='rounded-lg self-start xs:w-full sm:w-[20rem] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
        </div>
      </FadeInSection>
      <FadeInSection className='mt-[1rem]'>
        <div className='flex xs:flex-col sm:flex-row xs:gap-4 sm:gap-8'>
          <img src={"/co-op_ex.jpg"} className='xs:w-full self-start sm:w-[20rem] xl:w-[25rem] xs:rounded-md xl:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
          <p className='xs:text-sm sm:text-xl xl:text-7xl 2xl:text-2xl font-medium text-green-200'>
            Wii Sports. <br /> We cook. <br /> We munch. <br /> We climb. <br /> We read. <br /> We game. <br /> We music. <br /> We schlebb. <br /> We mushroom.
          </p>
        </div>
      </FadeInSection>
      <div className='flex flex-row flex-wrap self-start xs:gap-3 sm:gap-5 mt-5'>
        <FadeInSection className='self-start'>
          <Link href='/album_ranking' className='self-start flex flex-col items-center xs:gap-0.5 sm:gap-1'>
            <Image src={cinema} alt='climbing_ex' className='xs:w-[5rem] xs:h-[5rem] sm:h-[15rem] sm:w-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20.5rem] 2xl:h-[20.5rem] self-start object-cover xs:rounded-lg sm:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
            <p className='xs:text-sm sm:text-3xl cursor-pointer'>Albums</p>
          </Link>
        </FadeInSection>
        <FadeInSection className='self-start'>
          <Link href='/books' className='self-start flex flex-col items-center xs:gap-0.5 sm:gap-1'>
            <Image src={camus} alt='climbing_ex' className='xs:w-[5rem] xs:h-[5rem] sm:h-[15rem] sm:w-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20.5rem] 2xl:h-[20.5rem] self-start object-cover xs:rounded-lg sm:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
            <p className='xs:text-sm sm:text-3xl cursor-pointer'>Books</p>
          </Link>
        </FadeInSection>
        <FadeInSection className='self-start'>
          <Link href='/belevision' className='self-start flex flex-col items-center xs:gap-0.5 sm:gap-1'>
            <Image src={sopranos} alt='sopranos_ex' className='xs:w-[5rem] xs:h-[5rem] sm:h-[15rem] sm:w-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20.5rem] 2xl:h-[20.5rem] self-start object-cover xs:rounded-lg sm:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
            <p className='xs:text-sm sm:text-3xl cursor-pointer'>Da Belevision</p>
          </Link>
        </FadeInSection>
        <FadeInSection className='self-start'>
          <Link href='/ghibli' className='self-start flex flex-col items-center xs:gap-0.5 sm:gap-1'>
            <Image src={cb} alt='climbing_ex' className='xs:w-[5rem] xs:h-[5rem] sm:h-[15rem] sm:w-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20.5rem] 2xl:h-[20.5rem] self-start object-cover xs:rounded-lg sm:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
            <p className='xs:text-sm sm:text-3xl cursor-pointer'>Ghibli</p>
          </Link>
        </FadeInSection>
        <FadeInSection className='self-start'>
          <Link href='/mushroom' className='self-start flex flex-col items-center xs:gap-0.5 sm:gap-1'>
            <Image src={climbing_app} alt='climbing_ex' className='xs:w-[5rem] xs:h-[5rem] sm:h-[15rem] sm:w-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20.5rem] 2xl:h-[20.5rem] self-start object-cover xs:rounded-lg sm:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
            <p className='xs:text-sm sm:text-3xl cursor-pointer'>Mushroom</p>
          </Link>
        </FadeInSection>
        <FadeInSection className='self-start'>
          <Link href='/climbing' className='self-start flex flex-col items-center xs:gap-0.5 sm:gap-1'>
            <Image src={climbing_app} alt='climbing_ex' className='xs:w-[5rem] xs:h-[5rem] sm:h-[15rem] sm:w-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20.5rem] 2xl:h-[20.5rem] self-start object-cover xs:rounded-lg sm:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
            <p className='xs:text-sm sm:text-3xl cursor-pointer'>Sports</p>
          </Link>
        </FadeInSection>
        <FadeInSection className='self-start'>
          <Link href='/games' className='self-start flex flex-col items-center xs:gap-0.5 sm:gap-1'>
            <Image src={hades} alt='hades_ex' className='xs:w-[5rem] xs:h-[5rem] sm:h-[15rem] sm:w-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20.5rem] 2xl:h-[20.5rem] self-start object-cover xs:rounded-lg sm:rounded-[40px] xl:transform xl:transition-transform xl:duration-200 xl:hover:scale-105' />
            <p className='xs:text-sm sm:text-3xl cursor-pointer'>Video Games</p>
          </Link>
        </FadeInSection>
      </div>
    </div>
  )
}
