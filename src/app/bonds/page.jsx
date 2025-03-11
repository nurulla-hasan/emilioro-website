"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen w-full md:w-2/3 mx-auto mt-10 px-4">

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
                className="max-w-4xl mt-10 md:mt-14 mx-auto shadow-[0px_3px_14px_1px_#d9e7ff] p-5 md:p-8 rounded-lg"
            >
                {/* Text */}
                <p className="text-center font-bold text-[#1C4587] mb-6">
                    Swap services & goods effortlessly. Connect, trade, and finalize your exchange with ease!
                </p>

                {/* Form */}
                <div>
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
                                    className="w-full p-2 border border-[#1C4587] rounded-lg text-xs"
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
                                    className="w-full p-2 border border-[#1C4587] rounded-lg text-xs"
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

                        <div className="flex justify-center items-center mt-6">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full md:w-2/5 bg-[#1C4587] text-white p-2 rounded-lg"
                            >
                                Search Bond
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Page;
