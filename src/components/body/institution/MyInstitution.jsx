
import { useState } from "react";
import { motion } from 'framer-motion';
import { myInstitutions } from "@/data/data";
import MyInstitutionItem from "./MyInstitutionItem";

const MyInstitution = ({ setSelectedCardUserProject }) => {
    const [status, setStatus] = useState("Created");
    

    const filteredCards = myInstitutions?.filter(card =>
        card.status.includes(status)
    );

    return (
        <div className="relative">
            <motion.div
                className='absolute -top-11 right-[40%] md:-top-[71px] md:right-0 border border-[#1C4587] px-1 rounded-sm bg-white'
                whileHover={{ scale: 1.05 }}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <select
                    className='text-xs text outline-none py-[6px] text-[#595D62]'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Created">Created</option>
                    <option value="Joined">Joined</option>
                </select>
            </motion.div>
            <div className='mt-13.5 md:mt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
                {
                    filteredCards.map((card, i) => (
                        <MyInstitutionItem  key={i} card={card}/>
                    ))
                }
               
            </div>
        </div>
    );
};

export default MyInstitution;