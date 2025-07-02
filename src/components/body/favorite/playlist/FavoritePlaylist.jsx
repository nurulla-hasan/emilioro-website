
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdShare } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';
import { AiOutlineEdit } from "react-icons/ai";
import Link from 'next/link';
import { conversations } from '@/data/data';

const FavoritePlaylist = () => {

    return (
        <div className=''>
            {/* Cards */}
            <div className="grid items-center grid-cols-1 gap-2 mx-auto xl:my-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 lg:justify-between justify-items-center ">
                {conversations.map((conversation, index) => (
                    <div key={conversation.id} className='flex flex-col gap-2 p-2 border border-gray-300 rounded-sm'>
                        <div>
                            <img
                                src={conversation.image}
                                className='rounded-sm h-[180px] w-[350px]'
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
                                <Link href={`/chatting/allPlaylist/myPlaylist/${conversation.id}`}>
                                    <button className="cursor-pointer bg-button text-white px-6 py-[6px] rounded-sm text-xs font-medium">
                                        View
                                    </button>
                                </Link>

                                <button className='flex cursor-pointer gap-2 px-3 text-xs py-[4.5px] items-center bg-white  rounded-sm font-semibold border-2 border-primary to-[#3279EA] text-primary'>
                                    < AiOutlineEdit />
                                    <span>Edit</span>
                                </button>
                                <button className='flex cursor-pointer gap-2 px-3 text-xs py-[4.5px] items-center bg-white  rounded-sm font-semibold border-2 border-primary to-[#3279EA] text-primary'>
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