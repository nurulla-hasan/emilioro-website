import { RiTeamLine } from "react-icons/ri";
import { useState } from "react";
import EditInstituteModal from "./modal/EditInstituteModal";

const AllInstitution = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                status: ["Joined", "Public"],
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
        ]
    };


    return (
        <div className="relative">
            <div className='absolute -top-11 right-[40%] lg:-top-[84px] lg:right-0 border border-[#1e4a9b] px-1 rounded-sm bg-white'>
                <select className='text-xs outline-none py-1'>
                    <option value="">Created</option>
                    <option value="">Joined</option>
                </select>
            </div>
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                {data.cards.map((card) => (
                    <div key={card.id} className='lg:w-full mx-auto bg-[#FFFFFF] flex flex-col gap-2 shadow-[0px_15px_45px_0px_#CFC9DD99]'>
                        <div className='px-5'>
                            <img
                                className='w-full'
                                src={card.image}
                                alt='image'
                            >
                            </img>
                        </div>

                        <div className='flex flex-col gap-2 shadow-2xl p-3 rounded-b-sm'>
                            <div className='flex justify-between items-center'>
                                <div className="text-sm font-semibold mb-1">
                                    Institution name :
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">

                                        <div className="flex items-center gap-1">
                                            <p className=" rounded-sm px-1 py-[1] text-[#1C4587] text-sm font-semibold">{card.institutionName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='flex flex-col gap-4'>
                                <p className='text-[#6F6F6F] text-sm'>{card.description}</p>


                                <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between items-center'>
                                        <h5 className='text-[13px] font-semibold'>Group A</h5>
                                        <h5 className='text-[13px] font-semibold'>Group B</h5>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <h5 className='text-[13px] font-semibold'>{card.skils[0]}</h5>
                                        <h5 className='text-[13px] font-semibold'>{card.skils[1]}</h5>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <h5 className=' flex items-center justify-center gap-1 text-[13px] font-semibold'>
                                            <RiTeamLine color='#1C4587' />
                                            <span className='text-gray-500'>{card.participant1} Participent</span>
                                        </h5>
                                        <h5 className=' flex items-center justify-center gap-1 text-[13px] font-semibold'>
                                            <RiTeamLine color='#1C4587' />
                                            <span className='text-gray-500'>{card.participant2} Participent</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>


                                <button className='px-6 py-[6] items-center bg-white  rounded-lg font-semibold border-2 border-[#1C4587] to-[#3279EA] text-[#1C4587] text-[11px]'>
                                    Delete
                                </button>

                                <button onClick={() => setIsModalOpen(true)} className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-6 py-2 rounded-lg font-medium text-[11px]">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <EditInstituteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
};

export default AllInstitution;