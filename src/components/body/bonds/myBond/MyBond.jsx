"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import AddBondModal from "@/components/body/bonds/modal/AddBondModal";
import EditBondModal from "@/components/body/bonds/modal/EditBondModal";
import DeleteBondModal from "@/components/body/bonds/modal/DeleteBondModal";
import { useState } from "react";
import { PiPencilSimpleDuotone } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

const initialBonds = [
  { id: "1", title: "Teaching Math", type: "give", tags: ["math", "tutor"] },
  { id: "2", title: "Spending Time Together", type: "get", tags: ["friendship"] },
  { id: "3", title: "Fixing Computer", type: "give", tags: ["tech"] },
  { id: "4", title: "Cooking Help", type: "get", tags: ["cooking"] },
];

const MyBond = () => {
  const [bonds, setBonds] = useState(initialBonds);
  const [tags, setTags] = useState([]);
  const [currentBond, setCurrentBond] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleAddTag = () => {
    const tagInput = document.querySelector("input[name='tag']");
    const tagValue = tagInput?.value.trim();
    if (tagValue && !tags.includes(tagValue)) {
      setTags([...tags, tagValue]);
      tagInput.value = "";
    }
  };

  const inferBondType = (offer, want) => {
    const isOfferEmpty = !offer.trim();
    const isWantEmpty = !want.trim();
    const wantLower = want.toLowerCase();

    if (!isOfferEmpty && !isWantEmpty) return "mutual_exchange";
    if (!isOfferEmpty && isWantEmpty) return "giving";
    if (!isOfferEmpty && wantLower.includes("surprise")) return "giving_surprise";
    if (isOfferEmpty && !isWantEmpty) return "receiving";
    if (isOfferEmpty && wantLower.includes("surprise")) return "awaiting_surprise";
    return "undefined";
  };

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
    reset();
    setTags([]);
    setIsModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    setBonds((prev) => prev.filter((bond) => bond.id !== currentBond.id));
    setIsDeleteModalOpen(false);
  };

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
      <h1 className="text-xl text-[#1C4587] font-bold mb-4">My Bonds</h1>

      <div className="my-5 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-2 rounded-sm font-medium text-xs"
        >
          + Add New Bond
        </motion.button>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 my-20">
        {/* Give Bonds */}
        <div className="w-full shadow rounded-sm p-8">
          <h1 className="text-xl text-[#1C4587] font-bold mb-4">Give</h1>
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

        {/* Get Bonds */}
        <div className="w-full shadow rounded-sm p-8">
          <h1 className="text-xl text-[#1C4587] font-bold mb-4">Get</h1>
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
