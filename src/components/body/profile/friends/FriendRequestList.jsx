"use client"

import Link from "next/link"

const FriendRequestList = ({ searchTerm = "" }) => {
    const requests = [
        { id: 1, name: "MR. Sarwar", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 2, name: "MR. Fahad", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 3, name: "Ahmad musa", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 4, name: "MR. TA Emon", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 5, name: "MR. Mehedi", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 6, name: "MR. Dindinia", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 7, name: "MR. Nahid", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 8, name: "MR. Fahad", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
        { id: 9, name: "MR. Sarwar", role: ["Artist", "Actor", "Teacher"], avatar: "/heroImage.png" },
    ]

    // Filter requests based on search term
    const filteredRequests = requests.filter((request) =>
        request.name.toLowerCase().includes((searchTerm || "").toLowerCase()),
    )

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            {/* Search result count */}
            {searchTerm && filteredRequests.length > 0 && (
                <div className="text-primary absolute -top-3 left-5 text-sm font-semibold text-center mb-4">
                    {filteredRequests.length > 100 ? "100+ results" : `${filteredRequests.length} results`}
                </div>
            )}
            {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                    <div key={request.id} className="bg-white rounded-lg shadow-[0px_15px_45px_0px_#CFC9DDCC] border border-gray-300 p-5 flex flex-col items-center">
                        {/* Profile Image */}
                        <Link href={`/friendRequest/${request.id}`} className="w-18 h-18 rounded-full border border-blue-100 overflow-hidden mb-3">
                            <img
                                src={
                                    request.avatar ||
                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRO7Y6FFBy3CX2g0WhRMEYz55Z5mut.png"
                                }
                                alt={request.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRO7Y6FFBy3CX2g0WhRMEYz55Z5mut.png"
                                }}
                            />
                        </Link>

                        {/* Name */}
                        <h3 className="text-sm font-medium text-center mb-2">{request.name}</h3>

                        {/* Roles */}
                        <div className="flex flex-wrap justify-center gap-1 mb-4">
                            {request.role.map((role, idx) => (
                                <span key={idx} className="bg-[#9A9A9A33] text-primary text-[10px] px-2 py-1 rounded-md">
                                    {role}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full flex gap-2 *:cursor-pointer">
                            <button className="flex-1 border border-gray-300 text-gray-700 text-[10px] py-1 px-2 rounded hover:bg-gray-50 transition-colors">
                                Decline
                            </button>
                            <button className="flex-1 bg-button text-white text-[10px] py-1 px-2 rounded hover:opacity-90 transition-opacity">
                                Accept
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full text-center py-8">
                    <p className="text-gray-500">No friend requests found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    )
}

export default FriendRequestList

