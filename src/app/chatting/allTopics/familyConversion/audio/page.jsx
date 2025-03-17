"use client"
import { useState, useEffect, useRef } from "react"
import WaveSurfer from "wavesurfer.js"
import { motion } from "framer-motion"
import { AiFillEye, AiFillStar } from "react-icons/ai"
import { IoTimeOutline } from "react-icons/io5"
import { FaTrashAlt, FaPlay, FaPause } from "react-icons/fa"
import { CiSearch, CiHeart } from "react-icons/ci"
import Image from "next/image"

// JSON Data
const conversations = [
  {
    id: 1,
    title: "Family Conversation",
    image: "/conversion1.png",
    duration: "02:20min",
    views: "3.5k",
    rating: 5,
    tags: ["Family", "Travel"],
    audioUrl: "/audio.mp3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
  },
  {
    id: 2,
    title: "Family Conversation",
    image: "/conversion2.png",
    duration: "02:20min",
    views: "3.5k",
    rating: 5,
    tags: ["Family", "Travel"],
    audioUrl: "/audio.mp3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
  },
  {
    id: 3,
    title: "Family Conversation",
    image: "/conversion3.png",
    duration: "02:20min",
    views: "3.5k",
    rating: 5,
    tags: ["Family", "Travel"],
    audioUrl: "/audio.mp3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
  },
  {
    id: 4,
    title: "Family Conversation",
    image: "/conversion3.png",
    duration: "02:20min",
    views: "3.5k",
    rating: 5,
    tags: ["Family", "Travel"],
    audioUrl: "/audio.mp3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elementum maecenas adipiscing tempus quis aliquam et odio eget.",
  },
]

const AllAudio = () => {
  const [playing, setPlaying] = useState(null)
  const wavesurferRefs = useRef({})

  useEffect(() => {
    if (typeof window !== "undefined") {
      conversations.forEach((audio) => {
        if (!wavesurferRefs.current[audio.id]) {
          const wavesurfer = WaveSurfer.create({
            container: `#waveform-${audio.id}`,
            waveColor: "#E0EAFF",
            progressColor: "#1C4587",
            barWidth: 2,
            barGap: 3,
            barRadius: 3,
            cursorWidth: 0,
            height: 30,
            normalize: true,
          })

          wavesurfer.load(audio.audioUrl)

          // Error Event Listener
          wavesurfer.on("error", (err) => {
            console.error(`WaveSurfer Error for ID ${audio.id}:`, err)
          })

          wavesurferRefs.current[audio.id] = wavesurfer
        }
      })
    }

    return () => {
      if (typeof window !== "undefined") {
        Object.values(wavesurferRefs.current).forEach((wavesurfer) => {
          wavesurfer.destroy()
        })
      }
    }
  }, [])

  const togglePlay = (id) => {
    if (playing === id) {
      wavesurferRefs.current[id].pause()
      setPlaying(null)
    } else {
      if (playing) {
        wavesurferRefs.current[playing].pause()
      }
      wavesurferRefs.current[id].play()
      setPlaying(id)
    }
  }

  return (
    <div className="px-5 mx-auto my-20 w-full lg:w-4/6">
      {/* Header */}
      <div className="lg:px-5 mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center mb-8">
        <h1 className="text-xl lg:text-3xl text-[#1C4587] font-bold">Family Conversation</h1>
        <div className="flex gap-5 items-center justify-center">
          <div className="relative lg:w-[250px] w-[150px] border border-[#1C4587] rounded-lg flex items-center px-2">
            <CiSearch className="cursor-pointer" color="#1C4587" size={15} />
            <input
              type="text"
              placeholder="Search Audio"
              className="px-2 py-1 lg:w-full w-36 rounded-full lg:py-2 border-none outline-none text-[#07398a]"
            />
          </div>
        </div>
      </div>

      {/* Audio List */}
      <div className="space-y-4">
      {conversations.map((audio) => (
        <div key={audio.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row p-4 gap-4">
            {/* Thumbnail with Heart - Full width on mobile, fixed width on desktop */}
            <div className="relative w-full md:w-[220px] h-[180px] md:h-[140px]">
              <Image
                src={audio.image || "/placeholder.svg?height=200&width=300"}
                alt={audio.title}
                width={220}
                height={130}
                className="rounded-lg object-cover w-full h-full"
              />
              <button className="absolute top-2 left-2 text-white">
                <CiHeart size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2 md:gap-0">
                <div>
                  <h2 className="text-md font-semibold text-[#1C4587]">{audio.title}</h2>
                  <p className="text-gray-600 text-xs mt-1">{audio.description}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <AiFillEye size={16} />
                  <span>{audio.views}</span>
                  <AiFillStar size={16} className="text-yellow-500" />
                  <span>{audio.rating}</span>
                </div>
              </div>

              {/* Audio Player */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => togglePlay(audio.id)}
                  className="bg-[#1C4587] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"
                >
                  {playing === audio.id ? <FaPause size={14} /> : <FaPlay size={14} />}
                </button>

                {/* WaveSurfer Container */}
                <div id={`waveform-${audio.id}`} className="flex-1 min-w-0"></div>

                <div className="flex items-center gap-1 text-gray-500 whitespace-nowrap">
                  <IoTimeOutline size={16} />
                  <span className="text-sm">{audio.duration}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {audio.tags.map((tag, index) => (
                  <span key={index} className="bg-[#1C4587] text-white text-xs px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Delete Button - Repositioned for mobile */}
            <div className="md:ml-4 mt-3 md:mt-0 flex md:items-start">
              <button className="border border-blue-900 text-blue-900 px-3 py-1 rounded-md flex items-center gap-1 text-sm hover:bg-red-50 transition-colors">
                <FaTrashAlt color="#f21d1d" size={14} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default AllAudio

