import { Calendar } from "lucide-react";
import Link from "next/link";


const PeoplePage = () => {

    const profileData = {
        friends: [
            { id: 1, name: "MR. Sarwar", role: "Artist", avatar: "/heroImage.png" },
            { id: 2, name: "MR. Fahad", role: "Engineer", avatar: "/heroImage.png" },
            { id: 3, name: "Ahmad Musa", role: "Emam", avatar: "/heroImage.png" },
            { id: 4, name: "MR. TA Emon", role: "Biker", avatar: "/heroImage.png" },
            { id: 5, name: "MR. Mehehi", role: "Artist", avatar: "/heroImage.png" },
            { id: 6, name: "MR. Dindinia", role: "Artist", avatar: "/heroImage.png" },
            { id: 7, name: "MR. Nahid", role: "Scientist", avatar: "/heroImage.png" },
            { id: 8, name: "Ahmad Mus", role: "Emam", avatar: "/heroImage.png" },
        ],
    };

    return (
        <div className='lg:w-5/6 xl:w-6/9 px-5 my-10 mx-auto'>
            <div className="mt-8">
                {/* Friends Section */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="xl:text-2xl text-xl font-semibold text-[#1C4587]">Friends</h2>
                        <a href="#" className="text-[#1C4587] text-sm hover:underline">
                            view more
                        </a>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-2 gap-y-4 mx-auto">

                        {profileData.friends.map((friend, index) => (
                            <Link key={friend.id} href={`/friendRequest/${friend.id}`}>
                                <div key={index} className="flex flex-col items-center">
                                    <div className=" rounded-full border border-gray-200 overflow-hidden mb-2">
                                        <img
                                            src={
                                                friend.avatar ||
                                                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wFgfsFe9yFppBiQ9HxG5BtxnZXMP61.png"
                                            }
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <p className="text-md font-medium text-center">{friend.name}</p>
                                    <p className="text-sm text-gray-500 text-center">{friend.role}</p>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeoplePage;