"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const ChangePassword = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const onSubmit = (data) => {
        console.log("Password Changed:", data);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-[0px_19px_48px_1px_#CFC9DDB2] rounded-lg md:w-3/5 mx-auto my-10"
        >
            <div className="md:w-2/3 px-5 py-10 mx-auto">
                <h2 className="text-xl text-[#1C4587] font-bold text-center mb-6">Edit Your Profile</h2>
                <div className="mb-6 flex flex-col gap-[2px]">
                    <p className="text-center text-[#1C4587] font-medium cursor-pointer text-sm">Change password</p>
                    <div className="border-b-2 border-[#1C4587] w-1/3 mx-auto"></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {/* Current Password */}
                    <div>
                        <label className="block font-semibold text-xs text-gray-700 mb-1">Current password</label>
                        <div className="relative">
                            <input
                                {...register("currentPassword", { required: "Current password is required" })}
                                type={showPassword.current ? "text" : "password"}
                                className="w-full border border-[#1c4587a8] rounded-sm p-1.5 pr-8 text-xs focus:outline-none"
                                placeholder="************"
                            />
                            <span
                                className="absolute right-3 top-2 cursor-pointer"
                                onClick={() => togglePassword("current")}
                            >
                                {showPassword.current ? <EyeOff size={16} /> : <Eye size={16} />}
                            </span>
                        </div>
                        {errors.currentPassword && <p className="text-red-500 text-xs">{errors.currentPassword.message}</p>}
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block font-semibold text-xs text-gray-700 mb-1">New password</label>
                        <div className="relative">
                            <input
                                {...register("newPassword", { required: "New password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                                type={showPassword.new ? "text" : "password"}
                                className="w-full border border-[#1c4587a8] rounded-sm p-1.5 pr-8 text-xs focus:outline-none"
                                placeholder="************"
                            />
                            <span
                                className="absolute right-3 top-2 cursor-pointer"
                                onClick={() => togglePassword("new")}
                            >
                                {showPassword.new ? <EyeOff size={16} /> : <Eye size={16} />}
                            </span>
                        </div>
                        {errors.newPassword && <p className="text-red-500 text-xs">{errors.newPassword.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block font-semibold text-xs text-gray-700 mb-1">Confirm password</label>
                        <div className="relative">
                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                    validate: (value) => value === watch("newPassword") || "Passwords do not match",
                                })}
                                type={showPassword.confirm ? "text" : "password"}
                                className="w-full border border-[#1c4587a8] rounded-sm p-1.5 pr-8 text-xs focus:outline-none"
                                placeholder="************"
                            />
                            <span
                                className="absolute right-3 top-2 cursor-pointer"
                                onClick={() => togglePassword("confirm")}
                            >
                                {showPassword.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                            </span>
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full cursor-pointer bg-button text-white py-2 rounded-sm font-semibold text-sm"
                    >
                        Save changes
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default ChangePassword;
