"use client"
import { motion } from 'framer-motion';
import { CiSearch } from "react-icons/ci";




const ObjectPage = () => {
    return (
        <div className='min-h-screen w-2/3 mx-auto mt-10'>

            <div className="flex justify-between items-center">
                <h1 className="text-xl text-[#1C4587] font-bold">Exchange Services & Goods</h1>

                <div className='flex gap-5 items-center justify-center'>
                    <div className="relative border border-[#365173] rounded-lg flex items-center">
                        <CiSearch className='ml-2' color='#1C4587' size={15}/>
                        <input
                            type="text"
                            placeholder="Search Project"
                            // onChange={(e) => onSearch(e.target.value)}
                            className="px-3 py-2 border-none outline-none text-[#1C4587]"
                        />

                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-4 py-2 rounded-md font-medium">
                            +Create New Project
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ObjectPage;