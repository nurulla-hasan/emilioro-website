
"use client";
import JoinedProject from "@/components/body/object/JoinedProject";
import MyProject from "@/components/body/object/MyProject";
export default function Layout({ children }) {


    return (
        <>
            <div className="p-1">

                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:px-2 h-[calc(100vh-88px)] overflow-hidden shadow-md border-gray-300">
                    {/* sidebar  */}
                    <div className="lg:w-[600px] py-2 hidden md:block">
                        <div className="h-full p-2 overflow-y-auto border border-gray-300 rounded-xs hide-scrollbar">
                            <div className="mb-6">
                                <h1 className='text-center text-sm font-semibold mb-2'>
                                    My Project
                                </h1>
                                <MyProject />
                            </div>
                            <div className="">
                                <h1 className='text-center text-sm font-semibold mb-2'>
                                    Joined Project
                                </h1>
                                <JoinedProject />
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="overflow-y-auto hide-scrollbar w-full">
                        {children} 
                    </div>
                </div>
            </div>
        </>
    );
}
