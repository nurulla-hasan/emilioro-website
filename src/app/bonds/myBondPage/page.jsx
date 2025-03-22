"use client";
import { useState } from "react";
import BondRequest from "@/components/body/bonds/bondRequest/BondRequest";
import OngoingBond from "@/components/body/bonds/ongoingBond/OngoingBond";
import CompletedBond from "@/components/body/bonds/completedBond/CompletedBond";
import MyBond from "@/components/body/bonds/myBond/MyBond";

const MyBondPage = () => {
    const [selectedOption, setSelectedOption] = useState("My Bond");

    const renderSection = () => {
        switch (selectedOption) {
            case "My Bond":
                return (
                    <div className="w-full rounded-sm mt-5">
                        <MyBond />
                    </div>
                );

            case "Bond Request":
                return (
                    <div className="w-full rounded-sm mt-5">
                        <BondRequest />
                    </div>
                );

            case "Ongoing Bond":
                return (
                    <div className="w-full rounded-sm mt-5">
                        <OngoingBond />
                    </div>
                );

            case "Completed Bond":
                return (
                    <div className="w-full rounded-sm mt-5">
                        <CompletedBond />
                    </div>
                );

            default:
                return <div>No section available</div>;
        }
    };

    return (
        <div className=" xl:w-8/11 lg:w-10/12 p-5 mx-auto mt-10 relative">
            <div className="absolute right-5 top-9 ">
                <div className="border p-2 border-[#D6D6D6] rounded-lg flex">
                    <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="border-none outline-0 cursor-pointer text-[#595D62] bg-white font-normal border border-[#1C4587] rounded-lg text-sm"
                    >
                        <option value="My Bond">My Bond</option>
                        <option value="Bond Request">Bond Request</option>
                        <option value="Ongoing Bond">Ongoing Bond</option>
                        <option value="Completed Bond">Completed Bond</option>
                    </select>
                </div>
            </div>

            {/* Render content based on selected option */}
            <section>
                <div>{renderSection()}</div>
            </section>
        </div>
    );
};

export default MyBondPage;
