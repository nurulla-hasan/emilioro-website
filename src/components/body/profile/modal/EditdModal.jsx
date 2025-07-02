"use client"
import { motion, AnimatePresence } from "framer-motion"

export default function EditModal({ isOpen, onClose, editedUrl, setEditedUrl, onSave }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white xl:w-1/4 w-10/12 rounded-sm shadow-lg overflow-hidden my-auto mx-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative p-6">
              {/* Close Button - You can add an X icon here if needed */}

              {/* Title */}
              <h2 className="text-xs font-semibold mb-5 text-gray-700">Edit Social Link</h2>

              {/* Form */}
              <div>
                <h1 className="text-xs mb-2 font-semibold text-gray-700">Social URL</h1>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-sm mb-5 text-[10px] outline-none focus:ring-0"
                  value={editedUrl}
                  onChange={(e) => setEditedUrl(e.target.value)}
                />

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 *:cursor-pointer">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 rounded-sm text-[10px] font-medium transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      onSave()
                      onClose()
                    }}
                    className="px-4 py-2 bg-primary text-white rounded-sm text-[10px] font-medium outline-none focus:ring-0 transition"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

