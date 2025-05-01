"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { useState } from "react";
import { myProject } from "@/data/data";

const MyProject = () => {

    const pathname = usePathname()
    const isWorkspace = pathname.includes("/object/workspace");
    const [status, setStatus] = useState("Active");
    const router = useRouter();
    const filteredCards = myProject.filter(card =>
        status === "Active" ? card.status.includes("Ongoing") : card.status.includes(status)
    );
    return (
        <>
            <div className={`${isWorkspace ? "hidden" : ""}`}>
                <motion.div
                    className='absolute -top-11 right-[40%] md:-top-[71px] md:right-0 border border-[#1C4587] px-1 rounded-sm bg-white'
                    whileHover={{ scale: 1.05 }}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <select
                        className='text-xs text outline-none py-[6px] text-[#595D62]'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>
                </motion.div>
                <div className='mt-13.5 md:mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                    {filteredCards.map((card) => (
                        <motion.div
                            key={card.id}
                            className="lg:w-full mx-auto flex flex-col gap-2 shadow-[0px_15px_45px_0px_#CFC9DD99]"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                        >
                            <div>
                                <img
                                    src={card.image}
                                    alt="image"
                                    className="w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-[#1C4587] font-semibold mb-1">
                                        {card.title}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-[#1C4587] text-[9px] font-normal">
                                            {card.status[0]}
                                        </p>
                                        <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-[#1C4587] text-[9px] font-normal">
                                            {card.status[1]}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <p className="text-[#6F6F6F] text-xs">{card.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <img className="rounded-full w-[30px] h-[30px]" src={card.ownerImage} alt="image" />
                                            <div>
                                                <h5 className="text-[13px] text-gray-800">{card.author}</h5>
                                                <p className="text-[10px] text-gray-500">{card.authorRole}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <img className='w-4' src="/participants.svg" alt="" />
                                            <div className="flex gap-1 items-center text-[#6F6F6F] text-xs">
                                                <p>{card.participant}</p>
                                                <p>Participents</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 items-center justify-between mt-4">
                                    <button
                                        onClick={() => router.push(`/object/myProject/myProjectDetails?id=${card.id}`)}
                                        className="cursor-pointer w-full bg-white text-[#1C4587] border border-[#1C4587] text-xs px-4 py-[6px] rounded-sm font-medium"
                                    >
                                        View Details
                                    </button>

                                    <button
                                        onClick={() => router.push(`/object/workspace?id=${card.id}`)}
                                        className="cursor-pointer w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-4 py-[7px] rounded-sm font-medium"
                                    >
                                        Open Workspace
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>


            {/* for workspace  */}
            <div className={`${isWorkspace ? "" : "hidden"} space-y-5`}>
                {filteredCards.map((card) => (
                    <motion.div
                        key={card.id}
                        className="flex flex-col gap-2 mx-auto border border-gray-300 lg:w-full"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                    >

                        <div className="flex flex-col gap-2 bg-[#FFFFFF] p-3 rounded-b-sm">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-[#1C4587] font-semibold mb-1">
                                    {card.title}
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-[#1C4587] text-[9px] font-normal">
                                        {card.status[0]}
                                    </p>
                                    <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-[#1C4587] text-[9px] font-normal">
                                        {card.status[1]}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <button
                                    onClick={() => router.push(`/object/myProject/myProjectDetails?id=${card.id}`)}
                                    className="cursor-pointer bg-white text-[#1C4587] border border-[#1C4587] text-[8px] px-2 py-[3px] rounded-sm font-medium"
                                >
                                    View Details
                                </button>

                                <button
                                    onClick={() => router.push(`/object/workspace?id=${card.id}`)}
                                    className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-[8px] px-2 py-1 rounded-xs font-medium"
                                >
                                    Open Workspace
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </>
    );
};

export default MyProject;