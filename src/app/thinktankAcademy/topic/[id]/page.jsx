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
                avatar: "/avatar.png",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostable, or reusable alternatives to traditional packaging, helping businesses lower their carbon footprint while meeting consumer demand for greener solutions.",
                date: "02/02/2025",
                time: "10:00 AM",
            },
            {
                id: 2,
                user: "Dindiniya",
                role: "General manager",
                avatar: "/avatar.png",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostable, or reusable alternatives to traditional packaging, helping businesses lower their carbon footprint while meeting consumer demand for greener solutions.",
                date: "02/02/2025",
                time: "10:00 AM",
            },
            {
                id: 3,
                user: "Dindiniya",
                role: "General manager",
                avatar: "/avatar.png",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostable, or reusable alternatives to traditional packaging, helping businesses lower their carbon footprint while meeting consumer demand for greener solutions.",
                date: "02/02/2025",
                time: "10:00 AM",
            },
            {
                id: 4,
                user: "Dindiniya",
                role: "General manager",
                avatar: "/avatar.png",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostable, or reusable alternatives to traditional packaging, helping businesses lower their carbon footprint while meeting consumer demand for greener solutions.",
                date: "02/02/2025",
                time: "10:00 AM",
            },
            {
                id: 5,
                user: "Dindiniya",
                role: "General manager",
                avatar: "/avatar.png",
                content:
                    "Sustainable packaging focuses on reducing environmental impact by using eco-friendly materials, minimizing waste, and promoting recyclability. It includes biodegradable, compostable, or reusable alternatives to traditional packaging, helping businesses lower their carbon footprint while meeting consumer demand for greener solutions.",
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
        <div className="xl:w-8/11 lg:w-10/12 px-5 mt-3 mx-auto">
            <div className="bg-white shadow-[0px_10px_17px_2px_#CFC9DDB2] rounded-md overflow-hidden border-x border-b border-gray-300">
                {/* Header */}
                <div className="p-4 border-b border-blue-200">
                    <h2 className="text-[#1C4587] font-medium">{category} (Discussion)</h2>
                </div>

                {/* Comments Section */}
                <div className="bg-[#EAF0FB] md:h-[75vh] h-[64vh] overflow-scroll hide-scrollbar p-6">
                    <h3 className="text-center text-gray-600 text-sm mb-4">Today</h3>

                    <div className="space-y-4 ">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-white p-5 rounded-md shadow-sm">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={comment.avatar || ""}
                                            alt={comment.user}
                                            width={40}
                                            height={40}
                                            className="border border-[#5689DC] rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-medium text-sm">{comment.user}</h4>
                                            <p className="text-xs text-gray-500">{comment.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 flex flex-col items-end">
                                        <div className="flex items-center gap-1">
                                            <img src="/calender.svg" alt="" />
                                            <span>{comment.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src="/clock.svg" alt="" />
                                            <span>{comment.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs md:w-7/8 text-gray-700 mt-3 leading-relaxed">{comment.content}
                                </p>
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

