"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { useState } from "react";
import { myProject } from "@/data/data";
import Image from "next/image";

const MyProject = () => {

    const pathname = usePathname()
    const isWorkspace = pathname.includes("/objects/workspace");

    const [status, setStatus] = useState("Active");
    const router = useRouter();
    const filteredCards = myProject.filter(card =>
        status === "Active" ? card.status.includes("Ongoing") : card.status.includes(status)
    );

    console.log('my project page')
    return (
        <div className="min-h-minus-header">
            <div className={`${isWorkspace ? "hidden" : ""} relative`}>

                <div
                    className='w-fit absolute -top-10 md:-top-16 md:right-0 right-32 border border-primary px-1 rounded-sm bg-white'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <select
                        className='text-xs text outline-none py-[2px] md:py-[6px] text-[#595D62]'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className='mt-13.5 md:mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                    {filteredCards.map((card) => (
                        <div
                            key={card.id}
                            className="lg:w-full mx-auto flex flex-col gap-2 group"
                        >
                            <div className="aspect-[8/5] relative">
                                <Image
                                    onClick={() => router.push(`/objects/workspace?id=${card.id}`)}
                                    src={card.image}
                                    fill
                                    alt="image"
                                    className="w-full cursor-pointer group-hover:scale-98 duration-300"
                                />
                            </div>

                            <div className="flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-primary font-semibold mb-1">
                                        {card.title}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className={`bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-primary text-[9px] font-normal ${card.status[0] === 'Completed' ? 'bg-green-100 text-green-800' : ''}`}>
                                            {card.status[0]}
                                        </p>
                                        <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-primary text-[9px] font-normal">
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
                                        onClick={() => router.push(`/objects/my-projects/my-project-details?id=${card.id}`)}
                                        className="cursor-pointer w-full bg-white text-primary border border-primary text-[10px] px-4 py-[6px] rounded-xs font-medium"
                                    >
                                        View Details
                                    </button>

                                    <button
                                        onClick={() => router.push(`/objects/workspace?id=${card.id}`)}
                                        className="cursor-pointer w-full bg-button text-white text-[10px] px-4 py-[7px] rounded-xs font-medium"
                                    >
                                        Open Workspace
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


            {/* for workspace  */}
            <div className={`${isWorkspace ? "" : "hidden"} space-y-5 relative`}>
                <div
                    className='absolute -top-8 right-0 bg-white'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <select
                        className='text-[10px] w-14 outline-none text-[#595D62] border border-gray-400 rounded-xs overflow-hidden'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                {filteredCards.map((card) => (
                    <motion.div
                        key={card.id}
                        className="flex flex-col gap-2 mx-auto border rounded-sm overflow-hidden border-gray-300 lg:w-full"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                    >

                        <div className="flex flex-col gap-2 bg-[#FFFFFF] p-3 rounded-b-sm">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-primary font-semibold mb-1">
                                    {card.title}
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className={`bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-primary text-[9px] font-normal ${card.status[0] === 'Completed' ? 'bg-green-100 text-green-800' : ''}`}>
                                        {card.status[0]}
                                    </p>
                                    <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-primary text-[9px] font-normal">
                                        {card.status[1]}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <button
                                    onClick={() => router.push(`/objects/my-projects/my-project-details?id=${card.id}`)}
                                    className="cursor-pointer bg-white text-primary border border-primary text-[8px] px-2 py-[3px] rounded-sm font-medium"
                                >
                                    View Details
                                </button>

                                <button
                                    onClick={() => router.push(`/objects/workspace?id=${card.id}`)}
                                    className="cursor-pointer bg-button text-white text-[8px] px-2 py-1 rounded-xs font-medium"
                                >
                                    Open Workspace
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MyProject;