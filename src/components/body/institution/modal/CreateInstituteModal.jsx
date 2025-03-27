"use client"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

const CreateInstituteModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      instituteName: "",
      description: "",
      thumbnail: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Submitted Data:", data)
    setIsOpen(false)
    reset() // Reset form after submission
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 mt-10 rounded-sm w-[90%] max-w-md lg:max-w-lg shadow-md relative overflow-auto hide-scrollbar">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
        >
          <img className="w-6 h-6" src="/x.svg" alt="" />
        </button>

        <h2 className="text-base font-semibold mb-3">Add New Institution</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Institution Name */}
          <div>
            <label className="block text-xs font-medium mb-1">Add Institution Name</label>
            <input
              {...register("instituteName", { required: true })}
              type="text"
              placeholder="Type here.."
              className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium mb-1">Add Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Type here.."
              className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
            />
          </div>

          {/* Thumbnail Image */}
          <div className="relative">
            <label className="block text-xs font-medium mb-1">Add Thumbnail Image</label>
            <img className="w-3 h-3 absolute top-7 left-2 text-gray-500" src="/image.svg" alt="" />
            <input
              type="file"
              {...register("thumbnail")}
              className="outline-none border-gray-300 cursor-pointer text-gray-500 pl-7 text-xs w-full px-2 py-1.5 border rounded-sm"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="w-full cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white py-1.5 rounded-sm font-medium text-sm"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default CreateInstituteModal

