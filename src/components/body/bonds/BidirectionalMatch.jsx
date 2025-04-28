import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Pause, RefreshCw, Star, Trash2 } from 'lucide-react';

const BidirectionalMatch = ({ match, handleBondAction, handleRateBond, confirmRealLifeMeeting }) => {
    const users = match.users;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-4 border ${match.status === "paused" ? "bg-gray-100 opacity-70" : "bg-white"} border-[#ABC4ED] rounded-sm`}
        >
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-[#1C4587]">Bidirectional Match</h3>

                <div className="flex gap-2">
                    {match.status === "active" ? (
                        <>
                            <button
                                onClick={() => handleBondAction(match.id, "pause")}
                                className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                                title="Pause"
                            >
                                <Pause size={16} />
                            </button>
                            <button
                                onClick={() => handleBondAction(match.id, "delete")}
                                className="p-1 text-gray-500 hover:text-red-500 cursor-pointer"
                                title="Delete"
                            >
                                <Trash2 size={16} />
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => handleBondAction(match.id, "retry")}
                            className="p-1 text-gray-500 hover:text-green-500 cursor-pointer"
                            title="Retry"
                        >
                            <RefreshCw size={16} />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                {/* Left user */}
                <div className="w-full md:w-1/2 p-3 bg-[#EAF0FB] rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            className="h-8 w-8 rounded-full object-cover border-2 border-[#1C4587]"
                            src={users[0].avatar || "/avatar.png"}
                            alt="User avatar"
                        />
                        <div>
                            <div className="text-sm font-medium">{users[0].name}</div>
                            <div className="text-xs text-gray-600 flex items-center gap-1">
                                <MapPin size={10} />
                                {users[0].location} ({users[0].distance} km)
                            </div>
                        </div>
                        <div className="ml-auto flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={10}
                                    className={i < Math.floor(users[0].rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                />
                            ))}
                            <span className="text-xs ml-1">{users[0].rating}</span>
                        </div>
                    </div>

                    <div className="bg-white p-2 rounded-sm border border-gray-200 text-xs">
                        <div className="flex justify-between mb-1">
                            <div className="font-medium">Offers:</div>
                            <div className="font-medium">Wants:</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-[#1C4587] font-medium">{users[0].give}</div>
                            <div className="text-[#1C4587] font-medium">{users[0].get}</div>
                        </div>
                    </div>
                </div>

                {/* Right user */}
                <div className="w-full md:w-1/2 p-3 bg-[#EAF0FB] rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            className="h-8 w-8 rounded-full object-cover border-2 border-[#1C4587]"
                            src={users[1].avatar || "/avatar.png"}
                            alt="User avatar"
                        />
                        <div>
                            <div className="text-sm font-medium">{users[1].name}</div>
                            <div className="text-xs text-gray-600 flex items-center gap-1">
                                <MapPin size={10} />
                                {users[1].location} ({users[1].distance} km)
                            </div>
                        </div>
                        <div className="ml-auto flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={10}
                                    className={i < Math.floor(users[1].rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                />
                            ))}
                            <span className="text-xs ml-1">{users[1].rating}</span>
                        </div>
                    </div>

                    <div className="bg-white p-2 rounded-sm border border-gray-200 text-xs">
                        <div className="flex justify-between mb-1">
                            <div className="font-medium">Offers:</div>
                            <div className="font-medium">Wants:</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-[#1C4587] font-medium">{users[1].give}</div>
                            <div className="text-[#1C4587] font-medium">{users[1].get}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-3 flex justify-between">
                <button
                    onClick={() => handleRateBond(match)}
                    className="text-xs flex items-center gap-1 text-[#1C4587] hover:underline cursor-pointer"
                >
                    <Star size={14} /> Rate this bond
                </button>

                <button
                    onClick={() => confirmRealLifeMeeting(match.id)}
                    className="text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-1 rounded-sm cursor-pointer"
                >
                    Confirm Meeting
                </button>
            </div>
        </motion.div>
    );
};

export default BidirectionalMatch;
