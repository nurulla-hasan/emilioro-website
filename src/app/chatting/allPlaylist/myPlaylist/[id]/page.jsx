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

    if (!conversation) return <p className="text-center mt-10">No Data Found</p>;

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
        <div className="my-5 px-5 md:px-8">



            {/* Cover Image */}
            <div className="w-full h-48 bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(${conversation.image})` }}></div>

            {/* Title & Creator Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Conversation Info */}
                <div className="mt-4">
                    <h1 className="text-xl md:text-2xl font-bold">{conversation.title}</h1>
                    <p className="text-gray-500 text-sm md:text-base">{conversation.type} | {conversation.duration}</p>
                    <p className="text-xs md:text-sm text-gray-400">Last Updated: {conversation.lastUpdated}</p>
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
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center w-full sm:w-auto mt-4">
                <button className="w-full cursor-pointer sm:w-auto bg-white border border-[#193f7c] text-[#193f7c] px-4 py-2 rounded-sm font-semibold text-xs sm:text-sm flex items-center gap-2 justify-center">
                    <img src="/delete.svg" alt="" className="w-4 h-4" />
                    <span>Delete Playlist</span>
                </button>
                <button className="w-full cursor-pointer sm:w-auto bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-5 py-2 rounded-sm font-semibold text-xs sm:text-sm">
                    <span>Edit Playlist</span>
                </button>
            </div>


            {/* Audio List */}
            <div className="space-y-4 mt-6">
                {conversation.audios.map((audio) => (
                    <div key={audio.id} className="bg-white rounded-sm shadow-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row p-3 gap-4">
                            {/* Thumbnail with Heart */}
                            <div className="relative w-full md:w-[220px] h-[180px] md:h-[140px]">
                                <Image src={audio.image || "/placeholder.svg"} alt={audio.title} width={220} height={140} className="rounded-sm object-cover w-full h-full" />
                                <button className="cursor-pointer absolute top-2 left-2 text-white">
                                    <CiHeart size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-2 md:gap-0">
                                    <div>
                                        <h2 className="text-md font-semibold text-[#1C4587]">{audio.title}</h2>
                                        <p className="text-gray-600 text-xs mt-1">{audio.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <AiFillEye size={16} />
                                        <span>{audio.views}</span>
                                        <AiFillStar size={16} className="text-yellow-500" />
                                        <span>{audio.rating}</span>
                                    </div>
                                </div>

                                {/* Audio Player */}
                                <div className="mt-2 flex items-center gap-3">
                                    <button
                                        onClick={() => togglePlay(audio.id)}
                                        className="bg-[#1C4587] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 cursor-pointer"
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
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {audio.tags.map((tag, index) => (
                                        <span key={index} className="bg-[#1C4587] text-white text-[10px] px-3 py-1 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Delete Button */}
                            <div className="md:ml-4 mt-3 md:mt-0 flex md:items-start">
                                <button className="border cursor-pointer border-blue-900 text-blue-900 px-3 py-1 rounded-sm flex items-center gap-1 text-sm hover:bg-red-50 transition-colors">
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
