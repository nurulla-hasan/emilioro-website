import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AddBondModal = ({ isOpen, onClose, onSubmit, register, tags, removeTag, handleAddTag }) => {
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setCanSubmit(tags.length > 0); // Enable submit only if there are tags
  }, [tags]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white p-6 rounded-sm shadow-lg w-5/6 md:w-1/4 my-auto mx-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xs font-semibold text-gray-700">Create new Bond</h2>
          <button onClick={onClose} className="cursor-pointer">
            <img className="w-5" src="/x.svg" alt="Close" />
          </button>
        </div>

        <form onSubmit={onSubmit}>
          {/* Offer input */}
          <h2 className="text-xs font-semibold text-gray-700 mb-2">What do you offer?</h2>
          <input
            {...register("offer")}
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded-sm mb-3 text-[10px] outline-none"
          />

          {/* Want input */}
          <h2 className="text-xs font-semibold text-gray-700 mb-2">What do you want?</h2>
          <input
            {...register("want")}
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded-sm mb-3 text-[10px] outline-none"
          />

          {/* Tag input */}
          <div className="mb-2">
            <h2 className="text-xs font-semibold text-gray-700 ">Add a tag</h2>
            <span className="text-[8px]">(for better matching)</span>
          </div>
          <input
            name="tag"
            placeholder="Enter a tag"
            className="w-full p-2 border border-gray-300 rounded-sm mb-3 text-[10px] outline-none"
          />

          {/* Display tags */}
          <div className="flex flex-col gap-2 mb-3">
            {tags.map((tag, index) => (
              <div key={index} className="bg-blue-50 px-2 py-1 rounded-sm text-[10px] flex justify-between items-center">
                {tag}
                <button type="button" onClick={() => removeTag(tag)} className="text-red-500 h-3 w-3 cursor-pointer">X</button>
              </div>
            ))}
          </div>

          {/* Add more tag */}
          <button type="button" onClick={handleAddTag} className="w-full border border-gray-300 text-gray-500 px-3 py-1 rounded-sm text-[10px] mb-3">
            + Add more
          </button>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full p-2 rounded-sm text-[10px] ${canSubmit
              ? "bg-button text-white"
              : "bg-gray-300 text-gray-500"
              }`}
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddBondModal;