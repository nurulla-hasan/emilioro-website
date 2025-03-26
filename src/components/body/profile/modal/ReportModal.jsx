"use client"

import { motion } from "framer-motion"
import { Share2, X } from "lucide-react"

const ReportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-white p-5 rounded-sm w-40 shadow-lg"
      >
        {/* Close Button */}
        <button
          className="absolute top-1 right-1 bg-[#1C4587] text-white p-1 rounded-full w-5 h-5 flex items-center justify-center text-sm shadow-md transition-colors"
          onClick={onClose}
        >
          <X size={14} />
        </button>

        <div className="flex flex-col justify-center items-center">
          {/* Report Button */}
          <button className="border border-[#1C4587] text-[#1C4587] text-xs font-medium px-5 py-2 rounded-sm mb-3 hover:bg-blue-50 transition-colors">
            Report
          </button>

          {/* Share Button */}
          <button className="flex items-center justify-center gap-2 text-xs bg-[#1C4587] text-white px-3 font-medium py-2 rounded-sm transition-colors">
            <Share2 size={16} strokeWidth={2.5} />
            Share
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ReportModal

