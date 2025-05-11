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
        className="bg-white p-4 rounded-sm shadow-lg w-96 relative"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute cursor-pointer top-3 right-3 text-white bg-[#1C4587] p-1 rounded-full">
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Add new Relatives</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Relative Search */}
          <div>
            <label className="block font-semibold text-sm mb-2">Add New relatives</label>
            <input
              className="w-full border border-gray-300 text-xs outline-none p-1.5 rounded-sm"
              placeholder="🔍 Search To select relatives"
            />
          </div>

          {/* Dropdowns */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-sm mb-2">Choose Family Side</label>
              <select
                className="w-full border border-gray-300 text-xs outline-none p-1.5 rounded-sm"
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
                className="w-full border border-gray-300 text-xs outline-none p-1.5 rounded-sm"
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
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full cursor-pointer bg-button text-white py-1 rounded-sm font-medium text-sm"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
