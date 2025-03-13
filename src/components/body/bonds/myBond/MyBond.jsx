"use client";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const MyBond = ({ title, bonds, onAddNewBond, onEditBond, onDeleteBond }) => {
    return (
        <div>
            <h1 className="text-xl text-[#1C4587] font-bold mb-4">My Bond</h1>
            <div className="flex flex-col lg:flex-row items-center gap-8 my-20">
                {/* Section: Give */}
                <div className="w-full shadow-[0px_3px_14px_1px_#d9e7ff] rounded-sm p-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl text-[#1C4587] font-bold mb-4">Give</h1>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onAddNewBond}
                            className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-1 rounded-md font-medium text-xs"
                        >
                            +Add New Bond
                        </motion.button>
                    </div>

                    <div className="flex flex-col gap-3 mt-6">
                        {bonds.map((bond) => (
                            <div key={bond.id} className="flex items-center justify-between px-5 py-3 bg-[#EAF0FB] rounded-sm">
                                <h3 className="text-sm">{bond.title}</h3>
                                <div className="flex gap-2">
                                    <AiOutlineDelete color="red" className="cursor-pointer" onClick={() => onDeleteBond(bond)} />
                                    <BiEditAlt className="cursor-pointer" onClick={() => onEditBond(bond)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Get */}
                <div className="w-full shadow-[0px_3px_14px_1px_#d9e7ff] rounded-sm p-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl text-[#1C4587] font-bold mb-4">Get</h1>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onAddNewBond}
                            className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-1 rounded-md font-medium text-xs"
                        >
                            +Add New Bond
                        </motion.button>
                    </div>

                    <div className="flex flex-col gap-3 mt-6">
                        {bonds.map((bond) => (
                            <div key={bond.id} className="flex items-center justify-between px-5 py-3 bg-[#EAF0FB] rounded-sm">
                                <h3 className="text-sm">{bond.title}</h3>
                                <div className="flex gap-2">
                                    <AiOutlineDelete color="red" className="cursor-pointer" onClick={() => onDeleteBond(bond)} />
                                    <BiEditAlt className="cursor-pointer" onClick={() => onEditBond(bond)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyBond;
