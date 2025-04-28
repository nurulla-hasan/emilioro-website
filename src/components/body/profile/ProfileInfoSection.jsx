"use client";

const ProfileInfoSection = ({ profileData }) => {
  return (
    <div className="text-center mt-2 space-y-1">
      <h1 className="text-xl font-bold">{profileData.name}</h1>
      <p className="text-gray-500">{profileData.bio}</p>
      <p className="text-sm text-gray-400">{profileData.location}</p>
    </div>
  );
};

export default ProfileInfoSection;
