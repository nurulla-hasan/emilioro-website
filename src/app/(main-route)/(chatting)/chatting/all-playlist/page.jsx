"use client"
import { conversations } from '@/data/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdShare } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';


const AllPlaylist = () => {

    

    return (
        <div className='px-5 my-5 md:px-8'>
            <div className="flex flex-col items-start justify-between gap-5 mx-auto lg:flex-row">
                <h1 className="text-xl text-primary font-bold">All Playlist</h1>
                <div className='flex items-center justify-center gap-5'>
                    <div className="relative lg:w-[250px] w-[150px] border border-primary rounded-sm flex items-center px-2">
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
                        className="font-semibold text-blue-500 cursor-pointer"
                    >
                        <button className="cursor-pointer bg-button text-white px-5 lg:py-[10px] py-[9px] rounded-sm font-semibold text-xs lg:text-[13px]">
                            +Upload New Audio
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Cards */}
            <div className="grid items-center grid-cols-1 gap-5 mx-auto mt-5 lg:grid-cols-3 3xl:grid-cols-4 md:grid-cols-2 lg:justify-between justify-items-center ">
                {conversations.map((conversation, index) => (
                    <div key={conversation.id} className='flex flex-col gap-2 p-2 border border-gray-300 rounded-sm shadow-md'>
                        <div>
                            <img
                                src={conversation.image}
                                className='rounded-md'
                                alt='image'
                            >
                            </img>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className="text-sm text-primary font-semibold mb-1">
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

                            <div className='flex items-center justify-between'>
                                <Link href={`/chatting/allPlaylist/myPlaylist/${conversation.id}`}>
                                    <button className="cursor-pointer bg-button text-white px-6 py-[6px] rounded-sm text-xs font-medium">
                                        View
                                    </button>
                                </Link>
                                <button className='flex gap-2 px-3 text-xs py-[4.5px] items-center bg-white  rounded-sm font-semibold border-2 border-primary to-[#3279EA] text-primary cursor-pointer'>
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