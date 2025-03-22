"use client";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { useState } from "react";

const MyProject = () => {

    const [status, setStatus] = useState("Active");
    const router = useRouter();
    const data = {
        cards: [
            {
                id: "1",
                title: "Eco-Friendly Packaging",
                status: ["Ongoing", "Public"],
                description: "Develop sustainable packaging solutions using biodegradable materials dsjh.",
                author: "MR. Sarwar",
                authorRole: ["Owner"],
                image: "/project (1).png",
                ownerImage: "/avatar.png",
                participant: "10",
                created: "22 may 2023"
            },
            {
                id: "2",
                title: "Recyclable Materials",
                status: ["Completed", 'Public'],
                description: "Use recyclable materials to create packaging that can be reused.",
                author: "MR. Ahmed",
                authorRole: ["Owner"],
                image: "/project (2).png",
                ownerImage: "/avatar.png",
                participant: "10",
                created: "22 may 2023"
            },
            {
                id: "3",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve.",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: "/project (3).png",
                ownerImage: "/avatar.png",
                participant: "10",
                created: "22 may 2023"
            },
            {
                id: "4",
                title: "Minimalist Design",
                status: ['Completed', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve.",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: "/project (4).png",
                ownerImage: "/avatar.png",
                participant: "10",
                created: "22 may 2023"
            },
            {
                id: "5",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve .",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: "/project (5).png",
                ownerImage: "/avatar.png",
                participant: "10",
                created: "22 may 2023"
            },
            {
                id: "6",
                title: "Minimalist Design",
                status: ['Completed', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve .",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: "/project (6).png",
                ownerImage: "/avatar.png",
                participant: "10",
                created: "22 may 2023"
            },
            {
                id: "7",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve .",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: "/project (1).png",
                ownerImage: "/avatar.png",
                participant: "10",
                created: "22 may 2023"
            }
        ]
    };
    const filteredCards = data.cards.filter(card =>
        status === "Active" ? card.status.includes("Ongoing") : card.status.includes(status)
    );
    return (
        <>
            <motion.div
                className='absolute -top-11 right-[40%] md:-top-[84px] md:right-0 border border-[#1C4587] px-1 rounded-sm bg-white'
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
            <div className='mt-14 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                {filteredCards.map((card) => (
                    <div
                        key={card.id} className='lg:w-full mx-auto flex flex-col gap-2 shadow-[0px_15px_45px_0px_#CFC9DD99]'>
                        <div>
                            <img
                                src={card.image}
                                alt='image'
                                className='w-full'
                            >
                            </img>
                        </div>

                        <div className='flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm'>
                            <div className='flex justify-between items-center'>
                                <div className="text-sm text-[#1C4587] font-semibold mb-1">
                                    {card.title}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">

                                        <div className="flex items-center gap-2">
                                            <p
                                                className={`rounded-sm px-2 py-[1] text-[#1C4587] text-[10px] font-normal ${card.status[0].includes("Completed") ? "bg-[#11EB4233]" : "bg-[#9A9A9A33]"}`}
                                            >
                                                {card.status[0]}
                                            </p>
                                            <p className="bg-[#9A9A9A33] rounded-sm px-2 py-[1] text-[#1C4587] text-[10px] font-normal">{card.status[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='flex flex-col gap-4'>
                                <p className='text-[#6F6F6F] text-sm'>{card.description}</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img className='rounded-full w-[30px] h-[30px]' src={card.ownerImage} alt="image" />
                                        <div>
                                            <h5 className='text-[13px] text-gray-800'>{card.author}</h5>
                                            <p className='text-[10px] text-gray-500'>{card.authorRole}</p>
                                        </div>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <img src="/participants.svg" alt="" />
                                        <div className='flex gap-1 items-center text-[#6F6F6F] text-sm'>
                                            <p>{card.participant}</p>
                                            <p>Participents</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='flex justify-between items-center mt-4'>
                                <button
                                    onClick={() => router.push(`/object/myProject/myProjectDetails?id=${card.id}`)}
                                    className="cursor-pointer bg-white text-[#1C4587] border border-[#1C4587] text-xs px-4 py-[6px] rounded-lg font-medium"
                                >
                                    View Details
                                </button>

                                <button
                                    onClick={() => router.push(`/object/myProject/ecoFriendlyPackage?id=${card.id}`)}
                                    className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-4 py-2 rounded-lg font-medium">
                                    Open Workspace
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyProject;