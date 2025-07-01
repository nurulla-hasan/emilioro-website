"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import DonateUsPaymentModal from "@/components/body/donateUs/modal/DonateUsPaymentModal";

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
            transition: { duration: 1, ease: "easeOut", delay: 0.2 },
        },
    };

    return (
        <div className="px-5 md:pt-40 pt-20 flex flex-col items-center justify-between p-6 bg-[#1C4587] h-[calc(100vh-88px)]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-sm p-6 text-center z-1"
            >
                <h2 className="text-lg font-semibold text-[#1C4587]">Support the Community</h2>
                <p className="text-gray-700 text-xs mt-3">
                    The average donation is <span className="font-semibold text-[#1C4587]">$25</span>. Every contribution helps us improve and expand!
                </p>

                <div className="flex flex-wrap justify-center lg:gap-5 gap-2 mt-5">
                    {amounts.map((amount) => (
                        <button
                            key={amount}
                            onClick={() => handleSelectAmount(amount)}
                            className={`w-[110px] cursor-pointer py-2 rounded-sm border transition text-xs font-medium focus:outline-none ${selectedAmounts.includes(amount) ? "bg-[#1C4587] text-white hover:bg-opacity-80" : "bg-white text-[#1C4587] border-[#1C4587]"}`}
                        >
                            {amount}$
                        </button>
                    ))}
                </div>

                <label className="block text-xs text-gray-700 font-medium mt-5">Enter Your Donation Amount</label>
                <input
                    type="number"
                    placeholder="30.00$"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-2/3 px-3 py-2 mt-2 border border-[#1C4587] rounded-sm text-xs text-gray-700 focus:outline-none"
                />

                <motion.button
                    onClick={() => setIsPaymentOpen(true)}
                    whileTap={{ scale: selectedAmounts.length > 0 || customAmount > 0 ? 0.95 : 1 }}
                    disabled={selectedAmounts.length === 0 && customAmount <= 0}
                    className={`mt-5 w-3/6 font-medium py-2 px-5 rounded-sm text-xs transition focus:outline-none ${selectedAmounts.length > 0 || customAmount > 0 ? "bg-[#1C4587] text-white hover:bg-opacity-80 cursor-pointer" : "bg-gray-500 text-white cursor-not-allowed"}`}
                >
                    Donate now
                </motion.button>
            </motion.div>

            <motion.div variants={waveAnimation} className="absolute bottom-20">
                <motion.img variants={waveAnimation} className="absolute" src='/wave (3).png' alt="Wave 1" />
                <motion.img variants={waveAnimation} className="" src='/wave (2).png' alt="Wave 3" />
                <motion.img variants={waveAnimation} className="" src='/wave (3).png' alt="Wave 3" />
            </motion.div>


            <DonateUsPaymentModal
                isOpen={isPaymentOpen}
                onClose={() => setIsPaymentOpen(false)}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                totalAmount={totalAmount}
            />
        </div>
    );
};

export default DonateUs;
