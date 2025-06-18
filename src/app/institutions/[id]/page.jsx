"use client"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Suspense, useState, useEffect } from "react"
import Image from "next/image"

// Import necessary icons
import {
  Search,
  Heart,
  MessageSquare,
  Share2,
  Paperclip,
  ImageIcon,
  LinkIcon,
  Globe,
  Lock,
  Facebook, 
  Instagram,
  Users
} from "lucide-react"

// Import modals
import DetailsCreateGroupModal from "@/components/body/institution/modal/DetailsCreateGroupModal"
import CreateTopicModal from "@/components/body/institution/modal/CreateTopicModal"
import EditTopicModal from "@/components/body/institution/modal/EditTopicModal"
import DeleteTopicModal from "@/components/body/institution/modal/DeleteTopicModal"
import Container from "@/components/home/Container"
import { initialConversations, mediators, producers, projects, users } from "@/data/data"

// Store all data in variables for better organization


const InstitutionDetails = () => {
  const router = useRouter()
  const { id } = useParams()

  // Find the current project
  const project = projects.find((p) => p.id === id) || projects[0]

  // State for UI controls
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [createGroupModal, setCreateGroupModal] = useState(false)
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false)
  const [isEditTopicModal, setIsEditTopicModal] = useState(false)
  const [isDeleteTopicModal, setIsDeleteTopicModal] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showInitialVoting, setShowInitialVoting] = useState(true)
  const [votedFor, setVotedFor] = useState(null)
  const [currentUserId] = useState(1) // Simulating current user ID
  const [sortOrder, setSortOrder] = useState("desc") // "asc" or "desc"

  // State for post input and dynamic posts
  const [newPost, setNewPost] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [filePreview, setFilePreview] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [conversationsData, setConversationsData] = useState(initialConversations)

  // Set first conversation as selected by default
  useEffect(() => {
    if (conversationsData.length > 0 && !selectedConversation) {
      setSelectedConversation(conversationsData[0])
    }
  }, [conversationsData, selectedConversation])

  // Filter conversations based on search term
  const filteredConversations = conversationsData.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Sort posts by likes
  const sortPosts = (posts) => {
    if (!posts) return []
    return [...posts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.likes - b.likes
      } else {
        return b.likes - a.likes
      }
    })
  }

  // Edit Topic
  const handleEdit = (conversation) => {
    setCurrentCategory(conversation)
    setIsEditTopicModal(true)
  }

  // Delete topic
  const handleDeleteConfirm = () => {
    // In a real app, you would delete the conversation from the database
    console.log("Deleting conversation:", currentCategory)

    // Remove the conversation from the state
    if (currentCategory) {
      const updatedConversations = conversationsData.filter((conv) => conv.id !== currentCategory.id)
      setConversationsData(updatedConversations)

      // If the deleted conversation was selected, select the first available one
      if (selectedConversation && selectedConversation.id === currentCategory.id) {
        setSelectedConversation(updatedConversations.length > 0 ? updatedConversations[0] : null)
      }
    }

    setIsDeleteTopicModal(false)
  }

  const onDeleteBond = (conversation) => {
    setCurrentCategory(conversation)
    setIsDeleteTopicModal(true)
  }

  // Add file handling functions
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setFilePreview(file.name)
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)

      // Create image preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle post submission within a conversation
  const handlePostSubmit = () => {
    if ((!newPost.trim() && !selectedFile && !selectedImage) || !selectedConversation) return

    const attachments = []

    if (selectedFile) {
      attachments.push({
        name: selectedFile.name,
        type: selectedFile.name.split(".").pop().toLowerCase(),
        size: `${Math.round(selectedFile.size / 1024)} KB`,
      })
    }

    if (selectedImage) {
      attachments.push({
        name: selectedImage.name,
        type: "image",
        preview: imagePreview,
      })
    }

    const newPostObj = {
      id: Date.now(),
      author: "You",
      role: "Member",
      avatar: "/avatar.png",
      content: newPost,
      date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" }),
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
      likes: 0,
      likedBy: [],
      comments: 0,
      attachments: attachments,
    }

    // Update the conversation with the new post
    const updatedConversations = conversationsData.map((conv) => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          posts: [newPostObj, ...conv.posts],
        }
      }
      return conv
    })

    setConversationsData(updatedConversations)

    // Update the selected conversation
    setSelectedConversation({
      ...selectedConversation,
      posts: [newPostObj, ...selectedConversation.posts],
    })

    // Clear form
    setNewPost("")
    setSelectedFile(null)
    setSelectedImage(null)
    setFilePreview(null)
    setImagePreview(null)
  }

  // Replace the entire handleLike function with this updated version that allows unliking
  const handleLike = (conversationId, postId) => {
    const updatedConversations = conversationsData.map((conv) => {
      if (conv.id === conversationId) {
        const updatedPosts = conv.posts.map((post) => {
          if (post.id === postId) {
            // Check if user already liked this post
            const alreadyLiked = post.likedBy?.includes(currentUserId)

            if (alreadyLiked) {
              // Unlike: Remove user from likedBy array and decrement likes count
              return {
                ...post,
                likes: post.likes - 1,
                likedBy: post.likedBy.filter((id) => id !== currentUserId),
              }
            } else {
              // Like: Add user to likedBy array and increment likes count
              return {
                ...post,
                likes: post.likes + 1,
                likedBy: [...(post.likedBy || []), currentUserId],
              }
            }
          }
          return post
        })

        return {
          ...conv,
          posts: updatedPosts,
        }
      }
      return conv
    })

    setConversationsData(updatedConversations)

    // Update selected conversation if needed
    if (selectedConversation && selectedConversation.id === conversationId) {
      const updatedPosts = selectedConversation.posts.map((post) => {
        if (post.id === postId) {
          const alreadyLiked = post.likedBy?.includes(currentUserId)

          if (alreadyLiked) {
            return {
              ...post,
              likes: post.likes - 1,
              likedBy: post.likedBy.filter((id) => id !== currentUserId),
            }
          } else {
            return {
              ...post,
              likes: post.likes + 1,
              likedBy: [...(post.likedBy || []), currentUserId],
            }
          }
        }
        return post
      })

      setSelectedConversation({
        ...selectedConversation,
        posts: updatedPosts,
      })
    }
  }

  // Handle voting for a group name
  const handleVoteForName = (mediator) => {
    setVotedFor(mediator.groupName)
    // In a real app, you would send this vote to the server
    console.log(`Voted for ${mediator.groupName} by ${mediator.name}`)

    // Hide voting after a delay
    setTimeout(() => {
      setShowInitialVoting(false)
    }, 1500)
  }

  // Toggle conversation privacy
  const toggleConversationPrivacy = (conversationId) => {
    const updatedConversations = conversationsData.map((conv) => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          isPublic: !conv.isPublic,
        }
      }
      return conv
    })

    setConversationsData(updatedConversations)

    // Update selected conversation if needed
    if (selectedConversation && selectedConversation.id === conversationId) {
      setSelectedConversation({
        ...selectedConversation,
        isPublic: !selectedConversation.isPublic,
      })
    }
  }

  // Ensure the modals are properly rendered at the end of the component
  return (
    <>
        <div className='px-5 lg:px-0 mx-auto py-2'>
          {/* Banner Image */}
          <div className="w-full border rounded-sm border-gray-300 h-[200px] relative mb-4">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>

          {/* Header Section with Social Links */}
          <div className="mb-6 px-2">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col">
                <h1 className="text-lg text-[#1C4587] font-semibold">{project.title}</h1>
                <p className="text-xs text-gray-600 mt-1">{project.description}</p>

                {/* Social Media Links */}
                <div className="flex mt-2 gap-3">
                  {project.socialLinks?.facebook && (
                    <a
                      href={project.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C4587] hover:text-blue-700 cursor-pointer"
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                  {project.socialLinks?.instagram && (
                    <a
                      href={project.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C4587] hover:text-pink-600 cursor-pointer"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <span className="text-xs text-gray-500">{project.created}</span> */}
                <img className="w-4 border rounded-sm border-[#1C4587] cursor-pointer" src="/filter.svg" alt="" />
              </div>
            </div>
          </div>

          {/* Mediators Section */}
          <div className="mb-6 border border-gray-200 bg-[#FFFFFF] rounded-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm text-[#1C4587] font-semibold">Mediators</h2>
              {showInitialVoting && (
                <span className="text-xs text-[#1C4587]">Click on a mediator to vote for their group name</span>
              )}
            </div>

            <div className="flex flex-wrap justify-evenly">
              {mediators.map((mediator) => (
                <div
                  key={mediator.id}
                  className={`flex flex-col items-center text-center cursor-pointer transition-all ${votedFor === mediator.groupName ? "scale-110" : "hover:scale-105"
                    }`}
                  onClick={() => handleVoteForName(mediator)}
                >
                  <div className="relative">
                    <img
                      src={mediator.avatar || "/placeholder.svg"}
                      alt={mediator.name}
                      className={`w-12 h-12 rounded-full border-2 ${votedFor === mediator.groupName ? "border-green-500" : "border-blue-400"
                        }`}
                    />
                    {votedFor === mediator.groupName && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-medium mt-1">{mediator.name}</p>
                  <p className="text-[10px] text-gray-500">{mediator.role}</p>
                  <p className="text-[10px] font-semibold text-[#1C4587] mt-0.5">{mediator.groupName}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 mt-6 rounded-sm">
            <div className="grid grid-cols-1 border border-gray-200 rounded-sm lg:grid-cols-12 gap-6">
              {/* Producer Section */}
              <div className="lg:col-span-3 bg-white rounded-sm">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-sm text-[#1C4587] font-medium">Innovators Hub</h2>
                    <img onClick={() => setCreateGroupModal(true)} src="/edit.svg" alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="p-2 flex flex-col gap-2">
                  {producers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-3 p-[5] hover:bg-gray-50 border border-[#95B5E9] rounded-sm cursor-pointer"
                    >
                      <div className="relative">
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="rounded-full w-8 h-8" />
                        {user.online && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                      </div>
                      <div>
                        <p className="text-xs">{user.name}</p>
                        <p className="text-[10px] text-gray-500">{user.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversations Section (formerly Topics) */}
              <div className="lg:col-span-6 space-y-6">
                {/* Conversations List */}
                <div className="bg-white border rounded-b-sm border-gray-100">
                  <div className="flex border-b border-gray-200 p-4 justify-between items-center mb-4">
                    <h2 className="text-sm text-[#1C4587] font-medium">Conversations</h2>
                    <img onClick={() => setIsTopicModalOpen(true)} src="/edit.svg" alt="" className="cursor-pointer" />
                  </div>

                  {/* Search for conversations */}
                  <div className="px-4 mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search conversations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-8 pr-4 py-1.5 border border-[#95B5E9] rounded-sm text-xs outline-none focus:ring-0"
                      />
                      <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="p-2">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`flex justify-between items-center px-4 py-3 border border-gray-200 rounded-sm mb-2 transition ${selectedConversation?.id === conversation.id ? "bg-blue-100 border-blue-300" : "bg-white"
                          }`}
                      >
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => setSelectedConversation(conversation)}
                        >
                          {conversation.isPublic ? (
                            <Globe size={14} className="text-green-600" />
                          ) : (
                            <Lock size={14} className="text-orange-500" />
                          )}
                          <span className="text-xs text-gray-700">{conversation.name}</span>
                          <span className="text-[10px] text-gray-500">({conversation.members} members)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleConversationPrivacy(conversation.id)}
                            className="cursor-pointer outline-none focus:ring-0 text-xs text-gray-500 hover:text-[#1C4587]"
                          >
                            {conversation.isPublic ? "Make Private" : "Make Public"}
                          </button>
                          <button
                            onClick={() => onDeleteBond(conversation)}
                            className="cursor-pointer outline-none focus:ring-0"
                          >
                            <img src="/Delete.svg" alt="" className="cursor-pointer" />
                          </button>
                          <button
                            onClick={() => handleEdit(conversation)}
                            className="cursor-pointer outline-none focus:ring-0"
                          >
                            <img src="/edit.svg" alt="" className="cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Users Section */}
              <div className="lg:col-span-3 bg-white rounded-sm">
                <div className="p-4">
                  <div className="flex flex-row-reverse justify-between items-center mb-3">
                    <h2 className="text-sm text-[#1C4587] font-medium">Critical Thinkers</h2>
                    <img onClick={() => setCreateGroupModal(true)} src="/edit.svg" alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="p-2 flex flex-col gap-2">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-3 p-[5] hover:bg-gray-50 border border-[#95B5E9] rounded-sm cursor-pointer"
                    >
                      <div className="relative">
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="rounded-full w-8 h-8" />
                        {user.online && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                      </div>
                      <div>
                        <p className="text-xs">{user.name}</p>
                        <p className="text-[10px] text-gray-500">{user.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Conversation Posts */}
            {selectedConversation && (
              <div className="bg-white border rounded-sm border-gray-100 p-4 mt-6">
                {/* Add sorting controls to the conversation header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-medium text-[#1C4587]">{selectedConversation.name}</h3>
                    {selectedConversation.isPublic ? (
                      <Globe size={14} className="text-green-600" />
                    ) : (
                      <Lock size={14} className="text-orange-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                      className="flex items-center gap-1 p-1 text-[10px] cursor-pointer font-medium rounded-sm transition-colors text-[#1C4587]"
                    >
                      <span>Likes</span>
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
                    <span className="text-xs text-gray-500">{selectedConversation.members} members</span>
                  </div>
                </div>

                {/* Post Input */}
                <div className="mb-4 border border-gray-200 rounded-sm p-3">
                  <div className="flex items-start gap-3">
                    <img src="/avatar.png" alt="Your Avatar" className="w-8 h-8 rounded-full" />
                    <div className="flex-1">
                      <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder={`Share something in ${selectedConversation.name}...`}
                        className="w-full p-2 text-xs border border-gray-200 rounded-sm focus:outline-none focus:border-[#1C4587] min-h-[60px] resize-none"
                      />

                      {/* File and Image Previews */}
                      {(filePreview || imagePreview) && (
                        <div className="mt-2 p-2 bg-gray-50 rounded-sm">
                          {filePreview && (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Paperclip className="w-4 h-4 text-[#1C4587]" />
                                <span className="text-[10px] text-[#1C4587]">{filePreview}</span>
                              </div>
                              <button
                                onClick={() => {
                                  setSelectedFile(null)
                                  setFilePreview(null)
                                }}
                                className="text-red-500 text-[10px] cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          )}

                          {imagePreview && (
                            <div className="mt-2">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] text-[#1C4587]">{selectedImage.name}</span>
                                <button
                                  onClick={() => {
                                    setSelectedImage(null)
                                    setImagePreview(null)
                                  }}
                                  className="text-red-500 text-[10px] cursor-pointer"
                                >
                                  Remove
                                </button>
                              </div>
                              <img
                                src={imagePreview || "/placeholder.svg"}
                                alt="Preview"
                                className="max-h-32 rounded-sm object-contain"
                              />
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2">
                          <label htmlFor="file-upload" className="text-gray-500 hover:text-[#1C4587] cursor-pointer">
                            <Paperclip className="w-4 h-4" />
                            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                          </label>
                          <label htmlFor="image-upload" className="text-gray-500 hover:text-[#1C4587] cursor-pointer">
                            <ImageIcon className="w-4 h-4" />
                            <input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageChange}
                            />
                          </label>
                          <label htmlFor="link-upload" className="text-gray-500 hover:text-[#1C4587] cursor-pointer">
                            <LinkIcon className="w-4 h-4" />
                          </label>
                        </div>
                        <button
                          onClick={handlePostSubmit}
                          className="bg-button text-white px-3 py-1 rounded-sm text-xs hover:from-[#15366b] hover:to-[#2861c4] transition-colors cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts List */}
                <div className="space-y-4">
                  {selectedConversation.posts.length > 0 ? (
                    sortPosts(selectedConversation.posts).map((post) => (
                      <motion.div
                        key={post.id}
                        className="border border-gray-200 rounded-sm p-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={post.avatar || "/placeholder.svg"}
                              alt={post.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <h4 className="text-xs font-medium">{post.author}</h4>
                              <p className="text-[10px] text-gray-500">{post.role}</p>
                            </div>
                          </div>
                          <div className="text-[10px] text-gray-500">
                            <div className="flex items-center gap-1">
                              <img src="/calender.svg" alt="" className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <img src="/clock.svg" alt="" className="w-3 h-3" />
                              <span>{post.time}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-gray-700 my-2">{post.content}</p>

                        {post.attachments && post.attachments.length > 0 && (
                          <div className="my-2 p-2 bg-gray-50 rounded-sm">
                            {post.attachments.map((attachment, index) => (
                              <div key={index} className="mb-2 last:mb-0">
                                {attachment.type === "image" ? (
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-[10px] text-[#1C4587]">{attachment.name}</span>
                                      <a
                                        href={attachment.preview}
                                        download={attachment.name}
                                        className="text-[#1C4587] text-[10px] hover:underline cursor-pointer"
                                      >
                                        Download
                                      </a>
                                    </div>
                                    <img
                                      src={attachment.preview || "/placeholder.svg"}
                                      alt={attachment.name}
                                      className="max-h-32 rounded-sm object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      {attachment.type === "pdf" ? (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="text-red-500"
                                        >
                                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                          <polyline points="14 2 14 8 20 8"></polyline>
                                          <path d="M9 15v-2h6v2"></path>
                                          <path d="M12 15v3"></path>
                                          <path d="M9 11h.01"></path>
                                          <path d="M15 11h.01"></path>
                                        </svg>
                                      ) : (
                                        <Paperclip className="w-4 h-4 text-[#1C4587]" />
                                      )}
                                      <span className="text-[10px] text-[#1C4587]">{attachment.name}</span>
                                      {attachment.size && (
                                        <span className="text-[9px] text-gray-500">({attachment.size})</span>
                                      )}
                                    </div>
                                    <a
                                      href="#"
                                      className="text-[#1C4587] text-[10px] hover:underline cursor-pointer"
                                      onClick={(e) => {
                                        e.preventDefault()
                                        alert(`Download functionality would be implemented here for ${attachment.name}`)
                                      }}
                                    >
                                      Download
                                    </a>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4 mt-2 text-[10px]">
                          <button
                            onClick={() => handleLike(selectedConversation.id, post.id)}
                            className={`flex items-center gap-1 ${post.likedBy?.includes(currentUserId)
                              ? "text-red-500"
                              : "text-gray-500 hover:text-[#1C4587]"
                              } cursor-pointer`}
                          >
                            <Heart
                              className={`w-3 h-3 ${post.likedBy?.includes(currentUserId) ? "fill-red-500" : ""}`}
                            />
                            <span>
                              {post.likedBy?.includes(currentUserId) ? "Unlike" : "Like"} ({post.likes})
                            </span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#1C4587] cursor-pointer">
                            <MessageSquare className="w-3 h-3" />
                            <span>Comment ({post.comments})</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#1C4587] cursor-pointer">
                            <Share2 className="w-3 h-3" />
                            <span>Share</span>
                          </button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500 text-sm">
                      <Users className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p>No posts in this conversation yet.</p>
                      <p className="text-xs mt-1">Be the first to share something!</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      {/* Modals */}
      {createGroupModal && (
        <DetailsCreateGroupModal isOpen={createGroupModal} onClose={() => setCreateGroupModal(false)} />
      )}

      {isTopicModalOpen && <CreateTopicModal isOpen={isTopicModalOpen} onClose={() => setIsTopicModalOpen(false)} />}

      {isEditTopicModal && (
        <EditTopicModal
          isOpen={isEditTopicModal}
          onClose={() => setIsEditTopicModal(false)}
          category={currentCategory}
        />
      )}

      {isDeleteTopicModal && (
        <DeleteTopicModal
          isOpen={isDeleteTopicModal}
          onClose={() => setIsDeleteTopicModal(false)}
          handleDeleteConfirm={handleDeleteConfirm}
          category={currentCategory}
        />
      )}
    </>
  )
}

export default function Wrapper() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <InstitutionDetails />
    </Suspense>
  )
}
