"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const EditProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [skills, setSkills] = useState(["Artist", "Engineer", "Actor"]);
    const [newSkill, setNewSkill] = useState("");

    const addSkill = () => {
        if (newSkill && skills.length < 3) {
            setSkills([...skills, newSkill]);
            setNewSkill("");
        }
    };

    const removeSkill = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
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
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block font-semibold text-sm">Skills</label>
                            <button
                                type="button"
                                onClick={addSkill}
                                className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-5 py-2 rounded-xl "
                            >
                                +Add Skill
                            </button>
                        </div>
                        <div className="flex items-center w-full">
                            <input
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                className="border border-[#1C4587] w-full rounded-lg p-2"
                                placeholder="Add a skill"
                            />

                        </div>
                        <div className="mt-2 flex gap-2 flex-wrap">
                            {skills.map((skill, index) => (
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
                            {...register("email", { required: "Email is required" })}
                            className="w-full border border-[#1C4587] rounded-lg p-2 focus:outline-blue-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Contact No */}
                    <div>
                        <label className="block font-semibold text-sm mb-2">Contact No</label>
                        <input
                            {...register("contact")}
                            className="w-full border border-[#1C4587] rounded-lg p-2 focus:outline-blue-500"
                            placeholder="Enter your phone number"
                        />
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
                        className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-3 rounded-lg font-semibold text-lg "
                    >
                        Save Changes
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default EditProfile;
