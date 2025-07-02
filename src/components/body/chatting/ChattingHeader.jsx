"use client"
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion"

const ChattingHeader = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4 my-5 px-5 md:px-8">
            <h1 className="text-xl md:text-2xl font-bold text-primary ">We are chatting</h1>
            <div className="flex flex-row items-start md:items-center gap-4 w-full md:w-auto">
                <div className="relative flex items-center border border-primary rounded-sm px-3 py-1.5 w-full md:w-auto">
                    <CiSearch className="text-primary" size={16} />
                    <input
                        type="text"
                        placeholder="Search institute"
                        className="ml-2 outline-none text-sm text-[#07398a] w-full"
                    />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer bg-button text-white px-5 py-[7px] rounded-sm text-sm font-semibold w-full md:w-auto"
                >
                    + Upload New Audio
                </motion.button>
                {/* <FaMicrophone color="#1C4587" size={30}/> */}
            </div>
        </div>
    );
};

export default ChattingHeader;