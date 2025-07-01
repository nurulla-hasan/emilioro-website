"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";


const InputField = forwardRef(
  ({ label, type = "text", placeholder, error, onInput, ...rest }, ref) => (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full text-xs border-b border-gray-300 py-2 focus:border-[#1C4587] outline-none ${error ? "border-red-500" : ""
          }`}
        onInput={onInput}
        ref={ref}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  )
);
InputField.displayName = 'InputField';

const DonateUsPaymentModal = ({ isOpen, onClose, totalAmount = 155.0 }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden-scroll');
    } else {
      document.body.classList.remove('overflow-hidden-scroll');
    }
    return () => {
      document.body.classList.remove('overflow-hidden-scroll');
    };
  }, [isOpen]);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    setIsSuccess(true);
    reset();
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const handleNumberInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const handleExpiryInput = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    e.target.value = value;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Main Payment Modal or Success Modal based on isSuccess state */}
          {!isSuccess ? (
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
                  onClick={handleModalClose}
                  className="absolute top-4 right-4 p-1 rounded-full flex items-center justify-center cursor-pointer bg-button"
                  aria-label="Close"
                >
                  <RxCross2 size={20} color="#fff" />
                </button>

                {/* Title */}
                <h2 className="text-[#1C4587] text-2xl font-bold mb-2">Payment</h2>
                <p className="text-gray-500 mb-6 text-center font-semibold">
                  Personal Information
                </p>

                {/* Payment Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField
                      placeholder="First Name"
                      error={errors.firstName}
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    <InputField
                      placeholder="Last Name"
                      error={errors.lastName}
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    <InputField
                      type="email"
                      placeholder="Email"
                      error={errors.email}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <InputField
                      type="tel"
                      inputMode="numeric"
                      placeholder="Phone Number"
                      error={errors.phoneNumber}
                      onInput={handleNumberInput}
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                      })}
                    />
                    <InputField
                      placeholder="Country"
                      error={errors.country}
                      {...register("country", { required: "Country is required" })}
                    />
                    <InputField
                      placeholder="City"
                      error={errors.city}
                      {...register("city", { required: "City is required" })}
                    />
                    <div className="sm:col-span-2">
                      <InputField
                        type="text"
                        inputMode="numeric"
                        placeholder="Card Number"
                        maxLength={16}
                        error={errors.cardNumber}
                        onInput={handleNumberInput}
                        {...register("cardNumber", {
                          required: "Card number is required",
                          pattern: {
                            value: /^[0-9]{16}$/,
                            message: "Invalid card number (16 digits)",
                          },
                        })}
                      />
                    </div>
                    <InputField
                      type="text"
                      inputMode="numeric"
                      placeholder="MM/YY"
                      maxLength={5}
                      error={errors.expiry}
                      onInput={handleExpiryInput}
                      {...register("expiry", {
                        required: "Expiry date is required",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                          message: "Use format MM/YY",
                        },
                      })}
                    />
                    <InputField
                      type="text"
                      inputMode="numeric"
                      placeholder="CVC"
                      maxLength={4}
                      error={errors.cvc}
                      onInput={handleNumberInput}
                      {...register("cvc", {
                        required: "CVC is required",
                        pattern: {
                          value: /^[0-9]{3,4}$/,
                          message: "Invalid CVC (3 or 4 digits)",
                        },
                      })}
                    />
                  </div>

                  {/* Total Amount */}
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-medium text-xs">Total Amount</span>
                    <span className="font-bold text-[#1C4587]">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>

                  {/* Payment Button */}
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#1C4587] hover:bg-[#15366b] text-white text-sm font-medium py-2 rounded transition"
                  >
                    Confirm to pay
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            // Success Modal
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center backdrop-blur-sm">
              <motion.div
                className="bg-white p-6 rounded-sm text-center shadow-lg w-[350px] mx-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-sm font-bold text-gray-700">Payment Successful</h2>
                <p className="text-[10px] text-gray-600 mt-2">
                  Thank you for your generous support!
                </p>
                <Link href="/">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      onClose();
                    }}
                    className="mt-4 cursor-pointer w-1/3 bg-[#1C4587] text-white text-[10px] font-medium py-2 rounded-sm hover:bg-opacity-90 transition outline-none"
                  >
                    Go Home
                  </button>
                </Link>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateUsPaymentModal;