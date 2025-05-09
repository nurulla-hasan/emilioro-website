import { useState } from "react";
import { motion } from 'framer-motion';
import { myInstitutions } from "@/data/data";
import MyInstitutionItem from "./MyInstitutionItem";
import { usePathname } from "next/navigation";

const MyInstitution = ({ setSelectedCardUserProject }) => {


    const pathname = usePathname()
    const isInstitutions = pathname.includes(`/institutions/`);

    const [status, setStatus] = useState("Created");


    const filteredCards = myInstitutions?.filter(card =>
        card.status.includes(status)
    );

    return (
        <div className="relative">
            <div className={`${isInstitutions ? "hidden" : ""} space-y-5 relative`}>
                <motion.div
                    className='w-fit absolute -top-10 md:-top-16 md:right-0 right-32 border border-[#1C4587] px-1 rounded-sm bg-white'
                    whileHover={{ scale: 1.05 }}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <select
                        className='text-xs outline-none py-[2px] md:py-[6px] text-[#595D62]'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Created">Created</option>
                        <option value="Joined">Joined</option>
                    </select>
                </motion.div>
                <div>
                    <div className='mt-13.5 md:mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                        {
                            filteredCards.map((card, i) => (
                                <MyInstitutionItem key={i} card={card} />
                            ))
                        }

                    </div>
                </div>

            </div>


            {/* for details page */}
            <div className={`${isInstitutions ? "" : "hidden"} space-y-5 relative`}>
                <div
                    className='w-fit absolute -top-8 right-0 bg-white'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <select
                        className='text-[10px] outline-none text-[#595D62] border border-[#1c45877c] rounded-xs'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Created">Created</option>
                        <option value="Joined">Joined</option>
                    </select>
                </div>
                <div>
                    <div className='flex flex-col gap-2 mx-auto border rounded-sm overflow-hidden border-gray-300 lg:w-full relative p-2'>
                        {
                            filteredCards.map((card, i) => (
                                <MyInstitutionItem key={i} card={card} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInstitution;