"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Paperclip, Send, ChevronDown, Menu, ArrowLeft } from "lucide-react"
import avatar from "../../../public/heroImage.png"
import AddGroupModal from "@/components/body/message/modal/AddGroupModal"
import MarkCompleteModal from "@/components/body/message/modal/MarkCompleteModal"

const ChatInterface = () => {
  const [message, setMessage] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMarkModalOpen, setIsMarkModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)
  const [showRightSidebar, setShowRightSidebar] = useState(true)
  const [activeView, setActiveView] = useState("chat") // 'list', 'chat', 'media'
  const [isVisible, setIsVisible] = useState(false)

  // Define chat data first before using it
  const recentChats = [
    {
      id: 1,
      name: "Ahamad Musa",
      message: "Hello, how are you?",
      time: "6 minutes",
      avatar: avatar,
      messages: [
        { id: 1, text: "Hi John, how can I help you?", sender: "them", time: "3:51 PM" },
        { id: 2, text: "I need some information.", sender: "me", time: "3:52 PM" },
        { id: 3, text: "What do you need?", sender: "them", time: "3:53 PM" },
        { id: 4, image: avatar, sender: "me", time: "3:55 PM" },
      ],
      online: true,
    },
    {
      id: 2,
      name: "John Doe",
      message: "Let's catch up!",
      time: "10 minutes",
      avatar: avatar,
      messages: [
        { id: 1, text: "Hey, are you free today?", sender: "them", time: "2:30 PM" },
        { id: 2, text: "Yes, what's up?", sender: "me", time: "2:35 PM" },
      ],
      online: false,
    },
    {
      id: 3,
      name: "Sarah Connor",
      message: "Meeting at 5 PM.",
      time: "15 minutes",
      avatar: avatar,
      messages: [
        { id: 1, text: "Don't forget our meeting", sender: "them", time: "1:15 PM" },
        { id: 2, text: "I'll be there", sender: "me", time: "1:20 PM" },
      ],
      online: true,
    },
    {
      id: 4,
      name: "Project Team",
      message: "MR. Sarwar: Let's discuss the new features",
      time: "2 minutes",
      avatar: avatar,
      isGroup: true,
      participants: [
        { id: 1, name: "MR. Sarwar", role: "Project Manager", avatar: avatar },
        { id: 2, name: "Ahamad Musa", role: "Developer", avatar: avatar },
        { id: 3, name: "John Doe", role: "Designer", avatar: avatar },
        { id: 4, name: "Sarah Connor", role: "QA Engineer", avatar: avatar },
      ],
      messages: [
        {
          id: 1,
          text: "Welcome everyone to our project group!",
          sender: { id: 1, name: "MR. Sarwar" },
          time: "10:30 AM",
        },
        {
          id: 2,
          text: "Thanks for creating this group",
          sender: { id: 2, name: "Ahamad Musa" },
          time: "10:32 AM",
        },
        {
          id: 3,
          text: "I've prepared some design mockups",
          sender: { id: 3, name: "John Doe" },
          time: "10:35 AM",
        },
        {
          id: 4,
          text: "Yes, Start",
          sender: { id: 4, name: "Golap Hasan" },
          time: "10:35 AM",
        },
        {
          id: 5,
          text: "Let's discuss the new features",
          sender: { id: 1, name: "MR. Sarwar" },
          time: "10:45 AM",
        },
      ],
      online: true,
    },
  ]

  // Now we can safely initialize selectedChat
  const [selectedChat, setSelectedChat] = useState(recentChats[0] || null)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setShowSidebar(false)
        setShowRightSidebar(false)
        setActiveView("list")
      } else {
        setShowSidebar(true)
        setShowRightSidebar(true)
      }
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    if ((showRightSidebar && !isMobile) || (isMobile && activeView === "media")) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [showRightSidebar, isMobile, activeView])

  const handleChatSelect = (chat) => {
    setSelectedChat(chat)
    if (isMobile) {
      setActiveView("chat")
    }
  }

  const handleBackToList = () => {
    setActiveView("list")
  }

  const handleShowMedia = () => {
    if (isMobile) {
      setActiveView("media")
    }
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Create a copy of the chats array
    const updatedChats = [...recentChats]

    // Find the selected chat
    const chatIndex = updatedChats.findIndex((chat) => chat.id === selectedChat.id)

    if (chatIndex !== -1) {
      // Add the new message
      const newMessage = {
        id: selectedChat.messages.length + 1,
        text: message,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      // Update the messages array
      updatedChats[chatIndex] = {
        ...updatedChats[chatIndex],
        messages: [...updatedChats[chatIndex].messages, newMessage],
        message: message, // Update the preview message
        time: "Just now", // Update the time
      }

      // Update the selected chat
      setSelectedChat(updatedChats[chatIndex])

      // Clear the input
      setMessage("")
    }
  }

  return (
    <div className="w-full md:w-11/12 lg:w-7/8 xl:w-6/9 mx-auto px-4 md:px-6 mt-5">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-lg md:text-xl text-[#1C4587] font-bold md:mb-0 text-center md:text-start">Inbox</h1>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer text-xs md:text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white md:px-4 py-2 px-3 rounded-md font-medium"
          >
            +Add Group
          </button>
        </motion.div>
      </div>

      <div className="flex h-[78vh] bg-white border-2 mt-5 border-[#ABC4ED] rounded-md mb-10 overflow-hidden">
        {/* Left Sidebar - Chat List */}
        {(showSidebar || activeView === "list") && (
          <div className={`${isMobile ? "w-full" : "w-80"} border-r border-[#ABC4ED] flex flex-col`}>
            {/* Profile Section */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={avatar || "/placeholder.svg?height=30&width=30"}
                  alt="Profile"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="font-medium text-sm">Mr. Jones</span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-8 pr-4 py-2 border rounded-md text-sm border-[#ABC4ED]"
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Recent Chats Dropdown */}
            <motion.div
              className="px-4 py-2 flex items-center gap-2 text-blue-900 font-medium text-sm cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Recent Chats</span>
              <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto hide-scrollbar">
              <AnimatePresence>
                {recentChats.map((chat, index) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer ${selectedChat?.id === chat.id ? "bg-blue-100" : ""
                      }`}
                    onClick={() => handleChatSelect(chat)}
                  >
                    <Image
                      src={chat.avatar || "/placeholder.svg?height=30&width=30"}
                      alt={chat.name}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{chat.name}</span>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className="text-gray-500 truncate text-xs">{chat.message}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Main Chat Area */}
        {(!isMobile || activeView === "chat") && selectedChat && (
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-[#ABC4ED] flex items-center gap-3">
              {isMobile && (
                <button onClick={handleBackToList} className="mr-2">
                  <ArrowLeft className="h-5 w-5 text-blue-900" />
                </button>
              )}
              <Image
                src={selectedChat.avatar || "/placeholder.svg?height=30&width=30"}
                alt={selectedChat.name}
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="flex-1">
                <span className="font-medium text-sm">{selectedChat.name}</span>
                <span className={`block text-xs ${selectedChat.online ? "text-green-500" : "text-gray-500"}`}>
                  {selectedChat.online ? "Online" : "Offline"}
                </span>
              </div>
              {isMobile && (
                <button onClick={handleShowMedia} className="text-blue-900">
                  <Menu className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
              <AnimatePresence>
                {selectedChat.messages &&
                  selectedChat.messages.map((msg) => {
                    // Determine if this is a group chat message
                    const isGroupChat = selectedChat.isGroup

                    // Determine if the message is from the current user
                    const isFromMe = isGroupChat
                      ? msg.sender.id === 1 // Assuming user ID 1 is the current user
                      : msg.sender === "me"

                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${isFromMe ? "justify-end" : "justify-start"}`}
                      >
                        {/* Show avatar for group chats when message is not from current user */}
                        {isGroupChat && !isFromMe && (
                          <div className="mr-2 flex-shrink-0">
                            <Image
                              src={avatar || "/placeholder.svg?height=24&width=24"}
                              alt={msg.sender.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          </div>
                        )}

                        <div className={`max-w-[70%] ${isFromMe ? "bg-blue-100" : "bg-gray-100"} rounded-lg p-3`}>
                          {/* Show sender name for group chats when message is not from current user */}
                          {isGroupChat && !isFromMe && (
                            <p className="text-xs font-medium text-blue-800 mb-1">{msg.sender.name}</p>
                          )}

                          {msg.text && <p className="text-sm">{msg.text}</p>}
                          {msg.image && (
                            <Image
                              src={msg.image || "/placeholder.svg?height=200&width=200"}
                              alt="Shared"
                              width={200}
                              height={150}
                              className="rounded-lg max-w-full h-auto"
                            />
                          )}
                          <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
                        </div>
                      </motion.div>
                    )
                  })}
              </AnimatePresence>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-[#ABC4ED] flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 p-2 border border-[#ABC4ED] rounded-md text-sm"
              />
              <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-blue-600">
                <Paperclip className="h-5 w-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-blue-600" onClick={handleSendMessage}>
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        )}

        {/* Right Sidebar - Media */}
        <div className={`border-l border-[#ABC4ED] p-3 lg:flex flex-col justify-between ${!isVisible ? "hidden" : ""}`}>
          {isVisible && (
            <div>
              {((showRightSidebar && !isMobile) || (isMobile && activeView === "media")) && (
                <div className={`${isMobile ? "w-full" : "w-80"}`}>
                  {isMobile && (
                    <div className="flex justify-between items-center mb-4">
                      <button onClick={() => setActiveView("chat")} className="text-blue-900">
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                      <h3 className="font-medium">Media & Attachments</h3>
                      <div className="w-5"></div> {/* Empty div for flex spacing */}
                    </div>
                  )}

                  <h3 className="font-medium text-sm mb-2">Media (1)</h3>
                  <Image
                    src={avatar || "/placeholder.svg?height=80&width=80"}
                    alt="Media"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />

                  <div className="text-center mt-4 mb-2 p-3 border border-[#ABC4ED] rounded-lg">
                    <h3 className="text-sm">Attachments (1)</h3>
                  </div>
                  <div className="border border-[#ABC4ED] rounded-lg p-3">
                    <p className="text-sm">document.pdf</p>
                    <p className="text-xs text-gray-500">2.00 MB</p>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="text-center mt-auto pt-4">
            <button
              onClick={() => setIsMarkModalOpen(true)}
              className="text-white hidden md:block font-medium rounded-lg px-3 py-2 text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA]"
            >
              Mark as complete
            </button>
          </div>
        </div>
      </div>


      {/* Button for mobile */}
      <div className="text-center md:hidden mb-6">
        <button
          onClick={() => setIsMarkModalOpen(true)}
          className="text-white font-semibold rounded-lg px-4 py-2 text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA]"
        >
          Mark as complete
        </button>
      </div>

      {/* Modals */}
      <AddGroupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <MarkCompleteModal isOpen={isMarkModalOpen} onClose={() => setIsMarkModalOpen(false)} />
    </div>
  )
}

export default ChatInterface

