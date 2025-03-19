"use client";
import { motion } from "framer-motion";

const MyBond = ({ bonds, onAddNewBond, onEditBond, onDeleteBond }) => {
    return (
        <div>
            <h1 className="text-xl text-[#1C4587] font-bold mb-4">My Bond</h1>
            <div className="w-full my-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 ">
                    {/* Section: Give */}
                    <div className="w-full shadow-[0px_15px_45px_0px_#CFC9DDCC] rounded-sm p-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl text-[#1C4587] font-bold">Give</h1>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onAddNewBond}
                                className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-2 rounded-md font-medium text-xs"
                            >
                                +Add New Bond
                            </motion.button>
                        </div>

                        <div className="flex flex-col gap-3 mt-6">
                            {bonds.map((bond) => (
                                <div key={bond.id} className="flex items-center justify-between p-5 bg-[#EAF0FB] rounded-sm">
                                    <h3 className="text-md">{bond.title}</h3>
                                    <div className="flex gap-2">
                                        <img onClick={() => onDeleteBond(bond)} src="/delete.svg" alt="" />
                                        <img onClick={() => onEditBond(bond)} src="/edit.svg" alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Get */}
                    <div className="w-full shadow-[0px_15px_45px_0px_#CFC9DDCC] rounded-sm p-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl text-[#1C4587] font-bold">Get</h1>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onAddNewBond}
                                className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-2 rounded-md font-medium text-xs"
                            >
                                +Add New Bond
                            </motion.button>
                        </div>

                        <div className="flex flex-col gap-3 mt-6">
                            {bonds.map((bond) => (
                                <div key={bond.id} className="flex items-center justify-between p-5 bg-[#EAF0FB] rounded-sm">
                                    <h3 className="text-md">{bond.title}</h3>
                                    <div className="flex gap-2">
                                        <img onClick={() => onDeleteBond(bond)} src="/delete.svg" alt="" />
                                        <img onClick={() => onEditBond(bond)} src="/edit.svg" alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyBond;
