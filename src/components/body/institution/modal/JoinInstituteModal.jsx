"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const JoinInstitutionModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      designation: "",
      group: "Group A",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setIsOpen(false);
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 mt-10 rounded-sm w-[90%] max-w-sm shadow-md relative overflow-auto hide-scrollbar">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
        >
          <img className="w-6 h-6" src="/x.svg" alt="" />
        </button>

        <h2 className="text-base font-semibold mb-3">Join Institution</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Designation Input */}
          <div>
            <label className="block text-xs font-medium mb-1">Enter designation</label>
            <input
              {...register("designation", { required: true })}
              type="text"
              placeholder="Type here.."
              className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
            />
          </div>

          {/* Group Selection */}
          <div>
            <label className="block text-xs font-medium mb-1">Select Group</label>
            <select
              {...register("group")}
              className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
            >
              <option value="Group A">Group A</option>
              <option value="Group B">Group B</option>
              <option value="Mediators">Mediators</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-2 *:cursor-pointer">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-1.5 border border-primary text-primary rounded-sm font-medium text-xs outline-none focus:ring-0"
            >
              Cancel
            </button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-4 py-1.5 bg-button text-white rounded-sm font-medium text-xs outline-none focus:ring-0"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinInstitutionModal;
