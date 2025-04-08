"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from "lucide-react"

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const duration = 240 // 4 min in seconds

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full bg-white p-2 rounded-lg shadow-sm">
      {/* Thumbnail and Info */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-3">
          <img
            src="/mostPlayed.png"
            alt="Thumbnail"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-blue-900">Family Conversation</span>
            <span className="text-xs text-gray-500">Emil Roo</span>
          </div>
        </div>

        {/* Mobile Heart Button */}
        <button className="sm:hidden text-blue-900 hover:text-blue-700 cursor-pointer">
          <Heart size={18} />
        </button>
      </div>

      {/* Main Controls and Progress - Stacked on mobile, inline on larger screens */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-3 sm:mt-0">
        {/* Controls */}
        <div className="flex items-center gap-4 text-blue-900 order-2 sm:order-1 mt-3 sm:mt-0 *:cursor-pointer">
          <button className="hidden xs:inline-block hover:text-blue-700">
            <SkipBack size={16} />
          </button>

          <button className="hover:text-blue-700 flex items-center justify-center" onClick={togglePlayPause}>
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
          </button>

          <button className="hidden xs:inline-block hover:text-blue-700">
            <SkipForward size={16} />
          </button>

          <button className="hidden md:inline-block hover:text-blue-700">
            <Shuffle size={16} />
          </button>

          <button className="hidden md:inline-block hover:text-blue-700">
            <Repeat size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 flex items-center gap-2 w-full order-1 sm:order-2">
          <span className="text-xs text-gray-500 w-8">{formatTime(currentTime)}</span>

          <div className="relative flex-1 h-1 bg-gray-200 rounded-full">
            <div
              className="absolute h-full bg-blue-600 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <span className="text-xs text-gray-500 w-8">{formatTime(duration)}</span>
        </div>

        {/* Volume & Favorite - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-4 text-blue-900 order-3">
          <button className="hover:text-blue-700">
            <Volume2 size={18} />
          </button>

          <button className="hover:text-blue-700">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer

