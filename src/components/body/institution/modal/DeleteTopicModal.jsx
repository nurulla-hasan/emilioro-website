"use client"

import { motion } from "framer-motion"

const DeleteTopicModal = ({ isOpen, onClose, handleDeleteConfirm }) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white w-full max-w-sm rounded-sm shadow-lg overflow-hidden my-auto mx-4 text-center p-6 relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer"
          aria-label="Close"
        >
          <img className="w-6" src="/x.svg" alt="Close" />
        </button>

        {/* Modal Content */}
        <h2 className="text-xs text-gray-700 font-semibold">Are you sure?</h2>
        <p className="text-[10px] text-gray-700 font-normal mt-1">Do you want to delete this content?</p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={handleDeleteConfirm}
            className="bg-primary cursor-pointer text-white px-5 py-2 rounded-sm text-[10px] outline-none focus:ring-0"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DeleteTopicModal

