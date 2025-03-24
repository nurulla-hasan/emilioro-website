'use client'
import AllInstitution from '@/components/body/institution/AllInstitution';
import CreateInstituteModal from '@/components/body/institution/modal/CreateInstituteModal';
import MyInstitution from '@/components/body/institution/MyInstitution';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const InstitutionPage = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='xl:w-8/11 lg:w-10/12 px-5 my-10 mx-auto'
        >
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
                <h1 className="text-xl text-[#1C4587] font-bold">Institution</h1>
                <div className='flex gap-5 items-center justify-center'>
                    <div className="relative lg:w-[250px] w-[150px] border border-[#365173] rounded-lg flex items-center px-2">
                        <CiSearch className='cursor-pointer' color='#1C4587' size={20} />
                        <input
                            type="text"
                            placeholder="Search Project"
                            className="px-2 py-1.5 lg:w-full w-36 rounded-full lg:py-2 border-none outline-none text-[#1C4587] text-sm"
                        />
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button onClick={() => setIsOpen(true)} className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-4 lg:py-2 py-[9px] rounded-md font-medium text-xs lg:text-sm">
                            +Create Institute
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Tabs------ */}
            <div className='flex justify-between'>
                <div className='mx-auto md:ml-0'>
                    <div className=" flex border-[#1C4587] border justify-between rounded-sm mt-5 lg:mt-10">
                        {[{ id: "all", label: "All Institution" }, { id: "my", label: "My Institution" }].map((tab) => (
                            <motion.button
                                key={tab.id}
                                className={`px-4 py-2 text-xs font-medium transition-all border rounded-sm ${activeTab === tab.id
                                    ? "bg-[#1C4587] border border-[#1C4587] text-white"
                                    : "border-transparent text-[#1C4587]"}`}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                <AnimatePresence mode="wait">
                    {activeTab === "all" && (
                        <motion.div
                            key="all"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <AllInstitution />
                        </motion.div>
                    )}
                    {activeTab === "my" && (
                        <motion.div
                            key="my"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MyInstitutionComponent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


            {/* Modal */}
            <CreateInstituteModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
    );
};

const MyInstitutionComponent = () => (
    <div>

        <MyInstitution />

    </div>
);

export default InstitutionPage;
