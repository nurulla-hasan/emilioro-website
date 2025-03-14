"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const SuccessModal = ({ isOpen, onClose, setIsLoginModalOpen }) => {
  const router = useRouter();

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
            className="bg-white w-full max-w-3xl rounded-lg shadow-xl flex flex-col md:flex-row relative overflow-hidden"
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

            {/* Left Section - Message */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-green-600 text-xl font-bold mb-4">Success!</h2>
              <p className="text-gray-700 text-sm">
                Your password has been updated successfully.
              </p>
            </div>

            {/* Right Section - Login Button */}
            <div className="w-full md:w-1/2 bg-[#E3F2FD] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <button
                onClick={() => {
                  onClose();
                  setIsLoginModalOpen(true)
                }}
                className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] hover:from-[#15366b] hover:to-[#2861c4] text-white py-3 rounded-md text-sm font-medium transition-colors"
              >
                Continue to Login
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
