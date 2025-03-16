"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"

const Page = () => {
    const { id } = useParams()
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    const categories = [
        { id: "1", name: "Sustainable Development & Climate Action" },
        { id: "2", name: "Technology & Innovation" },
        { id: "3", name: "Health & Well-being" },
        { id: "4", name: "Education & Research" },
    ]

    const category = categories.find((c) => c.id === id)?.name || "Unknown Category"

    useEffect(() => {
        // API call or dummy data
        const fetchedComments = [
            {
                id: 1,
                user: "Dindiniya",
                role: "General manager",
                avatar: "/placeholder.svg?height=50&width=50",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostable.",
                date: "02/02/2025",
                time: "10:00 AM",
            },
            {
                id: 2,
                user: "Dindiniya",
                role: "General manager",
                avatar: "/placeholder.svg?height=50&width=50",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostables.",
                date: "02/02/2025",
                time: "10:00 AM",
            },
            {
                id: 3,
                user: "Dindiniya",
                role: "General manager",
                avatar: "/placeholder.svg?height=50&width=50",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostable.",
                date: "02/02/2025",
                time: "10:00 AM",
            },
        ]
        setComments(fetchedComments)
    }, [category])

    const handleCommentSubmit = () => {
        if (newComment.trim() === "") return
        const newEntry = {
            id: comments.length + 1,
            user: "You",
            role: "Member",
            avatar: "/heroImage.png",
            content: newComment,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }),
        }
        // setComments([...comments, newEntry])
        setComments((prevComments) => [...prevComments, newEntry]);
        setNewComment("")
    }

    return (
        <div className="px-3">
            <div className="w-full max-w-4xl mx-auto my-8 bg-white shadow-[0px_10px_17px_2px_#CFC9DDB2] rounded-md overflow-hidden border-x border-b border-gray-300">
                {/* Header */}
                <div className="p-4 border-b border-blue-200">
                    <h2 className="text-[#1C4587] font-medium">{category} (Discussion)</h2>
                </div>

                {/* Comments Section */}
                <div className="bg-[#EAF0FB] p-6">
                    <h3 className="text-center text-gray-600 text-sm mb-4">Today</h3>

                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-white p-5 rounded-md shadow-sm">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/heroImage.png"
                                            alt={comment.user}
                                            width={30}
                                            height={30}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-medium text-sm">{comment.user}</h4>
                                            <p className="text-xs text-gray-500">{comment.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 flex flex-col items-end">
                                        <div className="flex items-center gap-1">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16 2V6"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8 2V6"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M3 10H21"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span>{comment.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 6V12L16 14"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span>{comment.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-700 mt-3 leading-relaxed">{comment.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comment Input */}
                <div className="p-3 bg-[#EAF0FB]">
                    <div className="flex w-4/5 mx-auto items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
                        <input
                            type="text"
                            className="flex-1 outline-none text-sm"
                            placeholder="what's on your mind..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleCommentSubmit()}
                        />
                        <div className="flex items-center gap-2 text-gray-400">
                            <button>
                                <img src="/Tagfile.svg" alt="" />
                            </button>
                            <button onClick={handleCommentSubmit}>
                                <img src="/Send.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

