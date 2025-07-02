"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DetailsCreateGroupModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm();
    const [groupName, setGroupName] = useState("");
    const [groupNames, setGroupNames] = useState([]);
    const [expirationDate, setExpirationDate] = useState(new Date());
    const [hour, setHour] = useState(12);
    const [minute, setMinute] = useState(0);
    const [period, setPeriod] = useState("AM");
    

    const handleInputChange = (e) => {
        setGroupName(e.target.value);
    };

    const addGroupName = () => {
        if (groupName.trim() !== "" && groupNames.length < 5) {
            setGroupNames([...groupNames, groupName.trim()]);
            setGroupName("");
        }
    };

    const removeGroupName = (index) => {
        const updatedNames = groupNames.filter((_, i) => i !== index);
        setGroupNames(updatedNames);
    };

    const onSubmit = (data) => {
        console.log({
            ...data,
            groupNames,
            expiration: `${expirationDate.toLocaleDateString()} ${hour}:${minute} ${period}`,
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white relative rounded-sm w-[400px] sm:w-[500px] shadow-lg"
                >
                    {/* Header */}
                    <div className="p-6 flex justify-between items-center">
                        <div>
                            <h3 className="text-xs font-semibold text-gray-700">Create group name poll</h3>
                            <p className="text-xs text-gray-500">(Minimum 2 names, Maximum 5 names)</p>
                        </div>
                        <button onClick={onClose} className="absolute top-3 right-3 cursor-pointer">
                            <img className="w-6" src="/x.svg" alt="Close" />
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        {/* Group Name Input */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Add Group name</label>
                            <input
                                type="text"
                                value={groupName}
                                onChange={handleInputChange}
                                placeholder="Type here"
                                className="w-full p-2.5 border border-gray-300 rounded-sm text-xs focus:outline-none focus:border-primary"
                            />

                            {/* Added Names List */}
                            {groupNames.length > 0 && (
                                <div className="space-y-2 mt-2">
                                    {groupNames.map((name, index) => (
                                        <div key={index} className="flex justify-between items-center p-2 bg-gray-200 rounded-sm">
                                            <span className="text-xs">{name}</span>
                                            <button onClick={() => removeGroupName(index)} className="text-red-500 cursor-pointer text-xs hover:text-red-600">
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button
                                onClick={addGroupName}
                                className="w-full mt-2 p-2.5 cursor-pointer text-primary border border-gray-300 rounded-sm text-xs hover:bg-gray-50"
                            >
                                + Add more
                            </button>
                        </div>

                        {/* Expiration */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Expiration</label>
                            <div className="flex justify-between items-center gap-2">
                                <div className="relative flex-1/2 border border-gray-300 rounded-sm">
                                    <DatePicker
                                        selected={expirationDate}
                                        onChange={(date) => setExpirationDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        className="w-full p-2.5 text-xs focus:outline-none focus:border-primary"
                                    />
                                    <FaRegCalendarAlt className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="flex flex-1/2 justify-center items-center gap-1 border border-gray-300 rounded-sm px-2">
                                    {/* Hours */}
                                    <div className="relative w-12">
                                        <div className="absolute inset-y-0 right-[-3] flex flex-col justify-center pr-1.5 *:cursor-pointer">
                                            <button onClick={() => setHour(hour < 12 ? hour + 1 : 1)} className="text-gray-400">
                                                <IoChevronUpOutline size={10} />
                                            </button>
                                            <button onClick={() => setHour(hour > 1 ? hour - 1 : 12)} className="text-gray-400">
                                                <IoChevronDownOutline size={10} />
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            value={hour.toString().padStart(2, "0")}
                                            readOnly
                                            className="w-full p-2.5 rounded-sm text-xs text-center focus:outline-none"
                                        />
                                    </div>
                                    {/* Minutes */}
                                    <div className="relative w-12">
                                        <div className="absolute inset-y-0 right-[-3] flex flex-col justify-center pr-1.5 *:cursor-pointer">
                                            <button onClick={() => setMinute(minute < 59 ? minute + 1 : 0)} className="text-gray-400">
                                                <IoChevronUpOutline size={10} />
                                            </button>
                                            <button onClick={() => setMinute(minute > 0 ? minute - 1 : 59)} className="text-gray-400">
                                                <IoChevronDownOutline size={10} />
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            value={minute.toString().padStart(2, "0")}
                                            readOnly
                                            className="w-full p-2.5 rounded-sm text-xs text-center focus:outline-none"
                                        />
                                    </div>
                                    {/* AM/PM */}
                                    <div className="relative w-12">
                                        <div className="absolute inset-y-0 right-[-4] flex flex-col justify-center pr-1.5 *:cursor-pointer">
                                            <button onClick={() => setPeriod(period === "AM" ? "PM" : "AM")} className="text-gray-400">
                                                <IoChevronUpOutline size={10} />
                                            </button>
                                            <button onClick={() => setPeriod(period === "AM" ? "PM" : "AM")} className="text-gray-400">
                                                <IoChevronDownOutline size={10} />
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            value={period}
                                            readOnly
                                            className="w-full p-2.5 rounded-sm text-xs text-center focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="p-4">
                        <button
                            onClick={handleSubmit(onSubmit)}
                            className="w-full bg-primary cursor-pointer cursopoi text-white py-2.5 rounded-sm text-xs font-medium transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default DetailsCreateGroupModal;
