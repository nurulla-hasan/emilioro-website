import { MapPin, Star, Pause, Trash2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";


const SingleMatch = ({ match, handleBondAction, handleRateBond, confirmRealLifeMeeting }) => {
    const user = match.users[0]

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 mb-4 text-sm rounded-sm ${match.status === "paused" ? "bg-gray-100 opacity-70" : "bg-[#EAF0FB]"} border border-[#ABC4ED]`}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <img
                        className="h-10 w-10 rounded-full object-cover border-2 border-[#1C4587]"
                        src={user.avatar || "/avatar.png"}
                        alt="User avatar"
                    />
                    <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-gray-600 flex items-center gap-1">
                            <MapPin size={12} />
                            {user.location} ({user.distance} km away)
                        </div>
                        <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={12}
                                    className={i < Math.floor(user.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                />
                            ))}
                            <span className="text-xs ml-1">{user.rating}</span>
                        </div>
                    </div>
                </div>

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

            <div className="bg-white p-3 rounded-sm border border-gray-200">
                <div className="flex justify-between mb-2">
                    <div className="text-xs font-medium">Offers:</div>
                    <div className="text-xs font-medium">Wants:</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xs text-[#1C4587] font-medium">{user.give}</div>
                    <div className="text-xs text-[#1C4587] font-medium">{user.get}</div>
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
                    className="text-xs bg-button text-white px-3 py-1 rounded-sm cursor-pointer"
                >
                    Confirm Meeting
                </button>
            </div>
        </motion.div>
    )
};

export default SingleMatch;