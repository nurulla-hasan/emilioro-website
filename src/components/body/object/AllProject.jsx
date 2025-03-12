import { motion } from 'framer-motion';
import image from '../../../../public/browse.png';
import { RiTeamLine } from "react-icons/ri";


const AllProject = ({ setSelectedCard }) => {
    const data = {
        cards: [
            {
                id: "1",
                title: "Eco-Friendly Packaging",
                status: ["Ongoing", "Public"],
                description: "Develop sustainable packaging solutions using biodegradable materials dsjh.",
                author: "MR. Sarwar",
                authorRole: ["Owner"],
                image: image,
                participant: "10",
                created : "22 may 2023"
            },
            {
                id: "2",
                title: "Recyclable Materials",
                status: ["Ongoing", 'Public'],
                description: "Use recyclable materials to create packaging that can be reused.",
                author: "MR. Ahmed",
                authorRole: ["Owner"],
                image: image,
                participant: "10",
                created : "22 may 2023"
            },
            {
                id: "3",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve.",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: image,
                participant: "10",
                created : "22 may 2023"
            },
            {
                id: "4",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve.",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: image,
                participant: "10",
                created : "22 may 2023"
            },
            {
                id: "5",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve .",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: image,
                participant: "10",
                created : "22 may 2023"
            },
            {
                id: "6",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve .",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: image,
                participant: "10",
                created : "22 may 2023"
            },
            {
                id: "7",
                title: "Minimalist Design",
                status: ['Ongoing', 'Public'],
                description: "Implement minimalist design principles to reduce waste and improve .",
                author: "MS. Fatima",
                authorRole: ["Owner"],
                image: image,
                participant: "10",
                created : "22 may 2023"
            }
        ]
    };

    return (
        <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
            {data.cards.map((card) => (
                <motion.div
                    onClick={() => setSelectedCard(card)}
                    key={card.id}
                    className='cursor-pointer w-[400] lg:w-full mx-auto flex flex-col gap-2 shadow-[0px_3px_14px_1px_#d9e7ff]'
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div>
                        <img
                            src={card.image.src || "/placeholder.svg"}
                            alt='image'
                        />
                    </div>

                    <div className='flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm'>
                        <div className='flex justify-between items-center'>
                            <div className="text-sm text-[#1C4587] font-semibold mb-1">
                                {card.title}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-1">
                                        <p className="bg-[#9A9A9A33] rounded-sm px-1 py-[1] text-[#1C4587] text-[10px] font-normal">{card.status[0]}</p>
                                        <p className="bg-[#9A9A9A33] rounded-sm px-1 py-[1] text-[#1C4587] text-[10px] font-normal">{card.status[1]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#6F6F6F] text-sm'>{card.description}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 items-center'>
                                    <img className='rounded-full w-[30px] h-[30px]' src={card.image.src || "/placeholder.svg"} alt="image" />
                                    <div>
                                        <h5 className='text-[13px] text-gray-800'>{card.author}</h5>
                                        <p className='text-[10px] text-gray-500'>{card.authorRole}</p>
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <RiTeamLine color='#1C4587' />
                                    <div className='flex gap-1 items-center text-[#6F6F6F] text-sm'>
                                        <p>{card.participant}</p>
                                        <p>Participents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-4 py-2 rounded-lg font-medium">
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
