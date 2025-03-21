import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const RemoveParticipantModal = ({ isOpen, setRemoveParticipantModal, onRemove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-30">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl w-[350px] sm:w-[400px] p-6 text-center relative"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 bg-[#1C4587] text-white rounded-full p-2"
          onClick={() => setRemoveParticipantModal(false)}
        >
          <img className="w-4 h-4" src="/x.svg" alt="" />
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold text-[#1C4587]">Are you sure !!</h2>
        <p className="text-[#1C4587] mt-2">Do you want to remove this participant ?</p>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="bg-[#1C4587] text-white font-semibold text-sm px-4 py-2 mt-4 rounded-lg"
        >
          Remove
        </button>
      </motion.div>
    </div>
  );
};

export default RemoveParticipantModal;
