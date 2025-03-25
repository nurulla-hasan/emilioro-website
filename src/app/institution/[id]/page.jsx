"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Suspense, useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import avatar from "../../../../public/heroImage.png"
import DetailsCreateGroupModal from "@/components/body/institution/modal/DetailsCreateGroupModal"
import CreateTopicModal from "@/components/body/institution/modal/CreateTopicModal"
import EditTopicModal from "@/components/body/institution/modal/EditTopicModal"
import DeleteTopicModal from "@/components/body/institution/modal/DeleteTopicModal"

// Additional data for the interface
const producers = [
  { id: 1, name: "Ahamad musa", role: "CEO", online: true, avatar: "/avatar.png" },
  { id: 2, name: "Ahamad musa", role: "General manager", online: true, avatar: "/avatar.png" },
  { id: 3, name: "Ahamad musa", role: "Chief of engineer", online: false, avatar: "/avatar.png" },
  { id: 4, name: "Ahamad musa", role: "work administrator", online: true, avatar: "/avatar.png" },
  { id: 5, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true, avatar: "/avatar.png" },
]

const users = [
  { id: 1, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true, avatar: "/avatar.png" },
  { id: 2, name: "Ahamad musa", role: "Artist, Engineer, musician", online: false, avatar: "/avatar.png" },
  { id: 3, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true, avatar: "/avatar.png" },
  { id: 4, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true, avatar: "/avatar.png" },
  { id: 5, name: "Ahamad musa", role: "Artist, Engineer, musician", online: false, avatar: "/avatar.png" },
]

const categories = [
  { id: 1, name: "Sustainable Development & Climate Action" },
  { id: 2, name: "Technology & Innovation" },
  { id: 3, name: "Health & Well-being" },
  { id: 4, name: "Education & Research" },
]

// Project data from props
const projects = [
  {
    id: "1",
    title: "Eco-Friendly Packaging",
    status: ["Ongoing", "Public"],
    description:
      "Develop sustainable packaging solutions using biodegradable materials to reduce environmental impact. Focus on innovative designs that maintain product integrity while being eco-conscious.",
    author: "MR. Sarwar",
    authorRole: ["Owner"],
    image: "/institute (1).png",
    participant: "10",
    created: "22 may 2025",
  },
  {
    id: "2",
    title: "Recyclable Materials",
    status: ["Ongoing", "Public"],
    description: "Use recyclable materials to create packaging that can be reused.",
    author: "MR. Golap",
    authorRole: ["Owner"],
    image: "/institute (2).png",
    participant: "10",
    created: "22 may 2023",
  },
  {
    id: "3",
    title: "Minimalist Design",
    status: ["Ongoing", "Public"],
    description: "Implement minimalist design principles to reduce waste and improve.",
    author: "MS. Fatima",
    authorRole: ["Owner"],
    image: "/institute (3).png",
    participant: "10",
    created: "22 may 2023",
  },
  {
    id: "4",
    title: "Minimalist Design",
    status: ["Ongoing", "Public"],
    description: "Implement minimalist design principles to reduce waste and improve.",
    author: "MS. Fatima",
    authorRole: ["Owner"],
    image: "/institute (1).png",
    participant: "10",
    created: "22 may 2023",
  },
  {
    id: "5",
    title: "Minimalist Design",
    status: ["Ongoing", "Public"],
    description: "Implement minimalist design principles to reduce waste and improve.",
    author: "MS. Fatima",
    authorRole: ["User"],
    image: "/institute (2).png",
    participant: "10",
    created: "22 may 2023",
  },
]

