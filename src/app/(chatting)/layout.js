import Navbar from "@/components/header/Navbar";


export default function ChattingLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
