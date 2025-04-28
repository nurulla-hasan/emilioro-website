import { Camera } from "lucide-react"
import Link from "next/link";
import TiptapEditor from "./editor/TiptapEditor";

const HeaderSection = ({coverPhotoInputRef, handleCoverPhotoUpload, profilePhotoInputRef , handleProfilePhotoUpload, profileData }) => {
  return (
    <>
      {/* Hidden file inputs */}
      <input
        type="file"
        ref={coverPhotoInputRef}
        onChange={handleCoverPhotoUpload}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={profilePhotoInputRef}
        onChange={handleProfilePhotoUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Cover Photo */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={profileData.profile.cover_photo || "/placeholder.svg"}
          alt="Cover"
          className="w-full h-48 md:h-64 object-cover"
        />
        <button
          className="absolute cursor-pointer top-4 right-4 bg-white rounded-full p-2 shadow-sm"
          onClick={() => coverPhotoInputRef.current.click()}
        >
          <Camera size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-between relative -mt-10 md:-mt-10 px-5">
        <div className="">
          <div className="relative inline-block ">
            <img
              src={profileData.mother_photo || "/placeholder.svg"}
              alt="Mother"
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
            <div className="text-center text-sm font-semibold">
              <h1 className="text-[#1C4587]">Mother</h1>
            </div>
          </div>
        </div>
        <div className="-mt-8">
          <div className="relative inline-block">
            <img
              src={
                profileData.profile.profile_picture ||
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={profileData.profile.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <button
              className="absolute cursor-pointer bottom-2 right-2 bg-white rounded-full p-1.5 shadow-sm"
              onClick={() => profilePhotoInputRef.current.click()}
            >
              <Camera size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="">
          <div className="relative inline-block ">
            <img
              src={profileData.father_photo || "/placeholder.svg"}
              alt="Father"
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
            <div className="text-center text-sm font-semibold">
              <h1 className="text-[#1C4587]">Father</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-4 ">
        <div className="flex flex-col gap-3 w-full items-center justify-center text-center">
          <div className="relative">
            <h1 className="text-2xl font-bold text-[#1C4587]">{profileData.profile.name}</h1>

            {/* only for profile owner */}
            <Link className="absolute top-2 right-7" href="/profile/editProfile">
              <img src="/edit.svg" alt="" />
            </Link>
            {/* ------------------- */}

            {/* if request A friend */}
            <div className="hidden">
              <div className="flex gap-3 items-center justify-center mt-2">
                <button className="border cursor-pointer border-[#1C4587] text-[#1C4587] gap-1 flex items-center bg-white text-xs px-2 py-0.5 rounded-sm">
                  {" "}
                  Reject
                </button>
                <button className="bg-gradient-to-b cursor-pointer from-[#1C4587] to-[#3279EA] gap-1 flex items-center text-white text-xs px-2 py-[3px] rounded-sm">
                  Accept
                </button>
                <img onClick={() => setModal(true)} className="w-5 h-5 cursor-pointer" src="/requestMenu.svg" alt="" />
              </div>
            </div>
            {/* --------------- */}

            {/* only for not friend profile view */}
            <div className="hidden">
              <div className="flex gap-3 items-center justify-center mt-2">
                <button className="border cursor-pointer border-[#1C4587] text-[#1C4587] gap-1 flex items-center bg-white text-xs px-2 py-0.5 rounded-sm">
                  {" "}
                  Follow
                </button>
                <button className="bg-gradient-to-b cursor-pointer from-[#1C4587] to-[#3279EA] gap-1 flex items-center text-white text-xs px-2 py-[3px] rounded-sm">
                  Add Friend
                </button>
              </div>
            </div>
            {/* --------------- */}

            <div className="flex gap-2 mt-2">
              {profileData.profile.tags.map((tag, index) => (
                <span key={index} className="bg-blue-50 text-[#1C4587] text-xs px-3 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col justify-center items-center text-center">
          <p className="text-gray-800 text-sm">{profileData.profile.followers}k Followers</p>
        </div>

        <div className="mt-6">
          <div>
            {/* Only for profile owner */}
            <div className="shadow-md rounded-sm">
              <TiptapEditor bio={profileData.profile.bio} />
            </div>

            {/* for others profile */}
            <div className="hidden">
              <p className="text-md text-gray-500 text-sm w-4/5 text-center mx-auto mt-2">{profileData.profile.bio}</p>
            </div>
            {/* ------------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;