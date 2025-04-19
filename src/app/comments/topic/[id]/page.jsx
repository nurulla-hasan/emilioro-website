"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"

const Page = () => {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [sortOrder, setSortOrder] = useState("desc") // "asc" or "desc"

  const categories = [
    { id: "1", name: "Sustainable Development & Climate Action" },
    { id: "2", name: "Technology & Innovation" },
    { id: "3", name: "Health & Well-being" },
    { id: "4", name: "Education & Research" },
  ]

  const category = categories.find((c) => c.id === id)?.name || "Unknown Category"

  useEffect(() => {
    const fetchedComments = [
      {
        id: 1,
        user: "Dindiniya",
        role: "General manager",
        avatar: "/avatar.png",
        content: "Eco-friendly packaging helps reduce environmental impact.",
        date: "02/02/2025",
        time: "10:00 AM",
        likes: 5,
      },
      {
        id: 2,
        user: "Dindiniya",
        role: "General manager",
        avatar: "/avatar.png",
        content: "Biodegradable materials are essential for the future.",
        date: "02/02/2025",
        time: "10:00 AM",
        likes: 12,
      },
      {
        id: 3,
        user: "Dindiniya",
        role: "General manager",
        avatar: "/avatar.png",
        content: "Reusable packaging creates a circular economy.",
        date: "02/02/2025",
        time: "10:00 AM",
        likes: 2,
      },
    ]

    const sorted = [...fetchedComments].sort((a, b) => (sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes))
    setComments(sorted)
  }, [category, sortOrder])

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
      likes: 0,
    }
    const updated = [...comments, newEntry].sort((a, b) =>
      sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes,
    )
    setComments(updated)
    setNewComment("")
  }

  const handleLike = (id) => {
    const updated = comments
      .map((comment) => (comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment))
      .sort((a, b) => (sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes))
    setComments(updated)
  }

  return (
    <div className="">
      <div className="bg-white shadow-[0px_10px_17px_2px_#CFC9DDB2] rounded-md overflow-hidden border-x border-b border-gray-300">
        {/* Header */}
        <div className="p-4 border-b border-blue-200 flex justify-between items-center">
          <h2 className="text-[#1C4587] font-medium">{category} (Discussion)</h2>
          <button
            onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
            className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#1C4587] rounded-sm hover:bg-blue-50 transition-colors text-[#1C4587]"
          >
            <span>Sort by Likes</span>
            {sortOrder === "asc" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 8 4-4 4 4" />
                <path d="M7 4v16" />
                <path d="M11 12h4" />
                <path d="M11 16h7" />
                <path d="M11 20h10" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 16 4 4 4-4" />
                <path d="M7 20V4" />
                <path d="M11 4h10" />
                <path d="M11 8h7" />
                <path d="M11 12h4" />
              </svg>
            )}
          </button>
        </div>

        {/* Comments Section */}
        <div className="bg-[#EAF0FB] md:h-[70vh] h-[64vh] overflow-scroll hide-scrollbar p-6">
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
                <p className="text-xs md:w-7/8 text-gray-700 mt-3 leading-relaxed">{comment.content}</p>

                {/* Like system */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <button className="text-[#1C4587] font-medium text-xs cursor-pointer" onClick={() => handleLike(comment.id)}>
                    👍 Like
                  </button>
                  <span className="text-xs">({comment.likes})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment Input */}
        <div className="p-3 bg-[#EAF0FB]">
          <div className="flex w-4/5 mx-auto items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white">
            <input
              type="text"
              className="flex-1 outline-none text-sm"
              placeholder="what's on your mind..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCommentSubmit()}
            />
            <div className="flex items-center gap-2 text-gray-400 *:cursor-pointer">
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
