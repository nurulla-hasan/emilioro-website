import JoinInstitutionModal from "./modal/JoinInstituteModal";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AllInstitutionsData } from "@/data/data";

const AllInstitution = () => {
  const pathname = usePathname()
  const isInstitutions = pathname.includes(`/institutions/`);

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()



  return (
    <>

      <div className={`${isInstitutions ? "hidden" : ""} space-y-5 relative`}>
        <div className='grid items-center grid-cols-1 gap-5 mt-10 rounded-lg xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {AllInstitutionsData.map((card) => (
            <div
              key={card.id}
              className="lg:w-full mx-auto flex flex-col gap-2 shadow-[0px_15px_45px_0px_#CFC9DD99] bg-[#FFFFFF] border border-gray-300 rounded-sm"
            >
              <div>
                <img src={card.image || "/placeholder.svg"} alt="image" className="w-full" />
              </div>

              <div className="flex flex-col gap-2 p-3 rounded-b-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className=" text-[#1C4587] text-sm font-semibold">
                      {card.institutionName}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-[#6F6F6F] text-xs">{card.description}</p>

                  <div className="flex flex-col gap-2">
                    {/* <div className="flex items-center justify-between">
                      <h5 className="text-[13px] text-gray-800 font-semibold">Group A</h5>
                      <h5 className="text-[13px] text-gray-800 font-semibold">Group B</h5>
                    </div> */}
                    <div className="flex items-center justify-between">
                      <h5 className="text-[13px] text-gray-800 font-semibold">{card.skils[0]}</h5>
                      <h5 className="text-[13px] text-gray-800 font-semibold">{card.skils[1]}</h5>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="flex items-center justify-center gap-1 text-[13px] font-semibold">
                        <img className="w-4" src="/participants.svg" alt="" />
                        <span className="text-[10px] text-gray-500">{card.participant1} Participents</span>
                      </h5>
                      <h5 className="flex items-center justify-center gap-1 text-[13px] font-semibold">
                        <img className="w-4" src="/participants.svg" alt="" />
                        <span className="text-[10px] text-gray-500">{card.participant2} Participents</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <button
                    onClick={() => router.push(`/institutions/${card.id}`)}
                    className="px-4 py-[7px] flex-1/2 items-center cursor-pointer bg-white rounded-xs font-medium border border-[#1C4587] text-[#1C4587] text-xs outline-none focus:ring-0"
                  >
                    Open
                  </button>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer flex-1/2 bg-button text-white px-4 py-2 rounded-xs font-medium text-xs outline-none focus:ring-0"
                  >
                    Join Institution
                  </button>
                </div>
              </div>
            </div>
          ))}
          <JoinInstitutionModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <div className={`${isInstitutions ? "" : "hidden"} space-y-5 relative`}>
        <div className='flex flex-col gap-2 mx-auto border rounded-sm overflow-hidden border-gray-300 lg:w-full p-2'>
          {AllInstitutionsData.map((card) => (
            <div
              key={card.id}
              className="lg:w-full mx-auto flex flex-col gap-2 bg-[#FFFFFF] rounded-sm border border-gray-200"
            >
              <div className="flex flex-col gap-2 p-3 rounded-b-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className=" text-[#1C4587] text-sm font-semibold">
                      {card.institutionName}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    {/* <div className="flex items-center justify-between">
                      <h5 className="text-[10px] text-gray-800 font-semibold">Group A</h5>
                      <h5 className="text-[10px] text-gray-800 font-semibold">Group B</h5>
                    </div> */}
                    <div className="flex items-center justify-between">
                      <h5 className="text-[10px] text-gray-800 font-semibold">{card.skils[0]}</h5>
                      <h5 className="text-[10px] text-gray-800 font-semibold">{card.skils[1]}</h5>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="flex items-center justify-center gap-1 text-[10px] font-semibold">
                        <img className="w-4" src="/participants.svg" alt="" />
                        <span className="text-[10px] text-gray-500">{card.participant1} Participents</span>
                      </h5>
                      <h5 className="flex items-center justify-center gap-1 text-[10px] font-semibold">
                        <img className="w-4" src="/participants.svg" alt="" />
                        <span className="text-[10px] text-gray-500">{card.participant2} Participents</span>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  <button
                    onClick={() => router.push(`/institutions/${card.id}`)}
                    className="py-1 flex-1/2 items-center cursor-pointer bg-white rounded-xs font-medium border border-[#1C4587] text-[#1C4587] text-[10px] outline-none focus:ring-0"
                  >
                    Open
                  </button>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer flex-1/2 bg-button text-white py-1 rounded-xs font-medium text-[10px] outline-none focus:ring-0"
                  >
                    Join Institution
                  </button>
                </div>
              </div>
            </div>
          ))}
          <JoinInstitutionModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

    </>
  );
};

export default AllInstitution;