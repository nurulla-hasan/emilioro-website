"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiLogOut, FiMenu, FiSearch, FiX } from "react-icons/fi";
import LoginModal from "../../authentication/login/LoginModal";
import SignUpModal from "../../authentication/signUp/SignUpModal";
import ForgotPasswordModal from "../../authentication/forgotPassword/ForgotPassModal";
import VerifyCodeModal from "../../authentication/verify/VerifyCodeModal";
import SuccessModal from "../../authentication/success/SuccessModal";
import ResetPasswordModal from "../../authentication/resetPass/ResetPasswordModal";
import { useDispatch, useSelector } from "react-redux";
import { logout, setIsSignUpOpen } from "@/store/mainSlice";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotPassModalOpen, setIsForgotPassModalOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const dispatch = useDispatch();
  const isSignUpOpen = useSelector((state) => state.main.isSignUpOpen);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const user = useSelector((state) => state.main.user);

  const handleLogout = () => {
    dispatch(logout());
    setMenuOpen(false);
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Donate Us", href: "/donate-us" },
    { title: "Bonds", href: "/bonds" },
    { title: "Objects", href: "/objects" },
    { title: "Institutions", href: "/institutions" },
    { title: "Message", href: "/message" },
    { title: "We are chatting", href: "/chatting" },
  ];
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <div className="bg-primary sticky top-0 z-50">
      <nav className="z-50 py-6 px-2 md:px-0 max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Mobile nav structure: Logo Left, Menu Toggle Right */}
        <div className="flex items-center justify-between w-full xl:w-auto">
          {/* Logo (always on left for mobile) */}
          <div className="flex flex-col justify-center">
            <Link href="/">
              <div className="md:h-7 lg:h-8 border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-[100%] p-2">
                <div className="lg:w-2 w-2 lg:h-2 h-2 rounded-full bg-[#22B14C]"></div>
                <div className="lg:w-12 w-8 h-2 rounded-full bg-[#FFF200]"></div>
                <div className="lg:w-2 w-2 lg:h-2 h-2 rounded-full bg-[#ED1C24]"></div>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button (always on right for mobile) */}
          <div className="xl:hidden cursor-pointer bg-[#4080c1] rounded-full p-1 text-white flex justify-end text-xl">
            <span onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</span>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-full rounded-r-2xl w-64 bg-primary shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-50 lg:hidden
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center mb-6">
            {/* Sidebar Logo */}
            <Link href="/">
              <div className="h-10 border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-[100%] p-2">
                <div className="w-2 h-2 rounded-full bg-[#22B14C]"></div>
                <div className="w-8 h-2 rounded-full bg-[#FFF200]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ED1C24]"></div>
              </div>
            </Link>
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white focus:outline-none p-2"
              aria-label="Close mobile menu"
            >
              <FiX size={22} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 px-4 rounded-md text-sm font-medium transition-colors
                    ${pathname === link.href ? "bg-[#4080c1] text-white" : "text-white hover:bg-[#4080c1]/80"}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Search Input (added inside sidebar) */}
          <div className="mb-4">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full border text-gray-100 border-gray-300 text-[10px] md:text-xs shadow-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-300 bg-white" // Added bg-white for visibility
                style={{ color: '#000' }} // Ensures text color is black
              />
            </div>
          </div>


          {/* User specific actions inside mobile sidebar */}
          {user ? (
            <div className="mt-3 mb-5 space-y-4">
              <Link href="/profile">
                <button
                  onClick={() => setMenuOpen(false)} // মেনু বন্ধ হবে
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white hover:bg-[#4080c1]/80 rounded-md"
                >
                  <CgProfile size={20} color="#fff" /> Profile
                </button>
              </Link>
              <Link href="/chatting/favorite">
                <button
                  onClick={() => setMenuOpen(false)} // মেনু বন্ধ হবে
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white hover:bg-[#4080c1]/80 rounded-md"
                >
                  <FaRegHeart size={20} color="#fff" /> Favorite
                </button>
              </Link>
              <Link href="/chatting/allPlaylist/myPlaylist">
                <button
                  onClick={() => setMenuOpen(false)} // মেনু বন্ধ হবে
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white hover:bg-[#4080c1]/80 rounded-md"
                >
                  <img src="/playlist.svg" alt="" className="w-5 h-5" /> Playlist
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-red-400 hover:bg-[#4080c1]/80 rounded-md"
              >
                <FiLogOut size={20} className="text-red-400" /> Log out
              </button>
            </div>
          ) : (
            <div className="ml-0 mt-3 mb-5 space-y-4">
              <button
                onClick={() => {
                  setIsLoginModalOpen(true);
                  setMenuOpen(false); // মেনু বন্ধ হবে
                }}
                className="text-white text-[14px] font-semibold border border-white px-6 py-[6px] rounded-md transition cursor-pointer w-full text-left"
              >
                Login
              </button>
              <button
                onClick={() => {
                  dispatch(setIsSignUpOpen(true));
                  setMenuOpen(false); // মেনু বন্ধ হবে
                }}
                className="text-[14px] font-semibold bg-gradient-to-t from-primary to-[#3279EA] border text-white px-6 py-[6px] rounded-md cursor-pointer w-full text-left"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden xl:flex justify-center items-center gap-5">
          {navLinks.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className={`inline-block  text-white lg:px-3 py-2 transition ${
                  pathname === link.href ? "font-semibold" : "font-[300]"
                }`}
              >
                <span className="text-sm">{link.title}</span>
              </Link>
            </div>
          ))}
          <div className="md:flex justify-center hidden">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 py-2 rounded-full border text-gray-100 border-gray-300 text-[10px] md:text-xs shadow-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        {user ? (
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative">
            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <img src={"/avatar.png"} alt="User Avatar" className="w-10 h-10 rounded-full" />
              <img src="/down.svg" alt="" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg *:rounded-lg border border-gray-300">
                <Link href="/profile">
                  <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:rounded-lg">
                    <CgProfile size={20} color="#1C4587" className="text-blue-600" /> Profile
                  </button>
                </Link>
                <Link href="/chatting/favorite">
                  <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                    <FaRegHeart size={20} color="#1C4587" className="text-gray-700" /> Favorite
                  </button>
                </Link>
                <Link href="/chatting/all-playlist/my-playlist">
                  <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                    <img src="/playlist.svg" alt="" /> Playlist
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-red-600 hover:bg-gray-100"
                >
                  <FiLogOut size={20} className="text-black" /> Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden xl:flex gap-3">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="text-white text-sm font-medium border border-white px-6 py-[6px] rounded-full transition cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => dispatch(setIsSignUpOpen(true))}
              className="text-sm font-medium bg-gradient-to-t from-primary to-[#3279EA] border text-white px-6 py-[6px] rounded-full cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        )}

        {/* --------------------------- */}
        {/* Login Modal */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          setIsSignUpOpen={() => dispatch(setIsSignUpOpen(true))}
          setIsForgotPassModalOpen={setIsForgotPassModalOpen}
        />
        {/* SignUp Modal */}
        <SignUpModal
          isOpen={isSignUpOpen}
          onClose={() => dispatch(setIsSignUpOpen(false))}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
        {/* Forgot Pass Modal */}
        <ForgotPasswordModal
          isOpen={isForgotPassModalOpen}
          onClose={() => setIsForgotPassModalOpen(false)}
          setIsVerifyModalOpen={setIsVerifyModalOpen}
        />
        {/* Verify Modal */}
        <VerifyCodeModal
          isOpen={isVerifyModalOpen}
          onClose={() => setIsVerifyModalOpen(false)}
          setIsResetModalOpen={setIsResetPasswordModalOpen}
        />
        {/* Reset Modal */}
        <ResetPasswordModal
          isOpen={isResetModalOpen}
          onClose={() => setIsResetPasswordModalOpen(false)}
          setIsSuccessModalOpen={setIsSuccessModalOpen}
        />
        {/* Success Modal */}
        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      </nav>
    </div>
  );
};

export default Navbar;