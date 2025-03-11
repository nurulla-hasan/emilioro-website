import { RiTeamLine } from "react-icons/ri";
import image from '../../../../public/institute.png'

const AllInstitution = () => {

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
                description: "Use recyclable materials to create packaging that can be reused .",
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
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
            {data.cards.map((card) => (
                <div key={card.id} className='w-[400] lg:w-full mx-auto flex flex-col gap-2 shadow-[0px_9px_23px_9px_#ebf4ff]'>
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
                                View Details
                            </button>

                            <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-6 py-2 rounded-lg font-medium text-[11px]">
                                Join Institute
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllInstitution;