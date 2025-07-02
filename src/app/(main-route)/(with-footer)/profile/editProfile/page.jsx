"use client"
import ChangePassword from "@/components/body/profile/editor/ChangePassword";
import EditProfile from "@/components/body/profile/editor/EditProfile";
import Container from "@/components/layout/Container";
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
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-primary"
          }`}
          onClick={() => setActiveTab("editProfile")}
        >
          Edit Profile
        </button>
        <button
          className={`pb-1 font-semibold md:text-md text-sm transition-all duration-300 cursor-pointer ${
            activeTab === "changePassword"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-primary"
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