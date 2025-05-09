'use client'
import Navbar from "@/components/header/Navbar";
import { Providers } from "@/store/providers";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";



export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const hideFooterRoutes = ['/', '/donate-us', '/chatting'];
    const hideFooter = hideFooterRoutes.includes(pathname);
    return (
        <Providers>
            <Navbar />
            <div className="container max-w-full mx-auto min-h-[calc(100vh-88px)]">
                {children}
            </div>
            {
                !hideFooter && <Footer />
            }
        </Providers>
    );
}
