"use client"
import { trendingData } from '@/data/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';


const AllTopics = () => {



    return (

        <>
            <div className='px-5 md:px-8'>
                <div className="flex-row items-center justify-between gap-5 md:flex">
                    <h1 className="text-xl text-[#1C4587] font-bold">Trending topics</h1>
                    <div className='flex items-center justify-center gap-5 mt-5'>
                        <div className="relative border border-[#1C4587] w-[45%] rounded-sm px-2 flex items-center">
                            <CiSearch className='absolute cursor-pointer ' color='#1C4587' size={16} />
                            <input
                                type="text"
                                placeholder="Search institute"
                                className="px-2 ml-3 text-sm py-1 lg:w-full rounded-full lg:py-1.5 border-none outline-none text-[#07398a]"
                            />
                        </div>
                        <motion.div
                            whileTap={{ scale: 0.99 }}
                            className="text-blue-500 font-semibold cursor-pointer flex-1 w-[45%]"
                        >
                            <button className="w-full cursor-pointer bg-button text-white px-5 py-[8px] md:py-[9px] rounded-sm font-semibold text-xs lg:text-[12px]">
                                +Upload New Audio
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid items-center grid-cols-1 gap-2 mx-auto mt-5 lg:grid-cols-4 md:grid-cols-3 lg:justify-between justify-items-center">
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
                                    <h3 className="mb-1 text-xs font-semibold">{item.title}</h3>

                                    {/* Audio Count */}
                                    <p className="text-xs font-[300] mb-4">{item.audioCount}</p>

                                </div>
                                {/* Button */}
                                <Link href="/chatting/allTopics/familyConversion/audio">
                                    <button className="border mt-8 border-white px-3 py-1 rounded-sm hover:bg-white hover:text-[#1C4587] cursor-pointer text-xs bg-button transition">
                                        Listen Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllTopics;