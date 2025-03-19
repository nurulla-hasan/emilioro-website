import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const familySides = ["Paternal side", "Maternal side"];
const relationshipTypes = ["Father", "Mother", "Cousin", "Grandpa", "Grandma", "Aunt"];

export default function AddRelativesModal({ isOpen, onClose }) {
  const [selectedFamilySide, setSelectedFamilySide] = useState(familySides[0]);
  const [selectedRelationship, setSelectedRelationship] = useState(relationshipTypes[0]);

  if (!isOpen) return null;

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

        <h2 className="text-lg font-semibold mb-4">Add new Relatives</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Relative Search */}
          <div>
            <label className="block font-semibold text-sm mb-2">Add New relatives</label>
            <input
              className="w-full border border-gray-300 text-sm outline-none p-2 rounded-md"
              placeholder="🔍 Search To select relatives"
            />
          </div>

          {/* Dropdowns */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-sm mb-2">Choose Family Side</label>
              <select
                className="w-full border border-gray-300 text-sm outline-none p-2 rounded-md"
                value={selectedFamilySide}
                onChange={(e) => setSelectedFamilySide(e.target.value)}
              >
                {familySides.map((side) => (
                  <option key={side} value={side}>{side}</option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block font-semibold text-sm mb-2">Relationship Type</label>
              <select
                className="w-full border border-gray-300 text-sm outline-none p-2 rounded-md"
                value={selectedRelationship}
                onChange={(e) => setSelectedRelationship(e.target.value)}
              >
                {relationshipTypes.map((relation) => (
                  <option key={relation} value={relation}>{relation}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg font-semibold"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
