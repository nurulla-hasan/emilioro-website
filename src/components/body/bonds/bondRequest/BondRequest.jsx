"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from 'lucide-react';

const BondRequest = () => {
    const [activeTab, setActiveTab] = useState("sent");

    const data = {
        sentRequests: [
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
            }
        ],
        receivedRequests: [
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
            }
        ]
    };

    const requests = activeTab === "sent" ? data.sentRequests : data.receivedRequests;

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

    const handleAccept = (id) => {
        console.log('Accepted request:', id);
    };

    const handleDecline = (id) => {
        console.log('Declined request:', id);
    };

    return (

        <div>
            <h1 className="text-xl text-[#1C4587] font-bold mb-4">Bond Request</h1>
            <div className="w-full my-20">
                {/* Tabs */}
                <div className="flex gap-8 mb-8 *:text-sm *:font-semibold">
                    <button
                        className={`text-lg font-medium relative ${activeTab === "sent" ? "text-[#1C4587]" : "text-gray-400"
                            }`}
                        onClick={() => setActiveTab("sent")}
                    >
                        Sent Request
                        {activeTab === "sent" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-[#1C4587]"
                            />
                        )}
                    </button>
                    <button
                        className={`text-lg font-medium relative ${activeTab === "received" ? "text-[#1C4587]" : "text-gray-400"
                            }`}
                        onClick={() => setActiveTab("received")}
                    >
                        Received Request
                        {activeTab === "received" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-[#1C4587]"
                            />
                        )}
                    </button>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="wait">
                        {requests.map((req) => (
                            <motion.div
                                key={req.id}
                                variants={itemVariants}
                                layout
                                className="bg-white rounded-sm p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                            >
                                <div className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <p className="text-[13px]">
                                                <span className="font-medium">Offered Service : </span>
                                                <span className="text-gray-600">{req.offeredService}</span>
                                            </p>
                                            <p className="text-[13px]">
                                                <span className="font-medium">Requested Service : </span>
                                                <span className="text-gray-600">{req.requestedService}</span>
                                            </p>
                                        </div>
                                        <span className="bg-[#E3F2FD] text-[#1C4587] text-xs py-1 px-2 rounded-sm">
                                            {req.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">{req.participants} participant</span>
                                    </div>

                                    {/* Action Buttons for Received Requests */}
                                    {activeTab === "received" && (
                                        <div className="flex gap-10 mt-4">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleDecline(req.id)}
                                                className="flex-1 py-1 px-4 border border-[#1C4587] text-[#1C4587] rounded-md text-xs font-medium hover:bg-gray-50 transition-colors"
                                            >
                                                Decline
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleAccept(req.id)}
                                                className="flex-1 py-1 px-4 bg-[#1C4587] text-white rounded-md text-xs font-medium hover:bg-[#15366b] transition-colors"
                                            >
                                                Accept
                                            </motion.button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>

    );
};

export default BondRequest;
