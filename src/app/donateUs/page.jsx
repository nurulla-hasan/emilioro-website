'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import DonateUsFooter from '@/components/body/DonateUsFooter';

const DonateUs = () => {
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedAmounts, setSelectedAmounts] = useState([]);
    const [customAmount, setCustomAmount] = useState(0);

    const amounts = [10, 25, 50];

    const handleSelectAmount = (amount) => {
        if (selectedAmounts.includes(amount)) {
            setSelectedAmounts(selectedAmounts.filter((a) => a !== amount));
        } else {
            setSelectedAmounts([...selectedAmounts, amount]);
        }
    };

    const totalAmount =
        selectedAmounts.reduce((acc, curr) => acc + curr, 0) + Number(customAmount);

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Combine form data with donation total
        const finalData = { ...data, totalAmount };
        console.log("Payment Data:", finalData);
        setIsSuccess(true);
        // Reset the form if needed
        reset();
    };

    return (
        <div>
            <div className="flex items-center justify-center lg:h-[90vh] bg-[#1C4587] p-6">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-white rounded-lg shadow-lg p-8 ${isPaymentOpen ? "lg:h-[342] h-[120vh]" : ""} w-[700px] text-center`}
                >
                    <h2 className="text-xl font-bold text-[#1C4587]">Support the Community</h2>
                    <p className="text-gray-600 text-sm mt-4">
                        The average donation is{' '}
                        <span className="font-bold text-[#1C4587]">$25</span>. Every contribution helps us improve and expand!
                    </p>

                    {/* Donation Amount Buttons */}
                    <div className="flex justify-center lg:gap-6 gap-3 mt-6 ">
                        {amounts.map((amount) => (
                            <button
                                key={amount}
                                onClick={() => handleSelectAmount(amount)}
                                className={`w-[125px] py-3 rounded-sm border transition font-semibold text-xs ${selectedAmounts.includes(amount)
                                    ? 'bg-[#1C4587] text-white hover:bg-opacity-80'
                                    : 'bg-white text-[#1C4587] border-[#1C4587]'
                                    }`}
                            >
                                {amount}$
                            </button>
                        ))}
                    </div>

                    {/* Custom Donation Input */}
                    <label className="block text-[13px] text-[#1C4587] font-semibold mt-6">
                        Enter Your Donation Amount
                    </label>
                    <input
                        type="number"
                        placeholder="30.00$"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-2/3 px-4 py-2 mt-2 border border-[#1C4587] rounded-md text-start text-sm focus:outline-none"
                    />

                    {/* Donate Button */}
                    <div>
                        <motion.button
                            onClick={() => setIsPaymentOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 w-3/6 bg-[#1C4587] text-white font-medium py-2 px-5 rounded-md text-sm hover:bg-opacity-80 transition"
                        >
                            Donate now
                        </motion.button>
                    </div>
                </motion.div>

                {/* Payment Modal with React Hook Form */}
                <AnimatePresence>
                    {isPaymentOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                            className="fixed top-28 right-1/2 transform translate-x-1/2 w-[400px] lg:w-[700px] bg-white rounded-lg shadow-lg p-6 flex flex-col"
                        >
                            <button onClick={() => setIsPaymentOpen(false)} className="ml-auto text-gray-600">
                                ✖
                            </button>
                            <h2 className="text-xl font-bold text-[#1C4587]">Payment</h2>
                            <p className="text-gray-600 text-center font-semibold mt-2">Personal Information</p>

                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 mt-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    {...register('firstName', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    {...register('lastName', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    {...register('email', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    {...register('phoneNumber', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Country"
                                    {...register('country', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="City"
                                    {...register('city', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    {...register('cardNumber', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    {...register('expiry', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    {...register('cvc', { required: true })}
                                    className="border p-2 rounded-md w-full"
                                />

                                {/* For proper grid, you may add an empty div */}
                                <div className="col-span-2"></div>

                                {/* Total Amount Display */}
                                <p className="col-span-2 mt-4 font-semibold">
                                    Total Amount:{" "}
                                    <span className="text-[#1C4587]">${totalAmount || "0.00"}</span>
                                </p>

                                <button
                                    type="submit"
                                    className="col-span-2 mt-4 w-full bg-[#1C4587] text-white font-medium py-3 rounded-md hover:bg-opacity-80 transition"
                                >
                                    Confirm to pay
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Success Modal */}
                <AnimatePresence>
                    {isSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 flex items-center justify-center bg-black/50"
                        >
                            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                                <h2 className="text-xl font-bold text-[#1C4587]">Payment Successful</h2>
                                <p className="text-gray-600 mt-2">Thank you for your generous support!</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-4 w-3/4 bg-[#1C4587] text-white text-sm font-medium py-2 rounded-md hover:bg-opacity-80 transition"
                                >
                                    <Link href="/">Go Home</Link>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <DonateUsFooter></DonateUsFooter>
            <div className='h-20 bg-black'></div>
        </div>
    );
};

export default DonateUs;
