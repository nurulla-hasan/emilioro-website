"use client"
import AllProject from "@/components/body/object/AllProject"
import MyProject from "@/components/body/object/MyProject"
import JoinedProject from "@/components/body/object/JoinedProject"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import CreateProjectModal from "@/components/body/object/modal/CreateProjectModal"
import AllProjectDetailsModal from "@/components/body/object/modal/AllProjectDetailsModal"

const ObjectPage = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedCardAllProject, setSelectedCardAllProject] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div>
      <motion.div
        className="xl:w-8/11 lg:w-10/12 px-5 my-10 mx-auto"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <motion.div
          className="flex flex-col lg:flex-row gap-5 justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 className="text-xl text-[#1C4587] font-bold" whileHover={{ scale: 1.05 }}>
            Cocreate your products
          </motion.h1>
          <div className="flex gap-5 items-center justify-center">
            <motion.div
              className="relative lg:w-[250] w-[150] text-gray-700 border border-[#1C4587] rounded-sm flex items-center px-2"
            >
              <CiSearch className="cursor-pointer" color="#1C4587" size={15} />
              <input
                type="text"
                placeholder="Search Project"
                className="px-2 py-1.5 lg:w-full w-36 rounded-sm lg:py-2 border-none outline-none focus:ring-0 text-[12px] text-gray-700"
              />
            </motion.div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-4 py-[9] rounded-sm font-medium text-[12px] outline-none focus:ring-0"
            >
              +Create New Project
            </motion.button>
          </div>
        </motion.div>

        <div className="flex justify-between">
          <div className="mx-auto md:ml-0">
            {/* Tabs */}
            <motion.div
              className="flex border-[#1C4587] border justify-between rounded-sm mt-5 lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { id: "all", label: "All Project" },
                { id: "my", label: "My Project" },
                { id: "joined", label: "Joined Project" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`px-4 py-2 text-[10px] font-medium transition-all border rounded-sm outline-none focus:ring-0 cursor-pointer ${activeTab === tab.id
                    ? "bg-[#1C4587] border border-[#1C4587] text-white"
                    : "border-transparent text-gray-700"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileTap={{ scale: 0.9 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tabContentVariants}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            {activeTab === "all" && <AllProjects setSelectedCardAllProject={setSelectedCardAllProject} />}
            {activeTab === "my" && <MyProjects/>}
            {activeTab === "joined" && <JoinedProjects/>}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modal---------------- */}
      <AllProjectDetailsModal
        setSelectedCardAllProject={setSelectedCardAllProject}
        selectedCardAllProject={selectedCardAllProject}>
      </AllProjectDetailsModal>

      <CreateProjectModal
        setIsOpen={setIsOpen}
        isOpen={isOpen} />


    </div>
  )
}

const AllProjects = ({ setSelectedCardAllProject }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <AllProject setSelectedCardAllProject={setSelectedCardAllProject} />
  </motion.div>
)

const MyProjects = () => (
  <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <MyProject/>
  </motion.div>
)

const JoinedProjects = () => (
  <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <JoinedProject/>
  </motion.div>
)

export default ObjectPage

