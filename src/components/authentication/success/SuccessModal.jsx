"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

const SuccessModal = ({ isOpen, onClose, setIsLoginModalOpen }) => {
  const router = useRouter()

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
              className="absolute cursor-pointer top-4 right-4 z-50 bg-[#1C4587] text-white rounded-full p-1 hover:bg-[#15366b] transition-colors"
            >
              <X size={16} />
            </button>

            {/* Left Section - Message */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-green-600 text-lg font-semibold mb-2">Success!</h2>
              <p className="text-gray-700 text-xs">Your password has been updated successfully.</p>
            </div>

            {/* Right Section - Login Button */}
            <div className="w-full md:w-1/2 bg-[#C0D3F2] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-[#1C4587] text-lg font-semibold mb-2">Ready to go!</h2>
              <p className="text-[#1C4587] text-xs mb-4">You can now log in with your new password.</p>
              <button
                onClick={() => {
                  onClose()
                  setIsLoginModalOpen(true)
                }}
                className="w-full cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] hover:from-[#15366b] hover:to-[#2861c4] text-white py-1.5 rounded-sm text-xs font-medium transition-colors"
              >
                Continue to Login
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SuccessModal

