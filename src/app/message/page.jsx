"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Paperclip, Send, ChevronDown, Menu, X, ArrowLeft } from 'lucide-react';
import avatar from '../../../public/heroImage.png';
import Link from "next/link";
import AddGroupModal from "@/components/body/message/modal/AddGroupModal";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState("Ahamad Musa");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [activeView, setActiveView] = useState('chat'); // 'list', 'chat', 'media'

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setShowSidebar(false);
        setShowRightSidebar(false);
        setActiveView('list');
      } else {
        setShowSidebar(true);
        setShowRightSidebar(true);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const recentChats = [
    {
      name: "Ahamad Musa",
      message: "Hello, how are you?",
      time: "6 minutes",
      avatar: avatar,
    },
    {
      name: "John Doe",
      message: "Let's catch up!",
      time: "10 minutes",
      avatar: avatar,
    },
    {
      name: "Sarah Connor",
      message: "Meeting at 5 PM.",
      time: "15 minutes",
      avatar: avatar,
    },
  ];

  const messages = [
    { id: 1, text: "Hi John, how can I help you?", sender: "them", time: "3:51 PM" },
    { id: 2, text: "I need some information.", sender: "me", time: "3:52 PM" },
    { id: 3, text: "What do you need?", sender: "them", time: "3:53 PM" },
    { id: 4, image: avatar, sender: "me", time: "3:55 PM" },
  ];

  const handleChatSelect = (chatName) => {
    setSelectedChat(chatName);
    if (isMobile) {
      setActiveView('chat');
    }
  };

  const handleBackToList = () => {
    setActiveView('list');
  };

  const handleShowMedia = () => {
    if (isMobile) {
      setActiveView('media');
    }
  };

  return (
    
      <div className="w-full md:w-11/12 lg:w-7/8 xl:w-6/9 mx-auto px-4 md:px-6 mt-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-lg md:text-xl text-[#1C4587] font-bold mb-4 md:mb-0 text-center md:text-start">
            Inbox
          </h1>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-4 py-2 rounded-md font-medium"
            >
              +Add Group
            </button>
          </motion.div>
        </div>

        <div className="flex h-[75vh] bg-white border-2 mt-5 border-blue-200 rounded-md mb-10 overflow-hidden">
          {/* Left Sidebar - Chat List */}
          {(showSidebar || activeView === 'list') && (
            <div className={`${isMobile ? 'w-full' : 'w-80'} border-r border-blue-900 flex flex-col`}>
              {/* Profile Section */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={avatar || "/placeholder.svg"} alt="Profile" width={30} height={30} className="rounded-full" />
                  <span className="font-medium text-sm">Mr. Jones</span>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-8 pr-4 py-2 border rounded-md text-sm border-blue-900"
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
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer ${selectedChat === chat.name ? "bg-blue-100" : ""
                        }`}
                      onClick={() => handleChatSelect(chat.name)}
                    >
                      <Image src={chat.avatar || "/placeholder.svg"} alt={chat.name} width={30} height={30} className="rounded-full" />
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
          {((!isMobile) || activeView === 'chat') && (
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-blue-900 flex items-center gap-3">
                {isMobile && (
                  <button onClick={handleBackToList} className="mr-2">
                    <ArrowLeft className="h-5 w-5 text-blue-900" />
                  </button>
                )}
                <Image src={avatar || "/placeholder.svg"} alt="Ahamad Musa" width={30} height={30} className="rounded-full" />
                <div className="flex-1">
                  <span className="font-medium text-sm">Ahamad Musa (Uncle)</span>
                  <span className="block text-xs text-green-500">Online</span>
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
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[70%] ${msg.sender === "me" ? "bg-blue-100" : "bg-gray-100"} rounded-lg p-3`}>
                        {msg.text && <p className="text-sm">{msg.text}</p>}
                        {msg.image && (
                          <Image
                            src={msg.image || "/placeholder.svg"}
                            alt="Shared"
                            width={200}
                            height={150}
                            className="rounded-lg max-w-full h-auto"
                          />
                        )}
                        <span className="text-xs text-gray-500 mt-1">{msg.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-blue-900 flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 border border-blue-900 rounded-md text-sm"
                />
                <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-blue-600">
                  <Paperclip className="h-5 w-5" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-blue-600">
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          )}

          {/* Right Sidebar - Media */}
          {((showRightSidebar && !isMobile) || (isMobile && activeView === 'media')) && (
            <div className={`${isMobile ? 'w-full' : 'w-80'} border-l border-blue-900 p-4`}>
              {isMobile && (
                <div className="flex justify-between items-center mb-4">
                  <button onClick={() => setActiveView('chat')} className="text-blue-900">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <h3 className="font-medium">Media & Attachments</h3>
                  <div className="w-5"></div> {/* Empty div for flex spacing */}
                </div>
              )}

              <h3 className="font-medium text-sm mb-2">Media (1)</h3>
              <Image src={avatar || "/placeholder.svg"} alt="Media" width={80} height={80} className="rounded-lg object-cover" />

              <h3 className="font-medium text-sm mt-4 mb-2">Attachments (1)</h3>
              <div className="border border-blue-900 rounded-lg p-3">
                <p className="text-sm font-medium">document.pdf</p>
                <p className="text-xs text-gray-500">2.00 MB</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        <AddGroupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
  );
};

export default ChatInterface;
