"use client";
import photo from "../../../public/mostPlayed.png"
import { FaCirclePlay } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";



import { CiHeart } from "react-icons/ci";
import Link from "next/link";

// Example JSON data
const data = [
    {
        id: 1,
        title: "Family Conversation",
        plays: "3.5k",
        rating: "5",
        tags: ["Family", "Travel"],
        duration: "02:20min",
        image: photo,
    },
    {
        id: 2,
        title: "Family Conversation",
        plays: "3.5k",
        rating: "5",
        tags: ["Family", "Travel"],
        duration: "02:20min",
        image: photo,
    },
    {
        id: 3,
        title: "Family Conversation",
        plays: "3.5k",
        rating: "5",
        tags: ["Family", "Travel"],
        duration: "02:20min",
        image: photo,
    },
    {
        id: 4,
        title: "Family Conversation",
        plays: "3.5k",
        rating: "5",
        tags: ["Family", "Travel"],
        duration: "02:20min",
        image: photo,
    },
];

const MostPlayedSection = () => {
    return (
        <div className="mx-auto my-16 w-3/4 px-5">
            <div className="flex items-center justify-between mx-auto">

                <h1 className="text-2xl my-5 font-bold text-blue-900">Most played in this week</h1>
                <Link href="#" className="text-[#1C4587] font-medium">
                    View all
                </Link>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 justify-center items-center">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex-shrink-0 w-64 rounded-lg group "
                    >
                        {/* Image Container */}
                        <div className="relative h-40 overflow-hidden rounded-xl">
                            <img
                                src={item.image.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition duration-300 group-hover:blur-xs"
                            />

                            <div className="absolute top-2 left-2 text-white font-bold cursor-pointer">
                                <CiHeart size={20}></CiHeart>
                            </div>

                            {/* Play Icon (Hidden before hover) */}
                            <div className=" absolute bottom-2 left-2 rounded-full text-[#1C4587] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <FaCirclePlay size={50} />
                            </div>

                            {/* Menu Icon (Hidden before hover) */}
                            <div className="absolute top-0 right-2  p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-90 cursor-pointer">
                                <CiMenuKebab size={22} className="text-white" />
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-1">
                            <div className="flex justify-between">
                                <h2 className="text-[12px] font-semibold text-blue-900">{item.title}
                                </h2>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-1">
                                        <LuEye size={12} color="#6F6F6F"></LuEye>
                                        <p className="text-[12px] text-gray-600">
                                            {item.plays}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaRegStar size={12} color="#d8ad00" />
                                        <p className="text-[12px] text-gray-600">{item.rating}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 flex justify-between items-center">
                                <div className="flex items-center gap-1 *:px-[4px] *:py-[1px] *:rounded-xs">

                                    <p className="text-[10px] font-[300] bg-[#1C4587] text-white">{item.tags[0]}</p>
                                    <p className="text-[10px] font-[300] bg-[#1C4587] text-white">{item.tags[1]}</p>

                                </div>
                                <div className="flex gap-1 items-center">
                                    <IoTimeOutline size={12} />
                                    <p className="text-[12px] text-gray-600">{item.duration}</p>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostPlayedSection;
