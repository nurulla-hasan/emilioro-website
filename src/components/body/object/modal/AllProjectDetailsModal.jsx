"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

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

const AllProjectDetailsModal = ({ selectedCardAllProject, setSelectedCardAllProject }) => {
  if (!selectedCardAllProject) return null

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
            onClick={() => setSelectedCardAllProject(null)}
            className="absolute right-4 top-4 z-10 cursor-pointer"
          >
            <img src="/x.svg" alt="" />
          </button>

          {/* Header Image */}
          <div className="relative h-48">
            <Image
              src={selectedCardAllProject.image || "/placeholder.svg"}
              alt="Project Header"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#102b4bac]">
              <h1 className="text-white text-xl font-semibold absolute bottom-4 left-4">{selectedCardAllProject.title}</h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex justify-between flex-col">
            <div>
              {/* Owner Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedCardAllProject.ownerImage || "/placeholder.svg"}
                    className="h-8 w-8 rounded-full"
                    alt="Owner"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{selectedCardAllProject.author}</h3>
                    <p className="text-xs text-gray-500">{selectedCardAllProject.authorRole}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-end">
                    <span className="text-blue-800 bg-gray-300 rounded-sm text-end px-1 text-[10px]">
                      {selectedCardAllProject.status[0]}
                    </span>
                  </div>
                  <span className="text-gray-400 text-[10px]">{selectedCardAllProject.created}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs mb-6">{selectedCardAllProject.description}</p>

              {/* Participant Count */}
              <div className="flex items-center gap-2 mb-2">
                <img className="w-4" src="/participants.svg" alt="Participants" />
                <span className="text-xs text-gray-800 font-semibold">{selectedCardAllProject.participant} Participent</span>
              </div>

              {/* Participants Grid */}
              <div className="flex flex-col md:flex-row gap-5 justify-between w-full">
                {/* Producer Column */}
                <div>
                  <h3 className="font-semibold mb-2">Producer</h3>
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
                  <h3 className="font-semibold mb-2 md:text-end">User</h3>
                  <div className="space-y-4">
                    {sampleData.users.map((user, i) => (
                      <motion.div
                        key={user.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="rounded-full w-8 h-8" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* View All Link */}
              <div className="text-right">
                <button className="text-blue-900 text-xs hover:underline outline-none focus:ring-0">View all</button>
              </div>
            </div>
            {/* Join Button */}
            <div className="flex justify-center">
              <motion.button
                className="w-1/2 bg-[#1C4587] text-white py-1 text-sm rounded-sm font-medium "
                whileTap={{ scale: 0.98 }}
              >
                Request to join
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AllProjectDetailsModal

