"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const AddBondModal = ({ isOpen, onClose, onSubmit, register, tags, setTags, removeTag }) => {
  const [canSubmit, setCanSubmit] = useState(false)
  const [bondType, setBondType] = useState("give") // "give" or "get"

  useEffect(() => {
    setCanSubmit(tags.length > 0)
  }, [tags])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    const offerInput = document.querySelector("input[name='offer']")
    const wantInput = document.querySelector("input[name='want']")
    const input = document.querySelector("input[placeholder='Type here']")
    const inputValue = input.value.trim()

    if (inputValue && !tags.includes(inputValue)) {
      const newTags = [...tags, inputValue]
      setTags(newTags)
      input.value = ""
      onSubmit({
        offer: offerInput?.value || "",
        want: wantInput?.value || "",
        tags: newTags,
        type: bondType,
      })
    } else if (canSubmit) {
      onSubmit({
        offer: offerInput?.value || "",
        want: wantInput?.value || "",
        tags,
        type: bondType,
      })
    }
  }

  const handleAddTag = () => {
    const input = document.querySelector("input[placeholder='Type here']")
    const tagValue = input.value.trim()

    if (tagValue && !tags.includes(tagValue)) {
      setTags([...tags, tagValue])
      input.value = ""
    }
  }

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
          <button onClick={onClose} className="cursor-pointer">
            <img className="w-5" src="/x.svg" alt="" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Bond Type Selector */}
          <div className="flex items-center gap-4 mb-4">
            <label className="text-xs font-semibold text-gray-700">Bond Type:</label>
            <div className="flex gap-2">
              <label className="flex items-center text-[10px] gap-1">
                <input
                  type="radio"
                  name="bondType"
                  value="give"
                  checked={bondType === "give"}
                  onChange={() => setBondType("give")}
                  className="accent-blue-600"
                />
                Give
              </label>
              <label className="flex items-center text-[10px] gap-1">
                <input
                  type="radio"
                  name="bondType"
                  value="get"
                  checked={bondType === "get"}
                  onChange={() => setBondType("get")}
                  className="accent-blue-600"
                />
                Get
              </label>
            </div>
          </div>

          <h2 className="text-xs font-semibold text-gray-700 mb-2">What do you offer</h2>
          <input
            {...register("offer", { required: false })}
            name="offer"
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded-sm mb-3 text-[10px] outline-none focus:ring-0"
          />

          <h2 className="text-xs font-semibold text-gray-700 mb-2">What do you want</h2>
          <input
            {...register("want", { required: false })}
            name="want"
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
                <button
                  type="button"
                  className="ml-1 text-red-500 border w-4 h-0 flex items-center justify-center cursor-pointer"
                  onClick={() => removeTag(tag)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Add More Button */}
          <button
            type="button"
            onClick={handleAddTag}
            className="border cursor-pointer w-full border-gray-300 text-gray-500 px-3 py-1 rounded-sm text-[10px] mb-3 outline-none focus:ring-0"
          >
            + Add more
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full cursor-pointer ${canSubmit
                ? "bg-gradient-to-b from-[#164083] to-[#1f5fc8] text-white"
                : "bg-gray-300 text-gray-500"
              } p-2 rounded-sm text-[10px] outline-none focus:ring-0`}
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default AddBondModal
