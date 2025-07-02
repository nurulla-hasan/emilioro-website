'use client'
import AllInstitution from '@/components/body/institution/AllInstitution';
import CreateInstituteModal from '@/components/body/institution/modal/CreateInstituteModal';
import UserInstituteDetailsModal from '@/components/body/institution/modal/UserinstituteDetailsModal';
import MyInstitution from '@/components/body/institution/MyInstitution';
import Container from '@/components/layout/Container';
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
            <div>
                <div
                    className="flex flex-col items-start justify-between gap-5 lg:flex-row"
                >
                    <h1 className="text-xl text-primary font-bold w-full">
                        Be part of it
                    </h1>
                    <div className="flex gap-2 justify-between lg:justify-end w-full items-center">
                        <div className="relative w-fit text-gray-700 border border-primary rounded-sm flex items-center px-2">
                            <CiSearch className="cursor-pointer" color="#1C4587" size={15} />
                            <input
                                type="text"
                                placeholder="Search Project"
                                className="px-2 py-1.5 lg:w-full w-28 rounded-sm lg:py-2 border-none outline-none focus:ring-0 text-[12px] text-gray-700"
                            />
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer bg-button text-white px-4 py-[9] rounded-sm font-medium text-[12px] outline-none focus:ring-0"
                        >
                            + Create Institution
                        </button>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="mx-auto md:ml-0">
                        <div
                            className="flex border-primary border justify-between rounded-sm overflow-hidden mt-5 lg:mt-10"
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`px-4 py-2 text-[10px] font-medium transition-all border outline-none focus:ring-0 cursor-pointer ${activeTab === tab.id
                                        ? "bg-primary border border-primary text-white"
                                        : "border-transparent text-gray-700"
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div key={activeTab} className="mt-4">
                    {activeTab === "all" && (
                        <div>
                            <AllInstitution />
                        </div>
                    )}
                    {activeTab === "my" && (
                        <div>
                            <MyInstitution setSelectedCardUserProject={setSelectedCardUserProject} />
                        </div>
                    )}
                </div>

                <CreateInstituteModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Modal  */}
            <UserInstituteDetailsModal
                selectedCardUserProject={selectedCardUserProject}
                setSelectedCardUserProject={setSelectedCardUserProject}
            />
        </Container>
    );
};

export default InstitutionPage;
