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
                className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-3 right-3 text-white bg-[#1C4587] p-1 rounded-full">
                    <X size={20} />
                </button>

                <h2 className="text-lg font-semibold mb-4">Select skills</h2>

                {/* Skill Dropdown */}
                <select
                    value={selectedSkill}
                    onChange={(e) => setSelectedSkill(e.target.value)}
                    className="w-full border border-gray-300 text-sm outline-none p-2 rounded-md"
                >
                    <option value="" disabled>Select a skill</option>
                    {["Artist", "Engineer", "Actor", "Musician", "Doctor", "Teacher"].map((skill, index) => (
                        <option key={index} value={skill}>{skill}</option>
                    ))}
                </select>

                {/* Buttons */}
                <div className="flex justify-end mt-4 gap-3">
                    <button onClick={onClose} className="border border-[#1C4587] text-[#1C4587] px-4 py-2 rounded-lg font-semibold">
                        Cancel
                    </button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSave(selectedSkill)}
                        disabled={!selectedSkill}
                        className="px-4 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg font-semibold disabled:opacity-50"
                    >
                        Save
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default SelectSkillsModal;