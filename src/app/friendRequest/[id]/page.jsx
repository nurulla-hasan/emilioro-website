"use client"
import { Camera, Calendar } from "lucide-react"
import TiptapEditor from "@/components/body/profile/editor/TiptapEditor";
import ReportModal from "@/components/body/profile/modal/ReportModal";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
const RequestProfile = () => {
    const [modal, setModal] = useState(false);
    const { id } = useParams();



    const profileData = {
        profile: {
            name: "Mr. Jhon",
            username: "jhon_doe",
            bio: "Heart full of love, soul full of dreams. Believer in kindness, good vibes, and the power of a smile. Living, loving, and laughing through every moment. 🧡",
            followers: 8.1,
            profile_picture: "/heroImage.png",
            cover_photo:
                "/heroImage.png",
            tags: ["Artist", "Musician", "Vlogger"],
        },
        social_links: [
            {
                platform: "Instagram",
                url: "https://instagram.com/jhon_oz",
            },
            {
                platform: "Facebook",
                url: "https://facebook.com/jhon_oz",
            },
        ],
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
        life_story: {
            events: [
                {
                    title: "The Day I Graduated High School",
                    date: "2 June 2015",
                },
                {
                    title: "The Day I Graduated High School",
                    date: "2 June 2015",
                },
                {
                    title: "The Day I Graduated High School",
                    date: "2 June 2015",
                },
                {
                    title: "The Day I Graduated High School",
                    date: "2 June 2015",
                },
                {
                    title: "The Day I Graduated High School",
                    date: "2 June 2015",
                },
            ],
            story_text:
                "I still remember the excitement and nervousness bubbling inside me as I stepped off the plane at Kansai International Airport. It was my first-ever solo trip, and Japan had always been a dream destination. With my backpack strapped on, I took a deep breath, ready to embrace the once-in-a-lifetime adventure...",
        },
        relatives: [
            { name: "MR. Sarwar", relation: "Father", avatar: "/heroImage.png" },
            { name: "Mrs. Nahid", relation: "Grandma", avatar: "/heroImage.png" },
            { name: "MR. Dindiniya", relation: "Aunt", avatar: "/heroImage.png" },
            { name: "MR. Fahad", relation: "Cousin", avatar: "/heroImage.png" },
        ],
        extended_relatives: [
            { name: "Dindla", relation: "Mother", avatar: "/heroImage.png" },
            { name: "Ahmad Musa", relation: "Grandpa", avatar: "/heroImage.png" },
            { name: "Mr. Aman", relation: "Uncle", avatar: "/heroImage.png" },
            { name: "Yolanda", relation: "Aunt", avatar: "/heroImage.png" },
        ],
    }

    // const friend = profileData.friends.find(friend => friend.id === Number(id));

    return (
        <div className="lg:w-8/11 px-5 my-5 mx-auto">
            {/* Cover Photo */}
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src="https://s3-alpha-sig.figma.com/img/9e7b/6664/e1651484ba63a7320eab06aee0e22f82?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jW4eSPYWmb4arpp4Erxw12Ex-kNbWM2hYQK6NItlyYX2nnLv4ClcovoGomDs~r~xcQeykZBXs-nR83SUEeCGCdQJd3uWQaBB1k4DtnBXD71k5o0j2Drn3GIIfLfJZ5v~7sOh2jX11lbfTC9tC83V9xaoRr3sUQfr5fjDVd731jyekx8CLK6puOqPFnU~KfZnJQaAuciAx8fZ--7QhkMbO~scrOsEuI8MO2VzvTYoY8VmIl3TkjXyX0MykJiIEVT6O1lxWfoE1inWCIRki8aJWb7R6Yr8-fhemqmzcWfeYEFxAWTVraSOiOPW3fHF77N6vIZLEEQpyedPkVOMfbbSIA__"
                    alt="Cover"
                    className="w-full h-48 md:h-64 object-cover"
                />
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm cursor-pointer">
                    <Camera size={18} className="text-gray-600" />
                </button>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-between relative -mt-10 md:-mt-10 px-5">
                <div className="">
                    <div className="relative inline-block ">
                        <img
                            src="/father.jpg"
                            alt={profileData.profile.name}
                            className="w-20 h-20  rounded-full border-4 border-white object-cover"
                        />
                        <div className="text-center text-sm font-semibold">
                            <h1>Father</h1>
                        </div>
                    </div>
                </div>
                <div className="-mt-8">
                    <div className="relative inline-block">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/e5da/1998/39341e1805169627958a6a8800fe8932?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hlkaQfj99rnLgSUfcVYR3D~fluNrVJl1xDB1YsvFgtAXLiGprph~TB5DRe3iet1bIR9xzDLuW~2A~cnrGSFWumMLKiYdkJZIvTtisQ8r2M9MlYOaslWzEYvu3ph3nLKxu8CsBqEcSGH~FK4QGKVZs1guaqeCz4WuobfDJNo4yj1oluyTFMazR9ZphjZMlqTuTel8-t42xugpGvcoYHvxVgsLMyH7BRLA61ZbWTVL2l7ZBlRVYORM4mI3RMbZl18xqSODtWLXH4QA1k1Rb9eyN5HQEndIQU0AmIfaU6Fcru-xhhB8Nl33EAphQ3Sz-jzX4SL1rg6i-TnjgXLgkA2JIA__"
                            alt={profileData.profile.name}
                            className="w-32 h-32 rounded-full border-4 border-white object-cover"
                        />
                        <button className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-sm cursor-pointer">
                            <Camera size={16} className="text-gray-600" />
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="relative inline-block ">
                        <img
                            src="/mother.jpg"
                            alt={profileData.profile.name}
                            className="w-20 h-20 rounded-full border-4 border-white object-cover"
                        />
                        <div className="text-center text-sm font-semibold">
                            <h1>Mother</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="mt-4 ">
                <div className="flex flex-col gap-3 w-full items-center justify-center text-center">
                    <div className="relative">
                        <div>
                            <h1 className="text-2xl font-bold text-[#1C4587]">{profileData.profile.name}</h1>

                            <div className="flex gap-3 items-center justify-center mt-2">
                                <button className="border border-[#1C4587] text-[#1C4587] gap-1 flex items-center bg-white text-xs px-2 py-0.5 rounded-sm"> Reject
                                </button>
                                <button className="bg-button gap-1 flex items-center text-white text-xs px-2 py-[3px] rounded-sm">
                                    Accept
                                </button>
                                <img
                                    onClick={() => setModal(true)}
                                    className="w-5 h-5 cursor-pointer"
                                    src="/requestMenu.svg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                            {profileData.profile.tags.map((tag, index) => (
                                <span key={index} className="bg-blue-50 text-[#1C4587] text-xs px-3 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex flex-col justify-center items-center text-center">
                    <p className="text-gray-800 text-sm">{profileData.profile.followers}k Followers</p>
                </div>

                <div className="p-4">
                    <div className="hidden">
                        {/* Text Editor Toolbar */}
                        <TiptapEditor />
                    </div>
                    <p className="text-xs text-gray-700 text-center">
                        I still remember the excitement and nervousness bubbling inside me as I stepped off the plane at Kansai International Airport. It was my first-ever solo trip, and Japan had always been a dream destination. With my backpack strapped on, I took a deep breath, ready to embrace the adventure ahead. The first challenge came almost immediately—navigating the train system. I had researched it a hundred times before coming, but standing in front of a ticket machine with Japanese characters flashing before my eyes was another story. After fumbling for a few minutes, a kind elderly man noticed my struggle and helped me purchase the right ticket. His warm smile and patient guidance reassured me that I was in good hands. On my second day in Kyoto, I visited the iconic Fushimi Inari Shrine. As I walked through the thousands of vermillion torii gates, I felt an overwhelming sense of peace. The further I climbed, the quieter it became. I stopped at a secluded spot, sat on a stone bench, and watched the sunlight filter through the trees.
                    </p>
                </div>
            </div>

            {/* Social Links */}

            <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="xl:text-2xl text-xl font-semibold text-[#1C4587]">Social Links

                    </h2>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <a
                            href={profileData.social_links[0].url}
                            className="text-gray-600 text-sm hover:underline flex items-center"
                        >
                            <div className="w-8 h-8 mr-2 flex items-center justify-center rounded-full">
                                <img src="https://s3-alpha-sig.figma.com/img/dc2b/20fe/0414c863c24bdf59fc0aeac94a0dc36e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r1yDbORCjQjXXbdUDIXh5JMdmCAvj1OJYzaM2QOHSnxBN-2y99zs4INqAVUDSgUmaAqA~b6oPvH~Ej9~1zKOa7TwF1u4FZuLSTCG1dyWhFJWrb8XQUA3YDLMb2Po185mVbdLdM9ywysL4THMq7EFbiT2lbExXkLPlGa9f9V5TfVVZ2YaOHLuI364PrJMoVzBzJTssI10n~SW9boTjcAoPhUmVpTccLcFNtIZObNAyTcQ8x-a09EOtbdeA46ywUWumd2xUm5gDnE0868QoaJkB9sA8wr8D15HCTCCAjhAZY2cz1TGwYbSyX9MveYpjVSDCiBSHDjV3HV~~MPUqi8Z1A__" alt="" />
                            </div>
                            {profileData.social_links[0].url}
                        </a>
                    </div>

                    <div className="flex justify-between items-center">
                        <a
                            href={profileData.social_links[1].url}
                            className="text-gray-600 text-sm hover:underline flex items-center"
                        >
                            <div className="w-8 h-8 mr-2 flex items-center justify-center rounded-full">
                                <img className="w-7 h-7" src="/fb.svg" alt="" />
                            </div>
                            {profileData.social_links[1].url}
                        </a>
                        <div className="flex gap-2 *:cursor-pointer">
                            <button className="text-red-500">
                                <img src="/delete.svg" alt="" />
                            </button>
                            <button className="text-blue-800">
                                <img src="/edit.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Friends */}
            <div className="mt-8">
                {/* Friends Section */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="xl:text-2xl text-xl font-semibold text-[#1C4587]">Friends</h2>
                        <a href="#" className="text-[#1C4587] text-sm hover:underline">
                            view more
                        </a>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-2 gap-y-4 md:w-3/4 mx-auto">
                        {profileData.friends.map((friend, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className=" rounded-full border border-gray-200 overflow-hidden mb-2">
                                    <img
                                        src={
                                            friend.avatar ||
                                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wFgfsFe9yFppBiQ9HxG5BtxnZXMP61.png"
                                        }
                                        alt={friend.name}
                                        className=" object-cover w-12 h-12"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wFgfsFe9yFppBiQ9HxG5BtxnZXMP61.png"
                                        }}
                                    />
                                </div>
                                <p className="text-md font-medium text-center">{friend.name}</p>
                                <p className="text-sm text-gray-500 text-center">{friend.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>

            {/* Relatives & Relationships */}
            <div className="mt-8">
                <div className="mt-12 mb-8">
                    {/* Header */}
                    <div className="flex flex-col gap-2 md:flex-row justify-between items-center mb-6">
                        <h2 className="xl:text-2xl text-lg font-semibold text-[#1C4587]">Relatives & Relationships</h2>
                    </div>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left column - Relatives */}
                        <div className="space-y-3 shadow-[0px_19px_48px_1px_#CFC9DDB2] p-4 rounded-lg">
                            {profileData.relatives.map((relative, index) => (
                                <div key={index} className="flex justify-between items-center bg-[#D5E2F6] p-2 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={
                                                relative.avatar ||
                                                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png"
                                            }
                                            alt={relative.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png"
                                            }}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{relative.name}</p>
                                            <p className="text-xs text-gray-500">{relative.relation}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 *:cursor-pointer">
                                        <button className="text-[#1C4587] flex items-center text-xs gap-1">
                                            <img src="/messenger.svg" alt="" /> Chat now
                                        </button>
                                        <button className="text-red-500">
                                            <img src="/delete.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right column - Extended Relatives */}
                        <div className="space-y-3 shadow-[0px_19px_48px_1px_#CFC9DDB2] p-4 rounded-lg">
                            {profileData.extended_relatives.map((relative, index) => (
                                <div key={index} className="flex justify-between items-center bg-[#D5E2F6] p-2 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={
                                                relative.avatar ||
                                                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png"
                                            }
                                            alt={relative.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png"
                                            }}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{relative.name}</p>
                                            <p className="text-xs text-gray-500">{relative.relation}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 *:cursor-pointer">
                                        <button className="text-[#1C4587] flex items-center text-xs gap-1">
                                            <img src="/messenger.svg" alt="" /> Chat now
                                        </button>
                                        <button className="text-red-500">
                                            <img src="/delete.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ReportModal isOpen={modal} onClose={() => setModal(false)} />
        </div>

    );
};

export default RequestProfile;