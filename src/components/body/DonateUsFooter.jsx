import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const DonateUsFooter = () => {
    return (
        <footer className="bg-[#1a4585] text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-center justify-items-center text-center md:text-left">
                {/* Logo and Description */}
                <div className="space-y-4 relative">
                    <div className="flex justify-center md:justify-start gap-3 items-center">
                        <div className="border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-full p-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-[#22B14C]"></div>
                            <div className="w-10 h-[10px] rounded-full bg-[#FFF200]"></div>
                            <div className="w-[11px] h-[11px] rounded-full bg-[#ED1C24]"></div>
                        </div>
                        <h2 className="text-xl font-bold">Bankybondy</h2>
                    </div>
                    <p className="text-xs text-gray-200 md:absolute md:top-8 md:left-36">We are chatting</p>
                    <p className="text-sm font-[300] mt-4 md:mt-12 mx-auto md:mx-0 max-w-xs">
                        A free platform for sharing and exploring daily life conversations. Enjoy authentic audio snippets from real
                        people, and if you&apos;d like to support us, donations are always appreciated.
                    </p>
                </div>

                {/* Information Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 md:mb-6">Information</h3>
                    <nav className="flex flex-col space-y-3 *:text-sm">
                        <Link href="/donate" className="hover:underline">
                            Donate us
                        </Link>
                        <Link href="/contact" className="hover:underline">
                            Contact us
                        </Link>
                        <Link href="/about" className="hover:underline">
                            About Us
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            Terms and Conditions
                        </Link>
                        <Link href="/privacy" className="hover:underline">
                            Privacy policy
                        </Link>
                    </nav>
                </div>

                {/* Social Media */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 md:mb-6">Social media</h3>
                    <div className="flex flex-col space-y-3 *:text-sm items-center md:items-start">
                        <Link href="https://facebook.com" className="flex items-center space-x-2 hover:underline">
                            <div className="bg-[#1877F2] rounded-full p-1.5">
                                <Facebook className="w-3 h-3 text-white" />
                            </div>
                            <span>Facebook</span>
                        </Link>
                        <Link href="https://instagram.com" className="flex items-center space-x-2 hover:underline">
                            <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full p-1.5">
                                <Instagram className="w-3 h-3 text-white" />
                            </div>
                            <span>Instagram</span>
                        </Link>
                        <Link href="https://twitter.com" className="flex items-center space-x-2 hover:underline">
                            <div className="bg-black rounded-full p-1.5">
                                <Twitter className="w-3 h-3 text-white" />
                            </div>
                            <span>Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DonateUsFooter;
