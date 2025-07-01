import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";


export default function ChattingLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-108px)]">
                {children}
            </div>
            {/* <Footer /> */}
        </>
    );
}
