"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X } from 'lucide-react';
import { useRouter } from "next/navigation";

const ResetPasswordModal = ({ isOpen, onClose, setIsSuccessModalOpen,}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Reset Password Data:", data);
    setTimeout(() => {
      setLoading(false);
      onClose();
      setIsSuccessModalOpen(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-4xl rounded-sm shadow-xl flex flex-col md:flex-row relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 bg-[#1C4587] text-white rounded-full p-1 hover:bg-[#15366b] transition-colors"
            >
              <X size={16} />
            </button>

            {/* Left Section - Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-[#1C4587] text-lg font-semibold mb-6">
                Set New Password
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-xs font-medium mb-1">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    {...register("password", { required: "Password is required" })}
                    className="w-full px-3 py-1.5 rounded-sm border border-gray-300 focus:outline-none focus:border-[#1C4587] text-xs"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] hover:from-[#15366b] hover:to-[#2861c4] text-white py-1.5 rounded-sm text-xs font-medium transition-colors disabled:opacity-70"
                >
                  {loading ? "Updating..." : "Confirm"}
                </button>
              </form>
            </div>

            {/* Right Section - Message */}
            <div className="w-full md:w-1/2 bg-[#C0D3F2] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-[#1C4587] text-lg font-semibold mb-2">
                Secure your account!
              </h2>
              <p className="text-[#1C4587] text-xs">
                Choose a strong password to keep your account safe.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResetPasswordModal;
