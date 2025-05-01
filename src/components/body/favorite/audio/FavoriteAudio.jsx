"use client"
import { CiMenuKebab } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaPlay, FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { favoriteAudioData } from "@/data/data";

const FavoriteAudio = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-between gap-8 mb-5 ">
                <div className="grid grid-cols-1 gap-2 overflow-scroll sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 hide-scrollbar">
                    {favoriteAudioData.map((item) => (
                        <div
                            key={item.id}
                            className="relative flex-shrink-0 w-full px-5 mx-auto lg:px-0 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-40 overflow-hidden rounded-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full transition duration-300 group-hover:blur-xs"
                                />

                                <div className="absolute font-bold text-white cursor-pointer top-2 left-2">
                                    <CiHeart size={20} />
                                </div>

                                {/* Play Icon (Hidden before hover) */}
                                <button
                                    className="bg-[#1C4587] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    <FaPlay size={14} />
                                </button>

                                {/* Menu Icon (Hidden before hover) */}
                                <div className="absolute top-0 p-1 transition-opacity duration-300 rotate-90 rounded-full opacity-0 cursor-pointer right-2 group-hover:opacity-100">
                                    <CiMenuKebab size={22} className="text-white" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-1">
                                <div className="flex justify-between">
                                    <h2 className="text-[12px] font-semibold text-blue-900">
                                        {item.title}
                                    </h2>
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

                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-1 *:px-[4px] *:py-[1px] *:rounded-xs">
                                        {item.tags.map((tag, index) => (
                                            <p
                                                key={index}
                                                className="text-[10px] font-[300] bg-[#1C4587] text-white px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IoTimeOutline size={12} />
                                        <p className="text-[12px] text-gray-600">{item.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="mb-5 border-b border-gray-500"></div>
            <div className="rounded-md">
                <AudioPlayer />
            </div> */}

        </div>
    );
};

export default FavoriteAudio;
