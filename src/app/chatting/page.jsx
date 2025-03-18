"use client"
import ConversationList from '@/components/body/ConversationList';
import TrendingTopics from '@/components/body/TrendingTopics';
import MostPlayedSection from '@/components/slider/MostPlayedSection';
import { motion } from 'framer-motion';
import { CiSearch } from 'react-icons/ci';

const ChattingPage = () => {
    return (
        <div className='my-10'>
            <div className="xl:w-6/9 lg:w-5/6 px-5 mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center">
                <h1 className="text-3xl text-[#1C4587] font-bold">We are chatting</h1>
                <div className='flex gap-5 items-center justify-center'>
                    <div className="relative lg:w-[250px] w-[150px] border border-[#1C4587] rounded-lg flex items-center px-2">
                        <CiSearch className='cursor-pointer' color='#1C4587' size={15} />
                        <input
                            type="text"
                            placeholder="Search institute"
                            className="px-2 py-1 lg:w-full w-36 rounded-full lg:py-2 border-none outline-none text-[#07398a]"
                        />
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-5 lg:py-[10px] py-[9px] rounded-lg font-semibold text-xs lg:text-[15px]">
                            +Upload New Audio
                        </button>
                    </motion.div>
                </div>
            </div>
            <MostPlayedSection/>
            <TrendingTopics/>
            <ConversationList/>
        </div>
    );
};

export default ChattingPage;