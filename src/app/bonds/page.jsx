"use client"
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
        <div className="min-h-screen w-2/3 mx-auto mt-10">

            <div className="flex justify-between">
                <h1 className="text-xl text-[#1C4587] font-bold mb-4">Exchange Services & Goods</h1>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-500 font-semibold mb-4 cursor-pointer"
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
                className="max-w-4xl mt-14 mx-auto shadow-[0px_0px_33px_14px_#ebf4ff]  p-5 rounded-lg "
            >


                {/*  */}
                <p className="text-center font-bold text-[#1C4587] mb-6">
                    Swap services & goods effortlessly. Connect, trade, and finalize your exchange with ease!
                </p>

                {/* form */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-5 items-center">
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
                                    className="w-full p-2 *:p-2 border border-[#1C4587] rounded-lg text-xs"
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

                            {/* Get  */}
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

                        <div className="flex justify-center items-center mt-8">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-2/5 bg-[#1C4587] text-white p-2 rounded-lg"
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