"use client";
import { RiEdit2Line, RiTeamLine } from "react-icons/ri";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import image from "../../../../public/browse.png";
import { useForm } from "react-hook-form";
import AddProducerModal from "@/components/body/object/modal/AddProducerModal";
import EditProjectModal from "@/components/body/object/modal/EditProjectModal";
import AddUserModal from "@/components/body/object/modal/AddUserModal";

const projects = [
    {
        id: "1",
        title: "Eco-Friendly Packaging",
        status: ["Ongoing", "Public"],
        description: "Develop sustainable packaging solutions using biodegradable materials dsjh.",
        author: "MR. Sarwar",
        authorRole: ["Owner"],
        image: image,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "2",
        title: "Recyclable Materials",
        status: ["Ongoing", 'Public'],
        description: "Use recyclable materials to create packaging that can be reused.",
        author: "MR. Ahmed",
        authorRole: ["Owner"],
        image: image,
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
        image: image,
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
        image: image,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "5",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve .",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: image,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "6",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve .",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: image,
        participant: "10",
        created: "22 may 2023"
    },
    {
        id: "7",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve .",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: image,
        participant: "10",
        created: "22 may 2023"
    }
];

const MyProjectDetails = () => {
    const [isAddProducerOpen, setIsAddProducerOpen] = useState(false)
    const [isAddUserOpen, setIsAddUserOpen] = useState(false)
    const searchParams = useSearchParams();
    const projectId = searchParams.get("id");
    const [project, setProject] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Edited Project Data:", data);
        setIsOpen(false);
        reset();
    };

    useEffect(() => {
        const selectedProject = projects.find(p => p.id === projectId);
        setProject(selectedProject);
    }, [projectId]);

    if (!project) {
        return <p className="text-center text-gray-500">Project not found</p>;
    }

    return (
        <div className="px-5 mb-20">
            <div className=" max-w-3xl shadow-[0px_2px_11px_0px_#96b6ff] mx-auto mt-10 p-5 rounded-lg bg-white">
                <div className="relative h-48">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt="Project Header"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                <div>
                    <div className='flex justify-between items-center mt-2'>
                        <h1 className="lg:text-lg text-sm font-bold text-[#1C4587]">{project.title}</h1>
                        {/* Edit Button */}
                        <button
                            className="flex gap-1 items-center cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-3 py-2 rounded-lg font-medium"
                            onClick={() => setIsOpen(true)}
                        >
                            <RiEdit2Line />
                            <span>Edit Project</span>
                        </button>
                    </div>
                </div>


                <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='rounded-full w-[30px] h-[30px]' src={project.image.src} alt="image" />
                        <div>
                            <h5 className='text-[13px] text-gray-800'>{project.author}</h5>
                            <p className='text-[10px] text-gray-500'>{project.authorRole}</p>
                        </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <div className='flex border rounded-sm px-1 gap-1 items-center text-[#6F6F6F] text-sm'>
                            <select className="border-none outline-none text-xs">
                                <option value="active">Active</option>
                                <option value="complete">Complete</option>
                            </select>
                        </div>
                        <div className='flex border rounded-sm px-1 gap-1 items-center text-[#6F6F6F] text-sm'>
                            <select className="border-none outline-none text-xs">
                                <option value="private">Private</option>
                                <option value="public">Public</option>
                            </select>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 text-xs text-end mt-0 mb-2 lg:mt-2">{project.created}</p>
                <p className="text-gray-600 text-sm">{project.description}</p>

                {/* Participant Count */}
                <div className="flex items-center  gap-2 mt-2">
                    <RiTeamLine className="text-[#1C4587]" size={15} />
                    <span className="text-xs font-semibold text-gray-600">{project.participant} Participent</span>
                </div>

                {/* Participants Grid */}
                <div className="grid grid-cols-1 mt-5 gap-5">
                    {/* Producer Column */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold mb-2">Producer</h3>
                            <motion.button
                                className="px-2 text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-md font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsAddProducerOpen(true)}
                            >
                                +Add Producer
                            </motion.button>
                        </div>

                        <div>
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center mt-2 gap-2"
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={project.image.src || "/placeholder.svg"}
                                                alt="Producer"
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                                                <p className="text-xs text-gray-500">
                                                    {i === 0
                                                        ? "CEO"
                                                        : i === 1
                                                            ? "General manager"
                                                            : i === 2
                                                                ? "Chief of engineer"
                                                                : i === 3
                                                                    ? "work administrator"
                                                                    : "Artist, Engineer, musician"}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <motion.button
                                                className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-md font-medium"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Remove
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* View All Link */}
                            <div className="text-right">
                                <button className="text-blue-900 text-xs hover:underline">View all</button>
                            </div>
                        </div>
                    </div>
                    {/* User Column */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold mb-2">User</h3>
                            <motion.button
                                className="px-2 text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-md font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsAddUserOpen(true)}
                            >
                                +Add User
                            </motion.button>
                        </div>
                        <div>
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center mt-2 gap-2"
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={project.image.src || "/placeholder.svg"}
                                                alt="Producer"
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                                                <p className="text-xs text-gray-500">
                                                    {i === 0
                                                        ? "CEO"
                                                        : i === 1
                                                            ? "General manager"
                                                            : i === 2
                                                                ? "Chief of engineer"
                                                                : i === 3
                                                                    ? "work administrator"
                                                                    : "Artist, Engineer, musician"}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <motion.button
                                                className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-md font-medium"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Remove
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* View All Link */}
                            <div className="text-right">
                                <button className="text-blue-900 text-xs hover:underline">View all</button>
                            </div>
                        </div>
                    </div>

                    {/* Join Request Column */}
                    <div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold ">Join Request</h3>
                        </div>
                        <div>
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center mt-2 gap-2"
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={project.image.src || "/placeholder.svg"}
                                                alt="Producer"
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium text-sm text-gray-700">Ahamad musa</p>
                                                <p className="text-xs text-gray-500">
                                                    {i === 0
                                                        ? "CEO"
                                                        : i === 1
                                                            ? "General manager"
                                                            : i === 2
                                                                ? "Chief of engineer"
                                                                : i === 3
                                                                    ? "work administrator"
                                                                    : "Artist, Engineer, musician"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <motion.button
                                                className="px-2 text-xs bg-white border border-red-500 text-red-500 py-1 rounded-md font-medium"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Decline
                                            </motion.button>
                                            <motion.button
                                                className="px-2 text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-1 rounded-md font-medium"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Accept
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* View All Link */}
                            <div className="text-right">
                                <button className="text-blue-900 text-xs hover:underline">View all</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* button */}
                <div className="flex justify-center mt-5">
                    <motion.button
                        className="lg:w-1/3 text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-2 lg:px-0 py-1 rounded-md font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Open Workspace
                    </motion.button>
                </div>
            </div>

            {/* Modal */}
            <EditProjectModal isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}
            />
            {/* Modal */}
            <AddProducerModal isOpen={isAddProducerOpen} setIsOpen={setIsAddProducerOpen} />

            {/* Modal */}
            <AddUserModal isOpen={isAddUserOpen} setIsOpen={setIsAddUserOpen} />
            
        </div >
    );
};

export default MyProjectDetails;
