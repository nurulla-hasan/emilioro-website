"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Search, Upload, Send } from 'lucide-react';
import titleImage from '../../../../../public/browse.png'
import { BsMenuButtonWide } from "react-icons/bs";
import { GoFileDirectoryFill } from "react-icons/go";





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
    }
];

const EcoFriendlyPackage = () => {
    const searchParams = useSearchParams();
    const projectId = searchParams.get("id");
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState("");

    // Find the current project
    const project = projects.find(p => p.id === projectId) || projects[0];

    const onSubmit = (data) => {
        console.log("Message sent:", data.message);
        setMessage("");
    };

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

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="border border-blue-400 rounded-full ">
                            <img
                                src={titleImage.src || "/placeholder.svg"}
                                alt={project.author}
                                className="rounded-full h-8 w-8"
                            />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-700">{project.author}</p>
                            <p className="text-[10px] text-gray-500">{project.authorRole}</p>
                        </div>
                    </div>

                    <div className=" border border-gray-400 rounded-md px-4">
                        <select className="text-xs text-gray-600 outline-none focus:ring-0 focus:border-transparent">
                            <option className="" value="">Public</option>
                            <option className="" value="">Privet</option>
                        </select>
                    </div>
                </div>
                <p className="text-end text-xs mt-2 text-gray-500">created {project.created}</p>
            </div>

            <p className="text-[10px] text-gray-500">
                {project.description}
            </p>

            <div className="shadow-md px-2 mt-6 border border-gray-200 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Producer Section */}
                    <div className="lg:col-span-3 bg-white rounded-lg">
                        <div className="p-4">
                            <h2 className="text-[#1C4587] font-medium mb-3">Producer</h2>
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
                                <h2 className="text-[#1C4587] font-medium">All Files</h2>
                            </div>

                            <div className="mb-8 p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-medium text-[#1C4587]">Document</h3>
                                    <button className="text-[#1C4587] text-xs px-4 py-1 border rounded-md flex items-center gap-2">
                                        <Upload className="h-3 w-3" />
                                        Upload file
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {documents.map((doc) => (
                                        <div key={doc.id} className="flex flex-col items-center border border-gray-300 rounded-md p-1 ">
                                            <div className="w-16 flex items-center justify-center mb-2">
                                                <GoFileDirectoryFill size={30} color="#FFD483" />
                                            </div>
                                            <p className="text-[10px] font-medium text-center">{doc.name}</p>
                                            <p className="text-[8px] text-gray-500">shared by {doc.sharedBy}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Images */}
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-medium">Image</h3>
                                    <button className="text-[#1C4587] text-xs px-4 py-1 border rounded-md flex items-center gap-2">
                                        <Upload className="h-3 w-3" />
                                        Upload file
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 justify-center items-center gap-4">
                                    {images.map((img) => (
                                        <div key={img.id} className="rounded-md">
                                            <Image
                                                src={img.src || "/placeholder.svg"}
                                                alt="Project image"
                                                width={300}
                                                height={300}
                                                objectFit="cover"
                                                className="rounded-md"
                                            />
                                            <div className="text-[10px] p-1">
                                                <p>Project Document</p>
                                                <p className="text-gray-500 text-[8px]">shared by {img.sharedBy}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Images */}
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-medium">Image</h3>
                                    <button className="text-[#1C4587] text-xs px-4 py-1 border rounded-md flex items-center gap-2">
                                        <Upload className="h-3 w-3" />
                                        Upload file
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 justify-center items-center gap-4">
                                    {images.map((img) => (
                                        <div key={img.id} className="rounded-md">
                                            <Image
                                                src={img.src || "/placeholder.svg"}
                                                alt="Project image"
                                                width={300}
                                                height={300}
                                                objectFit="cover"
                                                className="rounded-md"
                                            />
                                            <div className="text-[10px] p-1">
                                                <p>Project Document</p>
                                                <p className="text-gray-500 text-[8px]">shared by {img.sharedBy}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Users Section */}
                    <div className="lg:col-span-3 bg-white rounded-lg">
                        <div className="p-4">
                            <h2 className="text-[#1C4587] font-medium mb-3">Users</h2>
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
                    <h2 className="text-[#1C4587] font-semibold ml-8 my-4">Project Discussion</h2>
                    <div className="bg-[#EAF0FB] rounded-md p-4">
                        <div className="mb-4">
                            <p className="text-center font-semibold text-sm text-gray-500 mb-10">Today</p>
                            <div className="space-y-6">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex relative ${msg.isRight ? 'justify-end' : ''}`}>
                                        {!msg.isRight && (
                                            <div className="mr-3">
                                                <div className="relative">
                                                    <img
                                                        src={msg.avatar.src || "/placeholder.svg"}
                                                        alt={msg.sender}
                                                        className="rounded-full w-8 h-8"
                                                    />
                                                    {msg.online && (
                                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {!msg.isRight && (
                                            <div className="mb-1 absolute left-12 top-[-25]">
                                                <span className="text-xs font-medium">{msg.sender}</span>
                                                <span className="text-[10px] text-gray-500 ml-2">{msg.role}</span>
                                            </div>
                                        )}
                                        <div className={`max-w-[70%] ${msg.isRight ? 'bg-white' : 'bg-white'} p-3 rounded-lg shadow-sm`}>

                                            <p className="text-sm">{msg.text}</p>
                                            <p className="text-right text-xs text-gray-400 mt-1">{msg.time}</p>
                                        </div>

                                        {msg.isRight && (
                                            <div className="ml-3">
                                                <div className="relative">
                                                    <img
                                                        src={msg.avatar.src || "/placeholder.svg"}
                                                        alt={msg.sender}
                                                        className="w-8 h-8 rounded-full"
                                                    />
                                                    {msg.online && (
                                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-20 lg:w-2/4 mx-auto flex flex-col lg:flex-row gap-2 items-center">
                            {/* Input Field */}
                            <div className="flex items-center flex-1 px-4 py-2 border border-[#80A7E5] rounded-md text-sm focus-within:ring-1 focus-within:ring-[#1C4587] bg-white">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Send Message"
                                    className="flex-1 text-xs outline-none"
                                />
                                {/* Icons */}
                                <div className="flex items-center gap-2 text-[#1c4587a6]">
                                    <Upload className="h-4 w-4 cursor-pointer" />
                                    <button type="submit">
                                        <Send className="h-4 w-4 cursor-pointer" />
                                    </button>
                                </div>
                            </div>

                            {/* Upload Button */}
                            <button type="button" className="px-4 py-[6] border rounded-md text-[#1C4587] bg-white text-sm font-medium">
                                Upload file
                            </button>
                        </form>
                    </div>
                </div>
            </div>
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
