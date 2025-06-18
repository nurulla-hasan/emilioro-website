import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";


export default function ChattingLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-108px)]">
                {children}
            </div>
            <Footer />
        </>
    );
}
