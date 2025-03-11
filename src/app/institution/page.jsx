"use client"
import AllInstitution from '@/components/body/institution/AllInstitution';
import MyInstitution from '@/components/body/institution/MyInstitution';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";




const InstitutionPage = () => {

    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className='min-h-screen lg:w-2/3  mx-auto mt-10 mb-20'>

            <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
                <h1 className="text-xl text-[#1C4587] font-bold">Exchange Services & Goods</h1>
                <div className='flex gap-5 items-center justify-center'>
                    <div className="relative lg:w-[250] w-[150] border border-[#365173] rounded-lg flex items-center px-2">
                        <CiSearch className='cursor-pointer' color='#1C4587' size={15} />
                        <input
                            type="text"
                            placeholder="Search Project"
                            // onChange={(e) => onSearch(e.target.value)}
                            className="px-2 py-1 lg:w-full w-36 rounded-full lg:py-2 border-none outline-none text-[#1C4587]"
                        />

                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-4 lg:py-2 py-[9] rounded-md font-medium text-xs lg:text-lg">
                            +Create New Project
                        </button>
                    </motion.div>
                </div>
            </div>


            {/* Tabs------ */}
            <div className="flex ml-8 lg:ml-0 border-[#1C4587] border w-60 justify-between rounded-sm mt-5 lg:mt-10">
                {[
                    { id: "all", label: "All Institution" },
                    { id: "my", label: "My Institution" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 text-xs font-medium transition-all border rounded-sm ${activeTab === tab.id
                            ? "bg-[#1C4587] border border-[#1C4587] text-white"
                            : "border-transparent text-[#1C4587]"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* tab content */}
            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "all" && <AllInstituteCompo />}
                {activeTab === "my" && <MyInstituteCompo />}
                {/* {activeTab === "joined" && <JoinedProjects />} */}
            </div>



        </div>
    );
};

const AllInstituteCompo = () => (
    <div>
        <AllInstitution></AllInstitution>
    </div>
);

const MyInstituteCompo = () => (
    <div className='relative '>
        <div className='absolute -top-22 right-8 lg:-top-[84px] lg:right-0 border border-[#1e4a9b] px-1 rounded-sm bg-white'>
            <select className='text-xs text outline-none py-1'>
                <option value="">Created</option>
                <option value="">Joind</option>
            </select>
        </div>
        <MyInstitution />
    </div>
);

export default InstitutionPage;