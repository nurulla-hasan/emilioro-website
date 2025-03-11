import Link from 'next/link';
import image from '../../../public/browse.png'
import { RiTeamLine } from "react-icons/ri";


const EcoFriendlyCards = () => {
  const data = {
    cards: [
      {
        id: "1",
        title: "Eco-Friendly Packaging",
        status: ["Ongoing", "Public"],
        description: "Develop sustainable packaging solutions using biodegradable materials dsjh.",
        author: "MR. Sarwar",
        authorRole: ["Owner"],
        image: image,
        participant: "10"
      },
      {
        id: "2",
        title: "Recyclable Materials",
        status: ["Ongoing", 'Public'],
        description: "Use recyclable materials to create packaging that can be reused multiple times.",
        author: "MR. Ahmed",
        authorRole: ["Owner"],
        image: image,
        participant: "10"
      },
      {
        id: "3",
        title: "Minimalist Design",
        status: ['Ongoing', 'Public'],
        description: "Implement minimalist design principles to reduce waste and improve efficiency.",
        author: "MS. Fatima",
        authorRole: ["Owner"],
        image: image,
        participant: "10"
      }
    ]
  };

  return (
    <div className="mx-auto my-16 lg:w-3/4 w-5/6 lg:px-5">

      <div className="flex items-center justify-between mx-auto">

        <h1 className="lg:text-2xl text-lg my-5 font-bold text-blue-900">Browse & Join Project</h1>
        <Link href="#" className="text-[#1C4587] text-sm font-medium">
          View all
        </Link>
      </div>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-lg'>
        {data.cards.map((card) => (
          <div key={card.id} className='flex flex-col gap-2 shadow-[0px_0px_33px_14px_#ebf4ff]'>
            <div>
              <img
                src={card.image.src}
                alt='image'
              >
              </img>
            </div>

            <div className='flex flex-col gap-2 bg-[#FFFFFF] shadow-2xl p-3 rounded-b-sm'>
              <div className='flex justify-between items-center'>
                <div className="text-sm text-[#1C4587] font-semibold mb-1">
                  {card.title}
                </div>
                <div>
                  <div className="flex items-center gap-1">

                    <div className="flex items-center gap-1">
                      <p className="bg-[#9A9A9A33] rounded-sm px-1 py-[1] text-[#1C4587] text-[10px] font-normal">{card.status[0]}</p>
                      <p className="bg-[#9A9A9A33] rounded-sm px-1 py-[1] text-[#1C4587] text-[10px] font-normal">{card.status[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-[#6F6F6F] text-sm'>{card.description}</p>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <img className='rounded-full w-[30px] h-[30px]' src={card.image.src} alt="image" />
                    <div>
                      <h5 className='text-[13px] text-gray-800'>{card.author}</h5>
                      <p className='text-[10px] text-gray-500'>{card.authorRole}</p>
                    </div>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <RiTeamLine color='#1C4587' />
                    <div className='flex gap-1 items-center text-[#6F6F6F] text-sm'>
                      <p>{card.participant}</p>
                      <p>Participents</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center mt-4'>
                <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white text-xs px-4 py-2 rounded-lg font-medium">
                  Request to join
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoFriendlyCards;