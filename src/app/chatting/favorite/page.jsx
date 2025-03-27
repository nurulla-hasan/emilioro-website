"use client"
import FavoriteAudio from "@/components/body/favorite/audio/FavoriteAudio";
import FavoritePlaylist from "@/components/body/favorite/playlist/FavoritePlaylist";
import { useState } from "react";

const Favorite = () => {
    const [selectedOption, setSelectedOption] = useState("Audio");

    return (
        <>
            <div className="my-5 px-5 md:px-8">
                <div className="flex justify-between items-center gap-4">
                    <h2 className="text-xl font-bold text-[#1C4587]">My Favorite</h2>

                    {/* Dropdown */}
                    <div className=" border border-[#1e4a9b] rounded-sm">
                        <select
                            className="outline-none text-gray-700 px-3 py-1 text-sm"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="Audio">Audio</option>
                            <option value="Playlist">Playlist</option>
                        </select>
                    </div>
                </div>

            </div>

            {/* Dynamic Component Rendering */}
            <div className="my-5 md:px-8">
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
