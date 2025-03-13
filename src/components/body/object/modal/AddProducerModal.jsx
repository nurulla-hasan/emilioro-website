import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

const AddProducerModal = ({ isOpen, setIsOpen }) => {
    const [producer, setProducer] = useState("");
    const [designation, setDesignation] = useState("CEO");
    const [producerList, setProducerList] = useState([]);

    // Producer + Designation যোগ করার ফাংশন
    const handleAddProducer = () => {
        if (producer.trim() !== "") {
            setProducerList([...producerList, { name: producer, role: designation }]);
            setProducer(""); 
        }
    };

    // Producer + Designation
    const handleRemoveProducer = (index) => {
        const updatedList = [...producerList];
        updatedList.splice(index, 1);
        setProducerList(updatedList);
        console.log("Modal should still be open:", isOpen);
    };

    // **Enter**
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddProducer();
        }
    };

    // Submit Function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Added Producers:", producerList);
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onClose={() => isOpen && setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
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
                        {/* Producer & Designation */}
                        <div className="flex gap-3 items-center">
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Add Producer</label>
                                <input
                                    type="text"
                                    value={producer}
                                    onChange={(e) => setProducer(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="border-gray-300 w-full px-3 py-2 border rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                                    placeholder="Search to select producer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Designation</label>
                                <select
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
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

                        {/* Added Producers */}
                        <div className="flex flex-wrap gap-2">
                            {producerList.map((p, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="flex gap-2 px-3 py-1 rounded-sm text-xs"
                                >
                                    <div className="bg-gray-200">
                                        {p.name}
                                    </div>
                                    <div className="bg-gray-200">
                                        {p.role}
                                    </div>
                                    <button onClick={() => handleRemoveProducer(index)} className="cursor-pointer text-red-500 font-bold">×</button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Add More Button */}
                        <button
                            type="button"
                            onClick={handleAddProducer}
                            className="border text-gray-600 text-xs px-3 py-2 rounded-lg bg-gray-100 w-full"
                        >
                            + Add More
                        </button>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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

export default AddProducerModal;
