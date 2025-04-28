import Link from 'next/link';
import React from 'react';

const FriendsSection = ({ profileData }) => {
  return (
    <>
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
    </>
  );
};

export default FriendsSection;
