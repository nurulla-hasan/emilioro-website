import { X } from "lucide-react";
import { motion } from "framer-motion"

const BondsRatingModal = ({showRatingModal, setShowRatingModal, setRating, rating, ratingComment, setRatingComment, submitRating}) => {
    return (
        <>
            {showRatingModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-sm p-5 w-full max-w-md"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium text-[#1C4587]">Rate this Bond</h2>
                            <button
                                onClick={() => setShowRatingModal(false)}
                                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-center mb-2">
                                {[...Array(10)].map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setRating(i + 1)}
                                        className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center cursor-pointer ${i < rating ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-600"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500">
                                {rating === 0 ? "Select a rating" : `You rated: ${rating}/10`}
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">Comment (Optional)</label>
                            <textarea
                                value={ratingComment}
                                onChange={(e) => setRatingComment(e.target.value)}
                                placeholder="Share your experience..."
                                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#1C4587] min-h-[100px]"
                            />
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowRatingModal(false)}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 text-sm cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={submitRating}
                                disabled={rating === 0}
                                className="px-4 py-2 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white rounded-sm text-sm disabled:opacity-50 cursor-pointer"
                            >
                                Submit Rating
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default BondsRatingModal;