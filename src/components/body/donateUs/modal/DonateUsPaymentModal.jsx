"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { X } from "lucide-react"

const DonateUsPaymentModal = ({ isOpen, onClose, totalAmount = 155.0 }) => {
  const [isSuccess, setIsSuccess] = useState(false)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position and lock body
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
    } else {
      // Restore scroll position when modal closes
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      city: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form data:", data)
    setIsSuccess(true)
  }

  // Input change handlers to restrict input to numbers only
  const handleNumberInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "")
  }

  const handleExpiryInput = (e) => {
    // Format as MM/YY and only allow numbers
    let value = e.target.value.replace(/[^0-9]/g, "")

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4)
    }

    e.target.value = value
  }

  return (
    <AnimatePresence>
      {isOpen && !isSuccess && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex justify-center items-start z-50 overflow-y-auto py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-xl rounded-lg shadow-lg overflow-hidden my-auto mx-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4"
                aria-label="Close"
              >
                <img src="/x.svg" alt="" />
              </button>

              {/* Title */}
              <h2 className="text-[#1C4587] text-2xl font-bold mb-2">Payment</h2>
              <p className="text-gray-500 mb-6 text-center font-semibold">Personal Information</p>

              {/* Payment Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.firstName ? "border-red-500" : ""}`}
                      {...register("firstName", { required: true })}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">First name is required</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.lastName ? "border-red-500" : ""}`}
                      {...register("lastName", { required: true })}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">Last name is required</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.email ? "border-red-500" : ""}`}
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-500 text-xs mt-1">Email is required</p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className="text-red-500 text-xs mt-1">Invalid email address</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Phone Number"
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.phoneNumber ? "border-red-500" : ""}`}
                      {...register("phoneNumber", { required: true })}
                      onInput={handleNumberInput}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">Phone number is required</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Country"
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.country ? "border-red-500" : ""}`}
                      {...register("country", { required: true })}
                    />
                    {errors.country && <p className="text-red-500 text-xs mt-1">Country is required</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.city ? "border-red-500" : ""}`}
                      {...register("city", { required: true })}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">City is required</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="Card Number"
                      maxLength={16}
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.cardNumber ? "border-red-500" : ""}`}
                      {...register("cardNumber", {
                        required: true,
                        pattern: /^[0-9]{16}$/,
                      })}
                      onInput={handleNumberInput}
                    />
                    {errors.cardNumber?.type === "required" && (
                      <p className="text-red-500 text-xs mt-1">Card number is required</p>
                    )}
                    {errors.cardNumber?.type === "pattern" && (
                      <p className="text-red-500 text-xs mt-1">Invalid card number</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="MM/YY"
                      maxLength={5}
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.expiry ? "border-red-500" : ""}`}
                      {...register("expiry", {
                        required: true,
                        pattern: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      })}
                      onInput={handleExpiryInput}
                    />
                    {errors.expiry?.type === "required" && (
                      <p className="text-red-500 text-xs mt-1">Expiry date is required</p>
                    )}
                    {errors.expiry?.type === "pattern" && <p className="text-red-500 text-xs mt-1">Use format MM/YY</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="CVC"
                      maxLength={4}
                      className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${errors.cvc ? "border-red-500" : ""}`}
                      {...register("cvc", {
                        required: true,
                        pattern: /^[0-9]{3,4}$/,
                      })}
                      onInput={handleNumberInput}
                    />
                    {errors.cvc?.type === "required" && <p className="text-red-500 text-xs mt-1">CVC is required</p>}
                    {errors.cvc?.type === "pattern" && <p className="text-red-500 text-xs mt-1">Invalid CVC</p>}
                  </div>
                </div>

                {/* Total Amount */}
                <div className="flex justify-between items-center pt-4  ">
                  <span className="font-medium text-xs">Total Amount</span>
                  <span className="font-bold text-[#1C4587]">${totalAmount.toFixed(2)}</span>
                </div>

                {/* Payment Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1C4587] hover:bg-[#15366b] text-white text-sm font-medium py-2 rounded transition"
                >
                  Confirm to pay
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Success Modal */}
      {isSuccess && (
        <motion.div
          className="fixed inset-0 flex items-center backdrop-blur-sm justify-center bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-sm text-center shadow-lg w-[350px] mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-sm font-bold text-gray-700">Payment Successful</h2>
            <p className="text-[10px] text-gray-600 mt-2">Thank you for your generous support!</p>
            <Link href="/">
              <button
                onClick={() => {
                  setIsSuccess(false)
                  onClose()
                }}
                className="mt-4 w-1/3 bg-[#1C4587] text-white text-[10px] font-medium py-2 rounded-sm hover:bg-opacity-90 transition outline-none"
              >
                Go Home
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DonateUsPaymentModal

