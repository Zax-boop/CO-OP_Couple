"use client"

import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/header';
import PoppingLetters from '../components/poppingLetters';
import FadeInSection from '../components/fadeIn';
import ImageTrack from '../components/ImageTrack';
import SignInForm from '../components/signIn';
import fetchGhibli from '../../../utils/fetchAnime';
import GhibliForm from '../components/animeModal';
import DeleteGhibli from '../components/deleteAnime';
import UpdateGhibliModal from '../components/updateAnime';

export default function Ghibli() {
    const [animeList, setAnimeList] = useState<{
        name: string;
        director: string;
        r_comments: string;
        p_comments: string;
        image: string;
        rank: number;
        id: string;
    }[]>([]);
    const [filteredMedia, setFilteredMedia] = useState(animeList);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const mediaPerPage = 10;
    const indexOfLastMedia = currentPage * mediaPerPage;
    const indexOfFirstMedia = indexOfLastMedia - mediaPerPage;
    const currentMedia = filteredMedia.slice(indexOfFirstMedia, indexOfLastMedia);

    const animeRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
    const videoRef = useRef<HTMLVideoElement>(null);

    const searchSectionRef = useRef<HTMLDivElement>(null);
    const switchPage = (pageIndex: number) => {
        if (searchSectionRef.current != null) {
            searchSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setCurrentPage(pageIndex + 1);
    };

    useEffect(() => {
        const getAnime = async () => {
            const data = await fetchGhibli();
            if (data) {
                setAnimeList(data);
                setFilteredMedia(data);
                animeRefs.current = data.map(() => React.createRef());
            }
            setLoading(false);
        };
        getAnime();
    }, []);

    useEffect(() => {
        const search = searchQuery.toLowerCase();
        setFilteredMedia(
            animeList.filter(
                (anime) =>
                    anime.name.toLowerCase().includes(search) ||
                    anime.director.toLowerCase().includes(search) ||
                    anime.r_comments.toLowerCase().includes(search) || 
                    anime.p_comments.toLowerCase().includes(search)
            )
        );
        setCurrentPage(1);
    }, [searchQuery, animeList]);

    const totalPages = Math.ceil(filteredMedia.length / mediaPerPage);

    const scrollToAnime = (index: number) => {
        if (animeRefs.current[index]) {
            if (animeRefs.current[index].current) {
                animeRefs.current[index].current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='flex flex-col w-full h-full items-center bg-blue-300'>
            <Header />
            <SignInForm />
            <div className="relative flex items-center justify-center w-full xs:h-[15rem] sm:h-[30rem] xl:h-[80vh] xs:mt-4 sm:mt-10  overflow-hidden">
                <div className="absolute inset-0 flex w-full h-full overflow-hidden">
                    <div className='w-1/2 h-full'>
                        <video
                            src={"/kiki.mp4"}
                            autoPlay
                            loop
                            muted
                            controls={false}
                            playsInline
                            className={`w-full h-1/2 object-fill duration-700 ease-in-out group-hover:opacity-75 ${isLoading
                                ? "scale-110 blur-2xl grayscale"
                                : "scale-100 blur-0 grayscale-0"
                                }`}
                            onLoadedData={() => setIsLoading(false)}
                        />
                        <video
                            src={"/ponyo.mp4"}
                            autoPlay
                            loop
                            muted
                            controls={false}
                            playsInline
                            className={`w-full h-1/2 object-fill duration-700 ease-in-out group-hover:opacity-75 ${isLoading
                                ? "scale-110 blur-2xl grayscale"
                                : "scale-100 blur-0 grayscale-0"
                                }`}
                            onLoadedData={() => setIsLoading(false)}
                        />
                    </div>
                    <div className='w-1/2 h-full'>
                        <video
                            src={"/nausicaa.mp4"}
                            autoPlay
                            loop
                            muted
                            controls={false}
                            playsInline
                            className={`w-full h-1/2 object-fill duration-700 ease-in-out group-hover:opacity-75 ${isLoading
                                ? "scale-110 blur-2xl grayscale"
                                : "scale-100 blur-0 grayscale-0"
                                }`}
                            onLoadedData={() => setIsLoading(false)}
                        />
                        <video
                            src={"/laputa.mp4"}
                            autoPlay
                            loop
                            muted
                            controls={false}
                            playsInline
                            className={`w-full h-1/2 object-fill duration-700 ease-in-out group-hover:opacity-75 ${isLoading
                                ? "scale-110 blur-2xl grayscale"
                                : "scale-100 blur-0 grayscale-0"
                                }`}
                            onLoadedData={() => setIsLoading(false)}
                        />
                    </div>
                </div>
                <PoppingLetters text="Ghibli" className="absolute text-white xs:text-2xl sm:text-6xl font-bold z-10 text-center" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className='mt-4'>
                <ImageTrack data={currentMedia} onImageClick={scrollToAnime} width={`${currentMedia.length <= 5 ? `xs:w-[8rem] 2xl:w-[20rem]` : `xs:w-[6.67rem]`} ${currentMedia.length == 6 ? `sm:w-[8rem]` : `sm:w-[10rem]`} ${currentMedia.length == 5 ? `xl:w-[15rem]` : `xl:w-[20rem]`}`} />
            </div>
            <div className="flex flex-col xs:w-[95%] sm:w-4/5 xs:mt-2 sm:mt-8">
                <GhibliForm />
                <p className='xs:text-xs sm:text-base sm:mt-2 xl:mt-0 xs:mb-1 sm:mb-0 text-black'>*Disclaimer: This is just our opinion and what we enjoyed watching the most regardless of critical bias.</p>
                <div className="flex flex-row flex-wrap justify-start mt-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`px-3 py-1 mx-1 my-1 ${currentPage === i + 1
                                ? "bg-white text-black border-[1px] border-white"
                                : "bg-black border-[1px] border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                                }`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <div className="my-4" ref={searchSectionRef}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search ghibli..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 text-black"
                    />
                </div>
                <hr className="border-t border-gray-800" />
                {currentMedia.map((anime: {
                    name: string;
                    director: string;
                    r_comments: string;
                    p_comments: string;
                    image: string;
                    rank: number;
                    id: string;
                }, index: number) => (
                    <FadeInSection key={anime.id || `${anime.name}-${anime.director}-${index}`}
                        ref={animeRefs.current[index]}
                        className="flex flex-col xl:space-y-4 xs:mt-4 xl:mt-8">
                        <div className="flex flex-row">
                            <h2 className="xs:text-base sm:text-lg xl:text-xl font-semibold xs:mr-1 sm:mr-2 xl:mr-4 text-black">{anime.rank}.</h2>
                            <img
                                src={anime.image}
                                alt={`${anime.name} cover`}
                                className={`xs:w-[10rem] xs:h-[10rem] sm:w-[15rem] sm:h-[15rem] xl:w-[30rem] xl:h-[30rem] xs:min-w-[10rem] xs:min-h-[10rem] sm:min-w-[15rem] sm:min-h-[15rem] xl:min-w-[30rem] xl:min-h-[30rem] object-cover mb-4 transform transition-transform hover:scale-105 duration-300 ${isLoading
                                    ? "scale-110 blur-2xl grayscale"
                                    : "scale-100 blur-0 grayscale-0"
                                    }`}
                                onLoadedData={() => setIsLoading(false)}
                            />
                            <div className='xs:ml-2 sm:ml-4 w-full'>
                                <div className='flex flex-row w-full justify-between'>
                                    <p className="xs:text-xl sm:text-4xl xl:text-6xl text-black">{anime.name}</p>
                                    <div className='flex flex-row items-center gap-2'>
                                        <DeleteGhibli id={anime.id} rank={anime.rank} />
                                        <UpdateGhibliModal anime={anime} />
                                    </div>
                                </div>
                                <p className="xs:text-base sm:text-lg xl:text-3xl text-gray-600">{anime.director}</p>
                                <p className="xs:text-[0.5rem] sm:text-sm xl:text-lg xs:mt-0.5 sm:mt-1 xl:mt-2 text-green-800 font-semibold">{anime.r_comments}</p>
                                <p className="xs:text-[0.5rem] sm:text-sm xl:text-lg xs:mt-0.5 sm:mt-1 xl:mt-2 text-purple-500 font-semibold">{anime.p_comments}</p>                            </div>
                        </div>
                        {index < currentMedia.length - 1 && <hr className="border-t border-gray-800 xs:my-1 sm:my-2 xl:my-4" />}
                    </FadeInSection>
                ))}
                <div className="flex flex-row flex-wrap justify-start mt-1">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`px-3 py-1 xs:mx-1 sm:mx-1.5 xs:my-1 sm:my-1.5 ${currentPage === i + 1
                                ? "bg-white text-black border-[1px] border-white"
                                : "bg-black border-[1px] border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                                }`}
                            onClick={() => switchPage(i)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
