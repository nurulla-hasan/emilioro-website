"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaMusic, FaFire, FaComments, FaHeart, FaList, FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"

const ChattingLayout = ({ children }) => {
    const menuItems = [
        { id: 0, name: "All Content", icon: <FaBars />, path: "/chatting" },
        { id: 4, name: "Favorite", icon: <FaHeart />, path: "/chatting/favorite" },
        { id: 5, name: "Playlist", icon: <FaList />, path: "/chatting/allPlaylist/myPlaylist" },
        { id: 1, name: "Most Played", icon: <FaMusic />, path: "/chatting/mostPlayed" },
        { id: 2, name: "Trending", icon: <FaFire />, path: "/chatting/trending" },
        { id: 3, name: "Conversations", icon: <FaComments />, path: "/chatting/allTopics/familyConversion/audio" },
    ]

    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        // Initial check
        checkIfMobile()

        // Add event listener
        window.addEventListener("resize", checkIfMobile)

        // Cleanup
        return () => window.removeEventListener("resize", checkIfMobile)
    }, [])

    // Find active menu item based on current path
    const getActiveMenuItem = () => {
        // Exact match first
        const exactMatch = menuItems.find((item) => item.path === pathname)
        if (exactMatch) return exactMatch.id

        // Then check if current path starts with any menu item path
        const partialMatch = menuItems.find((item) => item.path !== "/chatting" && pathname.startsWith(item.path))
        if (partialMatch) return partialMatch.id

        // Default to All Content
        return 0
    }

    const activeMenuId = getActiveMenuItem()

    return (
        <div className="flex flex-col md:gap-8 lg:flex-row h-[calc(100vh-88px)] overflow-scroll hide-scrollbar">
            {/* Sidebar - Desktop always visible, Mobile conditionally visible */}
            <div className="shadow-md bg-[#f8f9fc]">
                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex justify-between items-center p-4">
                    <h2 className="text-lg font-semibold text-[#1C4587]">Menu</h2>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 bg-[#1C4587] text-white rounded-sm"
                    >
                        {isMobileMenuOpen ? <FaTimes size={10}/> : <FaBars size={10}/>}
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
                                ease: [0.04, 0.62, 0.23, 0.98], // Custom easing curve for smoother motion
                                height: { duration: 0.5 }, // Slightly longer duration for height
                                opacity: { duration: 0.3 }, // Faster opacity transition
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
            <div className="h-[calc(100vh-88px)] overflow-scroll hide-scrollbar xl:w-[72%]">{children}</div>
        </div>
    )
}

export default ChattingLayout

