
"use client";
import MyProject from "@/components/body/object/MyProject";
export default function Layout({ children }) {


    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:px-5 h-[calc(100vh-88px)] overflow-hidden">

                {/* sidebar  */}
                <div className="lg:w-[600px] py-2">
                    <div className="h-full p-2 overflow-y-auto border border-gray-300 rounded-md hide-scrollbar">
                        <MyProject/>
                    </div>
                </div>

                {/* Main content */}
                <div className="overflow-y-auto hide-scrollbar">
                    {children}
                </div>
            </div>
        </>
    );
}
