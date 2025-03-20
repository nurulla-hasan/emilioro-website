"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const RatingModal = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState("5");
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/40 px-4 z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white relative p-6 rounded-lg shadow-lg w-[400px] text-center"
            >
                {/* Close Button */}
                <div className="absolute top-2 right-2">
                    <img onClick={onClose} src="/x.svg" alt="" />
                </div>

                {/* Header */}
                <h2 className="text-lg text-[#1C4587] font-bold mb-4">Bond Completed! Rate Your Experience</h2>

                {/* Rating Selection */}
                <p className="text-sm font-medium mb-2">Select 01 - 10 to rate the bond</p>
                <div className=" border border-[#D6D6D6] rounded-lg mb-4 p-2">
                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full text-[#595D62] outline-none"
                    >
                        {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    className=" px-8 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg font-medium"
                    onClick={onClose}
                >
                    Submit
                </button>
            </motion.div>
        </div>
    );
};

export default RatingModal;