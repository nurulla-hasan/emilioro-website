import { X } from 'lucide-react';
import { motion } from "framer-motion"

const CreateListModal = ({setShowCreateListModal, showCreateListModal, setNewListName, newListName, createNewList}) => {
    return (
        <>
            {showCreateListModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-sm p-5 w-full max-w-md"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium text-[#1C4587]">Create New List</h2>
                            <button
                                onClick={() => setShowCreateListModal(false)}
                                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">List Name</label>
                            <input
                                type="text"
                                value={newListName}
                                onChange={(e) => setNewListName(e.target.value)}
                                placeholder="Enter list name"
                                className="w-full p-1 px-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-[#1C4587]"
                            />
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowCreateListModal(false)}
                                className="px-4 py-1 border border-gray-300 text-gray-700 rounded-xs hover:bg-gray-50 text-sm cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={createNewList}
                                className="px-4 py-1 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white rounded-xs text-sm cursor-pointer"
                            >
                                Create List
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default CreateListModal;