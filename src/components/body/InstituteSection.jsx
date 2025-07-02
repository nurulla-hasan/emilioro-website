import Link from 'next/link';
import image from '../../../public/institute.png'
import { RiTeamLine } from "react-icons/ri";


const EcoFriendlyCards = () => {
    const data = {
        cards: [
            {
                id: "1",
                institutionName: 'ThinkTank Academy ',
                description: "Develop sustainable packaging solutions using biodegradable materials dsjh.",
                image: image,
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
            },
            {
                id: "2",
                institutionName: 'ThinkTank Academy ',
                description: "Use recyclable materials to create packaging that can be reused multiple times.",
                image: image,
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
            },
            {
                id: "3",
                institutionName: 'ThinkTank Academy ',
                description: "Implement minimalist design principles to reduce waste and improve efficiency.",
                image: image,
                skils: ["Innovators Hub", "Critical Thinkers"],
                participant1: "10",
                participant2: "5",
            }
        ]
    };

    return (
        <div className="mx-auto my-16 lg:w-3/4 w-5/6 lg:px-5">

            <div className="flex items-center justify-between mx-auto">

                <h1 className="lg:text-2xl text-lg my-5 font-bold text-blue-900">Browse & Join Institute</h1>
                <Link href="#" className="text-primary lg:text-lg text-sm  font-medium">
                    View all
                </Link>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                {data.cards.map((card) => (
                    <div key={card.id} className='flex flex-col gap-2 shadow-[0px_9px_23px_9px_#ebf4ff]'>
                        <div className='px-5'>
                            <img
                                src={card.image.src}
                                alt='image'
                            >
                            </img>
                        </div>

                        <div className='flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm'>
                            <div className='flex justify-between items-center'>
                                <div className="text-sm font-semibold mb-1">
                                    Institution name :
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">

                                        <div className="flex items-center gap-1">
                                            <p className=" rounded-sm px-1 py-[1] text-primary text-sm font-semibold">{card.institutionName}</p>
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
                                

                                <button className='px-6 py-[6] items-center bg-white  rounded-lg font-semibold border-2 border-primary to-[#3279EA] text-primary text-[11px] cursor-pointer'>
                                    View Details
                                </button>

                                <button className="cursor-pointer bg-button text-white px-6 py-2 rounded-lg font-medium text-[11px]">
                                    Join Institute
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default EcoFriendlyCards;