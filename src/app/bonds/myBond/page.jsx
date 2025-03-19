"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import BondRequest from "@/components/body/bonds/bondRequest/BondRequest";
import OngoingBond from "@/components/body/bonds/ongoingBond/OngoingBond";
import CompletedBond from "@/components/body/bonds/completedBond/CompletedBond";
import MyBond from "@/components/body/bonds/myBond/MyBond";

const MyBondPage = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [tags, setTags] = useState([]);
    const [currentBond, setCurrentBond] = useState(null);
    const [selectedOption, setSelectedOption] = useState("My Bond");

    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const onSubmit = (data) => {
        console.log({ ...data, tags });
        reset();
        setTags([]);
        setIsModalOpen(false);
    };

    const bonds = [
        { id: "1", title: "Teaching Math" },
        { id: "2", title: "Teaching English" },
        { id: "3", title: "Spending Time Together" },
        { id: "4", title: "Fixing Computer" },
    ];

    const handleEditClick = (bond) => {
        setCurrentBond(bond);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (bond) => {
        setCurrentBond(bond);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        // Handle delete logic here (e.g., remove the bond from the list)
        console.log("Bond deleted: ", currentBond);
        setIsDeleteModalOpen(false);
    };

    const handleEditConfirm = (newTitle) => {
        // Handle edit logic here (e.g., update the bond title)
        console.log("Bond edited: ", newTitle);
        setIsEditModalOpen(false);
    };


    const renderSection = () => {
        switch (selectedOption) {
            case "My Bond":
                return (
                    <MyBond
                        // title="My Bond"
                        bonds={bonds}
                        onAddNewBond={() => setIsModalOpen(true)}
                        onEditBond={handleEditClick}
                        onDeleteBond={handleDeleteClick}
                    />
                );

            case "Bond Request":
                return (
                    <div className="w-full rounded-sm mt-5">
                        {/* Render your Bond Request section content here */}
                        <BondRequest />
                        {/* Add your own content here */}
                    </div>
                );

            case "Ongoing Bond":
                return (
                    <div className="w-full rounded-sm mt-5">
                        {/* Render your Ongoing Bond section content here */}
                        <OngoingBond />
                        {/* Add your own content here */}
                    </div>
                );

            case "Completed Bond":
                return (
                    <div className="w-full rounded-sm mt-5">
                        {/* Render your Completed Bond section content here */}
                        <CompletedBond />
                        {/* Add your own content here */}
                    </div>
                );

            default:
                return <div>No section available</div>;
        }
    };



    return (
        <div className="xl:w-6/9 lg:w-5/6 p-5 mx-auto mt-10">
            <div className="flex justify-end">
                <div className="border border-[#D6D6D6] rounded-lg flex">
                    <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}  // Update state when option changes
                        className="border-none p-2 outline-0 cursor-pointer text-[#595D62] bg-white font-normal lg:px-1 border border-[#1C4587] rounded-lg text-sm"
                    >
                        <option value="My Bond">My Bond</option>
                        <option value="Bond Request">Bond Request</option>
                        <option value="Ongoing Bond">Ongoing Bond</option>
                        <option value="Completed Bond">Completed Bond</option>
                    </select>
                </div>
            </div>

            {/* Render content based on selected option */}
            <section>
                <div>
                    {renderSection()}
                </div>
            </section>


            {/* Modal for Add Bond */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-lg w-5/6 md:w-1/4 my-auto mx-4"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-semibold">Create new Bond</h2>
                            <div className="text-xl rounded-full bg-[#1C4587] text-white cursor-pointer">
                                <img onClick={() => setIsModalOpen(false)} src="/x.svg" alt="" />
                            </div>

                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-sm font-semibold mb-2">What do you offer</h2>
                            <input
                                {...register("offer", { required: true })}
                                placeholder="Type here"
                                className="w-full p-2 border border-gray-300 rounded-md mb-3"
                            />

                            {/* Display Tags */}
                            <div className="flex flex-col gap-2 mb-3">
                                {tags.map((tag, index) => (
                                    <div key={index} className="border border-gray-300 w-full px-2 py-1 rounded-md text-sm flex items-center justify-between">
                                        {tag}
                                        <IoClose
                                            className="ml-1 text-red-500 cursor-pointer"
                                            onClick={() => removeTag(tag)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Add More Button */}
                            <button
                                type="button"
                                onClick={() => {
                                    const input = document.querySelector("input[placeholder='Type here']");
                                    const tagValue = input.value.trim();
                                    if (tagValue && !tags.includes(tagValue)) {
                                        setTags([...tags, tagValue]);
                                        input.value = "";
                                    }
                                }}
                                className="border w-full border-gray-300 text-gray-500 px-3 py-1 rounded-md text-sm mb-3"
                            >
                                + Add more
                            </button>

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-gradient-to-b from-[#164083] to-[#1f5fc8] text-white p-2 rounded-md">
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}


            {/* Modal for Edit Bond */}
            {isEditModalOpen && currentBond && (
                <motion.div
                    className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden my-auto mx-4"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative p-6">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                className="absolute top-6 right-6 bg-[#1C4587] rounded-full text-white hover:text-gray-700"
                                aria-label="Close"
                            >
                                <img src="/x.svg" alt="Close" />
                            </button>

                            {/* Title */}
                            <h2 className="text-sm font-semibold mb-5">Edit Bond</h2>

                            {/* Form */}
                            <form className="" onSubmit={(e) => {
                                e.preventDefault();
                                handleEditConfirm(e.target.title.value);
                            }}>
                                <h1 className="text-sm mb-2 font-semibold">What do you need?</h1>
                                <input
                                    defaultValue={currentBond.title}
                                    name="title"
                                    className="w-full p-2 border border-gray-300 rounded-sm mb-5"
                                />

                                {/* Submit Button */}
                                <button type="submit" className=" px-4 py-2 bg-[#1C4587] text-white font-medium rounded-lg transition">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Modal for Delete Bond */}
            {isDeleteModalOpen && currentBond && (
                <motion.div
                    className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white w-full max-w-sm rounded-lg shadow-lg overflow-hidden my-auto mx-4 text-center p-6 relative"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="absolute top-2 right-2 bg-[#1C4587] text-white rounded-full"
                            aria-label="Close"
                        >
                            <img src="/x.svg" alt="" />
                        </button>

                        {/* Modal Content */}
                        <h2 className="text-sm text-[#1C4587] font-semibold">Are you sure?</h2>
                        <p className="text-xs text-[#1C4587] font-normal mt-1">
                            Do you want to delete this content?
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-center gap-3">
                            <button
                                onClick={handleDeleteConfirm}
                                className="bg-[#1C4587] text-white px-5 py-2 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

        </div>
    )
};

export default MyBondPage;