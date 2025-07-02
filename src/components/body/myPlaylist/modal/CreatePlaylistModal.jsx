"use client"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

const CreatePlaylistModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      playlistName: "",
      description: "",
      tag: "",
      coverImage: "",
      audioSearch: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Playlist Data:", data)
    setIsOpen(false)
    reset()
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

        <h2 className="text-base font-semibold mb-3">Add new playlist</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Playlist Name */}
          <div>
            <label className="block text-xs font-medium mb-1">Playlist name</label>
            <input
              {...register("playlistName", { required: true })}
              type="text"
              placeholder="Type here...."
              className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium mb-1">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Type here...."
              className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
            />
          </div>

          {/* Tag */}
          <div>
            <label className="block text-xs font-medium mb-1">Tag</label>
            <input
              {...register("tag")}
              type="text"
              placeholder="Type here...."
              className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
            />
          </div>

          {/* Cover Image */}
          <div className="relative">
            <label className="block text-xs font-medium mb-1">Cover image</label>
            <img className="w-3 h-3 absolute top-7 left-2 text-gray-500" src="/image.svg" alt="" />
            <input
              type="file"
              {...register("coverImage")}
              className="outline-none border-gray-300 cursor-pointer text-gray-500 pl-7 text-xs w-full px-2 py-1.5 border rounded-sm"
            />
          </div>

          {/* Audio Search */}
          <div>
            <label className="block text-xs font-medium mb-1">Add audio</label>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
              <input
                {...register("audioSearch")}
                type="text"
                placeholder="Search To select audio"
                className="outline-none border-gray-300 w-full pl-7 pr-2 py-1.5 border rounded-sm text-xs"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-1.5 cursor-pointer border border-primary text-primary rounded-sm font-medium text-xs w-full outline-none focus:ring-0"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full cursor-pointer bg-button text-white py-1.5 rounded-sm font-medium text-xs outline-none focus:ring-0"
            >
              Publish
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePlaylistModal

