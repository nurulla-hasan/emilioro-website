"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdShare } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';


const AllPlaylist = () => {

    const conversations = [

        {
            id: 1,
            title: "Family Conversation",
            image: "/conversion1.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 2,
            title: "Family Conversation",
            image: "/conversion2.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 3,
            title: "Family Conversation",
            image: "/conversion3.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 4,
            title: "Family Conversation",
            image: "/conversion1.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 5,
            title: "Family Conversation",
            image: "/conversion2.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 6,
            title: "Family Conversation",
            image: "/conversion3.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 7,
            title: "Family Conversation",
            image: "/conversion1.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 8,
            title: "Family Conversation",
            image: "/conversion2.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 9,
            title: "Family Conversation",
            image: "/conversion3.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        }

    ]

    return (
        <div className='my-5 px-5 md:px-8'>
            <div className=" mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center">
                <h1 className="text-xl text-[#1C4587] font-bold">All Playlist</h1>
                <div className='flex gap-5 items-center justify-center'>
                    <div className="relative lg:w-[250px] w-[150px] border border-[#1C4587] rounded-sm flex items-center px-2">
                        <CiSearch className='cursor-pointer' color='#1C4587' size={15} />
                        <input
                            type="text"
                            placeholder="Search institute"
                            className="px-2 py-1 text-sm lg:w-full w-36 rounded-full lg:py-2 border-none outline-none text-[#07398a]"
                        />
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-5 lg:py-[10px] py-[9px] rounded-sm font-semibold text-xs lg:text-[13px]">
                            +Upload New Audio
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Cards */}
            <div className="mx-auto mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:justify-between justify-items-center items-center">
                {conversations.map((conversation, index) => (
                    <div key={conversation.id} className='flex flex-col gap-2'>
                        <div>
                            <img
                                src={conversation.image}
                                className='rounded-md'
                                alt='image'
                            >
                            </img>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <div className="text-sm text-[#1C4587] font-semibold mb-1">
                                    {conversation.title}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">

                                        <div className="flex items-center gap-1">
                                            <HiOutlineMenuAlt2 size={12} color="#1C4587" />
                                            <p className=" text-[12px] text-gray-600">{conversation.type}</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <IoTimeOutline size={14} color="#1C4587" />
                                            <p className="text-[12px] text-gray-600">
                                                {conversation.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <Link href={`/chatting/allPlaylist/myPlaylist/${conversation.id}`}>
                                    <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-6 py-[6px] rounded-sm text-xs font-medium">
                                        View
                                    </button>
                                </Link>
                                <button className='flex gap-2 px-3 text-xs py-[4.5px] items-center bg-white  rounded-sm font-semibold border-2 border-[#1C4587] to-[#3279EA] text-[#1C4587] cursor-pointer'>
                                    < IoMdShare />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlaylist;