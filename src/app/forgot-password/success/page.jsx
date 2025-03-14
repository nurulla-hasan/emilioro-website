"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Success() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex min-h-screen items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Success!</h2>
        <p className="text-gray-600 mb-6">Your password has been updated successfully.</p>
        <button
          onClick={() => router.push("/login")}
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Continue to Login
        </button>
      </div>
    </motion.div>
  );
}
