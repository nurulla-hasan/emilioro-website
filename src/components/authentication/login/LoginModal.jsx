"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { X, Eye, EyeOff } from 'lucide-react'
import { useDispatch } from "react-redux"
import { setUser } from "@/store/mainSlice"

const LoginModal = ({ isOpen, onClose, setIsSignUpOpen, setIsForgotPassModalOpen }) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)

  const onSubmit = (data) => {
    console.log("Login Data:", data)
    dispatch(setUser(data));
    onClose();
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
            className="bg-white w-full max-w-xl rounded-sm shadow-xl relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 z-50 bg-[#1C4587] text-white rounded-full p-1 hover:bg-[#15366b] transition-colors"
            >
              <X size={16} />
            </button>

            {/* Left Section - Login Form */}
            <div className="mx-auto p-8 md:p-12">
              <h2 className="text-[#1C4587] text-lg font-semibold text-center mb-2">Login to Account</h2>
              <p className="text-gray-500 text-center mb-6 text-xs">Please enter your email and password to continue</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1 text-xs font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-3 py-1.5 text-xs rounded-sm border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-700 mb-1 text-xs font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", { required: "Password is required" })}
                      className="w-full px-3 py-1.5 text-xs rounded-sm border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1C4587] cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <div
                      className={`w-3.5 h-3.5 border rounded-sm flex items-center justify-center ${remember ? "bg-[#1C4587] border-[#1C4587]" : "border-gray-300"
                        }`}
                      onClick={() => setRemember(!remember)}
                    >
                      {remember && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-700 text-xs">Remember Password</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      onClose()
                      setIsForgotPassModalOpen(true)
                    }}
                    className="text-red-500 hover:text-red-600 text-xs cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-button hover:from-[#15366b] hover:to-[#2861c4] text-white py-1.5 text-xs rounded-sm font-medium transition-colors"
                >
                  Log in
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoginModal
