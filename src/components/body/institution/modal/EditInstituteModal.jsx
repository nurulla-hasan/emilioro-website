"use client";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon } from "lucide-react";

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
            className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">Edit Institution</h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Institution Name */}
              <div>
                <label className="block text-sm font-medium">Edit Institution Name</label>
                <input
                  type="text"
                  placeholder="Type here.."
                  {...register("institutionName", { required: "Institution name is required" })}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
                {errors.institutionName && <p className="text-red-500 text-xs">{errors.institutionName.message}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium">Edit Description</label>
                <textarea
                  placeholder="Type here.."
                  {...register("description", { required: "Description is required" })}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  rows="3"
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
              </div>

              {/* Thumbnail Image */}
              <div>
                <label className="block text-sm font-medium">Edit Thumbnail Image</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
                  <ImageIcon className="text-gray-500 w-5 h-5 mr-2" />
                  <input
                    type="file"
                    {...register("thumbnail")}
                    className="w-full cursor-pointer text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-2 rounded-md font-medium"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditInstituteModal;
