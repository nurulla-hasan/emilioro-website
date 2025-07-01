'use client'
import AllInstitution from '@/components/body/institution/AllInstitution';
import CreateInstituteModal from '@/components/body/institution/modal/CreateInstituteModal';
import UserInstituteDetailsModal from '@/components/body/institution/modal/UserinstituteDetailsModal';
import MyInstitution from '@/components/body/institution/MyInstitution';
import Container from '@/components/layout/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const InstitutionPage = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCardUserProject, setSelectedCardUserProject] = useState(null)

    const tabs = [
        { id: "all", label: "All Institutions" },
        { id: "my", label: "My Institutions" },
    ]

    return (
        <Container>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                className=""
            >
                <motion.div
                    className="flex flex-col items-start justify-between gap-5 lg:flex-row"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-xl text-[#1C4587] font-bold w-full">
                        Be part of it
                    </h1>
                    <div className="flex gap-2 justify-between lg:justify-end w-full items-center">
                        <motion.div className="relative w-fit text-gray-700 border border-[#1C4587] rounded-sm flex items-center px-2">
                            <CiSearch className="cursor-pointer" color="#1C4587" size={15} />
                            <input
                                type="text"
                                placeholder="Search Project"
                                className="px-2 py-1.5 lg:w-full w-28 rounded-sm lg:py-2 border-none outline-none focus:ring-0 text-[12px] text-gray-700"
                            />
                        </motion.div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer bg-button text-white px-4 py-[9] rounded-sm font-medium text-[12px] outline-none focus:ring-0"
                        >
                            +Create Institution
                        </motion.button>
                    </div>
                </motion.div>

                <div className="flex justify-between">
                    <div className="mx-auto md:ml-0">
                        <motion.div
                            className="flex border-[#1C4587] border justify-between rounded-sm overflow-hidden mt-5 lg:mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    className={`px-4 py-2 text-[10px] font-medium transition-all border outline-none focus:ring-0 cursor-pointer ${activeTab === tab.id
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
        </Container>
    );
};

export default InstitutionPage;
