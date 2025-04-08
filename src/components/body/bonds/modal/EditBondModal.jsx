"use client"

import { motion } from "framer-motion"

const EditBondModal = ({ isOpen, onClose, currentBond, handleEditConfirm }) => {
  if (!isOpen || !currentBond) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white xl:w-1/4 w-10/12 rounded-sm shadow-lg overflow-hidden my-auto mx-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-[#1C4587] rounded-full text-white hover:text-gray-700 cursor-pointer"
            aria-label="Close"
          >
            <img className="w-5" src="/x.svg" alt="Close" />
          </button>

          {/* Title */}
          <h2 className="text-xs font-semibold mb-5 text-gray-700">Edit Bond</h2>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleEditConfirm(e.target.title.value)
            }}
          >
            <h1 className="text-xs mb-2 font-semibold text-gray-700">What do you need?</h1>
            <input
              defaultValue={currentBond.title}
              name="title"
              className="w-full p-2 border border-gray-300 rounded-sm mb-5 text-[10px] outline-none focus:ring-0"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-[#1C4587] text-white font-medium rounded-sm text-[10px] outline-none focus:ring-0 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default EditBondModal

