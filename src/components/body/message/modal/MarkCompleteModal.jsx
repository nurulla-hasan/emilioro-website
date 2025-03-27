"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import RatingModal from "./RatingModal"
import { useState } from "react"

const MarkCompleteModal = ({ isOpen, onClose }) => {
    const [showRatingModal, setShowRatingModal] = useState(false);
    if (!isOpen) return null

    // Static JSON Data
    const bond = {
        title: "Teaching Math - Cooking Cake",
        owner: {
            name: "MR. Sarwar",
            role: "Owner",
            avatar: "/heroImage.png",
        },
        status: "Ongoing",
        createdAt: "22 May 2025",
        participants: [
            { name: "Ahamad Musa", role: "CEO", avatar: "/heroImage.png", activities: ["Teaching Math", "Cooking Cake"] },
            {
                name: "Ahamad Musa",
                role: "General Manager",
                avatar: "/heroImage.png",
                activities: ["Fixing Computer", "Cooking Cake"],
            },
            {
                name: "Ahamad Musa",
                role: "Work Administrator",
                avatar: "/heroImage.png",
                activities: ["Fixing Computer", "Teaching Math"],
            },
        ],
    }

    return (
        <div>
            <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/40 p-4 z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white relative top-10 rounded-sm shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl overflow-hidden"
                >
                    {/* Header Image */}
                    <div className="relative h-40 sm:h-48 md:h-56 bg-blue-50">
                        <div className="w-full h-full relative">
                            <Image src="/mark.svg" alt="Header Image" fill style={{ objectFit: "cover" }} priority />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 rounded-full p-1 shadow-sm z-10"
                            aria-label="Close"
                        >
                            <img src="/x.svg" alt="" />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-4 sm:p-6">
                        {/* Title */}
                        <h2 className="text-sm sm:text-lg font-semibold text-[#1C4587] mb-4">{bond.title}</h2>

                        {/* Owner Section */}
                        <div className="flex justify-between items-start sm:items-center mb-1">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                                    <Image
                                        src={bond.owner.avatar || "/placeholder.svg"}
                                        alt="Owner Avatar"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xs font-medium">{bond.owner.name}</h3>
                                    <p className="text-[10px] text-gray-500">{bond.owner.role}</p>
                                </div>
                            </div>
                            <div>
                                <p className="px-2 py-0.5 text-[10px] font-medium text-blue-700 bg-blue-100 rounded-sm">{bond.status}</p>
                            </div>
                        </div>

                        {/* Created */}
                        <p className="text-[10px] text-right text-gray-500 mb-4">Created: {bond.createdAt}</p>

                        {/* Participants Section */}
                        <div className="mb-4">
                            <h3 className="font-medium text-xs mb-2 flex items-center gap-2">
                                <img src="/participants.svg" alt="" className="w-4 h-4" />0{bond.participants.length} Participants
                            </h3>
                            <div className="space-y-3">
                                {bond.participants.map((participant, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                                <Image
                                                    src={participant.avatar || "/placeholder.svg"}
                                                    alt="Participant Avatar"
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-medium">{participant.name}</h4>
                                                <p className="text-[10px] text-gray-500">{participant.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-600 mt-1 sm:mt-0 sm:ml-auto">
                                            ({participant.activities.join(" - ")})
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mark as Complete Button */}
                        <div className="flex justify-center">
                            <button 
                                onClick={() => setShowRatingModal(true)} 
                                className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1.5 rounded-sm font-medium text-xs shadow-md"
                            >
                                Mark as Complete
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Show Rating Modal */}
            {showRatingModal && <RatingModal isOpen={showRatingModal} onClose={() => setShowRatingModal(false)} />}
        </div>
    )
}

export default MarkCompleteModal
