import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const RemoveParticipantModal = ({ isOpen, setRemoveParticipantModal, onRemove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-4">
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-sm w-[350px] sm:w-[400px] p-4 text-center relative shadow-lg"
    >
        {/* Close Button */}
        <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setRemoveParticipantModal(false)}
        >
            <img className="w-5" src="/x.svg" alt="Close" />
        </button>

        {/* Modal Content */}
        <h2 className="text-lg font-semibold text-gray-800">Are you sure?</h2>
        <p className="text-gray-600 mt-1 text-xs">Do you want to remove this participant?</p>

        {/* Remove Button */}
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onRemove}
            className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs font-medium px-4 py-2 mt-3 rounded-sm"
        >
            Remove
        </motion.button>
    </motion.div>
</div>

  );
};

export default RemoveParticipantModal;
