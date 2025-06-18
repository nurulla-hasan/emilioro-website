"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaMusic, FaFire, FaComments, FaHeart, FaList, FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AudioPlayer from "@/components/body/favorite/audio/AudioPlayer"

const ChattingLayout = ({ children }) => {
    const menuItems = [
        { id: 0, name: "All Content", icon: <FaBars />, path: "/chatting" },
        { id: 4, name: "Favorite", icon: <FaHeart />, path: "/chatting/favorite" },
        { id: 5, name: "Playlist", icon: <FaList />, path: "/chatting/all-playlist/my-playlist" },
        { id: 1, name: "Most Played", icon: <FaMusic />, path: "/chatting/most-played" },
        { id: 2, name: "Trending", icon: <FaFire />, path: "/chatting/trending" },
        { id: 3, name: "Conversations", icon: <FaComments />, path: "/chatting/all-topics/family-conversion/audio" },
    ]

    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        checkIfMobile()
        window.addEventListener("resize", checkIfMobile)
        return () => window.removeEventListener("resize", checkIfMobile)
    }, [])

    const getActiveMenuItem = () => {
        const exactMatch = menuItems.find((item) => item.path === pathname)
        if (exactMatch) return exactMatch.id
        const partialMatch = menuItems.find((item) => item.path !== "/chatting" && pathname.startsWith(item.path))
        if (partialMatch) return partialMatch.id
        return 0
    }

    const activeMenuId = getActiveMenuItem()

    return (
        <div className="flex flex-col md:gap-8 lg:flex-row h-[calc(100vh-88px)] overflow-scroll hide-scrollbar  max-w-full mx-auto">
            {/* Sidebar - Desktop always visible, Mobile conditionally visible */}
            <div className="shadow-md bg-[#f8f9fc]">
                {/* Mobile Menu Toggle */}
                <div className="flex items-center justify-between p-4 lg:hidden">
                    <h2 className="text-lg font-semibold text-[#1C4587]">Menu</h2>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 bg-[#1C4587] text-white rounded-sm cursor-pointer"
                    >
                        {isMobileMenuOpen ? <FaTimes size={10} /> : <FaBars size={10} />}
                    </button>
                </div>

                <AnimatePresence mode="sync">
                    {(isMobileMenuOpen || !isMobile) && (
                        <motion.div
                            initial={
                                isMobile
                                    ? {
                                        opacity: 0,
                                        height: 0,
                                        scale: 0.98,
                                    }
                                    : { opacity: 1 }
                            }
                            animate={
                                isMobile
                                    ? {
                                        opacity: 1,
                                        height: "auto",
                                        scale: 1,
                                    }
                                    : { opacity: 1 }
                            }
                            exit={
                                isMobile
                                    ? {
                                        opacity: 0,
                                        height: 0,
                                        scale: 0.98,
                                    }
                                    : { opacity: 1 }
                            }
                            transition={{
                                duration: 0.4,
                                ease: [0.04, 0.62, 0.23, 0.98], 
                                height: { duration: 0.5 }, 
                                opacity: { duration: 0.3 }, 
                            }}
                            className=" h-[calc(100vh-88px)] p-2 rounded-sm overflow-hidden"
                        >
                            <h2 className="text-lg font-semibold text-[#1C4587] mb-4 hidden lg:block">Menu</h2>
                            <ul className={`flex ${isMobile ? "flex-row overflow-x-auto hide-scrollbar text-xs" : "flex-col"} gap-3`}>
                                {menuItems.map((item) => (
                                    <Link href={item.path} key={item.id} className="contents ">
                                        <motion.li
                                            transition={{
                                                duration: 0.1,
                                                ease: "easeOut",
                                                scale: { type: "spring", stiffness: 300, damping: 20 },
                                            }}
                                            className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-sm transition-all ${isMobile ? "min-w-[120px] justify-center " : ""
                                                } ${activeMenuId === item.id ? "bg-[#1C4587] text-white" : "hover:bg-gray-200"}`}
                                            onClick={() => isMobile && setIsMobileMenuOpen(false)}
                                        >
                                            {item.icon}
                                            <span className={isMobile ? "text-xs" : ""}>{item.name}</span>
                                        </motion.li>
                                    </Link>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Main Content Area */}
            <div className="h-[calc(100vh-175px)] overflow-scroll hide-scrollbar w-full">{children}</div>
            <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-300 backdrop-blur-2xl">
                <div className="flex items-center justify-center w-full p-2 mx-auto xl:w-8/11 lg:w-10/12">
                    <AudioPlayer />
                </div>
            </div>
        </div>
    )
}

export default ChattingLayout

