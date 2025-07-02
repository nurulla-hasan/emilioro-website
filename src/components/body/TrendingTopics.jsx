
import { trendingData } from '@/data/data';
import Link from 'next/link';

const TrendingTopics = () => {
  return (
    <section className="">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="lg:text-xl font-bold text-primary">Trending topics
        </h2>
        <Link href="/chatting/all-topics" className="text-primary text-sm lg:text-md font-medium">
          View all
        </Link>
      </div>

      {/* Cards */}
      <div className="grid items-center grid-cols-1 gap-2 mt-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 lg:justify-between justify-items-center">
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="bg-primary w-full rounded-sm flex p-2 gap-3 items-center text-white"
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
                <h3 className="mb-1 text-xs font-semibold">{item.title}</h3>

                {/* Audio Count */}
                <p className="text-xs font-[300] mb-4">{item.audioCount}</p>

              </div>
              {/* Button */}
              <Link href="/chatting/all-topics/family-conversion/audio">
                <button className="border mt-8 border-white px-3 py-1 rounded-sm cursor-pointer text-xs bg-button transition">
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
