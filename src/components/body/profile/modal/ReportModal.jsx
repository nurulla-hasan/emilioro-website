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
        className="relative bg-white p-8 rounded-lg w-64 shadow-lg"
      >
        {/* Close Button */}
        <button
          className="absolute top-1 right-1 bg-[#1C4587] text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-sm shadow-md transition-colors"
          onClick={onClose}
        >
          <X size={14} />
        </button>

        {/* Report Button */}
        <button className="w-full border-2 [#1C4587] text-[#1C4587] font-medium py-2.5 rounded-md mb-3 hover:bg-blue-50 transition-colors">
          Report
        </button>

        {/* Share Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-[#1C4587] text-white font-medium py-2.5 rounded-md transition-colors">
          <Share2 size={16} strokeWidth={2.5} />
          Share
        </button>
      </motion.div>
    </div>
  )
}

export default ReportModal

