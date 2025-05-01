import { allProject } from '@/data/data';
import { motion } from 'framer-motion';


const AllProject = ({ setSelectedCardAllProject }) => {
    

    return (
        <div className='grid items-center grid-cols-1 gap-5 mt-10 rounded-lg xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {allProject.map((card) => (
                <motion.div
                    onClick={() => setSelectedCardAllProject(card)}
                    key={card.id}
                    className="cursor-pointer lg:w-full mx-auto flex flex-col gap-2 shadow-[0px_15px_45px_0px_#CFC9DD99] "
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                >
                    <div>
                        <img src={card.image || "/placeholder.svg"} alt="image" className="w-full" />
                    </div>

                    <div className="flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-[#1C4587] font-semibold mb-1">{card.title}</div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-1">
                                        <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-[#1C4587] text-[9px] font-normal">
                                            {card.status[0]}
                                        </p>
                                        <p className="bg-[#9A9A9A33] rounded-xs px-1 py-[1] text-[#1C4587] text-[9px] font-normal">
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
                            <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs w-full py-2 rounded-sm font-medium">
                                Request to join
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default AllProject;
