"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const RatingModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState("5")
  if (!isOpen) return null

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/40 px-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white relative p-5 rounded-sm shadow-lg w-[400px] text-center"
      >
        {/* Close Button */}
        <div className="absolute top-2 right-2 cursor-pointer">
          <img className="w-5" onClick={onClose} src="/x.svg" alt="" />
        </div>

        {/* Header */}
        <h2 className="text-lg text-[#1C4587] font-semibold my-4">Bond Completed! Rate Your Experience</h2>

        {/* Rating Selection */}
        <p className="text-xs font-medium mb-1">Select 01 - 10 to rate the bond</p>
        <div className="border border-[#D6D6D6] rounded-sm mb-4 p-1.5">
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full text-[#595D62] text-xs outline-none focus:ring-0"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          className="px-6 cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1.5 rounded-sm font-medium text-xs"
          onClick={onClose}
        >
          Submit
        </button>
      </motion.div>
    </div>
  )
}

export default RatingModal

