"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden"
      >
        {/* Login Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-[#1C4587] mb-2">Login to Account</h2>
          <p className="text-sm text-gray-500 mb-6">Please enter your email and password to continue</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Asadujjaman@gmail.com"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="**********"
              />
              <button
                type="button"
                className="absolute top-[50%] right-3 transform -translate-y-[50%] text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="text-blue-700 font-medium">Remember Password</span>
              </label>
              <span className="text-red-500 cursor-pointer">Forgot Password?</span>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white rounded-md font-medium shadow-md"
            >
              Log in
            </motion.button>
          </form>
        </div>

        {/* Welcome Section */}
        <div className="hidden md:flex w-1/2 bg-blue-100 flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-bold text-[#1C4587] mb-4">Welcome Back!</h2>
          <p className="text-gray-700 text-center text-sm mb-4">
            Please sign in into your account with the given details to continue
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white rounded-md font-medium shadow-md"
          >
            Sign Up
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
