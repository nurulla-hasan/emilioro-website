"use client";
import { motion } from 'framer-motion';
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { AiFillEye, AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { PiTrash } from "react-icons/pi";


const PlaylistDetails = () => {
    const { id } = useParams();
    const [playing, setPlaying] = useState(null);
    const waveforms = useRef({});

    const detailedConversations = [
        {
            id: 1,
            title: "Family Conversation",
            image: "/conversion1.png",
            duration: "1 hr 23m",
            type: "10+ audio",
            lastUpdated: "Jan 18",
            creator: {
                name: "Emili Roo",
                role: "creator",
                avatar: "/heroImage.png",
            },
            audios: [
                {
                    id: 1,
                    title: "Family Conversation",
                    image: "/conversion1.png",
                    duration: "02:20min",
                    views: "3.5k",
                    rating: 5,
                    tags: ["Family", "Travel"],
                    audioUrl: "/audio.mp3",
                    description:
                        "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
                },
                {
                    id: 2,
                    title: "Family Conversation",
                    image: "/conversion2.png",
                    duration: "02:20min",
                    views: "3.5k",
                    rating: 5,
                    tags: ["Family", "Travel"],
                    audioUrl: "/audio.mp3",
                    description:
                        "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
                },
                {
                    id: 3,
                    title: "Family Conversation",
                    image: "/conversion3.png",
                    duration: "02:20min",
                    views: "3.5k",
                    rating: 5,
                    tags: ["Family", "Travel"],
                    audioUrl: "/audio.mp3",
                    description:
                        "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
                },
                {
                    id: 4,
                    title: "Family Conversation",
                    image: "/conversion3.png",
                    duration: "02:20min",
                    views: "3.5k",
                    rating: 5,
                    tags: ["Family", "Travel"],
                    audioUrl: "/audio.mp3",
                    description:
                        "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
                },
            ],
        },
        {
            id: 2,
            title: "Family Conversation",
            image: "/conversion2.png",
            duration: "1 hr 23m",
            type: "10+ audio",
            lastUpdated: "Jan 18",
            creator: {
                name: "Emili Roo",
                role: "creator",
                avatar: "/heroImage.png",
            },
            audios: [
                {
                    id: 5,
                    title: "Family Conversation",
                    image: "/conversion2.png",
                    duration: "02:20min",
                    views: "3.5k",
                    rating: 5,
                    tags: ["Family", "Travel"],
                    audioUrl: "/audio.mp3",
                    description:
                        "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
                },
            ],
        },
    ];


    const conversation = detailedConversations.find((conv) => conv.id === parseInt(id));

    if (!conversation) return <p className="mt-10 text-center">No Data Found</p>;

    useEffect(() => {
        conversation.audios.forEach((audio) => {
            if (!waveforms.current[audio.id]) {
                waveforms.current[audio.id] = WaveSurfer.create({
                    container: `#waveform-${audio.id}`,
                    waveColor: "#d1d5db",
                    progressColor: "#1C4587",
                    barWidth: 2,
                    height: 40,
                    responsive: true,
                    hideScrollbar: true,
                    cursorWidth: 1,
                    backend: "mediaelement",
                });

                waveforms.current[audio.id].load(audio.audioUrl);
            }
        });

        return () => {
            Object.values(waveforms.current).forEach((ws) => ws.destroy());
        };
    }, []);

    const togglePlay = (audioId) => {
        if (playing === audioId) {
            waveforms.current[audioId].pause();
            setPlaying(null);
        } else {
            Object.values(waveforms.current).forEach((ws) => ws.pause());
            waveforms.current[audioId].play();
            setPlaying(audioId);
        }
    };

    return (
        <div className="px-5 my-5 md:px-8">



            {/* Cover Image */}
            <div className="w-full h-48 bg-center bg-cover rounded-sm" style={{ backgroundImage: `url(${conversation.image})` }}></div>

            {/* Title & Creator Info */}
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                {/* Conversation Info */}
                <div className="mt-4">
                    <h1 className="text-xl font-bold md:text-2xl">{conversation.title}</h1>
                    <p className="text-sm text-gray-500 md:text-base">{conversation.type} | {conversation.duration}</p>
                    <p className="text-xs text-gray-400 md:text-sm">Last Updated: {conversation.lastUpdated}</p>
                </div>
            </div>

            {/* Creator Info */}
            <div className="flex items-center gap-3 mt-4">
                <Image
                    src={conversation.creator.avatar}
                    className="w-12 h-12 rounded-full"
                    alt="Creator Avatar"
                    width={48}
                    height={48}
                />
                <div>
                    <h3 className="font-semibold">{conversation.creator.name}</h3>
                    <p className="text-sm text-gray-500">{conversation.creator.role}</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center w-full gap-3 mt-4 sm:flex-row md:gap-5 sm:w-auto">
                <button className="w-full cursor-pointer sm:w-auto bg-white border border-[#193f7c] text-[#193f7c] px-4 py-2 rounded-sm font-semibold text-xs sm:text-sm flex items-center gap-2 justify-center">
                    <img src="/delete.svg" alt="" className="w-4 h-4" />
                    <span>Delete Playlist</span>
                </button>
                <button className="w-full cursor-pointer sm:w-auto bg-button text-white px-5 py-2 rounded-sm font-semibold text-xs sm:text-sm">
                    <span>Edit Playlist</span>
                </button>
            </div>


            {/* Audio List */}
            <div className="mt-6 space-y-4">
                {conversation.audios.map((audio) => (
                    <div key={audio.id} className="overflow-hidden bg-white rounded-sm shadow-lg">
                        <div className="flex flex-col gap-4 p-3 md:flex-row ">
                            {/* Thumbnail with Heart */}
                            <div className="relative w-full md:w-[220px] h-[180px] md:h-[140px]">
                                <Image src={audio.image || "/placeholder.svg"} alt={audio.title} width={220} height={140} className="object-cover w-full h-full rounded-sm" />
                                <button className="absolute text-white cursor-pointer top-2 left-2">
                                    <CiHeart size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start md:gap-0">
                                    <div>
                                        <h2 className="text-md font-semibold text-primary">{audio.title}</h2>
                                        <p className="mt-1 text-xs text-gray-600">{audio.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <AiFillEye size={16} />
                                        <span>{audio.views}</span>
                                        <AiFillStar size={16} className="text-yellow-500" />
                                        <span>{audio.rating}</span>
                                    </div>
                                </div>

                                {/* Audio Player */}
                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        onClick={() => togglePlay(audio.id)}
                                        className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 cursor-pointer"
                                    >
                                        {playing === audio.id ? <FaPause size={12} /> : <FaPlay size={12} />}
                                    </button>

                                    {/* WaveSurfer Container */}
                                    <div id={`waveform-${audio.id}`} className="flex-1 min-w-0"></div>

                                    <div className="flex items-center gap-1 text-gray-500 whitespace-nowrap">
                                        <IoTimeOutline size={16} />
                                        <span className="text-xs">{audio.duration}</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {audio.tags.map((tag, index) => (
                                        <span key={index} className="bg-primary text-white text-[10px] px-3 py-1 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Delete Button */}
                            <div className="flex mt-3 md:ml-4 md:mt-0 md:items-start">
                                <button className="flex items-center gap-1 px-3 py-1 text-sm text-blue-900 transition-colors border border-blue-900 rounded-sm cursor-pointer hover:bg-red-50">
                                    <img src="/delete.svg" alt="" />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default PlaylistDetails;
