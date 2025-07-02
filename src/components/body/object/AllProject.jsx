import { allProject } from '@/data/data';
import Image from 'next/image';


const AllProject = ({ setSelectedCardAllProject }) => {

    return (
        <div className='min-h-minus-header grid items-center grid-cols-1 gap-5 mt-10 rounded-lg xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {allProject.map((card) => (
                <div
                    onClick={() => setSelectedCardAllProject(card)}
                    key={card.id}
                    className="cursor-pointer lg:w-full mx-auto flex flex-col gap-2  group"
                >
                    <div className='aspect-[8/5] relative'>
                        <Image
                            src={card.image || "/placeholder.svg"}
                            alt="image"
                            fill
                            className="w-full group-hover:scale-98 duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-primary font-semibold mb-1">{card.title}</div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-1">
                                        <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-primary text-[9px] font-normal">
                                            {card.status[0]}
                                        </p>
                                        <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-primary text-[9px] font-normal">
                                            {card.status[1]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-[#6F6F6F] text-xs">{card.description}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img className="rounded-full w-[30px] h-[30px]" src={card.ownerImage || "/placeholder.svg"} alt="image" />
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
                        <div className="mt-4">
                            <button className="cursor-pointer bg-button text-white text-xs w-full py-2 rounded-xs font-medium">
                                Request to join
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProject;
