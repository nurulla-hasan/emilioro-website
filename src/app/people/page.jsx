"use client";
import Link from "next/link";

const PeoplePage = () => {
  const profileData = {
    users: [
      { id: 1, name: "MR. Sarwar", role: "Artist", avatar: "/heroImage.png", followers: 120, isVerified: true, isOnline: true },
      { id: 2, name: "MR. Fahad", role: "Engineer", avatar: "/heroImage.png", followers: 85, isVerified: false, isOnline: false },
      { id: 3, name: "Ahmad Musa", role: "Emam", avatar: "/heroImage.png", followers: 300, isVerified: true, isOnline: true },
      { id: 4, name: "MR. TA Emon", role: "Biker", avatar: "/heroImage.png", followers: 200, isVerified: false, isOnline: false },
      { id: 5, name: "MR. Mehehi", role: "Artist", avatar: "/heroImage.png", followers: 150, isVerified: true, isOnline: true },
      { id: 6, name: "MR. Dindinia", role: "Artist", avatar: "/heroImage.png", followers: 75, isVerified: false, isOnline: false },
      { id: 7, name: "MR. Nahid", role: "Scientist", avatar: "/heroImage.png", followers: 180, isVerified: true, isOnline: true },
      { id: 8, name: "Ahmad Mus", role: "Emam", avatar: "/heroImage.png", followers: 220, isVerified: false, isOnline: false },
    ],
  };

  return (
    <div className="xl:w-8/11 lg:w-10/12 px-5 my-10 mx-auto">
      <div className="mt-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="lg:text-xl text-lg font-semibold text-[#1C4587]">People</h2>
          <a href="#" className="text-[#1C4587] text-sm hover:underline">
            View More
          </a>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto">
          {profileData.users.map((user) => (
            <Link key={user.id} href={`/friendRequest/${user.id}`}>
              <div className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                {/* Avatar with Online/Offline Badge */}
                <div className="relative">
                  <img src={user.avatar} className="w-16 h-16 rounded-full border" alt={user.name} />
                  <span
                    className={`absolute bottom-1 right-1 w-3 h-3 rounded-full ${
                      user.isOnline ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                </div>

                {/* Name + Verified Badge */}
                <div className="flex items-center gap-1 mt-2">
                  <p className="text-md font-medium">{user.name}</p>
                  {user.isVerified && <span className="text-blue-500 text-sm">✔️</span>}
                </div>

                {/* Role & Followers */}
                <p className="text-sm text-gray-500">{user.role}</p>
                <p className="text-xs text-gray-400">{user.followers} Followers</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
