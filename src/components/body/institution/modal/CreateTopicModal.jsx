"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"

export default function CreateTopicModal({
  isOpen,
  onClose,
}) {
  const { register, handleSubmit, setValue, reset } = useForm()
  const [tags, setTags] = useState([])

  const onSubmit = (data) => {
    // Include tags in the submission data
    const formData = {
      ...data,
      tags,
    }

    console.log("Form submitted:", formData)

    // Reset form after submission
    reset()
    setTags([])
    onClose()
  }

  // Add tag functionality (only one tag at a time)
  const addTag = () => {
    const inputValue = watch("input")
    if (inputValue && inputValue.trim() && tags.length === 0) {
      setTags([inputValue.trim()])
      setValue("input", "")
    }
  }

  // Remove tag functionality
  const removeTag = () => {
    setTags([])
  }

  return (
    <AnimatePresence>
      {isOpen && (
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
              <h2 className="text-xs font-semibold text-gray-700">Create new topic</h2>
              <button onClick={onClose} className="cursor-pointer">
                <img className="w-5" src="/x.svg" alt="" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-xs font-semibold text-gray-700 mb-2">Add topic name</h2>
              <input
                {...register("input", { required: true })}
                placeholder="Type here..."
                className="w-full p-2 border border-gray-300 rounded-sm mb-3 text-[10px] outline-none focus:ring-0"
              />

              {/* Display Tag */}
              {tags.length > 0 && (
                <div className="flex flex-col gap-2 mb-3">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 w-full px-2 py-1 rounded-sm text-[10px] flex items-center justify-between"
                    >
                      {tag}
                      <button type="button" className="ml-1 py-2 px-1 font-bold text-red-500 cursor-pointer" onClick={removeTag}>
                        <div className="border w-3 cursor-pointer"></div>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                onClick={onClose}
                className="w-full bg-gradient-to-b from-[#164083] to-[#1f5fc8] text-white p-2 rounded-sm text-[10px] outline-none focus:ring-0"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
