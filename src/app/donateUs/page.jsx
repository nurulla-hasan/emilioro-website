"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import DonateUsPaymentModal from "@/components/body/donateUs/modal/DonateUsPaymentModal";
import DonateUsFooter from "@/components/body/DonateUsFooter";
import wave2 from "../../../public/wave (2).png"
import wave3 from "../../../public/wave (3).png"

const DonateUs = () => {
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [selectedAmounts, setSelectedAmounts] = useState([]);
    const [customAmount, setCustomAmount] = useState(0);

    const amounts = [10, 25, 50];

    const handleSelectAmount = (amount) => {
        setSelectedAmounts((prev) =>
            prev.includes(amount) ? prev.filter((a) => a !== amount) : [...prev, amount]
        );
    };

    const totalAmount = selectedAmounts.reduce((acc, curr) => acc + curr, 0) + Number(customAmount);

    // React Hook Form setup
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Payment Data:", { ...data, totalAmount });
        setIsSuccess(true);
        reset();
    };

    const waveAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    }

    return (
        <div className="bg-[#1C4587] ">
            <div className=" px-5 lg:w-8/11 md:pt-40 pt-20 mx-auto flex flex-col items-center justify-between p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg p-8 text-center z-1"
                >
                    <h2 className="text-xl font-bold text-[#1C4587]">Support the Community</h2>
                    <p className="text-gray-600 text-sm mt-4">
                        The average donation is <span className="font-bold text-[#1C4587]">$25</span>. Every contribution helps us improve and expand!
                    </p>

                    {/* Donation Amount Buttons */}
                    <div className="flex flex-wrap justify-center lg:gap-6 gap-3 mt-6">
                        {amounts.map((amount) => (
                            <button
                                key={amount}
                                onClick={() => handleSelectAmount(amount)}
                                className={`w-[125px] py-3 rounded-sm border transition font-semibold text-xs ${selectedAmounts.includes(amount) ? "bg-[#1C4587] text-white hover:bg-opacity-80" : "bg-white text-[#1C4587] border-[#1C4587]"
                                    }`}
                            >
                                {amount}$
                            </button>
                        ))}
                    </div>

                    {/* Custom Donation Input */}
                    <label className="block text-[13px] text-[#1C4587] font-semibold mt-6">Enter Your Donation Amount</label>
                    <input
                        type="number"
                        placeholder="30.00$"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-2/3 px-4 py-2 mt-2 border border-[#1C4587] rounded-md text-start text-sm focus:outline-none"
                    />

                    {/* Donate Button */}
                    <motion.button
                        onClick={() => setIsPaymentOpen(true)}
                        whileHover={{ scale: selectedAmounts.length > 0 || customAmount > 0 ? 1.05 : 1 }}
                        whileTap={{ scale: selectedAmounts.length > 0 || customAmount > 0 ? 0.95 : 1 }}
                        disabled={selectedAmounts.length === 0 && customAmount <= 0}
                        className={`mt-6 w-3/6 font-medium py-2 px-5 rounded-md text-sm transition ${selectedAmounts.length > 0 || customAmount > 0
                                ? "bg-[#1C4587] text-white hover:bg-opacity-80 cursor-pointer"
                                : "bg-gray-500 text-white cursor-not-allowed"
                            }`}
                    >
                        Donate now
                    </motion.button>
                </motion.div>

                {/* Wave Images */}
                <motion.div variants={waveAnimation} className=" absolute right-0 lg:bottom-20 bottom-96 left-0">
                    <motion.img variants={waveAnimation} className="absolute" src={wave3.src} alt="Wave 1" />
                    <motion.img variants={waveAnimation} className="" src={wave2.src} alt="Wave 3" />
                    <motion.img variants={waveAnimation} className="" src={wave2.src} alt="Wave 3" />
                </motion.div>
                <div className="lg:mt-[165px] mt-[100px]">
                    <DonateUsFooter></DonateUsFooter>
                </div>




                {/* Payment Modal */}
                <DonateUsPaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} totalAmount={totalAmount} />
            </div>
        </div>
    );
};

export default DonateUs;
