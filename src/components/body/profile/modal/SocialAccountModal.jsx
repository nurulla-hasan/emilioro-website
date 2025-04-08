"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const SocialAccountModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (!isOpen) return null;

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-4 rounded-sm shadow-lg w-96 relative"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute cursor-pointer top-3 right-3 text-white bg-[#1C4587] p-1 rounded-full">
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Add new Social Account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Instagram Link */}
          <div>
            <label className="block font-semibold text-xs mb-2">Add Instagram link</label>
            <input
              {...register("instagram", { required: "Instagram link is required" })}
              className="w-full border border-gray-300 text-xs outline-none p-1.5 rounded-sm"
              placeholder="Type here.."
            />
            {errors.instagram && <p className="text-red-500 text-sm">{errors.instagram.message}</p>}
          </div>

          {/* Facebook Link */}
          <div>
            <label className="block font-semibold text-xs mb-2">Add Facebook link</label>
            <input
              {...register("facebook", { required: "Facebook link is required" })}
              className="w-full border border-gray-300 text-xs outline-none p-1.5 rounded-sm"
              placeholder="Type here.."
            />
            {errors.facebook && <p className="text-red-500 text-sm">{errors.facebook.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="cursor-pointer px-4 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs py-1 rounded-sm font-medium"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SocialAccountModal;
