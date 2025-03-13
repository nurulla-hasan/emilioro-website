"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Users } from "lucide-react"

const CompletedBond = () => {
  const completedBonds = [
    {
      id: 1,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 2,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 3,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 4,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 5,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 6,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 7,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 8,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
    {
      id: 9,
      offeredService: "Graphic Design Work",
      requestedService: "Web Development Help",
      status: "Completed",
      participants: 2,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <div>
        <h1 className="text-xl text-[#1C4587] font-bold mb-4">Completed Bond</h1>
        <div className="w-full my-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {completedBonds.map((bond) => (
            <motion.div
              key={bond.id}
              variants={itemVariants}
              layout
              className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[13px]">
                      <span className="font-medium">Offered Service : </span>
                      <span className="text-gray-600">{bond.offeredService}</span>
                    </p>
                    <p className="text-[13px]">
                      <span className="font-medium">Requested Service : </span>
                      <span className="text-gray-600">{bond.requestedService}</span>
                    </p>
                  </div>
                  <span className="bg-[#E7F6EC] text-[#1F9254] text-xs px-3 py-1 rounded-sm">{bond.status}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{bond.participants} participant</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
    </div>
    
  )
}

export default CompletedBond

