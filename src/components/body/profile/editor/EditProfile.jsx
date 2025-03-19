"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SelectSkillsModal from "../modal/SelectSkillsModal";

const EditProfile = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState([]);

    const skillsOptions = ["Artist", "Engineer", "Actor", "Musician", "Doctor", "Teacher"];

    const handleSaveSkill = (skill) => {
        if (!selectedSkills.includes(skill)) {
            const updatedSkills = [...selectedSkills, skill];
            setSelectedSkills(updatedSkills);
            setValue("skills", updatedSkills);
        }
        setIsModalOpen(false);
    };

    const removeSkill = (skill) => {
        const updatedSkills = selectedSkills.filter((s) => s !== skill);
        setSelectedSkills(updatedSkills);
        setValue("skills", updatedSkills);
    };

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };


    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" shadow-[0px_19px_48px_1px_#CFC9DDB2] rounded-lg md:w-3/5 mx-auto my-10"
        >
            <div className="md:w-2/3 px-5 py-10 mx-auto">
                <h2 className="text-2xl text-[#1C4587] font-bold text-center mb-6">Edit Your Profile</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* User Name */}
                    <div>
                        <label className="block font-semibold text-sm mb-2">User Name</label>
                        <input
                            {...register("username", { required: "User Name is required" })}
                            className="w-full border border-[#1C4587] rounded-lg p-2"
                            placeholder="Enter your name"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>

                    {/* Skills */}
                    <div className="">
                        <div className="flex justify-between items-center">
                            <label className="block font-semibold text-sm mb-2">Skills</label>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-5 py-2 rounded-lg"
                            >
                                + Add Skill
                            </button>
                        </div>

                        {/* Hidden Input for Skills */}
                        <input type="hidden" {...register("skills", { required: "At least one skill is required" })} />

                        {/* Selected Skills */}
                        <div className="mt-2 flex flex-col gap-5 py-3 px-5 w-full border  border-[#1C4587] rounded-lg">
                            <div className="flex gap-3">
                                {selectedSkills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="bg-gray-200 text-sm text-[#1C4587] px-3 py-1 rounded-sm flex items-center gap-2"
                                    >
                                        {skill}
                                        <button
                                            type="button"
                                            onClick={() => removeSkill(skill)}
                                            className="cursor-pointer text-red-500 text-sm font-bold"
                                        >
                                            -
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-gray-300 text-xs">e.g: you can add only 3 skills </p>
                        </div>
                        {errors.skills && <p className="text-red-500 text-sm">{errors.skills.message}</p>}
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block font-semibold text-sm mb-2">Bio</label>
                        <textarea
                            {...register("bio")}
                            className="w-full border border-[#1C4587] rounded-lg p-2 focus:outline-blue-500"
                            placeholder="Write something about yourself..."
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-semibold text-sm mb-2">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" }
                            })}
                            className="w-full border border-[#1C4587] rounded-lg p-2 focus:outline-blue-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Contact No */}
                    <div>
                        <label className="block font-semibold text-sm mb-2">Contact No</label>
                        <input
                            {...register("contact", {
                                pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" }
                            })}
                            className="w-full border border-[#1C4587] rounded-lg p-2 focus:outline-blue-500"
                            placeholder="Enter your phone number"
                        />
                        {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block font-semibold text-sm mb-2">Address</label>
                        <input
                            {...register("address")}
                            className="w-full border border-[#1C4587] rounded-lg p-2 focus:outline-blue-500"
                            placeholder="Enter your address"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-3 rounded-lg font-semibold text-lg"
                    >
                        Save Changes
                    </motion.button>
                </form>
            </div>

            {/* Skills Modal */}
            {isModalOpen && <SelectSkillsModal onClose={() => setIsModalOpen(false)} onSave={handleSaveSkill} />}
        </motion.div>
    );
};

export default EditProfile;