const EcoFriendlyPackage = () => {
  const router = useRouter()
  const { id } = useParams()

  const [selected, setSelected] = useState(null)
  const [createGroupModal, setCreateGroupModal] = useState(false)
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false)
  const [isEditTopicModal, setIsEditTopicModal] = useState(false)
  const [isDeleteTopicModal, setIsDeleteTopicModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null)

  // Edit Topic 

  const handleEdit = (category) => {
    setCurrentCategory(category)
    setIsEditTopicModal(true)
  }

  // delete topic 
  const handleDeleteConfirm = () => {
    setIsDeleteTopicModal(false);
  };
  const onDeleteBond = () => {
    setIsDeleteTopicModal(true);
  };



  // Find the current project
  const project = projects.find((p) => p.id === id) || projects[0]

  const handleClick = (index, categoryId) => {
    setSelected(index)
    router.push(`/thinktankAcademy/topic/${categoryId}`)
  }

  const [selectedVote, setSelectedVote] = useState("")
  const [voted, setVoted] = useState(false)
  // Initial vote data
  const [votes, setVotes] = useState({
    "Innovators Hub": 5,
    "Change makers": 3,
    Pioneers: 2,
  })
  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0)

  const handleVote = (name) => {
    if (!voted) {
      setSelectedVote(name)
    }
  }

  const handleSubmit = () => {
    if (selectedVote) {
      // Update votes
      setVotes((prev) => ({
        ...prev,
        [selectedVote]: prev[selectedVote] + 1,
      }))
      setVoted(true)
    }
  }

  return (
    <div className="xl:w-8/11 lg:w-10/12 px-5 my-5 mx-auto">
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

      {/* Header Section */}
      <div className="mb-6 px-2">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-lg text-[#1C4587] font-semibold">{project.title}</h1>
            <img
              src="/filter.svg"
              alt="Filter Icon"
              className="w-5 h-5 border border-[#1C4587] inline-block rounded-sm"
            />
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600 px-2">{project.description}</p>

      <div className="p-2 mt-6 rounded-sm">
        <div className="grid grid-cols-1 border border-gray-200 rounded-sm lg:grid-cols-12 gap-6">
          {/* Producer Section */}
          <div className="lg:col-span-3 bg-white rounded-sm">
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm text-[#1C4587] font-medium">Innovators Hub</h2>
                <img onClick={() => setCreateGroupModal(true)} src="/edit.svg" alt="" className="cursor-pointer" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-8 pr-4 py-1.5 border border-[#95B5E9] rounded-sm text-xs outline-none focus:ring-0"
                />
                <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="p-2 flex flex-col gap-2">
              {producers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 p-[5] hover:bg-gray-50 border border-[#95B5E9] rounded-sm"
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

          {/* Files Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* All Topics */}
            <div className="bg-white border rounded-b-sm border-gray-100">
              <div className="flex border-b border-gray-200 p-4 justify-between items-center mb-4">
                <h2 className="text-sm text-[#1C4587] font-medium">All Topics</h2>
                <img onClick={() => setIsTopicModalOpen(true)} src="/edit.svg" alt="" className="cursor-pointer" />
              </div>
              <div className="p-2">
                {categories.map((category, index) => (
                  <div
                    key={category.id}
                    className={`flex justify-between items-center px-4 py-3 border border-gray-200 rounded-sm mb-2 transition ${selected === index ? "bg-blue-100 border-blue-300" : "bg-white"
                      }`}
                  >
                    <span
                      onClick={() => handleClick(index, category.id)}
                      className="cursor-pointer text-xs text-gray-700"
                    >
                      {category.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => onDeleteBond(category)} className="cursor-pointer outline-none focus:ring-0">
                        <img src="/Delete.svg" alt="" />
                      </button>
                      <button
                        onClick={() => handleEdit(category)}
                        className="cursor-pointer outline-none focus:ring-0">
                        <img src="/edit.svg" alt="" />
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
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-8 pr-4 py-1.5 border border-[#95B5E9] rounded-sm text-xs outline-none focus:ring-0"
                />
                <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="p-2 flex flex-col gap-2">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 p-[5] hover:bg-gray-50 border border-[#95B5E9] rounded-sm"
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

        {/* Mediators */}
        <div className="mt-6 border-t border-gray-200 mb-10 shadow-[0px_5px_17px_2px_rgba(1,_75,_250,_0.20)] rounded-sm">
          <h2 className="text-sm text-[#1C4587] font-semibold ml-8 my-4">Mediators</h2>
          <div className="bg-white p-4 rounded-sm">
            <div className="flex gap-4 items-center justify-evenly">
              {projects.map((person, index) => (
                <div key={index} className="flex flex-col items-center  text-center">
                  <img
                    src={avatar.src || "/placeholder.svg"}
                    alt={person.author}
                    className="w-10 h-10 rounded-full border-2 border-blue-400"
                  />
                  <p className="text-xs font-semibold mt-2">{person.author}</p>
                  <p className="text-[10px] text-gray-500">{person.authorRole[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* vote section  */}
        <div className="flex flex-col lg:flex-row justify-between shadow-[0px_5px_17px_2px_rgba(1,_75,_250,_0.20)] rounded-sm p-2">
          {/* Main Voting Area */}
          <div className="bg-white p-6 rounded-sm">
            <h2 className="text-lg font-semibold text-[#1C4587]">Vote for the Group Name</h2>

            {voted && <p className="text-[#1C4587] text-xs mt-1">Remaining time: 1h 10 min</p>}

            <div className="mt-6 space-y-5">
              {Object.keys(votes).map((name) => (
                <div key={name} className="space-y-1">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`w-5 h-5 rounded-full border-2 border-[#1C4587] flex items-center justify-center ${selectedVote === name || (voted && name === "Innovators Hub") ? "bg-[#1C4587]" : "bg-white"
                        }`}
                      onClick={() => handleVote(name)}
                    >
                      {(selectedVote === name || (voted && name === "Innovators Hub")) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-[#1C4587] text-xs">{name}</span>
                  </label>

                  {voted && (
                    <div className="pl-8">
                      <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                        <div
                          className="h-full bg-[#1C4587] rounded-full"
                          style={{ width: `${(votes[name] / totalVotes) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-[#1C4587] mt-1">{`0${votes[name]}`}/10 votes</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!voted && (
              <button
                className="mt-6 bg-[#1C4587] text-white py-1.5 px-4 rounded-sm text-xs hover:bg-[#15366b] transition-colors outline-none focus:ring-0"
                onClick={handleSubmit}
                disabled={!selectedVote}
              >
                Submit
              </button>
            )}
          </div>

          {/* Vote Count Section - Only visible after voting */}
          {voted && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white border border-gray-300 p-6 rounded-sm w-full lg:w-80"
            >
              <h3 className="text-base font-semibold text-[#1C4587] mb-4">Vote Count</h3>

              <div className="space-y-6">
                {Object.keys(votes).map((name) => (
                  <div key={name} className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1C4587] flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-[#1C4587] text-xs">{name}</span>
                    </div>

                    <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2">
                      <div
                        className="h-full bg-[#1C4587] rounded-full"
                        style={{ width: `${(votes[name] / totalVotes) * 100}%` }}
                      ></div>
                    </div>

                    <p className="text-xs text-[#1C4587] mt-1">{`0${votes[name]}`}/10 votes</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal */}
      {createGroupModal && (
        <DetailsCreateGroupModal isOpen={createGroupModal} onClose={() => setCreateGroupModal(false)} />
      )}

      {/* Modal */}
      <CreateTopicModal
        isOpen={isTopicModalOpen}
        onClose={() => setIsTopicModalOpen(false)}
      />

      <EditTopicModal
        isOpen={isEditTopicModal}
        onClose={() => setIsEditTopicModal(false)}
        category={currentCategory}
      />

      {/* Modal for Edit Bond */}
      <DeleteTopicModal
        isOpen={isDeleteTopicModal}
        onClose={() => setIsDeleteTopicModal(false)}
        handleDeleteConfirm={handleDeleteConfirm}
        category={currentCategory}
      />
    </div>
  )
}

export default function Wrapper() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <EcoFriendlyPackage />
    </Suspense>
  )
}

