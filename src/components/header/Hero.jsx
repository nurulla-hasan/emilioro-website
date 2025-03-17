"use client"

import Image from "next/image"
import wave2 from "../../../public/wave (2).png"
import wave3 from "../../../public/wave (3).png"
import heroImage from "../../../public/heroImage.png"
import { motion } from "framer-motion"
import { setIsSignUpOpen } from "@/store/mainSlice"
import { useDispatch } from "react-redux"

const Hero = () => {
  const dispatch = useDispatch();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const waveAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-[#1C4587] lg:h-[calc(100vh-80px)] h-[calc(100vh-60px)] flex lg:flex-row flex-col text-white items-center justify-center gap-10 text-center px-6 lg:px-28 relative overflow-hidden "
    >
      {/* Left Content */}
      <motion.div variants={fadeInUp} className="lg:text-start flex flex-col justify-center items-center lg:justify-start mt-0 lg:mt-[-300px] flex-1 z-10 px-32">
        <div>
          <motion.h1 variants={fadeInUp} className=" text-5xl lg:text-7xl font-bold">
            Bankybondy <span className="text-xl lg:text-4xl">We are what we do together</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base lg:text-lg text-[#E3E3E3] mt-5 font-[300]">
            We are chatting
          </motion.p>

          {/* Signup Button */}
          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(setIsSignUpOpen(true))}
            className="mt-8 px-8 lg:px-16 py-2 lg:py-3 border border-white rounded-md text-white hover:bg-white bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition text-[14px] font-semibold"
          >
            Sign Up for free
          </motion.button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div variants={fadeIn} className=" relative flex-1 z-10 flex justify-center">
        <motion.div
          variants={scaleIn}
          className="flex justify-center items-center w-58 h-48 lg:w-[600px] lg:h-[600px] rounded-full"
        >
          <Image
            src={heroImage.src || "/placeholder.svg"}
            alt="Hero Image"
            className="rounded-full object-cover"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>

      {/* Wave Images */}
      <motion.div variants={waveAnimation} className="absolute right-0 bottom-28 left-0">
        <motion.img variants={waveAnimation} className="absolute" src={wave3.src} alt="Wave 1" />
        <motion.img variants={waveAnimation} className="" src={wave2.src} alt="Wave 3" />
        <motion.img variants={waveAnimation} className="" src={wave2.src} alt="Wave 3" />
      </motion.div>
    </motion.section>
  )
}

export default Hero

