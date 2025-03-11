"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Donate Us", href: "/donateUs" },
    { title: "Bonds", href: "/bonds" },
    { title: "Object", href: "/object" },
    { title: "Institution", href: "/institution" },
    { title: "Message", href: "/message" },
    { title: "We are chatting", href: "/chatting" },
  ]

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  return (
    <nav className="bg-[#1C4587] z-50 py-4 px-6 md:px-0 flex lg:justify-center justify-between items-center relative">
      {/* Logo */}
      <motion.div initial="hidden" animate="visible" variants={logoVariants}>
        <Link href="/">
          <div className="h-[35px] border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-[100%] p-2">
            <div className="w-[11px] h-[11px] rounded-full bg-[#22B14C]"></div>
            <div className="w-10 h-[10px] rounded-full bg-[#FFF200]"></div>
            <div className="w-[11px] h-[11px] rounded-full bg-[#ED1C24]"></div>
          </div>
        </Link>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </motion.button>

      {/* Menu Items */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="absolute top-16 left-0 w-full bg-[#1C4587] md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={menuItemVariants}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-white px-6 py-2 transition ${
                    pathname === link.href ? "font-semibold" : "font-[300]"
                  }`}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={menuItemVariants} className="ml-6 mt-3 mb-5 space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-[14px] font-semibold border border-white px-6 py-[6px] rounded-md transition cursor-pointer"
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[14px] font-semibold bg-gradient-to-t from-[#1C4587] to-[#3279EA] border text-white px-6 py-[6px] rounded-md cursor-pointer"
              >
                Sign Up
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu Items */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={menuVariants}
        className="hidden md:flex lg:justify-center lg:w-2/4"
      >
        {navLinks.map((link, index) => (
          <motion.div key={index} variants={menuItemVariants}>
            <Link
              href={link.href}
              className={`inline-block text-white lg:px-3 py-2 transition ${
                pathname === link.href ? "font-semibold" : "font-[300]"
              }`}
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop Buttons */}
      <motion.div className="hidden lg:flex space-x-4" initial="hidden" animate="visible" variants={buttonVariants}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white text-[14px] font-semibold border border-white px-6 py-[6px] rounded-md transition cursor-pointer"
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[14px] font-semibold bg-gradient-to-t from-[#1C4587] to-[#3279EA] border text-white px-6 py-[6px] rounded-md cursor-pointer"
        >
          Sign Up
        </motion.button>
      </motion.div>
    </nav>
  )
}

export default Navbar

