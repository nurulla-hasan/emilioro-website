"use client"
import { RiEdit2Line, RiTeamLine } from "react-icons/ri"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect, Suspense } from "react"
import { useForm } from "react-hook-form"
import AddProducerModal from "@/components/body/object/modal/AddProducerModal"
import EditProjectModal from "@/components/body/object/modal/EditProjectModal"
import AddUserModal from "@/components/body/object/modal/AddUserModal"
import { useSearchParams } from "next/navigation"

const MyProjectDetails = () => {
  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading project...</p>}>
      <ProjectContent />
    </Suspense>
  )
}

const ProjectContent = () => {
  const [isAddProducerOpen, setIsAddProducerOpen] = useState(false)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  const searchParams = useSearchParams()
  const cardParam = searchParams.get("card")

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (!cardParam) {
      setLoading(false)
      return
    }

    try {
      const parsedCard = JSON.parse(decodeURIComponent(cardParam))
      setProject(parsedCard)
    } catch (error) {
      console.error("Invalid JSON:", error)
      setProject({
        title: "Sample Project",
        author: "John Doe",
        authorRole: "Project Manager",
        created: "Created on 20 Mar 2025",
        description: "This is a sample project description. The actual project data could not be loaded.",
        participant: 6,
        image: "/placeholder.svg?height=200&width=400",
        ownerImage: "/avatar.png",
      })
    } finally {
      setLoading(false)
    }
  }, [cardParam])

  const onSubmit = (data) => {
    console.log("Edited Project Data:", data)
    setIsOpen(false)
    reset()
  }

  if (loading) {
    return <p className="text-center text-gray-500">Loading project...</p>
  }

  if (!project) {
    return <p className="text-center text-gray-500">Project not found</p>
  }

  // Safely get image source
  const getImageSrc = () => {
    if (!project.image) return "/placeholder.svg?height=200&width=400"
    if (typeof project.image === "string") return project.image
    if (project.image.src) return project.image.src
    return "/placeholder.svg?height=200&width=400"
  }

  const imageSrc = getImageSrc()

  return (
    <div className="px-5 my-5">
      <div className="max-w-3xl shadow-[0px_15px_45px_0px_#CFC9DD99] mx-auto p-5 rounded-lg bg-white">
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt="Project Header"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mt-2">
            <h1 className="lg:text-lg text-sm font-bold text-[#1C4587]">{project.title}</h1>
            {/* Edit Button */}
            <button
              className="flex gap-1 items-center cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-3 py-2 rounded-lg font-medium"
              onClick={() => setIsOpen(true)}
            >
              <RiEdit2Line />
              <span>Edit Project</span>
            </button>
          </div>
        </div>

        <div className="lg:h-[50vh] h-[42vh] overflow-auto hide-scrollbar">
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2 items-center">
              <img className="rounded-full w-[30px] h-[30px]" src={project.ownerImage || "/placeholder.svg"} alt="image" />
              <div>
                <h5 className="text-[13px] text-gray-800">{project.author}</h5>
                <p className="text-[10px] text-gray-500">{project.authorRole}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex border rounded-sm px-1 gap-1 items-center text-[#6F6F6F] text-sm">
                <select className="border-none outline-none text-xs">
                  <option value="active">Active</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
              <div className="flex border rounded-sm px-1 gap-1 items-center text-[#6F6F6F] text-sm">
                <select className="border-none outline-none text-xs">
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-end mt-0 mb-2 lg:mt-2">{project.created}</p>
          <p className="text-gray-600 text-sm">{project.description}</p>

          {/* Participant Count */}
          <div className="flex items-center gap-2 mt-2">
            <img src="/participants.svg" alt="" />
            <span className="text-xs font-semibold text-gray-600">{project.participant} Participent</span>
          </div>

          {/* Participants Grid */}
          <div className="grid grid-cols-1 mt-5 gap-5">
            {/* Producer Column */}
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold mb-2">Producer</h3>
                <motion.button
                  className="px-2 text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-md font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsAddProducerOpen(true)}
                >
                  +Add Producer
                </motion.button>
              </div>

              <div>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center mt-2 gap-2"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2 items-center">
                        <img src={project.ownerImage || "/placeholder.svg"} alt="Producer" className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                          <p className="text-xs text-gray-500">
                            {i === 0
                              ? "CEO"
                              : i === 1
                                ? "General manager"
                                : i === 2
                                  ? "Chief of engineer"
                                  : i === 3
                                    ? "work administrator"
                                    : "Artist, Engineer, musician"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <motion.button
                          className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-md font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Remove
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {/* View All Link */}
                <div className="text-right">
                  <button className="text-blue-900 text-xs hover:underline">View all</button>
                </div>
              </div>
            </div>
            {/* User Column */}
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold mb-2">User</h3>
                <motion.button
                  className="px-2 text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-md font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsAddUserOpen(true)}
                >
                  +Add User
                </motion.button>
              </div>
              <div>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center mt-2 gap-2"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2 items-center">
                        <img src={project.ownerImage || "/placeholder.svg"} alt="Producer" className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                          <p className="text-xs text-gray-500">
                            {i === 0
                              ? "CEO"
                              : i === 1
                                ? "General manager"
                                : i === 2
                                  ? "Chief of engineer"
                                  : i === 3
                                    ? "work administrator"
                                    : "Artist, Engineer, musician"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <motion.button
                          className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-md font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Remove
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {/* View All Link */}
                <div className="text-right">
                  <button className="text-blue-900 text-xs hover:underline">View all</button>
                </div>
              </div>
            </div>

            {/* Join Request Column */}
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold ">Join Request</h3>
              </div>
              <div>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center mt-2 gap-2"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2 items-center">
                        <img src={imageSrc || "/placeholder.svg"} alt="Producer" className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                          <p className="text-xs text-gray-500">
                            {i === 0
                              ? "CEO"
                              : i === 1
                                ? "General manager"
                                : i === 2
                                  ? "Chief of engineer"
                                  : i === 3
                                    ? "work administrator"
                                    : "Artist, Engineer, musician"}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <motion.button
                          className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-md font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Decline
                        </motion.button>
                        <motion.button
                          className="px-2 text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-md font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Accept
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {/* View All Link */}
                <div className="text-right">
                  <button className="text-blue-900 text-xs hover:underline">View all</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center mt-5">
          <motion.button
            className="lg:w-1/3 text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-2 lg:px-0 py-1 rounded-md font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Workspace
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <EditProjectModal isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit} />

      {/* Modal */}
      <AddProducerModal isAddProducerOpen={isAddProducerOpen} setIsAddProducerOpen={setIsAddProducerOpen} />

      {/* Modal */}
      <AddUserModal isOpen={isAddUserOpen} setIsOpen={setIsAddUserOpen} />
    </div>
  )
}

export default MyProjectDetails

