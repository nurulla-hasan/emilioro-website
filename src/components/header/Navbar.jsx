"use client";
import Link from "next/link";

const Navbar = () => {

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
    <nav className="bg-[#1C4587] py-4 px-6 flex justify-center gap-18 items-center">
      {/* Logo */}
      <div className="h-[35px] border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-[100%] p-2">
        <div className="w-[11px] h-[11px] rounded-full bg-[#22B14C]"></div>
        <div className="w-10 h-[10px] rounded-full bg-[#FFF200]"></div>
        <div className="w-[11px] h-[11px] rounded-full bg-[#ED1C24]"></div>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-white hover:font-semibold font-[300] text-[15px] transition"
          >
            {link.title} {/* এখানে `link` না দিয়ে `link.title` ব্যবহার করতে হবে */}
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="space-x-4">
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
