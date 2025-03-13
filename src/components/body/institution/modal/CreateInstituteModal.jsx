"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const CreateInstituteModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            instituteName: "",
            description: "",
            thumbnail: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        setIsOpen(false);
        reset(); // Reset form after submission
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg w-[90%] max-w-md lg:max-w-lg shadow-lg relative">
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-black">
                    <IoMdClose size={20} />
                </button>

                {/* Title */}
                <h2 className="text-lg font-semibold mb-4">Join New Institute</h2>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Institution Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Add Institution Name</label>
                        <input {...register("instituteName", { required: true })} type="text" placeholder="Type here.." className="w-full border px-3 py-2 rounded-md text-sm border-gray-300" />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Add Description</label>
                        <textarea {...register("description", { required: true })} placeholder="Type here.." className="w-full border px-3 py-2 rounded-md text-sm border-gray-300" />
                    </div>

                    {/* Thumbnail Image */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Add Thumbnail Image</label>
                        <input type="file" {...register("thumbnail")} className="w-full border px-3 py-2 rounded-md text-sm border-gray-300" />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white py-2 rounded-md font-medium text-lg"
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default CreateInstituteModal;
