"use client"
import ConversationList from '@/components/body/ConversationList';
import TrendingTopics from '@/components/body/TrendingTopics';
import MostPlayedSection from '@/components/slider/MostPlayedSection';
import { motion } from 'framer-motion';
import { CiSearch } from 'react-icons/ci';

const ChattingPage = () => {
    return (
        <div className=''>
            <div className=' md:h-[calc(100vh-88px)] overflow-scroll hide-scrollbar'>
                <div className="my-10 xl:w-8/11 lg:w-10/12 px-5 mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center">
                    <h1 className="text-2xl text-[#1C4587] font-bold">We are chatting</h1>
                    <div className='flex gap-5 items-center justify-center'>
                        <div className="relative lg:w-[250px] w-[150px] border border-[#1C4587] rounded-lg flex items-center px-2">
                            <CiSearch className='cursor-pointer' color='#1C4587' size={15} />
                            <input
                                type="text"
                                placeholder="Search institute"
                                className="px-2 py-1 md:py-1.5 lg:w-full w-36 rounded-full text-sm border-none outline-none text-[#07398a]"
                            />
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.99 }}
                            className="text-blue-500 font-semibold cursor-pointer"
                        >
                            <button className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-5 lg:py-[8px] py-[9px] rounded-lg font-semibold text-xs lg:text-[12px]">
                                +Upload New Audio
                            </button>
                        </motion.div>
                    </div>
                </div>
                <MostPlayedSection />
                <TrendingTopics />
                <ConversationList />
            </div>
        </div>
    );
};

export default ChattingPage;