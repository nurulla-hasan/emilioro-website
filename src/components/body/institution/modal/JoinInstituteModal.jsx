"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const JoinInstitutionModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            designation: "",
            group: "Group A (Main party)",
        },
    });

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        setIsOpen(false);
        reset();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex justify-center items-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg"
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-[#1C4587]">Join Institution</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                        <IoMdClose size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Designation Input */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Enter designation</label>
                        <input
                            {...register("designation", { required: true })}
                            type="text"
                            placeholder="Type here.."
                            className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#1C4587]"
                        />
                    </div>

                    {/* Group Selection */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Select Group</label>
                        <select
                            {...register("group")}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#1C4587]"
                        >
                            <option value="Group A (Main party)">Group A (Main party)</option>
                            <option value="Group B">Group B</option>
                            <option value="Group C">Group C</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center pt-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="w-1/3 py-2 border border-[#1C4587] text-[#1C4587] rounded-md font-medium hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-1/3 py-2 bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white rounded-md font-medium"
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default JoinInstitutionModal;
