"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"



// Sample JSON data for producers and users



const sampleData = {
  producers: [
    { id: 1, name: "Ahamad Musa", role: "CEO", avatar: "/avatar.png" },
    { id: 2, name: "John Smith", role: "General Manager", avatar: "/avatar.png" },
    { id: 3, name: "Sarah Johnson", role: "Chief of Engineer", avatar: "/avatar.png" },
    { id: 4, name: "Michael Brown", role: "Work Administrator", avatar: "/avatar.png" },
    { id: 5, name: "Emily Davis", role: "Artist, Engineer, Musician", avatar: "/avatar.png" },
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
  if (!selectedCardUserProject) return null
  const [selected, setSelected] = useState(null)
  const handleClick = (index, categoryId) => {
    setSelected(index)
  }

  console.log(selectedCardUserProject);

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
          className="bg-white lg:top-11 rounded-sm w-full h-[90vh] md:h-[85vh] overflow-scroll hide-scrollbar max-w-xl  relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCardUserProject(null)}
            className="absolute right-4 top-4 z-10 cursor-pointer"
          >
            <img src="/x.svg" alt="" />
          </button>

          {/* Header Image */}
          <div className="relative h-48 border-b border-gray-300">
            <Image
              src={selectedCardUserProject.image || "/placeholder.svg"}
              alt="Project Header"
              layout="fill"
              objectFit="cover"
            />

          </div>

          {/* Content */}
          <div className="p-5 flex justify-between flex-col">
            <div>

              {/* Title & description*/}
              <div className="flex flex-col gap-3">
                <h1 className="text-md font-bold text-[#1C4587]">
                  {selectedCardUserProject.institutionName}
                </h1>
                <p className="text-gray-600 text-xs mb-4">{selectedCardUserProject.description}</p>
              </div>




              {/* Participants Grid */}
              <div className="flex flex-col md:flex-row gap-5 justify-between w-full">
                {/* Producer Column */}
                <div>
                  <h3 className="font-semibold text-xs text-gray-800 mb-2">Group A</h3>
                  {/* Participant Count */}
                  <div className="flex items-center gap-2 mb-2">
                    <img className="w-4" src="/participants.svg" alt="Participants" />
                    <span className="text-xs text-gray-800 font-semibold">{selectedCardUserProject.participant1} Participent</span>
                  </div>

                  <div className="space-y-4">
                    {sampleData.producers.map((producer, i) => (
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
                </div>

                {/* User Column */}
                <div>
                  <h3 className="font-semibold text-xs text-gray-800 mb-2 md:text-end">Group B</h3>
                  {/* Participant Count */}
                  <div className="flex items-center gap-2 mb-2 justify-end">
                    <img className="w-4" src="/participants.svg" alt="Participants" />
                    <span className="text-xs text-gray-800 font-semibold">{selectedCardUserProject.participant2} Participent</span>
                  </div>
                  <div className="space-y-4">
                    {sampleData.users.map((user, i) => (
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
                </div>
              </div>
              <div className="text-end mt-1">
                <Link className="text-xs text-[#1C4587]" href="#">View All</Link>
              </div>


              <div className=" mt-5">
                {/* Producer Column */}
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-sm text-gray-800 mb-2">Mediators</h3>
                    {/* Participant Count */}
                    <div className="flex items-center gap-2 mb-2">
                      <img className="w-4" src="/participants.svg" alt="Participants" />
                      <span className="text-sm text-gray-800 font-semibold">{selectedCardUserProject.participant1} Participent</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {sampleData.producers.map((producer, i) => (
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
                </div>

              </div>
              <div className="text-end mt-1">
                <Link className="text-xs text-[#1C4587]" href="#">View All</Link>
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
                      className={`flex justify-between items-center px-4 py-3 border border-gray-200 rounded-sm mb-2 transition ${selected === index ? "bg-blue-100 border-blue-300" : "bg-white"
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

            {/* View All Link */}
            <div className="text-right">
              <button className="text-[#1C4587] text-xs hover:underline outline-none focus:ring-0">View all</button>
            </div>
          </div>
          {/* Join Button */}
          <div className="flex justify-center">
            <motion.button
              className="w-1/2 bg-[#1C4587] text-white py-1 text-sm rounded-sm font-medium "
              whileTap={{ scale: 0.98 }}
            >
              Join Institution
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence >
  )
}

export default UserInstituteDetailsModal

