'use client'
import AllInstitution from '@/components/body/institution/AllInstitution';
import CreateInstituteModal from '@/components/body/institution/modal/CreateInstituteModal';
import UserInstituteDetailsModal from '@/components/body/institution/modal/UserinstituteDetailsModal';
import MyInstitution from '@/components/body/institution/MyInstitution';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const InstitutionPage = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCardUserProject, setSelectedCardUserProject] = useState(null)

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                className="xl:w-8/11 lg:w-10/12 px-5 my-10 mx-auto"
            >
                <motion.div
                    className="flex flex-col lg:flex-row gap-5 justify-between items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.h1 className="text-xl text-[#1C4587] font-bold" whileHover={{ scale: 1.05 }}>
                    Be part of it
                    </motion.h1>
                    <div className="flex gap-5 items-center justify-center">
                        <motion.div className="relative lg:w-[250] w-[150] text-gray-700 border border-[#1C4587] rounded-sm flex items-center px-2">
                            <CiSearch className="cursor-pointer" color="#1C4587" size={15} />
                            <input
                                type="text"
                                placeholder="Search Project"
                                className="px-2 py-1.5 lg:w-full w-36 rounded-sm lg:py-2 border-none outline-none focus:ring-0 text-[12px] text-gray-700"
                            />
                        </motion.div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-4 py-[9] rounded-sm font-medium text-[12px] outline-none focus:ring-0"
                        >
                            +Create Institution
                        </motion.button>
                    </div>
                </motion.div>

                <div className="flex justify-between">
                    <div className="mx-auto md:ml-0">
                        <motion.div
                            className="flex border-[#1C4587] border justify-between rounded-sm mt-5 lg:mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {[
                                { id: "all", label: "All Institution" },
                                { id: "my", label: "My Institution" },
                            ].map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    className={`px-4 py-2 text-[10px] font-medium transition-all border rounded-sm outline-none focus:ring-0 ${activeTab === tab.id
                                        ? "bg-[#1C4587] border border-[#1C4587] text-white"
                                        : "border-transparent text-gray-700"
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {tab.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                        className="mt-4"
                    >
                        {activeTab === "all" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <AllInstitution />
                            </motion.div>
                        )}
                        {activeTab === "my" && (
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MyInstitution setSelectedCardUserProject={setSelectedCardUserProject} />
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <CreateInstituteModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.div>

            {/* Modal  */}
            <UserInstituteDetailsModal
                selectedCardUserProject={selectedCardUserProject}
                setSelectedCardUserProject={setSelectedCardUserProject}
            />
        </>
    );
};

export default InstitutionPage;
