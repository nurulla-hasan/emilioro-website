"use client"
import { useForm, useFieldArray } from "react-hook-form"
import { motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"
import { ChevronDown, Search } from 'lucide-react'

const CreateProjectModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, control, reset, setValue, watch } = useForm({
        defaultValues: {
            productName: "",
            description: "",
            thumbnail: "",
            producers: [],
            consumers: [{ name: "" }],
            joinControl: "Private",
            producerSearch: "",
            producerRole: "CEO",
        },
    })

    // Watch the search field and role to use in the add function
    const producerSearch = watch("producerSearch")
    const producerRole = watch("producerRole")

    // Use useFieldArray for producers
    const {
        fields: producerFields,
        append: appendProducer,
        remove: removeProducer,
    } = useFieldArray({
        control,
        name: "producers",
    })

    // Use useFieldArray for consumers
    const {
        fields: consumerFields,
        append: appendConsumer,
        remove: removeConsumer,
    } = useFieldArray({
        control,
        name: "consumers",
    })

    // Add producer from search input
    const handleAddProducer = () => {
        if (producerSearch && producerSearch.trim() !== "") {
            appendProducer({ name: producerSearch, role: producerRole })
            // Clear the search field after adding
            setValue("producerSearch", "")
        }
    }

    const onSubmit = (data) => {
        // Remove the search fields from final data
        const { producerSearch, producerRole, ...submissionData } = data
        console.log("Submitted Data:", submissionData)
        setIsOpen(false)
        reset()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 mt-10 rounded-sm w-[90%] max-w-md lg:max-w-lg shadow-md relative overflow-auto hide-scrollbar">
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer">
                    <img className="w-6 h-6" src="/x.svg" alt="" />
                </button>

                <h2 className="text-base font-semibold mb-3">Create New Project</h2>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* Product Name */}
                    <div>
                        <label className="block text-xs font-medium mb-1">Product Name</label>
                        <input
                            {...register("productName", { required: true })}
                            type="text"
                            placeholder="Enter product name"
                            className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-xs font-medium mb-1">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder="Enter description"
                            className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
                        />
                    </div>

                    {/* Thumbnail */}
                    <div className="relative">
                        <label className="block text-xs font-medium mb-1">Thumbnail Image</label>
                        <img className="w-3 h-3 absolute top-7 left-2 text-gray-500" src="/image.svg" alt="" />
                        <input
                            type="file"
                            {...register("thumbnail")}
                            className="outline-none border-gray-300 cursor-pointer text-gray-500 pl-7 text-xs w-full px-2 py-1.5 border rounded-sm"
                        />
                    </div>

                    {/* Producers */}
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <label className="block text-xs font-medium text-gray-700">Add Producer</label>
                            <label className="block text-xs font-medium text-gray-700">Choose Role</label>
                        </div>

                        <div className="flex gap-2 justify-between items-center">
                            <div className="flex-1 relative">
                                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                                <input
                                    type="text"
                                    {...register("producerSearch")}
                                    className="outline-none border-gray-300 w-full pl-7 pr-2 py-1.5 border rounded-sm text-xs"
                                    placeholder="Search Producer"
                                />
                            </div>

                            <div className="w-32 relative">
                                <select
                                    {...register("producerRole")}
                                    className="outline-none border-gray-300 text-xs w-full px-2 py-1.5 border rounded-sm appearance-none pr-6"
                                >
                                    <option value="CEO">CEO</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Engineer">Engineer</option>
                                    <option value="Artist">Artist</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Added Producers List */}
                    <div className="flex flex-col gap-2">
                        {producerFields.map((producer, index) => (
                            <div key={producer.id} className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    {...register(`producers.${index}.name`)}
                                    readOnly
                                    className="outline-none border-gray-300 w-full px-2 py-1.5 border rounded-sm text-xs bg-gray-50"
                                />
                                <input
                                    type="text"
                                    {...register(`producers.${index}.role`)}
                                    readOnly
                                    className="outline-none border-gray-300 text-xs w-24 px-2 py-1.5 border rounded-sm bg-gray-50"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeProducer(index)}
                                    className="w-5 h-5 flex items-center justify-center text-red-500 cursor-pointer"
                                >
                                    <div className="w-3 h-0.5 bg-red-500"></div>
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={handleAddProducer}
                            className="border border-gray-300 text-gray-600 text-xs px-2 py-1.5 rounded-sm hover:bg-gray-50 w-full mt-1 cursor-pointer"
                        >
                            + Add more
                        </button>
                    </div>

                    {/* Consumers */}
                    <div>
                        <label className="block text-xs font-medium mb-1">Consumers</label>
                        {consumerFields.map((item, index) => (
                            <div key={item.id} className="flex items-center gap-2 mb-1">
                                <input
                                    {...register(`consumers.${index}.name`)}
                                    type="text"
                                    placeholder="Consumer name"
                                    className="outline-none border-gray-300 w-full border px-2 py-1.5 rounded-sm text-xs"
                                />
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => removeConsumer(index)}
                                        className="w-5 h-5 flex items-center cursor-pointer justify-center text-red-500 flex-shrink-0"
                                    >
                                        <div className="w-3 h-0.5 bg-red-500"></div>
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => appendConsumer({ name: "" })}
                            className="border border-gray-300 text-gray-600 text-xs px-2 py-1.5 rounded-sm hover:bg-gray-50 w-full mt-1 cursor-pointer"
                        >
                            + Add more
                        </button>
                    </div>

                    {/* Join Control */}
                    <div className="">
                        <label className="block text-xs font-medium mb-1">Join Control</label>
                        <div className="border px-2 py-0.5 rounded-sm border-gray-300">
                            <select {...register("joinControl")} className="outline-none w-full text-xs ">
                                <option value="Private">Private</option>
                                <option value="Public">Public</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.97 }}
                        className="w-full cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white py-1.5 rounded-sm font-medium text-sm"
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
        </div>

    )
}

export default CreateProjectModal
