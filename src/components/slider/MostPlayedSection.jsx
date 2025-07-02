"use client";
import photo from "../../../public/mostPlayed.png";
import { CiMenuKebab } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaPlay, FaPause, FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState } from "react";


const MostPlayedSection = () => {

    const [currentAudio, setCurrentAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // To track the play/pause state

    // Play or pause the audio
    const handlePlayPause = (audioUrl) => {
        if (currentAudio && !currentAudio.paused) {
            // If audio is playing, pause it
            currentAudio.pause();
            setIsPlaying(false);
        } else {
            // If no audio is playing or it's paused, play the audio
            const audio = new Audio(audioUrl);
            setCurrentAudio(audio);
            audio.play();
            setIsPlaying(true);
        }
    };

    const data = [
        {
            id: 1,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            audioUrl: "/audio.mp3",
            duration: "02:20min",
            image: photo,
        },
        {
            id: 2,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            audioUrl: "/audio.mp3",
            duration: "02:20min",
            image: photo,
        },
        {
            id: 3,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            audioUrl: "/audio.mp3",
            duration: "02:20min",
            image: photo,
        },
        {
            id: 4,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            audioUrl: "/audio.mp3",
            duration: "02:20min",
            image: photo,
        },
        {
            id: 5,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            audioUrl: "/audio.mp3",
            duration: "02:20min",
            image: photo,
        },
        {
            id: 6,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            audioUrl: "/audio.mp3",
            duration: "02:20min",
            image: photo,
        },
    ];

    return (
        <div className="relative ">
            <div className="flex items-center justify-center lg:justify-start mx-auto my-5">
                <h1 className="text-xl font-bold text-blue-900 ">Most played in this week</h1>
            </div>

            <Swiper
                modules={[Navigation]}
                className="md:w-[85%] lg:w-full"
                spaceBetween={20}
                slidesPerView={4}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                    1440: { slidesPerView: 4 },
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    320: { slidesPerView: 1 },
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative flex-shrink-0 mx-auto lg:px-0 md:px-0 px-5 rounded-sm group">
                            {/* Image Container */}
                            <div className="relative h-40 overflow-hidden rounded-xl">
                                <img
                                    src={item.image.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition duration-300 group-hover:blur-xs"
                                />

                                <div className="absolute top-2 left-2 text-white font-bold cursor-pointer">
                                    <CiHeart size={20} />
                                </div>

                                {/* Play/Pause Button */}
                                <button
                                    className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                    onClick={() => handlePlayPause(item.audioUrl)}
                                >
                                    {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                                </button>

                                {/* Menu Icon (Hidden before hover) */}
                                <div className="absolute top-0 right-2 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-90 cursor-pointer">
                                    <CiMenuKebab size={22} className="text-white" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-1">
                                <div className="flex justify-between">
                                    <h2 className="text-[12px] font-semibold text-blue-900">{item.title}</h2>
                                    <div className="flex items-center gap-1">
                                        <div className="flex items-center gap-1">
                                            <LuEye size={12} color="#6F6F6F" />
                                            <p className="text-[12px] text-gray-600">{item.plays}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaRegStar size={12} color="#d8ad00" />
                                            <p className="text-[12px] text-gray-600">{item.rating}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 flex justify-between items-center">
                                    <div className="flex items-center gap-1 *:px-[4px] *:py-[1px] *:rounded-xs">
                                        {item.tags.map((tag, index) => (
                                            <p key={index} className="text-[10px] font-[300] bg-primary text-white px-2 py-1 rounded">
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <IoTimeOutline size={12} />
                                        <p className="text-[12px] text-gray-600">{item.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute left-2 z-10 top-[52%] transform -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer">
                <IoChevronBack size={20} />
            </div>
            <div className="swiper-button-next-custom absolute right-2 z-10 top-[52%] transform -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer">
                <IoChevronForward size={20} />
            </div>
        </div>
    );
};

export default MostPlayedSection;
