"use client"

import { Dialog } from "@headlessui/react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, X, ChevronDown } from "lucide-react"

const AddProducerModal = ({ isAddProducerOpen, setIsAddProducerOpen }) => {
    // State for the search input
    const [searchName, setSearchName] = useState("")
    const [searchRole, setSearchRole] = useState("CEO")

    // State for added producers
    const [producers, setProducers] = useState([
        
    ])

    // Add producer from search input
    const handleAddProducer = () => {
        if (searchName.trim() !== "") {
            const newId = producers.length > 0 ? Math.max(...producers.map((p) => p.id)) + 1 : 1
            setProducers([...producers, { id: newId, name: searchName, role: searchRole }])
            setSearchName("") // Clear the search input after adding
        }
    }

    // Remove a producer
    const handleRemoveProducer = (id) => {
        setProducers(producers.filter((p) => p.id !== id))
    }

    // Submit Function
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Added Producers:", producers)
        setIsAddProducerOpen(false)
    }

    return (
        <Dialog open={isAddProducerOpen} onClose={() => setIsAddProducerOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-4 rounded-sm shadow-lg w-full max-w-md"
    >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
            <Dialog.Title className="text-lg font-semibold text-gray-700">Create New Project</Dialog.Title>
            <button onClick={() => setIsAddProducerOpen(false)} className="rounded-full">
                <img className="w-5" src="/x.svg" alt="Close" />
            </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                {/* Search Input Row */}
                <div className="flex justify-between">
                    <label className="block text-xs font-medium text-gray-700">Add Producer</label>
                    <label className="block text-xs font-medium text-gray-700">Choose Designation</label>
                </div>

                <div className="flex gap-3 justify-between items-center">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className="outline-none border-gray-300 w-full pl-9 pr-3 py-1.5 border rounded-sm text-xs"
                            placeholder="Search to select producer"
                        />
                    </div>

                    <div className="w-36 relative">
                        <select
                            value={searchRole}
                            onChange={(e) => setSearchRole(e.target.value)}
                            className="outline-none border-gray-300 text-xs w-full px-2 py-1.5 border rounded-sm appearance-none pr-8"
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
                {/* Added Producers List */}
                {producers.map((producer) => (
                    <div key={producer.id} className="flex gap-3 items-center">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={producer.name}
                                readOnly
                                className="outline-none border-gray-300 w-full px-2 py-1.5 border rounded-sm text-xs bg-gray-50"
                            />
                        </div>

                        <div className="w-32">
                            <input
                                type="text"
                                value={producer.role}
                                readOnly
                                className="outline-none border-gray-300 text-xs w-full px-2 py-1.5 border rounded-sm bg-gray-50"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => handleRemoveProducer(producer.id)}
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
                    className="border border-gray-300 text-gray-600 text-xs px-2 py-1.5 rounded-sm hover:bg-gray-50 w-full mt-2"
                >
                    + Add more
                </button>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#1C4587] text-white py-1.5 text-xs rounded-sm font-medium w-full mt-3"
                >
                    Submit
                </motion.button>
            </div>
        </form>
    </motion.div>
</div>

        </Dialog>
    )
}

export default AddProducerModal

