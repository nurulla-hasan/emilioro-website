import React from 'react';

const SocialLinksSection = ({profileData, setIsSocialAccountModalOpen, setIsDeleteModalOpen, handleEditClick  }) => {
  return (
    <>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#1C4587]">Social Links</h2>
          <button
            onClick={() => setIsSocialAccountModalOpen(true)}
            className="bg-gradient-to-b from-[#1C4587] to-[#2570e9] cursor-pointer gap-1 flex items-center text-white text-sm px-4 py-1.5 rounded-sm"
          >
            + Add Social account
          </button>
        </div>
        <div className="space-y-3">
          {profileData.social_links.map((socialLink, index) => (
            <div key={index} className="flex justify-between items-center">
              <a href={socialLink.url} className="text-gray-600 text-sm hover:underline flex items-center">
                <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full">
                  <img src="/fb.svg" alt="" className={index === 1 ? "w-7 h-7" : ""} />
                </div>
                {socialLink.url}
              </a>
              <div className="flex gap-2 *:cursor-pointer">
                <button onClick={() => setIsDeleteModalOpen(true)} className="text-red-500">
                  <img src="/delete.svg" alt="" />
                </button>
                <button onClick={() => handleEditClick(index)} className="text-blue-800">
                  <img src="/edit.svg" alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialLinksSection;