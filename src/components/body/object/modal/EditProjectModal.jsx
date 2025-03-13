import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

const EditProjectModal = ({ isOpen, setIsOpen, onSubmit }) => {
    const { register, handleSubmit } = useForm();

    // Animation Variants
    const modalVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
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
                                <Dialog.Title className="text-lg font-semibold">Edit Project</Dialog.Title>
                                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                                    <AiOutlineClose size={20} />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm font-medium">Add Product Name</label>
                                    <input
                                        type="text"
                                        {...register("productName", { required: true })}
                                        className="border-gray-300 w-full px-3 py-2 border rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                                        placeholder="Type here..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Add Description</label>
                                    <textarea
                                        {...register("description", { required: true })}
                                        className="border-gray-300 w-full px-3 py-2 border rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                                        placeholder="Type here..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Add Thumbnail Image</label>
                                    <div className="relative">
                                        <CiImageOn className="absolute top-2 left-2 text-gray-500" />
                                        <input
                                            type="file"
                                            {...register("image")}
                                            className="border-gray-300 cursor-pointer text-gray-500 pl-8 text-xs w-full px-3 py-2 border rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Join Control</label>
                                    <select
                                        {...register("joinControl")}
                                        className="border-gray-300 text-xs w-full px-3 py-2 border rounded-lg"
                                    >
                                        <option value="Private">Private</option>
                                        <option value="Public">Public</option>
                                    </select>
                                </div>

                                {/* Submit Button with Animation */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg font-medium w-1/3"
                                >
                                    Submit
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
};

export default EditProjectModal;
