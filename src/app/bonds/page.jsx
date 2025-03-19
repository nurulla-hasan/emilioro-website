"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const [toggle, setToggle] = useState(false);

    return (
        <div className=" w-full xl:w-6/9 lg:w-5/6 p-5 mx-auto mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-lg md:text-xl text-[#1C4587] font-bold mb-4 md:mb-0 text-center md:text-start">
                    Exchange Services & Goods
                </h1>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-500 font-semibold cursor-pointer"
                >
                    <Link href='/bonds/myBond'>
                        <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-4 py-2 rounded-md font-medium">
                            My Bond →
                        </button>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mt-10 md:mt-14 mx-auto border-[#ABC4ED] border shadow-[0px_16px_29px_-2px_#cbc3de] p-5 md:p-8 rounded-lg"
            >
                {/* Text */}
                <p className="text-center font-bold text-[#1C4587] mb-6">
                    Swap services & goods effortlessly. Connect, trade, and finalize your exchange with ease!
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Give */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full"
                        >
                            <label className="block text-sm text-[#1C4587] font-medium mb-1">Give</label>
                            <select
                                {...register("give", { required: "Give is required" })}
                                className="w-full outline-none p-2 border border-[#1C4587] rounded-lg text-xs"
                            >
                                <option value="Teaching Math">Teaching Math</option>
                                <option value="Firing Computer">Firing Computer</option>
                                <option value="Teaching English">Teaching English</option>
                                <option value="Spend Time Together">Spend Time Together</option>
                            </select>
                            {errors.give && (
                                <p className="text-red-500 text-sm mt-1">{errors.give.message}</p>
                            )}
                        </motion.div>

                        {/* Get */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="w-full"
                        >
                            <label className="block text-sm text-[#1C4587] font-medium mb-1">Get</label>
                            <select
                                {...register("get", { required: "Get is required" })}
                                className="w-full outline-none p-2 border border-[#1C4587] rounded-lg text-xs"
                            >
                                <option value="Cooking Code">Cooking Code</option>
                                <option value="Firing Car Bodies">Firing Car Bodies</option>
                                <option value="Doing the Lawn">Doing the Lawn</option>
                                <option value="Hoody">Hoody</option>
                            </select>
                            {errors.get && (
                                <p className="text-red-500 text-sm mt-1">{errors.get.message}</p>
                            )}
                        </motion.div>
                    </div>

                    {/* Matching items section */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: toggle ? 1 : 0, height: toggle ? "auto" : 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                    >
                        {toggle && (
                            <div className="p-2">
                                <div className="border flex flex-col gap-2 p-3 border-gray-300 mt-5 rounded-lg">
                                    <h1 className="text-sm font-semibold text-[#1C4587]">Matching Bonds</h1>

                                    {/* Matching Items */}
                                    <div className="p-2 text-xs rounded-sm bg-[#EAF0FB] flex items-center gap-2">
                                        <img className="h-5 w-5 bg-gray-400 rounded-full" src="image" alt="" />
                                        <div className="">Mr. John <span className="text-[#1C4587]">(Cooking Cake - Teaching Math)</span></div>
                                    </div>

                                    <div className="p-2 text-xs rounded-sm border-gray-300 border flex items-center gap-2">
                                        <div className="flex gap-2 items-center">
                                            <img className="h-5 w-5 bg-gray-400 rounded-full" src="image" alt="" />
                                            <div className="">Mr. John <span className="text-[#1C4587]">(Cooking Cake - Teaching Math)</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Search Bond / Link Button */}
                    <div className="flex justify-center items-center mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setToggle(!toggle)}
                            className="w-full md:w-2/5 bg-[#1C4587] text-white p-2 rounded-lg transition-all"
                        >
                            {toggle ? (
                                <Link href='/message'>
                                    <motion.div
                                        key="link"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >
                                        Link
                                    </motion.div>
                                </Link>
                            ) : (

                                <motion.div
                                    key="search"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    Search Bond
                                </motion.div>

                            )}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Page;
