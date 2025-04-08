"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from 'lucide-react';

const OngoingBond = () => {
    const ongoingBonds = [
        {
            id: 1,
            offeredService: "Graphic Design Work",
            requestedService: "Web Development Help",
            status: "Ongoing",
            participants: 2
        },
        {
            id: 2,
            offeredService: "Graphic Design Work",
            requestedService: "Web Development Help",
            status: "Ongoing",
            participants: 2
        },
        {
            id: 3,
            offeredService: "Graphic Design Work",
            requestedService: "Web Development Help",
            status: "Ongoing",
            participants: 2
        },
        {
            id: 4,
            offeredService: "Graphic Design Work",
            requestedService: "Web Development Help",
            status: "Ongoing",
            participants: 2
        },
        {
            id: 5,
            offeredService: "Graphic Design Work",
            requestedService: "Web Development Help",
            status: "Ongoing",
            participants: 2
        },
        {
            id: 6,
            offeredService: "Graphic Design Work",
            requestedService: "Web Development Help",
            status: "Ongoing",
            participants: 2
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const handleChat = (id) => {
        console.log('Opening chat for bond:', id);
    };

    const handleMarkComplete = (id) => {
        console.log('Marking bond as complete:', id);
    };

    return (
        <div>
            <h1 className="text-xl text-[#1C4587] font-bold mb-4">Ongoing Bond</h1>
            <div className="w-full my-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="wait">
                    {ongoingBonds.map((bond) => (
                        <motion.div
                            key={bond.id}
                            variants={itemVariants}
                            layout
                            className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                        >
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <p className="text-[13px]">
                                            <span className="font-medium">Offered Service : </span>
                                            <span className="text-gray-600 text-xs">{bond.offeredService}</span>
                                        </p>
                                        <p className="text-[13px]">
                                            <span className="font-medium">Requested Service : </span>
                                            <span className="text-gray-600 text-xs">{bond.requestedService}</span>
                                        </p>
                                    </div>
                                    <span className="bg-[#E3F2FD] text-[#1C4587] text-xs px-3 py-1 rounded-sm">
                                        {bond.status}
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Users className="w-4 h-4" />
                                    <span className="text-sm">{bond.participants} participant</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 mt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleChat(bond.id)}
                                        className="flex-1 py-1 cursor-pointer px-2 border border-[#1C4587] text-[#1C4587] rounded-sm text-xs font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Chat
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleMarkComplete(bond.id)}
                                        className="flex-1 py-1 cursor-pointer px-2 bg-[#1C4587] text-white rounded-sm text-xs font-medium hover:bg-[#15366b] transition-colors"
                                    >
                                        Mark Complete
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
        </div>
        
    );
};

export default OngoingBond;
