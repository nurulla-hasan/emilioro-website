import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function DeleteConfirmationModal({ onClose }) {
  const handleDelete = () => {
    console.log("Content Deleted!");
    onClose(); // Modal Close
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-4 rounded-sm shadow-lg w-80 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 bg-primary p-1 rounded-full text-white"
        >
          <X size={15} />
        </button>

        {/* Modal Content */}
        <h2 className="text-lg font-semibold text-center text-primary">Are you sure !!</h2>
        <p className="text-center text-primary text-sm my-2">
          Do you want to delete this content ?
        </p>

        {/* Delete Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleDelete}
          className="w-full cursor-pointer bg-primary text-white py-1 rounded-sm text-sm font-semibold mt-4"
        >
          Delete
        </motion.button>
      </motion.div>
    </div>
  );
}
