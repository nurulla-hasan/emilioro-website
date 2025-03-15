"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Search, Upload, Send } from 'lucide-react';
import titleImage from '../../../../public/institute.png'
import { BsMenuButtonWide } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";
import avatar from '../../../../public/heroImage.png'
import DetailsCreateGroupModal from "@/components/body/institution/modal/DetailsCreateGroupModal";







// Additional data for the interface
const producers = [
    { id: 1, name: "Ahamad musa", role: "CEO", online: true },
    { id: 2, name: "Ahamad musa", role: "General manager", online: true },
    { id: 3, name: "Ahamad musa", role: "Chief of engineer", online: false },
    { id: 4, name: "Ahamad musa", role: "work administrator", online: true },
    { id: 5, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true }
];

const users = [
    { id: 1, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true },
    { id: 2, name: "Ahamad musa", role: "Artist, Engineer, musician", online: false },
    { id: 3, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true },
    { id: 4, name: "Ahamad musa", role: "Artist, Engineer, musician", online: true },
    { id: 5, name: "Ahamad musa", role: "Artist, Engineer, musician", online: false }
];

const documents = [
    { id: 1, name: "Project Document", sharedBy: "MR. Sarwar" },
    { id: 2, name: "Project Document", sharedBy: "MR. Sarwar" },
    { id: 3, name: "Project Document", sharedBy: "MR. Sarwar" },
    { id: 4, name: "Project Document", sharedBy: "MR. Sarwar" }
];

const images = [
    { id: 1, src: titleImage, sharedBy: "MR. Sarwar" },
    { id: 2, src: titleImage, sharedBy: "MR. Sarwar" },
    { id: 3, src: titleImage, sharedBy: "MR. Sarwar" }
];

const messages = [
    {
        id: 1,
        text: "Hlw jhon, how can i help you??",
        sender: "Dindiniya",
        role: "General manager",
        time: "musa-9:30",
        avatar: titleImage,
        online: true
    },
    {
        id: 2,
        text: "Hlw jhon, how can i help you??",
        sender: "Dr.Dindiniya",
        role: "User",
        time: "you-9:30",
        avatar: titleImage,
        online: true,
        isRight: true
    },
    {
        id: 3,
        text: "Hlw jhon, how can i help you??",
        sender: "Dindiniya",
        role: "General manager",
        time: "musa-9:30",
        avatar: titleImage,
        online: true
    },
    {
        id: 4,
        text: "Hlw jhon, how can i help you??",
        sender: "Dr.Dindiniya",
        role: "User",
        time: "you-9:30",
        avatar: titleImage,
        online: true,
        isRight: true
    }
];

const categories = [
    "Sustainable Development & Climate Action",
    "Sustainable Development & Climate Action",
    "Sustainable Development & Climate Action",
];

