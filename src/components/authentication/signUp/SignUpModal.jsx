"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { X, Eye, EyeOff } from "lucide-react"

const SignUpModal = ({ isOpen, onClose, setIsLoginModalOpen }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            console.log(data)
            onClose()
        }, 1500)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center p-4 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white overflow-y-scroll hide-scrollbar w-full h-[80vh] max-w-4xl rounded-lg shadow-xl flex flex-col md:flex-row relative overflow-hidden"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 bg-[#1C4587] text-white rounded-full p-1 hover:bg-[#15366b] transition-colors"
                        >
                            <X size={16} />
                        </button>

                        {/* Left Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center gap-10">
                            <h2 className="text-[#1C4587] text-xl md:text-2xl font-bold mb-4">Hello Friend!</h2>
                            <p className="text-[#1C4587] text-center mb-8 w-2/3">
                                Please provide the information's to register your account
                            </p>
                            <div className="text-center">
                                <p className="text-[#1C4587] mb-4 text-sm ">Already have an account! Sign in</p>
                                <button
                                    onClick={() => {
                                        onClose();
                                        setIsLoginModalOpen(true);
                                    }}
                                    className="w-full max-w-[200px] bg-[#1C4587] hover:bg-[#15366b] text-white py-2 rounded-md font-medium transition-colors"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Registration Form */}
                        <div className="w-full md:w-1/2 bg-[#C0D3F2] p-8 md:p-12">
                            <h2 className="text-[#1C4587] text-md md:text-2xl font-bold text-center mb-3">Register a new account</h2>
                            <p className="text-[#1C4587] text-center mb-8 text-sm ">Please enter your information to create account</p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Username */}
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2">User name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        {...register("username", { required: "Username is required" })}
                                        className="w-full px-4  py-2 text-xs rounded-md bg-white border border-blue-900 focus:outline-none focus:border-[#1C4587]"
                                    />
                                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        {...register("email", { required: "Email is required" })}
                                        className="w-full px-4  py-2 text-xs rounded-md bg-white border border-blue-900 focus:outline-none focus:border-[#1C4587]"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>

                                {/* Contact */}
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2">Contact no</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your contact number"
                                        {...register("contact", { required: "Contact number is required" })}
                                        className="w-full px-4  py-2 text-xs rounded-md bg-white border border-blue-900 focus:outline-none focus:border-[#1C4587]"
                                    />
                                    {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-gray-700 text-sm mb-2">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            {...register("password", { required: "Password is required" })}
                                            className="w-full px-4  py-2 text-xs rounded-md bg-white border border-blue-900 focus:outline-none focus:border-[#1C4587]"
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1C4587]"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                                </div>

                                {/* Sign Up Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] hover:from-[#15366b] hover:to-[#2861c4] text-white  py-2 text-xs rounded-md font-medium transition-colors disabled:opacity-70"
                                >
                                    {loading ? "Signing Up..." : "Sign Up"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SignUpModal

