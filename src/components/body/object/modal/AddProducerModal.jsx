import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const AddProducerModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Producer Added:", data);
        setIsOpen(false);
        reset();
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-6">
                    <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <Dialog.Title className="text-lg font-semibold">Create new Project</Dialog.Title>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <div className="flex gap-5  items-center justify-between">
                                {/* Producer Selection */}
                                <div className="flex-1/2">
                                    <label className="block text-sm font-medium mb-1">Add Producer</label>
                                    <input
                                        type="text"
                                        {...register("producer", { required: true })}
                                        className="border-gray-300 w-full px-3 py-2 border rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search To select producer"
                                    />
                                </div>

                                {/* Designation Selection */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Choose Designation</label>
                                    <select
                                        {...register("designation")}
                                        className="border-gray-300 text-xs w-full px-3 py-[7px] border rounded-lg"
                                    >
                                        <option value="CEO">CEO</option>
                                        <option value="General Manager">General Manager</option>
                                        <option value="Chief Engineer">Chief Engineer</option>
                                        <option value="Work Administrator">Work Administrator</option>
                                        <option value="Artist">Artist</option>
                                    </select>
                                </div>
                            </div>

                            {/* Add More Option */}
                            <div className="border text-center px-3 py-1 border-gray-300 rounded-lg">
                                <button
                                    type="button"
                                    className=" text-gray-600 text-xs"
                                    onClick={() => console.log("Add more functionality here")}
                                >
                                    +Add more
                                </button>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg font-medium w-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit
                            </motion.button>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};

export default AddProducerModal;
