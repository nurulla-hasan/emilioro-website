"use client"

import AllProject from "@/components/body/object/AllProject"
import MyProject from "@/components/body/object/MyProject"
import JoinedProject from "@/components/body/object/JoinedProject"
import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import CreateProjectModal from "@/components/body/object/modal/CreateProjectModal"
import AllProjectDetailsModal from "@/components/body/object/modal/AllProjectDetailsModal"
import Container from "@/components/layout/Container"

const ObjectPage = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedCardAllProject, setSelectedCardAllProject] = useState(null)
  const [isOpen, setIsOpen] = useState(false)


  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "my", label: "My Projects" },
    { id: "joined", label: "Joined Projects" },
  ]

  return (
    <Container>
      <div className="">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row">
          <h1 className="text-xl text-primary font-bold w-full">
            Cocreate your products
          </h1>

          <div className="flex gap-2 justify-between lg:justify-end w-full items-center">
            <div className="relative w-fit text-gray-700 border border-primary rounded-sm flex items-center px-2">
              <CiSearch className="cursor-pointer" color="#1C4587" size={15} />
              <input
                type="text"
                placeholder="Search Project"
                className="px-2 py-1.5 lg:w-full w-28 rounded-sm lg:py-2 border-none outline-none focus:ring-0 text-[12px] text-gray-700"
              />
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer bg-button text-white px-4 py-[9] rounded-sm font-medium text-[12px] outline-none focus:ring-0"
            >
              + Create New Project
            </button>
          </div>

        </div>

        <div className="flex justify-between">
          <div className="mx-auto md:ml-0">
            {/* Tabs */}
            <div className="flex border-primary border justify-between rounded-sm mt-5 lg:mt-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 text-[10px] font-medium transition-all border outline-none focus:ring-0 cursor-pointer ${activeTab === tab.id
                      ? "bg-primary border border-primary text-white"
                      : "border-transparent text-gray-700"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          <>
            {activeTab === "all" && <AllProject setSelectedCardAllProject={setSelectedCardAllProject} />}
            {activeTab === "my" && <MyProject />}
            {activeTab === "joined" && <JoinedProject />}
          </>
        </div>
      </div>

      {/* Modal---------------- */}
      <AllProjectDetailsModal
        setSelectedCardAllProject={setSelectedCardAllProject}
        selectedCardAllProject={selectedCardAllProject}
      />

      <CreateProjectModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </Container>
  )
}

export default ObjectPage