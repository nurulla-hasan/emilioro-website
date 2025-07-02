import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Pause, RefreshCw, Star, Trash2 } from 'lucide-react';

const TriangleMatch = ({ match, handleBondAction, handleRateBond, confirmRealLifeMeeting }) => {
    const users = match.users;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-4 border ${match.status === "paused" ? "bg-gray-100 opacity-70" : "bg-white"} border-[#ABC4ED] rounded-sm`}
        >
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-primary">Triangle Match</h3>

                <div className="flex gap-2">
                    {match.status === "active" ? (
                        <>
                            <button
                                onClick={() => handleBondAction(match.id, "pause")}
                                className="p-1 text-gray-500 hover:text-primary cursor-pointer"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {users.map((user, index) => (
                    <div key={index} className="p-3 bg-[#EAF0FB] rounded-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <img
                                className="h-8 w-8 rounded-full object-cover border-2 border-primary"
                                src={user.avatar || "/avatar.png"}
                                alt="User avatar"
                            />
                            <div>
                                <div className="text-sm font-medium">{user.name}</div>
                                <div className="text-xs text-gray-600 flex items-center gap-1">
                                    <MapPin size={10} />
                                    {user.distance} km
                                </div>
                            </div>
                            <div className="ml-auto flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={10}
                                        className={i < Math.floor(user.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                    />
                                ))}
                                <span className="text-xs ml-1">{user.rating}</span>
                            </div>
                        </div>

                        <div className="bg-white p-2 rounded-sm border border-gray-200 text-xs">
                            <div className="flex justify-between mb-1">
                                <div className="font-medium">Offers:</div>
                                <div className="font-medium">Wants:</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-primary font-medium">{user.give}</div>
                                <div className="text-primary font-medium">{user.get}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 flex justify-between">
                <button
                    onClick={() => handleRateBond(match)}
                    className="text-xs flex items-center gap-1 text-primary hover:underline cursor-pointer"
                >
                    <Star size={14} /> Rate this bond
                </button>

                <button
                    onClick={() => confirmRealLifeMeeting(match.id)}
                    className="text-xs bg-button text-white px-3 py-1 rounded-sm cursor-pointer"
                >
                    Confirm Meeting
                </button>
            </div>
        </motion.div>
    );
};

export default TriangleMatch;