// Project data from props
const projects = [
    {
        id: "1",
        title: "Eco-Friendly Packaging",
        status: ["Ongoing", "Public"],
        description: "Develop sustainable packaging solutions using biodegradable materials to reduce environmental impact. Focus on innovative designs that maintain product integrity while being eco-conscious.",
        author: "MR. Sarwar",
        authorRole: ["Owner"],
        image: titleImage,
        participant: "10",
        created: "22 may 2025"
    },
    {
        id: "2",
        title: "Recyclable Materials",
        status: ["Ongoing", 'Public'],
        description: "Use recyclable materials to create packaging that can be reused.",
        author: "MR. Golap",
        authorRole: ["Owner"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "3",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "4",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "5",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["User"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "6",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "7",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["User"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "8",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["User"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "9",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["User"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "10",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve.",
        author: "MS. Fatima",
        authorRole: ["User"],
        image: titleImage,
        participant: "10",
        created: "22 may 2023"
    }
];

const EcoFriendlyPackage = () => {
    const searchParams = useSearchParams();
    const projectId = searchParams.get("id");
    // const { register, handleSubmit } = useForm();
    // const [message, setMessage] = useState("");
    const [selected, setSelected] = useState(null);
    const [createGroupModal, setCreateGroupModal] = useState(false);



    // Find the current project
    const project = projects.find(p => p.id === projectId) || projects[0];

    // const onSubmit = (data) => {
    //     console.log("Message sent:", data.message);
    //     // setMessage("");
    // };

    return (
        <div className="lg:w-2/3 px-5 lg:px-0 mx-auto py-10">
            {/* Banner Image */}
            <div className="w-full h-[200px] relative mb-4">
                <Image
                    src={project.image || titleImage}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Header Section */}
            <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-xl font-semibold text-[#1C4587]">{project.title}</h1>
                        <BsMenuButtonWide size={20} color="#1C4587" />
                    </div>
                </div>
            </div>

            <p className="text-[10px] text-gray-500">
                {project.description}
            </p>

            <div className="shadow-md px-2 mt-6 border border-gray-200 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Producer Section */}
                    <div className="lg:col-span-3 bg-white rounded-lg">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-[#1C4587] font-medium">Innovators Hub</h2>
                                <RiEditLine onClick={() => setCreateGroupModal(true)} color="#1C4587" />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-8 pr-4 py-1 border border-[#95B5E9] rounded-md text-sm"
                                />
                                <Search className="absolute left-2.5 top-[7] h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            {producers.map((user) => (
                                <div key={user.id} className="flex items-center gap-3 p-[5] hover:bg-gray-50 border border-[#95B5E9] rounded-sm">
                                    <div className="relative">
                                        <img
                                            src={titleImage.src || "/placeholder.svg"}
                                            alt={user.name}
                                            className="rounded-full w-8 h-8"
                                        />
                                        {user.online && (
                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-xs ">{user.name}</p>
                                        <p className="text-[8px] text-gray-500">{user.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Files Section */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Documents */}
                        <div className="bg-white border rounded-b-md border-gray-100">
                            <div className="flex border-b border-gray-200 p-2 justify-between items-center mb-4">
                                <h2 className="text-[#1C4587] font-medium">All Topics</h2>
                            </div>
                            <div className="p-2">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center px-4 py-3 border border-gray-200 rounded-md mb-2 cursor-pointer transition ${selected === index ? "bg-blue-100 border-blue-300" : "bg-white"
                                            }`}
                                        onClick={() => setSelected(index)}
                                    >
                                        <span className="text-sm text-gray-800">{category}</span>
                                        <div className="flex items-center gap-2">
                                            <button className="text-red-500 hover:text-red-600">
                                                <AiOutlineDelete size={16} />
                                            </button>
                                            <button className="text-blue-500 hover:text-blue-600">
                                                <RiEditLine size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Users Section */}
                    <div className="lg:col-span-3 bg-white rounded-lg">
                        <div className="p-4">
                            <div className="flex flex-row-reverse justify-between items-center mb-3">
                                <h2 className="text-[#1C4587] font-medium">Critical Thinkers</h2>
                                <RiEditLine onClick={() => setCreateGroupModal(true)} color="#1C4587" />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-8 pr-4 py-1 border border-[#95B5E9] rounded-md text-sm"
                                />
                                <Search className="absolute left-2.5 top-[7] h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            {users.map((user) => (
                                <div key={user.id} className="flex items-center gap-3 p-[5] hover:bg-gray-50 border border-[#95B5E9] rounded-sm">
                                    <div className="relative">
                                        <img
                                            src={titleImage.src || "/placeholder.svg"}
                                            alt={user.name}
                                            className="rounded-full w-8 h-8"
                                        />
                                        {user.online && (
                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-xs ">{user.name}</p>
                                        <p className="text-[8px] text-gray-500">{user.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Discussion */}
                <div className="mt-6 border-t border-gray-200 mb-10">
                    <h2 className="text-[#1C4587] font-semibold ml-8 my-4">Mediators</h2>
                    <div className="bg-white p-4 rounded-lg">
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                            {projects.map((person, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <img
                                        src={avatar.src}
                                        alt={person.author}
                                        className="w-10 h-10 rounded-full border-2 border-blue-400"
                                    />
                                    <p className="text-xs font-semibold mt-2">{person.author}</p>
                                    <p className="text-[10px] text-gray-500">{person.authorRole[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}

            {createGroupModal && (
                <DetailsCreateGroupModal isOpen={createGroupModal} onClose={() => setCreateGroupModal(false)} />
            )}
        </div>
    );
};

export default function Wrapper() {
    return (
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <EcoFriendlyPackage />
        </Suspense>
    );
}
