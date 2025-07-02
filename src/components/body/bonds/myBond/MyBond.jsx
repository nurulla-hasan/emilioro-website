"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import AddBondModal from "@/components/body/bonds/modal/AddBondModal";
import EditBondModal from "@/components/body/bonds/modal/EditBondModal";
import DeleteBondModal from "@/components/body/bonds/modal/DeleteBondModal";
import { PiPencilSimpleDuotone } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

const initialBonds = [
  { id: "1", title: "Teaching Math", type: "give", tags: ["math", "tutor"] },
  { id: "2", title: "Spending Time Together", type: "get", tags: ["friendship"] },
  { id: "3", title: "Fixing Computer", type: "give", tags: ["tech"] },
  { id: "4", title: "Cooking Help", type: "get", tags: ["cooking"] },
  { id: "5", title: "Teaching Math", type: "give", tags: ["math", "tutor"] },
  { id: "6", title: "Spending Time Together", type: "get", tags: ["friendship"] },
  { id: "7", title: "Fixing Computer", type: "give", tags: ["tech"] },
  { id: "8", title: "Cooking Help", type: "get", tags: ["cooking"] },
];

const MyBond = () => {
  const [bonds, setBonds] = useState(initialBonds);
  const [tags, setTags] = useState([]);
  const [currentBond, setCurrentBond] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  // Remove tag
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Add a new tag
  const handleAddTag = () => {
    const tagInput = document.querySelector("input[name='tag']");
    const tagValue = tagInput?.value.trim();
    if (tagValue && !tags.includes(tagValue)) {
      setTags((prevTags) => [...prevTags, tagValue]); // Add tag to tags array
      tagInput.value = ""; // Clear input field after adding tag
    }
  };

  // Determine bond type based on user input
  const inferBondType = (offer, want) => {
    const isOfferEmpty = !offer.trim();
    const isWantEmpty = !want.trim();
    const wantLower = want.toLowerCase();

    // Entry-based logic
    if (offer === "Entry" && want === "Entry") return "mutual_exchange";
    if (offer === "Entry" && want === "Empty") return "giving";
    if (offer === "Entry" && want === "Surprise") return "giving_surprise";
    if (offer === "Empty" && want === "Entry") return "receiving";
    if (offer === "Empty" && want === "Empty") return "awaiting";
    if (offer === "Empty" && want === "Surprise") return "awaiting_surprise";

    return "undefined";  // fallback
  };

  // Submit new bond form
  const onSubmit = (data) => {
    if (!tags.length) return;
    const bondType = inferBondType(data.offer || "", data.want || "");

    const newBond = {
      id: Date.now().toString(),
      title: data.offer || data.want,
      tags,
      type: bondType.includes("give") || bondType.includes("giving") ? "give" : "get",
    };

    setBonds((prev) => [...prev, newBond]);
    reset(); // Reset form after submit
    setTags([]); // Clear tags array
    setIsModalOpen(false);
  };

  // Confirm deletion of bond
  const handleDeleteConfirm = () => {
    setBonds((prev) => prev.filter((bond) => bond.id !== currentBond.id));
    setIsDeleteModalOpen(false);
  };

  // Edit bond's title
  const handleEditConfirm = (updatedTitle) => {
    setBonds((prev) =>
      prev.map((bond) =>
        bond.id === currentBond.id ? { ...bond, title: updatedTitle } : bond
      )
    );
    setIsEditModalOpen(false);
  };

  const onDeleteBond = (bond) => {
    setCurrentBond(bond);
    setIsDeleteModalOpen(true);
  };

  const onEditBond = (bond) => {
    setCurrentBond(bond);
    setIsEditModalOpen(true);
  };

  const giveBonds = bonds.filter((bond) => bond.type === "give");
  const getBonds = bonds.filter((bond) => bond.type === "get");

  return (
    <div>
      <h1 className="text-xl text-primary font-bold mb-4">My Bonds</h1>

      <div className="lg:mt-32 mt-16">
        <div className="my-5 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer bg-button text-white px-3 py-2 rounded-sm font-medium text-xs"
          >
            + Add New Bond
          </motion.button>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 my-8">
          {/* Display "Give" Bonds */}
          <div className="w-full shadow rounded-sm p-8">
            <h1 className="text-xl text-primary font-bold mb-4">Give</h1>
            <div className="flex flex-col gap-3">
              {giveBonds.map((bond) => (
                <div key={bond.id} className="flex justify-between items-center bg-[#EAF0FB] p-3 rounded-sm">
                  <h3 className="text-sm text-gray-700">{bond.title}</h3>
                  <div className="flex gap-2">
                    <AiOutlineDelete size={18} color="#eb2525" className="cursor-pointer" onClick={() => onDeleteBond(bond)} />
                    <PiPencilSimpleDuotone size={18} color="#4d64a5" className="cursor-pointer" onClick={() => onEditBond(bond)} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Display "Get" Bonds */}
          <div className="w-full shadow rounded-sm p-8">
            <h1 className="text-xl text-primary font-bold mb-4">Get</h1>
            <div className="flex flex-col gap-3">
              {getBonds.map((bond) => (
                <div key={bond.id} className="flex justify-between items-center bg-[#EAF0FB] p-3 rounded-sm">
                  <h3 className="text-sm text-gray-700">{bond.title}</h3>
                  <div className="flex gap-2">
                    <AiOutlineDelete size={18} color="#eb2525" className="cursor-pointer" onClick={() => onDeleteBond(bond)} />
                    <PiPencilSimpleDuotone size={18} color="#4d64a5" className="cursor-pointer" onClick={() => onEditBond(bond)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddBondModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          reset();
          setTags([]);
        }}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        tags={tags}
        removeTag={removeTag}
        handleAddTag={handleAddTag}
      />

      <EditBondModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentBond={currentBond}
        handleEditConfirm={handleEditConfirm}
      />

      <DeleteBondModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default MyBond; 
