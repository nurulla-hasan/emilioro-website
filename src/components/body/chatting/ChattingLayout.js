"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FaMusic, FaFire, FaComments, FaHeart, FaList, FaBars, FaTimes } from "react-icons/fa";
import Favorite from "@/app/chatting/favorite/page";
import MostPlayedSection from "@/components/slider/MostPlayedSection";
import TrendingTopics from "../TrendingTopics";
import ConversationList from "../ConversationList";
import MyPlaylist from "@/app/chatting/allPlaylist/myPlaylist/page";

const ChattingLayout = ({ children }) => {
    const menuItems = [
        { id: 0, name: "All Content", icon: <FaBars />, component: null },
        { id: 4, name: "Favorite", icon: <FaHeart />, component: <Favorite /> },
        { id: 5, name: "Playlist", icon: <FaList />, component: <MyPlaylist /> },
        { id: 1, name: "Most Played", icon: <FaMusic />, component: <MostPlayedSection /> },
        { id: 2, name: "Trending", icon: <FaFire />, component: <TrendingTopics /> },
        { id: 3, name: "Conversations", icon: <FaComments />, component: <ConversationList /> },
    ];

    const [activeTab, setActiveTab] = useState(menuItems[0]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const handleTabChange = (item) => {
        setActiveTab(item);
        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="mx-auto p-4 md:px-6 lg:px-0 md:h-[calc(100vh-88px)]">
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#1C4587]">Real conversation between people</h1>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 bg-[#1C4587] text-white rounded-md cursor-pointer"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Sidebar - Desktop always visible, Mobile conditionally visible */}
                <AnimatePresence>
                    {(isMobileMenuOpen || !isMobile) && (
                        <motion.div
                            initial={isMobile ? { opacity: 0, height: 0 } : { opacity: 1 }}
                            animate={isMobile ? { opacity: 1, height: "auto" } : { opacity: 1 }}
                            exit={isMobile ? { opacity: 0, height: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`${isMobile ? "w-full" : "w-full lg:w-57"} bg-[#f8f9fc] -my-5 p-4 rounded-lg shadow-md mb-5 lg:mb-0`}
                        >
                            <h2 className="text-lg font-semibold text-[#1C4587] mb-4">Menu</h2>
                            <ul className={`flex ${isMobile ? "flex-row overflow-x-auto hide-scrollbar" : "flex-col"} gap-3`}>
                                {menuItems.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center gap-2 p-3 cursor-pointer rounded-lg transition-all ${
                                            isMobile ? "min-w-[120px] justify-center" : ""
                                        } ${activeTab.id === item.id ? "bg-[#1C4587] text-white" : "hover:bg-gray-200"}`}
                                        onClick={() => handleTabChange(item)}
                                    >
                                        {item.icon}
                                        <span className={isMobile ? "text-sm" : ""}>{item.name}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Content Area */}
                <div className="flex-1 px-5 pb-10 md:h-[calc(100vh-104px)] overflow-y-auto hide-scrollbar ">
                    <div className="xl:w-10/12 lg:w-10/12">
                        {activeTab.id === 0 ? (
                            <>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
                                    <h1 className="text-xl md:text-2xl font-bold text-[#1C4587] hidden lg:block">We are chatting</h1>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
                                        <div className="relative flex items-center border border-[#1C4587] rounded-sm px-3 py-1.5 w-full md:w-auto">
                                            <CiSearch className="text-[#1C4587]" size={16} />
                                            <input
                                                type="text"
                                                placeholder="Search institute"
                                                className="ml-2 outline-none text-sm text-[#07398a] w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <MostPlayedSection />
                                <TrendingTopics />
                                <ConversationList />
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                                    <h1 className="text-xl md:text-2xl font-bold text-[#1C4587] hidden lg:block">
                                        {activeTab.name}
                                    </h1>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
                                        <div className="relative flex items-center border border-[#1C4587] rounded-sm px-3 py-1.5 w-full md:w-auto">
                                            <CiSearch className="text-[#1C4587]" size={16} />
                                            <input
                                                type="text"
                                                placeholder="Search institute"
                                                className="ml-2 outline-none text-sm text-[#07398a] w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {activeTab.component}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChattingLayout;
