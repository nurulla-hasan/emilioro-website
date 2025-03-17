"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuImagePlus } from "react-icons/lu";

const CreatePlaylistModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Playlist Data:", data);
    setIsOpen(false);
  };

  if (!isOpen) return null; // Modal hide korbe jodi open na thake

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Add new playlist</h2>
          <IoMdClose
            size={25}
            className="text-white bg-[#1C4587] p-1 rounded-lg cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label className="text-black text-sm font-medium">Playlist name</label>
            <input
              type="text"
              {...register("playlistName")}
              placeholder="Type here...."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-black text-sm font-medium">Description</label>
            <input
              type="text"
              {...register("description")}
              placeholder="Type here...."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-black text-sm font-medium">Tag</label>
            <input
              type="text"
              {...register("tag")}
              placeholder="Type here...."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="text-black text-sm font-medium">Cover image</label>
            <div className="w-full border border-gray-300 rounded-lg flex items-center px-3 py-2 cursor-pointer">
              <LuImagePlus className="text-gray-600" />
              <span className="text-gray-500 ml-2">Image</span>
            </div>
          </div>

          {/* Audio Search */}
          <div>
            <label className="text-black text-sm font-medium">Add audio</label>
            <div className="w-full border border-gray-300 rounded-lg flex items-center px-3 py-2">
              <CiSearch className="text-gray-600" />
              <input
                type="text"
                placeholder="Search To select audio"
                className="flex-1 px-2 py-1 text-gray-900 outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-8 mt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 border w-full border-[#1C4587] text-[#1C4587] rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white rounded-lg font-semibold transition"
            >
              Publish
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatePlaylistModal;
