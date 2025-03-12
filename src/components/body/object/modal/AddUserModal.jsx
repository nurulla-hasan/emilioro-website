"use client";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const AddUserModal = ({ isOpen, setIsOpen }) => {
    const [inputValue, setInputValue] = useState(""); // Current input value
    const [tags, setTags] = useState([]); // Added users list

    // Animation Variants
    const modalVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    // Add tag when pressing Enter or clicking "Add More"
    const addTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]); // Add new tag
            setInputValue(""); // Clear input field
        }
    };

    // Handle Enter key
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag();
        }
    };

    // Remove tag
    const handleRemoveTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Added Users:", tags);
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-white p-6 rounded-lg shadow-lg w-4/5 lg:max-w-md"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <Dialog.Title className="text-lg font-semibold">Create new Project</Dialog.Title>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                            <AiOutlineClose size={20} />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label className="text-sm font-medium">Add Consumer</label>

                        {/* Input Field */}
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="border-gray-300 w-full px-3 py-2 border rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                            placeholder="Search To select User & press Enter"
                        />

                        {/* Tags Display */}
                        <div className="flex flex-col gap-2">
                            {tags.map((tag, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-blue-100 text-blue-600 px-3 py-2 rounded-sm flex justify-between items-center gap-2 text-xs"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTag(tag)}
                                        className="text-red-500"
                                    >
                                        ❌
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Add More Button */}
                        <motion.button
                            type="button"
                            onClick={addTag}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-gray-500 text-sm font-medium bg-gray-100 py-2 rounded-sm w-full"
                        >
                            + Add more
                        </motion.button>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg font-medium w-full"
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </Dialog>
    );
};

export default AddUserModal;
