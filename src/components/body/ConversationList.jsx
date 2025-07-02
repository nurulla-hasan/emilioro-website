import Link from 'next/link';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoTimeOutline } from 'react-icons/io5';
import { IoMdShare } from "react-icons/io";




const ConversationList = () => {


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
            image: "/conversion3.png",
            duration: "1 hr 23m",
            type: "10+ audio"
        }

    ]

    return (

        <div className="mt-10">

            <div className="flex items-center justify-between mx-auto">

                <h1 className="text-xl w-60 lg:w-[500px] font-semibold text-primary">Discover Conversations You’ll Love</h1>
                <Link href="/chatting/allPlaylist" className="text-primary text-sm lg:text-md font-medium">
                    View all
                </Link>
            </div>


            <div className="grid items-center grid-cols-1 gap-2 mx-auto mt-2 rounded-lg lg:grid-cols-3 3xl:grid-cols-4 md:grid-cols-2 lg:gap-5 ">
                {conversations.map((conversation, index) => (
                    <div key={conversation.id} className='flex flex-col gap-2 p-2 border border-gray-300 rounded-sm'>
                        <div>
                            <img
                                src={conversation.image}
                                className='rounded-md w-full'
                                alt='image'
                            >
                            </img>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className="text-sm text-primary font-semibold mb-1">
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

                            <div className='flex items-center justify-between'>
                                <Link href={`/chatting/all-playlist/my-playlist/${conversation.id}`}>
                                    <button className="cursor-pointer bg-button text-white px-6 py-[6px] rounded-sm text-xs font-medium">
                                        View
                                    </button>
                                </Link>
                                <button className='flex gap-2 px-3 text-xs py-[4.5px] items-center bg-white  rounded-sm font-semibold border-2 border-primary to-[#3279EA] text-primary'>
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