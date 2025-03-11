"use client";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

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

                    <div className="flex flex-col lg:flex-row items-center gap-8 my-20">
                        {/* Section 1 */}
                        <div className="w-full shadow-[0px_3px_14px_1px_#d9e7ff] rounded-sm p-5">
                            <div className="flex justify-between">
                                <h1 className="text-xl text-[#1C4587] font-bold mb-4">Give</h1>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-blue-500 font-semibold mb-4 cursor-pointer"
                                >
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-2 py-[6] rounded-md font-medium text-xs"
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
                        <div className="w-full shadow-[0px_3px_14px_1px_#d9e7ff] rounded-sm p-5">
                            <div className="flex justify-between">
                                <h1 className="text-xl text-[#1C4587] font-bold mb-4">Get</h1>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-blue-500 font-semibold mb-4 cursor-pointer"
                                >
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-2 py-[6] rounded-md font-medium text-xs"
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

            case "Bond Request":
                return (
                    <div className="w-full shadow-2xl rounded-sm mt-20">
                        {/* Render your Bond Request section content here */}
                        <h2>Bond Request Section</h2>
                        {/* Add your own content here */}
                    </div>
                );

            case "Ongoing Bond":
                return (
                    <div className="w-full shadow-2xl rounded-sm mt-20">
                        {/* Render your Ongoing Bond section content here */}
                        <h2>Ongoing Bond Section</h2>
                        {/* Add your own content here */}
                    </div>
                );

            case "Completed Bond":
                return (
                    <div className="w-full shadow-2xl rounded-sm mt-20">
                        {/* Render your Completed Bond section content here */}
                        <h2>Completed Bond Section</h2>
                        {/* Add your own content here */}
                    </div>
                );

            default:
                return <div>No section available</div>;
        }
    };



    return (
        <div className="min-h-screen lg:w-2/3 p-5 mx-auto mt-10">
            <div className="flex justify-between">
                <h1 className="text-xl text-[#1C4587] font-bold mb-4">My Bond</h1>
                <div className="border border-[#D6D6D6] rounded-lg flex">
                    <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}  // Update state when option changes
                        className="border-none outline-0 cursor-pointer text-[#595D62] bg-white font-normal lg:px-1 border border-[#1C4587] rounded-lg text-sm"
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
                <div className="">
                    {renderSection()}
                </div>
            </section>


            {/* Modal for Add Bond */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed inset-0 bg-black/25 flex justify-center items-center"
                >
                    <div className="bg-white p-6 rounded-sm shadow-lg lg:w-1/3">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-semibold">Create new Bond</h2>
                            <IoClose
                                color="#fff"
                                className="text-xl rounded-full bg-blue-800 cursor-pointer"
                                onClick={() => setIsModalOpen(false)}
                            />
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-sm font-semibold mb-2">What do you offer</h2>
                            <input
                                {...register("offer", { required: true })}
                                placeholder="Type here"
                                className="w-full p-2 border border-gray-300 rounded-sm mb-3"
                            />

                            {/* Display Tags */}
                            <div className="flex flex-col gap-2 mb-3">
                                {tags.map((tag, index) => (
                                    <div key={index} className="border border-gray-300 w-full px-2 py-1 rounded-sm text-sm flex items-center justify-between">
                                        {tag}
                                        <IoClose
                                            color="#f71919"
                                            className="ml-1 cursor-pointer"
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
                                className="border w-full border-gray-300 text-gray-500 px-3 py-1 rounded-sm text-sm mb-3"
                            >
                                +Add more
                            </button>

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white p-2 rounded-md">
                                Submit
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}

            {/* Modal for Edit Bond */}
            {isEditModalOpen && currentBond && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed inset-0 bg-black/30 flex justify-center items-center"
                >
                    <div className="bg-white p-6 rounded-sm shadow-lg lg:w-2/5">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-semibold">Edit Bond</h2>
                            <IoClose
                                color="#fff"
                                className="text-xl rounded-full bg-[#1C4587] cursor-pointer"
                                onClick={() => setIsEditModalOpen(false)}
                            />
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleEditConfirm(e.target.title.value);
                        }}>
                            <h1 className="text-sm mb-2 font-semibold">What do you need ?</h1>
                            <input
                                defaultValue={currentBond.title}
                                name="title"
                                className="w-full p-2 border border-gray-300 rounded-sm mb-3"
                            />
                            <button type="submit" className="mt-5 px-8 py-2 bg-gradient-to-b bg-[#1C4587] to-[#3279EA] text-white p-2 rounded-md">
                                Sabmit
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}

            {/* Modal for Delete Bond */}
            {isDeleteModalOpen && currentBond && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed inset-0 bg-black/30 flex justify-center items-center"
                >

                    <div className="bg-white text-center p-6 space-y-2 rounded-sm shadow-lg lg:w-1/5 relative">
                        <h2 className="text-sm text-[#1C4587] font-semibold">Are you sure !!</h2>
                        <h2 className="text-xs text-[#1C4587] font-normal">Do you want to  delete this content ?</h2>
                        <div className="mt-10">
                            <button
                                onClick={handleDeleteConfirm}
                                className=" bg-[#1C4587] text-white px-6 py-2 rounded-md"
                            >
                                Delete
                            </button>
                            <IoClose
                                color="#fff"
                                className="text-xl absolute top-2 right-2 rounded-full bg-[#1C4587] cursor-pointer"
                                onClick={() => setIsDeleteModalOpen(false)}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
};

export default MyBondPage;