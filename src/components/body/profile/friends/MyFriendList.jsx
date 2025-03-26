"use client"

import Link from "next/link"

const MyFriendList = ({ searchTerm = "" }) => {
    const friends = [
        { id: 1, name: "MR. Sarwar", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 2, name: "MR. Fahad", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 3, name: "Ahmad musa", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 4, name: "MR. TA Emon", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 5, name: "MR. Mehedi", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 6, name: "MR. Dindinia", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 7, name: "MR. Nahid", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 8, name: "MR. Fahad", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
        { id: 9, name: "MR. Sarwar", role: ["Artist", "Actor", "Teacher"], avatar: "/avatar.png" },
    ]

    // Filter friends based on search term
    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes((searchTerm || "").toLowerCase()),
    )

    return (
        <div className="grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            <button className="absolute md:-right-36 md:-top-[66px] right-[35%] -top-40 font-medium bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-sm py-1.5 px-2 rounded-sm hover:opacity-90 transition-opacity">
                + Add Friend
            </button>

            {/* Search result count */}
            {searchTerm && filteredFriends.length > 0 && (
                <div className="text-[#1C4587] absolute -top-3 left-5 text-xs font-semibold text-center mb-4">
                    {filteredFriends.length > 100 ? "100+ results" : `${filteredFriends.length} results`}
                </div>
            )}

            {filteredFriends.length > 0 ? (
                filteredFriends.map((friend) => (
                    <div key={friend.id} className="bg-white shadow-[0px_15px_45px_0px_#CFC9DDCC] rounded-lg border border-gray-300 p-5 flex flex-col items-center">
                        {/* Profile Image */}
                        <div className="w-18 h-18 rounded-full border border-[#E6EEF8] overflow-hidden mb-3">
                            <img
                                src={
                                    friend.avatar ||
                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-19%20185856-5qW8MdORrCt6V26fOuUKj9J24Nefuo.png" ||
                                    "/placeholder.svg"
                                }
                                alt={friend.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-19%20185856-5qW8MdORrCt6V26fOuUKj9J24Nefuo.png"
                                }}
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-sm font-medium text-center mb-2">{friend.name}</h3>

                        {/* Roles */}
                        <div className="flex flex-wrap justify-center gap-1 mb-4">
                            {friend.role.map((role, idx) => (
                                <span key={idx} className="bg-[#9A9A9A33] text-[#1C4587] text-[10px] px-2 py-1 rounded-md">
                                    {role}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full space-y-2">
                            <div className="flex gap-2 w-full">
                                <button className="flex-1 border border-gray-300 text-gray-700 text-[10px] py-1 px-2 rounded hover:bg-gray-50 transition-colors">
                                    Unfriend
                                </button>
                                <Link href="#">
                                    <button className="flex-1 border cursor-pointer border-gray-300 text-gray-700 text-[10px] py-1.5 px-2 rounded hover:bg-gray-50 transition-colors">
                                        View profile
                                    </button>
                                </Link>
                            </div>
                            <button className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-[10px] py-1 px-2 rounded hover:opacity-90 transition-opacity">
                                Message
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full text-center py-8">
                    <p className="text-gray-500">No friends found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    )
}

export default MyFriendList

