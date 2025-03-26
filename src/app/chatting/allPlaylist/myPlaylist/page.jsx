"use client"
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdShare } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';
import { AiOutlineEdit } from "react-icons/ai";
import CreatePlaylistModal from '@/components/body/myPlaylist/modal/CreatePlaylistModal';
import { useState } from 'react';
import Link from 'next/link';
import ChattingHeader from '@/components/body/chatting/ChattingHeader';


const MyPlaylist = () => {

    const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] = useState(false);
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

    ]
    return (
        <div className=" my-5 md:px-8">

            <div className=" mx-auto flex flex-col md:flex-row gap-5 justify-between items-center">
                <h1 className="w-full text-xl text-[#1C4587] md:text-left text-center font-bold">My Playlists</h1>
                <div className='flex gap-5 w-full items-center justify-center md:justify-end'>
                    <motion.div
                        className=' border border-[#1e4a9b] px-3 py-[3px] rounded-sm bg-white'
                        whileHover={{ scale: 1.05 }}
                    >
                        <select className='text-sm text outline-none text-gray-600'>
                            <option value="">Liked</option>
                            <option value="">Created</option>
                        </select>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button onClick={() => setIsCreatePlaylistModalOpen(true)} className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-5 py-3 lg:py-2 rounded-sm font-medium text-xs lg:text-[12px]">
                            +Create new playlist
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Cards */}
            <div className="mx-auto my-5 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 lg:justify-between justify-items-center items-center">
                {conversations.map((conversation, index) => (
                    <div key={conversation.id} className='flex flex-col gap-2'>
                        <div>
                            <img
                                src={conversation.image}
                                className='rounded-sm h-[180px] w-[334px]'
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

                                <button className='flex gap-2 px-3 text-xs py-[4.5px] items-center bg-white  rounded-sm font-semibold border-2 border-[#1C4587] to-[#3279EA] text-[#1C4587]'>
                                    < AiOutlineEdit />
                                    <span>Edit</span>
                                </button>
                                <button className='flex gap-2 px-3 text-xs py-[4.5px] items-center bg-white  rounded-sm font-semibold border-2 border-[#1C4587] to-[#3279EA] text-[#1C4587]'>
                                    < IoMdShare />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal */}
            <CreatePlaylistModal isOpen={isCreatePlaylistModalOpen} setIsOpen={setIsCreatePlaylistModalOpen} />
        </div>
    );
};

export default MyPlaylist;