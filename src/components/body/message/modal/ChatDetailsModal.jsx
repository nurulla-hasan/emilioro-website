"use client"

import { useState } from "react"
import { X, Link, MessageSquare, Users, Edit2 } from "lucide-react"
import Image from "next/image"

const ChatDetailsModal = ({ chat, onClose }) => {
  const [showAllParticipants, setShowAllParticipants] = useState(false)

  if (!chat) return null

  // Display only 5 participants initially, unless showAllParticipants is true
  const displayedParticipants = showAllParticipants ? chat.participants : chat.participants?.slice(0, 5)

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#1C4587] text-white p-6 flex flex-col items-center">
          <div className="relative w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            {chat.isGroup ? (
              <div className="relative w-full h-full flex items-center justify-center">
              <div className="rounded-full overflow-hidden border-2 border-[#1C4587]">
                <Image
                  src={chat.avatar || "/placeholder.svg?height=48&width=48"}
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            ) : (
              <Image
                src={chat.avatar || "/placeholder.svg?height=64&width=64"}
                alt="Avatar"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            )}
          </div>

          <div className="mt-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-semibold">{chat.name}</h2>
              <button className="text-white/80 hover:text-white">
                <Edit2 size={16} />
              </button>
            </div>
            <p className="text-sm text-white/80 mt-1">
              {chat.isGroup ? `Created by ${chat.participants[0]?.name}` : "Private Chat"}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {!chat.isGroup ? (
            // Single Chat Details
            <div className="text-center">
              <p className="text-sm text-gray-600">
                You are chatting with <strong>{chat.name}</strong>
              </p>
            </div>
          ) : (
            // Group Chat Details
            <>
              <div className="space-y-4">
                {/* Copy Link */}
                <button className="flex items-center gap-2 text-[#1C4587] text-sm w-full">
                  <Link size={18} />
                  <div className="flex-1 text-left">
                    <span>copy link to clipboard</span>
                    <p className="text-xs text-gray-500">familyconversation/1chjl</p>
                  </div>
                </button>

                {/* Send Message */}
                <button className="flex items-center gap-2 text-[#1C4587] text-sm">
                  <MessageSquare size={18} />
                  <span>Send message</span>
                </button>

                {/* Participants */}
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={18} className="text-[#1C4587]" />
                    <span className="text-sm font-medium">{chat.participants?.length || 0} participant</span>
                    <button className="ml-auto bg-[#1C4587] text-white text-xs px-2 py-1 rounded-md">
                      + Add participant
                    </button>
                  </div>

                  <ul className="space-y-3">
                    {displayedParticipants?.map((participant) => (
                      <li key={participant.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={participant.avatar || "/placeholder.svg?height=36&width=36"}
                            alt={participant.name}
                            width={36}
                            height={36}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium">{participant.name}</p>
                            <p className="text-xs text-gray-500">{participant.role}</p>
                          </div>
                        </div>
                        <button className="text-xs text-[#1C4587] border border-[#1C4587] px-3 py-1 rounded-full hover:bg-[#1C4587] hover:text-white transition-colors">
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>

                  {chat.participants?.length > 5 && (
                    <button
                      className="text-[#1C4587] text-sm mt-2 w-full text-right"
                      onClick={() => setShowAllParticipants(!showAllParticipants)}
                    >
                      {showAllParticipants ? "Show less" : "View all"}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button className="text-red-500 text-sm font-medium">Leave</button>
              </div>
            </>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:bg-white/10 rounded-full p-1"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default ChatDetailsModal

