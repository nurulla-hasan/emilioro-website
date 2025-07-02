import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function AddEventModal({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Event Data:", data);
    onClose(); // Modal Close after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute cursor-pointer top-3 right-3 bg-primary p-1 rounded-full text-white">
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Add new Event</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Event Name */}
          <div>
            <label className="block font-semibold text-sm mb-2">Add Event name</label>
            <input
              {...register("eventName", { required: "Event name is required" })}
              className="w-full border border-gray-300 text-sm outline-none p-2 rounded-md"
              placeholder="Type here.."
            />
            {errors.eventName && <p className="text-red-500 text-sm">{errors.eventName.message}</p>}
          </div>

          {/* Event Date */}
          <div>
            <label className="block font-semibold text-sm mb-2">Event date</label>
            <input
              type="date"
              {...register("eventDate", { required: "Event date is required" })}
              className="w-full border border-gray-300 text-sm outline-none p-2 rounded-md"
            />
            {errors.eventDate && <p className="text-red-500 text-sm">{errors.eventDate.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-button cursor-pointer text-white py-2 rounded-lg font-semibold"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
