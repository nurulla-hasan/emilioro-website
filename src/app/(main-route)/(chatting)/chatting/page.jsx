"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { CiSearch } from "react-icons/ci"
import MostPlayedSection from "@/components/slider/MostPlayedSection"
import TrendingTopics from "@/components/body/TrendingTopics"
import ConversationList from "@/components/body/ConversationList"
import { FaMicrophone, FaStop } from "react-icons/fa"
import AudioPlayer from "@/components/body/favorite/audio/AudioPlayer"

const ChattingPage = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioList, setAudioList] = useState([]); 
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleMicrophoneClick = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
          const url = URL.createObjectURL(audioBlob);

          setAudioList(prevList => [...prevList, { id: Date.now(), url }]); 
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Microphone access denied!", error);
      }
    } else {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="px-5 my-5 md:px-8">
      <div>
        <div className="flex flex-col items-start justify-between gap-4 mb-5 md:flex-row md:items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary ">Real conversation between people</h1>
          <div className="flex flex-col items-start w-full gap-4 md:flex-row md:items-center md:w-auto">
            <div className="relative flex items-center border border-primary rounded-sm px-3 py-1.5 w-full md:w-auto">
              <CiSearch className="text-primary" size={16} />
              <input
                type="text"
                placeholder="Search institute"
                className="ml-2 outline-none text-sm text-[#07398a] w-full"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-button text-white px-5 py-[7px] rounded-sm text-sm font-semibold w-full md:w-auto cursor-pointer"
            >
              + Upload New Audio
            </motion.button>

            <button onClick={handleMicrophoneClick} className="cursor-pointer focus:outline-none">
              {isRecording ? (
                <FaStop color="red" size={30} />
              ) : (
                <FaMicrophone color="#1C4587" size={30} />
              )}
            </button>
          </div>
        </div>

        {/* 🔹 ALL AUDIO IN UI */}
        {audioList.length > 0 && (
          <div className="flex flex-col w-full mx-auto mt-5">
            <h3 className="text-primary font-semibold mb-2">Recorded Audios:</h3>
            <div className="grid grid-cols-2 gap-5">
              {audioList.map((audio) => (
                <div key={audio.id} className="flex items-center gap-3 justify-items-center">
                  <span className="text-sm text-primary">Audio {audioList.indexOf(audio) + 1}:</span>
                  <audio controls src={audio.url} className="w-full md:w-96" />
                </div>
              ))}
            </div>
          </div>
        )}

        <MostPlayedSection />
        <div className="mt-10">
          <TrendingTopics />
        </div>
        <ConversationList />


      </div>
      
    </div>
  );
};

export default ChattingPage;
