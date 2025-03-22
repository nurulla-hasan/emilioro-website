"use client"

import Image from "next/image"
import wave2 from "../../../public/wave (2).png"
import wave3 from "../../../public/wave (3).png"
import heroImage from "../../../public/heroImage.png"
import { motion } from "framer-motion"
import { setIsSignUpOpen } from "@/store/mainSlice"
import { useDispatch, useSelector } from "react-redux"

const Hero = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.main.user);
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

    <div className="bg-[#1C4587] px-5">
      <motion.section
        initial="hidden"
        animate="visible"
        className="mx-auto lg:w-8/11 md:h-[calc(100vh-88px)] h-[calc(100vh-64px)] flex lg:flex-row flex-col text-white items-center justify-center text-center relative overflow-hidden "
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} className=" h-full lg:text-start flex flex-col justify-center items-start flex-1 z-10 lg:-mt-[200px]">
          <div className="bg ">
            <motion.h1 variants={fadeInUp} className=" text-5xl md:text-7xl font-bold">
              Bankybondy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-[#E3E3E3] mt-5 font-[300]">
              We are what we do together
            </motion.p>

            {
              user ?
                <div>
                  <motion.button
                    variants={scaleIn}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-8 md:px-10 py-2 lg:py-3 border border-white rounded-md text-white hover:bg-white bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition text-md font-semibold"
                  >
                    Explore Now
                  </motion.button>
                </div>
                :
                <div>
                  {/* Signup Button */}
                  <motion.button
                    variants={scaleIn}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => dispatch(setIsSignUpOpen(true))}
                    className="mt-8 px-8 md:px-10 py-2 lg:py-3 border border-white rounded-md text-white hover:bg-white bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition text-sm font-semibold"
                  >
                    Sign Up for free
                  </motion.button>
                </div>
            }
          </div>
        </motion.div>

        {/* Right Content Image */}
        <motion.div variants={fadeIn} className="h-full relative flex-1 z-10 flex md:justify-end items-start md:items-center">
          <motion.div
            variants={scaleIn}
            className="rounded-full"
          >
            <Image
              src={heroImage.src || "/placeholder.svg"}
              alt="Hero Image"
              className="rounded-full object-cover w-64 h-64 sm:w-52 sm:h-52 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              width={400}
              height={400}
            />

          </motion.div>
        </motion.div>


      </motion.section>
      {/* Wave Images */}
      <motion.div variants={waveAnimation} className="absolute right-0 bottom-28 left-0">
        <motion.img variants={waveAnimation} className="absolute" src={wave3.src} alt="Wave 1" />
        <motion.img variants={waveAnimation} className="" src={wave2.src} alt="Wave 3" />
        <motion.img variants={waveAnimation} className="" src={wave2.src} alt="Wave 3" />
      </motion.div>
    </div>
  )
}

export default Hero

