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
            <div className="bg-white p-6 mt-10 rounded-lg w-[90%] h-[80vh] max-w-md lg:max-w-lg shadow-lg relative overflow-auto hide-scrollbar">
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-600 hover:text-black">
                    <IoMdClose size={24} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Create New Project</h2>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <input
                            {...register("productName", { required: true })}
                            type="text"
                            placeholder="Enter product name"
                            className="outline-none border-gray-300 w-full border px-3 py-2 rounded-md text-sm"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder="Enter description"
                            className="outline-none border-gray-300 w-full border px-3 py-2 rounded-md text-sm"
                        />
                    </div>

                    {/* Thumbnail */}
                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">Thumbnail Image</label>
                        <img className="w-4 h-4 absolute top-8 left-2 text-gray-500" src="/image.svg" alt="" />
                        <input
                            type="file"
                            {...register("thumbnail")}
                            className="outline-none border-gray-300 cursor-pointer text-gray-500 pl-8 text-xs w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Producers */}
                    <div className="flex flex-col gap-2">
                        {/* Search Input Row - Fixed, not removable */}
                        <div className="flex justify-between">
                            <label className="block text-sm font-medium text-gray-700">Add Producer</label>
                            <label className="block text-sm font-medium text-gray-700">Choose Designation</label>
                        </div>

                        <div className="flex gap-3 justify-between items-center">
                            <div>
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        {...register("producerSearch")}
                                        className="outline-none border-gray-300 w-full pl-9 pr-3 py-2 border rounded-md text-sm"
                                        placeholder="Search To select producer"
                                    />
                                </div>
                            </div>

                            <div className="w-36 relative">
                                <select
                                    {...register("producerRole")}
                                    className="outline-none border-gray-300 text-sm w-full px-3 py-2 border rounded-md appearance-none pr-8"
                                >
                                    <option value="CEO">CEO</option>
                                    <option value="General Manager">General Manager</option>
                                    <option value="Chief Engineer">Chief Engineer</option>
                                    <option value="Work Administrator">Work Administrator</option>
                                    <option value="Artist">Artist</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Added Producers List - Below the search input */}
                        {producerFields.map((producer, index) => (
                            <div key={producer.id} className="flex gap-3 items-center">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        {...register(`producers.${index}.name`)}
                                        readOnly
                                        className="outline-none border-gray-300 w-full px-3 py-2 border rounded-md text-sm bg-gray-50"
                                    />
                                </div>

                                <div className="w-32 relative">
                                    <input
                                        type="text"
                                        {...register(`producers.${index}.role`)}
                                        readOnly
                                        className="outline-none border-gray-300 text-sm w-full px-3 py-2 border rounded-md bg-gray-50"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => removeProducer(index)}
                                    className="w-6 h-6 flex items-center justify-center text-red-500"
                                >
                                    <div className="w-4 h-0.5 bg-red-500"></div>
                                </button>
                            </div>
                        ))}

                        {/* Add More Button */}
                        <button
                            type="button"
                            onClick={handleAddProducer}
                            className="border border-gray-300 text-gray-600 text-sm px-3 py-2 rounded-md hover:bg-gray-50 w-full mt-2"
                        >
                            +Add more
                        </button>
                    </div>

                    {/* Consumers */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Consumers</label>
                        {consumerFields.map((item, index) => (
                            <div key={item.id} className="flex items-center gap-2 mb-2">
                                <div className="flex-1 relative">
                                    <input
                                        {...register(`consumers.${index}.name`)}
                                        type="text"
                                        placeholder="Consumer name"
                                        className="outline-none border-gray-300 w-full border px-3 py-2 rounded-md text-sm"
                                    />
                                </div>
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => removeConsumer(index)}
                                        className="w-6 h-6 flex items-center justify-center text-red-500 flex-shrink-0"
                                        aria-label="Remove consumer"
                                    >
                                        <div className="w-4 h-0.5 bg-red-500"></div>
                                    </button>
                                )}
                            </div>
                        ))}
                        {/* Add More Button */}
                        <button
                            type="button"
                            onClick={() => appendConsumer({ name: "" })}
                            className="border border-gray-300 text-gray-600 text-sm px-3 py-2 rounded-md hover:bg-gray-50 w-full mt-2"
                        >
                            +Add more
                        </button>
                    </div>

                    {/* Join Control */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Join Control</label>
                        <select {...register("joinControl")} className="outline-none w-full border px-3 py-2 rounded-md text-sm border-gray-300">
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white py-2 rounded-md font-medium text-lg"
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
        </div>
    )
}

export default CreateProjectModal
