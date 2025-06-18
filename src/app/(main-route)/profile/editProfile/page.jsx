"use client"
import ChangePassword from "@/components/body/profile/editor/ChangePassword";
import EditProfile from "@/components/body/profile/editor/EditProfile";
import Container from "@/components/home/Container";
import { useState } from "react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <Container>
      {/* Tab Buttons */}
      <div className="flex gap-5 justify-center items-center mx-auto">
        <button
          className={`pb-1 font-semibold md:text-md text-sm transition-all duration-300 cursor-pointer ${
            activeTab === "editProfile"
              ? "text-[#1C4587] border-b-2 border-[#1C4587]"
              : "text-gray-500 hover:text-[#1C4587]"
          }`}
          onClick={() => setActiveTab("editProfile")}
        >
          Edit Profile
        </button>
        <button
          className={`pb-1 font-semibold md:text-md text-sm transition-all duration-300 cursor-pointer ${
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
    </Container>
  );
};

export default ProfileSettings;