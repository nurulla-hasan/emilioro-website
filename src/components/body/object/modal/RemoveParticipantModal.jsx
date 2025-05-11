import { motion } from "framer-motion";

const RemoveParticipantModal = ({ isOpen, setRemoveParticipantModal, onRemove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-4">
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-sm p-4 text-center relative shadow-lg"
    >
        {/* Close Button */}
        <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
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
            className="bg-button cursor-pointer text-white text-xs font-normal px-4 py-1 mt-3 rounded-sm"
        >
            Remove
        </motion.button>
    </motion.div>
</div>

  );
};

export default RemoveParticipantModal;
