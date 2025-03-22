
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdShare } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';
import { AiOutlineEdit } from "react-icons/ai";
import Link from 'next/link';

const FavoritePlaylist = () => {

    const conversations = [

        {
            id: 1,
            title: "Family Conversation",
            image: "/conversion1.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 2,
            title: "Family Conversation",
            image: "/conversion2.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 3,
            title: "Family Conversation",
            image: "/conversion3.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 4,
            title: "Family Conversation",
            image: "/conversion1.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },
        {
            id: 5,
            title: "Family Conversation",
            image: "/conversion2.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        },

    ]

    return (
        <div>
            {/* Cards */}
            <div className="xl:w-8/12 lg:w-10/12 mx-auto xl:my-5 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:justify-between justify-items-center items-center lg:px-0 px-5">
                {conversations.map((conversation, index) => (
                    <div key={conversation.id} className='flex flex-col gap-2'>
                        <div>
                            <img
                                src={conversation.image}
                                className='rounded-md'
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
                                <Link href={`/chatting/allPlaylist/myPlaylist/${conversation.id}`}>
                                    <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-6 py-[6px] rounded-lg font-medium">
                                        View
                                    </button>
                                </Link>

                                <button className='flex gap-2 px-3 py-1 items-center bg-white  rounded-lg font-semibold border-2 border-[#1C4587] to-[#3279EA] text-[#1C4587]'>
                                    < AiOutlineEdit />
                                    <span>Edit</span>
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

export default FavoritePlaylist;