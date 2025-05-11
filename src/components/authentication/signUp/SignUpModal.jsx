"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { X, Eye, EyeOff } from "lucide-react"
import { setUser } from "@/store/mainSlice"
import { useDispatch } from "react-redux"

const SignUpModal = ({ isOpen, onClose, setIsLoginModalOpen }) => {

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const [skilledPeople, setSkilledPeople] = useState([
    { name: "", profession: "", phone: "" },
    { name: "", profession: "", phone: "" },
    { name: "", profession: "", phone: "" },
  ]);
  
  const handleSkilledChange = (index, field, value) => {
    const updated = [...skilledPeople];
    updated[index][field] = value;
    setSkilledPeople(updated);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log({ ...data, skilledPeople });
      dispatch(setUser({ ...data, skilledPeople }));
      onClose();
    }, 1500);
  };
  

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
            className="bg-white w-full h-[90vh] md:h-auto overflow-scroll hide-scrollbar max-w-4xl rounded-sm shadow-xl flex flex-col md:flex-row relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="cursor-pointer absolute top-4 right-4 z-50 bg-[#1C4587] text-white rounded-full p-1 hover:bg-[#15366b] transition-colors"
            >
              <X size={16} />
            </button>

            {/* Left Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center gap-10">
              <h2 className="text-[#1C4587] text-lg font-semibold mb-3">Hello Friend!</h2>
              <p className="text-[#1C4587] text-center mb-6 text-xs">
                Please provide the information's to register your account
              </p>
              <div className="text-center">
                <p className="text-[#1C4587] mb-4 text-sm ">Already have an account! Sign in</p>
                <button
                  onClick={() => {
                    onClose()
                    setIsLoginModalOpen(true)
                  }}
                  className="w-full cursor-pointer max-w-[200px] bg-[#1C4587] hover:bg-[#15366b] text-white py-1.5 rounded-sm text-xs font-medium transition-colors"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* Right Section - Registration Form */}
            <div className="w-full md:w-1/2 bg-[#C0D3F2] p-8 md:p-12">
              <h2 className="text-[#1C4587] text-lg font-semibold text-center mb-2">Register a new account</h2>
              <p className="text-[#1C4587] text-center mb-6 text-xs">Please enter your information to create account</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Username */}
                <div>
                  <label className="block text-[#1C4587] text-xs font-medium mb-1">User name</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    {...register("username", { required: "Username is required" })}
                    className="w-full px-3 py-1.5 text-xs rounded-sm bg-white border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                  />
                  {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#1C4587] text-xs font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-3 py-1.5 text-xs rounded-sm bg-white border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Skilled People (Optional) */}
              <div className="pt-4">
                <label className="block text-[#1C4587] text-xs font-semibold mb-2">
                  Recommend up to 3 skilled people (Optional)
                </label>

                {[0, 1, 2].map((_, index) => (
                  <div key={index} className="grid grid-cols-3 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Name"
                      value={skilledPeople[index].name}
                      onChange={(e) => handleSkilledChange(index, "name", e.target.value)}
                      className="px-2 py-1 text-xs rounded-sm bg-white border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                    />
                    <input
                      type="text"
                      placeholder="Profession"
                      value={skilledPeople[index].profession}
                      onChange={(e) => handleSkilledChange(index, "profession", e.target.value)}
                      className="px-2 py-1 text-xs rounded-sm bg-white border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      value={skilledPeople[index].phone}
                      onChange={(e) => handleSkilledChange(index, "phone", e.target.value)}
                      className="px-2 py-1 text-xs rounded-sm bg-white border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                    />
                  </div>
                ))}
              </div>

                {/* Contact */}
                <div>
                  <label className="block text-[#1C4587] text-xs font-medium mb-1">Contact no</label>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    {...register("contact", { required: "Contact number is required" })}
                    className="w-full px-3 py-1.5 text-xs rounded-sm bg-white border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                  />
                  {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[#1C4587] text-xs font-medium mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", { required: "Password is required" })}
                      className="w-full px-3 py-1.5 text-xs rounded-sm bg-white border border-gray-300 focus:outline-none focus:border-[#1C4587]"
                    />
                    <button
                      type="button"
                      className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1C4587]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer bg-button hover:from-[#15366b] hover:to-[#2861c4] text-white py-1.5 text-xs rounded-sm font-medium transition-colors disabled:opacity-70"
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

