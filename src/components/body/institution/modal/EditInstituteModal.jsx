"use client";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

const EditInstituteModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 bg-opacity-30 flex justify-center items-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-md rounded-sm shadow-md p-5 mt-10 relative overflow-auto hide-scrollbar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer">
              <img className="w-6 h-6" src="/x.svg" alt="" />
            </button>

            <h2 className="text-base font-semibold mb-3">Edit Institution</h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {/* Institution Name */}
              <div>
                <label className="block text-xs font-medium mb-1">Edit Institution Name</label>
                <input
                  type="text"
                  placeholder="Type here.."
                  {...register("institutionName", { required: "Institution name is required" })}
                  className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
                />
                {errors.institutionName && (
                  <p className="text-red-500 text-xs mt-1">{errors.institutionName.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-medium mb-1">Edit Description</label>
                <textarea
                  placeholder="Type here.."
                  {...register("description", { required: "Description is required" })}
                  className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
                  rows="3"
                />
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
              </div>

              {/* Thumbnail Image */}
              <div className="relative">
                <label className="block text-xs font-medium mb-1">Edit Thumbnail Image</label>
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
                className="w-full cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white py-1.5 rounded-sm font-medium text-sm outline-none focus:ring-0"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditInstituteModal;
