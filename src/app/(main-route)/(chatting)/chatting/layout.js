"use client"
import { useState, useEffect } from "react"
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
        <div className="flex flex-col md:gap-8 lg:flex-row h-[calc(100vh-88px)] overflow-scroll hide-scrollbar max-w-[1920px] mx-auto ">
            <div className="shadow-md bg-[#f8f9fc]">
                {/* Mobile Menu Toggle */}
                <div className="flex items-center justify-between p-4 lg:hidden">
                    <h2 className="text-lg font-semibold text-primary">Menu</h2>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 bg-primary text-white rounded-sm cursor-pointer"
                    >
                        {isMobileMenuOpen ? <FaTimes size={10} /> : <FaBars size={10} />}
                    </button>
                </div>

                {(isMobileMenuOpen || !isMobile) && (
                    <div
                        className={`p-2 rounded-sm overflow-hidden 
                                    ${isMobile ? "max-h-screen transition-all duration-500 ease-in-out" : ""} 
                                    ${isMobile && !isMobileMenuOpen ? "max-h-0 opacity-0" : "opacity-100"}`}
                    >
                        <h2 className="text-lg font-semibold text-primary mb-4 hidden lg:block">Menu</h2>
                        <ul className={`flex ${isMobile ? "flex-row overflow-x-auto hide-scrollbar text-xs" : "flex-col"} gap-3`}>
                            {menuItems.map((item) => (
                                <Link href={item.path} key={item.id} className="contents">
                                    <li
                                        className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-sm transition-all duration-200 
                                                    ${isMobile ? "min-w-[120px] justify-center " : ""
                                            } ${activeMenuId === item.id ? "bg-primary text-white" : "hover:bg-gray-200"}`}
                                        onClick={() => isMobile && setIsMobileMenuOpen(false)}
                                    >
                                        {item.icon}
                                        <span className={isMobile ? "text-xs" : ""}>{item.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Main Content Area */}
            <div className="md:h-[calc(100vh-175px)] overflow-scroll hide-scrollbar w-full">{children}</div>
            <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-300 backdrop-blur-2xl">
                <div className="flex items-center justify-center w-full p-2 mx-auto xl:w-8/11 lg:w-10/12">
                    <AudioPlayer />
                </div>
            </div>
        </div>
    )
}

export default ChattingLayout