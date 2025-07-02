"use client"
import { motion } from "framer-motion"
import { setIsSignUpOpen } from "@/store/mainSlice"
import { useDispatch, useSelector } from "react-redux"
import { FiSearch } from "react-icons/fi";
// import Inter font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


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

    <div className="bg-primary px-5">
      <motion.section
        initial="hidden"
        animate="visible"
        className="mx-auto lg:w-8/11 md:h-[calc(100vh-88px)] h-[calc(100vh-64px)] flex text-white items-center justify-center text-center relative overflow-hidden"
      //  lg:flex-row flex-col
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} className="h-[60%]  z-10 ">
          {/*flex-1 h-full lg:text-start flex flex-col justify-center items-start lg:-mt-[200px] */}
          <div className="bg ">
            <motion.h1 variants={fadeInUp} className={`${inter.className} text-5xl md:text-7xl font-extrabold`}>
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
                    className="mt-8 px-8 md:px-10 py-2 lg:py-3 cursor-pointer border border-white rounded-full text-white hover:bg-white bg-button transition text-md font-semibold"
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
                    className="mt-8 px-8 md:px-10 py-2 lg:py-3 cursor-pointer border border-white rounded-full text-white bg-button transition text-sm font-semibold"
                  >
                    Sign Up for free
                  </motion.button>
                </div>
            }
          </div>
        </motion.div>

        {/* Right Content Image */}


      </motion.section>
      {/* Wave Images */}
      <motion.div variants={waveAnimation} className="absolute right-0 bottom-20 left-0">
        <motion.img variants={waveAnimation} className="absolute" src='/wave (3).png' alt="Wave 1" />
        <motion.img variants={waveAnimation} className="absolut" src='/wave (2).png' alt="Wave 3" />
        <motion.img variants={waveAnimation} className="absolut" src='/wave (3).png' alt="Wave 3" />
      </motion.div>
    </div>
  )
}

export default Hero

