
import Link from 'next/link';

const trendingData = [
  {
    id: 1,
    title: "Family Conversation",
    audioCount: "3k+ audio",
    image: "/trading1.png",
  },
  {
    id: 2,
    title: "Friends Conversation",
    audioCount: "3k+ audio",
    image: "/trading2.png",
  },
  {
    id: 3,
    title: "Travel Conversation",
    audioCount: "3k+ audio",
    image: "/trading3.png",
  },
];

const TrendingTopics = () => {
  return (
    <section className="mx-auto my-16 xl:w-8/11 lg:w-10/12 w-5/6 lg:px-5">
      {/* Header */}
      <div className="flex items-center justify-between my-5">
        <h2 className="lg:text-xl text-sm font-bold text-[#1C4587]">Trending topics
        </h2>
        <Link href="/chatting/allTopics" className="text-[#1C4587] text-sm lg:text-md font-medium">
          View all
        </Link>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:justify-between justify-items-center items-center">
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1C4587] w-full rounded-sm flex p-2 gap-3 items-center text-white"
          >
            <div>
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-[150px] bg-white object-cover rounded-md"
              />
            </div>
            <div>

              <div>
                {/* Title */}
                <h3 className="text-xs font-semibold mb-1">{item.title}</h3>

                {/* Audio Count */}
                <p className="text-xs font-[300] mb-4">{item.audioCount}</p>

              </div>
              {/* Button */}
              <Link href="/chatting/allTopics/familyConversion/audio">
                <button className="border mt-8 border-white px-3 py-1 rounded-md hover:bg-white hover:text-[#1C4587] text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition">
                  Listen Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTopics;
