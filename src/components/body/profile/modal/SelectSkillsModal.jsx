import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const SelectSkillsModal = ({ onClose, onSave }) => {
    const [selectedSkill, setSelectedSkill] = useState("");
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-6 rounded-sm shadow-lg w-96 relative"
            >
                {/* Close Button */}
                <button onClick={onClose} className="cursor-pointer absolute top-3 right-3 text-white bg-[#1C4587] p-1 rounded-full">
                    <X size={15} />
                </button>

                <h2 className="text-lg font-semibold mb-4">Select skills</h2>

                {/* Skill Dropdown */}
                <div className="border border-gray-300 p-1 rounded-sm">
                    <select
                        value={selectedSkill}
                        onChange={(e) => setSelectedSkill(e.target.value)}
                        className="w-full text-xs outline-none "
                    >
                        <option value="" disabled>Select a skill</option>
                        {["Artist", "Engineer", "Actor", "Musician", "Doctor", "Teacher"].map((skill, index) => (
                            <option key={index} value={skill}>{skill}</option>
                        ))}
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-4 gap-3 *:cursor-pointer">
                    <button onClick={onClose} className="border border-[#1C4587] text-[#1C4587] text-xs px-4 py-2 rounded-sm font-semibold">
                        Cancel
                    </button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSave(selectedSkill)}
                        disabled={!selectedSkill}
                        className="px-4 bg-button text-white text-xs py-2 rounded-sm font-semibold disabled:opacity-50"
                    >
                        Save
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default SelectSkillsModal;