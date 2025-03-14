"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

const CreateProjectModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            productName: "",
            description: "",
            thumbnail: "",
            producers: [{ name: "", designation: "CEO" }],
            consumers: [{ name: "" }],
            joinControl: "Private",
        },
    });

    const { fields: producerFields, append: appendProducer, remove: removeProducer } = useFieldArray({
        control,
        name: "producers",
    });

    const { fields: consumerFields, append: appendConsumer, remove: removeConsumer } = useFieldArray({
        control,
        name: "consumers",
    });

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        setIsOpen(false);
        reset();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 mt-10 rounded-lg w-[90%] h-[80vh] max-w-md lg:max-w-lg shadow-lg relative overflow-auto hide-scrollbar">
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-600 hover:text-black">
                    <IoMdClose size={24} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Create New Project</h2>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <input {...register("productName", { required: true })} type="text" placeholder="Enter product name" className="border-gray-300 w-full border px-3 py-2 rounded-md text-sm" />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea {...register("description", { required: true })} placeholder="Enter description" className=" border-gray-300 w-full border px-3 py-2 rounded-md text-sm" />
                    </div>

                    {/* Thumbnail */}
                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">Thumbnail Image</label>
                        <CiImageOn className="absolute top-8 left-2 text-gray-500" />
                        <input type="file" {...register("thumbnail")} className="border-gray-300 cursor-pointer text-gray-500 pl-8 text-xs w-full px-3 py-2 border rounded-lg" />
                    </div>

                    {/* Producers */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Producers</label>
                        {producerFields.map((item, index) => (
                            <div key={item.id} className="flex gap-2 mb-2">
                                <input {...register(`producers.${index}.name`)} type="text" placeholder="Producer name" className="w-full border-gray-300 border px-3 py-2 rounded-md text-sm" />
                                <select {...register(`producers.${index}.designation`)} className="border px-3 py-2 rounded-md text-sm border-gray-300">
                                    <option value="CEO">CEO</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Producer">Producer</option>
                                </select>
                                {index > 0 && (
                                    <button type="button" onClick={() => removeProducer(index)} className="text-red-500 text-sm">X</button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => appendProducer({ name: "", designation: "CEO" })} className="text-blue-600 text-sm">+ Add more</button>
                    </div>

                    {/* Consumers */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Consumers</label>
                        {consumerFields.map((item, index) => (
                            <div key={item.id} className="flex gap-2 mb-2">
                                <input {...register(`consumers.${index}.name`)} type="text" placeholder="Consumer name" className="border-gray-300 w-full border px-3 py-2 rounded-md text-sm" />
                                {index > 0 && (
                                    <button type="button" onClick={() => removeConsumer(index)} className="text-red-500 text-sm">X</button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => appendConsumer({ name: "" })} className="text-blue-600 text-sm">+ Add more</button>
                    </div>

                    {/* Join Control */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Join Control</label>
                        <select {...register("joinControl")} className="w-full border px-3 py-2 rounded-md text-sm border-gray-300">
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white py-2 rounded-md font-medium text-lg">
                        Submit
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectModal;
