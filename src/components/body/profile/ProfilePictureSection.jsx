"use client";

import { Camera } from "lucide-react";

const ProfilePictureSection = ({ profileData, profilePhotoInputRef, setProfileData }) => {
  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData(prev => ({ ...prev, profilePicture: imageUrl }));
    }
  };

  return (
    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white -mt-14 mx-auto">
      <img
        src={profileData.profilePicture}
        alt="Profile"
        className="object-cover w-full h-full"
      />
      <div
        onClick={() => profilePhotoInputRef.current?.click()}
        className="absolute right-0 bottom-0 bg-black/60 text-white rounded-full p-1 cursor-pointer"
      >
        <Camera className="h-4 w-4" />
      </div>
      <input
        ref={profilePhotoInputRef}
        onChange={handleProfilePhotoChange}
        type="file"
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ProfilePictureSection;
