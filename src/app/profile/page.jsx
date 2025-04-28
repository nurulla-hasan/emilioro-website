"use client"
import { useState, useRef } from "react"
import SocialAccountModal from "../../components/body/profile/modal/SocialAccountModal"
import DeleteConfirmationModal from "../../components/body/profile/modal/DeleteConfirmationModal"
import AddRelativesModal from "../../components/body/profile/modal/AddRelativesModal"
import ReportModal from "@/components/body/profile/modal/ReportModal"
import EditModal from "@/components/body/profile/modal/EditdModal"
import Container from "@/components/home/Container"
import { profile } from "@/data/data"
import HeaderSection from "@/components/body/profile/HeaderSection"
import SocialLinksSection from "@/components/body/profile/SocialLinksSection"
import FriendsSection from "@/components/body/profile/FriendsSection"
import RelativesSection from "@/components/body/profile/RelativesSection"

const ProfilePage = () => {
  // Added refs for file inputs
  const coverPhotoInputRef = useRef(null)
  const profilePhotoInputRef = useRef(null)
  // const motherPhotoInputRef = useRef(null)
  // const fatherPhotoInputRef = useRef(null)

  const [profileData, setProfileData] = useState(profile)

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

      // Here you would typically upload the file to
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
    <Container>
      {/* header section */}
      <HeaderSection
        coverPhotoInputRef={coverPhotoInputRef}
        handleCoverPhotoUpload={handleCoverPhotoUpload}
        profilePhotoInputRef={profilePhotoInputRef}
        handleProfilePhotoUpload={handleProfilePhotoUpload}
        profileData={profileData}
      />

      {/* Social Links */}
      <SocialLinksSection
        profileData={profileData}
        setIsSocialAccountModalOpen ={setIsSocialAccountModalOpen }
        setIsDeleteModalOpen ={setIsDeleteModalOpen }
        handleEditClick ={handleEditClick }
      />

      {/* Friends */}
      <FriendsSection
        profileData={profileData}
      />

      {/* Relatives & Relationships */}
      <RelativesSection
        profileData={profileData}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
    setAddRelativesModal ={setAddRelativesModal }
      />

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
    </Container>
  )
}

export default ProfilePage

