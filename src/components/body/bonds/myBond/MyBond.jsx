"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import AddBondModal from "@/components/body/bonds/modal/AddBondModal";
import EditBondModal from "@/components/body/bonds/modal/EditBondModal";
import DeleteBondModal from "@/components/body/bonds/modal/DeleteBondModal";
import { useState } from "react";
import Image from "next/image";

const MyBond = () => {
    // modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentBond, setCurrentBond] = useState(null);

    const { register, handleSubmit, reset } = useForm();
    const [tags, setTags] = useState([]);

    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const onSubmit = (data) => {
        console.log({ ...data, tags });
        reset();
        setTags([]);
        setIsModalOpen(false);
    };

    const handleDeleteConfirm = () => {
        console.log("Bond deleted: ", currentBond);
        setIsDeleteModalOpen(false);
    };

    const handleEditConfirm = (newTitle) => {
        console.log("Bond edited: ", newTitle);
        setIsEditModalOpen(false);
    };

    // 🛠️ নতুন ফাংশন
    const onDeleteBond = (bond) => {
        setCurrentBond(bond);
        setIsDeleteModalOpen(true);
    };

    const onEditBond = (bond) => {
        setCurrentBond(bond);
        setIsEditModalOpen(true);
    };

    const bonds = [
        { id: "1", title: "Teaching Math" },
        { id: "2", title: "Teaching English" },
        { id: "3", title: "Spending Time Together" },
        { id: "4", title: "Fixing Computer" },
    ];

    return (
        <div>
            <h1 className="text-xl text-[#1C4587] font-bold mb-4">My Bond</h1>
            <div className="w-full my-20">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Section: Give */}
                    <div className="w-full shadow-[0px_15px_45px_0px_#CFC9DDCC] rounded-sm p-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl text-[#1C4587] font-bold">Give</h1>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-2 rounded-md font-medium text-xs"
                            >
                                +Add New Bond
                            </motion.button>
                        </div>

                        <div className="flex flex-col gap-3 mt-6">
                            {bonds.map((bond) => (
                                <div key={bond.id} className="flex items-center justify-between p-5 bg-[#EAF0FB] rounded-sm">
                                    <h3 className="text-md">{bond.title}</h3>
                                    <div className="flex gap-2">
                                        <Image
                                            width={18}
                                            height={18}
                                            className="cursor-pointer"
                                            onClick={() => onDeleteBond(bond)}
                                            src="/delete.svg" alt="Delete"
                                        />
                                        <img className="cursor-pointer" onClick={() => onEditBond(bond)} src="/edit.svg" alt="Edit" />
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
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-2 rounded-md font-medium text-xs"
                            >
                                +Add New Bond
                            </motion.button>
                        </div>

                        <div className="flex flex-col gap-3 mt-6">
                            {bonds.map((bond) => (
                                <div key={bond.id} className="flex items-center justify-between p-5 bg-[#EAF0FB] rounded-sm">
                                    <h3 className="text-md">{bond.title}</h3>
                                    <div className="flex gap-2">
                                        <Image
                                            width={18}
                                            height={18}
                                            className="cursor-pointer"
                                            onClick={() => onDeleteBond(bond)}
                                            src="/delete.svg" alt="Delete"
                                        />
                                        <img className="cursor-pointer" onClick={() => onEditBond(bond)} src="/edit.svg" alt="Edit" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Add Bond */}
            <AddBondModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit(onSubmit)}
                register={register}
                tags={tags}
                setTags={setTags}
                removeTag={removeTag}
            />

            {/* Modal for Edit Bond */}
            <EditBondModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                currentBond={currentBond}
                handleEditConfirm={handleEditConfirm}
            />

            {/* Modal for Delete Bond */}
            <DeleteBondModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                handleDeleteConfirm={handleDeleteConfirm}
            />
        </div>
    );
};

export default MyBond;
