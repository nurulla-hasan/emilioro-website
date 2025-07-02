"use client";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const MyBondSection = ({ bonds, handleEditClick, handleDeleteClick }) => {
    return (
        <div className="flex items-center gap-8 mt-20">
            {/* Section 1 */}
            <div className="w-full shadow-2xl rounded-sm p-5">
                <div className="flex justify-between">
                    <h1 className="text-xl text-primary font-bold mb-4">Give</h1>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 font-semibold mb-4 cursor-pointer"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer bg-button text-white px-2 py-[6] rounded-md font-medium text-xs"
                        >
                            +Add New Bond
                        </button>
                    </motion.div>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    {bonds.map((bond) => (
                        <div key={bond.id} className="flex items-center justify-between px-5 py-3 bg-[#EAF0FB] rounded-sm">
                            <h3 className="text-sm">{bond.title}</h3>
                            <div className="flex gap-2">
                                <AiOutlineDelete color="red" onClick={() => handleDeleteClick(bond)} />
                                <BiEditAlt onClick={() => handleEditClick(bond)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2 */}
            <div className="w-full shadow-2xl rounded-sm p-5">
                <div className="flex justify-between">
                    <h1 className="text-xl text-primary font-bold mb-4">Get</h1>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 font-semibold mb-4 cursor-pointer"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer bg-button text-white px-2 py-[6] rounded-md font-medium text-xs"
                        >
                            +Add New Bond
                        </button>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                    {bonds.map((bond) => (
                        <div key={bond.id} className="flex items-center justify-between px-5 py-3 bg-[#EAF0FB] rounded-sm">
                            <h3 className="text-sm">{bond.title}</h3>
                            <div className="flex gap-2">
                                <AiOutlineDelete color="red" onClick={() => handleDeleteClick(bond)} />
                                <BiEditAlt onClick={() => handleEditClick(bond)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBondSection;
