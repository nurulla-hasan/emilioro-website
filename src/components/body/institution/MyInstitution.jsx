import { RiTeamLine } from "react-icons/ri";
import { useState } from "react";
import { motion } from 'framer-motion';
import EditInstituteModal from "./modal/EditInstituteModal";

const AllInstitution = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState("Created");

    const data = {
        cards: [
            {
                id: "1",
                institutionName: 'ThinkTank Academy ',
                description: "Develop sustainable packaging solutions using biodegradable materials dsjh.",
                image: "/institute (1).png",
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
                status: ["Created", "Public"],
            },
            {
                id: "2",
                institutionName: 'ThinkTank Academy ',
                description: "Use recyclable materials to create packaging that can be reused .",
                image: "/institute (2).png",
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
                status: ["Created", "Public"],
            },
            {
                id: "3",
                institutionName: 'ThinkTank Academy ',
                description: "Implement minimalist design principles to reduce waste and improve efficiency.",
                image: "/institute (3).png",
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
                status: ["Joined", "Public"],
            },
            {
                id: "4",
                institutionName: 'ThinkTank Academy ',
                description: "Implement minimalist design principles to reduce waste and improve efficiency.",
                image: "/institute (1).png",
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
                status: ["Created", "Public"],
            },
            {
                id: "5",
                institutionName: 'ThinkTank Academy ',
                description: "Implement minimalist design principles to reduce waste and improve efficiency.",
                image: "/institute (2).png",
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
                status: ["Joined", "Public"],
            },
            {
                id: "6",
                institutionName: 'ThinkTank Academy ',
                description: "Implement minimalist design principles to reduce waste and improve efficiency.",
                image: "/institute (3).png",
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
                status: ["Created", "Public"],
            },
            {
                id: "7",
                institutionName: 'ThinkTank Academy ',
                description: "Implement minimalist design principles to reduce waste and improve efficiency.",
                image: "/institute (2).png",
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
                status: ["Joined", "Public"],
            },
        ]
    };

    const filteredCards = data.cards.filter(card =>
        card.status.includes(status)
    );

    return (
        <div className="relative">
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
                    <option value="Created">Created</option>
                    <option value="Joined">Joined</option>
                </select>
            </motion.div>
            <div className='mt-13.5 md:mt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                {
                    filteredCards.map((card) => (
                        <div
                            key={card.id}
                            className="lg:w-full mx-auto flex flex-col gap-2 shadow-[0px_15px_45px_0px_#CFC9DD99] bg-[#FFFFFF]"
                        >
                            <div>
                                <img src={card.image || "/placeholder.svg"} alt="image" className="w-full" />
                            </div>

                            <div className="flex flex-col gap-2 p-3 rounded-b-sm">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-[#1C4587] font-semibold mb-1">Institution name :</div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <div className="flex items-center gap-1">
                                                <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-[#1C4587] text-[9px] font-normal">
                                                    {card.institutionName}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <p className="text-[#6F6F6F] text-xs">{card.description}</p>

                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <h5 className="text-[13px] text-gray-800 font-semibold">Group A</h5>
                                            <h5 className="text-[13px] text-gray-800 font-semibold">Group B</h5>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <h5 className="text-[13px] text-gray-800 font-semibold">{card.skils[0]}</h5>
                                            <h5 className="text-[13px] text-gray-800 font-semibold">{card.skils[1]}</h5>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <h5 className="flex items-center justify-center gap-1 text-[13px] font-semibold">
                                                <img className="w-4" src="/participants.svg" alt="" />
                                                <span className="text-[10px] text-gray-500">{card.participant1} Participents</span>
                                            </h5>
                                            <h5 className="flex items-center justify-center gap-1 text-[13px] font-semibold">
                                                <img className="w-4" src="/participants.svg" alt="" />
                                                <span className="text-[10px] text-gray-500">{card.participant2} Participents</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <button className="px-4 py-2 items-center cursor-pointer bg-white rounded-sm font-medium border border-[#1C4587] text-[#1C4587] text-xs outline-none focus:ring-0">
                                        Delete
                                    </button>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-4 py-2 rounded-sm font-medium text-xs outline-none focus:ring-0"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <EditInstituteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
};

export default AllInstitution;