import Link from 'next/link';
import convertionImage from '../../../public/conversion.png'
import Image from 'next/image';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoTimeOutline } from 'react-icons/io5';
import { IoMdShare } from "react-icons/io";




const ConversationList = () => {


    const conversations = [

        {
            id: 1,
            title: "Family Conversation",
            image: convertionImage,
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 2,
            title: "Family Conversation",
            image: convertionImage,
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 3,
            title: "Family Conversation",
            image: convertionImage,
            duration: "1 hr 23m",
            type: "10+ audio"
        }

    ]

    return (

        <div className="mx-auto my-16 lg:w-3/4 w-5/6 lg:px-5">

            <div className="flex items-center justify-between mx-auto">

                <h1 className="lg:text-2xl text-lg my-5 font-bold text-[#1C4587]">Discover Conversations</h1>
                <Link href="#" className="text-[#1C4587] text-sm lg:text-lg font-medium">
                    View all
                </Link>
            </div>





            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-8 lg:gap-5 mx-auto rounded-lg ">
                {conversations.map((conversation, index) => (
                    <div key={conversation.id} className='flex flex-col gap-2'>
                        <div>
                            <img
                                src={conversation.image.src}
                                alt='image'
                            >
                            </img>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <div className="text-sm text-[#1C4587] font-semibold mb-1">
                                    {conversation.title}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">

                                        <div className="flex items-center gap-1">
                                            <HiOutlineMenuAlt2 size={12} color="#1C4587" />
                                            <p className=" text-[12px] text-gray-600">{conversation.type}</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <IoTimeOutline size={14} color="#1C4587" />
                                            <p className="text-[12px] text-gray-600">
                                                {conversation.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-6 py-1 rounded-lg font-medium">
                                    View
                                </button>

                                <button className='flex gap-2 px-3 py-1 items-center bg-white  rounded-lg font-semibold border-2 border-[#1C4587] to-[#3279EA] text-[#1C4587]'>
                                    < IoMdShare />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ConversationList;