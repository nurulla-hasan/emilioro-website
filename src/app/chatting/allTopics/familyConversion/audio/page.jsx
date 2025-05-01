"use client"
import { useState, useEffect, useRef } from "react"
import WaveSurfer from "wavesurfer.js"
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
    <div className="px-5 my-5 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center justify-between gap-2 mx-auto lg:flex-row">
        <h1 className="text-xl text-[#1C4587] font-bold">Family Conversation</h1>
        <div className="relative border border-[#1C4587] rounded-sm flex items-center px-2">
          <CiSearch className="cursor-pointer " color="#1C4587" size={15} />
          <input
            type="text"
            placeholder="Search Audio"
            className="px-2 py-0.5 lg:w-full w-36 rounded-full lg:py-1 text-sm border-none outline-none text-[#07398a]"
          />
        </div>
      </div>

      {/* Audio List */}
      <div className="flex flex-col gap-4 mt-5">
        {conversations.map((audio) => (
          <div key={audio.id} className="overflow-hidden bg-white rounded-sm shadow-lg">
            <div className="relative flex flex-col items-center gap-4 p-3 md:flex-row">
              {/* Thumbnail with Heart - Full width on mobile, fixed width on desktop */}
              <div className="relative w-full md:w-[220px] h-[180px] md:h-[140px]">
                <Image
                  src={audio.image || "/placeholder.svg?height=200&width=300"}
                  alt={audio.title}
                  width={220}
                  height={130}
                  className="object-cover w-full h-full rounded-sm"
                />
                <button className="absolute text-white cursor-pointer top-2 left-2">
                  <CiHeart size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start md:gap-0">
                  <div>
                    <h2 className="text-md font-semibold text-[#1C4587]">{audio.title}</h2>
                    <p className="mt-1 text-xs text-gray-600">{audio.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <AiFillEye size={16} />
                    <span>{audio.views}</span>
                    <AiFillStar size={16} className="text-yellow-500" />
                    <span>{audio.rating}</span>
                  </div>
                </div>

                {/* Audio Player */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => togglePlay(audio.id)}
                    className="bg-[#1C4587] cursor-pointer text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                  >
                    {playing === audio.id ? <FaPause size={12} /> : <FaPlay size={12} />}
                  </button>

                  {/* WaveSurfer Container */}
                  <div id={`waveform-${audio.id}`} className="flex-1 min-w-0"></div>

                  <div className="flex items-center gap-1 text-gray-500 whitespace-nowrap">
                    <IoTimeOutline size={16} />
                    <span className="text-xs">{audio.duration}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {audio.tags.map((tag, index) => (
                    <span key={index} className="bg-[#1C4587] text-white text-[10px] px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Delete Button - Repositioned for mobile */}
              <div className="absolute flex md:items-start md:relative bottom-3 right-3 md:left-0 md:right-0 md:bottom-15">
                <button className="cursor-pointer border border-blue-900 text-blue-900 px-2 md:py-1 py-0.5 rounded-sm flex items-center gap-1 text-xs hover:bg-red-50 transition-colors">
                  <img src="/delete.svg" alt="" />
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

