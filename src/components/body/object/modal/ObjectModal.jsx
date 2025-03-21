"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const ObjectModal = ({ selectedCard, setSelectedCard }) => {
    if (!selectedCard) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="bg-white lg:top-5 rounded-lg w-full h-[90vh] md:h-[75vh] max-w-xl overflow-y-auto  scrollbar-hide relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedCard(null)}
                        className="absolute right-4 top-4 z-10 cursor-pointer bg-blue-900 rounded-full p-1.5 hover:bg-blue-500 transition-colors"
                    >
                        <X className="w-5 h-5" color="#d6d6d6" />
                    </button>

                    {/* Header Image */}
                    <div className="relative h-48">
                        <Image
                            src={selectedCard.image || "/placeholder.svg"}
                            alt="Project Header"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#102b4bac]">
                            <h1 className="text-white text-xl font-semibold absolute bottom-4 left-4">{selectedCard.title}</h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex justify-between flex-col">
                        <div>
                            {/* Owner Info */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={selectedCard.ownerImage || "/placeholder.svg"}
                                        className="h-8 w-8 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold">{selectedCard.author}</h3>
                                        <p className="text-xs text-gray-500">{selectedCard.authorRole}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-end">
                                        <span className="text-blue-800 bg-gray-300 rounded-sm text-end px-1 text-[10px]">{selectedCard.status[0]}</span>
                                    </div>
                                    <span className="text-gray-400 text-[10px]">{selectedCard.created}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-xs mb-6">
                                {selectedCard.description}
                            </p>

                            {/* Participant Count */}
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/participants.svg" alt="" />
                                <span className="text-sm text-gray-800 font-semibold">{selectedCard.participant} Participent</span>
                            </div>

                            {/* Participants Grid */}
                            <div className="flex flex-col md:flex-row gap-5 justify-between w-full">
                                {/* Producer Column */}
                                <div>
                                    <h3 className="font-semibold mb-2">Producer</h3>
                                    <div className="space-y-4">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <img
                                                    src={ "/avatar.png"}
                                                    alt="Producer"
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <div>
                                                    <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                                                    <p className="text-xs text-gray-500">
                                                        {i === 0
                                                            ? "CEO"
                                                            : i === 1
                                                                ? "General manager"
                                                                : i === 2
                                                                    ? "Chief of engineer"
                                                                    : i === 3
                                                                        ? "work administrator"
                                                                        : "Artist, Engineer, musician"}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* User Column */}
                                <div>
                                    <h3 className="font-semibold mb-2 text-end">User</h3>
                                    <div className="space-y-4">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <img
                                                    src={ "/avatar.png"}
                                                    alt="User"
                                                    className="rounded-full w-8 h-8"
                                                />
                                                <div>
                                                    <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                                                    <p className="text-xs text-gray-500">Artist, Engineer, musician</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* View All Link */}
                            <div className="text-right">
                                <button className="text-blue-900 text-xs hover:underline">View all</button>
                            </div>

                        </div>
                        {/* Join Button */}
                        <div className="flex justify-center">
                            <motion.button
                                className="w-1/2 bg-blue-900 text-white py-1 rounded-md font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Request to join
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ObjectModal

