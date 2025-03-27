"use client"
import { RiEdit2Line } from "react-icons/ri"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect, Suspense } from "react"
import { useForm } from "react-hook-form"
import AddProducerModal from "@/components/body/object/modal/AddProducerModal"
import EditProjectModal from "@/components/body/object/modal/EditProjectModal"
import AddUserModal from "@/components/body/object/modal/AddUserModal"
import { useRouter, useSearchParams } from "next/navigation"
import RemoveParticipantModal from "@/components/body/object/modal/RemoveParticipantModal"

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
  const [removeParticipantModal, setRemoveParticipantModal] = useState(false);

  const router = useRouter()

  const handleRemove = () => {
    console.log("Participant Removed!");
    setRemoveParticipantModal(false);
  };

  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const { register, handleSubmit, reset } = useForm()

  const data = {
    cards: [
      {
        id: "1",
        title: "Eco-Friendly Packaging",
        status: ["Ongoing", "Public"],
        description: "Develop sustainable packaging solutions using biodegradable materials dsjh.",
        author: "MR. Sarwar",
        authorRole: ["Owner"],
        image: "/project (1).png",
        ownerImage: "/avatar.png",
        participant: "10",
        created: "22 may 2023"
      },
      {
        id: "2",
        title: "Recyclable Materials",
        status: ["Ongoing", 'Public'],
        description: "Use recyclable materials to create packaging that can be reused.",
        author: "MR. Ahmed",
        authorRole: ["Owner"],
        image: "/project (2).png",
        ownerImage: "/avatar.png",
        participant: "10",
        created: "22 may 2023"
      },
      {
        id: "3",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: "/project (3).png",
        ownerImage: "/avatar.png",
        participant: "10",
        created: "22 may 2023"
      },
      {
        id: "4",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: "/project (4).png",
        ownerImage: "/avatar.png",
        participant: "10",
        created: "22 may 2023"
      },
      {
        id: "5",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve .",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: "/project (5).png",
        ownerImage: "/avatar.png",
        participant: "10",
        created: "22 may 2023"
      },
      {
        id: "6",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve .",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: "/project (6).png",
        ownerImage: "/avatar.png",
        participant: "10",
        created: "22 may 2023"
      },
      {
        id: "7",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve .",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: "/project (1).png",
        ownerImage: "/avatar.png",
        participant: "10",
        created: "22 may 2023"
      }
    ]
  };

  useEffect(() => {
    if (!projectId) {
      setLoading(false);
      return;
    }

    const selectedProject = data.cards.find((item) => item.id === projectId);

    if (selectedProject) {
      setProject(selectedProject);
    } else {
      console.error("Project not found");
    }

    setLoading(false);
  }, [projectId]);

  const onSubmit = (data) => {
    console.log("Edited Project Data:", data)
    setIsOpen(false)
    reset()
  }

  const participants = [
    {
      id: 1,
      name: "Ahamad Musa",
      role: "CEO",
      image: "/avatar.png",
    },
    {
      id: 2,
      name: "Rahim Uddin",
      role: "General Manager",
      image: "/avatar.png",
    },
    {
      id: 3,
      name: "Karim Ali",
      role: "Chief of Engineer",
      image: "/avatar.png",
    }
  ];

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
    <div className="xl:w-8/11 lg:w-10/12 px-5 mx-auto h-[calc(100vh-90px)]">
      <div className="max-w-4xl shadow-[0px_15px_45px_0px_#CFC9DD99] mx-auto p-5 rounded-sm bg-white">
        <div className="relative h-[150px]  w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt="Project Header"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-sm"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mt-2">
            <h1 className="lg:text-lg text-sm font-bold text-[#1C4587]">{project.title}</h1>
            {/* Edit Button */}
            <button
              className="flex gap-1 items-center cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-3 py-2 rounded-sm font-medium"
              onClick={() => setIsOpen(true)}
            >
              <RiEdit2Line />
              <span>Edit Project</span>
            </button>
          </div>
        </div>

        <div className="lg:h-[50vh] h-[53vh] overflow-auto hide-scrollbar">
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
            <img className="w-4" src="/participants.svg" alt="" />
            <span className="text-xs font-semibold text-gray-600">{project.participant} Participent</span>
          </div>

          {/* Participants Grid */}
          <div className="grid grid-cols-1 mt-5 gap-5">
            {/* Producer Column */}
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold mb-2">Producer</h3>
                <motion.button
                  className="px-2 cursor-pointer text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-sm font-medium"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsAddProducerOpen(true)}
                >
                  +Add Producer
                </motion.button>
              </div>

              <div>
                {participants.map((participant, i) => (
                  <motion.div
                    key={participant.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center mt-2 gap-2"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2 items-center">
                        <img src={participant.image} alt={participant.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">{participant.name}</p>
                          <p className="text-xs text-gray-500">{participant.role}</p>
                        </div>
                      </div>
                      <div>
                        <motion.button
                          className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setRemoveParticipantModal(true)}
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
                  className="px-2 cursor-pointer text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-sm font-medium"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsAddUserOpen(true)}
                >
                  +Add User
                </motion.button>
              </div>
              <div>
                {participants.map((participant, i) => (
                  <motion.div
                    key={participant.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center mt-2 gap-2"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2 items-center">
                        <img src={participant.image} alt={participant.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">{participant.name}</p>
                          <p className="text-xs text-gray-500">{participant.role}</p>
                        </div>
                      </div>
                      <div>
                        <motion.button
                          className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setRemoveParticipantModal(true)}
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
                {participants.map((participant, i) => (
                  <motion.div
                    key={participant.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center mt-2 gap-2"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2 items-center">
                        <img src={participant.image} alt={participant.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">{participant.name}</p>
                          <p className="text-xs text-gray-500">{participant.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <motion.button
                          className="px-2 text-xs cursor-pointer bg-white border border-red-500 text-red-500 py-1 rounded-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Decline
                        </motion.button>
                        <motion.button
                          className="px-2 text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-sm font-medium cursor-pointer"
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
            className="lg:w-1/3 cursor-pointer text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-2 lg:px-0 py-2 rounded-sm font-medium"
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/object/myProject/workspace?id=${project.id}`)}
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

      {/* Modal */}
      <RemoveParticipantModal
        isOpen={removeParticipantModal}
        setRemoveParticipantModal={setRemoveParticipantModal}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default MyProjectDetails

