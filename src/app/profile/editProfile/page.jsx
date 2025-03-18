"use client"
import ChangePassword from "@/components/body/profile/editor/ChangePassword";
import EditProfile from "@/components/body/profile/editor/EditProfile";
import { useState } from "react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <div className="lg:w-5/6 xl:w-6/9 px-5 mt-20 mx-auto">
      {/* Tab Buttons */}
      <div className="flex gap-5 justify-center items-center mx-auto">
        <button
          className={`pb-1 font-semibold md:text-lg text-sm transition-all duration-300 ${
            activeTab === "editProfile"
              ? "text-[#1C4587] border-b-2 border-[#1C4587]"
              : "text-gray-500 hover:text-[#1C4587]"
          }`}
          onClick={() => setActiveTab("editProfile")}
        >
          Edit Profile
        </button>
        <button
          className={`pb-1 font-semibold md:text-lg text-sm transition-all duration-300 ${
            activeTab === "changePassword"
              ? "text-[#1C4587] border-b-2 border-[#1C4587]"
              : "text-gray-500 hover:text-[#1C4587]"
          }`}
          onClick={() => setActiveTab("changePassword")}
        >
          Change Password
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "editProfile" ? (
          <div>
            <EditProfile/>
          </div>
        ) : (
          <div>
            <ChangePassword/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;