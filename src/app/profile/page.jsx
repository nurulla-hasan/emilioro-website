"use client"
import { useState, useRef } from "react"
import { Plus, Camera } from "lucide-react"
import TiptapEditor from "@/components/body/profile/editor/TiptapEditor"
import Link from "next/link"
import SocialAccountModal from "../../components/body/profile/modal/SocialAccountModal"
import DeleteConfirmationModal from "../../components/body/profile/modal/DeleteConfirmationModal"
import AddRelativesModal from "../../components/body/profile/modal/AddRelativesModal"
import ReportModal from "@/components/body/profile/modal/ReportModal"
import EditModal from "@/components/body/profile/modal/EditdModal"

const ProfilePage = () => {
  // Added refs for file inputs
  const coverPhotoInputRef = useRef(null)
  const profilePhotoInputRef = useRef(null)
  const motherPhotoInputRef = useRef(null)
  const fatherPhotoInputRef = useRef(null)

  const [profileData, setProfileData] = useState({
    profile: {
      name: "Mr. Jhon",
      username: "jhon_doe",
      bio: "I still remember the excitement and nervousness bubbling inside me as I stepped off the plane at Kansai International Airport. It was my first-ever solo trip, and Japan had always been a dream destination. With my backpack strapped on, I took a deep breath, ready to embrace the adventure ahead. ❤️",
      followers: 8.1,
      profile_picture: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cover_photo:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Artist", "Musician", "Vlogger"],
    },
    mother_photo: "/mother.jpg",
    father_photo: "/father.jpg",
    social_links: [
      {
        platform: "Instagram",
        url: "https://instagram.com/jhon_oz",
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/jhon_oz",
      },
    ],
    friends: [
      { id: 1, name: "MR. Sarwar", role: "Artist", avatar: "/heroImage.png" },
      { id: 2, name: "MR. Fahad", role: "Engineer", avatar: "/heroImage.png" },
      { id: 3, name: "Ahmad Musa", role: "Emam", avatar: "/heroImage.png" },
      { id: 4, name: "MR. TA Emon", role: "Biker", avatar: "/heroImage.png" },
      { id: 5, name: "MR. Mehehi", role: "Artist", avatar: "/heroImage.png" },
      { id: 6, name: "MR. Dindinia", role: "Artist", avatar: "/heroImage.png" },
      { id: 7, name: "MR. Nahid", role: "Scientist", avatar: "/heroImage.png" },
      { id: 8, name: "Ahmad Mus", role: "Emam", avatar: "/heroImage.png" },
    ],
    father_relatives: [
      { name: "Mrs. Nahid", relation: "Grandma", avatar: "/heroImage.png" },
      { name: "MR. Dindiniya", relation: "Aunt", avatar: "/heroImage.png" },
      { name: "MR. Fahad", relation: "Cousin", avatar: "/heroImage.png" },
    ],
    mother_relatives: [
      { name: "Ahmad Musa", relation: "Grandpa", avatar: "/heroImage.png" },
      { name: "Mr. Aman", relation: "Uncle", avatar: "/heroImage.png" },
      { name: "Yolanda", relation: "Aunt", avatar: "/heroImage.png" },
    ],
  })

  const [isSocialAccountModalOpen, setIsSocialAccountModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [addRelativesModal, setAddRelativesModal] = useState(false)
  const [modal, setModal] = useState(false)

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0)
  const [editedUrl, setEditedUrl] = useState("")

  // Handle file uploads
  const handleCoverPhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfileData({
        ...profileData,
        profile: {
          ...profileData.profile,
          cover_photo: imageUrl,
        },
      })

      // Here you would typically upload the file to your server
      // const formData = new FormData()
      // formData.append('coverPhoto', file)
      // fetch('/api/upload-cover-photo', { method: 'POST', body: formData })
    }
  }

  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfileData({
        ...profileData,
        profile: {
          ...profileData.profile,
          profile_picture: imageUrl,
        },
      })

      // Here you would typically upload the file to your server
      // const formData = new FormData()
      // formData.append('profilePhoto', file)
      // fetch('/api/upload-profile-photo', { method: 'POST', body: formData })
    }
  }


  const handleEditClick = (index) => {
    setSelectedLinkIndex(index)
    setEditedUrl(profileData.social_links[index].url)
    setIsEditModalOpen(true)
  }

  const handleSave = () => {
    const updatedLinks = [...profileData.social_links]
    updatedLinks[selectedLinkIndex].url = editedUrl
    setProfileData({
      ...profileData,
      social_links: updatedLinks,
    })
    // Here you would typically save to your API
  }

  return (
    <div className="xl:w-8/11 lg:w-10/12 px-5 my-5 mx-auto">
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
                <button className="border border-[#1C4587] text-[#1C4587] gap-1 flex items-center bg-white text-xs px-2 py-0.5 rounded-sm">
                  {" "}
                  Reject
                </button>
                <button className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] gap-1 flex items-center text-white text-xs px-2 py-[3px] rounded-sm">
                  Accept
                </button>
                <img onClick={() => setModal(true)} className="w-5 h-5 cursor-pointer" src="/requestMenu.svg" alt="" />
              </div>
            </div>
            {/* --------------- */}

            {/* only for not friend profile view */}
            <div className="hidden">
              <div className="flex gap-3 items-center justify-center mt-2">
                <button className="border border-[#1C4587] text-[#1C4587] gap-1 flex items-center bg-white text-xs px-2 py-0.5 rounded-sm">
                  {" "}
                  Follow
                </button>
                <button className="bg-gradient-to-b from-[#1C4587] to-[#3279EA] gap-1 flex items-center text-white text-xs px-2 py-[3px] rounded-sm">
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

      {/* Social Links */}
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

      {/* Friends */}
      <div className="mt-8">
        {/* Friends Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="xl:text-2xl text-xl font-semibold text-[#1C4587]">Friends</h2>
            <Link href="/profile/friends" className="text-[#1C4587] text-sm hover:underline">
              view more
            </Link>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-2 gap-y-4 md:w-3/4 mx-auto">
            {profileData.friends.map((friend, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className=" rounded-full border border-gray-200 overflow-hidden mb-2">
                  <img
                    src={
                      friend.avatar ||
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wFgfsFe9yFppBiQ9HxG5BtxnZXMP61.png" ||
                      "/placeholder.svg"
                    }
                    alt={friend.name}
                    className=" object-cover w-12 h-12"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wFgfsFe9yFppBiQ9HxG5BtxnZXMP61.png"
                    }}
                  />
                </div>
                <p className="text-xs font-medium text-center">{friend.name}</p>
                <p className="text-xs text-gray-500 text-center">{friend.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Relatives & Relationships */}
      <div className="mt-8">
        <div className="mt-12 mb-8">
          {/* Header */}
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center mb-6">
            <h2 className="xl:text-2xl text-lg font-semibold text-[#1C4587]">Relatives & Relationships</h2>



            <button
              onClick={() => setAddRelativesModal(true)}
              className="bg-gradient-to-b cursor-pointer from-[#1C4587] to-[#3279EA]  text-white text-sm px-3 py-1.5 rounded-sm flex items-center"
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
                    <button className="text-[#1C4587] flex items-center text-xs gap-1">
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
                  <div className="flex items-center gap-2">
                    <button className="text-[#1C4587] flex items-center text-xs gap-1">
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

      {/* Modal Component */}
      <SocialAccountModal isOpen={isSocialAccountModalOpen} onClose={() => setIsSocialAccountModalOpen(false)} />

      {/* Delete Modal */}
      {isDeleteModalOpen && <DeleteConfirmationModal onClose={() => setIsDeleteModalOpen(false)} />}

      {/* Add Relative Modal */}
      <AddRelativesModal isOpen={addRelativesModal} onClose={() => setAddRelativesModal(false)} />

      <ReportModal isOpen={modal} onClose={() => setModal(false)} />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editedUrl={editedUrl}
        setEditedUrl={setEditedUrl}
        onSave={handleSave}
      />
    </div>
  )
}

export default ProfilePage

