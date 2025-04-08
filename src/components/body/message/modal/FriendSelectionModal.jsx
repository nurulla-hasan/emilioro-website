"use client";
import { useState } from "react";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import avatar from '../../../../../public/avatar.png'

const friends = [
    { id: 1, name: "Ahamad Musa", avatar: avatar },
    { id: 2, name: "Ahamad Musa", avatar: avatar },
    { id: 3, name: "Ahamad Musa", avatar: avatar },
    { id: 4, name: "Ahamad Musa", avatar: avatar },
    { id: 5, name: "Ahamad Musa", avatar: avatar },
    { id: 6, name: "Ahamad Musa", avatar: avatar },
];

const FriendSelectionModal = ({ isOpen, onClose }) => {
    const [selectedFriends, setSelectedFriends] = useState([]);

    if (!isOpen) return null;

    const toggleFriendSelection = (friendId) => {
        setSelectedFriends((prev) =>
            prev.includes(friendId) ? prev.filter((id) => id !== friendId) : [...prev, friendId]
        );
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="bg-white w-4/5 lg:w-[600px] mt-12 h-[80vh] lg:h-[88vh] rounded-sm overflow-scroll hide-scrollbar"
                >
                    {/* Header */}
                    <div className="bg-[#1C4587] text-white py-4 relative rounded-sm">
                        <h2 className="text-center text-lg font-medium">New group chat</h2>
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity cursor-pointer"
                        >
                            <img className="w-6" src="/x.svg" alt="" />
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="p-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Friend"
                                className="w-full text-sm px-4 py-2.5 border border-blue-900 rounded-sm pl-10 focus:outline-none focus:border-[#1C4587] transition-colors"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Selected Friends List */}
                    {selectedFriends.length > 0 && (
                        <div className="px-4 flex gap-2 flex-wrap mb-2">
                            {selectedFriends.map((id) => {
                                const friend = friends.find((f) => f.id === id);
                                return (
                                    <div key={id} className="flex flex-col items-center">
                                        <img src={friend.avatar.src} alt={friend.name} className="w-10 h-10 rounded-full" />
                                        <span className="text-xs">{friend.name.split(" ")[0]}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Friends List */}
                    <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-600 mb-2">All Friend</h3>
                        <div className="flex flex-col gap-2">
                            {friends.map((friend) => (
                                <div
                                    key={friend.id}
                                    className={`flex shadow-md items-center justify-between p-3 rounded-sm  ${
                                        selectedFriends.includes(friend.id)
                                            ? " "
                                            : "bg-gray-100"
                                    } cursor-pointer`}
                                    onClick={() => toggleFriendSelection(friend.id)}
                                >
                                    <div className="flex items-center gap-2">
                                        <img src={friend.avatar.src} alt={friend.name} className="w-8 h-8 rounded-full" />
                                        <span>{friend.name}</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={selectedFriends.includes(friend.id)}
                                        className="w-4 h-4 accent-blue-500"
                                        readOnly
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Done Button */}
                    <div className="p-4 text-center">
                        <button
                            className={`w-1/2 py-1 rounded-sm text-white font-medium ${
                                selectedFriends.length > 0 ? "bg-[#1C4587] cursor-pointer hover:bg-[#15366b]" : "bg-gray-300 cursor-not-allowed"
                            }`}
                            disabled={selectedFriends.length === 0}
                        >
                            Done
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default FriendSelectionModal;
