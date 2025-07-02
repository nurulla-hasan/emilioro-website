"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const sampleData = {
  producers: [
    { id: 1, name: "Ahamad Musa", role: "Engineer, CEO", avatar: "/avatar.png" },
    { id: 2, name: "John Smith", role: "General Manager", avatar: "/avatar.png" },
    { id: 3, name: "Sarah Johnson", role: "Chief of Engineer", avatar: "/avatar.png" },
    { id: 4, name: "Michael Brown", role: "Work Administrator", avatar: "/avatar.png" },
    { id: 5, name: "Emily Davis", role: "Artist, Engineer", avatar: "/avatar.png" },
  ],
  users: [
    { id: 1, name: "Robert Wilson", role: "Artist, Engineer, Musician", avatar: "/avatar.png" },
    { id: 2, name: "Jennifer Lee", role: "Product Designer", avatar: "/avatar.png" },
    { id: 3, name: "David Martinez", role: "Software Developer", avatar: "/avatar.png" },
    { id: 4, name: "Lisa Thompson", role: "UX Researcher", avatar: "/avatar.png" },
    { id: 5, name: "Kevin Anderson", role: "Content Creator", avatar: "/avatar.png" },
  ],
}

const categories = [
  { id: 1, name: "Sustainable Development & Climate Action" },
  { id: 2, name: "Technology & Innovation" },
  { id: 3, name: "Health & Well-being" },
  { id: 4, name: "Education & Research" },
]

const UserInstituteDetailsModal = ({ selectedCardUserProject, setSelectedCardUserProject }) => {
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const [showAllGroupA, setShowAllGroupA] = useState(false)
  const [showAllGroupB, setShowAllGroupB] = useState(false)

  if (!selectedCardUserProject) return null

  const handleClick = (index, categoryId) => {
    setSelected(index)
  }

  // Limit the number of items to display unless "View All" is clicked
  const displayedProducers = showAllGroupA ? sampleData.producers : sampleData.producers.slice(0, 3)
  const displayedUsers = showAllGroupB ? sampleData.users : sampleData.users.slice(0, 3)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white lg:top-11 rounded-sm w-full h-[90vh] md:h-[85vh] overflow-scroll hide-scrollbar max-w-xl relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCardUserProject(null)}
            className="absolute right-4 top-4 z-10 cursor-pointer"
          >
            <img src="/x.svg" alt="Close" />
          </button>

          {/* Header Image */}
          <div className="relative h-48 border-b border-gray-300">
            <Image
              src={selectedCardUserProject.image || "/placeholder.svg"}
              alt="Project Header"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex justify-between flex-col">
            <div>
              {/* Title & description*/}
              <div className="flex flex-col gap-3">
                <h1 className="text-md font-bold text-primary">{selectedCardUserProject.institutionName}</h1>
                <p className="text-gray-600 text-xs mb-4">{selectedCardUserProject.description}</p>
              </div>

              <div>
                {/* Mediator Column */}
                <div className="my-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-sm text-gray-800 mb-2">Mediators</h3>
                      {/* Participant Count */}
                      <div className="flex items-center gap-2 mb-2">
                        <img className="w-4" src="/participants.svg" alt="Participants" />
                        <span className="text-sm text-gray-800 font-semibold">
                          {selectedCardUserProject.participant1} Participent
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 md:grid grid-cols-3 md:grid-cols-5 justify-items-center items-start hidden">
                      {sampleData.producers.map((producer, i) => (
                        <motion.div
                          key={producer.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="flex flex-col justify-center items-center gap-2">
                            <img
                              src={producer.avatar || "/placeholder.svg"}
                              alt={producer.name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-xs text-center text-gray-700">{producer.name}</p>
                              <p className="text-[10px] text-gray-500 text-center">{producer.role}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Participants Grid */}
              <div className="flex md:flex-row gap-5 justify-between w-full">
                {/* Producer Column */}
                <div className="w-1/2">
                  <h3 className="font-semibold text-xs text-gray-800 mb-2">Group A</h3>
                  {/* Participant Count */}
                  <div className="flex items-center gap-2 mb-2">
                    <img className="w-4" src="/participants.svg" alt="Participants" />
                    <span className="text-xs text-gray-800 font-semibold">
                      {selectedCardUserProject.participant1} Participent
                    </span>
                  </div>

                  <div className="space-y-4 hidden md:block">
                    {displayedProducers.map((producer, i) => (
                      <motion.div
                        key={producer.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <img
                          src={producer.avatar || "/placeholder.svg"}
                          alt={producer.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-sm text-gray-700">{producer.name}</p>
                          <p className="text-xs text-gray-500">{producer.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* View All Button for Group A */}
                  {!showAllGroupA && sampleData.producers.length > 3 && (
                    <button
                      onClick={() => setShowAllGroupA(true)}
                      className="text-primary text-xs hover:underline mt-2 cursor-pointer"
                    >
                      View all
                    </button>
                  )}
                </div>

                {/* User Column */}
                <div className="w-1/2">
                  <h3 className="font-semibold text-xs text-gray-800 mb-2 text-end">Group B</h3>
                  {/* Participant Count */}
                  <div className="flex items-center gap-2 mb-2 justify-end">
                    <img className="w-4" src="/participants.svg" alt="Participants" />
                    <span className="text-xs text-gray-800 font-semibold">
                      {selectedCardUserProject.participant2} Participent
                    </span>
                  </div>
                  <div className="space-y-4 hidden md:block">
                    {displayedUsers.map((user, i) => (
                      <motion.div
                        key={user.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-end gap-3"
                      >
                        <div>
                          <p className="font-medium text-sm text-gray-700 text-end">{user.name}</p>
                          <p className="text-xs text-gray-500 text-end">{user.role}</p>
                        </div>
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="rounded-full w-8 h-8" />
                      </motion.div>
                    ))}
                  </div>

                  {/* View All Button for Group B */}
                  {!showAllGroupB && sampleData.users.length > 3 && (
                    <div className="text-right">
                      <button
                        onClick={() => setShowAllGroupB(true)}
                        className="text-primary text-xs hover:underline mt-2 cursor-pointer"
                      >
                        View all
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* All Topics */}
              <div className="bg-white mt-5">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xs text-black font-medium">All Topics</h2>
                  <p className="text-xs font-normal text-gray-800">10 Topics</p>
                </div>
                <div className="">
                  {categories.map((category, index) => (
                    <div
                      key={category.id}
                      className={`flex justify-between items-center px-4 py-3 border border-gray-200 rounded-sm mb-2 transition ${
                        selected === index ? "bg-blue-100 border-blue-300" : "bg-white"
                      }`}
                    >
                      <span
                        onClick={() => handleClick(index, category.id)}
                        className="cursor-pointer text-xs text-gray-700"
                      >
                        {category.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View All Link for Topics */}
              <div className="text-right">
                <button className="text-primary text-xs hover:underline outline-none focus:ring-0 cursor-pointer">
                  View all
                </button>
              </div>
            </div>
            {/* Join Button */}
            <div className="flex gap-5 mt-4">
              <motion.button
                className="w-1/2 bg-primary text-white py-1 text-sm rounded-sm font-medium cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                Leave
              </motion.button>
              <motion.button
                className="w-1/2 bg-primary text-white py-1 text-sm rounded-sm font-medium cursor-pointer"
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(`/institutions/${selectedCardUserProject.id}`)}
              >
                Open Institution
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default UserInstituteDetailsModal
