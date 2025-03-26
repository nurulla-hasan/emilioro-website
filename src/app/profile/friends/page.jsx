"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import MyFriendList from "@/components/body/profile/friends/MyFriendList";
import FriendRequestList from "@/components/body/profile/friends/FriendRequestList";

const Friends = () => {
    const [activeTab, setActiveTab] = useState("my-friend");
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="xl:w-8/11 lg:w-10/12 px-5 my-10 mx-auto">
            <div className="w-full">
                {/* Tabs */}
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-8">
                    <div className="flex gap-8 *:text-sm *:font-semibold">
                        <button
                            className={`font-medium relative ${activeTab === "my-friend" ? "text-[#1C4587] font-medium" : "text-[#1c4587c3] font-normal"
                                }`}
                            onClick={() => setActiveTab("my-friend")}
                        >
                            <span className="md:text-md text-sm">My Friends</span>
                            {activeTab === "my-friend" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-[#1C4587]"
                                />
                            )}
                        </button>
                        <button
                            className={`text-xl relative ${activeTab === "friend-request" ? "text-[#1C4587] font-medium" : "text-[#1c4587c3] font-normal"
                                }`}
                            onClick={() => setActiveTab("friend-request")}
                        >
                            <span className="md:text-md text-sm">Friend Request</span>
                            {activeTab === "friend-request" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-[#1C4587]"
                                />
                            )}
                        </button>
                    </div>

                    {/* Search Input */}
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search Friend"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-8 text-sm pr-4 py-1.5 border rounded-sm outline-none text-[#1C4587] border-[#1C4587]"
                        />
                    </div>
                </div>

                {/* Render Components Based on Active Tab */}
                {activeTab === "my-friend" ? (
                    <MyFriendList searchTerm={searchTerm} />
                ) : (
                    <FriendRequestList searchTerm={searchTerm} />
                )}
            </div>
        </div>
    );
};

export default Friends;
