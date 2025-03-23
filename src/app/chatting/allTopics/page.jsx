"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";


const AllTopics = () => {

    const trendingData = [
        {
            id: 1,
            title: "Family Conversation",
            audioCount: "3k+ audio",
            image: "/trading1.png",
        },
        {
            id: 2,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 3,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 4,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 5,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 6,
            title: "Family Conversation",
            audioCount: "3k+ audio",
            image: "/trading1.png",
        },
        {
            id: 7,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 8,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 9,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 10,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 11,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 12,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
    ];

    return (
        <div className='px-5 mx-auto my-10 xl:w-8/11 lg:w-9/12'>
            <div className=" lg:px-5 mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center">
                <h1 className="text-xl lg:text-3xl text-[#1C4587] font-bold">Trending topics</h1>
                <div className='flex gap-5 items-center justify-center'>
                    <div className="relative lg:w-[250px] w-[150px] border border-[#1C4587] rounded-sm flex items-center px-2">
                        <CiSearch className='cursor-pointer' color='#1C4587' size={15} />
                        <input
                            type="text"
                            placeholder="Search institute"
                            className="px-2 py-1 lg:w-full w-36 rounded-full lg:py-1.5 border-none outline-none text-[#07398a]"
                        />
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-5 lg:py-[10px] py-[9px] rounded-sm font-semibold text-xs lg:text-[12px]">
                            +Upload New Audio
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Cards */}
            <div className="mx-auto my-16 lg:px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:justify-between justify-items-center items-center">
                {trendingData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#1C4587] w-full rounded-sm flex p-2 gap-3 items-center text-white"
                    >
                        <div>
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[150px] bg-white object-cover rounded-md"
                            />
                        </div>
                        <div>

                            <div>
                                {/* Title */}
                                <h3 className="text-xs font-semibold mb-1">{item.title}</h3>

                                {/* Audio Count */}
                                <p className="text-xs font-[300] mb-4">{item.audioCount}</p>

                            </div>
                            {/* Button */}
                            <Link href="/chatting/allTopics/familyConversion/audio">
                                <button className="border mt-8 border-white px-3 py-1 rounded-md hover:bg-white hover:text-[#1C4587] text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition">
                                    Listen Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTopics;