import { Plus } from "lucide-react";


const RelativesSection = ({profileData, setIsDeleteModalOpen, setAddRelativesModal }) => {
  return (
    <>
      <div className="mt-8">
        <div className="mt-12 mb-8">
          {/* Header */}
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center mb-6">
            <h2 className="xl:text-2xl text-lg font-semibold text-primary">Relatives & Relationships</h2>



            <button
              onClick={() => setAddRelativesModal(true)}
              className="bg-gradient-to-b cursor-pointer from-primary to-[#3279EA]  text-white text-sm px-3 py-1.5 rounded-sm flex items-center"
            >
              <Plus size={14} className="mr-1" /> Add New relatives
            </button>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left column - Relatives */}
            <div className="space-y-3 shadow-[0px_19px_48px_1px_#CFC9DDB2] p-4 rounded-lg">
              {profileData.mother_relatives.map((relative, index) => (
                <div key={index} className="flex justify-between items-center bg-[#D5E2F6] p-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        relative.avatar ||
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png" ||
                        "/placeholder.svg"
                      }
                      alt={relative.name}
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png"
                      }}
                    />
                    <div>
                      <p className="text-sm font-medium">{relative.name}</p>
                      <p className="text-xs text-gray-500">{relative.relation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 *:cursor-pointer">
                    <button className="text-primary flex items-center text-xs gap-1">
                      <img src="/messenger.svg" alt="" /> Chat now
                    </button>
                    <button onClick={() => setIsDeleteModalOpen(true)} className="text-red-500">
                      <img src="/delete.svg" alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Extended Relatives */}
            <div className="space-y-3 shadow-[0px_19px_48px_1px_#CFC9DDB2] p-4 rounded-lg">
              {profileData.father_relatives.map((relative, index) => (
                <div key={index} className="flex justify-between items-center bg-[#D5E2F6] p-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        relative.avatar ||
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png" ||
                        "/placeholder.svg"
                      }
                      alt={relative.name}
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yagAwDAq3jXuqR21XdsgROK2UgOfGi.png"
                      }}
                    />
                    <div>
                      <p className="text-sm font-medium">{relative.name}</p>
                      <p className="text-xs text-gray-500">{relative.relation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 *:cursor-pointer">
                    <button className="text-primary flex items-center text-xs gap-1">
                      <img src="/messenger.svg" alt="" /> Chat now
                    </button>
                    <button className="text-red-500">
                      <img onClick={() => setIsDeleteModalOpen(true)} src="/delete.svg" alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelativesSection
