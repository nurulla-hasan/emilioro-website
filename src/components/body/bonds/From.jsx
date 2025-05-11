import { motion, AnimatePresence } from "framer-motion"
import { Bell, BellOff, ChevronDown, List, MapPin } from "lucide-react";
import Link from "next/link";


const From = ({
    handleSubmit,
    onSubmit,
    customGive,
    handleCustomInputChange,
    giveInputRef,
    setSuggestionType,
    showSuggestions,
    suggestionType,
    setShowSuggestions,
    suggestedEntries,
    selectSuggestion,
    errors,
    customGet,
    getInputRef,
    showLocationFilter,
    setShowLocationFilter,
    register,
    radiusValue,
    setShowCreateListModal,
    userLists,
    toggle,
    setToggle,
    notifications,
    toggleNotifications,
    matchingBonds,
    renderMatch
}) => {
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Give */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full"
                    >
                        <label className="block text-sm text-gray-700 font-medium mb-1">Give</label>
                        <div className="relative">
                            <div className="border p-1 border-[#1C4587] rounded-sm ">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={customGive}
                                        onChange={(e) => handleCustomInputChange("give", e.target.value)}
                                        placeholder="Type what you can offer..."
                                        className="w-full outline-none focus:ring-0 border-none text-[14px] text-[#595D62] px-1 placeholder:text-xs"
                                        ref={giveInputRef}
                                    />
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSuggestionType("give")
                                                setShowSuggestions(!showSuggestions)
                                            }}
                                            className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                                        >
                                            <ChevronDown size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Suggestions dropdown */}
                            {showSuggestions && suggestionType === "give" && (
                                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-sm shadow-lg max-h-60 overflow-auto">
                                    {suggestedEntries.give
                                        .filter((item) => item.toLowerCase().includes(customGive.toLowerCase()))
                                        .map((suggestion, index) => (
                                            <div
                                                key={index}
                                                className="px-3 py-2 text-sm hover:bg-[#EAF0FB] cursor-pointer"
                                                onClick={() => selectSuggestion("give", suggestion)}
                                            >
                                                {suggestion}
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                        {errors.give && <p className="text-red-500 text-xs mt-1">{errors.give.message}</p>}
                    </motion.div>

                    {/* Get */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full"
                    >
                        <label className="block text-sm text-gray-700 font-medium mb-1">Get</label>
                        <div className="relative">
                            <div className="border p-1 border-[#1C4587] rounded-sm">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={customGet}
                                        onChange={(e) => handleCustomInputChange("get", e.target.value)}
                                        placeholder="Type what you want..."
                                        className="w-full outline-none focus:ring-0 border-none text-[14px] text-[#595D62] px-1 placeholder:text-xs"
                                        ref={getInputRef}
                                    />
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSuggestionType("get")
                                                setShowSuggestions(!showSuggestions)
                                            }}
                                            className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                                        >
                                            <ChevronDown size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Suggestions dropdown */}
                            {showSuggestions && suggestionType === "get" && (
                                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-sm shadow-lg max-h-60 overflow-auto">
                                    {suggestedEntries.get
                                        .filter((item) => item.toLowerCase().includes(customGet.toLowerCase()))
                                        .map((suggestion, index) => (
                                            <div
                                                key={index}
                                                className="px-3 py-2 text-sm hover:bg-[#EAF0FB] cursor-pointer"
                                                onClick={() => selectSuggestion("get", suggestion)}
                                            >
                                                {suggestion}
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                        {errors.get && <p className="text-red-500 text-xs mt-1">{errors.get.message}</p>}
                    </motion.div>
                </div>

                {/* Location Filter */}
                <div className="mb-4">
                    <button
                        type="button"
                        onClick={() => setShowLocationFilter(!showLocationFilter)}
                        className="flex items-center gap-1 text-[#1C4587] text-sm hover:underline cursor-pointer"
                    >
                        <MapPin size={16} />
                        {showLocationFilter ? "Hide location filter" : "Add location filter"}
                    </button>

                    {showLocationFilter && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            <div>
                                <label className="block text-xs text-gray-700 font-medium mb-1">Location</label>
                                <div className="border p-1 border-[#1C4587] rounded-sm">
                                    <input
                                        {...register("location")}
                                        placeholder="Enter your location"
                                        className="w-full outline-none focus:ring-0 border-none text-[14px] text-[#595D62] p-1.5"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-700 font-medium mb-1">Radius (km): {radiusValue}</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    {...register("radius")}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Lists Section */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <button
                            type="button"
                            onClick={() => setShowCreateListModal(true)}
                            className="flex items-center gap-1 text-[#1C4587] text-sm hover:underline cursor-pointer"
                        >
                            <List size={16} />
                            Manage Lists
                        </button>
                    </div>

                    {userLists.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {userLists.map((list) => (
                                <div
                                    key={list.id}
                                    className="px-3 py-1 bg-[#EAF0FB] text-xs rounded-full flex items-center gap-1 cursor-pointer hover:bg-[#D5E3F7]"
                                >
                                    <span>{list.name}</span>
                                    <span className="bg-[#1C4587] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                                        {list.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Matching items section */}
                <AnimatePresence>
                    {toggle && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden mt-5"
                        >
                            <div className="border p-4 border-gray-200 rounded-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <h1 className="text-sm font-semibold text-[#1C4587]">Matching Bonds</h1>

                                    <button
                                        type="button"
                                        onClick={toggleNotifications}
                                        className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#1C4587] cursor-pointer"
                                    >
                                        {notifications ? (
                                            <>
                                                <BellOff size={14} />
                                                Mute Notifications
                                            </>
                                        ) : (
                                            <>
                                                <Bell size={14} />
                                                Enable Notifications
                                            </>
                                        )}
                                    </button>
                                </div>

                                {matchingBonds.length > 0 ? (
                                    <div>{matchingBonds.map((match) => renderMatch(match))}</div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-center items-center py-8"
                                    >
                                        <div className="w-8 h-8 border-t-2 border-b-2 border-[#1C4587] rounded-full animate-spin"></div>
                                        <p className="ml-3 text-[#1C4587]">Searching for matches...</p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Search Bond / Link Button */}
                <div className="flex justify-center items-center mt-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setToggle(!toggle)}
                        type="button"
                        className="w-full md:w-2/6 text-sm bg-button text-white p-2 rounded-sm transition-all cursor-pointer"
                    >
                        <AnimatePresence mode="wait">
                            {toggle ? (
                                <Link href="/message">
                                    <motion.div
                                        key="link"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="w-full h-full"
                                    >
                                        Link
                                    </motion.div>
                                </Link>
                            ) : (
                                <motion.div
                                    key="search"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    Search Bond
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </form>
        </>
    );
};

export default From;