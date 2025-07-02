"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"

export default function EditTopicModal({ isOpen, onClose, category = null, onSubmit: onSubmitProp }) {
  const { register, handleSubmit, setValue, reset } = useForm()

  // Set initial value when modal opens or category changes
  useEffect(() => {
    if (isOpen && category) {
      setValue("input", category.name)
    }
  }, [isOpen, category, setValue])

  const onSubmit = (data) => {
    if (category && data.input.trim()) {
      const updatedCategory = {
        ...category,
        name: data.input.trim(),
      }

      console.log("Category edited:", updatedCategory)

      if (onSubmitProp) {
        onSubmitProp(updatedCategory)
      }
    }

    reset()
    onClose()
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
              <h2 className="text-xs font-semibold text-gray-700">Edit topic</h2>
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-primary hover:bg-[#15366b] text-white p-2 rounded-sm text-[10px] outline-none focus:ring-0"
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

