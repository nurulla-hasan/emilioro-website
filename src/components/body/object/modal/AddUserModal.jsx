"use client"
import { Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const AddUserModal = ({ isOpen, setIsOpen }) => {
  const [inputValue, setInputValue] = useState("") // Current input value
  const [tags, setTags] = useState([]) // Added users list

  // Animation Variants
  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  }

  // Add tag when pressing Enter or clicking "Add More"
  const addTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]) // Add new tag
      setInputValue("") // Clear input field
    }
  }

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

  // Remove tag
  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag))
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Added Users:", tags)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white p-4 rounded-sm shadow-lg w-4/5 lg:max-w-md"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <Dialog.Title className="text-lg font-semibold text-gray-700">Create New Project</Dialog.Title>
            <img
              onClick={() => setIsOpen(false)}
              className="w-5 cursor-pointer text-gray-500 hover:text-gray-700"
              aria-label="Close"
              src="/x.svg"
              alt="Close"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Add Consumer</label>

              {/* Input Field */}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="border-gray-300 outline-none w-full px-2 py-1.5 border rounded-sm text-xs"
                placeholder="Search to select user & press Enter"
              />
            </div>

            {/* Tags Display */}
            {tags.length > 0 && (
              <div className="flex flex-col gap-2">
                {tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-300 px-2 py-1.5 rounded-sm flex justify-between items-center"
                  >
                    <span className="text-xs">{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="w-5 h-5 flex items-center justify-center text-red-500 flex-shrink-0"
                      aria-label="Remove user"
                    >
                      <div className="w-3 h-0.5 bg-red-500"></div>
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Add More Button */}
            <motion.button
              type="button"
              onClick={addTag}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 text-xs font-medium border border-gray-300 py-1.5 rounded-sm w-full hover:bg-gray-50"
            >
              + Add more
            </motion.button>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-b from-[#1C4587] to-[#3175e2] text-white py-1.5 text-xs rounded-sm font-medium w-1/3"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>

    </Dialog>
  )
}

export default AddUserModal

