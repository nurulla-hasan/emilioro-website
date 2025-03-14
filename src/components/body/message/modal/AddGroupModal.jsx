"use client";
import { useState } from "react";
import { X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import FriendSelectionModal from "./FriendSelectionModal";

const AddGroupModal = ({ isOpen, onClose }) => {
    const [groupName, setGroupName] = useState("");
    const [isFriendSelectionOpen, setIsFriendSelectionOpen] = useState(false);
    
    const handleNext = (groupName) => {
        if (groupName.trim()) {
            setIsFriendSelectionOpen(true);
        }
    };

    if (!isOpen) return null;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <AnimatePresence mode="wait">
                    {isOpen && (
                        <motion.div
                            key="group-modal"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            className="bg-white h-[70vh] rounded-lg lg:w-[400px] overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-[#1C4587]">
                                <div className="text-white py-4 relative">
                                    <h2 className="text-center text-lg font-medium">New group chat</h2>
                                    <button
                                        onClick={onClose}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Camera Icon */}
                                <div className="flex justify-center mb-8 pb-5">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                                    >
                                        <Camera className="w-6 h-6 text-gray-500" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {/* Group Name Input */}
                                <input
                                    type="text"
                                    placeholder="Add Group name"
                                    value={groupName}
                                    onChange={(e) => setGroupName(e.target.value)}
                                    className="w-full text-sm px-4 py-2.5 border border-gray-200 rounded-md text-center focus:outline-none focus:border-[#1C4587] transition-colors"
                                />

                                {/* Next Button */}
                                <div className="text-center">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleNext(groupName)}
                                        disabled={!groupName.trim()}
                                        className={`w-2/3 mx-auto mt-6 py-1 rounded-md text-white font-medium transition-colors ${
                                            groupName.trim()
                                                ? 'bg-[#1C4587] hover:bg-[#15366b]'
                                                : 'bg-gray-300 cursor-not-allowed'
                                        }`}
                                    >
                                        Next
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            {/* Friend Selection Modal */}
            <FriendSelectionModal
                isOpen={isFriendSelectionOpen}
                onClose={() => setIsFriendSelectionOpen(false)}
            />
        </>
    );
};

export default AddGroupModal;
