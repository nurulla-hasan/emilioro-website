"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Donate Us", href: "/donateUs" },
    { title: "Bonds", href: "/bonds" },
    { title: "Object", href: "/object" },
    { title: "Institution", href: "/institution" },
    { title: "Message", href: "/message" },
    { title: "We are chatting", href: "/chatting" },
  ];

  return (
    <nav className="bg-[#1C4587] z-50 py-4 px-6 md:px-0 flex lg:justify-center justify-between items-center relative">
      {/* Logo */}
      <div className="h-[35px] border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-[100%] p-2">
        <div className="w-[11px] h-[11px] rounded-full bg-[#22B14C]"></div>
        <div className="w-10 h-[10px] rounded-full bg-[#FFF200]"></div>
        <div className="w-[11px] h-[11px] rounded-full bg-[#ED1C24]"></div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Items */}
      <div
        className={`absolute lg:static top-16 left-0 w-full lg:justify-center lg:w-2/4 bg-[#1C4587] md:bg-transparent md:flex md:space-x-0 ${menuOpen ? "block" : "hidden"
          }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`block sticky md:inline-block text-white lg:px-3 px-6 py-2 md:py-0 transition ${pathname === link.href ? "font-semibold" : "font-[300]"
              }`}
          >
            {link.title}
          </Link>
        ))}

        <div className="ml-6 mt-3 mb-5 md:hidden space-x-4">
          <button className="text-white text-[14px] font-semibold border border-white px-6 py-[6px] rounded-md transition cursor-pointer">
            Login
          </button>
          <button className="text-[14px] font-semibold bg-gradient-to-t from-[#1C4587] to-[#3279EA] border text-white px-6 py-[6px] rounded-md cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Buttons */}

      <div className="hidden lg:flex space-x-4">
        <button className="text-white text-[14px] font-semibold border border-white px-6 py-[6px] rounded-md transition cursor-pointer">
          Login
        </button>
        <button className="text-[14px] font-semibold bg-gradient-to-t from-[#1C4587] to-[#3279EA] border text-white px-6 py-[6px] rounded-md cursor-pointer">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
