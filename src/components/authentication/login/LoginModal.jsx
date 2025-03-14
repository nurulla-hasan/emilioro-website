"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { X, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

const LoginModal = ({ isOpen, onClose, setIsSignUpOpen, setIsForgotPassModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)

  const onSubmit = (data) => {
    console.log("Login Data:", data)
    onClose()
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
            className="bg-white  w-full max-w-4xl rounded-lg shadow-xl flex flex-col md:flex-row relative"
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

            {/* Left Section - Login Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-[#1C4587] text-xl md:text-2xl font-bold text-center mb-3">Login to Account</h2>
              <p className="text-gray-500 text-center mb-8 text-xs">Please enter your email and password to continue</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-4 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:border-[#1C4587]"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", { required: "Password is required" })}
                      className="w-full px-4 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:border-[#1C4587]"
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

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <div
                      className={`w-4 h-4 border rounded flex items-center justify-center ${remember ? "bg-[#1C4587] border-[#1C4587]" : "border-gray-300"
                        }`}
                      onClick={() => setRemember(!remember)}
                    >
                      {remember && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-700 text-sm">Remember Password</span>
                  </label>
                  <button
                    onClick={() => {
                      onClose();
                      setIsForgotPassModalOpen(true);
                    }}
                    className="text-red-500 hover:text-red-600 text-sm">
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1C4587] hover:bg-[#15366b] text-white py-2 text-sm rounded-md font-medium transition-colors"
                >
                  Log in
                </button>
              </form>
            </div>

            {/* Right Section - Welcome Message */}
            <div className="w-full md:w-1/2 hidden rounded-r-lg bg-[#C0D3F2] p-8 md:p-12 lg:flex flex-col justify-center items-center gap-10 text-center">
              <h2 className="text-[#1C4587] text-xl md:text-2xl font-bold mb-4">Welcome Back !</h2>
              <p className="text-[#1C4587] mb-8 w-2/3">
                Please Sign in into your account with the given details to continue
              </p>
              <div className="text-center">
                <p className="text-[#1C4587] mb-4">New here ? create a new account</p>
                <button
                  className="bg-[#1C4587] text-sm hover:bg-[#15366b] text-white px-16 py-2 rounded-md font-medium transition-colors"
                  onClick={() => {
                    onClose();
                    setIsSignUpOpen(true);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoginModal

