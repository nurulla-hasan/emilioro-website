"use client"

import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5"

const AddBondModal = ({ isOpen, onClose, onSubmit, register, tags, setTags, removeTag }) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white p-6 rounded-sm shadow-lg w-5/6 md:w-1/4 my-auto mx-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xs font-semibold text-gray-700">Create new Bond</h2>
          <button onClick={onClose} className="text-xl rounded-full bg-[#1C4587] text-white cursor-pointer p-1">
            <IoClose />
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <h2 className="text-xs font-semibold text-gray-700 mb-2">What do you offer</h2>
          <input
            {...register("offer", { required: true })}
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded-sm mb-3 text-[10px] outline-none focus:ring-0"
          />

          {/* Display Tags */}
          <div className="flex flex-col gap-2 mb-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="border border-gray-300 w-full px-2 py-1 rounded-sm text-[10px] flex items-center justify-between"
              >
                {tag}
                <IoClose className="ml-1 text-red-500 cursor-pointer" onClick={() => removeTag(tag)} />
              </div>
            ))}
          </div>

          {/* Add More Button */}
          <button
            type="button"
            onClick={() => {
              const input = document.querySelector("input[placeholder='Type here']")
              const tagValue = input.value.trim()
              if (tagValue && !tags.includes(tagValue)) {
                setTags([...tags, tagValue])
                input.value = ""
              }
            }}
            className="border w-full border-gray-300 text-gray-500 px-3 py-1 rounded-sm text-[10px] mb-3 outline-none focus:ring-0"
          >
            + Add more
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#164083] to-[#1f5fc8] text-white p-2 rounded-sm text-[10px] outline-none focus:ring-0"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default AddBondModal

