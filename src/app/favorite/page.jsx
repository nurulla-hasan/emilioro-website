"use client"
import FavoriteAudio from "@/components/body/favorite/audio/FavoriteAudio";
import FavoritePlaylist from "@/components/body/favorite/playlist/FavoritePlaylist";
import { useState } from "react";

const Favorite = () => {
    const [selectedOption, setSelectedOption] = useState("Audio");

    return (
        <>
            <div className="">
                <div className="flex justify-between items-center gap-4">
                    <h2 className="text-xl font-semibold text-[#1C4587]">My Favorite</h2>

                    {/* Dropdown */}
                    <select
                        className=" border border-[#1e4a9b] outline-none text-gray-700 px-3 py-1 rounded-sm bg-white text-sm"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="Audio">Audio</option>
                        <option value="Playlist">Playlist</option>
                    </select>
                </div>

            </div>

            {/* Dynamic Component Rendering */}
            <div className="mt-4">
                {selectedOption === "Audio" ? <AudioComponent /> : <PlaylistComponent />}
            </div>
        </>
    );
};

// Audio Component
const AudioComponent = () => (
    <FavoriteAudio />
);

// Playlist Component
const PlaylistComponent = () => (
    <FavoritePlaylist />
);

export default Favorite;
